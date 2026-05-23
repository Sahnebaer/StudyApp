import { useState } from 'react';
import type { ModuleId } from './types';
import { MODULES } from './data/modules';
import { FLASHCARDS } from './data/flashcards';
import { QUIZ_QUESTIONS } from './data/quiz';
import { SUMMARIES } from './data/summaries';
import { useProgress } from './hooks/useProgress';
import { Dashboard } from './pages/Dashboard';
import { ModuleHome } from './pages/ModuleHome';
import { FlashcardsView } from './pages/FlashcardsView';
import { QuizView } from './pages/QuizView';
import { SummaryView } from './pages/SummaryView';
import './index.css';

type View = 'dashboard' | 'module' | 'flashcards' | 'quiz' | 'summary';

function App() {
  const [view, setView] = useState<View>('dashboard');
  const [activeModule, setActiveModule] = useState<ModuleId | null>(null);
  const { progress, markFlashcardLearned, recordQuizAnswer, resetProgress, totalProgress } = useProgress();

  const module = activeModule ? MODULES.find((m) => m.id === activeModule) : null;

  const goTo = (v: View, modId?: ModuleId) => {
    if (modId) setActiveModule(modId);
    setView(v);
  };

  if (view === 'dashboard') {
    return (
      <Dashboard
        modules={MODULES}
        progress={progress}
        totalProgress={totalProgress}
        onSelectModule={(id) => goTo('module', id)}
      />
    );
  }

  if (view === 'module' && module && activeModule) {
    return (
      <ModuleHome
        module={module}
        progress={progress[activeModule]}
        onSelectView={(v) => setView(v)}
        onBack={() => setView('dashboard')}
      />
    );
  }

  if (view === 'flashcards' && activeModule) {
    const cards = FLASHCARDS.filter((f) => f.moduleId === activeModule);
    return (
      <FlashcardsView
        moduleId={activeModule}
        cards={cards}
        learnedIds={progress[activeModule].flashcardsLearned}
        onMarkLearned={(id) => markFlashcardLearned(activeModule, id)}
        onBack={() => setView('module')}
      />
    );
  }

  if (view === 'quiz' && activeModule) {
    const questions = QUIZ_QUESTIONS.filter((q) => q.moduleId === activeModule);
    return (
      <QuizView
        moduleId={activeModule}
        questions={questions}
        attemptedIds={progress[activeModule].quizAttempted}
        correctIds={progress[activeModule].quizCorrectIds}
        onAnswer={(id, correct) => recordQuizAnswer(activeModule, id, correct)}
        onBack={() => setView('module')}
        onReset={() => resetProgress(activeModule)}
      />
    );
  }

  if (view === 'summary' && activeModule) {
    const summary = SUMMARIES.find((s) => s.moduleId === activeModule);
    return <SummaryView summary={summary} onBack={() => setView('module')} />;
  }

  return null;
}

export default App;
