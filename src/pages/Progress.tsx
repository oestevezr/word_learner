import { useAppStore } from '@/store/useAppStore'
import ProgressRing from '@/components/ProgressRing'
import { words } from '@/data/words'
import { Flame } from 'lucide-react'

export default function Progress() {
  const getStats = useAppStore((s) => s.getStats)
  const records = useAppStore((s) => s.records)
  const stats = getStats()

  const masteredPct = stats.total > 0 ? Math.round((stats.mastered / stats.total) * 100) : 0

  const recentMastered = Object.values(records)
    .filter((r) => r.status === 'mastered')
    .sort((a, b) => (b.nextReview > a.nextReview ? 1 : -1))
    .slice(0, 8)
    .map((r) => words.find((w) => w.id === r.wordId))
    .filter(Boolean)

  return (
    <div className="flex flex-col gap-6 px-4 pt-6">
      <h1 className="text-2xl font-bold">Progress</h1>

      <div className="flex items-center gap-5 bg-white border border-gray-200 rounded-2xl shadow-card p-5">
        <ProgressRing value={masteredPct} size={88} />
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-bold">{stats.mastered} mastered</p>
          <p className="text-sm text-gray-500">out of {stats.total} words</p>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl shadow-card p-4">
        <Flame size={24} className="text-orange-500" />
        <div>
          <p className="text-xl font-bold">{stats.streak} day streak</p>
          <p className="text-xs text-gray-400">Keep it going!</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-card overflow-hidden">
        <div className="px-5 pt-5 pb-3 font-semibold text-sm text-gray-700">Word status</div>
        {[
          { label: 'New', count: stats.newCount, color: '#94a3b8' },
          { label: 'Learning', count: stats.learning, color: '#d97706' },
          { label: 'Mastered', count: stats.mastered, color: '#16a34a' },
          { label: 'Due today', count: stats.dueToday, color: '#6366f1' }
        ].map(({ label, count, color }) => (
          <div key={label} className="flex justify-between items-center px-5 py-3 border-t border-gray-100">
            <span className="text-sm text-gray-600">{label}</span>
            <span className="text-sm font-semibold" style={{ color }}>{count}</span>
          </div>
        ))}
      </div>

      {recentMastered.length > 0 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-gray-700">Recently mastered</h2>
          <div className="flex flex-wrap gap-2">
            {recentMastered.map((word) => (
              <span
                key={word!.id}
                className="text-sm font-medium px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-card text-gray-700"
              >
                {word!.phrase}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
