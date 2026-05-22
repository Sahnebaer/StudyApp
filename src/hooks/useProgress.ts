import { useState, useCallback } from 'react';
import type { ModuleId, Progress } from '../types';
import { FLASHCARDS } from '../data/flashcards';
import { QUIZ_QUESTIONS } from '../data/quiz';

function initialProgress(moduleId: ModuleId): Progress {
  return {
    moduleId,
    flashcardsTotal: FLASHCARDS.filter((f) => f.moduleId === moduleId).length,
    flashcardsLearned: new Set(),
    quizTotal: QUIZ_QUESTIONS.filter((q) => q.moduleId === moduleId).length,
    quizCorrect: 0,
    quizAttempted: new Set(),
  };
}

const MODULE_IDS: ModuleId[] = ['biopsych', 'socialpsych', 'ai'];

export function useProgress() {
  const [progress, setProgress] = useState<Record<ModuleId, Progress>>(() => ({
    biopsych: initialProgress('biopsych'),
    socialpsych: initialProgress('socialpsych'),
    ai: initialProgress('ai'),
  }));

  const markFlashcardLearned = useCallback((moduleId: ModuleId, cardId: string) => {
    setProgress((prev) => {
      const updated = new Set(prev[moduleId].flashcardsLearned);
      updated.add(cardId);
      return { ...prev, [moduleId]: { ...prev[moduleId], flashcardsLearned: updated } };
    });
  }, []);

  const recordQuizAnswer = useCallback((moduleId: ModuleId, questionId: string, correct: boolean) => {
    setProgress((prev) => {
      const attempted = new Set(prev[moduleId].quizAttempted);
      const alreadyAttempted = attempted.has(questionId);
      attempted.add(questionId);
      return {
        ...prev,
        [moduleId]: {
          ...prev[moduleId],
          quizAttempted: attempted,
          quizCorrect: correct && !alreadyAttempted
            ? prev[moduleId].quizCorrect + 1
            : prev[moduleId].quizCorrect,
        },
      };
    });
  }, []);

  const resetProgress = useCallback((moduleId: ModuleId) => {
    setProgress((prev) => ({ ...prev, [moduleId]: initialProgress(moduleId) }));
  }, []);

  const totalProgress = MODULE_IDS.reduce(
    (acc, id) => {
      acc.flashcardsTotal += progress[id].flashcardsTotal;
      acc.flashcardsLearned += progress[id].flashcardsLearned.size;
      acc.quizTotal += progress[id].quizTotal;
      acc.quizCorrect += progress[id].quizCorrect;
      return acc;
    },
    { flashcardsTotal: 0, flashcardsLearned: 0, quizTotal: 0, quizCorrect: 0 }
  );

  return { progress, markFlashcardLearned, recordQuizAnswer, resetProgress, totalProgress };
}
