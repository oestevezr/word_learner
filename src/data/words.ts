import type { Word } from '@/types'
import { dailyLifeWords } from './categories/daily-life'
import { idiomsWords } from './categories/idioms'
import { phrasalVerbsWords } from './categories/phrasal-verbs'
import { academicWords } from './categories/academic'
import { businessWords } from './categories/business'
import { techWords } from './categories/tech'
import { collocationWords } from './categories/collocations'
import { travelWords } from './categories/travel'
import { healthWords } from './categories/health'
import { environmentWords } from './categories/environment'
import { foodCookingWords } from './categories/food-cooking'

export const words: Word[] = [
  ...dailyLifeWords,
  ...idiomsWords,
  ...phrasalVerbsWords,
  ...academicWords,
  ...businessWords,
  ...techWords,
  ...collocationWords,
  ...travelWords,
  ...healthWords,
  ...environmentWords,
  ...foodCookingWords,
]

export default words
