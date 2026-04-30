// ─── CEFR Levels ────────────────────────────────────────────────────────────
export type CefrLevel = 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

// ─── Word Categories ─────────────────────────────────────────────────────────
export type WordCategory =
  | 'Daily Life'
  | 'Idioms'
  | 'Phrasal Verbs'
  | 'Academic'
  | 'Business'
  | 'Tech'
  | 'Collocations'

// ─── A sentence with a blank ─────────────────────────────────────────────────
export interface Sentence {
  /** Full sentence, e.g. "Can I go to the bathroom?" */
  text: string
  /** The word/phrase that fills the blank, e.g. "by all means" */
  blank: string
  /** Short situational note, e.g. "Formal permission" */
  context: string
}

// ─── Core vocabulary entry ───────────────────────────────────────────────────
export interface Word {
  id: string
  /** The target phrase/expression, e.g. "by all means" */
  phrase: string
  /** Spanish translation + brief explanation */
  meaning: string
  level: CefrLevel
  category: WordCategory
  /** Credible source reference */
  source: string
  /** 2–3 gap-fill sentences */
  sentences: Sentence[]
  /** 3 progressive hints */
  hints: [string, string, string]
}

// ─── Per-word user progress ──────────────────────────────────────────────────
export type WordStatus = 'new' | 'learning' | 'mastered'

export interface UserWordRecord {
  wordId: string
  status: WordStatus
  /** SM-2 ease factor, starts at 2.5 */
  easeFactor: number
  /** Days until next review */
  interval: number
  /** ISO date string (YYYY-MM-DD) */
  nextReview: string
  timesCorrect: number
  timesIncorrect: number
  /** Consecutive correct count without hints */
  consecutiveCorrect: number
  /** 1 = correct no hints  2 = used hints  3 = revealed */
  lastScore: 1 | 2 | 3
}

// ─── Practice session ────────────────────────────────────────────────────────
export interface DailySession {
  date: string
  wordIds: string[]
  completed: string[]
  scores: Record<string, 1 | 2 | 3>
}

// ─── App settings ────────────────────────────────────────────────────────────
export interface AppSettings {
  dailyGoal: number
  activeLevels: CefrLevel[]
  activeCategories: WordCategory[]
}

export const DEFAULT_SETTINGS: AppSettings = {
  dailyGoal: 15,
  activeLevels: ['A2', 'B1', 'B2', 'C1', 'C2'],
  activeCategories: [
    'Daily Life',
    'Idioms',
    'Phrasal Verbs',
    'Academic',
    'Business',
    'Tech',
    'Collocations'
  ]
}

// ─── Stats snapshot ──────────────────────────────────────────────────────────
export interface StatsSnapshot {
  total: number
  newCount: number
  learning: number
  mastered: number
  dueToday: number
  streak: number
}
