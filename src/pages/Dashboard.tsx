import type { Module, ModuleId, Progress } from '../types';
import { ProgressBar } from '../components/ProgressBar';

interface Props {
  modules: Module[];
  progress: Record<ModuleId, Progress>;
  totalProgress: { flashcardsTotal: number; flashcardsLearned: number; quizTotal: number; quizCorrect: number };
  onSelectModule: (id: ModuleId) => void;
}

export function Dashboard({ modules, progress, totalProgress, onSelectModule }: Props) {
  const overallPct =
    totalProgress.flashcardsTotal + totalProgress.quizTotal === 0
      ? 0
      : Math.round(
          ((totalProgress.flashcardsLearned + totalProgress.quizCorrect) /
            (totalProgress.flashcardsTotal + totalProgress.quizTotal)) *
            100
        );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">StudyApp 📚</h1>
          <p className="text-slate-400">Lern-Dashboard – Psychologie &amp; KI</p>
        </div>

        {/* Overall progress */}
        <div className="bg-slate-800 rounded-2xl p-6 mb-8 border border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-300 font-medium">Gesamtfortschritt</span>
            <span className="text-white font-bold text-lg">{overallPct}%</span>
          </div>
          <ProgressBar value={totalProgress.flashcardsLearned + totalProgress.quizCorrect} max={totalProgress.flashcardsTotal + totalProgress.quizTotal} colorClass="bg-gradient-to-r from-blue-500 to-violet-500" />
          <div className="flex gap-6 mt-4 text-sm text-slate-400">
            <span>Karteikarten: {totalProgress.flashcardsLearned}/{totalProgress.flashcardsTotal}</span>
            <span>Quiz: {totalProgress.quizCorrect}/{totalProgress.quizTotal}</span>
          </div>
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {modules.map((mod) => {
            const p = progress[mod.id];
            const fcPct = p.flashcardsTotal === 0 ? 0 : Math.round((p.flashcardsLearned.size / p.flashcardsTotal) * 100);
            const qPct = p.quizTotal === 0 ? 0 : Math.round((p.quizCorrectIds.size / p.quizTotal) * 100);
            return (
              <button
                key={mod.id}
                onClick={() => onSelectModule(mod.id)}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-left hover:border-slate-500 hover:bg-slate-750 transition-all duration-200 group"
              >
                <div className={`text-4xl mb-4 inline-block p-3 rounded-xl bg-gradient-to-br ${mod.color} bg-opacity-20`}>
                  {mod.icon}
                </div>
                <h2 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {mod.title}
                </h2>
                <p className="text-slate-400 text-sm mb-5">{mod.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Karteikarten</span>
                    <span>{p.flashcardsLearned.size}/{p.flashcardsTotal}</span>
                  </div>
                  <ProgressBar value={p.flashcardsLearned.size} max={p.flashcardsTotal} colorClass="bg-emerald-500" />
                  <div className="flex justify-between text-xs text-slate-500 mb-1 mt-2">
                    <span>Quiz</span>
                    <span>{p.quizCorrectIds.size}/{p.quizTotal}</span>
                  </div>
                  <ProgressBar value={p.quizCorrectIds.size} max={p.quizTotal} colorClass="bg-violet-500" />
                </div>
                <div className="mt-4 text-xs text-slate-500">
                  {fcPct === 100 && qPct === 100 ? '✅ Abgeschlossen' : `Ø ${Math.round((fcPct + qPct) / 2)}% erledigt`}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
