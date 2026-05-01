"""
Generate PWA icons for WordUp — 192x192 and 512x512 PNG
Design: indigo gradient bg + geometric bold "W" + vocabulary accent lines
"""

from PIL import Image, ImageDraw
import math
import os

# ── Colour palette ────────────────────────────────────────────────────────────
TOP_COLOR    = (55,  48, 163)   # #3730A3  deep indigo
BTM_COLOR    = (99, 102, 241)   # #6366F1  indigo
SHINE_COLOR  = (129, 140, 248)  # #818CF8  light indigo (diagonal shine)
WHITE        = (255, 255, 255, 255)
WHITE_DIM    = (255, 255, 255, 160)


def lerp_color(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))


def draw_gradient_bg(draw, size):
    """Diagonal gradient: top-left deep indigo → bottom-right bright indigo."""
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * (size - 1))
            r, g, b = lerp_color(TOP_COLOR, BTM_COLOR, t)
            draw.point((x, y), fill=(r, g, b, 255))


def make_rounded_mask(size, radius):
    mask = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    return mask


def draw_shine(draw, size):
    """Subtle top-left elliptical glow for depth."""
    cx = size * 0.30
    cy = size * 0.25
    rx = size * 0.45
    ry = size * 0.30
    for layer in range(8):
        alpha = int(30 * (1 - layer / 8))
        sx = cx - rx * (1 - layer * 0.08)
        sy = cy - ry * (1 - layer * 0.08)
        ex = cx + rx * (1 - layer * 0.08)
        ey = cy + ry * (1 - layer * 0.08)
        draw.ellipse([sx, sy, ex, ey], fill=(255, 255, 255, alpha))


def draw_W(draw, size, alpha=255):
    """
    Draw a bold 'W' as a thick polyline — clean and readable at all sizes.
    """
    sw = int(size * 0.098)  # stroke width
    cx = size / 2
    cy = size / 2 - size * 0.04   # slightly above centre

    W = size * 0.62
    H = size * 0.43

    ytop  = cy - H / 2              # top of letter
    ybot  = cy + H / 2              # bottom valleys
    ypeak = cy + H / 2 - H * 0.44  # centre peak (above valleys)

    xa = cx - W / 2      # outer-left top
    xb = cx - W / 4      # left valley
    xc = cx              # centre peak
    xd = cx + W / 4      # right valley
    xe = cx + W / 2      # outer-right top

    pts = [
        (int(xa), int(ytop)),
        (int(xb), int(ybot)),
        (int(xc), int(ypeak)),
        (int(xd), int(ybot)),
        (int(xe), int(ytop)),
    ]

    draw.line(pts, fill=(255, 255, 255, alpha), width=sw, joint="curve")


def draw_accent_lines(draw, size, alpha=200):
    """Three short rounded lines below the W — suggesting vocabulary entries."""
    line_w  = size * 0.36
    line_h  = size * 0.028
    gap     = size * 0.042
    radius  = line_h / 2
    y_start = size * 0.685

    opacities = [alpha, int(alpha * 0.65), int(alpha * 0.40)]
    widths    = [line_w, line_w * 0.70, line_w * 0.45]

    for i in range(3):
        w = widths[i]
        x0 = size / 2 - w / 2
        x1 = size / 2 + w / 2
        y0 = y_start + i * (line_h + gap)
        y1 = y0 + line_h
        draw.rounded_rectangle([x0, y0, x1, y1],
                               radius=radius,
                               fill=(255, 255, 255, opacities[i]))


def create_icon(size):
    radius = int(size * 0.22)  # ~iOS icon rounding

    # 1. Gradient background (RGBA canvas)
    bg = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    bg_draw = ImageDraw.Draw(bg)
    draw_gradient_bg(bg_draw, size)

    # 2. Shine layer
    shine = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw_shine(ImageDraw.Draw(shine), size)
    bg = Image.alpha_composite(bg, shine)

    # 3. W + accent lines
    art = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    art_draw = ImageDraw.Draw(art)
    draw_W(art_draw, size)
    draw_accent_lines(art_draw, size)
    bg = Image.alpha_composite(bg, art)

    # 4. Apply rounded-rect mask
    mask = make_rounded_mask(size, radius)
    result = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    result.paste(bg, mask=mask)

    return result


def save(img, path):
    # Convert to RGB with white backing for PNGs that don't support RGBA
    final = Image.new("RGBA", img.size, (0, 0, 0, 0))
    final.paste(img)
    final.save(path, "PNG")
    print(f"  ✓  {path}  ({img.size[0]}×{img.size[1]})")


if __name__ == "__main__":
    out_dir = os.path.join(os.path.dirname(__file__), "..", "public", "icons")
    os.makedirs(out_dir, exist_ok=True)

    print("Generating WordUp PWA icons...")
    for size, name in [(512, "icon-512.png"), (192, "icon-192.png"), (180, "apple-touch-icon.png")]:
        icon = create_icon(size)
        save(icon, os.path.join(out_dir, name))

    # Also overwrite favicon.svg with an embedded SVG version for browser tab
    svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3730A3"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)"/>
  <polygon points="
    137,147 172,147 256,323 340,147 375,147
    338,365 302,365 256,261 210,365 174,365"
    fill="white"/>
  <rect x="178" y="385" width="156" height="14" rx="7" fill="white" opacity="0.8"/>
  <rect x="178" y="408" width="110" height="14" rx="7" fill="white" opacity="0.55"/>
  <rect x="178" y="431" width="72"  height="14" rx="7" fill="white" opacity="0.30"/>
</svg>"""

    svg_path = os.path.join(out_dir, "favicon.svg")
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"  ✓  {svg_path}  (SVG)")

    print("Done.")
