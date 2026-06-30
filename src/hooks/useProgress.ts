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
    quizCorrectIds: new Set(),
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
        quizCorrectIds: new Set(parsed.biopsych?.quizCorrectIds ?? []),
        quizAttempted: new Set(parsed.biopsych?.quizAttempted ?? []),
      },
      socialpsych: {
        ...initialProgress('socialpsych'),
        flashcardsLearned: new Set(parsed.socialpsych?.flashcardsLearned ?? []),
        quizCorrectIds: new Set(parsed.socialpsych?.quizCorrectIds ?? []),
        quizAttempted: new Set(parsed.socialpsych?.quizAttempted ?? []),
      },
      ai: {
        ...initialProgress('ai'),
        flashcardsLearned: new Set(parsed.ai?.flashcardsLearned ?? []),
        quizCorrectIds: new Set(parsed.ai?.quizCorrectIds ?? []),
        quizAttempted: new Set(parsed.ai?.quizAttempted ?? []),
      },
      pm: {
        ...initialProgress('pm'),
        flashcardsLearned: new Set(parsed.pm?.flashcardsLearned ?? []),
        quizCorrectIds: new Set(parsed.pm?.quizCorrectIds ?? []),
        quizAttempted: new Set(parsed.pm?.quizAttempted ?? []),
      },
      diffpsych: {
        ...initialProgress('diffpsych'),
        flashcardsLearned: new Set(parsed.diffpsych?.flashcardsLearned ?? []),
        quizCorrectIds: new Set(parsed.diffpsych?.quizCorrectIds ?? []),
        quizAttempted: new Set(parsed.diffpsych?.quizAttempted ?? []),
      },
    };
  } catch {
    return {
      biopsych: initialProgress('biopsych'),
      socialpsych: initialProgress('socialpsych'),
      ai: initialProgress('ai'),
      pm: initialProgress('pm'),
      diffpsych: initialProgress('diffpsych'),
    };
  }
}

function saveToStorage(progress: Record<ModuleId, Progress>) {
  const serializable = {
    biopsych: {
      flashcardsLearned: [...progress.biopsych.flashcardsLearned],
      quizCorrectIds: [...progress.biopsych.quizCorrectIds],
      quizAttempted: [...progress.biopsych.quizAttempted],
    },
    socialpsych: {
      flashcardsLearned: [...progress.socialpsych.flashcardsLearned],
      quizCorrectIds: [...progress.socialpsych.quizCorrectIds],
      quizAttempted: [...progress.socialpsych.quizAttempted],
    },
    ai: {
      flashcardsLearned: [...progress.ai.flashcardsLearned],
      quizCorrectIds: [...progress.ai.quizCorrectIds],
      quizAttempted: [...progress.ai.quizAttempted],
    },
    pm: {
      flashcardsLearned: [...progress.pm.flashcardsLearned],
      quizCorrectIds: [...progress.pm.quizCorrectIds],
      quizAttempted: [...progress.pm.quizAttempted],
    },
    diffpsych: {
      flashcardsLearned: [...progress.diffpsych.flashcardsLearned],
      quizCorrectIds: [...progress.diffpsych.quizCorrectIds],
      quizAttempted: [...progress.diffpsych.quizAttempted],
    },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
}

const MODULE_IDS: ModuleId[] = ['biopsych', 'socialpsych', 'ai', 'pm', 'diffpsych'];

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
      attempted.add(questionId);
      const correctIds = new Set(prev[moduleId].quizCorrectIds);
      if (correct) correctIds.add(questionId);
      return {
        ...prev,
        [moduleId]: { ...prev[moduleId], quizAttempted: attempted, quizCorrectIds: correctIds },
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
      acc.quizCorrect += progress[id].quizCorrectIds.size;
      return acc;
    },
    { flashcardsTotal: 0, flashcardsLearned: 0, quizTotal: 0, quizCorrect: 0 }
  );

  return { progress, markFlashcardLearned, recordQuizAnswer, resetProgress, totalProgress };
}
