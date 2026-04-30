import { useState } from 'react'
import type { Word } from '@/types'
import { useAppStore } from '@/store/useAppStore'
import BlankInput from './BlankInput'
import HintPanel from './HintPanel'
import RevealButton from './RevealButton'
import { CheckCircle2, XCircle, Heart } from 'lucide-react'

interface ExerciseCardProps {
  word: Word
  onComplete: (score: 1 | 2 | 3) => void
}

export default function ExerciseCard({ word, onComplete }: ExerciseCardProps) {
  const sentence = word.sentences[0]
  const favorites = useAppStore((s) => s.favorites)
  const toggleFavorite = useAppStore((s) => s.toggleFavorite)
  const isFavorited = favorites.includes(word.id)

  const [hintCount, setHintCount] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [userAnswer, setUserAnswer] = useState('')
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [pendingNext, setPendingNext] = useState(false)

  const handleRevealHint = () => {
    setHintCount((c) => Math.min(c + 1, 3))
  }

  const handleAnswerChange = (v: string) => {
    setUserAnswer(v)
    const correct = v.trim().toLowerCase() === sentence.blank.trim().toLowerCase()
    if (correct && !submitted) {
      setIsCorrect(true)
      setSubmitted(true)
      setPendingNext(true)
    }
  }

  const handleReveal = () => {
    setRevealed(true)
    setUserAnswer(sentence.blank)
    setIsCorrect(null)
  }

  const handleSubmit = () => {
    if (revealed) {
      onComplete(3)
      return
    }

    const correct = userAnswer.trim().toLowerCase() === sentence.blank.trim().toLowerCase()
    setIsCorrect(correct)
    setSubmitted(true)

    if (correct) {
      setPendingNext(true)
    }
  }

  const handleTryAgain = () => {
    setUserAnswer('')
    setIsCorrect(null)
    setSubmitted(false)
  }

  const renderedSentence = sentence.text

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-card p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
          {word.category}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleFavorite(word.id)}
            className="p-1.5 rounded-full transition-colors hover:bg-red-50"
            aria-label={isFavorited ? 'Remove from saved' : 'Save word'}
          >
            <Heart
              size={18}
              className="transition-colors"
              style={isFavorited ? { fill: '#ef4444', color: '#ef4444' } : { color: '#d1d5db' }}
            />
          </button>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-50 text-accent-500 border border-accent-100">
            {word.level}
          </span>
        </div>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed italic">"{sentence.context}"</p>

      <p className="text-base font-medium text-gray-800 leading-relaxed">
        {renderedSentence.split(/(_{1,}(?:\s+_{1,})*)/).map((part, i) =>
          /^[_\s]*_[_\s]*$/.test(part) ? (
            <span key={i} className="text-accent-500 font-mono tracking-wider">{part}</span>
          ) : (
            part
          )
        )}
      </p>

      {!revealed ? (
        <BlankInput
          word={sentence.blank}
          value={userAnswer}
          onChange={handleAnswerChange}
          isCorrect={isCorrect}
          disabled={submitted && isCorrect === true}
        />
      ) : (
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
          <p className="text-base font-semibold text-gray-700">{sentence.blank}</p>
          <p className="text-sm text-gray-400">— {word.meaning}</p>
        </div>
      )}

      <HintPanel
        hints={word.hints}
        hintCount={hintCount}
        onRevealHint={handleRevealHint}
      />

      {!submitted || isCorrect === false ? (
        <div className="flex items-center gap-3">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl py-3 transition-colors"
          >
            {revealed ? 'Continue' : 'Check answer'}
          </button>
          {!revealed && (
            <RevealButton onReveal={handleReveal} revealed={revealed} />
          )}
        </div>
      ) : null}

      {submitted && isCorrect === false && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm text-red-600">
            <XCircle size={16} />
            <span>Not quite — try again or reveal the answer</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleTryAgain}
              className="flex-1 border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Try again
            </button>
            <RevealButton onReveal={handleReveal} revealed={revealed} />
          </div>
        </div>
      )}

      {submitted && isCorrect === true && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-success)' }}>
            <CheckCircle2 size={16} />
            <span>{hintCount > 0 ? 'Correct! (hint used)' : 'Perfect!'}</span>
          </div>
          {pendingNext && (
            <button
              onClick={() => {
                const score: 1 | 2 | 3 = hintCount > 0 ? 2 : 1
                onComplete(score)
              }}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl py-3 transition-colors"
            >
              Next →
            </button>
          )}
        </div>
      )}
    </div>
  )
}
