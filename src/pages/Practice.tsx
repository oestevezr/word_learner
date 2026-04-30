import { useEffect, useState } from 'react'
import { useAppStore } from '@/store/useAppStore'
import ExerciseCard from '@/components/ExerciseCard'
import { words } from '@/data/words'
import { PartyPopper, RefreshCw } from 'lucide-react'

export default function Practice() {
  const session = useAppStore((s) => s.session)
  const buildTodaySession = useAppStore((s) => s.buildTodaySession)
  const recordAttempt = useAppStore((s) => s.recordAttempt)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    buildTodaySession()
  }, [buildTodaySession])

  if (!session) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-400 text-sm">Loading session…</p>
      </div>
    )
  }

  const { wordIds, completed } = session
  const sessionDone = wordIds.length > 0 && completed.length >= wordIds.length

  if (wordIds.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 px-6 pt-20 text-center">
        <PartyPopper size={40} className="text-accent-500" />
        <h2 className="text-xl font-bold">All caught up!</h2>
        <p className="text-gray-500 text-sm">No words due today. Come back tomorrow.</p>
      </div>
    )
  }

  if (sessionDone) {
    const correct = Object.values(session.scores).filter((s) => s === 1).length
    const withHints = Object.values(session.scores).filter((s) => s === 2).length
    const revealed = Object.values(session.scores).filter((s) => s === 3).length

    return (
      <div className="flex flex-col items-center gap-6 px-6 pt-14 text-center">
        <PartyPopper size={48} className="text-accent-500" />
        <h2 className="text-2xl font-bold">Session complete!</h2>
        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-card p-6 flex flex-col gap-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Total words</span>
            <span className="font-semibold">{wordIds.length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Correct (no hints)</span>
            <span className="font-semibold text-green-600">{correct}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Used hints</span>
            <span className="font-semibold text-amber-600">{withHints}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Revealed</span>
            <span className="font-semibold text-gray-500">{revealed}</span>
          </div>
        </div>
        <button
          onClick={() => { buildTodaySession(); setCurrentIndex(0) }}
          className="flex items-center gap-2 border border-gray-200 rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <RefreshCw size={16} />
          New session
        </button>
      </div>
    )
  }

  const pendingIds = wordIds.filter((id) => !completed.includes(id))
  const currentWordId = pendingIds[Math.min(currentIndex, pendingIds.length - 1)]
  const currentWord = words.find((w) => w.id === currentWordId)
  const progress = completed.length
  const total = wordIds.length

  if (!currentWord) return null

  const handleComplete = (score: 1 | 2 | 3) => {
    recordAttempt(currentWordId, score)
    const nextIndex = pendingIds.indexOf(currentWordId) + 1
    setCurrentIndex(nextIndex)
  }

  return (
    <div className="flex flex-col gap-5 px-4 pt-6">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between text-xs text-gray-400 font-medium">
          <span>Today's session</span>
          <span>{progress} / {total}</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-500 rounded-full transition-all duration-500"
            style={{ width: `${total > 0 ? (progress / total) * 100 : 0}%` }}
          />
        </div>
      </div>

      <ExerciseCard
        key={currentWordId}
        word={currentWord}
        onComplete={handleComplete}
      />
    </div>
  )
}
