export type ModuleId = 'biopsych' | 'socialpsych' | 'ai' | 'pm';

export interface Module {
  id: ModuleId;
  title: string;
  description: string;
  color: string;
  icon: string;
}

export interface Flashcard {
  id: string;
  moduleId: ModuleId;
  category?: string;
  question: string;
  answer: string;
}

export interface QuizQuestion {
  id: string;
  moduleId: ModuleId;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface Summary {
  moduleId: ModuleId;
  title: string;
  sections: { heading: string; content: string }[];
}

export interface Progress {
  moduleId: ModuleId;
  flashcardsTotal: number;
  flashcardsLearned: Set<string>;
  quizTotal: number;
  quizCorrectIds: Set<string>;
  quizAttempted: Set<string>;
}
