import type { Summary } from '../types';

export const SUMMARIES: Summary[] = [
  {
    moduleId: 'biopsych',
    title: 'Biopsychologie – Übersicht',
    sections: [
      {
        heading: 'Das Nervensystem',
        content:
          'Das menschliche Nervensystem besteht aus dem Zentralnervensystem (Gehirn + Rückenmark) und dem peripheren Nervensystem. Das Gehirn ist in Regionen gegliedert: Großhirnrinde (Kortex), limbisches System, Kleinhirn und Hirnstamm.',
      },
      {
        heading: 'Neuronen und Signalübertragung',
        content:
          'Neuronen kommunizieren elektrisch (Aktionspotenziale) und chemisch (Neurotransmitter an Synapsen). Das Ruhemembranpotenzial liegt bei ca. -70 mV. Beim Aktionspotenzial depolarisiert die Membran auf +40 mV und repolarisiert danach.',
      },
      {
        heading: 'Wichtige Hirnstrukturen',
        content:
          'Hippocampus: Gedächtniskonsolidierung. Amygdala: Emotionsverarbeitung, Angst. Präfrontaler Kortex: Planung, Entscheidungen. Broca-/Wernicke-Areal: Sprachproduktion/-verstehen. Cerebellum: Motorkoordination.',
      },
      {
        heading: 'Neuroplastizität',
        content:
          'Das Gehirn verändert sich durch Erfahrung: synaptische Verstärkung (LTP), Pruning ungenutzter Verbindungen, Neurogenese im Hippocampus. Basis für Lernen, Rehabilitation nach Hirnverletzungen.',
      },
    ],
  },
  {
    moduleId: 'socialpsych',
    title: 'Sozialpsychologie – Übersicht',
    sections: [
      {
        heading: 'Soziale Kognition',
        content:
          'Wie wir über andere denken: Schemata, Stereotype, Heuristiken. Wichtige Verzerrungen: Fundamentaler Attributionsfehler, Halo-Effekt, Bestätigungsfehler. Attributionstheorien (Heider, Kelley) erklären, wie wir Ursachen für Verhalten suchen.',
      },
      {
        heading: 'Einstellungen und Einstellungsänderung',
        content:
          'Einstellungen haben kognitive, affektive und behaviorale Komponenten. Kognitive Dissonanz (Festinger) motiviert zur Einstellungsänderung bei Widersprüchen. Persuasion: zentraler vs. peripherer Weg (Elaboration Likelihood Model).',
      },
      {
        heading: 'Konformität und Gehorsam',
        content:
          'Asch-Experiment: Menschen passen ihre Urteile an Gruppen an. Milgram-Experiment: Gehorsamkeit gegenüber Autoritäten, auch bei moralischen Konflikten. Informationaler vs. normativer sozialer Einfluss.',
      },
      {
        heading: 'Gruppenverhalten',
        content:
          'Soziale Erleichterung (einfache Aufgaben) vs. soziales Faulenzen (komplexe/wenig motivierende Aufgaben). Groupthink: Konformitätsdruck führt zu schlechten Gruppenentscheidungen. Deindividuation: Verlust der Selbstwahrnehmung in Gruppen.',
      },
    ],
  },
  {
    moduleId: 'ai',
    title: 'Grundlagen KI – Übersicht',
    sections: [
      {
        heading: 'Was ist KI?',
        content:
          'Künstliche Intelligenz bezeichnet Systeme, die Aufgaben ausführen, die normalerweise menschliche Intelligenz erfordern: Verstehen, Schlussfolgern, Lernen, Wahrnehmen. Teilbereiche: Machine Learning, Natural Language Processing, Computer Vision, Robotik.',
      },
      {
        heading: 'Machine Learning',
        content:
          'Modelle lernen aus Daten statt durch explizite Programmierung. Typen: Überwachtes Lernen (labeled data), Unüberwachtes Lernen (Clustering, Dimensionsreduktion), Bestärkendes Lernen (Reward-Signal). Wichtige Konzepte: Training/Test-Split, Bias-Variance-Tradeoff, Overfitting/Underfitting.',
      },
      {
        heading: 'Neuronale Netze & Deep Learning',
        content:
          'Mehrschichtige Netze (MLP, CNN, RNN, Transformer) lernen hierarchische Repräsentationen. Backpropagation + Gradient Descent optimiert Gewichte. Aktivierungsfunktionen (ReLU, Sigmoid) fügen Nicht-Linearität hinzu. Regularisierung (Dropout, L2) bekämpft Overfitting.',
      },
      {
        heading: 'Large Language Models',
        content:
          'Transformer-Architektur (Attention-Mechanismus) ermöglicht Modelle wie GPT, Claude, Gemini. Pretraining auf riesigen Textmengen, Fine-tuning für spezifische Aufgaben. Prompting-Techniken: Zero-Shot, Few-Shot, Chain-of-Thought.',
      },
    ],
  },
];
