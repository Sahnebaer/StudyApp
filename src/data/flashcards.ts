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
    answer: 'PERT-Wert = (P + 4W + O) / 6\n(P=pessimistisch, W=wahrscheinlich, O=optimistisch)\n\nSchätzprobleme, die PERT reduziert:\n• Parkinson's Gesetz: Arbeit füllt verfügbare Zeit aus\n• Studentenkrankheit: Puffer gleich zu Beginn verbraucht\n• Persönliche Puffer: jeder baut intuitiv Sicherheit ein',
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
];
