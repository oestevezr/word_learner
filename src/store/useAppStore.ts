import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserWordRecord, DailySession, AppSettings, StatsSnapshot } from '@/types'
import { words } from '@/data/words'
import { createRecord, updateRecord, isDue } from '@/utils/srs'
import { buildSession } from '@/utils/session'
import { DEFAULT_SETTINGS } from '@/types'

interface AppState {
  records: Record<string, UserWordRecord>
  session: DailySession | null
  settings: AppSettings
  streakDates: string[]
  favorites: string[]

  buildTodaySession: () => void
  recordAttempt: (wordId: string, score: 1 | 2 | 3) => void
  getStats: () => StatsSnapshot
  updateSettings: (patch: Partial<AppSettings>) => void
  resetProgress: () => void
  toggleFavorite: (wordId: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      records: {},
      session: null,
      settings: DEFAULT_SETTINGS,
      streakDates: [],
      favorites: [],

      buildTodaySession: () => {
        const { records, settings, session } = get()
        const newSession = buildSession(words, records, settings, session)
        set({ session: newSession })
      },

      recordAttempt: (wordId, score) => {
        const { records, session, streakDates } = get()
        const existing = records[wordId] ?? createRecord(wordId)
        const updated = updateRecord(existing, score)
        const newRecords = { ...records, [wordId]: updated }

        let newSession = session
        if (session) {
          const scoresCopy = { ...session.scores, [wordId]: score }
          const completedCopy = session.completed.includes(wordId)
            ? session.completed
            : [...session.completed, wordId]
          newSession = { ...session, scores: scoresCopy, completed: completedCopy }
        }

        // Update streak
        const today = new Date().toISOString().slice(0, 10)
        let newStreakDates = streakDates
        if (!streakDates.includes(today)) {
          newStreakDates = [...streakDates, today].sort((a, b) => a.localeCompare(b))
        }

        set({ records: newRecords, session: newSession, streakDates: newStreakDates })
      },

      getStats: () => {
        const { records, streakDates } = get()
        const allRecords = Object.values(records)

        const total = words.length
        const mastered = allRecords.filter((r) => r.status === 'mastered').length
        const learning = allRecords.filter((r) => r.status === 'learning').length
        const newCount = total - allRecords.length
        const dueToday = allRecords.filter((r) => isDue(r) && r.status !== 'mastered').length

        // Compute current streak
        let streak = 0
        const today = new Date().toISOString().slice(0, 10)
        const dates = [...streakDates].sort((a, b) => a.localeCompare(b)).reverse()
        for (let i = 0; i < dates.length; i++) {
          const expected = new Date(today)
          expected.setDate(expected.getDate() - i)
          const expectedStr = expected.toISOString().slice(0, 10)
          if (dates[i] === expectedStr) {
            streak++
          } else {
            break
          }
        }

        return { total, mastered, learning, newCount, dueToday, streak }
      },

      updateSettings: (patch) => {
        set((state) => ({ settings: { ...state.settings, ...patch } }))
      },

      resetProgress: () => {
        set({ records: {}, session: null, streakDates: [], favorites: [] })
      },

      toggleFavorite: (wordId) => {
        const { favorites } = get()
        const next = favorites.includes(wordId)
          ? favorites.filter((id) => id !== wordId)
          : [...favorites, wordId]
        set({ favorites: next })
      }
    }),
    {
      name: 'wordup-store',
      partialize: (state) => ({
        records: state.records,
        session: state.session,
        settings: state.settings,
        streakDates: state.streakDates,
        favorites: state.favorites
      })
    }
  )
)
