import type { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ── Biopsychologie & Allg. Psychologie I (SS 2026 · Prof. Dr. Jessica Sänger) ──
  {
    id: 'bp-q1', moduleId: 'biopsych',
    question: 'Was ist die korrekte Definition von Lernen in der Psychologie?',
    options: [
      'Eine vorübergehende Verhaltensänderung durch äußere Reize',
      'Eine relativ überdauernde Verhaltensänderung durch Erfahrungen',
      'Die Reifung des Nervensystems im Laufe des Lebens',
      'Die Anpassung des Körpers an neue Umgebungsbedingungen',
    ],
    correctIndex: 1,
    explanation: 'Lernen muss durch Erfahrung entstehen und überdauernd sein – Veränderungen durch Reifung, Müdigkeit oder Krankheit gelten nicht als Lernen.',
  },
  {
    id: 'bp-q2', moduleId: 'biopsych',
    question: 'Welcher Verstärkerplan macht ein Verhalten am löschungsresistentesten?',
    options: [
      'Kontinuierlicher Verstärkerplan',
      'Fix-Intervall-Plan',
      'Variabler Quoten-Plan',
      'Fix-Quoten-Plan',
    ],
    correctIndex: 2,
    explanation: 'Der variable Quoten-Plan (unvorhersehbare Anzahl bis zur Verstärkung) erzeugt die stärkste Löschungsresistenz – genau wie Spielautomaten: Man hört schwer auf, weil die nächste Verstärkung jederzeit kommen könnte.',
  },
  {
    id: 'bp-q3', moduleId: 'biopsych',
    question: 'Welche Gehirnregion ist entscheidend für die Überführung von Kurzzeit- ins Langzeitgedächtnis?',
    options: ['Amygdala', 'Hippocampus', 'Cerebellum', 'Präfrontaler Kortex'],
    correctIndex: 1,
    explanation: 'Der Hippocampus ist kein Langzeitspeicher selbst, sondern überführt (konsolidiert) Informationen ins Langzeitgedächtnis – wie ein Bibliothekar, der Bücher einsortiert.',
  },
  {
    id: 'bp-q4', moduleId: 'biopsych',
    question: 'Was beschreibt das Alles-oder-Nichts-Prinzip bei Neuronen?',
    options: [
      'Ein Neuron feuert proportional zur Reizstärke',
      'Ein Neuron feuert entweder vollständig oder gar nicht',
      'Alle Neuronen eines Netzwerks feuern gleichzeitig',
      'Neuronen können im Ruhezustand keine Signale empfangen',
    ],
    correctIndex: 1,
    explanation: 'Ist der Schwellenwert erreicht, feuert das Neuron mit voller Stärke. Ist er nicht erreicht, feuert es gar nicht. Die Intensität eines Reizes zeigt sich darin, wie oft – nicht wie stark – ein Neuron feuert.',
  },
  {
    id: 'bp-q5', moduleId: 'biopsych',
    question: 'Welcher Neurotransmitter ist hauptsächlich hemmend und an welchem Medikament lässt sich das ablesen?',
    options: [
      'Dopamin – Ritalin erhöht Dopaminspiegel',
      'Glutamat – Koffein blockiert Glutamatrezeptoren',
      'GABA – Benzodiazepine (Valium) wirken über GABA-Rezeptoren',
      'Serotonin – SSRIs hemmen Serotoninabbau',
    ],
    correctIndex: 2,
    explanation: 'GABA ist der wichtigste hemmende Neurotransmitter (33–50 % der Neuronen). Benzodiazepine verstärken die GABA-Wirkung und wirken so beruhigend/angstlösend.',
  },
  {
    id: 'bp-q6', moduleId: 'biopsych',
    question: 'Was zeigte die Taxifahrer-Studie von Woollett & Maguire (2011)?',
    options: [
      'Taxifahrer haben generell ein besseres Raumgedächtnis als andere Berufsgruppen',
      'Der Hippocampus wächst messbar durch intensives Ortslernen – Beleg für Neuroplastizität',
      'Berufsbedingte Belastung verkleinert den präfrontalen Kortex',
      'Navigation aktiviert primär den visuellen Kortex, nicht den Hippocampus',
    ],
    correctIndex: 1,
    explanation: 'Londoner Taxifahrer, die 25.000 Straßen auswendig lernten, zeigten nach ~3 Jahren einen messbar vergrößerten Hippocampus – direkter Nachweis struktureller Neuroplastizität.',
  },
  {
    id: 'bp-q7', moduleId: 'biopsych',
    question: 'Was ist der Unterschied zwischen Sympathikus und Parasympathikus?',
    options: [
      'Sympathikus = unbewusst, Parasympathikus = bewusst steuerbar',
      'Sympathikus = fight or flight (aktiviert), Parasympathikus = rest and digest (beruhigt)',
      'Sympathikus steuert die Verdauung, Parasympathikus die Herzrate',
      'Beide haben dieselbe Funktion in verschiedenen Körperregionen',
    ],
    correctIndex: 1,
    explanation: 'Sympathikus aktiviert den Körper bei Stress (Herzrate ↑, Adrenalin ↑, Verdauung ↓). Parasympathikus sorgt nach dem Stress für Erholung und Regeneration (rest and digest).',
  },
  {
    id: 'bp-q8', moduleId: 'biopsych',
    question: 'Was versteht man unter dem Primacy-Effekt beim Lernen?',
    options: [
      'Zuletzt gelernte Informationen werden am besten erinnert',
      'Zuerst gelernte Informationen werden besser behalten',
      'Besonders emotionale Inhalte werden besser gespeichert',
      'Kurze Wörter werden schneller gelernt als lange',
    ],
    correctIndex: 1,
    explanation: 'Primacy-Effekt: Zu Beginn einer Liste präsentierte Informationen werden tiefer verarbeitet und besser behalten. Recency-Effekt: Am Ende präsentierte sind noch im Arbeitsgedächtnis. Mittlere Inhalte werden am schlechtesten erinnert.',
  },

  // ── Sozialpsychologie (SS 2026 · Prof. Dr. Dindas) ────────────────────────
  {
    id: 'sp-q1', moduleId: 'socialpsych',
    question: 'Wie definierte Allport (1954) die Sozialpsychologie?',
    options: [
      'Das Studium von Gruppenentscheidungen und Führungsverhalten',
      'Das Verstehen, wie Gedanken, Gefühle und Verhalten durch Anwesenheit anderer beeinflusst werden',
      'Die Analyse biologischer Grundlagen sozialen Verhaltens',
      'Die Untersuchung von Persönlichkeitsunterschieden in sozialen Situationen',
    ],
    correctIndex: 1,
    explanation: 'Allports Definition betont die Anwesenheit anderer – auch vorgestellt oder impliziert – als Kernmerkmal sozialpsychologischer Phänomene.',
  },
  {
    id: 'sp-q2', moduleId: 'socialpsych',
    question: 'Was ist der Fundamentale Attributionsfehler?',
    options: [
      'Eigene Fehler werden auf die Situation geschoben',
      'Dispositionale Faktoren werden über-, situative unterschätzt',
      'Situative Faktoren werden über-, dispositionale unterschätzt',
      'Eigene Erfolge werden internal, Misserfolge external attribuiert',
    ],
    correctIndex: 1,
    explanation: 'Der Fundamentale Attributionsfehler beschreibt die Tendenz, das Verhalten anderer zu stark auf ihre Persönlichkeit zurückzuführen und situative Einflüsse zu unterschätzen.',
  },
  {
    id: 'sp-q3', moduleId: 'socialpsych',
    question: 'Welche Heuristik beschreibt den Effekt von Medienberichten auf Risikowahrnehmung?',
    options: [
      'Repräsentativitätsheuristik',
      'Ankerheuristik',
      'Verfügbarkeitsheuristik',
      'Rückschaufehler',
    ],
    correctIndex: 2,
    explanation: 'Die Verfügbarkeitsheuristik führt dazu, dass intensiv berichtete Ereignisse als wahrscheinlicher eingeschätzt werden, weil sie leichter abrufbar sind.',
  },
  {
    id: 'sp-q4', moduleId: 'socialpsych',
    question: 'Was ergänzt die Theory of Planned Behavior gegenüber der Theory of Reasoned Action?',
    options: [
      'Emotionale Bewertung als vierte Komponente',
      'Wahrgenommene Verhaltenskontrolle als dritte Einflussgröße',
      'Unbewusste Motive als Grundlage von Verhaltensabsichten',
      'Soziale Identität als moderierender Faktor',
    ],
    correctIndex: 1,
    explanation: 'Die Theory of Planned Behavior ergänzt die wahrgenommene Verhaltenskontrolle – also das Gefühl, ein Verhalten ausführen zu können – als zusätzlichen Prädiktor für Absicht und Verhalten.',
  },
  {
    id: 'sp-q5', moduleId: 'socialpsych',
    question: 'Was zeigte das Milgram-Experiment?',
    options: [
      'Menschen passen Urteile an Mehrheitsmeinungen an',
      'Soziale Rollen können das Verhalten stark beeinflussen',
      'Versuchspersonen gehorchten Autoritäten trotz moralischer Konflikte',
      'Gruppen treffen bessere Entscheidungen als Einzelpersonen',
    ],
    correctIndex: 2,
    explanation: 'Im Milgram-Experiment verabreichten Versuchspersonen auf Anweisung eines Experimentators scheinbar gefährliche Stromschläge – ein erschreckendes Zeichen für Autoritätsgehorsam.',
  },
  {
    id: 'sp-q6', moduleId: 'socialpsych',
    question: 'Was versteht man unter dem Ringelmann-Effekt?',
    options: [
      'Bessere Leistung durch Beobachtung durch andere',
      'Verschlechterung von Gruppenentscheidungen durch Konformitätsdruck',
      'Sinkende individuelle Leistung mit zunehmender Gruppengröße',
      'Zunahme von Aggression in anonymen Gruppen',
    ],
    correctIndex: 2,
    explanation: 'Ringelmann (1913) zeigte, dass die individuelle Leistung (z.B. beim Seilziehen) sinkt, je mehr Personen beteiligt sind – Grundlage des sozialen Faulenzens.',
  },
  {
    id: 'sp-q7', moduleId: 'socialpsych',
    question: 'Welche drei Komponenten hat eine Einstellung laut ABC-Modell?',
    options: [
      'Aufmerksamkeit, Bewertung, Commitment',
      'Affektiv, Behavioral, Kognitiv',
      'Assoziativ, Bewusst, Chronisch',
      'Aktivierung, Bindung, Kontrolle',
    ],
    correctIndex: 1,
    explanation: 'Das ABC-Modell unterscheidet die affektive (Gefühle), behaviorale (Verhalten) und kognitive (Überzeugungen) Komponente einer Einstellung.',
  },
  {
    id: 'sp-q8', moduleId: 'socialpsych',
    question: 'Was ist der Wahrheitseffekt (Truth Effect)?',
    options: [
      'Wahre Aussagen werden schneller verarbeitet als falsche',
      'Wiederholte Aussagen werden als glaubwürdiger wahrgenommen',
      'Einfache Aussagen gelten als wahrer als komplexe',
      'Aussagen von Experten werden unkritisch akzeptiert',
    ],
    correctIndex: 1,
    explanation: 'Der Wahrheitseffekt beschreibt, dass bloße Wiederholung eine Aussage glaubwürdiger macht – unabhängig von ihrem tatsächlichen Wahrheitsgehalt. Werbung nutzt diesen Effekt gezielt.',
  },

  // ── Grundlagen KI ─────────────────────────────────────────────────────────
  {
    id: 'ai-q1', moduleId: 'ai',
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
    id: 'ai-q2', moduleId: 'ai',
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
    id: 'ai-q3', moduleId: 'ai',
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
