import type { Flashcard } from '../types';

export const FLASHCARDS: Flashcard[] = [
  // ── Biopsychologie (Platzhalter – wird noch ersetzt) ──────────────────────
  {
    id: 'bp-1', moduleId: 'biopsych', category: 'Neuronen',
    question: 'Was ist ein Neuron?',
    answer: 'Eine Nervenzelle, die elektrische und chemische Signale weiterleitet. Besteht aus Zellkörper (Soma), Dendriten und Axon.',
  },
  {
    id: 'bp-2', moduleId: 'biopsych', category: 'Neuronen',
    question: 'Was ist ein Aktionspotenzial?',
    answer: 'Eine kurzfristige Umkehrung des Membranpotenzials (~-70 mV → +40 mV), die das elektrische Signal entlang des Axons weiterleitet.',
  },
  {
    id: 'bp-3', moduleId: 'biopsych', category: 'Gehirn',
    question: 'Welche Funktion hat der präfrontale Kortex?',
    answer: 'Planung, Entscheidungsfindung, Impulskontrolle und Arbeitsgedächtnis – Teil der Exekutivfunktionen.',
  },
  {
    id: 'bp-4', moduleId: 'biopsych', category: 'Gedächtnis',
    question: 'Was ist Neuroplastizität?',
    answer: 'Die Fähigkeit des Gehirns, sich durch Erfahrung strukturell und funktionell zu verändern – Grundlage von Lernen und Gedächtnis.',
  },
  {
    id: 'bp-5', moduleId: 'biopsych', category: 'Neuronen',
    question: 'Was sind Neurotransmitter?',
    answer: 'Chemische Botenstoffe, die an Synapsen von einem Neuron zum nächsten übertragen werden (z.B. Dopamin, Serotonin, GABA).',
  },

  // ── Sozialpsychologie (SS 2026 · Prof. Dr. Dindas) ────────────────────────
  // Einführung
  {
    id: 'sp-1', moduleId: 'socialpsych', category: 'Einführung',
    question: 'Definition Sozialpsychologie (Allport, 1954)',
    answer: 'Versuch zu verstehen, wie Gedanken, Gefühle und Verhalten durch tatsächliche, vorgestellte oder implizite Anwesenheit anderer beeinflusst werden.',
  },
  {
    id: 'sp-2', moduleId: 'socialpsych', category: 'Einführung',
    question: 'Soziale Erleichterung (Triplett, 1898)',
    answer: 'Bessere Leistung bei Anwesenheit anderer. Erstes sozialpsychologisches Experiment: Schüler rollen Angelschnur schneller auf, wenn andere zuschauen.',
  },
  {
    id: 'sp-3', moduleId: 'socialpsych', category: 'Einführung',
    question: 'Soziales Faulenzen (Ringelmann, 1913)',
    answer: 'In der Gruppe sinkt die individuelle Leistung – jede Person strengt sich weniger an, je größer die Gruppe.',
  },
  {
    id: 'sp-4', moduleId: 'socialpsych', category: 'Einführung',
    question: '4 Analyseebenen der Sozialpsychologie',
    answer: '1. Intrapsychisch (Wahrnehmung, Einstellungen)\n2. Interindividuell (Aggression, Hilfeverhalten)\n3. Intragruppe (Konformität, Gehorsam)\n4. Intergruppe (Diskriminierung, Konflikte)',
  },
  {
    id: 'sp-5', moduleId: 'socialpsych', category: 'Einführung',
    question: 'Alltagspsychologie vs. empirische Befunde',
    answer: 'Alltagsweisheiten sind nicht falsifizierbar, z.B. „Gleich und gleich gesellt sich gern" vs. „Gegensätze ziehen sich an". Empirische Forschung prüft Aussagen systematisch.',
  },
  {
    id: 'sp-6', moduleId: 'socialpsych', category: 'Einführung',
    question: 'Replikationskrise der Psychologie',
    answer: 'In den 2010er Jahren ließ sich ein Großteil psychologischer Studien nicht replizieren. Führte zu tiefgreifenden Änderungen in Forschungsstandards.',
  },
  // Methoden
  {
    id: 'sp-7', moduleId: 'socialpsych', category: 'Methoden',
    question: 'Experiment als Methode',
    answer: 'Königsweg der Sozialpsychologie – erlaubt Kausalaussagen. Die unabhängige Variable (UV) wird manipuliert, der Effekt auf die abhängige Variable (AV) gemessen.',
  },
  {
    id: 'sp-8', moduleId: 'socialpsych', category: 'Methoden',
    question: 'Korrelationsstudie / Befragung',
    answer: 'Beschreibt Zusammenhänge (Kann Y vorhergesagt werden, wenn X bekannt ist?), klärt aber keine Kausalität.',
  },
  {
    id: 'sp-9', moduleId: 'socialpsych', category: 'Methoden',
    question: 'Beobachtung als Methode',
    answer: 'Beschreibt Verhalten (Welcher Art ist das Phänomen?). Methoden: Ethnografie, Dokumentenanalyse.',
  },
  {
    id: 'sp-10', moduleId: 'socialpsych', category: 'Methoden',
    question: 'Experten vs. Algorithmen (Hall, 1988)',
    answer: 'Psychiaterteam traf Rückfallprognosen zu 53% korrekt (knapp über Zufall). Ein Algorithmus mit gewichteten Prädiktoren lag zu 92% richtig.',
  },
  // Attribution
  {
    id: 'sp-11', moduleId: 'socialpsych', category: 'Attribution',
    question: 'Attribution',
    answer: 'Prozess, durch den Individuen die Ursachen für Ereignisse, das Verhalten anderer und eigene Handlungen erklären (Ursachenzuschreibung).',
  },
  {
    id: 'sp-12', moduleId: 'socialpsych', category: 'Attribution',
    question: 'Kausalattribution',
    answer: 'Der Prozess, durch den ein Beobachter zu Schlussfolgerungen über die Ursachen des Verhaltens einer anderen Person gelangt. (Jonas et al., 2014)',
  },
  {
    id: 'sp-13', moduleId: 'socialpsych', category: 'Attribution',
    question: 'Internale vs. externale Attribution',
    answer: 'Internal: Ursache liegt in der Person (Charakter, Fähigkeit).\nExternal: Ursache liegt in der Situation (Umstände, Zufall).',
  },
  {
    id: 'sp-14', moduleId: 'socialpsych', category: 'Attribution',
    question: 'Fundamentaler Attributionsfehler',
    answer: 'Tendenz, den Einfluss dispositionaler (persönlicher) Faktoren zu über- und situativer Faktoren zu unterschätzen, wenn man das Verhalten anderer erklärt.',
  },
  {
    id: 'sp-15', moduleId: 'socialpsych', category: 'Attribution',
    question: 'Ultimativer Attributionsfehler',
    answer: 'Selbstwertdienliche Attribution auf Gruppenebene:\n- Positives der Eigengruppe → internal\n- Negatives der Fremdgruppe → internal\n- Positives der Fremdgruppe → external',
  },
  {
    id: 'sp-16', moduleId: 'socialpsych', category: 'Attribution',
    question: 'Automatisches vs. kontrolliertes Denken',
    answer: 'Automatisch: schnell, unbewusst, fehleranfällig für Stereotype.\nKontrolliert: langsam, reflektiert, kann Verzerrungen reduzieren.',
  },
  // Heuristiken
  {
    id: 'sp-17', moduleId: 'socialpsych', category: 'Heuristiken',
    question: 'Heuristik',
    answer: 'Mentale Abkürzung (Faustregel), die schnelle Urteile ermöglicht, aber fehleranfällig ist. Das Gehirn spart Energie, macht dabei aber systematische Fehler.',
  },
  {
    id: 'sp-18', moduleId: 'socialpsych', category: 'Heuristiken',
    question: 'Verfügbarkeitsheuristik',
    answer: 'Ereignisse werden als wahrscheinlicher eingeschätzt, wenn sie leicht erinnerbar sind – auch wenn das irreführend ist (z.B. durch übermäßige Medienberichterstattung).',
  },
  {
    id: 'sp-19', moduleId: 'socialpsych', category: 'Heuristiken',
    question: 'Repräsentativitätsheuristik',
    answer: 'Beurteilungen basieren auf Ähnlichkeit mit Prototypen, nicht auf tatsächlicher Wahrscheinlichkeit. Führt zur Vernachlässigung von Basisraten.',
  },
  {
    id: 'sp-20', moduleId: 'socialpsych', category: 'Heuristiken',
    question: 'Ankerheuristik (Tversky & Kahneman, 1972)',
    answer: 'Ein Ausgangswert (Anker) beeinflusst das endgültige Urteil – die Schätzung wird meist zu wenig vom Anker wegbewegt (ungenügende Adjustierung).',
  },
  {
    id: 'sp-21', moduleId: 'socialpsych', category: 'Heuristiken',
    question: 'Rückschaufehler (Hindsight Bias)',
    answer: 'Nach Bekanntwerden eines Ergebnisses glaubt man, es vorher gewusst zu haben: „Das war doch klar." Erinnerungen werden nachträglich angepasst.',
  },
  {
    id: 'sp-22', moduleId: 'socialpsych', category: 'Heuristiken',
    question: 'Wahrheitseffekt (Truth Effect)',
    answer: 'Je häufiger eine Aussage wiederholt wird, desto glaubwürdiger wirkt sie – unabhängig von ihrem tatsächlichen Wahrheitsgehalt. Werbung nutzt das gezielt.',
  },
  {
    id: 'sp-23', moduleId: 'socialpsych', category: 'Heuristiken',
    question: 'Kognitive Verzerrung (Cognitive Bias)',
    answer: 'Systematische, fehlerhafte Neigungen beim Wahrnehmen, Erinnern, Denken und Urteilen – oft unbewusst, basierend auf Heuristiken.',
  },
  {
    id: 'sp-24', moduleId: 'socialpsych', category: 'Heuristiken',
    question: 'Konjunktionstäuschung',
    answer: 'Menschen halten die Verbindung zweier Ereignisse (A UND B) für wahrscheinlicher als ein einzelnes Ereignis (A) allein – Verstoß gegen Wahrscheinlichkeitsregeln.',
  },
  // Selbstkonzept
  {
    id: 'sp-25', moduleId: 'socialpsych', category: 'Selbstkonzept',
    question: 'Selbstkonzept',
    answer: 'Gesamtheit der Überzeugungen einer Person über sich selbst. Entsteht und entwickelt sich durch soziale Interaktionen und Vergleiche mit anderen.',
  },
  {
    id: 'sp-26', moduleId: 'socialpsych', category: 'Selbstkonzept',
    question: 'Selbstaufwertung (Self-Enhancement)',
    answer: 'Psychologischer Prozess zur Steigerung des eigenen Selbstwertgefühls durch positive Selbstbewertung und Überbetonung eigener Stärken.',
  },
  {
    id: 'sp-27', moduleId: 'socialpsych', category: 'Selbstkonzept',
    question: 'Selbstdarstellung (Self-Presentation)',
    answer: 'Strategische Art, wie wir versuchen, die Eindrücke zu steuern, die wir einem Publikum kommunizieren – durch Kleidung, Sprache, Online-Profile etc. (Jones & Pittman, 1982)',
  },
  {
    id: 'sp-28', moduleId: 'socialpsych', category: 'Selbstkonzept',
    question: 'Unrealistischer Optimismus',
    answer: 'Die Annahme, dass Gutes einem selbst häufiger und Schlechtes einem selbst seltener widerfährt als anderen Menschen.',
  },
  {
    id: 'sp-29', moduleId: 'socialpsych', category: 'Selbstkonzept',
    question: 'Soziale Identität',
    answer: 'Menschen definieren ihr Selbstkonzept auch über Gruppenmitgliedschaften. Der Eigenwert der Gruppe wird über Vergleiche mit Fremdgruppen bestimmt.',
  },
  {
    id: 'sp-30', moduleId: 'socialpsych', category: 'Selbstkonzept',
    question: 'Studie Vazire & Mehl (2008)',
    answer: 'Nahestehende Personen können das Verhalten einer Person genauso gut vorhersagen wie die Person selbst – Selbst- und Fremdwahrnehmung sind gleich wertvoll.',
  },
  // Einstellungen
  {
    id: 'sp-31', moduleId: 'socialpsych', category: 'Einstellungen',
    question: 'Einstellung (ABC-Modell)',
    answer: 'Bewertende Reaktion mit drei Komponenten:\nA = Affektiv (Gefühle)\nB = Behavioral (Verhalten)\nC = Kognitiv (Gedanken/Überzeugungen)',
  },
  {
    id: 'sp-32', moduleId: 'socialpsych', category: 'Einstellungen',
    question: 'Theory of Reasoned Action',
    answer: 'Verhaltensabsicht = Ergebnis eines rationalen Prozesses aus Einstellungen + subjektiven Normen. Gilt bei genug Zeit zur Reflexion.',
  },
  {
    id: 'sp-33', moduleId: 'socialpsych', category: 'Einstellungen',
    question: 'Theory of Planned Behavior',
    answer: 'Erweiterung der Theory of Reasoned Action: ergänzt wahrgenommene Verhaltenskontrolle als dritte Einflussgröße auf Verhaltensabsicht und Verhalten.',
  },
  {
    id: 'sp-34', moduleId: 'socialpsych', category: 'Einstellungen',
    question: 'Balance-Theorie',
    answer: 'Menschen streben nach Gleichgewicht ihrer Einstellungen. Unstimmige Triaden (Person-Person-Objekt) werden als unangenehm empfunden und erzeugen Druck zur Änderung.',
  },
  // Gruppen
  {
    id: 'sp-35', moduleId: 'socialpsych', category: 'Gruppen',
    question: 'Konformität',
    answer: 'Angleichung des eigenen Verhaltens oder der Meinung an die Mehrheit einer Gruppe, auch wenn man innerlich anderer Meinung ist.',
  },
  {
    id: 'sp-36', moduleId: 'socialpsych', category: 'Gruppen',
    question: 'Gehorsam (Milgram)',
    answer: 'Bereitschaft, Anweisungen von Autoritätspersonen zu folgen – auch wenn sie dem eigenen Gewissen widersprechen. Milgrams Experiment zeigte erschreckend hohen Gehorsam.',
  },
  {
    id: 'sp-37', moduleId: 'socialpsych', category: 'Gruppen',
    question: 'Soziales Faulenzen in Gruppen',
    answer: 'Individuelle Leistung sinkt in der Gruppe, weil sich Beiträge einzelner Personen in der Gesamtleistung „verstecken" (Ringelmann-Effekt).',
  },
  {
    id: 'sp-38', moduleId: 'socialpsych', category: 'Gruppen',
    question: 'Intra- vs. Intergruppe',
    answer: 'Intragruppe: Prozesse innerhalb einer Gruppe (Normen, Konformität, Leistung).\nIntergruppe: Prozesse zwischen Gruppen (Diskriminierung, Konflikte, Vorurteile).',
  },

  // ── Grundlagen KI (Platzhalter – wird noch ersetzt) ───────────────────────
  {
    id: 'ai-1', moduleId: 'ai', category: 'Grundlagen',
    question: 'Was ist der Unterschied zwischen überwachtem und unüberwachtem Lernen?',
    answer: 'Überwachtes Lernen nutzt gelabelte Trainingsdaten (Input-Output-Paare). Unüberwachtes Lernen findet Muster in ungelabelten Daten ohne Vorgaben.',
  },
  {
    id: 'ai-2', moduleId: 'ai', category: 'Grundlagen',
    question: 'Was ist Overfitting?',
    answer: 'Ein Modell passt sich zu stark den Trainingsdaten an und generalisiert schlecht auf neue, unbekannte Daten.',
  },
  {
    id: 'ai-3', moduleId: 'ai', category: 'Neuronale Netze',
    question: 'Was ist ein neuronales Netz?',
    answer: 'Ein Machine-Learning-Modell aus verbundenen Schichten (Layer) von künstlichen Neuronen, das Muster in Daten erlernt.',
  },
  {
    id: 'ai-4', moduleId: 'ai', category: 'Optimierung',
    question: 'Was bedeutet der Begriff "Gradient Descent"?',
    answer: 'Ein Optimierungsalgorithmus, der iterativ die Parameter eines Modells in Richtung des stärksten Gefälles der Verlustfunktion anpasst, um den Fehler zu minimieren.',
  },
  {
    id: 'ai-5', moduleId: 'ai', category: 'LLMs',
    question: 'Was ist ein Large Language Model (LLM)?',
    answer: 'Ein auf riesigen Textmengen trainiertes neuronales Netz, das Sprache versteht und generiert (z.B. GPT, Claude).',
  },
];
