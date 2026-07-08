import type { Flashcard } from '../types';

export const FLASHCARDS: Flashcard[] = [
  // ── Biopsychologie & Allg. Psychologie I (SS 2026 · Prof. Dr. Jessica Sänger) ──

  // Einführung
  {
    id: 'bp-1', moduleId: 'biopsych', category: 'Einführung',
    question: 'Was ist die Kerndefinition von Lernen in der Psychologie?',
    answer: 'Lernen ist die relativ überdauernde Veränderung im Verhaltenspotenzial eines Organismus als Folge von Erfahrungen. Entscheidend: die Veränderung muss durch Erfahrung ausgelöst sein – nicht durch Reifung oder körperliche Zustände.',
  },
  {
    id: 'bp-2', moduleId: 'biopsych', category: 'Einführung',
    question: 'Welche drei Lernarten unterscheidet die Biopsychologie und Allgemeine Psychologie?',
    answer: '1) Klassisches Konditionieren (Verknüpfung zweier Reize → neues Verhalten)\n2) Operantes Konditionieren (Verhalten durch Konsequenzen)\n3) Lernen durch Beobachtung / Modelllernen (Imitation von Verhaltensmodellen)',
  },
  {
    id: 'bp-3', moduleId: 'biopsych', category: 'Einführung',
    question: 'Was ist das Ziel der Allgemeinen Psychologie und Biopsychologie?',
    answer: 'Universelle Mechanismen und biologische Grundlagen des Erlebens und Verhaltens erklären – von der Reizaufnahme über Wahrnehmung und Kognition bis hin zu Reaktion und Verhalten.',
  },
  {
    id: 'bp-4', moduleId: 'biopsych', category: 'Einführung',
    question: 'Was versteht man in der Psychologie unter dem Begriff „Habituierung"?',
    answer: 'Habituierung ist die einfachste Form nicht-assoziativen Lernens: die Reaktion auf einen wiederholt dargebotenen, bedeutungslosen Reiz nimmt ab. Das Nervensystem „gewöhnt" sich daran und verarbeitet den Reiz nicht mehr aufwendig.',
  },
  {
    id: 'bp-5', moduleId: 'biopsych', category: 'Einführung',
    question: 'Nenne zwei historische Pioniere der Psychologie und ihre Beiträge.',
    answer: 'Wilhelm Wundt (1879): Gründete das erste psychologische Labor in Leipzig – Beginn der experimentellen Psychologie.\nWilliam James: Begründer des Funktionalismus – Psychologie untersucht die Funktion mentaler Prozesse im Alltag.',
  },
  {
    id: 'bp-6', moduleId: 'biopsych', category: 'Einführung',
    question: 'Was unterscheidet Biopsychologie von der Allgemeinen Psychologie?',
    answer: 'Die Biopsychologie untersucht die biologischen Grundlagen (Gehirn, Nervensystem, Hormone) des Verhaltens. Die Allgemeine Psychologie erforscht universelle mentale Prozesse (Wahrnehmung, Denken, Lernen) unabhängig von biologischen Details.',
  },

  // Lernen
  {
    id: 'bp-7', moduleId: 'biopsych', category: 'Lernen',
    question: 'Was ist das Grundprinzip des klassischen Konditionierens nach Pawlow?',
    answer: 'Ein neutraler Stimulus (NS) wird wiederholt mit einem unkonditionierten Stimulus (UCS, z. B. Futter) gekoppelt. Nach mehrfacher Paarung löst der NS allein die konditionierte Reaktion (CR) aus – z. B. Speichelfluss beim Glockenton.',
  },
  {
    id: 'bp-8', moduleId: 'biopsych', category: 'Lernen',
    question: 'Was bedeutet Generalisierung beim klassischen Konditionieren?',
    answer: 'Die konditionierte Reaktion (CR) wird nicht nur auf den ursprünglichen konditionierten Stimulus (CS) gezeigt, sondern auch auf ähnliche Reize. Je ähnlicher der Reiz dem CS, desto stärker die Reaktion.',
  },
  {
    id: 'bp-9', moduleId: 'biopsych', category: 'Lernen',
    question: 'Erkläre den Unterschied zwischen positiver und negativer Verstärkung im operanten Konditionieren.',
    answer: 'Positive Verstärkung: Ein angenehmer Reiz wird hinzugefügt (→ Verhalten nimmt zu).\nNegative Verstärkung: Ein unangenehmer Reiz wird entfernt (→ Verhalten nimmt ebenfalls zu).\nBeide erhöhen die Auftretenswahrscheinlichkeit des Verhaltens.',
  },
  {
    id: 'bp-10', moduleId: 'biopsych', category: 'Lernen',
    question: 'Was ist Shaping und wann wird es eingesetzt?',
    answer: 'Shaping (Verhaltensformung) ist eine Technik des operanten Konditionierens, bei der komplexes Verhalten stufenweise durch Verstärkung aufeinanderfolgender Annäherungen an das Zielverhalten aufgebaut wird.',
  },
  {
    id: 'bp-11', moduleId: 'biopsych', category: 'Lernen',
    question: 'Warum ist ein variabler Quotenplan besonders löschungsresistent?',
    answer: 'Bei variablen Quotenplänen ist die Verstärkung unvorhersehbar (manchmal nach 2, manchmal nach 10 Reaktionen). Das Verhalten wird dauerhaft gezeigt, weil immer Hoffnung auf Verstärkung besteht – ähnlich dem Prinzip des Glücksspiels.',
  },
  {
    id: 'bp-12', moduleId: 'biopsych', category: 'Lernen',
    question: 'Welche Bedingungen sind laut Bandura notwendig für erfolgreiches Beobachtungslernen?',
    answer: '1) Aufmerksamkeit auf das Modell\n2) Behaltensleistung (Gedächtnis)\n3) Motorische Reproduktion (Ausführung)\n4) Motivation (Verstärkung erwartet)\nErst wenn alle vier vorhanden sind, wird beobachtetes Verhalten imitiert.',
  },

  // Gedächtnis
  {
    id: 'bp-13', moduleId: 'biopsych', category: 'Gedächtnis',
    question: 'Erkläre das Mehrspeichermodell von Atkinson & Shiffrin (1968).',
    answer: '3 Gedächtnisspeicher:\n1) Sensorisches Gedächtnis (Bruchteile von Sek., alle Sinneseindrücke)\n2) Kurzzeitgedächtnis/Arbeitsgedächtnis (ca. 20 Sek., 7±2 Elemente)\n3) Langzeitgedächtnis (unlimitiert, sehr lange)',
  },
  {
    id: 'bp-14', moduleId: 'biopsych', category: 'Gedächtnis',
    question: 'Was zeigte Ebbinghaus mit seiner Vergessenskurve?',
    answer: 'Der größte Gedächtnisverlust (ca. 70 % des Gelernten) tritt in den ersten 10 Stunden nach dem Lernen auf. Danach flacht die Kurve ab (asymptotisch). Frühe Wiederholungen sind daher besonders wirksam.',
  },
  {
    id: 'bp-15', moduleId: 'biopsych', category: 'Gedächtnis',
    question: 'Was ist der Unterschied zwischen episodischem und semantischem Gedächtnis?',
    answer: 'Episodisches Gedächtnis: Autobiografische Ereignisse mit zeitlichem und räumlichem Kontext („Was habe ich gestern gegessen?").\nSemantisches Gedächtnis: Allgemeines Weltwissen, Fakten ohne persönlichen Kontext („Die Erde ist rund").',
  },
  {
    id: 'bp-16', moduleId: 'biopsych', category: 'Gedächtnis',
    question: 'Was versteht man unter Elaboration als Enkodierstrategie?',
    answer: 'Elaboration bedeutet, neues Lernmaterial aktiv mit bestehendem Wissen zu verknüpfen und selbst zu formulieren. Was man selbst erarbeitet, bleibt besser im Gedächtnis (Generierungseffekt). Tiefere Verarbeitung verbessert die Gedächtnisleistung.',
  },
  {
    id: 'bp-17', moduleId: 'biopsych', category: 'Gedächtnis',
    question: 'Was belegt die Studie von Woollett & Maguire (2011) über Londoner Taxifahrer?',
    answer: 'Taxifahrer, die die Prüfung „The Knowledge" (25.000 Londoner Straßen) bestanden, zeigten nach ~3 Jahren Training eine messbare Vergrößerung des Hippocampus. Dies belegt die strukturelle Plastizität des Gehirns durch intensives Lernen.',
  },
  {
    id: 'bp-18', moduleId: 'biopsych', category: 'Gedächtnis',
    question: 'Was ist der Primacy- und Recency-Effekt beim Lernen?',
    answer: 'Primacy-Effekt: Zuerst gelernte Informationen werden besser behalten (tiefere Verarbeitung).\nRecency-Effekt: Zuletzt gelernte Informationen sind noch im Arbeitsgedächtnis.\nMittlere Inhalte werden am schlechtesten erinnert.',
  },

  // Gehirn & Neuron
  {
    id: 'bp-19', moduleId: 'biopsych', category: 'Gehirn & Neuron',
    question: 'Beschreibe den Aufbau eines Neurons und die Richtung der Signalweiterleitung.',
    answer: 'Dendriten empfangen Signale → Zellkörper (Soma) verarbeitet sie → Axonhügel entscheidet über Auslösung → Axon leitet Aktionspotenzial weiter → Synaptische Endknöpfchen schütten Neurotransmitter aus.',
  },
  {
    id: 'bp-20', moduleId: 'biopsych', category: 'Gehirn & Neuron',
    question: 'Was passiert an der Synapse bei der Signalübertragung?',
    answer: 'Das elektrische Aktionspotenzial erreicht die Synapse. Vesikel setzen Neurotransmitter in den synaptischen Spalt frei. Diese docken an Rezeptoren an (Schlüssel-Schloss-Prinzip) und erregen oder hemmen die nächste Zelle. Überschuss wird durch Re-Uptake wiederaufgenommen.',
  },
  {
    id: 'bp-21', moduleId: 'biopsych', category: 'Gehirn & Neuron',
    question: 'Welche Funktion haben Glutamat und GABA als Neurotransmitter?',
    answer: 'Glutamat: Der wichtigste erregende Neurotransmitter („Gaspedal") – 50 % der Gehirnneurone nutzen ihn. Überaktivierung → Epilepsie.\nGABA: Der wichtigste hemmende Neurotransmitter („Bremse") – 33–50 % der Neuronen. Benzodiazepine wirken über GABA-Rezeptoren.',
  },
  {
    id: 'bp-22', moduleId: 'biopsych', category: 'Gehirn & Neuron',
    question: 'Welche Rolle spielt Dopamin im Gehirn?',
    answer: 'Dopamin ist an Lernprozessen, Belohnungsverarbeitung, Suchtentwicklung und Willkürmotorik beteiligt. Es ist in weit verzweigten Netzwerken aktiv. Dopaminmangel → Parkinson; übermäßige Dopaminaktivität → Schizophrenie.',
  },
  {
    id: 'bp-23', moduleId: 'biopsych', category: 'Gehirn & Neuron',
    question: 'Was sind die Funktionen des präfrontalen Kortex (PFC)?',
    answer: 'Der PFC ist für höhere kognitive Funktionen zuständig: Kontrolle von Handlungsimpulsen und Emotionen, Motivation, Planen, Zielsetzen, Entscheiden und Humor. Er bildet die neuronale Grundlage von Selbstkontrolle und kognitiver Kontrolle.',
  },
  {
    id: 'bp-24', moduleId: 'biopsych', category: 'Gehirn & Neuron',
    question: 'Was ist der Hippocampus und wofür ist er entscheidend?',
    answer: 'Der Hippocampus liegt im limbischen System. Er ist kein Langzeitspeicher selbst, sondern überführt Informationen vom Kurzzeit- ins Langzeitgedächtnis (Konsolidierung) und ist für den Abruf verantwortlich.',
  },

  // Nervensystem & Hormone
  {
    id: 'bp-25', moduleId: 'biopsych', category: 'Nervensystem & Hormone',
    question: 'Wie unterscheiden sich Nervensystem und endokrines System in ihrer Wirkweise?',
    answer: 'Nervensystem (wie E-Mail): schnell (Millisekunden), elektrochemisch, lokal, kurzzeitig.\nEndokrines System (wie Brief): langsam (Sek. bis Min.), chemisch über Blutbahn, systemisch, überdauernd.',
  },
  {
    id: 'bp-26', moduleId: 'biopsych', category: 'Nervensystem & Hormone',
    question: 'Was ist der Unterschied zwischen sympathischem und parasympathischem Nervensystem?',
    answer: 'Sympathikus: aktiviert den Körper in Stress- und Gefahrensituationen (fight or flight) – erhöhte Herzrate, Pupillenerweiterung, Adrenalinausschüttung.\nParasympathikus: beruhigt und regeneriert (rest and digest) – senkt Herzrate, fördert Verdauung.',
  },
  {
    id: 'bp-27', moduleId: 'biopsych', category: 'Nervensystem & Hormone',
    question: 'Welche Funktion hat der Hypothalamus?',
    answer: 'Der Hypothalamus ist das wichtigste Steuerorgan des vegetativen Nervensystems und des endokrinen Systems. Er reguliert Schlaf-Wach-Rhythmus, Wasserhaushalt, Schweißsekretion, Körpertemperatur und steuert die Hypophyse.',
  },
  {
    id: 'bp-28', moduleId: 'biopsych', category: 'Nervensystem & Hormone',
    question: 'Welche Wirkung hat Serotonin?',
    answer: 'Serotonin wird im Hirnstamm (Raphe-Kerne) produziert und reguliert Schlaf-Wach-Rhythmus, Hunger, Durst, emotionale Befindlichkeit und Schmerzwahrnehmung. Serotoninmangel → Depression und Essstörungen. SSRIs hemmen die Wiederaufnahme.',
  },
  {
    id: 'bp-29', moduleId: 'biopsych', category: 'Nervensystem & Hormone',
    question: 'Was ist Neuroplastizität und was belegt sie?',
    answer: 'Neuroplastizität ist die Fähigkeit des Gehirns, sich strukturell und funktionell durch Erfahrungen zu verändern (z. B. Taxifahrer-Studie: Hippocampus vergrößert sich). Neuronale Verbindungen werden gestärkt (fire together, wire together) oder abgebaut.',
  },
  {
    id: 'bp-30', moduleId: 'biopsych', category: 'Nervensystem & Hormone',
    question: 'Was ist Cortisol und welche Auswirkungen hat chronischer Stress?',
    answer: 'Cortisol ist das wichtigste Stresshormon der Nebenniere. Kurzfristig mobilisiert es Energie. Chronisch erhöhte Cortisol-Spiegel schädigen Hippocampus-Neuronen (Gedächtnisprobleme), schwächen das Immunsystem und erhöhen das Herzerkrankungsrisiko.',
  },

  // Wahrnehmung
  {
    id: 'bp-31', moduleId: 'biopsych', category: 'Wahrnehmung',
    question: 'Was ist der Unterschied zwischen Empfindung und Wahrnehmung?',
    answer: 'Empfindung: Die sensorische Aufnahme von Reizen durch Sinnesorgane (physikalischer Prozess).\nWahrnehmung: Die aktive Interpretation und Bedeutungskonstruktion dieser Empfindungen durch das Gehirn (psychologischer Prozess). Wahrnehmung ist immer selektiv und konstruktiv.',
  },
  {
    id: 'bp-32', moduleId: 'biopsych', category: 'Wahrnehmung',
    question: 'Was versteht man unter top-down und bottom-up Wahrnehmungsverarbeitung?',
    answer: 'Bottom-up: Verarbeitung wird von den Sinnesdaten selbst angetrieben (datengesteuert).\nTop-down: Vorwissen, Erwartungen und Kontextwissen beeinflussen die Wahrnehmung (konzeptgesteuert).\nIm Alltag wirken beide Prozesse zusammen.',
  },
  {
    id: 'bp-33', moduleId: 'biopsych', category: 'Wahrnehmung',
    question: 'Was ist Change Blindness (Veränderungsblindheit)?',
    answer: 'Menschen bemerken gravierende Veränderungen in einer Szene nicht, wenn diese außerhalb des aktuellen Aufmerksamkeitsfokus auftreten. Es zeigt: Bewusstsein setzt Aufmerksamkeit voraus.',
  },
  {
    id: 'bp-34', moduleId: 'biopsych', category: 'Wahrnehmung',
    question: 'Warum ist das Gehör evolutionär besonders für Warnreize geeignet?',
    answer: 'Das Hörsystem kann Schall aus allen Richtungen (360°) wahrnehmen, auch im Schlaf und in Dunkelheit. Hörschwellen liegen im Bereich von 1000–4000 Hz (menschliche Sprache und Gefahrensignale). Schall kann nicht „abgeschaltet" werden wie Augen.',
  },
  {
    id: 'bp-35', moduleId: 'biopsych', category: 'Wahrnehmung',
    question: 'Was zeigt die Forschung über Lärm und kognitive Leistung?',
    answer: 'Umgebungslärm (70–80 dB) reduziert kognitive Effizienz messbar: höhere Fehlerrate bei Entscheidungen, schlechtere Konzentration, längere Erholungszeiten. Lärmpegelsenkung um 6–10 dB führt zu ca. 20–50 % Fehlerreduktion bei Bürotätigkeiten.',
  },
  {
    id: 'bp-36', moduleId: 'biopsych', category: 'Wahrnehmung',
    question: 'Was bedeutet Signalentdeckungstheorie und was sagt sie über die Wahrnehmung aus?',
    answer: 'Wahrnehmungsentscheidungen hängen nicht nur von der Signalstärke ab, sondern auch vom Kriterium (Bias) der Person. Hohe Motivation oder Angst verschieben das Kriterium – man nimmt eher „wahr", auch wenn kein Signal vorhanden ist.',
  },

  // Aufmerksamkeit & Kontrolle
  {
    id: 'bp-37', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Wie definiert die Psychologie Bewusstsein?',
    answer: 'Bewusstsein ist die Gesamtheit der unmittelbaren Erfahrung aus der Wahrnehmung von uns selbst und unserer Umgebung, unseren Kognitionen, Vorstellungen und Gefühlen (Myers, 2014). 4 Perspektiven: Wachheitszustände, phänomenales Bewusstsein, Monitoring, Selbst-Bewusstsein.',
  },
  {
    id: 'bp-38', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Was ist selektive Aufmerksamkeit und welches bekannte Experiment demonstriert sie?',
    answer: 'Selektive Aufmerksamkeit ist die Fähigkeit, einen Stimulus aus vielen wahrzunehmen und andere zu ignorieren. Das Cocktail-Party-Phänomen (Cherry, 1953): Man kann einem Gespräch in lauter Umgebung folgen, weil das Gehirn auf die relevante Stimme selektiv filtert.',
  },
  {
    id: 'bp-39', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Was ist Selbstkontrolle und was zeigt das Marshmallow-Experiment?',
    answer: 'Selbstkontrolle ist die willentliche Steuerung von Impulsen zugunsten langfristiger Ziele (Belohnungsaufschub). Marshmallow-Experiment (Mischel, 1989): Kinder, die eine Belohnung aufschieben konnten, hatten später bessere Lebenserfolge (Bildung, Gesundheit).',
  },
  {
    id: 'bp-40', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Was versteht man unter kognitiver Kontrolle?',
    answer: 'Kognitive Kontrolle umfasst Mechanismen, die sensorische, kognitive und motorische Systeme im Sinne übergeordneter Ziele koordinieren. Sie ermöglicht, schwächere (aber aufgabenrelevante) Reaktionen gegenüber starken (aber irrelevanten) Impulsen durchzusetzen.',
  },
  {
    id: 'bp-41', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Welche Hirnregion ist die neuronale Grundlage der Kontrolle und warum?',
    answer: 'Der präfrontale Kortex (PFC) ist die zentrale Struktur für kognitive Kontrolle und Selbstkontrolle. Er ist bis ins frühe Erwachsenenalter (ca. 25 Jahre) nicht vollständig ausgereift, was impulsives Verhalten bei Jugendlichen erklärt.',
  },
  {
    id: 'bp-42', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Was ist die Amygdala und welche Emotionen verarbeitet sie besonders?',
    answer: 'Die Amygdala (Mandelkern) ist Teil des limbischen Systems und zentral für die Emotionsverarbeitung – besonders Wut und Angst. Bei Gefahr leitet der Thalamus Signale direkt an die Amygdala (Low Road) für schnelle Reaktion.',
  },
  {
    id: 'bp-43', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Change Blindness vs. Inattentional Blindness – Unterschied?',
    answer: 'Change Blindness: Eine Veränderung wird nicht bemerkt, weil die Aufmerksamkeit exogen abgelenkt wird (z.B. Maske, Door Study).\nInattentional Blindness: Ein neues Objekt wird nicht wahrgenommen, weil die Aufmerksamkeit endogen so stark fokussiert ist, dass alles andere ausgefiltert wird (z.B. Gorilla-Experiment).',
  },
  {
    id: 'bp-44', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Pop-Out-Effekt vs. serielle Suche',
    answer: 'Pop-Out (präattentiv): Reiz hebt sich durch EIN Merkmal ab → parallele Suche, Suchzeit konstant unabhängig von Distraktoranzahl.\nSerielle Suche (attentiv): Reiz unterscheidet sich durch Merkmalskombination → Element für Element, Suchzeit steigt linear mit Distraktoranzahl.',
  },
  {
    id: 'bp-45', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Thalamus als "Türsteher" des Bewusstseins',
    answer: 'Der Thalamus filtert die einströmenden Sinnesreize und entscheidet, welche ins Bewusstsein vordringen dürfen. Nur Reize, auf die Aufmerksamkeit gerichtet wird, passieren den Filter. Automatisierte Handlungen laufen am Bewusstsein vorbei und sparen kognitive Ressourcen.',
  },
  {
    id: 'bp-46', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Multitasking: Wann funktioniert es, wann nicht?',
    answer: 'Funktioniert: Aufgaben nutzen verschiedene Ressourcen (z.B. Joggen + Musik: motorisch + auditiv).\nFunktioniert nicht: Aufgaben greifen auf dieselben Ressourcen zurück (z.B. Film + Text lesen = beide visuell/sprachlich; Auto fahren + tiefes Gespräch = beide kognitiv).\nGrundregel: Gleiche Ressourcen → Interferenz.',
  },
  {
    id: 'bp-47', moduleId: 'biopsych', category: 'Aufmerksamkeit & Kontrolle',
    question: 'Marshmallow-Experiment: Strategien und Langzeitergebnisse',
    answer: 'Strategien erfolgreicher Kinder: wegschauen, an etwas anderes denken, nur riechen/berühren (Bedürfnis abbauen ohne zu erfüllen), zukünftiges Ziel vorstellen.\nLangzeitergebnisse: höhere Noten, bessere soziale Kompetenz, mehr Selbstbewusstsein, gesündere Lebensführung. Selbstkontrolle kann durch Übung gestärkt werden.',
  },
  {
    id: 'bp-48', moduleId: 'biopsych', category: 'Sprache & Denken',
    question: 'Die 4 Versprecher-Typen',
    answer: '1. Vertauschung: Laute/Wörter tauschen Position ("Stolzok" statt Zollstock)\n2. Antizipation: Man ist gedanklich schon beim nächsten Laut ("Tesse Tee" statt "Tasse Tee")\n3. Substitution: Klanglich ähnliches falsches Wort ("Urwald" statt "Urlaub")\n4. Kontamination: Zwei Wörter verschmelzen ("beistimmen" = beipflichten + zustimmen)',
  },
  {
    id: 'bp-49', moduleId: 'biopsych', category: 'Sprache & Denken',
    question: 'Sprachproduktion: Das 3-Ebenen-Modell (top-down)',
    answer: 'Top-down-Prozess:\n1. Gedankenebene: Was will ich sagen? (Konzeptualisierung)\n2. Lexikalische Ebene: Wörter aus dem mentalen Lexikon auswählen\n3. Artikulationsebene: Motorische Umsetzung (Broca-Areal)\nBabys lernen Laute von einfach zu schwer: Vokale → Lippenkonsonanten (B, M, P) → Zungenkonsonanten (L, N, R)',
  },
  {
    id: 'bp-50', moduleId: 'biopsych', category: 'Sprache & Denken',
    question: 'Was ist eine Proposition?',
    answer: 'Eine Proposition ist die kleinste Wissenseinheit, die zwei Konzepte miteinander verbindet. Beispiel: "Bäume haben Blätter" = 1 Proposition. "Julius trinkt Tee, der grün ist und aus Japan kommt" = 3 Propositionen. Propositionen sind die Grundbausteine des Textverstehens und der Textrepräsentation im Gedächtnis.',
  },
  {
    id: 'bp-51', moduleId: 'biopsych', category: 'Sprache & Denken',
    question: 'Sapir-Whorf-Hypothese: starke vs. schwache Version',
    answer: 'Starke Version: Sprache bestimmt Denken vollständig – man kann nur denken, was die Sprache erlaubt (weitgehend widerlegt).\nSchwache Version: Sprache beeinflusst Denken und Wahrnehmung (gut belegt). Beispiel: Generisches Maskulinum führt dazu, dass sich Lesende nur Männer vorstellen. Mehr Wörter für Schnee (Inuit) → feinere Wahrnehmungsunterschiede.',
  },
  {
    id: 'bp-52', moduleId: 'biopsych', category: 'Klausur & Transfer',
    question: 'Transferaufgabe Biopsychologie-Klausur: Thema und Aufbau',
    answer: 'Thema: Gedächtnistraining-Workshop konzipieren (10 % der Klausur, ~9 Min).\nAufbau der Muster-Antwort:\n1. Theoretische Grundlagen (Mehrspeichermodell, Arbeitsgedächtnis)\n2. Vergessenskurve und ihre Ursachen (Ebbinghaus, Interferenz)\n3. Enkodierstrategien (Elaboration, Chunking, Verarbeitungstiefe)\n4. Abrufpraktiken (Testing Effect, freier Abruf, Spacing)\n5. Konkrete Workshop-Maßnahmen (Lernplan, Selbstabfragen, Mindmaps)',
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
  // LV 8–11 Erweiterung
  {
    id: 'sp-39', moduleId: 'socialpsych', category: 'Persuasion & Einstellung',
    question: 'Theorie des geplanten Verhaltens (Ajzen) – 3 Faktoren',
    answer: 'Einstellung allein sagt Verhalten nicht immer vorher. Drei Faktoren erzeugen gemeinsam eine Verhaltensabsicht:\n\n1. Einstellung zum Verhalten: Wie bewerte ich es? („Sport ist gut für mich")\n2. Subjektive Norm: Was denken mir wichtige Personen? („Meine Freunde spornen mich an")\n3. Wahrgenommene Verhaltenskontrolle: Traue ich mir zu, es zu tun?\n\nBeispiel: Jemand will aufhören zu rauchen – Einstellung ist positiv, aber Umfeld raucht (Norm) und Vertrauen in eigene Stärke fehlt (Kontrolle) → kein Verhalten.',
  },
  {
    id: 'sp-40', moduleId: 'socialpsych', category: 'Persuasion & Einstellung',
    question: 'Furchtappelle – wann wirken sie, wann nicht?',
    answer: 'Furchtappelle (angsterzeugende Botschaften) wirken – ABER nur, wenn gleichzeitig konkrete Handlungsmöglichkeiten gezeigt werden!\n\nFunktioniert: „Rauchen verursacht Krebs – rufen Sie jetzt die Raucherhotline an"\nFunktioniert NICHT: reines Angstszenario ohne Ausweg → Reaktanz: „Jetzt erst recht!"\n\nZu extreme Angstbotschaften lösen Bumerangeffekt aus – Gegenteil des gewünschten Verhaltens.',
  },
  {
    id: 'sp-41', moduleId: 'socialpsych', category: 'Persuasion & Einstellung',
    question: 'Gain vs. Loss Framing – Unterschied und Wirkung',
    answer: 'Gain Frame: Positive Konsequenzen betonen\n→ „Mit regelmäßiger Bewegung lebst du länger"\n\nLoss Frame: Negative Konsequenzen betonen\n→ „Ohne Bewegung stirbst du früher"\n\nLoss Framing wirkt oft stärker (Prospect Theory, Kahneman & Tversky):\nVerluste schmerzen stärker als gleichwertige Gewinne freuen (Loss Aversion).\n\nKontextabhängig: Bei Präventionsverhalten (Schutzmaßnahmen) oft Loss Framing wirkungsvoller.',
  },
  {
    id: 'sp-42', moduleId: 'socialpsych', category: 'Persuasion & Einstellung',
    question: 'Subliminale Persuasion – Kinoexperiment (Popcorn & Cola)',
    answer: 'Experiment: In einem Kino wurden unter Filmbilder kurze Unterschwellreize (Popcorn, Cola) eingeblendet – zu kurz um sie bewusst wahrzunehmen.\n\nErgebnis:\n• Cola-Verkäufe stiegen um 18 %\n• Popcorn-Verkäufe stiegen um 57 %\n\nFazit: Unbewusste Reize beeinflussen Kaufverhalten stärker als wir denken.\nAnwendung: Gerüche im Supermarkt, Hintergrundmusik, Farben in der Werbung.',
  },
  {
    id: 'sp-43', moduleId: 'socialpsych', category: 'Persuasion & Einstellung',
    question: 'Effort Justification (Anstrengungsrechtfertigung)',
    answer: 'Wenn wir uns stark angestrengt haben, werten wir das Ziel nachträglich auf – um die Anstrengung zu rechtfertigen.\n\nMechanismus: Kognitive Dissonanz\n→ „Ich habe so viel investiert" + „Das Ziel war es nicht wert" = Dissonanz\n→ Lösung: Das Ziel als wertvoller bewerten\n\nBeispiele:\n• Menschen lieben Dinge mehr, für die sie hart arbeiten mussten\n• Aufnahmerituale in Clubs/Verbindungen\n• Schwierige Studiengänge werden als wertvoller erlebt',
  },
  {
    id: 'sp-44', moduleId: 'socialpsych', category: 'Beeinflussungsstrategien',
    question: 'Door-in-the-Face – Ablauf, Mechanismus, Studie',
    answer: 'Ablauf:\n1. Extreme Bitte stellen (wird sicher abgelehnt)\n2. Danach: die eigentliche, maßvolle Zielbitte\n\nMechanismus:\n• Reziprozität: Der Bittende hat nachgegeben → ich bin dran\n• Kontrastwirkung: Zielbitte wirkt winzig neben der ersten\n\nKlassische Studie (Cialdini):\nDirekt nach Zoo-Besuch fragen → niedrige Zustimmung\nErst: 2 Jahre wöchentlich 2h (abgelehnt) → dann: einmal 1h → deutlich höhere Zustimmung!\n\nPraxis DRK: Erst „ein Leben lang spenden?" → Ablehnung → „einmal spenden?"',
  },
  {
    id: 'sp-45', moduleId: 'socialpsych', category: 'Beeinflussungsstrategien',
    question: 'Foot-in-the-Door – Ablauf, Mechanismus, Beispiele',
    answer: 'Ablauf (umgekehrt wie DITF):\n1. Kleine, leicht erfüllbare Bitte (kaum Nein möglich)\n2. Danach größere Zielbitte\n\nMechanismus:\n• Commitment: Ich habe ja gesagt → ich bin jemand, der das tut\n• Konsistenz: Ich will konsistent mit meinem Verhalten bleiben\n\nAlltagsbeispiele:\n• Probefahrt beim Autohändler → Commitment → Kauf\n• „Nur mal anschauen" beim Shopping → Kauf\n• Petition unterschreiben → später Spende leisten',
  },
  {
    id: 'sp-46', moduleId: 'socialpsych', category: 'Beeinflussungsstrategien',
    question: 'Low-Ball-Prinzip – Ablauf und Warum es funktioniert',
    answer: 'Ablauf:\n1. Sehr gutes Angebot machen → Person stimmt zu\n2. Nachdem Einwilligung da, verschlechtern sich die Bedingungen\n3. Person bleibt trotzdem dabei\n\nWarum wirkt es?\n• Commitment: Ich habe innerlich schon ja gesagt\n• Sunk-Cost-Effekt: Ich habe Zeit/Energie investiert\n• Konsistenz: Zurückrudern wäre inkonsistent\n\nStudie (Cialdini): Käufer mit günstigem Preis gelockt → Preis danach erhöht → trotzdem Kauf\n\nKombination: Low-Ball + Foot-in-the-Door = noch höhere Compliance (Hornig)',
  },
  {
    id: 'sp-47', moduleId: 'socialpsych', category: 'Beeinflussungsstrategien',
    question: 'Judo-Strategien (Dindas) – was versteht man darunter?',
    answer: 'Judo-Strategien = Beeinflussungstechniken, die nicht rohe Kraft nutzen, sondern die psychologische Energie des Gegenübers.\n\nWie beim Judo: Man nutzt die Impuls- und Verpflichtungsmechanismen (Reziprozität, Commitment, soziale Normen) des anderen, um ihn zur gewünschten Handlung zu bringen – ohne offensichtlichen Zwang.\n\nKlassische Judo-Strategien:\n• Door-in-the-Face (nutzt Reziprozität)\n• Foot-in-the-Door (nutzt Commitment & Konsistenz)\n• Low-Ball (nutzt Commitment & Sunk Cost)',
  },
  {
    id: 'sp-48', moduleId: 'socialpsych', category: 'Sozialer Einfluss',
    question: 'Milgrams 4 Erklärungsfaktoren für Gehorsam',
    answer: 'Studie (1963): ~65 % der VP gaben auf Befehl Schocks bis 450 V\n\n4 Erklärungsfaktoren (Milgram):\n1. Sozialisation zur Autorität: Von Kindheit an gelernt, Autoritäten zu gehorchen\n2. Schrittweise Eskalation: Kleine erste Schritte → man ist schon dabei, Ausstieg schwer\n3. Verantwortungsdiffusion: „Der Wissenschaftler ist verantwortlich, nicht ich"\n4. Dehumanisierung: Der andere wird zur abstrakten Versuchsperson\n\nKritik: Täuschung, psychische Belastung, heute ethisch nicht mehr möglich',
  },
  {
    id: 'sp-49', moduleId: 'socialpsych', category: 'Sozialer Einfluss',
    question: 'Stanford Prison Experiment (Zimbardo, 1971)',
    answer: 'Aufbau: Studenten per Zufall in „Wärter" und „Gefangene" eingeteilt\nAbbruch nach 6 statt 14 Tagen\n\nWas passierte: Wärter übernahmen ihre Rolle so vollständig, dass sie erniedrigende Behandlung einsetzten. Situation produzierte extremes Verhalten – nicht die Persönlichkeit der Teilnehmer.\n\nKernaussage: Gute Menschen können in bestimmten Strukturen schlechte Dinge tun.\n\nKritik: Zimbardo agierte selbst als Gefängnisleiter statt neutral → leitete Wärter aktiv zu harter Behandlung an → Replikationsfähigkeit eingeschränkt\n\nVerbindung Milgram: Autorität + Rolle + Eskalation + Dehumanisierung',
  },
  {
    id: 'sp-50', moduleId: 'socialpsych', category: 'Sozialer Einfluss',
    question: 'Bystander-Apathy-Effekt – 3 Mechanismen (Latané & Darley)',
    answer: 'Phänomen: Je mehr Menschen anwesend sind, desto geringer die Hilfswahrscheinlichkeit.\n\nHintergrund: Kitty Genovese (1964, New York) – motivierte die Forschung.\n\n3 Mechanismen:\n1. Diffusion of Responsibility: „Der andere wird schon helfen" – Verantwortung verteilt sich auf alle\n2. Pluralistic Ignorance: Alle schauen ob andere reagieren – weil alle warten, passiert nichts\n3. Evaluation Apprehension: Angst, sich zu blamieren wenn man falsch eingreift\n\nLösung: Direkt eine konkrete Person ansprechen:\n„Sie im roten Pullover – rufen Sie bitte den Notruf!"',
  },
  {
    id: 'sp-51', moduleId: 'socialpsych', category: 'Gruppen',
    question: 'Deindividuation – Definition, Faktoren, Beispiele',
    answer: 'Definition: In anonymen Gruppen verlieren Menschen das Gefühl individueller Verantwortung → enthemmtes, aggressives Verhalten\n\nFördernde Faktoren:\n• Anonymität (Maske, Dunkelheit)\n• Große Gruppe\n• Einheitliche Kleidung (Uniform)\n• Erregung und Lärm\n\nBeispiele:\n• Randalierende Hooligans in der Masse\n• Anonyme Internet-Trolle\n• Halloween-Kostüme erhöhten aggressives Verhalten in Studien\n\nVerbindung: Stanford Prison Experiment – Uniformen förderten Deindividuation auf beiden Seiten',
  },
  {
    id: 'sp-52', moduleId: 'socialpsych', category: 'Gruppen',
    question: 'Prosoziales Verhalten & Studie Guter Samariter',
    answer: 'Prosoziales Verhalten: Freiwilliges Handeln zum Nutzen anderer ohne direkten Eigennutzen\n\nWann hilft man? (Faktoren):\n• Allein > Gruppe (kein Bystander-Effekt)\n• Identifizierbare Person > abstrakte Notlage\n• Geringe Kosten der Hilfe\n• Gute Stimmung\n• Kein Zeitdruck\n\nStudie Guter Samariter (Darley & Batson, 1973):\nTheologiestudenten auf dem Weg zur Predigt über den barmherzigen Samariter begegneten einem Hilfsbedürftigen.\n→ Wer unter Zeitdruck war, half viel seltener – unabhängig vom Thema!\n\nFazit: Situation (Zeitdruck) schlägt Persönlichkeit',
  },
  {
    id: 'sp-53', moduleId: 'socialpsych', category: 'Gruppen',
    question: 'Vier zentrale Gruppenmerkmale (Normen, Status, Rollen, Kohäsion)',
    answer: 'Gruppen (max. ~20 Personen, Wir-Gefühl, gemeinsame Ziele, Abgrenzung nach außen) haben 4 Merkmale:\n\n1. Normen: Ungeschriebene Regeln, steuern Verhalten; Verletzung → Sanktion\n2. Status: Hierarchie in der Gruppe – nicht alle Mitglieder sind gleich\n3. Rollen: Jedes Mitglied hat eine Rolle (Leader, Kritiker, Harmoniestifter…), oft informell\n4. Kohäsion (Zusammenhalt): Hoch = gute Motivation, aber Risiko: Groupthink\n\nWarum bilden Menschen Gruppen?\n→ Materieller Nutzen, Informationsgewinnung, emotionale Unterstützung, Identität (Social Identity Theory), Status',
  },
  {
    id: 'sp-54', moduleId: 'socialpsych', category: 'Gruppen',
    question: 'Groupthink – 6 Symptome nach Janis',
    answer: 'Groupthink (Janis, 1972): In stark kohäsiven Gruppen unterdrücken Mitglieder Zweifel → schlechte Entscheidungen\n\nBedingungen: Hohe Kohäsion, starker Führungsstil, Isolation, hoher Entscheidungsdruck\n\n6 Symptome:\n1. Illusion der Unverwundbarkeit: „Wir können nicht scheitern"\n2. Kollektive Rationalisierung: Warnsignale werden weggeredet\n3. Selbstzensur: Niemand traut sich Kritik\n4. Direkter Druck auf Andersdenkende: „Bist du gegen das Team?"\n5. Illusion der Einstimmigkeit: Schweigen = Zustimmung\n6. Mindguards: Mitglieder schützen Gruppe vor störenden Infos\n\nLösung: Advocatus Diaboli, externe Experten, anonymes Abstimmen',
  },
  {
    id: 'sp-55', moduleId: 'socialpsych', category: 'Sozialer Einfluss',
    question: 'Pluralistic Ignorance vs. Diffusion of Responsibility',
    answer: 'Beide erklären den Bystander-Effekt, sind aber unterschiedlich:\n\nPluralistische Ignoranz:\n→ Jeder schaut, ob andere reagieren\n→ Da alle passiv sind, schließt jeder: „Es ist wohl nicht so ernst"\n→ Niemand handelt, obwohl alle innerlich besorgt sind\n\nDiffusion of Responsibility:\n→ „Der andere wird schon helfen"\n→ Verantwortung verteilt sich auf alle Anwesenden\n→ Subjektiver Anteil sinkt mit steigender Personenzahl\n\nBeide zusammen erklären, warum größere Gruppen paradoxerweise weniger helfen.',
  },

  // ── Grundlagen KI & Agentensysteme (SS 2026 · FOM · Olga Koch) ──────────────

  // Einführung & Geschichte
  {
    id: 'ai-1', moduleId: 'ai', category: 'Einführung & Geschichte',
    question: 'Wie definierte John McCarthy KI (1955)?',
    answer: 'Maschinen sollen entwickelt werden, die sich verhalten, als hätten sie Intelligenz. KI = Oberbegriff für alle Methoden, die Maschinen intelligent machen.',
  },
  {
    id: 'ai-2', moduleId: 'ai', category: 'Einführung & Geschichte',
    question: 'Was ist der Turing-Test (1950)?',
    answer: 'Alan Turing fragte: „Kann eine Maschine wie ein Mensch klingen?" Ein Mensch kommuniziert blind mit einer Maschine und einem Menschen – kann er nicht unterscheiden, welcher der Mensch ist, hat die Maschine bestanden.',
  },
  {
    id: 'ai-3', moduleId: 'ai', category: 'Einführung & Geschichte',
    question: 'Was war die Dartmouth-Konferenz (1956)?',
    answer: 'Die offizielle Gründung der KI als eigenständiges Forschungsfeld. Klausur-Tipp: Dartmouth 1956 = Geburtsstunde der KI.',
  },
  {
    id: 'ai-4', moduleId: 'ai', category: 'Einführung & Geschichte',
    question: 'Was ist der Unterschied zwischen schwacher und starker KI?',
    answer: 'Schwache KI (Narrow AI): löst eine klar begrenzte Aufgabe sehr gut, kein Wissenstransfer (z.B. Siri, AlphaGo, ChatGPT).\nStarke KI (AGI): kann wie ein Mensch vielseitig denken und handeln – existiert heute noch NICHT (nur theoretisches Konzept).',
  },
  {
    id: 'ai-5', moduleId: 'ai', category: 'Einführung & Geschichte',
    question: 'Welche 5 Eigenschaften sollte ein intelligentes KI-System haben?',
    answer: '1. Wahrnehmen (Umwelt erfassen)\n2. Schlussfolgern (aus Infos Schlüsse ziehen)\n3. Lernen (aus Erfahrungen verbessern)\n4. Planen (Schritte zum Ziel wählen)\n5. Kommunizieren (Infos verstehen und weitergeben)',
  },
  {
    id: 'ai-6', moduleId: 'ai', category: 'Einführung & Geschichte',
    question: 'Nenne drei KI-Meilensteine und ihr Jahr.',
    answer: '1950: Turing-Test\n1956: Dartmouth-Konferenz (Geburtsstunde der KI)\n1997: Deep Blue besiegt Schachweltmeister Kasparov\n2016: AlphaGo schlägt Go-Weltmeister\n2024: EU AI Act tritt in Kraft',
  },

  // Big Data
  {
    id: 'ai-7', moduleId: 'ai', category: 'Big Data',
    question: 'Was ist Big Data?',
    answer: 'Riesige Datenmengen, die so groß, schnell oder vielfältig sind, dass normale Computerprogramme damit nicht umgehen können.',
  },
  {
    id: 'ai-8', moduleId: 'ai', category: 'Big Data',
    question: 'Was sind die 4 Vs (+ 1) von Big Data?',
    answer: 'Volume (Menge: TB/PB-Bereich)\nVelocity (Geschwindigkeit: Echtzeit-Verarbeitung)\nVariety (Vielfalt: Texte, Bilder, Videos, Sensordaten)\nVeracity (Wahrhaftigkeit/Qualität: Fake News, fehlerhafte Daten)\n+ Value (Wert: aus Daten neue Geschäftsmodelle entwickeln)',
  },
  {
    id: 'ai-9', moduleId: 'ai', category: 'Big Data',
    question: 'Warum ist Veracity besonders kritisch für KI-Projekte?',
    answer: 'Schlechte Datenqualität = schlechte KI-Entscheidungen. Stichwort: „Garbage in, garbage out." KI-Modelle lernen nur so gut wie die Daten, auf denen sie trainiert werden.',
  },
  {
    id: 'ai-10', moduleId: 'ai', category: 'Big Data',
    question: 'Was sind strukturierte, semi-strukturierte und unstrukturierte Daten?',
    answer: 'Strukturiert: klare Tabellenform (z.B. Kundendatenbank).\nSemi-strukturiert: teils geordnet, teils frei (z.B. E-Mail: Header + Nachrichtentext).\nUnstrukturiert: kein Schema (z.B. Bilder, Videos, Sprachnachrichten).',
  },
  {
    id: 'ai-11', moduleId: 'ai', category: 'Big Data',
    question: 'Was ist der Unterschied zwischen Batch- und Stream-Verarbeitung?',
    answer: 'Batch-Verarbeitung: Daten werden gesammelt und in großen Mengen verarbeitet (z.B. nachts, wenn Systeme gesperrt sind).\nStream-Verarbeitung: Daten werden sofort in Echtzeit verarbeitet (z.B. Sensordaten einer Maschine).',
  },

  // Data Warehouse & Data Lake
  {
    id: 'ai-12', moduleId: 'ai', category: 'Data Warehouse & Data Lake',
    question: 'Was ist ein Data Warehouse?',
    answer: 'Zentrale Datenbank für strukturierte Daten, optimiert für Analysen. Daten werden VOR dem Speichern in ein einheitliches Format gebracht (Schema-on-Write). Nutzung: Umsatzberichte, Finanzanalysen, Controlling.',
  },
  {
    id: 'ai-13', moduleId: 'ai', category: 'Data Warehouse & Data Lake',
    question: 'Was ist ein Data Lake?',
    answer: 'Riesiger Datenspeicher für alle Arten von Daten (strukturiert, unstrukturiert, alles). Daten werden BEIM LESEN sortiert (Schema-on-Read). Nutzung: KI-Training, Forschung, unvorhergesehene Analysen.',
  },
  {
    id: 'ai-14', moduleId: 'ai', category: 'Data Warehouse & Data Lake',
    question: 'Wann nutze ich Data Warehouse, wann Data Lake?',
    answer: 'Data Warehouse: Wenn ich weiß, was ich analysieren will (Controller, Vertrieb).\nData Lake: Wenn ich noch nicht weiß, was ich brauche (Data Scientists, KI-Entwickler).\nBeide ergänzen sich: Data Lake sammelt alles, Data Warehouse strukturiert das Wichtige.',
  },
  {
    id: 'ai-15', moduleId: 'ai', category: 'Data Warehouse & Data Lake',
    question: 'Was ist OLAP und welche Operationen gibt es?',
    answer: 'OLAP (Online Analytical Processing): Multidimensionale Datenanalyse im Data Warehouse mit dem „OLAP-Würfel" (Dimensionen: Zeit, Region, Produkt).\nDrill-Down: in die Tiefe (Jahr → Monat)\nRoll-Up: zusammenfassen (Monat → Jahr)\nSlice: eine Scheibe (nur 2023)\nDice: mehrere Scheiben (Region Ost, Produkt A, 2023)',
  },

  // Datenmanagement & ETL
  {
    id: 'ai-16', moduleId: 'ai', category: 'Datenmanagement & ETL',
    question: 'Was ist der ETL-Prozess?',
    answer: 'Extract → Transform → Load.\nExtract: Daten aus Quellen herauslesen (DBs, Websites, CSV).\nTransform: Daten bereinigen und vereinheitlichen.\nLoad: Fertige Daten ins Data Warehouse laden.\nTipp: Systeme werden nachts gesperrt, weil dann ETL läuft.',
  },
  {
    id: 'ai-17', moduleId: 'ai', category: 'Datenmanagement & ETL',
    question: 'Was sind Stammdaten und Transaktionsdaten?',
    answer: 'Stammdaten: Grundlegende, selten ändernde Infos über Geschäftsobjekte (z.B. Kundendaten, Produktdaten).\nTransaktionsdaten: Daten zu Geschäftsvorfällen (z.B. Bestellungen, Zahlungen, Bewegungsdaten).',
  },
  {
    id: 'ai-18', moduleId: 'ai', category: 'Datenmanagement & ETL',
    question: 'Was ist eine Data Pipeline?',
    answer: 'Automatisierter Datenfluss wie ein Fließband:\nRohdaten → Erhebung → Bereinigung → Exploration → Modell → Visualisierung → Datenprojekt.',
  },
  {
    id: 'ai-19', moduleId: 'ai', category: 'Datenmanagement & ETL',
    question: 'Was ist CRISP-DM?',
    answer: 'Cross Industry Standard Process for Data Mining – strukturierter 6-Phasen-Prozess für Data-Mining-Projekte:\nBusiness Understanding → Data Understanding → Data Preparation → Modeling → Evaluation → Deployment.',
  },

  // KI-Agenten
  {
    id: 'ai-20', moduleId: 'ai', category: 'KI-Agenten',
    question: 'Was ist ein Agent in der KI?',
    answer: 'Ein System, das:\n1. Wahrnehmungen aus der Umgebung empfängt (über Sensoren)\n2. Entscheidungen trifft\n3. Aktionen ausführt (über Aktoren/Aktuatoren)\nZwei Typen: Software-Agent (nur Programme) und Hardware-Agent/Roboter (physische Sensoren + Aktoren).',
  },
  {
    id: 'ai-21', moduleId: 'ai', category: 'KI-Agenten',
    question: 'Was ist ein rationaler Agent?',
    answer: 'Ein Agent, der für jede Situation die Aktion wählt, die seine Leistungsbewertung maximiert – basierend auf Vorwissen, möglichen Aktionen und bisherigen Wahrnehmungen. Er tut das „Richtige".',
  },
  {
    id: 'ai-22', moduleId: 'ai', category: 'KI-Agenten',
    question: 'Was beschreibt das PEAS-Modell?',
    answer: 'Rahmen zur vollständigen Beschreibung eines Agenten:\nP = Performance (Was ist Erfolg?)\nE = Environment (Wo arbeitet der Agent?)\nA = Actuators (Wie kann er handeln?)\nS = Sensors (Was kann er wahrnehmen?)\nBeispiel selbstfahrendes Taxi – P: sicher ankommen, E: Straßen/Autos, A: Lenkung/Gas/Bremse, S: Kameras/GPS.',
  },
  {
    id: 'ai-23', moduleId: 'ai', category: 'KI-Agenten',
    question: 'Was bedeutet deterministisch vs. stochastisch bei Umgebungen?',
    answer: 'Deterministisch: Das Ergebnis einer Aktion ist vorhersagbar (z.B. Schach – ein Zug hat immer dieselbe Wirkung).\nStochastisch: Das Ergebnis ist unvorhersehbar (z.B. Taxifahren – andere Fahrer verhalten sich zufällig).',
  },
  {
    id: 'ai-24', moduleId: 'ai', category: 'KI-Agenten',
    question: 'Was bedeutet episodisch vs. sequenziell bei Umgebungen?',
    answer: 'Episodisch: Jede Entscheidung ist unabhängig von vorherigen (z.B. Spam-Filter – jede E-Mail wird einzeln beurteilt).\nSequenziell: Frühere Entscheidungen beeinflussen spätere (z.B. Schach – jeder Zug verändert die Spielsituation).',
  },
  {
    id: 'ai-25', moduleId: 'ai', category: 'KI-Agenten',
    question: 'Was bedeutet statisch vs. dynamisch bei Umgebungen?',
    answer: 'Statisch: Die Umgebung ändert sich NICHT während der Agent denkt (z.B. Kreuzworträtsel).\nDynamisch: Die Umgebung ändert sich auch ohne Aktion des Agenten (z.B. Taxifahren – andere Autos bewegen sich weiter).',
  },

  // Logik & Wissensbasierte Systeme
  {
    id: 'ai-26', moduleId: 'ai', category: 'Logik & Wissensbasierte Systeme',
    question: 'Was ist Aussagenlogik?',
    answer: 'Logik, die Aussagen als wahr (W) oder falsch (F) bewertet und mit Operatoren verknüpft:\nUND (∧): Beide Aussagen müssen wahr sein.\nODER (∨): Mindestens eine muss wahr sein.\nNICHT (¬): Negiert eine Aussage.',
  },
  {
    id: 'ai-27', moduleId: 'ai', category: 'Logik & Wissensbasierte Systeme',
    question: 'Was ist Prädikatenlogik und wie unterscheidet sie sich von Aussagenlogik?',
    answer: 'Prädikatenlogik geht über Wahr/Falsch hinaus und betrachtet die Beziehungen zwischen Objekten (z.B. „Max liebt Anna").\nKlausur-Merker: Aussagenlogik = Was ist wahr/falsch? Prädikatenlogik = Welche Beziehung haben Objekte zueinander?',
  },
  {
    id: 'ai-28', moduleId: 'ai', category: 'Logik & Wissensbasierte Systeme',
    question: 'Aus welchen 3 Teilen besteht ein wissensbasiertes System?',
    answer: '1. Wissensbasis: Gespeicherte Fakten und Regeln.\n2. Inferenzmaschine: Zieht Schlussfolgerungen aus dem Wissen.\n3. Benutzerschnittstelle: Kommuniziert mit dem Nutzer.\nVorteil: Wissen und Verarbeitung sind getrennt → Wissen lässt sich leicht ändern!',
  },
  {
    id: 'ai-29', moduleId: 'ai', category: 'Logik & Wissensbasierte Systeme',
    question: 'Was ist ein Expertensystem und welche Anforderungen hat es?',
    answer: 'Wissensbasiertes System, das Expertenwissen nachbildet. Anforderungen:\n- Wendet Expertenwissen zur Problemlösung an\n- Stellt Wissen lesbar dar\n- Kann Unsicherheiten verarbeiten\n- Begründet und erklärt seine Ergebnisse\n- Wissen ist leicht wartbar\nEinsatz: Diagnose, Medizin, Analysetechnik.',
  },
  {
    id: 'ai-30', moduleId: 'ai', category: 'Logik & Wissensbasierte Systeme',
    question: 'Was ist Inferenz in der KI?',
    answer: 'Automatisches Schlussfolgern aus gespeichertem Wissen. Beispiel: „Alle Hunde bellen. Bello ist ein Hund. → Bello bellt." Wird überall eingesetzt, wo logisches Denken gefragt ist.',
  },

  // Maschinelles Lernen
  {
    id: 'ai-31', moduleId: 'ai', category: 'Maschinelles Lernen',
    question: 'Erkläre die Hierarchie: KI → Machine Learning → Deep Learning.',
    answer: 'KI: Oberbegriff für alle Methoden, die Maschinen intelligent machen.\nMachine Learning: Teilbereich der KI – Maschinen lernen aus Daten, ohne explizit programmiert zu werden.\nDeep Learning: Teilbereich von ML – nutzt tiefe neuronale Netze mit vielen Schichten (besonders gut für Bilder/Sprache).',
  },
  {
    id: 'ai-32', moduleId: 'ai', category: 'Maschinelles Lernen',
    question: 'Was ist überwachtes Lernen (Supervised Learning)?',
    answer: 'KI lernt mit Trainingsdaten, die bekannte Antworten (Labels) enthalten. Die KI lernt, Eingaben auf Ausgaben abzubilden.\nAnwendung: E-Mail-Spam-Erkennung, Bildklassifizierung, Kreditscoring.',
  },
  {
    id: 'ai-33', moduleId: 'ai', category: 'Maschinelles Lernen',
    question: 'Was ist unüberwachtes Lernen (Unsupervised Learning)?',
    answer: 'Keine Labels/Antworten in den Trainingsdaten. Die KI entdeckt selbst Muster und Strukturen.\nAnwendung: Kundensegmentierung, Clustering, Anomalieerkennung.',
  },
  {
    id: 'ai-34', moduleId: 'ai', category: 'Maschinelles Lernen',
    question: 'Was ist bestärkendes Lernen (Reinforcement Learning)?',
    answer: 'Kein Lehrer, keine Labels. Ein Agent bekommt Belohnungen oder Bestrafungen für Aktionen und lernt durch Versuch und Irrtum.\nAnwendung: Spielende KI (AlphaGo, Schach), Robotersteuerung.',
  },
  {
    id: 'ai-35', moduleId: 'ai', category: 'Maschinelles Lernen',
    question: 'Was ist der Unterschied zwischen Klassifikation und Clustering?',
    answer: 'Klassifikation (überwacht): Ordnet Daten in BEKANNTE Kategorien ein (z.B. E-Mail = Spam oder kein Spam).\nClustering (unüberwacht): Gruppiert ähnliche Daten OHNE vorgegebene Kategorien (z.B. Kunden in Gruppen einteilen).',
  },
  {
    id: 'ai-36', moduleId: 'ai', category: 'Maschinelles Lernen',
    question: 'Was ist ein künstliches neuronales Netz (KNN)?',
    answer: 'Computermodell, das dem menschlichen Gehirn nachempfunden ist. Besteht aus Neuronen (Knoten) und Verbindungen (Gewichte). Lernt durch Anpassen der Gewichte. Deep Learning = viele Schichten. CNN (Convolutional Neural Network) = besonders gut für Bilder.',
  },

  // Ethik & Recht
  {
    id: 'ai-37', moduleId: 'ai', category: 'Ethik & Recht',
    question: 'Was ist der EU AI Act (März 2024)?',
    answer: 'Weltweit erstes umfassendes KI-Gesetz. Nutzt risikobasierten Ansatz:\n🔴 Unannehmbares Risiko (soziale Bewertungssysteme) → Verboten!\n🟠 Hohes Risiko (kritische Infrastruktur, Bildung) → Strenge Regulierung\n🟡 Begrenztes Risiko (Emotionserkennung) → Transparenzpflicht\n🟢 Geringes Risiko (Videospiele, Spamfilter) → Kaum Einschränkungen',
  },
  {
    id: 'ai-38', moduleId: 'ai', category: 'Ethik & Recht',
    question: 'Was ist Bias in KI-Systemen?',
    answer: 'Verzerrung durch einseitige Trainingsdaten. KI lernt aus historischen Daten → wenn die Daten voreingenommen sind, ist die KI es auch.\nBeispiel: Bewerbungs-KI lehnte Frauen ab, weil historisch mehr Männer eingestellt wurden.',
  },
  {
    id: 'ai-39', moduleId: 'ai', category: 'Ethik & Recht',
    question: 'Was ist ein Deepfake?',
    answer: 'KI-generiertes Fake-Video oder -Audio, das kaum von echten Aufnahmen zu unterscheiden ist. Problem: Wirklichkeitsverzerrung, Manipulation, Desinformation.',
  },
  {
    id: 'ai-40', moduleId: 'ai', category: 'Ethik & Recht',
    question: 'Was sind die 4 Anforderungen an vertrauenswürdige KI?',
    answer: 'Fairness: KI darf keine Gruppen benachteiligen.\nTransparenz: Es muss klar sein, wie die KI entscheidet.\nErklärbarkeit: KI-Entscheidungen müssen nachvollziehbar sein.\nDatenschutz: DSGVO gilt auch für KI-Systeme.',
  },
  {
    id: 'ai-41', moduleId: 'ai', category: 'Ethik & Recht',
    question: 'Was ist ein Social Bot?',
    answer: 'Computergesteuerter Akteur in sozialen Netzwerken, der automatisch postet, kommentiert oder Inhalte verbreitet. Problem: Desinformation, Meinungsmanipulation, Wirklichkeitsverzerrung.',
  },
  {
    id: 'ai-42', moduleId: 'ai', category: 'Ethik & Recht',
    question: 'Nenne 3 Branchen mit KI-Einsatz und konkrete Anwendungsfälle.',
    answer: 'Industrie 4.0: Predictive Maintenance (Maschinenausfälle vorhersagen), Qualitätskontrolle.\nMedizin: Diagnoseunterstützung, Röntgenbildanalyse.\nFinanzwirtschaft: Betrugserkennung, Kreditscoring.\nEinzelhandel: Empfehlungssysteme (Netflix, Amazon), Dynamic Pricing.',
  },

  // Einführung & Geschichte (Ergänzungen)
  {
    id: 'ai-43', moduleId: 'ai', category: 'Einführung & Geschichte',
    question: 'Was ist das Halteproblem und wer hat es bewiesen?',
    answer: 'Alan Turing bewies, dass es kein Programm geben kann, das für beliebige Programme entscheiden kann, ob diese in eine Endlosschleife laufen. Es ist ein fundamentales Ergebnis der Berechenbarkeitstheorie.',
  },
  {
    id: 'ai-44', moduleId: 'ai', category: 'Einführung & Geschichte',
    question: 'Was ist das Perceptron und wer hat es entwickelt?',
    answer: 'Frank Rosenblatt entwickelte 1958 das Perceptron – ein lernfähiges künstliches Neuron, das die Grundlagen für maschinelles Lernen schuf. Es ist der Vorläufer moderner neuronaler Netze.',
  },
  {
    id: 'ai-45', moduleId: 'ai', category: 'Einführung & Geschichte',
    question: 'Welche drei Hauptphasen prägen die Geschichte der KI?',
    answer: '1) Symbolische KI / Logik (1950er–80er): Expertensysteme, regelbasiert.\n2) Maschinelles Lernen (1980er–2010er): Lernen aus Daten.\n3) Deep Learning / neuronale Netze (ab 2012): Durchbrüche bei Bild- und Sprachverarbeitung.',
  },
  {
    id: 'ai-46', moduleId: 'ai', category: 'Einführung & Geschichte',
    question: 'Was leistete AlphaGo 2016 und welche Methoden nutzte es?',
    answer: 'AlphaGo von Google DeepMind besiegte den menschlichen Go-Weltmeister. Es nutzte Deep Learning, Reinforcement Learning und Monte Carlo Tree Search – ein Meilenstein, weil Go als zu komplex für Maschinen galt.',
  },

  // Infrastruktur & Big Data (Ergänzungen)
  {
    id: 'ai-47', moduleId: 'ai', category: 'Big Data',
    question: 'Was ist die Lambda-Architektur?',
    answer: 'Die Lambda-Architektur kombiniert Batch- und Stream-Verarbeitung parallel: Der Batch-Layer liefert genaue Ergebnisse (zeitverzögert), der Speed-Layer liefert zeitnahe Ergebnisse in Echtzeit. Beide werden im Serving-Layer zusammengeführt.',
  },
  {
    id: 'ai-48', moduleId: 'ai', category: 'Datenmanagement & ETL',
    question: 'Was sind Qualitätsdimensionen von Daten?',
    answer: 'Wichtige Dimensionen: Vollständigkeit, Konsistenz, Aktualität, Genauigkeit/Korrektheit, Eindeutigkeit. Schlechte Datenqualität ist einer der häufigsten Fehler in KI-Projekten – „Garbage in, garbage out".',
  },
  {
    id: 'ai-49', moduleId: 'ai', category: 'Datenmanagement & ETL',
    question: 'Was ist Model Drift?',
    answer: 'Model Drift beschreibt den Qualitätsverlust eines ML-Modells im Laufe der Zeit, weil sich die Abhängigkeiten zwischen Eingabe- und Zielvariablen verändern. Modelle müssen regelmäßig auf neuen Daten nachtrainiert werden.',
  },

  // Agenten & Logik (Ergänzungen)
  {
    id: 'ai-50', moduleId: 'ai', category: 'KI-Agenten',
    question: 'Was ist Knowledge Engineering?',
    answer: 'Knowledge Engineering beschreibt den Prozess des Wissenserwerbs für eine Wissensbasis – basierend auf menschlichen Experten, Wissensingenieuren und Datenbanken. Ziel: das Wissen von Experten in ein KI-System zu überführen.',
  },
  {
    id: 'ai-51', moduleId: 'ai', category: 'KI-Agenten',
    question: 'Was ist eine Wissensbasis (KB) und was ist ein Inferenzmechanismus?',
    answer: 'Wissensbasis: Speichert deklaratives Wissen (Fakten, Regeln).\nInferenzmechanismus: Das Verfahren, das dieses Wissen nutzt, um Schlüsse zu ziehen, Anfragen zu beantworten oder Pläne zu erstellen.\nVorteil der Trennung: Wissen kann ausgetauscht werden, ohne das System neu zu programmieren.',
  },

  // Maschinelles Lernen (Ergänzungen)
  {
    id: 'ai-52', moduleId: 'ai', category: 'Maschinelles Lernen',
    question: 'Was ist k-Means-Clustering?',
    answer: 'k-Means ist ein unüberwachtes Lernverfahren, das Datenpunkte in k Cluster aufteilt. Jeder Punkt wird dem nächstgelegenen Clustermittelpunkt (Zentroid) zugeordnet, der iterativ angepasst wird. Anwendung: Kundensegmentierung, Anomalieerkennung.',
  },
  {
    id: 'ai-53', moduleId: 'ai', category: 'Maschinelles Lernen',
    question: 'Was ist ein Entscheidungsbaum im maschinellen Lernen?',
    answer: 'Ein Entscheidungsbaum klassifiziert Daten durch hierarchische Verzweigungen nach Merkmalen. Vorteil: gut interpretierbar – das gelernte Wissen kann als logische Formel dargestellt werden. Anwendung: Kreditantrag bewilligen oder ablehnen.',
  },
  {
    id: 'ai-54', moduleId: 'ai', category: 'Maschinelles Lernen',
    question: 'Was ist Generalisierung im maschinellen Lernen?',
    answer: 'Generalisierung bedeutet, das an endlich vielen Trainingsbeispielen Gelernte erfolgreich auf neue, unbekannte Beispiele anwenden zu können – ohne Auswendiglernen. Gegenteil: Overfitting (Überanpassung an Trainingsdaten).',
  },

  // Neuronale Netze & Deep Learning (neue Kategorie)
  {
    id: 'ai-55', moduleId: 'ai', category: 'Neuronale Netze & Deep Learning',
    question: 'Was ist ein künstliches neuronales Netz und woher stammt die Idee?',
    answer: 'Ein KNN ist ein mathematisches Modell, inspiriert von biologischen Gehirnen. Neuronen sind durch gewichtete Verbindungen vernetzt; Wissen wird verteilt in den Gewichten gespeichert. Lernen = Anpassen der Gewichte.',
  },
  {
    id: 'ai-56', moduleId: 'ai', category: 'Neuronale Netze & Deep Learning',
    question: 'Wie funktioniert der Backpropagation-Algorithmus?',
    answer: '1) Vorwärtspropagierung: Netzausgabe berechnen.\n2) Fehler bestimmen (Differenz zwischen Ausgabe und Zielwert).\n3) Fehler rückwärts durch das Netz propagieren.\n4) Gewichte schrittweise per Gradientenabstieg verbessern.',
  },
  {
    id: 'ai-57', moduleId: 'ai', category: 'Neuronale Netze & Deep Learning',
    question: 'Was sind CNNs (Convolutional Neural Networks) und wofür werden sie eingesetzt?',
    answer: 'CNNs sind spezialisierte neuronale Netze für Bilddaten. Faltungsschichten (Convolution) extrahieren Merkmale automatisch. Sie sind der Standard für Bildklassifikation, Objekterkennung und Computer Vision.',
  },
  {
    id: 'ai-58', moduleId: 'ai', category: 'Neuronale Netze & Deep Learning',
    question: 'Was ist Dropout in neuronalen Netzen und wozu dient es?',
    answer: 'Dropout ist eine Regularisierungstechnik gegen Overfitting: Beim Training werden zufällig Neuronen (z. B. 50 %) ignoriert. Das erzwingt Robustheit, weil das Netz nicht auf einzelne Neuronen angewiesen sein kann.',
  },
  {
    id: 'ai-59', moduleId: 'ai', category: 'Neuronale Netze & Deep Learning',
    question: 'Was sind GANs (Generative Adversarial Networks)?',
    answer: 'GANs bestehen aus zwei konkurrierenden Netzen:\nGenerator: erzeugt neue (gefälschte) Daten.\nDiskriminator: unterscheidet echte von gefälschten Daten.\nSie trainieren sich gegenseitig, bis der Generator täuschend echte Bilder/Daten erzeugt. Grundlage von Deepfakes.',
  },
  {
    id: 'ai-60', moduleId: 'ai', category: 'Neuronale Netze & Deep Learning',
    question: 'Was ist ein Transformer-Modell?',
    answer: 'Transformer sind eine Architektur für sequentielle Daten (v.a. Text), die auf Aufmerksamkeitsmechanismen (Attention) basiert. Jedes Element einer Sequenz kann direkt auf alle anderen zugreifen. Grundlage moderner Sprachmodelle: GPT, BERT, Claude.',
  },

  // Datenmanagement & Anwendungen (neue Kategorie)
  {
    id: 'ai-61', moduleId: 'ai', category: 'Datenmanagement & Anwendungen',
    question: 'Was ist Natural Language Processing (NLP)?',
    answer: 'NLP ist das Teilgebiet der KI für maschinelle Verarbeitung menschlicher Sprache. Aufgaben: Textverstehen, Sentiment-Analyse, maschinelle Übersetzung, Chatbots, Sprachmodelle. Grundlage: Transformer-Architekturen.',
  },
  {
    id: 'ai-62', moduleId: 'ai', category: 'Datenmanagement & Anwendungen',
    question: 'Was ist Computer Vision?',
    answer: 'Computer Vision befähigt Maschinen, Bilder und Videos zu verstehen. Aufgaben: Objekterkennung, Bildklassifikation, Segmentierung, Gesichtserkennung. Technische Grundlage: Convolutional Neural Networks (CNNs).',
  },

  // ── Projektmanagement (FOM · Prof. Dr. Patrick Lückmann) ─────────────────
  {
    id: 'pm-1', moduleId: 'pm', category: 'PM Basics',
    question: 'Die 5 Prozessgruppen des PMI-Standards',
    answer: '1. Initiierung (I)\n2. Planung (P)\n3. Execution / Ausführung (E)\n4. Monitoring & Controlling (M&C)\n5. Closing / Abschluss (C)\n\nWichtig: KEINE sequenziellen Phasen! Sie überschneiden sich und interagieren während des gesamten Projekts.',
  },
  {
    id: 'pm-2', moduleId: 'pm', category: 'PM Basics',
    question: 'Magisches Dreieck/Vieleck – die Projektrestriktionen',
    answer: 'Scope (Inhalt/Umfang), Zeit, Kosten/Budget, Qualität (Output), Qualität der Ressourcen (Input), Risiko.\nKosten für Änderungen steigen im Projektverlauf; Stakeholder-Einfluss, Risiko und Unsicherheit nehmen ab → frühzeitige Sorgfalt zahlt sich aus!',
  },
  {
    id: 'pm-3', moduleId: 'pm', category: 'PM Basics',
    question: 'PSP / WBS – Was ist das und wofür wird es genutzt?',
    answer: 'PSP = Projektstrukturplan / WBS = Work Breakdown Structure.\nDeliverable-orientierte hierarchische Dekomposition der Arbeit (Ebene 1 = Projekt → ... → untere Ebene = Arbeitspakete).\nGrundlage für: Aktivitätenliste, Netzplan, Ressourcen-, Zeit-, Kosten-, Qualitäts- und Risikoplanung sowie Controlling.',
  },
  {
    id: 'pm-4', moduleId: 'pm', category: 'Zeitmanagement',
    question: 'PERT-Formel & Schätzprobleme',
    answer: 'PERT-Wert = (P + 4W + O) / 6\n(P=pessimistisch, W=wahrscheinlich, O=optimistisch)\n\nSchätzprobleme, die PERT reduziert:\n- Parkinson\'s Gesetz: Arbeit füllt verfügbare Zeit aus\n- Studentenkrankheit: Puffer gleich zu Beginn verbraucht\n- Persönliche Puffer: jeder baut intuitiv Sicherheit ein',
  },
  {
    id: 'pm-5', moduleId: 'pm', category: 'Zeitmanagement',
    question: 'Kritischer Pfad – Definition und Berechnung',
    answer: 'Kritischer Pfad = Aktivitätenfolge mit Puffer = 0.\n• Forward Pass: FAZ/FEZ berechnen (höhere Zahl übernehmen)\n• Backward Pass: SAZ/SEZ berechnen (tiefere Zahl übernehmen)\n• Puffer = SAZ – FAZ\nVerspätung auf dem kritischen Pfad → Verspätung des gesamten Projekts!\nKompressionstechniken: Crashing (mehr Ressourcen) / Fast Tracking (parallelisieren)',
  },
  {
    id: 'pm-6', moduleId: 'pm', category: 'EVM',
    question: 'Earned-Value-Methode – Grundbegriffe',
    answer: 'PV (Planned Value) = Planwert\nEV (Earned Value) = gerechtfertigte Kosten lt. Fortschritt\nAC (Actual Cost) = tatsächliche Kosten\nBAC (Budget at Completion) = Gesamtbudget\n\nAbweichungen: CV = EV – AC | SV = EV – PV\nIndizes: CPI = EV/AC | SPI = EV/PV\n(< 1 = ungünstig, > 1 = günstig)',
  },
  {
    id: 'pm-7', moduleId: 'pm', category: 'EVM',
    question: 'EAC-Prognosen (Estimate at Completion)',
    answer: 'Systematischer Schätzfehler: EAC = BAC / CPI\nEinmaleffekt: EAC = AC + (BAC – EV)\nKombiniert: EAC = AC + (BAC – EV) / (CPI × SPI)\n\nETC = EAC – AC (noch zu erwartende Kosten)\nVAC = BAC – EAC (Budgetabweichung am Ende)\nTCPI = (BAC – EV) / (BAC – AC) (nötige Effizienz)',
  },
  {
    id: 'pm-8', moduleId: 'pm', category: 'Qualität & Risiko',
    question: 'Qualitätswerkzeuge im Überblick',
    answer: '• 5-Mal-Warum: iteratives Fragen bis zur Grundursache\n• Ishikawa/Fishbone: Ursache-Wirkungs-Analyse nach Kategorien\n• Pareto-Diagramm: 80/20-Regel – 20% der Ursachen = 80% der Probleme\n• Histogramm: Häufigkeitsverteilung\n• Run Chart: Trends über Zeit\n• Scatterplot: Korrelation zweier Variablen',
  },
  {
    id: 'pm-9', moduleId: 'pm', category: 'Qualität & Risiko',
    question: 'Risikobewältigungsstrategien (negativ & positiv)',
    answer: 'Negative Risiken (Bedrohungen):\nA. Vermeiden – Bedrohung eliminieren\nB. Transfer – Verantwortung abgeben\nC. Milderung – Wahrscheinlichkeit/Auswirkung senken\nD. Akzeptanz\n\nPositive Risiken (Chancen):\nE. Ausnutzen – Eintritt sicherstellen\nF. Teilung – an fähigste Partei\nG. Verbesserung – Wahrscheinlichkeit/Nutzen erhöhen\nH. Akzeptanz',
  },
  {
    id: 'pm-10', moduleId: 'pm', category: 'Stakeholder & Personal',
    question: 'RACI-Matrix – die vier Rollen',
    answer: 'R = Responsible: führt die Aufgabe aus (verantwortlich)\nA = Accountable: trägt letztliche Rechenschaftspflicht (nur 1 pro Aufgabe!)\nC = Consulted: wird beratend hinzugezogen\nI = Informed: wird über Ergebnis informiert\n\nJede Aktivität × jedes Teammitglied bekommt einen Buchstaben.',
  },
  {
    id: 'pm-11', moduleId: 'pm', category: 'Stakeholder & Personal',
    question: 'Macht-Interesse-Raster (Stakeholder-Management)',
    answer: 'Hohe Macht + hohes Interesse → Eingehend managen\nHohe Macht + niedriges Interesse → Zufrieden halten\nNiedrige Macht + hohes Interesse → Informiert halten\nNiedrige Macht + niedriges Interesse → Beobachten\n\nZiel: Unterstützung maximieren, negative Wirkung reduzieren.',
  },
  {
    id: 'pm-12', moduleId: 'pm', category: 'Stakeholder & Personal',
    question: 'Tuckman-Teamphasen',
    answer: '1. Forming – Team konstituiert sich, Mitglieder lernen sich kennen\n2. Storming – Uneinigkeiten, Konflikte, Zusammenarbeit lernen\n3. Norming – gute Arbeitsbeziehungen entstehen, Rollen klären sich\n4. Performing – Team eingespielt und effizient\n5. Adjourning – Team wird aufgelöst',
  },
  {
    id: 'pm-13', moduleId: 'pm', category: 'Agiles PM',
    question: 'Scrum: Rollen, Artefakte, Aktivitäten',
    answer: 'Rollen: Product Owner (priorisiert Backlog), Scrum-Master (moderiert), Entwicklungsteam (umsetzend)\n\nArtefakte: Product Backlog, Sprint Backlog, Lieferbares Inkrement\n\nAktivitäten: Sprint-Planung → Daily Scrum → Sprint-Ausführung → Sprint-Review → Sprint-Retrospektive',
  },
  {
    id: 'pm-14', moduleId: 'pm', category: 'Agiles PM',
    question: 'Wysocki-Modell: Wann welches PM-Modell?',
    answer: 'Q1 (Ziel klar + Lösung klar): Traditionelles PM (linear-inkrementell)\nQ2 (Ziel klar + Lösung unklar): Agiles PM (iterativ-adaptiv) → SCRUM\nQ3 (Ziel unklar + Lösung unklar): Extreme PM\nQ4 (Lösung klar + Ziel gesucht): Emertxe PM\n\nSchwaber & Beedle: Complex = Agile/Scrum; Complicated = traditionell/KANBAN.',
  },
  {
    id: 'pm-15', moduleId: 'pm', category: 'Interkulturelles PM',
    question: 'Hofstedes 6 Kulturdimensionen',
    answer: '1. Machtdistanz (Power Distance)\n2. Risikovermeidung (Uncertainty Avoidance)\n3. Kollektivismus vs. Individualismus\n4. Maskulinität vs. Femininität\n5. Langfristige vs. kurzfristige Orientierung\n6. Indulgence vs. Restraint\n\nProjektbeispiel: Machtdistanz → flache Hierarchien: PM bezieht Team ein; steile Hierarchien: Team erwartet klare Anweisungen.',
  },
  {
    id: 'pm-16', moduleId: 'pm', category: 'Interkulturelles PM',
    question: 'Cultural Intelligence (CQ) – 4 Dimensionen',
    answer: 'CQ Drive (Motivational): Motivation & Selbstvertrauen für interkulturelle Aufgaben\nCQ Knowledge (Cognitive): Wissen über Normen anderer Kulturen\nCQ Strategy (Metacognitive): Bewusste Planung & Reflexion\nCQ Action (Behavioral): Angemessenes verbales/nonverbales Verhalten zeigen',
  },
  {
    id: 'pm-17', moduleId: 'pm', category: 'Change Management',
    question: 'Kotters 8 Schritte des Change Managements',
    answer: '1. Dringlichkeit schaffen\n2. Mächtige Führungskoalition bilden\n3. Vision entwickeln (in 5 Min. erklärbar!)\n4. Vision kommunizieren\n5. Andere ermächtigen (Hindernisse beseitigen)\n6. Kurzfristige Erfolge planen & belohnen\n7. Verbesserungen konsolidieren\n8. Neue Ansätze in der Kultur verankern',
  },
  // Differentielle Psychologie
  {
    id: 'dp-1', moduleId: 'diffpsych', category: 'Grundbegriffe',
    question: 'State vs. Trait vs. Disposition – Unterschied?',
    answer: 'State: aktueller, nicht stabiler Zustand (z. B. Angst gerade jetzt)\nTrait: überdauernde Eigenschaft über Situationen hinweg (z. B. Ängstlichkeit)\nDisposition: Merkmal mit mittelfristiger Stabilität (Wochen/Monate); nicht direkt beobachtbar, nur aus Verhaltensregelmäßigkeiten erschließbar',
  },
  {
    id: 'dp-2', moduleId: 'diffpsych', category: 'Grundbegriffe',
    question: 'William Sterns vier Disziplinen der Differentiellen Psychologie',
    answer: 'Nomothetisch (variablenorientiert):\n• Variationsforschung: ein Merkmal an mehreren Personen\n• Korrelationsforschung: zwei+ Merkmale an mehreren Personen\n\nIdiographisch (personenorientiert):\n• Psychographie: eine Person bzgl. mehrerer Merkmale\n• Komparationsforschung: zwei+ Personengruppen bzgl. mehrerer Merkmale',
  },
  {
    id: 'dp-3', moduleId: 'diffpsych', category: 'Grundbegriffe',
    question: 'Persönlichkeit, Temperament, Charakter – Definitionen',
    answer: 'Persönlichkeit (Asendorpf): nichtpathologische Individualität in Erscheinung, Verhalten und Erleben im Vergleich zur Referenzpopulation\n\nTemperament (Kretschmer): angeboren, biologisch, umweltstabil\n\nCharakter: erworben, durch Umwelt beeinflusst\n→ Temperament und Charakter beeinflussen sich gegenseitig',
  },
  {
    id: 'dp-4', moduleId: 'diffpsych', category: 'Messung',
    question: 'Drei Hauptgütekriterien eines psychologischen Tests',
    answer: '1. Objektivität – unabhängig von Testsituation/Testleiter\n2. Reliabilität – misst möglichst messfehlerfrei (z. B. Cronbachs Alpha)\n3. Validität – misst, was es messen soll (z. B. Kriteriumsvalidität)\n\nMerke: Ohne Objektivität keine Reliabilität, ohne Reliabilität keine Validität!',
  },
  {
    id: 'dp-5', moduleId: 'diffpsych', category: 'Messung',
    question: 'Big Five – die fünf Dimensionen (OCEAN)',
    answer: 'O – Offenheit für Erfahrungen (Einfallsreichtum, Veränderungsbereitschaft)\nC – Conscientiousness/Gewissenhaftigkeit (Perfektionismus, Organisation)\nE – Extraversion (Geselligkeit, Enthusiasmus)\nA – Agreeableness/Verträglichkeit (Altruismus, Takt)\nN – Neurotizismus (Empfindsamkeit, Besorgnis)\n\nNEO-PI-R: 240 Items, 30 Subskalen. Kurzversion: NEO-FFI (60 Items)',
  },
  {
    id: 'dp-6', moduleId: 'diffpsych', category: 'Messung',
    question: 'HEXACO vs. Big Five – was ist neu?',
    answer: 'HEXACO hat 6 statt 5 Faktoren (Ashton & Lee):\nH – Honesty-Humility (Ehrlichkeit/Bescheidenheit) → NEU, war bei Big Five Teil der Verträglichkeit\nE – Emotionality (statt Neurotizismus, inkl. Gutherzigkeit)\nX – Extraversion\nA – Agreeableness vs. Anger\nC – Conscientiousness\nO – Openness\n\nFokus: Neugier statt Intelligenz bei Offenheit',
  },
  {
    id: 'dp-7', moduleId: 'diffpsych', category: 'Intelligenz',
    question: 'Spearmans g-Faktor und Cattells fluide/kristalline Intelligenz',
    answer: 'Spearman: g-Faktor (Generalfaktor) + spezifische s-Faktoren\n→ g beeinflusst alle kognitiven Bereiche\n\nCattell:\n• Fluide Intelligenz: Reaktionszeit, induktives Denken, neue Probleme lösen → nimmt im Alter ab\n• Kristalline Intelligenz: Wortschatz, Allgemeinwissen → bleibt bis ins hohe Alter intakt',
  },
  {
    id: 'dp-8', moduleId: 'diffpsych', category: 'Intelligenz',
    question: 'IQ-Berechnung: Stern (alt) vs. Wechsler (heute)',
    answer: 'Stern (1912): IQ = Intelligenzalter / Lebensalter × 100\n→ Problem: Zuwachs flacht ab ~13 Jahren ab\n\nWechsler (1939): IQ = 100 + 15 × z\n→ Mittelwert 100, SD 15 für alle Altersstufen\n→ 68 % liegen zwischen 85–115\n→ IQ ≥ 130 = Hochbegabung (~2 %); IQ < 70 = Behinderung (~2 %)',
  },
  {
    id: 'dp-9', moduleId: 'diffpsych', category: 'Intelligenz',
    question: 'Heritabilität – was bedeutet sie und was NICHT?',
    answer: 'Heritabilität = Anteil genetisch bedingter Varianz an der Gesamtvarianz eines Merkmals in einer Population\n\nBei Intelligenz: 50–75 % der Varianz\n\nBedeutet NICHT:\n• Dass 50–75 % der Intelligenz einer Person genetisch sind\n• Dass Gene 50–75 % „verantwortlich" sind\n\nBedeutet NUR: Erklärt, warum Menschen sich unterscheiden – nie wie viel einer einzelnen Person vererbt ist',
  },
  {
    id: 'dp-10', moduleId: 'diffpsych', category: 'Intelligenz',
    question: 'Flynn-Effekt – positiv und negativ',
    answer: 'Positiver Flynn-Effekt: Zunahme der durchschnittlichen IQ-Testleistung zwischen 1950–2000 durch verbesserte Lebensbedingungen → Tests müssen regelmäßig neu normiert werden\n\nNegativer Flynn-Effekt: Rückgang seit ca. 1975 in einigen Ländern\nDiskutierte Erklärungen: Dysgenik (gesunkene Reaktionszeit), endokrine Disruptoren\n→ Befundlage uneinheitlich',
  },
  {
    id: 'dp-11', moduleId: 'diffpsych', category: 'Soziale Kompetenz & EI',
    question: 'Emotionale Intelligenz – 4 Komponenten (Salovey & Mayer)',
    answer: '1. Emotionen wahrnehmen und ausdrücken\n2. Emotionen verstehen und analysieren\n3. Emotionen regulieren\n4. Emotionen nutzen (für kreatives Denken)\n\nMessung: MSCEIT (141 Items, 4 Facetten)\n\nKritik: Golemans „80 %-Behauptung" ist wissenschaftlich nie belegt',
  },
  {
    id: 'dp-12', moduleId: 'diffpsych', category: 'Kreativität & Motive',
    question: 'Fünf Komponenten der Kreativität',
    answer: '1. Expertenwissen – fundierte Wissensgrundlage\n2. Fantasievolles Denken – Muster neu erkennen\n3. Wagemutige Persönlichkeit – risikofreudig, durchhaltefähig\n4. Intrinsische Motivation – Interesse aus eigenem Antrieb\n5. Kreative Umgebung – Förderung durch Mentoren/Kollegen\n\nAb IQ ~120 bricht die Korrelation zur Kreativität ab\nKreativität = divergentes Denken; Intelligenz = konvergentes Denken',
  },
  {
    id: 'dp-13', moduleId: 'diffpsych', category: 'Kreativität & Motive',
    question: 'McClellands „Big 3" der Motive',
    answer: 'Leistungsmotiv: Wunsch nach lösbaren Herausforderungen → affektiver Kern: Neugier, Stolz\nBindungs-/Anschlussmotiv: Wunsch nach Zugehörigkeit/Geborgenheit → affektiver Kern: Liebe\nMachtmotiv: Wunsch nach Einfluss/Kontrolle → affektiver Kern: Selbstbehauptung, Stärke\n\nImplizit (unbewusst): TAT (Thematischer Apperzeptionstest)\nExplizit (bewusst): Fragebogen, z. B. Personality Research Form (PRF)',
  },
  {
    id: 'dp-14', moduleId: 'diffpsych', category: 'Selbst & Persönlichkeit',
    question: 'Selbstkonzept vs. Selbstwertgefühl + Big-Fish-Little-Pond-Effekt',
    answer: 'Selbstkonzept: Wissen über eigene Person (Eigenschaften, Fähigkeiten, Ziele) – handlungsleitende Wissensstruktur, zentrales Stressresistenz-Ressource\n\nSelbstwertgefühl: affektive Wertschätzung der eigenen Person; korreliert hoch negativ mit Neurotizismus\n\nBig-Fish-Little-Pond-Effekt (soziales Vergleichen):\nBesser als „Großer unter Kleinen" aufgestellt sein als als „Kleiner unter Großen" → Schulwechsel-Beispiel: Selbstwertabfall bei Gymnasiast:innen',
  },
  {
    id: 'dp-15', moduleId: 'diffpsych', category: 'Selbst & Persönlichkeit',
    question: 'Dunkle Triade und ICD-Narzissmus',
    answer: 'Dunkle Triade:\n1. Narzissmus – Selbstüber-/Fremdunterschätzung\n2. Machiavellismus – manipulative Beeinflussung zum eigenen Vorteil\n3. (Subklinische) Psychopathie – Impulsivität, geringe Empathie\n\nICD-10: 5 von 9 Kriterien für narzisstische PS (Größengefühl, Empathiemangel etc.)\nICD-11: Narzisstische PS als eigenständige Kategorie entfernt!',
  },
  {
    id: 'dp-16', moduleId: 'diffpsych', category: 'Selbst & Persönlichkeit',
    question: 'Salutogenese & Kohärenzgefühl (Antonovsky)',
    answer: 'Salutogenese: Gesundheit als Kontinuum (fließender Übergang Gesundheit–Krankheit)\n\nKohärenzgefühl (Sense of Coherence, SOC) = andauerndes Vertrauen in die Vorhersagbarkeit der Umwelt\n\nDrei Komponenten:\n1. Verstehbarkeit – Ereignisse sind erklärbar\n2. Handhabbarkeit – Ressourcen sind vorhanden\n3. Sinnhaftigkeit – Herausforderungen sind es wert\n\nHohes SOC → höhere Stressresistenz, geringeres Depressionsrisiko',
  },
  {
    id: 'dp-17', moduleId: 'diffpsych', category: 'Persönlichkeitstheorien',
    question: 'Freuds Strukturmodell der Psyche (Es, Ich, Über-Ich)',
    answer: 'Es: psychische Grundenergie, Lustprinzip (sofortige Bedürfnisbefriedigung)\nIch: Kern des Individuums, Realitätsprinzip (vermittelt zwischen Es und Realität)\nÜber-Ich: moralische Instanz, internalisierte Normen/Gewissen\n\nEisberg-Modell:\n• Bewusstsein (sichtbar)\n• Vorbewusstsein (zugänglich, aber nicht im Fokus)\n• Unbewusstsein (kaum zugänglich, größter Teil)\n\nKritik: Empirisch kaum überprüfbar, nur retrospektiv',
  },
  {
    id: 'dp-18', moduleId: 'diffpsych', category: 'Persönlichkeitstheorien',
    question: 'Drei Lernformen des Behaviorismus',
    answer: '1. Klassische Konditionierung (Pawlow): neutraler Reiz (Glocke) + unbedingter Reiz (Futter) → konditionierte Reaktion\n\n2. Operante Konditionierung (Skinner): Lernen durch Belohnung/Bestrafung spontanen Verhaltens\n\n3. Beobachtungslernen/Modelllernen (Bandura): Lernen durch Nachahmung im sozialen Kontext\n\nHeutige Sicht: Lernende beeinflussen ihren Lernerfolg aktiv mit',
  },
  {
    id: 'dp-19', moduleId: 'diffpsych', category: 'Persönlichkeitsentwicklung',
    question: 'Stabilität der Persönlichkeit – Rangfolge und Big-Five-Veränderungen',
    answer: 'Stabilitätsrangfolge: IQ (stabilstes) > Big Five > Selbstwertgefühl (wenigsten stabil)\n\nIQ stabilisiert sich bis zum 8. Lebensjahr; Korrelation IQ mit 6 und 40 Jahren: r = 0,6–0,8\n\nDurchschnittliche Big-Five-Veränderungen im Erwachsenenalter (Roberts et al., 2006):\n→ Neurotizismus nimmt ab\n→ Gewissenhaftigkeit und Verträglichkeit nehmen zu\n\nWichtig: Persönlichkeitsveränderungen finden auch noch im jungen Erwachsenenalter statt',
  },
  {
    id: 'dp-20', moduleId: 'diffpsych', category: 'Persönlichkeitsentwicklung',
    question: 'Geteilte vs. nicht-geteilte Umwelteinflüsse',
    answer: 'Geteilte Umwelteinflüsse: wirken auf alle Kinder einer Familie gleich\n→ Einkommen, Familienklima, elterliche Werthaltungen\n→ Wichtiger für IQ-Unterschiede\n\nNicht-geteilte Umwelteinflüsse: einzigartig für jedes Kind\n→ Elterliche Bevorzugung, Geschwistereinfluss, Peers\n→ Wichtiger für fast alle anderen Eigenschaften (z. B. Extraversion)\n\nGesamt: Nicht-geteilte Einflüsse dominieren – Ausnahme: IQ',
  },
  {
    id: 'dp-21', moduleId: 'diffpsych', category: 'Messung',
    question: 'Normskalen im Überblick (z, Z, T, IQ, Stanine)',
    answer: 'z-Werte: M = 0, SD = 1\nZ-Werte (Standardwerte): M = 100, SD = 10\nT-Werte: M = 50, SD = 10\nIQ-Werte: M = 100, SD = 15\nStanine: M = 5, SD ≈ 2\n\nAlle basieren auf der Normalverteilung – sie verschieben und skalieren nur den Rohwert, damit er mit einer Normierungsstichprobe verglichen werden kann.',
  },
  {
    id: 'dp-22', moduleId: 'diffpsych', category: 'Messung',
    question: 'Projektive Verfahren – Rorschach-Test',
    answer: 'Projektive Verfahren: unbewusste Persönlichkeitsanteile sichtbar machen\n\nFormdeuteversuch von Rorschach (1921): Testpersonen werden Tintenkleckse vorgelegt → „Was könnte das sein?" → Deutung soll unbewusste Inhalte enthüllen\n\nVorteil: enthüllt Unbewusstes\nNachteil: mäßige Reliabilität, großer Interpretationsspielraum\n\nAndere projektive Verfahren: TAT (Thematischer Apperzeptionstest)',
  },
  {
    id: 'dp-23', moduleId: 'diffpsych', category: 'Messung',
    question: 'Reliabilität – Arten der Messung',
    answer: 'Reliabilität = der Test misst möglichst messfehlerfrei\n\nArten:\n• Retest-Reliabilität: gleiche Testpersonen zu zwei Zeitpunkten, Korrelation der Ergebnisse\n• Interne Konsistenz (Cronbachs Alpha): Homogenität der Items\n• Paralleltest-Reliabilität: zwei verschiedene Versionen desselben Tests\n• Split-Half-Reliabilität: Test in zwei Hälften teilen, Korrelation vergleichen\n\nOhne Reliabilität keine Validität!',
  },
  {
    id: 'dp-24', moduleId: 'diffpsych', category: 'Messung',
    question: 'Validitätsarten im Überblick',
    answer: 'Validität = der Test misst, was er messen soll\n\n• Inhaltsvalidität: Items repräsentieren das Konstrukt angemessen\n• Kriteriumsvalidität: Korrelation mit einem Außenkriterium (z. B. Belastungstest korreliert mit stressbedingten Erkrankungen)\n• Konstruktvalidität: Korreliert das Testergebnis mit verwandten Konstrukten wie erwartet?\n\nKriteriumsvalidität ist besonders prüfungsrelevant!',
  },
  {
    id: 'dp-25', moduleId: 'diffpsych', category: 'Messung',
    question: 'Lexikalischer Ansatz & Faktorenanalyse (Basis der Big Five)',
    answer: 'Lexikalischer Ansatz: Wichtige Persönlichkeitsunterschiede schlagen sich in der Alltagssprache nieder → Eigenschaftswörter systematisch sammeln und analysieren\n\nEntwicklung der Big Five:\nAllport & Odbert: ~18.000 Eigenschaftswörter\n→ Cattell: 4.500 Wörter, 35 Cluster, 16 Primärfaktoren\n→ Fiske: 5 Faktoren\n→ Norman/Goldberg: Big Five\n\nFaktorenanalyse: statistisches Verfahren, das viele Variablen auf wenige Faktoren reduziert',
  },
  {
    id: 'dp-26', moduleId: 'diffpsych', category: 'Messung',
    question: 'Big-Five-Facetten am Beispiel Extraversion',
    answer: 'NEO-PI-R: 5 Dimensionen × 6 Facetten = 30 Subskalen, 240 Items\n\nFacetten der Extraversion:\n1. Herzlichkeit\n2. Geselligkeit\n3. Durchsetzungsfähigkeit\n4. Aktivität\n5. Erlebnishunger\n6. Frohsinn\n\nExtravertierte: energisch, enthusiastisch, dominant, gesellig\nIntravertierte: schüchtern, zurückhaltend, ruhig\n\nZusatz: NEO-FFI = 60-Item-Kurzversion; NEO-FFI-30 = 30 Items',
  },
  {
    id: 'dp-27', moduleId: 'diffpsych', category: 'Messung',
    question: 'Big Five – Korrelationen mit Lebensergebnissen',
    answer: 'Neurotizismus: + Angst, Depression, Konflikt / − Wohlbefinden, Coping, Erfolg\nExtraversion: + Wohlbefinden, Status, Führung / − Depression\nOffenheit: + Inspiration, Erfolg / − Substanzmissbrauch, Autoritarismus\nVerträglichkeit: + Religiosität, Freundschaft / − Herzkrankheit, Kriminalität, Scheidung\nGewissenhaftigkeit: + Gesundheit, Langlebigkeit, Leistung / − Risikoverhalten, Kriminalität\n\n(Ozer & Benet-Martínez, 2006; Roberts et al., 2007)',
  },
  {
    id: 'dp-28', moduleId: 'diffpsych', category: 'Intelligenz',
    question: 'Hochbegabung – Merkmale und Kriterium',
    answer: 'Kriterium: IQ ≥ 130 → ca. 2 % der Bevölkerung\n\nTypische Merkmale (aber kein automatischer Beweis!):\n• Früheres Laufen und Sprechen\n• Frühere Pubertät\n• Niedrigere Rate psychischer Auffälligkeiten\n• Bessere Schulleistungen\n• Emotional ausgeglichener\n• Häufig Mehrfachbegabungen\n\nWichtig: Einzelne früh auftretende Merkmale sind KEIN automatischer Hochbegabungsbeweis!',
  },
  {
    id: 'dp-29', moduleId: 'diffpsych', category: 'Intelligenz',
    question: 'Kulturfreie vs. kulturabhängige Intelligenztests',
    answer: 'Kulturabhängige Tests (Sprache, Zahlen, Wissen):\nWAIS-IV (Nachfolger HAWIE), IST-2000-R, PSB-R 6-13, LPS-2, BIS-4\n\nKulturfreie/-faire Tests (visuelle Kombinationsaufgaben):\nCFT-20-R, Standard Progressive Matrices, BOMAT, APM\n\nDrei Positionen:\n• Universalismus: wissensunabhängige Parameter kulturübergreifend vergleichbar\n• Kontextualisierung: relevanter Bezugsrahmen vorgeben\n• Radikaler Relativismus: nur kulturspezifische Tests sinnvoll',
  },
  {
    id: 'dp-30', moduleId: 'diffpsych', category: 'Intelligenz',
    question: 'Thurstones 7 Primary Mental Abilities (1939)',
    answer: 'Louis Thurstone identifizierte 7 unabhängige Grundfähigkeiten:\n1. Verbale Fähigkeiten (V)\n2. Wortflüssigkeit (W)\n3. Numerische Fähigkeiten (N)\n4. Räumliches Denken (S)\n5. Gedächtnis (M)\n6. Wahrnehmungsschnelligkeit (P)\n7. Schlussfolgerungsfähigkeit (R)\n\nGegensatz zu Spearman: Thurstone lehnte den g-Faktor ab – Intelligenz ist keine einheitliche Fähigkeit. Carroll (1993) bestätigte später Spearmans g-Faktor empirisch.',
  },
  {
    id: 'dp-31', moduleId: 'diffpsych', category: 'Kreativität & Motive',
    question: 'Thematischer Apperzeptionstest (TAT) – Aufbau und Zweck',
    answer: 'TAT: projektives Verfahren zur Messung impliziter Motive (v. a. Leistungs-, Bindungs-, Machtmotiv)\n\nDurchführung: Testpersonen erzählen Geschichten zu mehrdeutigen Bildern\n→ Inhalte der Geschichten sollen unbewusste Motive enthüllen\n\nVorteile: enthüllt Unbewusstes, kaum verfälschbar\nNachteile: mäßige Reliabilität, große Interpretationsspielräume, zeitaufwändig\n\nAlternative für explizite Motive: Fragebogen wie Personality Research Form (PRF, Jackson 1984)',
  },
  {
    id: 'dp-32', moduleId: 'diffpsych', category: 'Kognitive Theorien',
    question: 'Selbsterfüllende Prophezeiung',
    answer: 'Definition: Vorhersage über zukünftiges Verhalten, die Interaktionen so verändert, dass die Vorhersage eintritt\n\nBeispiele:\n• „Auf der Party werde ich viel Spaß haben" → Verhalten entsprechend angepasst → tatsächlich Spaß\n• „Der guckt mich sowieso nie an" → Rückzug → kein Blickkontakt\n• Lehrererwartung beeinflusst Schülerleistung (Rosenthal-Effekt)\n\nMechanismus: Erwartung verändert das eigene und fremdes Verhalten',
  },
  {
    id: 'dp-33', moduleId: 'diffpsych', category: 'Selbst & Persönlichkeit',
    question: 'Flow – Merkmale nach Csikszentmihalyi/Seligman',
    answer: 'Flow = intensiv positiver Erlebenszustand bei vollständiger Aufgabenvertiefung\n\nMerkmale (Seligman, 2002):\n• Herausfordernde, kompetenzerfordernde Aufgabe\n• Hohe Konzentration\n• Klare Ziele\n• Unmittelbares Feedback\n• Mühelose Involviertheit\n• Gefühl der Kontrolle\n• Verschwinden des Selbstgefühls\n• Zeitgefühl setzt aus\n\nBedingung: Balance zwischen Herausforderung und eigenen Fähigkeiten',
  },
  {
    id: 'dp-34', moduleId: 'diffpsych', category: 'Persönlichkeitstheorien',
    question: 'Freuds psychosexuelle Entwicklungsphasen',
    answer: 'Freud: Persönlichkeitsentwicklung verläuft in Phasen; Störungen in einer Phase prägen die spätere Persönlichkeit\n\n1. Orale Phase (0–1 Jahr): Befriedigung durch Mund\n2. Anale Phase (1–3 Jahre): Kontrolle über Ausscheidung\n3. Phallische Phase (3–6 Jahre): Ödipus-/Elektrakomplex, Entdeckung Geschlechtsunterschiede\n4. Latenzphase (6–12 Jahre): Triebwünsche schlummern\n5. Genitale Phase (ab Pubertät): reife Sexualität\n\nKritik: Empirisch nicht falsifizierbar',
  },
  {
    id: 'dp-35', moduleId: 'diffpsych', category: 'Persönlichkeitstheorien',
    question: 'Maslows Bedürfnishierarchie',
    answer: 'Abraham Maslow (humanistische Theorie): Menschen streben von sich aus nach Selbstverwirklichung\n\nHierarchie (von unten nach oben):\n1. Physiologische Bedürfnisse (Schlaf, Nahrung, Wasser)\n2. Sicherheitsbedürfnisse (Schutz, Stabilität)\n3. Zugehörigkeit und Liebe (Beziehungen, Gemeinschaft)\n4. Achtung/Wertschätzung (Anerkennung, Status)\n5. Selbstverwirklichung (Entfaltung des vollen Potenzials)\n\nErst wenn untere Ebenen befriedigt, wird die nächste relevant',
  },
  {
    id: 'dp-36', moduleId: 'diffpsych', category: 'Persönlichkeitsentwicklung',
    question: 'Sequenz-Studien – warum besser als Querschnitt oder Längsschnitt allein?',
    answer: 'Problem Querschnittstudie: verschiedene Kohorten vermischen echte Alterseffekte mit historischen Unterschieden (Kohorteneffekt)\n\nProblem Längsschnittstudie: Testeffekte, Ausfall von Probanden\n\nSequenz-Studie (Kohortensequenzplan) = Kombination:\n→ Mehrere Kohorten werden jeweils längsschnittlich begleitet\n→ Ermöglicht Vergleich Gleichaltriger aus verschiedenen Kohorten\n→ Trennung von Kohorten-, Alters- und Testeffekten möglich',
  },
  {
    id: 'dp-37', moduleId: 'diffpsych', category: 'Kreativität & Motive',
    question: 'Einstellungen – implizit vs. explizit, Messmethoden',
    answer: 'Einstellung (Asendorpf, 2015): individualtypische Bewertung von Wahrnehmungsobjekten (positiv/negativ)\n\nExplizite Einstellungen: bewusst, per Fragebogen messbar; anfällig für soziale Erwünschtheit\n\nImplizite Einstellungen: unwillkürlich, automatisch\nMessung:\n• Affektives Priming: schnelle Reaktionszeiten auf emotional kongruente Reize\n• Impliziter Assoziationstest (IAT): misst automatische Assoziationen über Reaktionszeiten\n\nImplizite Einstellungen sagen Verhalten oft besser voraus als explizite',
  },
  {
    id: 'dp-38', moduleId: 'diffpsych', category: 'Selbst & Persönlichkeit',
    question: 'Sechs Informationsverarbeitungsprozesse für das Selbstwertgefühl',
    answer: '1. Selbstwahrnehmung/Selbstbild: erwartungsgesteuert, stabilisiert durch selbstkonsistenzerhöhende Verzerrung\n2. Selbsterinnerung: stärkt Identitätsgefühl\n3. Soziales Spiegeln: wir sehen uns, wie wir glauben, dass andere uns sehen\n   → Menschen schätzen die DURCHSCHNITTLICHE Fremdmeinung gut ein, nicht individuelle Unterschiede\n4. Soziales Vergleichen: relativ zur Bezugsgruppe → Big-Fish-Little-Pond-Effekt\n5. Selbstüberschätzung: mäßige Form dient der Selbstwerterhaltung\n6. Selbstdarstellung: Steuerung des Eindrucks nach außen',
  },
  {
    id: 'dp-39', moduleId: 'diffpsych', category: 'Persönlichkeitstheorien',
    question: 'Freuds Abwehrmechanismen – 5 wichtigste',
    answer: '1. Verdrängung: Grundlage ALLER anderen Mechanismen; angsterregende Inhalte werden aus dem Bewusstsein verdrängt\n2. Verleugnung: offensichtliche Realität wird nicht anerkannt (z. B. Raucher verleugnet Krebsrisiko)\n3. Projektion: eigene bedrohliche Impulse werden anderen zugeschrieben\n4. Sublimierung: nicht erfüllte Triebwünsche → gesellschaftlich akzeptierte Handlungen (Kunst, Sport)\n5. Regression: Rückzug auf frühere Entwicklungsphase (z. B. Daumenlutschen vor erstem Schultag)',
  },
  {
    id: 'dp-40', moduleId: 'diffpsych', category: 'Persönlichkeitstheorien',
    question: 'Biopsychologische Theorien – Cloninger: Temperament vs. Charakter',
    answer: 'Biopsychologische Theorien: direkte Zusammenhänge zwischen biologisch verankerten Merkmalen und Persönlichkeitseigenschaften (z. B. neuronale Ansprechbarkeit → Extraversion)\n\nRobert Cloninger:\n• Temperament: weitgehend angeboren, biologisch verankert, frühzeitig beobachtbar\n• Charakter: entwickelt sich durch soziale Lernprozesse, durch Umwelt formbar\n→ Beide beeinflussen sich gegenseitig\n\nMenschenbild: Persönlichkeit hat biologische Basis, ist aber nicht vollständig angeboren',
  },
  {
    id: 'dp-41', moduleId: 'diffpsych', category: 'Kreativität & Motive',
    question: 'Kreativität messen: Consensual Assessment Technique (CAT)',
    answer: 'CAT (Amabile): Expertengremien bewerten kreative Produkte unabhängig voneinander\n→ Zeigt empirisch hohe Übereinstimmung zwischen unabhängigen Juroren\n\nBewertungsdimensionen:\n• Neuartigkeit\n• Nützlichkeit\n• Originalität\n• Umsetzbarkeit\n+ Fluency (Gesamtzahl der Ideen)\n\nBeispielaufgabe: Möglichst viele Verwendungsmöglichkeiten für einen Teelöffel sammeln, bewertet von mind. 2 unabhängigen Ratern\n\nAmabile (1983): Sorgenfreie Umgebung ohne Bewertungsdruck fördert Kreativität',
  },
  {
    id: 'dp-42', moduleId: 'diffpsych', category: 'Intelligenz',
    question: 'HAWIE/WAIS – Beispielitems und Wechslers Intelligenz-Definition',
    answer: 'Wechsler: Intelligenz = „zweckvoll handeln, vernünftig denken, sich mit der Umgebung wirkungsvoll auseinandersetzen"\n\nHAWIE/WAIS-Untertests:\n• Allgemeines Wissen: „Was ist der Koran?"\n• Wortschatztest: Bedeutung von „Parlament" erklären\n• Rechnerisches Denken: Preisberechnung\n• Gemeinsamkeiten finden: „Was haben Auge und Ohr gemeinsam?"\n\nKulturabhängig! Die Frage nach dem Koran wurde aus neueren Versionen gestrichen, da das Wissen heute zu verbreitet ist.',
  },
  {
    id: 'dp-43', moduleId: 'diffpsych', category: 'Grundbegriffe',
    question: 'Historische Wegbereiter: Wundt, Cattell, Münsterberg, Binet',
    answer: 'Wilhelm Wundt (1832–1920): 1879 Gründung des ersten Instituts für experimentelle Psychologie (Leipzig)\n\nJames McKeen Cattell (1860–1944): Wundt-Schüler; Reaktionszeitmessungen; prägte 1890 den Begriff „mental tests"\n\nHugo Münsterberg (1863–1916): ergänzte (1891) „mental tests" um verbale Assoziationen, Rechnen, Lesen, Gedächtnistests\n\nAlfred Binet (1857–1911): kritisierte zu enge sensorische Tests; entwickelte ersten Intelligenztest für Schulkinder (mit Simon, 1905)',
  },
  {
    id: 'dp-44', moduleId: 'diffpsych', category: 'Grundbegriffe',
    question: 'Sir Francis Galton – Beiträge zur Differentiellen Psychologie',
    answer: 'Francis Galton (Cousin von Charles Darwin):\n• Begründer der Intelligenzforschung\n• Entwickelte das Galton-Brett zur Visualisierung der Normalverteilung (Kugeln fallen durch ein Stiftraster und verteilen sich glockenförmig)\n• Erste Tests von Sinneswahrnehmung und Gedächtnis (1884)\n• Systematische Erfassung individueller Unterschiede\n• Beeinflusste stark die spätere Test- und Differentialpsychologie',
  },
  {
    id: 'dp-45', moduleId: 'diffpsych', category: 'Persönlichkeitsentwicklung',
    question: 'Vier Ebenen des Geschlechts',
    answer: '1. Genetisches Geschlecht: Chromosomenkombination (XX / XY)\n2. Hormonelles Geschlecht: Hormonprofil (Testosteron, Östrogen)\n3. Neuronales Geschlecht: Gehirnstruktur und -funktion\n→ Diese drei zusammen = biologisches Geschlecht (sex)\n\n4. Psychologisches Geschlecht: innere Geschlechtsidentität (gender)\n\nGeschlechtsstereotype (gender role) = kulturell verankert\n→ Stereotype sind selten völlig falsch, aber oft übertrieben\n→ Kinder: rigides Stereotyp in Vorschulzeit, flexibler in Grundschulzeit',
  },
  {
    id: 'dp-46', moduleId: 'diffpsych', category: 'Persönlichkeitsentwicklung',
    question: 'IQ-Stabilität im Lebensverlauf',
    answer: 'IQ ist die stabilste Persönlichkeitseigenschaft:\n• Stabilisiert sich bis zum 8. Lebensjahr\n• Korrelation IQ mit 6 Jahren und 40 Jahren: r = 0,6–0,8\n\nWarum stabilisiert sich IQ früher als andere Eigenschaften?\n→ Starke genetische Basis; kristalline Intelligenz wächst weiter, Entwicklungsschere schließt sich früh\n\nVgl. Big Five: Stabilisieren sich langsamer, Veränderungen noch im jungen Erwachsenenalter möglich\nVgl. Selbstwertgefühl: am wenigsten stabil, stark situationsabhängig',
  },
  {
    id: 'dp-47', moduleId: 'diffpsych', category: 'Kreativität & Motive',
    question: 'Impliziter Assoziationstest (IAT)',
    answer: 'IAT (Impliziter Assoziationstest): misst automatische, unbewusste Einstellungen über Reaktionszeiten\n\nPrinzip: Wenn zwei Konzepte eng assoziiert sind, werden sie schneller zusammen kategorisiert\nBeispiel: „Blume + Gut" vs. „Insekt + Gut" – Reaktionszeiten zeigen implizite Bewertung\n\nVorteil: Soziale Erwünschtheit kaum möglich (automatisch)\nNachteil: Reliabilität und Validität umstritten\n\nAuch: Affektives Priming als Alternative – positiver Priming-Reiz erleichtert positive Zielreiz-Reaktion',
  },
  {
    id: 'dp-48', moduleId: 'diffpsych', category: 'Intelligenz',
    question: 'Emotionale Intelligenz – Kritik und praktische Einordnung',
    answer: 'Salovey & Mayer (1990): wissenschaftliche Grundlage (4 Komponenten)\nGoleman (1995): Popularisierung – Behauptung, EI erkläre 80 % des Erfolgsunterschieds\n→ NICHT belegt!\n\nKritik Gardner (1999): Intelligenzbegriff wird zu weit gefasst/verwässert\n\nLängsschnittstudie Izard et al. (2001): gutes Emotionserkennen mit 5 Jahren sagte höhere soziale Kompetenz in der 3. Klasse vorher\n\nPraktisch: Hirnschädigungen können EI reduzieren, während allgemeine Intelligenz intakt bleibt (Damasio, 1994) → EI ist teilweise unabhängig von IQ',
  },
  {
    id: 'dp-49', moduleId: 'diffpsych', category: 'Messung',
    question: 'Satisficing-Verhalten und Testlänge',
    answer: 'Satisficing-Verhalten: Testpersonen hören nach ~20 Min. bei langen Fragebögen auf, wirklich nachzudenken → blockweises Ankreuzen ohne echte Überlegung\n\nFolgen:\n• Beeinträchtigt Reliabilität\n→ Beeinträchtigt automatisch auch Validität\n\nBedeutet: Testlänge ist ein Gütekriterium!\n→ Ökonomie (Nebengütekriterium): möglichst wenig Ressourcenaufwand\n→ Zumutbarkeit: Testperson nicht übermäßig belasten\n\nPraxisbeispiel: 60-minütiger Fragebogen → Ermüdung → Messfehler',
  },
  {
    id: 'dp-50', moduleId: 'diffpsych', category: 'Grundbegriffe',
    question: 'Abgrenzung: Differentielle vs. Allgemeine vs. Klinische Psychologie',
    answer: 'Differentielle Psychologie: interindividuelle Unterschiede zwischen Menschen → Was unterscheidet Personen voneinander?\n\nAllgemeine Psychologie: Gesetzmäßigkeiten des DURCHSCHNITTLICHEN Individuums → Was gilt für alle Menschen gleich?\n\nKlinische Psychologie: pathologische Besonderheiten (z. B. Depression, Angststörungen)\n\nPersonal-/Persönlichkeitspsychologie: intrapersonale Einheit einer Person\n→ Heute zusammen mit Differentieller Psychologie als eine Disziplin (DPP) betrachtet\n\nDifferentielle + Allgemeine Psychologie ergänzen sich: eine erklärt Unterschiede, die andere Gemeinsamkeiten',
  },
  // Management Basics
  {
    id: 'mgmt-1', moduleId: 'mgmt', category: 'Grundlagen',
    question: 'Die vier Phasen des Unternehmenslebenszyklus',
    answer: 'Gründung → Wachstum → Reife → Sättigung\n\nMarkante Punkte:\n• Break-Even-Punkt: Kosten = Erlöse (kein Gewinn, kein Verlust)\n• Gewinnmaximum: liegt vor dem Umsatzmaximum\n• Umsatzmaximum: höchste Absatzmenge\n\nJede Phase hat typische Managementthemen:\n• Gründung → Business-Plan\n• Wachstum → PE/VC\n• Reife → Risikomanagement\n• Sättigung → Insolvenz/Turnaround',
  },
  {
    id: 'mgmt-2', moduleId: 'mgmt', category: 'Grundlagen',
    question: 'Break-Even-Punkt: Definition und Berechnung',
    answer: 'Break-Even-Punkt = Gewinnschwelle: Erlöse = Kosten (weder Gewinn noch Verlust)\n\nFormeln:\n• Umsatz = Menge × Preis\n• Gesamtkosten = Fixkosten + (Menge × variable Stückkosten)\n• Break-Even-Menge = Fixkosten / (Preis − variable Stückkosten)\n\nBedeutung: Zeigt, wie viel mindestens verkauft werden muss, um kostendeckend zu arbeiten',
  },
  {
    id: 'mgmt-3', moduleId: 'mgmt', category: 'Grundlagen',
    question: 'Fix- vs. variable Kosten',
    answer: 'Fixkosten:\n• Unabhängig vom Auslastungsgrad\n• Beispiele: Miete, Gehälter, Abschreibungen\n• Bleiben konstant, auch wenn weniger produziert wird\n\nVariable Kosten:\n• Abhängig vom Auslastungsgrad\n• Beispiele: Materialkosten, Energiekosten\n• Steigen mit der Produktionsmenge\n\nGesamtkosten = Fixkosten + (Menge × variable Stückkosten)\n\nFixkostendegression: Fixkosten je Stück sinken bei höherer Auslastung',
  },
  {
    id: 'mgmt-4', moduleId: 'mgmt', category: 'Gründungsphase',
    question: 'Die drei Gruppen von Kreativitätstechniken',
    answer: '1. Assoziativ/Intuitiv-kreativ:\n→ Brainstorming (klassisch, anonym, didaktisch)\n→ Brainwriting: Methode 635, Kartenumlauftechnik\n\n2. Systematisch-analytisch:\n→ Morphologischer Kasten, Attribute Listing\n→ Funktionsanalyse, Progressive Abstraktion\n\n3. Konfrontationsorientiert (tiefgreifende Innovationen):\n→ Synektik, BBB-Methode, Reizwort-Analyse\n→ TILMAG-Methode, Force-Fit-Spiel\n\nMerkhilfe: A-S-K (Assoziativ, Systematisch, Konfrontativ)',
  },
  {
    id: 'mgmt-5', moduleId: 'mgmt', category: 'Gründungsphase',
    question: 'Scoring-Verfahren zur Ideenbewertung',
    answer: 'Ablauf:\n1. Erfolgskriterien festlegen\n2. Kriterien gewichten: Summe der Gewichte = 1,0\n3. Bewertung auf Skala 1–10 (1–4 schlecht, 4,1–7 befriedigend, 7,1–10 gut)\n4. Kriterienwert = Gewicht × Bewertung\n5. Gesamtpunktzahl = Summe aller Kriterienwerte\n\nBeispielgewichte: Kundennutzen 0,35 | Technologie 0,20 | USP 0,15\n\nKritik:\n• Kriterien oft nicht unabhängig\n• Skalenbewertung problematisch\n• Experten selten wirklich risikoneutral\n→ Ergänzung durch qualitative Analyse empfohlen',
  },
  {
    id: 'mgmt-6', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Die 9 Elemente des Business-Plans',
    answer: '1. Management Summary (max. 2 Seiten)\n2. Unternehmen (Profil, Rechtsform, Ziele)\n3. Produkte/Herstellung (USP, Deckungsbeitrag)\n4. Markt & Wettbewerb (Porter-Strategien)\n5. Marketing & Vertrieb (4 Ps)\n6. Management & Organisation (Organigramm)\n7. Finanz-/Dreijahresplanung (Liquidität, GuV, Bilanz)\n8. Chancen & Risiken (Szenarioanalyse)\n9. Finanzbedarf\n\nZielgruppen: Gründer selbst (Analyse) + potenzielle Investoren (Beteiligungsangebot)',
  },
  {
    id: 'mgmt-7', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Porters generische Wettbewerbsstrategien',
    answer: '1. Kostenführerschaft:\n→ Preisgünstigster Wettbewerber\n→ Durch Lernkurveneffekte, Fixkostendegression, Standardisierung\n\n2. Differenzierung:\n→ Produkt hebt sich ab (Qualität, Service, Marke)\n→ Monopolistischer Preisbereich; Preiselastizität sinkt\n\n3. Fokussierung/Nischenstrategie:\n→ Eng abgegrenztes Kundensegment\n→ Beispiele: Ferrari, Patek Philippe, Spezialausrüstung\n\nAbhängig von: Marktvolumen (breit vs. eng) + Wettbewerbsvorteil (Kosten vs. Differenzierung)',
  },
  {
    id: 'mgmt-8', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Der Marketing-Mix: Die 4 Ps',
    answer: 'Product (Produktpolitik):\n→ Eigenschaften, Marke, USP, Schutzrechte/Patente, Service\n\nPrice (Preispolitik) – 4 Orientierungen:\n→ Wettbewerbsorientierung: relativ zum Markt\n→ Nachfrageorientierung: Zahlungsbereitschaft\n→ Nutzenoptimierung: bei Innovationen\n→ Kostenorientierung: Kosten + Aufschlag\n\nPlace (Distribution):\n→ Direkt: eigene Organisation, Internet\n→ Indirekt: Handel, Handelsvertreter\n\nPromotion (Kommunikation):\n→ Werbung, Verkaufsförderung, PR',
  },
  {
    id: 'mgmt-9', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Deckungsbeitragsrechnung und Preisuntergrenzen',
    answer: 'Deckungsbeitrag 1 = Umsatzerlöse − variable Kosten\nBetriebsergebnis = DB1 − Fixkosten\n\nPreisuntergrenzen:\n• Langfristig: Betriebsergebnis = 0 (alle Kosten gedeckt)\n• Kurzfristig: DB1 = 0 (nur variable Kosten gedeckt)\n  → Relevant bei freien Kapazitäten (z. B. Sitzplätze im Flugzeug)\n\nUSP (Unique Selling Proposition):\n= herausragende Produkteigenschaft mit Wettbewerbsvorteil\n(z. B. Preis, Design, technologischer Vorsprung)',
  },
  {
    id: 'mgmt-10', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Rechtsformen im Überblick: Von GbR bis AG',
    answer: 'Zunehmende Komplexität:\nEinzelunternehmen → GbR → OHG → KG → GmbH → AG\n\nKernunterschiede:\n• Haftung: Personengesellschaften = unbeschränkt (mit Privatvermögen)\n            Kapitalgesellschaften = begrenzt auf Gesellschaftsvermögen\n• Mindestkapital: GmbH 25.000 € / AG 50.000 €\n• Gründungsform: GmbH/AG = notariell beurkundet\n\nMoMiG (seit 2008):\n• GmbH-Gründung ab 1 € = UG (haftungsbeschränkt)\n• 25 % des Gewinns ansparen bis 25.000 € erreicht',
  },
  {
    id: 'mgmt-11', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Liquiditätskennzahlen (Grad 1–3)',
    answer: 'Liquidität 1. Grades = Liquide Mittel / kfr. Fremdkapital × 100\n\nLiquidität 2. Grades = (Liquide Mittel + kfr. Forderungen) / kfr. FK × 100\n→ Zielwert: ca. 100 %\n\nLiquidität 3. Grades = (Liquide Mittel + kfr. Forderungen + Vorräte) / kfr. FK × 100\n→ Zielwert: ca. 200 %\n\nMerke:\n• Zu wenig Liquidität → Insolvenzrisiko\n• Zu viel Liquidität → beeinträchtigt Rentabilität\n\nGoldene Bilanzregel: Anlagevermögen langfristig, Umlaufvermögen kurzfristig finanzieren',
  },
  {
    id: 'mgmt-12', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Cashflow: Berechnung und Bedeutung',
    answer: 'Cashflow = Maß für Innenfinanzierungskraft und Ertragskraft\n→ Je höher, desto besser die Liquiditätslage\n\nIndirekte Berechnung:\nJahresüberschuss\n+ Aufwendungen ohne Auszahlung (z. B. Abschreibungen)\n− Erträge ohne Einzahlung (z. B. Zuschreibungen)\n= Cashflow\n\nVereinfacht: Jahresüberschuss ± Abschreibungen ± Veränderung Rückstellungen\n\nRückstellungen (§ 249 HGB): Schulden mit ungewissem Eintrittszeitpunkt/-höhe\nRücklagen: Teil des EK für Selbstfinanzierung (§ 58 AktG)',
  },
  {
    id: 'mgmt-13', moduleId: 'mgmt', category: 'Finanzierung',
    question: 'Eigenkapital vs. Fremdkapital: Hauptunterschiede',
    answer: 'Eigenkapital:\n• Beteiligungsverhältnis\n• Eigentümer haftet (ggf. privat)\n• Gewinn-/Verlustbeteiligung\n• Mitbestimmungsrechte vorhanden\n• Zeitlich unbegrenzt\n• Zinsen steuerlich NICHT absetzbar\n\nFremdkapital:\n• Schuldverhältnis\n• Gläubiger haftet NICHT\n• Fester Zinsanspruch\n• Keine Mitbestimmung\n• Zeitlich begrenzt\n• Zinsen steuerlich absetzbar\n\nInnen- vs. Außenfinanzierung:\n• Innen: Selbstfinanzierung, Kapitalfreisetzung, Rückstellungen\n• Außen: Beteiligungsfinanzierung, Kreditfinanzierung',
  },
  {
    id: 'mgmt-14', moduleId: 'mgmt', category: 'Finanzierung',
    question: 'Factoring: Ablauf und drei Funktionen',
    answer: 'Ablauf:\n1. Unternehmen liefert → Forderung entsteht\n2. Forderung wird an Factoring-Institut verkauft\n3. Sofortige Liquidität (abzgl. Sicherheitsabschlag 5–20 %)\n4. Institut zieht Forderung beim Schuldner ein\n\nDrei Funktionen:\n1. Delkrederefunktion: Ausfallrisiko übernimmt das Institut\n2. Dienstleistungsfunktion: Debitorenmanagement\n3. Finanzierungsfunktion: sofortige Liquidität\n\nMerkmale:\n• Umsatzkongruente Finanzierung\n• Institut prüft Bonität der Schuldner vorab\n• Oft nur Forderungen bis bestimmter Betragsgrenze',
  },
  {
    id: 'mgmt-15', moduleId: 'mgmt', category: 'Finanzierung',
    question: 'Kontokorrentkredit, Avalkredit und Leasing',
    answer: 'Kontokorrentkredit:\n• Kurzfristiger Kredit über laufendes Geschäftskonto\n• Flexible Nutzung bis zur Kreditlinie\n• Sichert Zahlungsfähigkeit; ermöglicht Skonto-Nutzung\n\nAvalkredit:\n• Bank stellt Kreditwürdigkeit (Bürgschaft/Garantie) zur Verfügung\n• KEIN Bargeld = Kreditleihe\n• Bank haftet nur bei Ausfall des Avalnehmer\n• Für Bank: Eventualverbindlichkeit\n\nLeasing (§ 535 BGB):\n• Rechtlich ein Mietvertrag\n• Direkt (Hersteller, z. B. BMW) oder indirekt (Leasinggesellschaft)\n• Sonderform: Sale-and-lease-back\n• Ziel: Erschließung von Kunden ohne Kaufkraft',
  },
  {
    id: 'mgmt-16', moduleId: 'mgmt', category: 'VWL',
    question: 'Maslow-Bedürfnispyramide',
    answer: 'Fünf Ebenen (aufeinander aufbauend):\n1. Grundbedürfnisse: Essen, Schlafen, Wärme\n2. Sicherheitsbedürfnisse: Schutz, Stabilität\n3. Soziale Bedürfnisse: Zugehörigkeit, Liebe\n4. Wertschätzungsbedürfnisse: Status, Anerkennung\n5. Entwicklungsbedürfnisse: Selbstverwirklichung\n\nRegel: Untere Ebene muss erfüllt sein, bevor höhere entsteht\n\nPrimärbedürfnisse = Grundbedürfnisse (angeboren)\nSekundärbedürfnisse = Kultur-/Luxusbedürfnisse (erworben)',
  },
  {
    id: 'mgmt-17', moduleId: 'mgmt', category: 'VWL',
    question: 'Preiselastizität und Kreuzpreiselastizität',
    answer: 'Preiselastizität der Nachfrage:\n= % Mengenänderung / % Preisänderung (Betrag)\n\n• |ε| > 1: elastisch (Mengenwirkung überwiegt)\n• |ε| < 1: unelastisch (z. B. Grundnahrungsmittel)\n• |ε| = 1: einheitselastisch\n\nKreuzpreiselastizität (Gut i auf Preis von Gut j):\n• ε < 0: komplementäre Güter (z. B. Auto & Benzin)\n• ε > 0: substitutive Güter (z. B. Butter & Margarine)\n• ε = 0: unverbundene Güter\n\nÖkonomisches Prinzip:\n• Maximalprinzip: fixer Einsatz → max. Output\n• Minimalprinzip: fixes Ziel → min. Einsatz',
  },
  {
    id: 'mgmt-18', moduleId: 'mgmt', category: 'VWL',
    question: 'Marktgleichgewicht und Opportunitätskosten',
    answer: 'Marktgleichgewicht:\n• Angebot = Nachfrage → Gleichgewichtspreis und -menge\n• Preis fungiert als Knappheitsindikator\n• Preisänderung → Bewegung ENTLANG der Kurve\n• Lage-Parameter-Änderung → VERSCHIEBUNG der Kurve\n\nAngebotsüberhang: Preis > GGW → Druck nach unten\nNachfrageüberhang: Preis < GGW → Druck nach oben\n\nOpportunitätskosten:\n= entgangener Nutzen der besten nicht gewählten Alternative\n"There is no such thing as a free lunch" (Milton Friedman)\n\nVollkommener Markt: homogenes Gut, vollständige Transparenz, keine Präferenzen',
  },
  {
    id: 'mgmt-19', moduleId: 'mgmt', category: 'Wachstum',
    question: 'Private Equity vs. Venture Capital vs. Hedgefonds',
    answer: 'Private Equity (PE):\n• Zeitlich begrenzte EK-Beteiligung an NICHT börsennotierten Unternehmen\n• Für Wachstum oder spezielle Finanzierungsanlässe\n\nVenture Capital (VC):\n• Sonderform von PE\n• Für sehr junge, wachstumsstarke Unternehmen (z. B. Hightech)\n• Oft verbunden mit aktiver unternehmerischer Betreuung\n• Schwerpunkt: Früh-/Gründungsphase\n\nHedgefonds:\n• Sehr freie Anlagestrategie, kaum reguliert\n• Vor der Finanzkrise: stark gewachsen wegen hoher Renditechancen\n\nPE/VC-Ablauf: Idee → Business-Plan → Auswahl → LoI → Due Diligence → Abschluss → Betreuung → Exit',
  },
  {
    id: 'mgmt-20', moduleId: 'mgmt', category: 'Wachstum',
    question: 'Exit-Strategien für PE/VC-Investoren',
    answer: '1. IPO (Börsengang) = "Königsweg":\n→ Erstmaliger Börsengang; Anteile an der Börse verkaufen\n→ Motive: Wachstumsfinanzierung, Bekanntheit, Exit für Gründer\n\n2. Trade Sale:\n→ Verkauf an industriellen/strategischen Käufer\n\n3. Buy Back:\n→ MBO (Management Buy Out): bestehendes Management kauft\n→ MBI (Management Buy In): externes Management übernimmt\n\n4. Secondary Sale:\n→ Verkauf an anderen Finanzinvestor (z. B. anderen PE-Fonds)\n\nSchlimmster Fall: Abschreibung (Totalverlust)\nTypische Haltedauer: 3–10 Jahre',
  },
  {
    id: 'mgmt-21', moduleId: 'mgmt', category: 'Wachstum',
    question: 'Mezzanine-Kapital: Die vier Formen',
    answer: 'Mezzanine = Mischform zwischen Eigen- und Fremdkapital\n\n1. Stille Beteiligung (§§ 230 ff. HGB):\n→ Reine Innengesellschaft; außen nicht sichtbar\n→ Gewinn- und meist Verlustbeteiligung\n\n2. Genussrechtskapital:\n→ Schuldrechtlich, begrenzte Laufzeit\n→ Gewinnbeteiligung mit Verlustbeteiligung\n\n3. Wandel-/Optionsanleihe:\n→ Feste Verzinsung + Wandlungsrecht in Aktien\n→ Bei Wandelanleihe: Anleihe und Wandlungsrecht untrennbar\n\n4. Nachrangdarlehen:\n→ Im Insolvenzfall hinter erstrangigem FK\n→ Ohne gesonderte Sicherheiten\n\nTendenz: Stille Beteiligung/Genussrechte → EK-nah\nWandelanleihen/Nachrangdarlehen → FK-nah',
  },
  {
    id: 'mgmt-22', moduleId: 'mgmt', category: 'Risikomanagement',
    question: 'Der 6-stufige Risikomanagementprozess',
    answer: '1. Risikoidentifikation:\n→ Beobachtungsbereich, Strategie- und Leistungsrisiken\n\n2. Risikobewertung:\n→ Schadenshöhe × Eintrittswahrscheinlichkeit → Risikoportfolio\n\n3. Risikoaggregation:\n→ Verteilung und Korrelation; Gesamtrisikoposition\n\n4. Risikobewältigung:\n→ Präventive und reaktive Maßnahmen\n\n5. Risikoüberwachung:\n→ Verantwortlichkeiten, Indikatoren, Limits\n\n6. Externes Berichtswesen:\n→ Berichterstattung an Stakeholder\n\nSystematisches Risiko: Marktrisiko, durch Diversifikation NICHT reduzierbar\nUnsystematisches Risiko: firmenspezifisch, sinkt mit Diversifikation',
  },
  {
    id: 'mgmt-23', moduleId: 'mgmt', category: 'Risikomanagement',
    question: 'Vier risikopolitische Gegenmaßnahmen',
    answer: 'Ziel: Steigerung des Unternehmenswertes\n\n1. Risiken VERMEIDEN:\n→ Ausstieg aus riskanten Geschäftsfeldern\n→ Verzicht auf bestimmte Technologien\n\n2. Risiken VERMINDERN:\n→ Variable statt fixe Kosten\n→ Organisatorische Regelungen, Redundanz\n\n3. Risiken ÜBERWÄLZEN:\n→ Versicherungen optimieren\n→ Risikotransfer über Kapitalmärkte (z. B. Wetterderivate)\n\n4. Risiken SELBST TRAGEN:\n→ Eigenkapitalbedarf ermitteln\n→ Eigenkapitalallokation und Kapitalkosten optimieren',
  },
  {
    id: 'mgmt-24', moduleId: 'mgmt', category: 'Insolvenz',
    question: 'Insolvenzgründe und Antragspflicht (InsO)',
    answer: 'Drei Insolvenzgründe:\n\n1. Drohende Zahlungsunfähigkeit (§ 18 InsO):\n→ Nur Antragsrecht, KEINE Pflicht\n\n2. Zahlungsunfähigkeit (§ 17 InsO):\n→ ANTRAGSPFLICHT: Frist 3 Wochen\n\n3. Überschuldung (§ 19 InsO):\n→ ANTRAGSPFLICHT: Frist 6 Wochen\n\nAntragspflicht gilt für: GmbH, AG und haftungsbeschränkte Personengesellschaften\n\nStrafbarkeit (§ 15a Abs. 4 InsO): Nicht, nicht richtig oder nicht rechtzeitig gestellter Antrag ist strafbar!\n\nReform 2020: Privatinsolvenz auf 3 Jahre verkürzt (rückwirkend ab 01.10.2020)',
  },
  {
    id: 'mgmt-25', moduleId: 'mgmt', category: 'Insolvenz',
    question: 'Turnaround-Management: Krisenarten und Prozess',
    answer: 'Krisenarten (zunehmender Handlungsdruck):\nStrategische Krise → Ergebniskrise → Liquiditätskrise → Insolvenz\n\nWichtig: Ursachen liegen zeitlich VOR den sichtbaren Symptomen!\n\nTurnaround in 2 Phasen:\n\nPhase 1 – Konzeptphase (2–6 Wochen):\n• Bestandsaufnahme (Ist-Situation, Markt, Wettbewerb)\n• Grobkonzept (operativ, strategisch, finanziell)\n• Sofortmaßnahmen: Kostensenkung, Liquiditätssicherung\n\nPhase 2 – Umsetzungsphase (6–24 Monate):\n• Detailkonzept und Maßnahmenpläne\n• Controlling durch Lenkungsausschüsse/Task-Forces\n\nSanierung = kurzfristige Sofortmaßnahmen\nRestrukturierung = kontinuierliche Neuausrichtung',
  },
  {
    id: 'mgmt-26', moduleId: 'mgmt', category: 'Gründungsphase',
    question: 'Experteninterviews als Methode der Ideenfindung – 3 Phasen',
    answer: '1. Vorbereitungsphase:\n→ Anbahnung des Interviews\n→ Fachliche Vorbereitung\n→ Erarbeitung eines Interviewleitfadens\n\n2. Durchführungsphase:\n→ Eröffnung (Ziele/Nutzen erklären)\n→ Informationsgewinnung im Dialog\n→ Abschluss mit Zusammenfassung und offenen Punkten\n\n3. Nachbereitungsphase:\n→ Auswertung und Bewertung der Informationen\n→ Dokumentation\n→ Formaler Abschluss\n\nPraxisbeispiel: Gebrüder Samwer führten 1998 rund 100 Experteninterviews mit Internet-Startup-Gründern → Ergebnis: eBay als Vorbild → Gründung Alando.de (1999), verkauft für 43 Mio. USD',
  },
  {
    id: 'mgmt-27', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Die vier Rentabilitätskennzahlen',
    answer: '1. Eigenkapitalrentabilität:\n= Jahresergebnis / (Eigenkapital + stille Reserven) × 100\n→ Zeigt "Rendite" des Eigenkapitals der Anteilseigner\n\n2. Gesamtkapitalrentabilität:\n= (Jahresergebnis + Zinsaufwand) / (Gesamtkapital + stille Reserven) × 100\n→ Effizienz des gesamten verfügbaren Kapitals\n→ Fremdkapitalzinsen werden wieder addiert (sie fließen dem FK-Geber zu)\n\n3. Betriebsrentabilität:\n= Betriebserfolg / betriebsnotwendiges Vermögen × 100\n→ Vermögen = immat. AV + Sachanlagen + Vorräte − Lieferverbindlichkeiten\n\n4. Umsatzrentabilität:\nVariante 1 = Betriebserfolg / Umsatzerlöse × 100\nVariante 2 = Jahresergebnis / Umsatzerlöse × 100\n→ Kein Bewertungsproblem durch stille Reserven',
  },
  {
    id: 'mgmt-28', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Aufbau und Funktionen der Bilanz',
    answer: 'Aufbau (Stichtagsbetrachtung):\n• Aktivseite: Vermögen (Anlagevermögen + Umlaufvermögen)\n• Passivseite: Kapital (Eigenkapital + Fremdkapital)\n→ Bilanzsumme Aktiva = Bilanzsumme Passiva\n\nWortherkunft: lateinisch "bilanx" = zwei Waagschalen\n\nFünf Funktionen der Bilanz:\n1. Informationsfunktion: Grundlage für Kontrolle, Planung, Bilanzanalyse\n2. Rechenschaftsfunktion: gegenüber Eigentümern, Gläubigern, Behörden\n3. Dokumentationsfunktion: Nachweis von Wertbewegungen\n4. Sicherungsfunktion: Nachweis der Kapitalerhaltung gegenüber Gläubigern\n5. Ermittlungsfunktion: Grundlage für Besteuerung, Fusionen, Insolvenzen\n\nZusammenhang: GuV-Posten "Jahresüberschuss/-fehlbetrag" verbindet Bilanz und GuV',
  },
  {
    id: 'mgmt-29', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'GuV: Gesamtkosten- vs. Umsatzkostenverfahren',
    answer: 'Gewinn- und Verlustrechnung (GuV):\n• Zeitraumbetrachtung (Gegensatz zur Bilanz als Stichtagsbetrachtung)\n• Gegenüberstellung von Aufwendungen und Erträgen eines Zeitraums\n• Zusammen mit Bilanz = Jahresabschluss (§ 242 Abs. 3 HGB)\n\nZwei zulässige Verfahren:\n\n1. Gesamtkostenverfahren (§ 275 Abs. 2 HGB):\n→ Alle Kosten nach Kostenarten gegliedert\n→ Stellt Gesamtproduktion dem Gesamtaufwand gegenüber\n\n2. Umsatzkostenverfahren (§ 275 Abs. 3 HGB):\n→ Kosten nach Kostenstellen/Funktionsbereichen\n→ Stellt nur dem Umsatz zurechenbare Kosten gegenüber\n\nBedeutung für Investoren: Zeigt zu erwartende Ergebnisse\nKorrespondiert mit dem Eigenkapitalkonto der Bilanz',
  },
  {
    id: 'mgmt-30', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Rückstellungen vs. Rücklagen',
    answer: 'Rückstellungen (§ 249 HGB):\n• Schulden gegenüber Dritten\n• Eintritt, Fälligkeit oder Höhe am Abschlussstichtag UNSICHER\n• Beispiele: Pensionsrückstellungen, Prozessrückstellungen, Gewährleistungen\n• Auflösung nur, wenn Bildungsgrund entfallen ist\n• Zählen zum FREMDKAPITAL der Passivseite\n\nRücklagen (§ 58 AktG):\n• Teil des EIGENKAPITALS von Kapitalgesellschaften\n• Dienen der Selbstfinanzierung\n• Verwendung: Verlustdeckung oder künftige Investitionen\n• Entstehen durch einbehaltene Gewinne\n\nMerkhilfe:\nRückSTELLUNGEN → unSICHEREr Aufwand → Fremdkapital\nRückLAGEN → EIGENkapital → Selbstfinanzierung',
  },
  {
    id: 'mgmt-31', moduleId: 'mgmt', category: 'Finanzierung',
    question: 'Der Kreditfinanzierungsprozess (5 Schritte)',
    answer: '1. Kreditantrag:\n→ Schriftlicher Antrag des Unternehmens\n\n2. Kreditwürdigkeitsprüfung:\n→ Beurteilung des Kreditrisikos durch das Institut\n→ Analyse von Bonität, Sicherheiten, Geschäftsplan\n\n3. Kreditzusage:\n→ Schriftliche Bestätigung der Bank\n\n4. Kreditauszahlung:\n→ Überweisung des Kreditbetrags\n\n5. Kreditkontrolle:\n→ Laufende Überwachung durch das Institut\n→ Prüfung der Rückzahlungen, Zinszahlungen\n\nZusammensetzung des Kreditzinssatzes:\nInflationsprämie + Laufzeitrisikoprämie + Standardrisikokosten + Eigenkapitalkosten + Liquiditätsrisikoprämie + Bearbeitungskosten + Gewinnmarge der Bank',
  },
  {
    id: 'mgmt-32', moduleId: 'mgmt', category: 'Finanzierung',
    question: 'Lieferanten- vs. Kundenkredit',
    answer: 'Lieferantenkredit (häufigste Form):\n• Ware wird geliefert, Zahlung später (Kauf auf Ziel)\n• Zahlungsziel in Deutschland/EU: ca. 30 Tage\n• Skonto: schnellere Zahlung (10–14 Tage) wird belohnt\n• Echte Kosten = entgangenes Skonto (oft sehr teuer!)\n• Beispiel: 2 % Skonto bei Zahlung in 10 statt 30 Tagen = sehr hohe Jahresverzinsung\n\nKundenkredit (seltenere Form):\n• Zahlung VOR Lieferung (Anzahlung, Vorkasse, Teilzahlung)\n• Üblich bei: Anlagenbau, Flugzeugbau, Schiffbau\n• Auch bei: schlechter Bonität des Kunden\n\nBarverkauf = Zahlung bei Lieferung (kein Kredit)\n\nWichtig: Der Lieferantenkredit ist günstiger als er scheint, ABER entgangenes Skonto macht ihn oft teurer als Bankkredit!',
  },
  {
    id: 'mgmt-33', moduleId: 'mgmt', category: 'Finanzierung',
    question: 'Finanzwirtschaftliches Entscheidungsdreieck',
    answer: 'Drei (teils gegenläufige) Ziele bei jeder Finanzierungsentscheidung:\n\n1. Rentabilität:\n→ Möglichst hohe Rendite auf das eingesetzte Kapital\n\n2. Liquidität:\n→ Zahlungsfähigkeit zu jedem Zeitpunkt sichern\n\n3. Sicherheit (+ Unabhängigkeit):\n→ Schutz vor Kapitalverlust und Abhängigkeit von Gläubigern\n\nSpannungsfeld:\n• Hohe Rentabilität oft mit hohem Risiko verbunden\n• Hohe Liquidität beeinträchtigt Rentabilität\n• Sicherheit kann Rendite reduzieren\n\nZiel des Finanzmanagements: optimale Balance finden\n\nZiele der Kapitalgeber:\n• EK-Geber: Wertsteigerung + Kontrolle\n• FK-Geber: Verzinsung + Rückzahlung',
  },
  {
    id: 'mgmt-34', moduleId: 'mgmt', category: 'Finanzierung',
    question: 'Kreditfinanzierung: Die 6 Dimensionen',
    answer: '1. Fristigkeit:\n→ kurzfristig (bis 1 Jahr) / mittelfristig (1–4 Jahre) / langfristig (über 4 Jahre)\n\n2. Quelle:\n→ Kreditinstitute, Lieferanten, Kunden, Unternehmen, Privatpersonen, Staat\n\n3. Verwendung:\n→ Investitionskredit (Anlagevermögen)\n→ Betriebsmittelkredit (Umlaufvermögen)\n→ Zwischenfinanzierungskredit (Überbrückung)\n\n4. Form:\n→ Geldkredite / Sachkredite / Kreditleihen (z. B. Bürgschaft)\n\n5. Entgelt:\n→ fester oder variabler Zinssatz\n\n6. Rückzahlung/Tilgung:\n→ in einem Betrag oder in mehreren Beträgen\n→ mit fest vereinbarten oder kündigungsabhängigen Terminen\n→ immer zum Nominalwert; FK-Geber nicht am Erfolg beteiligt',
  },
  {
    id: 'mgmt-35', moduleId: 'mgmt', category: 'VWL',
    question: 'Vollkommener Markt: Voraussetzungen',
    answer: 'Ein vollkommener Markt (theoretisches Referenzmodell) setzt voraus:\n\n1. Keine Marktzugangs- oder -ausgangsbeschränkungen\n2. Homogenes Gut (alle Angebote sind identisch)\n3. Vollkommene Markttransparenz (alle kennen alle Preise)\n4. Unendlich schnelle Reaktion der Marktteilnehmer\n5. Keine persönlichen, räumlichen oder zeitlichen Präferenzen\n\nBedeutung: In der Realität existiert kein vollkommener Markt\n→ Unvollkommenheiten schaffen Möglichkeiten für Differenzierung und Wettbewerbsvorteile\n\nPreisfunktion: Preis als Knappheitsindikator\n• Hoher Preis signalisiert Knappheit → lockt neue Anbieter an\n• Niedriger Preis signalisiert Überangebot → Anbieter ziehen sich zurück',
  },
  {
    id: 'mgmt-36', moduleId: 'mgmt', category: 'VWL',
    question: 'Angebot: Einflussfaktoren und Elastizität',
    answer: 'Angebotsmenge hängt ab von:\n• Preis des Gutes (Hauptfaktor)\n• Lageparameter: Erwartungen der Anbieter, technischer Fortschritt, Faktorpreise\n\nceteris paribus: Preis steigt → angebotene Menge steigt\n\nPreisänderung: Bewegung ENTLANG der Angebotskurve\nLageparameter-Änderung: VERSCHIEBUNG der gesamten Angebotskurve\n→ Beispiel: Technischer Fortschritt → mehr Angebot zu jedem Preis → Kurve verschiebt sich nach rechts/unten\n\nAngebotsüberhang: Preis > Gleichgewicht → Druck nach unten\nNachfrageüberhang: Preis < Gleichgewicht → Druck nach oben\n\nAnwendungsbeispiel: Schließung von Handschuhfabriken → Angebot sinkt → GGW-Preis steigt, GGW-Menge sinkt',
  },
  {
    id: 'mgmt-37', moduleId: 'mgmt', category: 'VWL',
    question: 'Ökonomisches Prinzip und Trade-offs',
    answer: 'Grundproblem: Bedürfnisse sind UNBEGRENZT, Güter sind KNAPP\n→ Güterknappheit erfordert planmäßiges Wirtschaften\n\nÖkonomisches Prinzip – zwei Ausprägungen:\n\nMaximalprinzip:\n→ Fixer Mitteleinsatz → maximaler Ertrag/Output\nBeispiel: Mit 1.000 € möglichst viel produzieren\n\nMinimalprinzip:\n→ Fixes Ziel → minimaler Mitteleinsatz\nBeispiel: Ein bestimmtes Produkt mit möglichst wenig Kosten herstellen\n\nOpportunitätskosten: Jede Entscheidung bedeutet Verzicht\nTypische Trade-offs:\n• Lebensmittel vs. Kleidung (Konsument)\n• Freizeit vs. Arbeitszeit (Arbeitnehmer)\n• Neues Werk vs. Optimierung altes Werk (Unternehmen)\n• Effizienz vs. Gleichheit (Gesellschaft)',
  },
  {
    id: 'mgmt-38', moduleId: 'mgmt', category: 'Wachstum',
    question: 'IPO: Motive und Ablauf',
    answer: 'IPO (Initial Public Offering) = erstmaliger Börsengang\n→ Im engeren Sinn: Umgründung in AG + erstmalige Börsennotierung\n\nMotive für einen IPO:\n• Übernahme- und Wachstumsfinanzierung\n• Eigenkapitalstärkung\n• Exit für bisherige Eigentümer/Investoren\n• Unternehmensnachfolge\n• Mehr Öffentlichkeit und Bekanntheit\n• Mitarbeiterbeteiligungsprogramme\n• Privatisierung staatlicher Unternehmen\n• Spin-off aus einem Konzern\n\nAblauf einer PE/VC-Finanzierung bis zum Exit:\nIdee → Business-Plan → Auswahl Investoren → Kennenlernen → Letter of Intent → Due Diligence → Verhandlung/Abschluss → Betreuung → Exit (z. B. IPO)\n\nTypische Haltedauer: 3–10 Jahre',
  },
  {
    id: 'mgmt-39', moduleId: 'mgmt', category: 'Risikomanagement',
    question: 'Risikoquellen und Risikoarten im Unternehmen',
    answer: 'Risikoquellen und zugehörige Risikoarten:\n\n• Allgemeine Marktentwicklung → Marktrisiken:\n  Aktienkurse, DAX, Güterpreise, Marktzinssätze, Wechselkurse\n\n• Rechtslage → Rechtliche Risiken:\n  Gesetzesverstöße, Haftungsrisiken\n\n• Politische Lage → Politische Risiken:\n  Enteignungs- und Transferrisiken (z. B. in Russland)\n\n• Insbesondere bei Banken → Kreditrisiken:\n  Ausfall von Kreditnehmern\n\n• Allgemein → Liquiditätsrisiken:\n  Zahlungsunfähigkeit trotz Gewinnen\n\nRisiko vs. Ungewissheit:\n• Risiko: Eintrittswahrscheinlichkeiten BEKANNT und objektiv\n• Ungewissheit: Wahrscheinlichkeiten UNBEKANNT\n\nZiel: Senkung des Risikos bei gleichzeitiger Erhöhung der erwarteten Zahlungen',
  },
  {
    id: 'mgmt-40', moduleId: 'mgmt', category: 'Insolvenz',
    question: 'Der 7-stufige Insolvenzablauf',
    answer: '1. Antrag (§ 13 InsO):\n→ Durch Gläubiger oder Schuldner\n\n2. Prüfung durch Insolvenzgericht:\n→ Eröffnungsgrund vorhanden? (§§ 16 ff.)\n→ Hinreichende Masse zur Kostendeckung? (§ 26)\n→ Ggf. vorläufiger Insolvenzverwalter\n\n3. Eröffnungsbeschluss + Bestellung Insolvenzverwalter (§§ 27 ff.)\n\n4. Sichtung, Verwaltung und Verwertung der Insolvenzmasse\n\n5. Feststellung der Gläubigerforderungen (§§ 174 ff.):\n→ Gläubiger melden ihre Forderungen an\n\n6. Erlösverteilung (§§ 187 ff.):\n→ Anteilige Befriedigung der Gläubiger\n\n7. Aufhebung des Verfahrens (§§ 200 ff.):\n→ Ggf. anschließende Restschuldbefreiung (§§ 286 ff.)\n\nMögliche Lösungswege: Liquidation, Sanierung oder sanierende Übertragung',
  },
  {
    id: 'mgmt-41', moduleId: 'mgmt', category: 'Insolvenz',
    question: 'Sanierung vs. Restrukturierung',
    answer: 'Beide Begriffe umfassen Maßnahmen, die das Leistungspotenzial wiederherstellen und existenzerhaltende Rentabilität erreichen sollen.\n\nSanierung:\n• Eher kurzfristige Sofortmaßnahmen\n• Reaktion auf akute, existenzbedrohende Krise\n• Kostensenkung, Liquiditätssicherung, Ergebnisverbesserung\n• Zeitraum: Wochen bis wenige Monate\n\nRestrukturierung:\n• Kontinuierliche Ausrichtung auf neues Unternehmenskonzept\n• Mittel- bis langfristige Neuausrichtung\n• Operativ, strategisch und finanziell\n• Zeitraum: 6–24 Monate\n\nAusgangspunkt beider Ansätze:\n• Akute, existenzbedrohende Unternehmenskrise\n• Fortgeschrittener Ressourcenverzehr\n• Extremer Handlungsdruck bei eingeschränktem Spielraum\n• Unfähigkeit, Krise aus eigener Kraft zu bewältigen',
  },
  {
    id: 'mgmt-42', moduleId: 'mgmt', category: 'Grundlagen',
    question: 'Entrepreneurship: Wissenschaft und Wirtschaft verbinden',
    answer: 'Entrepreneurship = Unternehmertum = Prozess von der Geschäftsmöglichkeit bis zum marktfähigen Produkt\n\nZusammenhang Wissenschaft und Wirtschaft:\n• Hoher Innovationsgrad, oft noch kein Markt → Wissenschaft\n• Etablierter Markt, geringer Innovationsgrad → Wirtschaft\n• Entrepreneurship verbindet beide über unternehmerisches Handeln\n\nAblaufschema:\n1. Bestehende Konzepte + neue wissenschaftliche Ideen → Geschäftsidee\n2. Aus Geschäftsidee entsteht Geschäftsmöglichkeit\n3. Entrepreneurship = Prozess zum marktfähigen Produkt\n4. Erfolgreiche Markteinführung\n5. Langfristig: Longseller/Evergreens vs. nachlassendes Interesse\n\nAnschauungsbeispiele: Elon Musk (Tesla/SpaceX), Bill Gates (Microsoft), Jeff Bezos (Amazon)',
  },
  {
    id: 'mgmt-43', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Management Summary und Unternehmensprofil im Business-Plan',
    answer: 'Element 1 – Management Summary:\n• Komprimierte Verdichtung des GESAMTEN Business-Plans\n• Ermöglicht Dritten schnelle Entscheidung über detaillierte Prüfung\n• Inhalt: Geschäftsidee, Branche, Finanzierungsphase, Kapitalbedarf\n• Maximale Länge: 2 Seiten\n• Auch: "Executive Summary"\n\nElement 2 – Unternehmen (3 Teilbereiche):\n1. Unternehmensprofil:\n   → Gründung, Rechtsform, bestehendes Produktprogramm\n\n2. Besitzverhältnisse:\n   → Firmeninhaber, Beteiligungen, Partner\n\n3. Unternehmensziele:\n   → Ausgangslage, angestrebte Ziele, geplante Strategie\n\nMoMiG ermöglicht GmbH ab 1 € Stammeinlage\nRechtsformen: Einzelunternehmen → GbR → OHG → KG → GmbH → AG',
  },
  {
    id: 'mgmt-44', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Szenarioanalyse im Business-Plan',
    answer: 'Zweck: Da Planzahlen stets auf Annahmen beruhen, müssen mögliche Abweichungen aufgezeigt werden\n\nSzenarien = plausible, begründbare Zukunftsbilder\n• Basieren auf komplexen, miteinander verknüpften Einflussfaktoren\n• Beschreiben sowohl künftige Situation als auch Entwicklungspfad dorthin\n\nDrei Szenarien der Wirtschaftlichkeitsanalyse:\n• Best Case: optimistische Annahmen\n→ Beispiel: 250.000 € Einnahmen bei 180.000 € Kosten = +70.000 € Gewinn\n• Middle Case: realistische Annahmen\n→ Beispiel: 200.000 € zu 200.000 € = ±0 € (Break-Even)\n• Worst Case: pessimistische Annahmen\n→ Beispiel: 175.000 € zu 220.000 € = −45.000 € Verlust\n\nZeithorizont:\n• Im Business-Plan: 3 Jahre\n• Allgemein: 5–10 Jahre\n\nEingeordnet im Business-Plan: Element 8 "Chancen & Risiken"',
  },
  {
    id: 'mgmt-45', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Organisation im Business-Plan: Organisationsformen',
    answer: 'Element 6 – Management & Organisation:\n\nManagementteam:\n• Teils wichtiger als das Unternehmenskonzept selbst\n• Wichtig: unterschiedliche, sich ergänzende Qualifikationen\n• Persönlicher Zusammenhalt (Human Resources/Humankapital)\n\nKlassische Organisationsformen:\n\n1. Linienorganisation:\n→ Einlinien-, Mehrlinien- oder Stablinienorganisation\n\n2. Spartenorganisation:\n→ Gliederung nach Produkten/Regionen\n\n3. Matrixorganisation:\n→ Kombination aus Linien- und Spartenorganisation\n→ Mitarbeiter berichten an zwei Vorgesetzte\n\n4. Projektorganisation:\n→ Temporäre Struktur für Projekte\n\nOrganigramm: verschafft schnellen Überblick über interne Strukturen',
  },
  {
    id: 'mgmt-46', moduleId: 'mgmt', category: 'VWL',
    question: 'Güterknappheit und das Bedürfnis-Gut-Schema',
    answer: 'Grundproblem der Wirtschaft:\n• Bedürfnisse = Empfindung eines Mangels mit dem Bestreben, ihn zu beseitigen\n• Bedürfnisse sind prinzipiell unbegrenzt\n• Güter zur Befriedigung sind knapp\n→ Ergebnis: Spannungsfeld "Güterknappheit"\n\nBedürfnisarten:\n• Primärbedürfnisse: Grund-/Existenzbedürfnisse (angeboren)\n• Sekundärbedürfnisse: Kultur- und Luxusbedürfnisse (erworben)\n\nGüterarten:\n• Freie Güter: nicht knapp (z. B. Luft)\n• Knappe Güter: relativ oder absolut knapp\n\nNach Verwendungszweck:\n• Produktionsgüter vs. Konsumgüter\n\nNach Nutzungsart:\n• Gebrauchsgüter (mehrfache Nutzung, z. B. Auto)\n• Verbrauchsgüter (einmalige Nutzung, z. B. Lebensmittel)',
  },
  {
    id: 'mgmt-47', moduleId: 'mgmt', category: 'Wachstum',
    question: 'Due Diligence und Letter of Intent (PE/VC)',
    answer: 'Letter of Intent (LoI):\n• Unverbindliche Absichtserklärung vor der Due Diligence\n• Signalisiert ernsthaftes Interesse des Investors\n• Klärt Rahmenbedingungen für weiteren Prozess\n\nDue Diligence:\n• "Sorgfaltspflicht" – umfassende Prüfung des Unternehmens vor der Investition\n• Rechtlich, finanziell, steuerlich, technisch und kommerziell\n• Identifizierung von Risiken und Chancen\n• Ergebnis fließt in die Bewertung und Vertragsbedingungen ein\n\nGesamtablauf PE/VC-Finanzierung:\nIdee + Team → Business-Plan → Auswahl Investoren → Kennenlerngespräch → Letter of Intent → Due Diligence → Verhandlung + Vertragsabschluss → laufende Betreuung → Exit\n\nTypische Haltedauer: 3–10 Jahre',
  },
  {
    id: 'mgmt-48', moduleId: 'mgmt', category: 'Gründungsphase',
    question: 'Gründungswille im Zeitverlauf und Kompetenzebenen',
    answer: 'Gründungswille im Zeitverlauf:\n• Ca. 20–30 Jahre: Erfahrung, Kompetenz, Selbstbewusstsein wachsen schnell\n• "Periode der Wahlfreiheit": Gründung besonders wahrscheinlich\n• Ca. 35–45 Jahre: finanzielle und andere Verpflichtungen wachsen\n→ Werte verschieben sich zugunsten weiterer Lebensbereiche\n\nVier Kompetenzebenen eines Gründers:\n1. Fachliche Kompetenz: Wissen im Fachgebiet\n2. Methodische Kompetenz: Arbeitstechniken, Problemlösungsfähigkeit\n3. Soziale Kompetenz: Teamfähigkeit, Kommunikation\n4. Personale/persönliche Kompetenz: Selbstreflexion, Belastbarkeit\n\nGründungsteam:\n• Innerer Kreis: Gründer von Anfang an\n• Äußerer Kreis: kommen später hinzu',
  },
  {
    id: 'mgmt-49', moduleId: 'mgmt', category: 'Finanzierung',
    question: 'Investition vs. Finanzierung: Unterschied',
    answer: 'Unterschied anhand von Zahlungsreihen:\n\nInvestition:\n• Beginnt mit einer AUSZAHLUNG (Verwendung liquider Mittel)\n• Dann folgen Einzahlungsüberschüsse\n• Beispiel: Kauf einer Maschine für 100.000 € (Auszahlung) → jährliche Erträge\n\nFinanzierung:\n• Beginnt mit einer EINZAHLUNG (Beschaffung liquider Mittel)\n• Dann folgen Auszahlungsüberschüsse (Rückzahlung + Zinsen)\n• Beispiel: Kredit über 100.000 € (Einzahlung) → monatliche Raten\n\nBetriebliche Finanzwirtschaft – drei Funktionen:\n1. Finanzierung: Kapitalbeschaffung\n2. Investition: Kapitalverwendung\n3. Zahlungsverkehr: Kapitalverwaltung (Ein-/Auszahlungen)\n\nMerkhilfe: "Investition fängt mit Auszahlung an, Finanzierung mit Einzahlung"',
  },
  {
    id: 'mgmt-50', moduleId: 'mgmt', category: 'Business-Plan',
    question: 'Goldene Bilanzregel: Drei Fassungen',
    answer: 'Goldene Finanzierungsregel ("Goldene Bankregel"):\n→ Fristenkongruenz: Fristigkeit der Mittel muss zur Verwendung passen\n\nDrei Fassungen der Goldenen Bilanzregel:\n\n1. Engste Fassung:\n→ Anlagevermögen ist AUSSCHLIESSLICH mit Eigenkapital zu finanzieren\n\n2. Weitere Fassung:\n→ Anlagevermögen ist LANGFRISTIG zu finanzieren\n→ d. h. mit Eigen- UND langfristigem Fremdkapital\n\n3. Noch weitere Fassung:\n→ ALLES langfristig gebundene Vermögen soll langfristig finanziert sein\n→ Auch Teile des Umlaufvermögens (z. B. eiserner Bestand)\n\nGefahr bei Verletzung:\n• Kurzfristige Mittel für langfristige Investitionen nutzen → Liquiditätsrisiko\n• Wenn kurzfristige Kredite fällig werden, droht Zahlungsunfähigkeit',
  },
];
