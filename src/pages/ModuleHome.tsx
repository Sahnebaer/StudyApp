import type { Module, Progress } from '../types';
import { ProgressBar } from '../components/ProgressBar';

type View = 'flashcards' | 'quiz' | 'summary' | 'podcast';

interface Props {
  module: Module;
  progress: Progress;
  onSelectView: (view: View) => void;
  onBack: () => void;
}

const VIEWS: { id: View; label: string; icon: string; desc: string }[] = [
  { id: 'flashcards', label: 'Karteikarten', icon: '🗂️', desc: 'Lerne die wichtigsten Begriffe' },
  { id: 'quiz', label: 'Quiz', icon: '✏️', desc: 'Teste dein Wissen' },
  { id: 'summary', label: 'Zusammenfassung', icon: '📖', desc: 'Lese die Übersicht' },
  { id: 'podcast', label: 'Podcast anhören', icon: '🎙️', desc: 'KI-generierte Audio-Zusammenfassung' },
];

export function ModuleHome({ module, progress, onSelectView, onBack }: Props) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-10">
      <div className="max-w-2xl mx-auto">
        <button onClick={onBack} className="text-slate-400 hover:text-white mb-6 flex items-center gap-2 transition-colors">
          ← Zurück
        </button>

        <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${module.color} mb-4 text-4xl`}>
          {module.icon}
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">{module.title}</h1>
        <p className="text-slate-400 mb-8">{module.description}</p>

        {/* Progress summary */}
        <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 mb-8">
          <h3 className="text-slate-300 font-medium mb-4">Dein Fortschritt</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Karteikarten</span>
                <span className="text-slate-300">{progress.flashcardsLearned.size}/{progress.flashcardsTotal}</span>
              </div>
              <ProgressBar value={progress.flashcardsLearned.size} max={progress.flashcardsTotal} colorClass="bg-emerald-500" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Quiz</span>
                <span className="text-slate-300">{progress.quizCorrectIds.size}/{progress.quizTotal}</span>
              </div>
              <ProgressBar value={progress.quizCorrectIds.size} max={progress.quizTotal} colorClass="bg-violet-500" />
            </div>
          </div>
        </div>

        {/* View selection */}
        <div className="grid grid-cols-1 gap-4">
          {VIEWS.map((v) => (
            <button
              key={v.id}
              onClick={() => onSelectView(v.id)}
              className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-left hover:border-slate-500 hover:bg-slate-700 transition-all flex items-center gap-4 group"
            >
              <span className="text-3xl">{v.icon}</span>
              <div>
                <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">{v.label}</div>
                <div className="text-slate-400 text-sm">{v.desc}</div>
              </div>
              <span className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
