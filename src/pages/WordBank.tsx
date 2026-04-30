import { useState } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { words } from '@/data/words'
import type { WordCategory, CefrLevel, WordStatus } from '@/types'
import { ALL_CATEGORIES, ALL_LEVELS, ALL_STATUSES, STATUS_LABEL as statusLabel, STATUS_CLASS as statusClass } from '@/data/constants'
import { Search, Heart, SlidersHorizontal, X } from 'lucide-react'

export default function WordBank() {
  const records = useAppStore((s) => s.records)
  const favorites = useAppStore((s) => s.favorites)
  const toggleFavorite = useAppStore((s) => s.toggleFavorite)

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<WordCategory | 'all'>('all')
  const [level, setLevel] = useState<CefrLevel | 'all'>('all')
  const [status, setStatus] = useState<WordStatus | 'all'>('all')
  const [savedOnly, setSavedOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const seenOrSaved = words.filter((w) => records[w.id] !== undefined || favorites.includes(w.id))

  const filtered = seenOrSaved.filter((w) => {
    const rec = records[w.id]
    const wordStatus: WordStatus = rec?.status ?? 'new'
    if (savedOnly && !favorites.includes(w.id)) return false
    if (category !== 'all' && w.category !== category) return false
    if (level !== 'all' && w.level !== level) return false
    if (status !== 'all' && wordStatus !== status) return false
    if (query && !w.phrase.toLowerCase().includes(query.toLowerCase()) && !w.meaning.toLowerCase().includes(query.toLowerCase())) return false
    return true
  })

  const activeFiltersCount = (category !== 'all' ? 1 : 0) + (level !== 'all' ? 1 : 0) + (status !== 'all' ? 1 : 0)

  const clearFilters = () => {
    setCategory('all')
    setLevel('all')
    setStatus('all')
  }

  return (
    <div className="flex flex-col min-h-full">

      {/* ── Header ── */}
      <div className="px-5 pt-8 pb-6">
        <h1 className="text-2xl font-bold tracking-tight mb-0.5">Word Bank</h1>
        <p className="text-sm text-gray-400">
          {seenOrSaved.length === 0 ? 'Practice to add words here' : `${seenOrSaved.length} words studied`}
        </p>
      </div>

      {/* ── Search + filter button ── */}
      <div className="px-5 mb-4 flex gap-2">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="search"
            placeholder="Search words or meanings…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 bg-white transition-colors"
          />
        </div>
        <button
          onClick={() => setShowFilters((v) => !v)}
          className={`relative shrink-0 flex items-center gap-2 px-3.5 py-3 rounded-xl border text-sm font-medium transition-colors ${
            showFilters || activeFiltersCount > 0
              ? 'bg-accent-500 text-white border-accent-500'
              : 'bg-white text-gray-500 border-gray-200'
          }`}
        >
          <SlidersHorizontal size={15} />
          {activeFiltersCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 text-[10px] font-bold bg-red-500 text-white rounded-full flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* ── Expandable filter panel ── */}
      {showFilters && (
        <div className="mx-5 mb-4 bg-white border border-gray-100 rounded-2xl p-4 flex flex-col gap-4 shadow-sm">

          {/* Saved / All toggle */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Show</p>
            <div className="flex gap-2">
              <button
                onClick={() => setSavedOnly(false)}
                className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-colors ${
                  !savedOnly ? 'bg-accent-500 text-white border-accent-500' : 'text-gray-500 border-gray-200 hover:border-gray-300'
                }`}
              >
                All studied
              </button>
              <button
                onClick={() => setSavedOnly(true)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-xl border transition-colors ${
                  savedOnly ? 'bg-red-500 text-white border-red-500' : 'text-gray-500 border-gray-200 hover:border-gray-300'
                }`}
              >
                <Heart size={11} style={savedOnly ? { fill: 'white', color: 'white' } : {}} />
                Saved ({favorites.length})
              </button>
            </div>
          </div>

          {/* Category */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Category</p>
            <div className="flex flex-wrap gap-1.5">
              {['all', ...ALL_CATEGORIES].map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c as WordCategory | 'all')}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
                    category === c ? 'bg-accent-500 text-white border-accent-500' : 'text-gray-500 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {c === 'all' ? 'All' : c}
                </button>
              ))}
            </div>
          </div>

          {/* Level */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Level</p>
            <div className="flex gap-1.5">
              {ALL_LEVELS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(level === l ? 'all' : l)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                    level === l ? 'bg-gray-800 text-white border-gray-800' : 'text-gray-400 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Status</p>
            <div className="flex gap-1.5">
              {ALL_STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(status === s ? 'all' : s)}
                  className={`flex-1 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                    status === s ? 'bg-gray-800 text-white border-gray-800' : 'text-gray-400 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {statusLabel[s]}
                </button>
              ))}
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex gap-2 pt-1 border-t border-gray-100">
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={12} />
                Clear filters
              </button>
            )}
            <button
              onClick={() => setShowFilters(false)}
              className="ml-auto text-xs font-semibold text-accent-500 hover:text-accent-600 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* ── Results summary ── */}
      <div className="px-5 mb-3 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          {filtered.length} {filtered.length === 1 ? 'word' : 'words'}
          {(activeFiltersCount > 0 || savedOnly) && ' matching filters'}
        </p>
      </div>

      {/* ── Empty states ── */}
      {seenOrSaved.length === 0 && (
        <div className="flex flex-col items-center gap-3 py-20 px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
            <Search size={22} className="text-gray-300" />
          </div>
          <p className="text-sm font-semibold text-gray-500">No words yet</p>
          <p className="text-xs text-gray-400 leading-relaxed">Practice some exercises first<br />and they'll appear here</p>
        </div>
      )}

      {seenOrSaved.length > 0 && filtered.length === 0 && (
        <div className="flex flex-col items-center gap-2 py-16 px-8 text-center">
          <p className="text-sm font-medium text-gray-400">No words match these filters</p>
          <button onClick={clearFilters} className="text-xs text-accent-500 font-medium mt-1">Clear filters</button>
        </div>
      )}

      {/* ── Word list ── */}
      <div className="flex flex-col gap-2 px-5 pb-8">
        {filtered.map((word) => {
          const rec = records[word.id]
          const wordStatus: WordStatus = rec?.status ?? 'new'
          const isFav = favorites.includes(word.id)
          return (
            <div key={word.id} className="bg-white border border-gray-100 rounded-2xl px-4 py-4 flex gap-3 items-start shadow-sm">
              <button
                onClick={() => toggleFavorite(word.id)}
                className="mt-0.5 shrink-0 p-1 rounded-full transition-colors hover:bg-red-50"
                aria-label={isFav ? 'Remove from saved' : 'Save word'}
              >
                <Heart
                  size={16}
                  style={isFav ? { fill: '#ef4444', color: '#ef4444' } : { color: '#d1d5db' }}
                />
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-semibold text-sm text-gray-900 leading-snug">{word.phrase}</p>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusClass[wordStatus]}`}>
                      {statusLabel[wordStatus]}
                    </span>
                    <span className="text-xs font-bold text-accent-500">{word.level}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{word.meaning}</p>
                <p className="text-xs text-gray-300 mt-1.5">{word.category}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
