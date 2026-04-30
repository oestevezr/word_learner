import { Lightbulb } from 'lucide-react'

interface HintPanelProps {
  hints: [string, string, string]
  hintCount: number
  onRevealHint: () => void
}

export default function HintPanel({ hints, hintCount, onRevealHint }: HintPanelProps) {
  return (
    <div className="flex flex-col gap-3">
      {hintCount > 0 && (
        <div className="flex flex-col gap-2">
          {hints.slice(0, hintCount).map((hint, i) => (
            <div
              key={i}
              className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3"
            >
              <Lightbulb size={16} className="text-amber-500 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-800">{hint}</p>
            </div>
          ))}
        </div>
      )}

      {hintCount < 3 && (
        <button
          onClick={onRevealHint}
          className="text-sm font-medium text-accent-500 hover:text-accent-600 underline underline-offset-2 self-start transition-colors"
        >
          Show hint {hintCount + 1} of 3
        </button>
      )}

      {hintCount === 3 && (
        <p className="text-xs text-gray-400">All hints revealed</p>
      )}
    </div>
  )
}
