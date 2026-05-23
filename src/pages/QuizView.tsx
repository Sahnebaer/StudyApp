import { useState } from 'react';
import type { QuizQuestion, ModuleId } from '../types';
import { ProgressBar } from '../components/ProgressBar';

interface Props {
  moduleId: ModuleId;
  questions: QuizQuestion[];
  attemptedIds: Set<string>;
  correctIds: Set<string>;
  onAnswer: (questionId: string, correct: boolean) => void;
  onBack: () => void;
  onReset: () => void;
}

export function QuizView({ questions, attemptedIds, correctIds, onAnswer, onBack, onReset }: Props) {
  const remaining = questions.filter(q => !correctIds.has(q.id));

  const [{ currentQId, selected }, setState] = useState(() => {
    const first = questions.find(q => !correctIds.has(q.id));
    return {
      currentQId: first?.id ?? questions[0]?.id ?? '',
      selected: null as number | null,
    };
  });
  const [confirmReset, setConfirmReset] = useState(false);

  const handleReset = () => {
    setState({ currentQId: questions[0]?.id ?? '', selected: null });
    setConfirmReset(false);
    onReset();
  };

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

  // Show completion screen only after user dismisses the last feedback
  if (remaining.length === 0 && selected === null) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-2xl font-bold text-white mb-3">Alle Fragen gemeistert!</h2>
          <p className="text-slate-400 mb-8">
            Du hast alle {questions.length} Fragen korrekt beantwortet.
          </p>
          <div className="space-y-3">
            <button
              onClick={handleReset}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl py-3 transition-colors"
            >
              Quiz neu starten
            </button>
            <button
              onClick={onBack}
              className="w-full text-slate-400 hover:text-white transition-colors py-2 text-sm"
            >
              ← Zurück zum Modul
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions.find(qq => qq.id === currentQId) ?? remaining[0];
  const isCorrect = selected === q.correctIndex;
  const alreadyAttempted = attemptedIds.has(q.id);
  const isLastRemaining = remaining.length === 1 && isCorrect;

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setConfirmReset(false);
    setState(prev => ({ ...prev, selected: i }));
    onAnswer(q.id, i === q.correctIndex);
  };

  const next = () => {
    setConfirmReset(false);
    // If this was the last remaining question answered correctly, show completion
    if (remaining.length === 0) {
      setState(prev => ({ ...prev, selected: null }));
      return;
    }
    const posInRemaining = remaining.findIndex(qq => qq.id === currentQId);
    if (posInRemaining === -1) {
      // Answered correctly – question no longer in remaining; advance naturally
      const origIdx = questions.findIndex(qq => qq.id === currentQId);
      const nextQ =
        remaining.find(qq => questions.findIndex(q2 => q2.id === qq.id) > origIdx) ??
        remaining[0];
      setState({ currentQId: nextQ.id, selected: null });
    } else {
      setState({ currentQId: remaining[(posInRemaining + 1) % remaining.length].id, selected: null });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-10">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors">← Zurück</button>
          <span className="text-slate-400 text-sm">
            {remaining.length} offen · {correctIds.size}/{questions.length} richtig
          </span>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Richtig beantwortet</span>
            <span>{correctIds.size}/{questions.length}</span>
          </div>
          <ProgressBar value={correctIds.size} max={questions.length} colorClass="bg-violet-500" />
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-5">
          <p className="text-white text-lg leading-relaxed">{q.question}</p>
          {alreadyAttempted && selected === null && (
            <p className="text-xs text-slate-500 mt-2">Du hast diese Frage bereits falsch beantwortet.</p>
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
                key={`${q.id}-${i}`}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`w-full border rounded-xl px-5 py-4 text-left transition-colors ${style}`}
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

        <div className="space-y-3">
          <button
            onClick={next}
            disabled={selected === null}
            className={`w-full font-medium rounded-xl py-3 transition-all ${
              selected === null
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                : isLastRemaining
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            {isLastRemaining ? 'Quiz abgeschlossen! 🎉' : 'Nächste Frage →'}
          </button>
          {confirmReset ? (
            <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 text-center">
              <p className="text-slate-300 text-sm mb-3">Fortschritt wirklich zurücksetzen?</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setConfirmReset(false)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium rounded-lg py-2 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium rounded-lg py-2 transition-colors"
                >
                  Ja, zurücksetzen
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setConfirmReset(true)}
              className="w-full text-slate-600 hover:text-slate-400 text-sm py-2 transition-colors"
            >
              Quiz zurücksetzen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
