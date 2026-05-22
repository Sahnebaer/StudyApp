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
    title: 'Sozialpsychologie – Übersicht (SS 2026 · Prof. Dr. Dindas)',
    sections: [
      {
        heading: 'Einführung & Methoden',
        content:
          'Sozialpsychologie untersucht, wie Gedanken, Gefühle und Verhalten durch Anwesenheit anderer beeinflusst werden (Allport, 1954). Analyseebenen: intrapsychisch, interindividuell, Intragruppe, Intergruppe. Methoden: Experiment (Kausalaussagen), Korrelationsstudie (Zusammenhänge), Beobachtung (Phänomenbeschreibung). Wichtig: Replikationskrise der 2010er Jahre hat Forschungsstandards verändert.',
      },
      {
        heading: 'Attribution',
        content:
          'Attribution = Ursachenzuschreibung für Verhalten. Internal: Ursache in der Person. External: Ursache in der Situation. Fundamentaler Attributionsfehler: Dispositionale Faktoren werden über-, situative unterschätzt. Ultimativer Attributionsfehler: Selbstwertdienliche Attribution auf Gruppenebene. Automatisches Denken ist schnell, aber fehleranfällig; kontrolliertes Denken kann Verzerrungen reduzieren.',
      },
      {
        heading: 'Heuristiken & kognitive Verzerrungen',
        content:
          'Heuristiken sind mentale Abkürzungen, die schnell, aber fehleranfällig sind. Verfügbarkeitsheuristik: Leicht erinnerbare Ereignisse wirken wahrscheinlicher. Repräsentativitätsheuristik: Ähnlichkeit mit Prototypen ersetzt Basisraten. Ankerheuristik: Ausgangswert beeinflusst Urteil (Tversky & Kahneman, 1972). Rückschaufehler: „Das war doch klar." Wahrheitseffekt: Wiederholung erhöht wahrgenommene Glaubwürdigkeit. Konjunktionstäuschung: A ∧ B wird wahrscheinlicher als A allein eingeschätzt.',
      },
      {
        heading: 'Selbstkonzept & Einstellungen',
        content:
          'Selbstkonzept entsteht durch soziale Interaktionen. Self-Enhancement steigert Selbstwert. Selbstdarstellung (Jones & Pittman, 1982) steuert Fremdwahrnehmung. Unrealistischer Optimismus: Gutes widerfährt mir häufiger. Einstellungen (ABC-Modell): affektiv, behavioral, kognitiv. Theory of Reasoned Action (Einstellungen + Normen) → Theory of Planned Behavior (+ wahrgenommene Verhaltenskontrolle). Balance-Theorie: Menschen streben nach konsistenten Einstellungstriaden.',
      },
      {
        heading: 'Gruppen & sozialer Einfluss',
        content:
          'Soziale Erleichterung (Triplett, 1898): Anwesenheit anderer verbessert Leistung bei einfachen Aufgaben. Soziales Faulenzen (Ringelmann, 1913): Individuelle Leistung sinkt mit Gruppengröße. Konformität: Angleichung an Mehrheitsmeinung. Gehorsam (Milgram): Erschreckend hohe Bereitschaft, Autoritäten zu folgen. Intragruppen-Prozesse: Konformität, Normen, Leistung. Intergruppen-Prozesse: Diskriminierung, Vorurteile, soziale Identität.',
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
