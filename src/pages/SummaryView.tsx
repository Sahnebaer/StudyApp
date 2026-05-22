import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import type { Summary } from '../types';

interface Props {
  summary: Summary | undefined;
  onBack: () => void;
}

const md: Components = {
  h3: ({ children }) => <h3 className="text-base font-bold text-white mt-5 mb-2">{children}</h3>,
  h4: ({ children }) => <h4 className="text-sm font-semibold text-violet-300 mt-4 mb-1">{children}</h4>,
  p: ({ children }) => <p className="text-slate-300 leading-relaxed mb-3">{children}</p>,
  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
  em: ({ children }) => <em className="text-slate-200 italic">{children}</em>,
  table: ({ children }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse border border-slate-600">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-slate-700">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="border-b border-slate-700 hover:bg-slate-700/40 transition-colors">{children}</tr>,
  th: ({ children }) => <th className="text-left px-3 py-2 text-slate-200 font-semibold">{children}</th>,
  td: ({ children }) => <td className="px-3 py-2 text-slate-300 align-top">{children}</td>,
  ul: ({ children }) => <ul className="list-disc list-outside ml-5 space-y-1 mb-3 text-slate-300">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-outside ml-5 space-y-1 mb-3 text-slate-300">{children}</ol>,
  li: ({ children }) => <li className="text-slate-300 leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 my-3 bg-slate-700/30 rounded-r py-2">{children}</blockquote>
  ),
  code: ({ children, className }) => {
    if (className) {
      return (
        <code className="block bg-slate-900 rounded-lg p-4 text-sm text-slate-300 my-3 overflow-x-auto whitespace-pre font-mono">
          {children}
        </code>
      );
    }
    return <code className="bg-slate-700 rounded px-1.5 py-0.5 text-sm text-blue-300 font-mono">{children}</code>;
  },
  pre: ({ children }) => <pre className="my-0">{children}</pre>,
  hr: () => <hr className="border-slate-600 my-5" />,
};

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
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="text-slate-400 hover:text-white mb-6 flex items-center gap-2 transition-colors">
          ← Zurück
        </button>

        <h1 className="text-2xl font-bold text-white mb-8">{summary.title}</h1>

        <div className="space-y-8">
          {summary.sections.map((section, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-blue-300 mb-4 pb-2 border-b border-slate-700">
                {section.heading}
              </h2>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>
                {section.content}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
