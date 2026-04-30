#!/usr/bin/env python3
"""
json-to-ts.py  –  Validate a JSON word-batch and convert it to TypeScript.

Usage:
  python scripts/json-to-ts.py input.json [--out src/data/categories/travel.ts] [--append]

JSON input format (array of objects):
[
  {
    "id": "trv_001",
    "phrase": "bon voyage",
    "meaning": "A farewell wish for a pleasant journey",
    "level": "B1",
    "category": "Travel",
    "source": "French origin, widely used in English",
    "sentences": [
      { "text": "We gathered to say ___ to the departing crew.", "blank": "bon voyage", "context": "Farewell party" },
      { "text": "The captain wished everyone ___ before the voyage.", "blank": "bon voyage", "context": "Nautical farewell" },
      { "text": "She sent a ___ card to her friend moving abroad.", "blank": "bon voyage", "context": "International move" }
    ],
    "hints": ["French farewell", "Means 'good journey'", "Used at going-away parties"]
  }
]

Validation rules:
  - All required fields present (id, phrase, meaning, level, category, source, sentences, hints)
  - level is one of: A2, B1, B2, C1, C2
  - category is one of the known categories
  - sentences is exactly 3 items, each with text/blank/context
  - hints is exactly 3 strings
  - blank appears in text for every sentence
  - No duplicate IDs within the batch OR against existing category files in src/data/categories/

Options:
  --out PATH       Output file path (default: inferred from category name)
  --append         Append to existing file instead of overwriting (adds to array)
  --dry-run        Validate only, do not write output
  --check-all      Also cross-check IDs against ALL category TS files
"""

import argparse
import json
import re
import sys
from pathlib import Path

# ── Config ──────────────────────────────────────────────────────────────────

VALID_LEVELS = {"A2", "B1", "B2", "C1", "C2"}

VALID_CATEGORIES = {
    "Daily Life",
    "Idioms",
    "Phrasal Verbs",
    "Academic",
    "Business",
    "Tech",
    "Collocations",
    "Travel",
    "Health",
    "Environment",
    "Food & Cooking",
}

CATEGORY_FILE_MAP = {
    "Daily Life":    "daily-life.ts",
    "Idioms":        "idioms.ts",
    "Phrasal Verbs": "phrasal-verbs.ts",
    "Academic":      "academic.ts",
    "Business":      "business.ts",
    "Tech":          "tech.ts",
    "Collocations":  "collocations.ts",
    "Travel":        "travel.ts",
    "Health":        "health.ts",
    "Environment":   "environment.ts",
    "Food & Cooking":"food-cooking.ts",
}

# ── Helpers ──────────────────────────────────────────────────────────────────

def escape_ts_string(s: str) -> str:
    """Escape a string for use in a TypeScript double-quoted string literal."""
    return s.replace("\\", "\\\\").replace('"', '\\"')


def collect_existing_ids(categories_dir: Path) -> set[str]:
    """Parse all existing TS category files and extract word IDs."""
    id_pattern = re.compile(r'\bid:\s*"([^"]+)"')
    existing = set()
    for ts_file in categories_dir.glob("*.ts"):
        content = ts_file.read_text(encoding="utf-8")
        for match in id_pattern.finditer(content):
            existing.add(match.group(1))
    return existing


def validate_word(w: dict, index: int, batch_ids: set[str], existing_ids: set[str]) -> list[str]:
    """Return list of error strings for word at given index."""
    errors = []
    prefix = f"[{index}] id={w.get('id', '?')!r}"

    required = ["id", "phrase", "meaning", "level", "category", "source", "sentences", "hints"]
    for field in required:
        if field not in w:
            errors.append(f"{prefix} missing required field: '{field}'")

    if errors:
        return errors  # can't continue without basics

    wid = w["id"]
    if wid in batch_ids:
        errors.append(f"{prefix} duplicate ID within batch")
    elif wid in existing_ids:
        errors.append(f"{prefix} ID already exists in a category file: '{wid}'")
    batch_ids.add(wid)

    if w["level"] not in VALID_LEVELS:
        errors.append(f"{prefix} invalid level '{w['level']}'. Must be one of {sorted(VALID_LEVELS)}")

    if w["category"] not in VALID_CATEGORIES:
        errors.append(f"{prefix} invalid category '{w['category']}'. Must be one of {sorted(VALID_CATEGORIES)}")

    sentences = w.get("sentences", [])
    if not isinstance(sentences, list) or len(sentences) != 3:
        errors.append(f"{prefix} 'sentences' must be an array of exactly 3 items (got {len(sentences) if isinstance(sentences, list) else type(sentences).__name__})")
    else:
        for si, sent in enumerate(sentences):
            for sf in ("text", "blank", "context"):
                if sf not in sent:
                    errors.append(f"{prefix} sentences[{si}] missing field '{sf}'")
            if "text" in sent and "blank" in sent:
                if sent["blank"] not in sent["text"] and "___" not in sent["text"]:
                    errors.append(f"{prefix} sentences[{si}] blank '{sent['blank']}' not found in text")

    hints = w.get("hints", [])
    if not isinstance(hints, list) or len(hints) != 3:
        errors.append(f"{prefix} 'hints' must be an array of exactly 3 strings (got {len(hints) if isinstance(hints, list) else type(hints).__name__})")
    else:
        for hi, hint in enumerate(hints):
            if not isinstance(hint, str):
                errors.append(f"{prefix} hints[{hi}] must be a string")

    return errors


def word_to_ts(w: dict) -> str:
    """Convert a validated word dict to a TypeScript object literal string."""
    def s(v): return f'"{escape_ts_string(v)}"'

    sentences_ts = "\n".join(
        f"      {{ text: {s(sent['text'])}, blank: {s(sent['blank'])}, context: {s(sent['context'])} }},"
        for sent in w["sentences"]
    )
    hints_ts = ", ".join(s(h) for h in w["hints"])

    return f"""  {{
    id: {s(w['id'])},
    phrase: {s(w['phrase'])},
    meaning: {s(w['meaning'])},
    level: {s(w['level'])},
    category: {s(w['category'])},
    source: {s(w['source'])},
    sentences: [
{sentences_ts}
    ],
    hints: [{hints_ts}],
  }},"""


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Validate JSON word-batch and convert to TypeScript")
    parser.add_argument("input", help="Path to JSON input file")
    parser.add_argument("--out", help="Output TypeScript file path (default: infer from category)")
    parser.add_argument("--append", action="store_true", help="Append words to existing TS file")
    parser.add_argument("--dry-run", action="store_true", help="Validate only, do not write output")
    parser.add_argument("--check-all", action="store_true", help="Cross-check IDs against all existing category files")
    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"ERROR: input file not found: {input_path}", file=sys.stderr)
        sys.exit(1)

    try:
        words = json.loads(input_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        print(f"ERROR: invalid JSON in {input_path}: {e}", file=sys.stderr)
        sys.exit(1)

    if not isinstance(words, list):
        print("ERROR: JSON root must be an array of word objects", file=sys.stderr)
        sys.exit(1)

    # Locate categories directory relative to this script
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    categories_dir = project_root / "src" / "data" / "categories"

    existing_ids: set[str] = set()
    if args.check_all and categories_dir.exists():
        existing_ids = collect_existing_ids(categories_dir)
        print(f"Loaded {len(existing_ids)} existing word IDs from {categories_dir}")

    # Validate all words
    all_errors: list[str] = []
    batch_ids: set[str] = set()
    for i, word in enumerate(words):
        all_errors.extend(validate_word(word, i, batch_ids, existing_ids))

    if all_errors:
        print(f"\n{'='*60}")
        print(f"VALIDATION FAILED — {len(all_errors)} error(s):\n")
        for err in all_errors:
            print(f"  ✗ {err}")
        print(f"{'='*60}\n")
        sys.exit(1)

    print(f"✓ Validated {len(words)} word(s) — no errors")

    if args.dry_run:
        print("Dry run: skipping file output.")
        sys.exit(0)

    # Determine output path
    if args.out:
        out_path = Path(args.out)
    else:
        # Infer from first word's category
        first_cat = words[0]["category"]
        filename = CATEGORY_FILE_MAP.get(first_cat)
        if not filename:
            print(f"ERROR: cannot infer output path for category '{first_cat}'. Use --out.", file=sys.stderr)
            sys.exit(1)
        out_path = categories_dir / filename
        print(f"Inferred output: {out_path}")

    # Generate TS entries
    ts_entries = "\n".join(word_to_ts(w) for w in words)

    if args.append and out_path.exists():
        # Insert before the closing ] of the exported array
        content = out_path.read_text(encoding="utf-8")
        # Find last ']' that closes the array
        close_idx = content.rfind("]")
        if close_idx == -1:
            print("ERROR: could not find closing ']' in existing file. Cannot append.", file=sys.stderr)
            sys.exit(1)
        # Remove trailing whitespace/newlines before ']', insert new entries
        insert_pos = close_idx
        new_content = content[:insert_pos].rstrip() + "\n" + ts_entries + "\n]" + content[close_idx + 1:]
        out_path.write_text(new_content, encoding="utf-8")
        print(f"✓ Appended {len(words)} word(s) to {out_path}")
    else:
        # Determine export name from filename
        stem = out_path.stem  # e.g. "travel", "food-cooking"
        # camelCase: food-cooking → foodCooking
        export_name_parts = stem.split("-")
        export_name = export_name_parts[0] + "".join(p.capitalize() for p in export_name_parts[1:]) + "Words"

        new_content = f"""import type {{ Word }} from '@/types'

export const {export_name}: Word[] = [
{ts_entries}
]
"""
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(new_content, encoding="utf-8")
        print(f"✓ Wrote {len(words)} word(s) to {out_path}")

    sys.exit(0)


if __name__ == "__main__":
    main()
