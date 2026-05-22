import type { Flashcard } from '../types';

export const FLASHCARDS: Flashcard[] = [
  // Biopsychologie
  {
    id: 'bp-1',
    moduleId: 'biopsych',
    question: 'Was ist ein Neuron?',
    answer: 'Eine Nervenzelle, die elektrische und chemische Signale weiterleitet. Besteht aus Zellkörper (Soma), Dendriten und Axon.',
  },
  {
    id: 'bp-2',
    moduleId: 'biopsych',
    question: 'Was ist ein Aktionspotenzial?',
    answer: 'Eine kurzfristige Umkehrung des Membranpotenzials (~-70 mV → +40 mV), die das elektrische Signal entlang des Axons weiterleitet.',
  },
  {
    id: 'bp-3',
    moduleId: 'biopsych',
    question: 'Welche Funktion hat der präfrontale Kortex?',
    answer: 'Planung, Entscheidungsfindung, Impulskontrolle und Arbeitsgedächtnis – Teil der Exekutivfunktionen.',
  },
  {
    id: 'bp-4',
    moduleId: 'biopsych',
    question: 'Was ist Neuroplastizität?',
    answer: 'Die Fähigkeit des Gehirns, sich durch Erfahrung strukturell und funktionell zu verändern – Grundlage von Lernen und Gedächtnis.',
  },
  {
    id: 'bp-5',
    moduleId: 'biopsych',
    question: 'Was sind Neurotransmitter?',
    answer: 'Chemische Botenstoffe, die an Synapsen von einem Neuron zum nächsten übertragen werden (z.B. Dopamin, Serotonin, GABA).',
  },
  // Sozialpsychologie
  {
    id: 'sp-1',
    moduleId: 'socialpsych',
    question: 'Was ist kognitive Dissonanz?',
    answer: 'Ein unangenehmer Spannungszustand, der entsteht, wenn zwei mentale Kognitionen (Gedanken, Überzeugungen, Handlungen) widersprüchlich sind.',
  },
  {
    id: 'sp-2',
    moduleId: 'socialpsych',
    question: 'Was versteht man unter dem Fundamentalen Attributionsfehler?',
    answer: 'Die Tendenz, das Verhalten anderer auf deren Persönlichkeit zurückzuführen und situative Faktoren zu unterschätzen.',
  },
  {
    id: 'sp-3',
    moduleId: 'socialpsych',
    question: 'Was ist soziale Erleichterung (Social Facilitation)?',
    answer: 'Die Verbesserung der Leistung bei einfachen oder gut geübten Aufgaben durch die Anwesenheit anderer Personen.',
  },
  {
    id: 'sp-4',
    moduleId: 'socialpsych',
    question: 'Was ist Konformität?',
    answer: 'Die Anpassung des eigenen Verhaltens oder der Meinung an die Normen einer Gruppe (z.B. Asch-Experiment).',
  },
  {
    id: 'sp-5',
    moduleId: 'socialpsych',
    question: 'Was ist das Milgram-Experiment?',
    answer: 'Experiment zur Gehorsamkeit gegenüber Autorität: Versuchspersonen verabreichten auf Anweisung scheinbar gefährliche Stromschläge.',
  },
  // Grundlagen KI
  {
    id: 'ai-1',
    moduleId: 'ai',
    question: 'Was ist der Unterschied zwischen überwachtem und unüberwachtem Lernen?',
    answer: 'Überwachtes Lernen nutzt gelabelte Trainingsdaten (Input-Output-Paare). Unüberwachtes Lernen findet Muster in ungelabelten Daten ohne Vorgaben.',
  },
  {
    id: 'ai-2',
    moduleId: 'ai',
    question: 'Was ist Overfitting?',
    answer: 'Ein Modell passt sich zu stark den Trainingsdaten an und generalisiert schlecht auf neue, unbekannte Daten.',
  },
  {
    id: 'ai-3',
    moduleId: 'ai',
    question: 'Was ist ein neuronales Netz?',
    answer: 'Ein Machine-Learning-Modell aus verbundenen Schichten (Layer) von künstlichen Neuronen, das Muster in Daten erlernt.',
  },
  {
    id: 'ai-4',
    moduleId: 'ai',
    question: 'Was bedeutet der Begriff "Gradient Descent"?',
    answer: 'Ein Optimierungsalgorithmus, der iterativ die Parameter eines Modells in Richtung des stärksten Gefälles der Verlustfunktion anpasst, um den Fehler zu minimieren.',
  },
  {
    id: 'ai-5',
    moduleId: 'ai',
    question: 'Was ist ein Large Language Model (LLM)?',
    answer: 'Ein auf riesigen Textmengen trainiertes neuronales Netz, das Sprache versteht und generiert (z.B. GPT, Claude).',
  },
];
