import { useState } from 'react'
import { useAppStore } from '@/store/useAppStore'
import type { CefrLevel, WordCategory } from '@/types'
import { ALL_CATEGORIES, ALL_LEVELS } from '@/data/constants'
import { AlertTriangle } from 'lucide-react'

const DAILY_GOAL_OPTIONS = [5, 10, 15, 20, 30]

export default function Settings() {
  const settings = useAppStore((s) => s.settings)
  const updateSettings = useAppStore((s) => s.updateSettings)
  const resetProgress = useAppStore((s) => s.resetProgress)
  const [confirmReset, setConfirmReset] = useState(false)

  const toggleLevel = (level: CefrLevel) => {
    const active = settings.activeLevels
    if (active.includes(level)) {
      if (active.length === 1) return
      updateSettings({ activeLevels: active.filter((l) => l !== level) })
    } else {
      updateSettings({ activeLevels: [...active, level] })
    }
  }

  const toggleCategory = (cat: WordCategory) => {
    const active = settings.activeCategories
    if (active.includes(cat)) {
      if (active.length === 1) return
      updateSettings({ activeCategories: active.filter((c) => c !== cat) })
    } else {
      updateSettings({ activeCategories: [...active, cat] })
    }
  }

  const handleReset = () => {
    resetProgress()
    setConfirmReset(false)
  }

  return (
    <div className="flex flex-col gap-6 px-4 pt-6 pb-10">
      <h1 className="text-2xl font-bold">Settings</h1>

      <section className="bg-white border border-gray-200 rounded-2xl shadow-card p-5 flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-gray-700">Daily goal</h2>
        <div className="flex gap-2 flex-wrap">
          {DAILY_GOAL_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => updateSettings({ dailyGoal: n })}
              className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-colors ${
                settings.dailyGoal === n
                  ? 'bg-accent-500 text-white border-accent-500'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-accent-300'
              }`}
            >
              {n} words
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-2xl shadow-card p-5 flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-gray-700">CEFR levels</h2>
        <div className="flex gap-2 flex-wrap">
          {ALL_LEVELS.map((level) => {
            const active = settings.activeLevels.includes(level)
            return (
              <button
                key={level}
                onClick={() => toggleLevel(level)}
                className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-colors ${
                  active
                    ? 'bg-accent-500 text-white border-accent-500'
                    : 'bg-white text-gray-400 border-gray-200 hover:border-accent-300'
                }`}
              >
                {level}
              </button>
            )
          })}
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-2xl shadow-card p-5 flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-gray-700">Categories</h2>
        <div className="flex flex-col gap-2">
          {ALL_CATEGORIES.map((cat) => {
            const active = settings.activeCategories.includes(cat)
            return (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`flex items-center justify-between text-sm font-medium px-4 py-3 rounded-xl border transition-colors ${
                  active
                    ? 'bg-accent-50 text-accent-700 border-accent-200'
                    : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${active ? 'bg-accent-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  {active ? 'ON' : 'OFF'}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-2xl shadow-card p-5 flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-gray-700">Data</h2>
        {!confirmReset ? (
          <button
            onClick={() => setConfirmReset(true)}
            className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 border border-red-200 rounded-xl px-4 py-3 transition-colors hover:bg-red-50"
          >
            <AlertTriangle size={16} />
            Reset all progress
          </button>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-600">This will erase all your learning progress. Are you sure?</p>
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-xl py-3 transition-colors"
              >
                Yes, reset
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="flex-1 border border-gray-200 text-sm font-semibold text-gray-600 rounded-xl py-3 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
