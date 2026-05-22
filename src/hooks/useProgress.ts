import { useState, useCallback, useEffect } from 'react';
import type { ModuleId, Progress } from '../types';
import { FLASHCARDS } from '../data/flashcards';
import { QUIZ_QUESTIONS } from '../data/quiz';

const STORAGE_KEY = 'studyapp_progress';

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

function loadFromStorage(): Record<ModuleId, Progress> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) throw new Error('empty');
    const parsed = JSON.parse(raw);
    return {
      biopsych: {
        ...initialProgress('biopsych'),
        flashcardsLearned: new Set(parsed.biopsych?.flashcardsLearned ?? []),
        quizCorrect: parsed.biopsych?.quizCorrect ?? 0,
        quizAttempted: new Set(parsed.biopsych?.quizAttempted ?? []),
      },
      socialpsych: {
        ...initialProgress('socialpsych'),
        flashcardsLearned: new Set(parsed.socialpsych?.flashcardsLearned ?? []),
        quizCorrect: parsed.socialpsych?.quizCorrect ?? 0,
        quizAttempted: new Set(parsed.socialpsych?.quizAttempted ?? []),
      },
      ai: {
        ...initialProgress('ai'),
        flashcardsLearned: new Set(parsed.ai?.flashcardsLearned ?? []),
        quizCorrect: parsed.ai?.quizCorrect ?? 0,
        quizAttempted: new Set(parsed.ai?.quizAttempted ?? []),
      },
    };
  } catch {
    return {
      biopsych: initialProgress('biopsych'),
      socialpsych: initialProgress('socialpsych'),
      ai: initialProgress('ai'),
    };
  }
}

function saveToStorage(progress: Record<ModuleId, Progress>) {
  const serializable = {
    biopsych: {
      flashcardsLearned: [...progress.biopsych.flashcardsLearned],
      quizCorrect: progress.biopsych.quizCorrect,
      quizAttempted: [...progress.biopsych.quizAttempted],
    },
    socialpsych: {
      flashcardsLearned: [...progress.socialpsych.flashcardsLearned],
      quizCorrect: progress.socialpsych.quizCorrect,
      quizAttempted: [...progress.socialpsych.quizAttempted],
    },
    ai: {
      flashcardsLearned: [...progress.ai.flashcardsLearned],
      quizCorrect: progress.ai.quizCorrect,
      quizAttempted: [...progress.ai.quizAttempted],
    },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
}

const MODULE_IDS: ModuleId[] = ['biopsych', 'socialpsych', 'ai'];

export function useProgress() {
  const [progress, setProgress] = useState<Record<ModuleId, Progress>>(loadFromStorage);

  useEffect(() => {
    saveToStorage(progress);
  }, [progress]);

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
