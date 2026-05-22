import { useState } from 'react';
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
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

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

  const card = cards[index];
  const learned = learnedIds.has(card.id);

  const next = () => { setFlipped(false); setIndex((i) => (i + 1) % cards.length); };
  const prev = () => { setFlipped(false); setIndex((i) => (i - 1 + cards.length) % cards.length); };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-10">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors">← Zurück</button>
          <span className="text-slate-400 text-sm">{index + 1} / {cards.length}</span>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Gelernt</span>
            <span>{learnedIds.size}/{cards.length}</span>
          </div>
          <ProgressBar value={learnedIds.size} max={cards.length} colorClass="bg-emerald-500" />
        </div>

        {/* Card */}
        <div
          onClick={() => setFlipped((f) => !f)}
          className="cursor-pointer bg-slate-800 border border-slate-700 rounded-2xl p-8 min-h-56 flex flex-col items-center justify-center text-center hover:border-slate-500 transition-all mb-6 select-none"
        >
          <div className="text-xs text-slate-500 mb-4 uppercase tracking-wider">
            {flipped ? 'Antwort' : 'Frage – tippe zum Umdrehen'}
          </div>
          <p className="text-lg text-white leading-relaxed">
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
