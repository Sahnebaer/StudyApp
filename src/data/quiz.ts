import type { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Biopsychologie
  {
    id: 'bp-q1',
    moduleId: 'biopsych',
    question: 'Welcher Neurotransmitter ist hauptsächlich mit dem Belohnungssystem verbunden?',
    options: ['Serotonin', 'Dopamin', 'GABA', 'Glutamat'],
    correctIndex: 1,
    explanation: 'Dopamin spielt eine zentrale Rolle im mesolimbischen Belohnungssystem und ist eng mit Motivation und Belohnung verknüpft.',
  },
  {
    id: 'bp-q2',
    moduleId: 'biopsych',
    question: 'Was beschreibt das Alles-oder-Nichts-Prinzip bei Neuronen?',
    options: [
      'Ein Neuron feuert proportional zur Reizstärke',
      'Ein Neuron feuert entweder vollständig oder gar nicht',
      'Alle Neuronen eines Netzwerks feuern gleichzeitig',
      'Neuronen können nicht mehrfach hintereinander feuern',
    ],
    correctIndex: 1,
    explanation: 'Das Alles-oder-Nichts-Prinzip besagt, dass ein Aktionspotenzial entweder ausgelöst wird (wenn der Schwellenwert erreicht ist) oder nicht – die Stärke ist immer gleich.',
  },
  {
    id: 'bp-q3',
    moduleId: 'biopsych',
    question: 'Welche Gehirnregion ist primär für die Konsolidierung von Langzeitgedächtnis verantwortlich?',
    options: ['Amygdala', 'Hippocampus', 'Cerebellum', 'Thalamus'],
    correctIndex: 1,
    explanation: 'Der Hippocampus ist entscheidend für die Überführung von Kurzzeit- ins Langzeitgedächtnis (Konsolidierung).',
  },
  // Sozialpsychologie
  {
    id: 'sp-q1',
    moduleId: 'socialpsych',
    question: 'Welcher Begriff beschreibt die Tendenz, in Gruppen weniger Aufwand zu betreiben?',
    options: ['Soziale Erleichterung', 'Soziales Faulenzen', 'Deindividuation', 'Gruppendenken'],
    correctIndex: 1,
    explanation: 'Soziales Faulenzen (Social Loafing) beschreibt die Reduzierung der individuellen Anstrengung, wenn man in einer Gruppe arbeitet.',
  },
  {
    id: 'sp-q2',
    moduleId: 'socialpsych',
    question: 'Was zeigte das Stanford-Gefängnisexperiment von Zimbardo?',
    options: [
      'Menschen gehorchen Autoritäten blind',
      'Soziale Rollen können das Verhalten stark beeinflussen',
      'Gruppen treffen bessere Entscheidungen als Einzelpersonen',
      'Bestrafung ist effektiver als Belohnung',
    ],
    correctIndex: 1,
    explanation: 'Zimbardos Experiment zeigte, wie schnell Menschen zugewiesene soziale Rollen (Wächter/Gefangener) internalisieren und ihr Verhalten daran anpassen.',
  },
  {
    id: 'sp-q3',
    moduleId: 'socialpsych',
    question: 'Was ist der "Halo-Effekt"?',
    options: [
      'Positive Stimmung verbessert die Gedächtnisleistung',
      'Eine auffällige Eigenschaft färbt die Wahrnehmung aller anderen Eigenschaften ein',
      'Menschen helfen eher, wenn sie beobachtet werden',
      'Erste Eindrücke sind schwerer zu revidieren als spätere',
    ],
    correctIndex: 1,
    explanation: 'Der Halo-Effekt beschreibt, wie eine herausragende Eigenschaft (z.B. Attraktivität) die Wahrnehmung anderer Eigenschaften (z.B. Intelligenz, Freundlichkeit) positiv oder negativ beeinflusst.',
  },
  // Grundlagen KI
  {
    id: 'ai-q1',
    moduleId: 'ai',
    question: 'Was ist der Zweck einer Aktivierungsfunktion in einem neuronalen Netz?',
    options: [
      'Daten zu normalisieren',
      'Nicht-Linearität einzuführen',
      'Die Lernrate zu steuern',
      'Overfitting zu verhindern',
    ],
    correctIndex: 1,
    explanation: 'Aktivierungsfunktionen (z.B. ReLU, Sigmoid) fügen Nicht-Linearität hinzu, damit das Netz komplexe Muster lernen kann – ohne sie wäre das Netz nur eine lineare Transformation.',
  },
  {
    id: 'ai-q2',
    moduleId: 'ai',
    question: 'Was bedeutet "Training" eines ML-Modells?',
    options: [
      'Das Modell auf neuen Daten testen',
      'Die Modellparameter anpassen, um den Fehler auf Trainingsdaten zu minimieren',
      'Das Modell für den Produktionseinsatz optimieren',
      'Datensätze für das Modell aufbereiten',
    ],
    correctIndex: 1,
    explanation: 'Training bedeutet, die Gewichte (Parameter) des Modells iterativ anzupassen, um die Verlustfunktion auf den Trainingsdaten zu minimieren.',
  },
  {
    id: 'ai-q3',
    moduleId: 'ai',
    question: 'Was ist der Unterschied zwischen KI, ML und Deep Learning?',
    options: [
      'Alle drei sind identisch',
      'KI ist der Oberbegriff, ML ein Teilgebiet davon, Deep Learning ein Teilgebiet von ML',
      'Deep Learning ist der Oberbegriff für ML und KI',
      'ML und Deep Learning sind Synonyme',
    ],
    correctIndex: 1,
    explanation: 'KI umfasst alle Ansätze, Maschinen intelligent zu machen. ML ist eine Methode der KI (Lernen aus Daten). Deep Learning ist ein ML-Ansatz mit tiefen neuronalen Netzen.',
  },
];
