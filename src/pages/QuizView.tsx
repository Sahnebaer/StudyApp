import { useState } from 'react';
import type { QuizQuestion, ModuleId } from '../types';
import { ProgressBar } from '../components/ProgressBar';

interface Props {
  moduleId: ModuleId;
  questions: QuizQuestion[];
  attemptedIds: Set<string>;
  correctCount: number;
  onAnswer: (questionId: string, correct: boolean) => void;
  onBack: () => void;
}

export function QuizView({ questions, attemptedIds, correctCount, onAnswer, onBack }: Props) {
  const [{ index, selected }, setState] = useState<{ index: number; selected: number | null }>({
    index: 0,
    selected: null,
  });

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Keine Fragen vorhanden.</p>
          <button onClick={onBack} className="text-blue-400 hover:text-blue-300">← Zurück</button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  const isCorrect = selected === q.correctIndex;
  const alreadyAttempted = attemptedIds.has(q.id);

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setState(prev => ({ ...prev, selected: i }));
    onAnswer(q.id, i === q.correctIndex);
  };

  const next = () => {
    setState({ index: (index + 1) % questions.length, selected: null });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-10">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors">← Zurück</button>
          <span className="text-slate-400 text-sm">{index + 1} / {questions.length}</span>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Richtig beantwortet</span>
            <span>{correctCount}/{questions.length}</span>
          </div>
          <ProgressBar value={correctCount} max={questions.length} colorClass="bg-violet-500" />
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-5">
          <p className="text-white text-lg leading-relaxed">{q.question}</p>
          {alreadyAttempted && selected === null && (
            <p className="text-xs text-slate-500 mt-2">Du hast diese Frage bereits beantwortet.</p>
          )}
        </div>

        <div className="space-y-3 mb-6">
          {q.options.map((opt, i) => {
            let style = 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-700';
            if (selected !== null) {
              if (i === q.correctIndex) style = 'bg-emerald-900 border-emerald-600 text-emerald-200';
              else if (i === selected) style = 'bg-red-900 border-red-600 text-red-200';
              else style = 'bg-slate-800 border-slate-700 text-slate-500';
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`w-full border rounded-xl px-5 py-4 text-left transition-all ${style}`}
              >
                <span className="font-medium mr-3 text-slate-400">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className={`rounded-xl p-4 mb-5 ${isCorrect ? 'bg-emerald-900 border border-emerald-700' : 'bg-red-900 border border-red-700'}`}>
            <p className="font-medium mb-1">{isCorrect ? '✓ Richtig!' : '✗ Falsch'}</p>
            {q.explanation && <p className="text-sm opacity-80">{q.explanation}</p>}
          </div>
        )}

        <button
          onClick={next}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl py-3 transition-colors"
        >
          {index === questions.length - 1 ? 'Neu starten' : 'Nächste Frage →'}
        </button>
      </div>
    </div>
  );
}
