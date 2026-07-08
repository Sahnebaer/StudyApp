import type { Module } from '../types';

export const MODULES: Module[] = [
  {
    id: 'biopsych',
    title: 'Biopsychologie',
    description: 'Neurobiologische Grundlagen des Verhaltens und Erlebens',
    color: 'from-emerald-500 to-teal-600',
    icon: '🧠',
  },
  {
    id: 'socialpsych',
    title: 'Sozialpsychologie',
    description: 'Einfluss sozialer Faktoren auf Denken, Fühlen und Handeln',
    color: 'from-violet-500 to-purple-600',
    icon: '👥',
  },
  {
    id: 'ai',
    title: 'Grundlagen KI',
    description: 'Konzepte und Methoden der Künstlichen Intelligenz',
    color: 'from-blue-500 to-cyan-600',
    icon: '🤖',
  },
  {
    id: 'pm',
    title: 'Projektmanagement',
    description: 'Methoden, Prozesse und Werkzeuge im Projektmanagement',
    color: 'from-orange-500 to-amber-600',
    icon: '📋',
  },
  {
    id: 'diffpsych',
    title: 'Differentielle Psychologie',
    description: 'Individuelle Unterschiede, Persönlichkeit, Intelligenz und Persönlichkeitstheorien',
    color: 'from-rose-500 to-pink-600',
    icon: '🧩',
  },
  {
    id: 'mgmt',
    title: 'Management Basics',
    description: 'Unternehmenslebenszyklus, Business-Plan, Finanzierung und Risikomanagement',
    color: 'from-indigo-500 to-slate-600',
    icon: '📊',
  },
];
