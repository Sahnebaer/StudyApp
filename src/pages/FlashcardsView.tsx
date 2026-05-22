import { useState, useMemo } from 'react';
import type { Flashcard, ModuleId } from '../types';
import { ProgressBar } from '../components/ProgressBar';

interface Props {
  moduleId: ModuleId;
  cards: Flashcard[];
  learnedIds: Set<string>;
  onMarkLearned: (id: string) => void;
  onBack: () => void;
}

export function FlashcardsView({ cards, learnedIds, onMarkLearned, onBack }: Props) {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(cards.map((c) => c.category).filter(Boolean))) as string[];
    return cats.length > 0 ? ['Alle', ...cats] : [];
  }, [cards]);

  const [activeCategory, setActiveCategory] = useState('Alle');
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filtered = useMemo(
    () => (activeCategory === 'Alle' ? cards : cards.filter((c) => c.category === activeCategory)),
    [cards, activeCategory]
  );

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Keine Karteikarten vorhanden.</p>
          <button onClick={onBack} className="text-blue-400 hover:text-blue-300">← Zurück</button>
        </div>
      </div>
    );
  }

  const safeIndex = Math.min(index, filtered.length - 1);
  const card = filtered[safeIndex] ?? filtered[0];
  const learned = learnedIds.has(card.id);

  const switchCategory = (cat: string) => {
    setActiveCategory(cat);
    setIndex(0);
    setFlipped(false);
  };

  const next = () => { setFlipped(false); setIndex((i) => (i + 1) % filtered.length); };
  const prev = () => { setFlipped(false); setIndex((i) => (i - 1 + filtered.length) % filtered.length); };

  const learnedInFilter = filtered.filter((c) => learnedIds.has(c.id)).length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-10">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors">← Zurück</button>
          <span className="text-slate-400 text-sm">{safeIndex + 1} / {filtered.length}</span>
        </div>

        {/* Category filter */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => switchCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors border ${
                  activeCategory === cat
                    ? 'bg-violet-600 border-violet-500 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="mb-5">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Gelernt</span>
            <span>{learnedInFilter}/{filtered.length}</span>
          </div>
          <ProgressBar value={learnedInFilter} max={filtered.length} colorClass="bg-emerald-500" />
        </div>

        {/* Card */}
        <div
          onClick={() => setFlipped((f) => !f)}
          className="cursor-pointer bg-slate-800 border border-slate-700 rounded-2xl p-8 min-h-56 flex flex-col items-center justify-center text-center hover:border-slate-500 transition-all mb-6 select-none"
        >
          {card.category && (
            <span className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-3">
              {card.category}
            </span>
          )}
          <div className="text-xs text-slate-500 mb-3 uppercase tracking-wider">
            {flipped ? 'Antwort' : 'Frage – tippe zum Umdrehen'}
          </div>
          <p className="text-lg text-white leading-relaxed whitespace-pre-line">
            {flipped ? card.answer : card.question}
          </p>
          {learned && <span className="mt-4 text-emerald-400 text-sm">✓ Gelernt</span>}
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button onClick={prev} className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl py-3 transition-colors">
            ←
          </button>
          <button
            onClick={() => { onMarkLearned(card.id); next(); }}
            className={`flex-1 rounded-xl py-3 font-medium transition-colors ${
              learned
                ? 'bg-emerald-900 border border-emerald-700 text-emerald-300'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}
          >
            {learned ? '✓ Gelernt' : 'Als gelernt markieren'}
          </button>
          <button onClick={next} className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl py-3 transition-colors">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
