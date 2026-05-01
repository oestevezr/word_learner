import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'
import { BookOpen, Flame, Star, Zap, ChevronRight } from 'lucide-react'
import type { CSSProperties } from 'react'

const MOTIVATIONAL = [
  'Every word you learn opens a new door.',
  'Consistency beats intensity. Show up today.',
  'Fluency is built one word at a time.',
  'Your future self will thank you.',
  'Small progress is still progress.',
]

function getTodayQuote() {
  const day = new Date().getDay()
  return MOTIVATIONAL[day % MOTIVATIONAL.length]
}

function getStreakFromDates(dates: string[]): number {
  if (dates.length === 0) return 0
  const sorted = [...dates].sort((a, b) => b.localeCompare(a))
  const today = new Date().toISOString().slice(0, 10)
  let streak = 0
  let cursor = new Date(today)
  for (const d of sorted) {
    const expected = cursor.toISOString().slice(0, 10)
    if (d === expected) {
      streak++
      cursor.setDate(cursor.getDate() - 1)
    } else {
      break
    }
  }
  return streak
}

export default function Home() {
  const navigate = useNavigate()
  const stats = useAppStore((s) => s.getStats())
  const session = useAppStore((s) => s.session)
  const streakDates = useAppStore((s) => s.streakDates)
  const settings = useAppStore((s) => s.settings)

  const streak = getStreakFromDates(streakDates)
  const todayDone = session?.completed.length ?? 0
  const todayTotal = session?.wordIds.length ?? stats.dueToday
  const goalProgress = Math.min(todayDone / settings.dailyGoal, 1)
  const quote = getTodayQuote()

  const statCards = [
    { label: 'Streak', value: streak, unit: streak === 1 ? 'day' : 'days', icon: Flame, color: '#f97316', bg: '#fff7ed' },
    { label: 'Mastered', value: stats.mastered, unit: 'words', icon: Star, color: '#6366f1', bg: '#eef2ff' },
    { label: 'Learning', value: stats.learning, unit: 'words', icon: Zap, color: '#eab308', bg: '#fefce8' },
  ]

  return (
    <div className="flex flex-col min-h-full pb-6">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden px-6 pt-12 pb-10"
        style={{ background: 'linear-gradient(135deg, #3730a3 0%, #6366f1 60%, #818cf8 100%)' } as CSSProperties}
      >
        {/* decorative blobs */}
        <div
          className="absolute -top-10 -right-10 w-52 h-52 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 -left-8 w-40 h-40 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
        />

        <div className="relative z-10">
          {/* App logo row */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <BookOpen size={18} className="text-white" strokeWidth={2} />
            </div>
            <span className="text-white/80 text-sm font-semibold tracking-widest uppercase">WordUp</span>
          </div>

          <h1 className="text-3xl font-bold text-white leading-tight mb-2">
            Ready to<br />practice?
          </h1>
          <p className="text-indigo-200 text-sm leading-relaxed mb-8 max-w-[280px]">
            {quote}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/practice')}
            className="flex items-center gap-3 bg-white text-accent-700 font-bold text-base rounded-2xl px-7 py-4 shadow-lg active:scale-95 transition-transform"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.18)' } as CSSProperties}
          >
            <BookOpen size={20} strokeWidth={2.5} />
            Start Practice
            <ChevronRight size={18} className="text-accent-400" />
          </button>

          {/* Today's mini-progress */}
          {todayTotal > 0 && (
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${goalProgress * 100}%` }}
                />
              </div>
              <span className="text-white/70 text-xs font-medium whitespace-nowrap">
                {todayDone} / {settings.dailyGoal} today
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Stat cards ─────────────────────────────────────────────────── */}
      <div className="px-5 mt-5 grid grid-cols-3 gap-3">
        {statCards.map(({ label, value, unit, icon: Icon, color, bg }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 rounded-2xl py-4 px-2"
            style={{ background: bg } as CSSProperties}
          >
            <Icon size={20} style={{ color }} strokeWidth={2} />
            <span className="text-xl font-bold" style={{ color }}>{value}</span>
            <span className="text-xs text-gray-500 text-center leading-tight">{unit}<br />{label.toLowerCase()}</span>
          </div>
        ))}
      </div>

      {/* ── Due today card ─────────────────────────────────────────────── */}
      {stats.dueToday > 0 && todayDone < stats.dueToday && (
        <div
          className="mx-5 mt-4 rounded-2xl border border-accent-100 bg-white p-5 flex items-center gap-4 shadow-card cursor-pointer active:bg-accent-50 transition-colors"
          onClick={() => navigate('/practice')}
        >
          <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
            <Zap size={22} className="text-accent-500" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-800">
              {stats.dueToday - todayDone} word{stats.dueToday - todayDone !== 1 ? 's' : ''} due
            </p>
            <p className="text-xs text-gray-400 mt-0.5">Tap to continue your session</p>
          </div>
          <ChevronRight size={18} className="text-gray-300" />
        </div>
      )}

      {/* ── Word bank shortcut ─────────────────────────────────────────── */}
      <div
        className="mx-5 mt-3 rounded-2xl border border-gray-100 bg-white p-5 flex items-center gap-4 shadow-card cursor-pointer active:bg-gray-50 transition-colors"
        onClick={() => navigate('/wordbank')}
      >
        <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
          <BookOpen size={22} className="text-gray-400" strokeWidth={1.75} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">{stats.total} words in the bank</p>
          <p className="text-xs text-gray-400 mt-0.5">Browse and explore vocabulary</p>
        </div>
        <ChevronRight size={18} className="text-gray-300" />
      </div>

    </div>
  )
}
