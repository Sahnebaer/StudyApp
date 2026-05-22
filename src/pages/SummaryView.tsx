import type { Summary } from '../types';

interface Props {
  summary: Summary | undefined;
  onBack: () => void;
}

export function SummaryView({ summary, onBack }: Props) {
  if (!summary) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Keine Zusammenfassung vorhanden.</p>
          <button onClick={onBack} className="text-blue-400 hover:text-blue-300">← Zurück</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-10">
      <div className="max-w-2xl mx-auto">
        <button onClick={onBack} className="text-slate-400 hover:text-white mb-6 flex items-center gap-2 transition-colors">
          ← Zurück
        </button>

        <h1 className="text-2xl font-bold text-white mb-8">{summary.title}</h1>

        <div className="space-y-6">
          {summary.sections.map((section, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-blue-300 mb-3">{section.heading}</h2>
              <p className="text-slate-300 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
