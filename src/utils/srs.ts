import type { UserWordRecord } from '@/types'

const today = (): string => new Date().toISOString().slice(0, 10)

const addDays = (days: number): string => {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

/**
 * Returns a fresh UserWordRecord for a word that has never been seen.
 */
export function createRecord(wordId: string): UserWordRecord {
  return {
    wordId,
    status: 'new',
    easeFactor: 2.5,
    interval: 0,
    nextReview: today(),
    timesCorrect: 0,
    timesIncorrect: 0,
    consecutiveCorrect: 0,
    lastScore: 1
  }
}

/**
 * SM-2 inspired update.
 *
 * score 1 → correct, no hints used     → interval × easeFactor (min 20 days after mastery)
 * score 2 → correct, hints used        → interval × 1.2  (min 3 days)
 * score 3 → revealed / gave up         → interval = 1 day, reset consecutiveCorrect
 */
export function updateRecord(
  record: UserWordRecord,
  score: 1 | 2 | 3
): UserWordRecord {
  const r = { ...record, lastScore: score }

  if (score === 1) {
    r.timesCorrect++
    r.consecutiveCorrect++

    // Ease factor grows slightly on easy, capped at 3.5
    r.easeFactor = Math.min(r.easeFactor + 0.1, 3.5)

    if (r.consecutiveCorrect >= 3) {
      r.status = 'mastered'
      r.interval = Math.max(r.interval === 0 ? 20 : Math.round(r.interval * r.easeFactor), 20)
    } else {
      r.status = 'learning'
      r.interval = r.interval === 0 ? 1 : Math.round(r.interval * r.easeFactor)
    }

  } else if (score === 2) {
    r.timesCorrect++
    // Partial credit — ease factor stays same, reset consecutive streak
    r.consecutiveCorrect = 0
    r.status = 'learning'
    r.interval = Math.max(r.interval === 0 ? 3 : Math.round(r.interval * 1.2), 3)

  } else {
    // score 3: revealed
    r.timesIncorrect++
    r.consecutiveCorrect = 0
    r.easeFactor = Math.max(r.easeFactor - 0.2, 1.3)
    r.status = 'learning'
    r.interval = 1
  }

  r.nextReview = addDays(r.interval)
  return r
}

/**
 * True if a word is due for review today or overdue.
 */
export function isDue(record: UserWordRecord): boolean {
  return record.nextReview <= today()
}
