import { useRef } from 'react'
import type { CSSProperties } from 'react'

interface BlankInputProps {
  word: string
  value: string
  onChange: (v: string) => void
  isCorrect: boolean | null
  disabled?: boolean
}

export default function BlankInput({ word, value, onChange, isCorrect, disabled }: BlankInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const letterCount = word.replace(/\s+/g, '').length
  const chars = word.split('')

  return (
    <div className="flex flex-col gap-2">
      {/* Letter boxes — clicking anywhere focuses the hidden input */}
      <div
        className="relative flex flex-wrap gap-x-1 gap-y-2 cursor-text py-1"
        onClick={() => !disabled && inputRef.current?.focus()}
      >
        {chars.map((ch, i) => {
          if (ch === ' ') return <span key={i} className="w-2" />
          const typed = value[i] ?? ''
          const isEmpty = typed === ''
          const isMatch = !isEmpty && typed.toLowerCase() === ch.toLowerCase()
          const letterStyle: CSSProperties = isEmpty
            ? {}
            : isMatch
            ? { color: 'var(--color-success)' }
            : { color: 'var(--color-error)' }
          return (
            <span
              key={i}
              style={letterStyle}
              className={`inline-flex items-end justify-center w-6 h-8 border-b-2 text-base font-bold font-mono select-none transition-colors ${
                isEmpty
                  ? 'border-gray-300 text-gray-200'
                  : isMatch
                  ? 'border-green-400'
                  : 'border-red-400'
              }`}
            >
              {isEmpty ? '·' : typed}
            </span>
          )
        })}

        {/* Invisible input overlaid — captures keyboard input */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          maxLength={word.length}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          className="absolute inset-0 w-full h-full opacity-0 cursor-text"
          aria-label="Type your answer"
        />
      </div>

      <p className="text-xs text-gray-400">
        {isCorrect === null && !disabled && (
          <>{letterCount} letter{letterCount !== 1 ? 's' : ''}
            {value.length > 0 && (
              <span className="ml-2 text-gray-300">
                {value.replace(/\s/g, '').length}/{letterCount}
              </span>
            )}
          </>
        )}
      </p>
    </div>
  )
}
