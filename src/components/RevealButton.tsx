import { Eye } from 'lucide-react'

interface RevealButtonProps {
  onReveal: () => void
  revealed: boolean
}

export default function RevealButton({ onReveal, revealed }: RevealButtonProps) {
  if (revealed) return null

  return (
    <button
      onClick={onReveal}
      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors border border-gray-200 rounded-xl px-4 py-2.5"
    >
      <Eye size={16} />
      Show answer
    </button>
  )
}
