import type { Word, UserWordRecord, DailySession, AppSettings } from '@/types'
import { isDue } from './srs'

const today = (): string => new Date().toISOString().slice(0, 10)

/**
 * Builds (or re-uses) the daily session.
 * Priority: overdue > due today > new words
 */
export function buildSession(
  words: Word[],
  records: Record<string, UserWordRecord>,
  settings: AppSettings,
  existingSession: DailySession | null
): DailySession {
  // Re-use today's session if already built
  if (existingSession?.date === today()) {
    return existingSession
  }

  const eligible = words.filter(
    (w) =>
      settings.activeLevels.includes(w.level) &&
      settings.activeCategories.includes(w.category)
  )

  const overdue: Word[] = []
  const dueToday: Word[] = []
  const unseen: Word[] = []

  for (const word of eligible) {
    const rec = records[word.id]
    if (!rec) {
      unseen.push(word)
    } else if (rec.status === 'mastered' && isDue(rec)) {
      overdue.push(word)
    } else if (isDue(rec) && rec.status !== 'mastered') {
      overdue.push(word)
    } else {
      // not due — skip
    }
  }

  // Fill with new words if needed
  const pool: Word[] = [...overdue, ...dueToday]
  if (pool.length < settings.dailyGoal) {
    const needed = settings.dailyGoal - pool.length
    pool.push(...unseen.slice(0, needed))
  }

  // Shuffle and cap
  const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, settings.dailyGoal)

  return {
    date: today(),
    wordIds: shuffled.map((w) => w.id),
    completed: [],
    scores: {}
  }
}
