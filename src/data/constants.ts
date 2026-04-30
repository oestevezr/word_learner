import type { WordCategory, CefrLevel, WordStatus } from '@/types'

export const ALL_CATEGORIES: WordCategory[] = [
  'Daily Life',
  'Idioms',
  'Phrasal Verbs',
  'Academic',
  'Business',
  'Tech',
  'Collocations',
  'Travel',
  'Health',
  'Environment',
  'Food & Cooking',
]

export const ALL_LEVELS: CefrLevel[] = ['A2', 'B1', 'B2', 'C1', 'C2']

export const ALL_STATUSES: WordStatus[] = ['new', 'learning', 'mastered']

export const STATUS_LABEL: Record<WordStatus, string> = {
  new: 'New',
  learning: 'Learning',
  mastered: 'Mastered',
}

export const STATUS_CLASS: Record<WordStatus, string> = {
  new: 'status-new',
  learning: 'status-learning',
  mastered: 'status-mastered',
}
