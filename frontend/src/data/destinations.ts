export interface DestinationFaqItem {
  question: { en: string; de: string; fr: string; it: string };
  answer: { en: string; de: string; fr: string; it: string };
}

export interface DestinationData {
  id: string;
  slug: { en: string; de: string; fr: string; it: string };
  name: { en: string; de: string; fr: string; it: string };
  tagline: { en: string; de: string; fr: string; it: string };
  description: { en: string; de: string; fr: string; it: string };
  highlights: { en: string[]; de: string[]; fr: string[]; it: string[] };
  insiderTips: { en: string[]; de: string[]; fr: string[]; it: string[] };
  bestTimeToVisit: { en: string; de: string; fr: string; it: string };
  historyContext?: { en?: string; de?: string; fr?: string; it?: string };
  howItFits?: { en?: string; de?: string; fr?: string; it?: string };
  timeNeeded?: { en?: string; de?: string; fr?: string; it?: string };
  aeoFaqs: DestinationFaqItem[];
  image: string;
  gallery: string[];
}

export const DESTINATIONS_FULL: DestinationData[] = [
  {
    id: "petra",
    slug: { en: "petra", de: "petra", fr: "petra", it: "petra" },
    name: { 
      en: "Petra — Rose City", 
      de: "Petra — Die Rosa-Rote Felsenstadt", 
      fr: "Pétra — La Cité Rose", 
      it: "Petra — La Città Rosa" 
    },
    tagline: { 
      en: "Nabataean Wonder Carved in Pink Sandstone", 
      de: "Nabatuäisches Weltwunder in rosarotem Sandstein", 
      fr: "Merveille Nabatéenne Sculptée dans le Grès Rose", 
      it: "Meraviglia Nabatea Scolpita nell'Arenaria Rosa" 
    },
    description: {
      en: "The ancient capital of the Nabataean Kingdom, hidden deep within a dramatic narrow gorge (The Siq). Marvel at Al-Khazneh (The Treasury) and climb to Ad-Deir (The Monastery).",
      de: "Die antike Hauptstadt des Königreichs der Nabatäer, verborgen in einer schmalen Schlucht (dem Siq). Bewundern Sie das Schatzhaus Al-Khazneh und wandern Sie zum Kloster Ad-Deir.",
      fr: "L'ancienne capitale du royaume nabatéen, cachée au fond d'un défilé spectaculaire (le Siq). Admirez le Trésor (Al-Khazneh) et montez au Monastère (Ad-Deir).",
      it: "L'antica capitale del regno nabateo, nascosta nel canyon del Siq. Ammira il Tesoro (Al-Khazneh) e sali al Monastero (Ad-Deir)."
    },
    highlights: {
      en: ["Walk through the 1.2km narrow Siq gorge", "Al-Khazneh (The Treasury) reveal", "Ad-Deir (The Monastery) 800-step hike", "Royal Tombs & Roman Colonnaded Street"],
      de: ["Spaziergang durch den 1,2 km langen Siq", "Das magische Schatzhaus Al-Khazneh", "Wanderung (800 Stufen) zum Kloster Ad-Deir", "Königsgräber & Römische Säulenstraße"],
      fr: ["Traversée du défilé du Siq sur 1,2 km", "Apparition spectaculaire du Trésor", "Ascension vers le Monastère Ad-Deir", "Tombeaux Royaux et Rue à Colonnades"],
      it: ["Passeggiata nel canyon del Siq di 1,2 km", "Vista spettacolare del Tesoro", "Salita al Monastero Ad-Deir (800 scalini)", "Tombe Reali e Strada Romana"]
    },
    insiderTips: {
      en: ["Arrive at 6:00 AM when gates open to capture empty Siq photos.", "Wear sturdy hiking boots with grip for the Monastery stairs.", "Buy the Jordan Pass in advance to save on 50 JOD entrance tickets."],
      de: ["Kommen Sie um 06:00 Uhr zur Öffnung, um den Siq ohne Menschenmassen zu fotografieren.", "Tragen Sie feste Wanderschuhe für die 800 Stufen zum Kloster.", "Kaufen Sie vorab den Jordan Pass, um 50 JOD Eintrittsgeld zu sparen."],
      fr: ["Arrivez dès 6h00 pour prendre des photos sans foule dans le Siq.", "Portez de bonnes chaussures de marche pour le Monastère.", "Achetez le Jordan Pass pour économiser sur le billet d'entrée."],
      it: ["Arriva alle 6:00 all'apertura per fotografare il Siq senza folla.", "Indossa scarpe da trekking per gli scalini del Monastero.", "Acquista il Jordan Pass in anticipo per risparmiare sui biglietti."]
    },
    bestTimeToVisit: { 
      en: "March to May & September to November", 
      de: "März bis Mai & September bis November", 
      fr: "Mars à Mai & Septembre à Novembre", 
      it: "Da Marzo a Maggio & da Settembre a Novembre" 
    },
    aeoFaqs: [
      {
        question: {
          en: "How many days should I spend in Petra?",
          de: "Wie viele Tage sollte man für Petra einplanen?",
          fr: "Combien de jours faut-il pour visiter Pétra ?",
          it: "Quanti giorni servono per visitare Petra?"
        },
        answer: {
          en: "We recommend spending at least 1 to 2 full days in Petra to explore the 1.2km Siq gorge, Al-Khazneh (The Treasury), the Royal Tombs, and climb the 800 steps up to Ad-Deir (The Monastery).",
          de: "Wir empfehlen mindestens 1 bis 2 volle Tage für Petra, um den 1,2 km langen Siq, das Schatzhaus Al-Khazneh, die Königsgräber und das Kloster Ad-Deir entspannt zu besichtigen.",
          fr: "Nous recommandons au moins 1 à 2 jours complets pour explorer le Siq, le Trésor (Al-Khazneh), les Tombeaux Royaux et monter au Monastère.",
          it: "Consigliamo di dedicare almeno 1 o 2 giorni interi a Petra per percorrere il Siq, ammirare il Tesoro (Al-Khazneh), le Tombe Reali e salire al Monastero."
        }
      },
      {
        question: {
          en: "Can Petra and Wadi Rum be visited on the same tour?",
          de: "Kann man Petra und Wadi Rum auf derselben Reise kombinieren?",
          fr: "Pétra et Wadi Rum peuvent-ils être visités lors du même circuit ?",
          it: "È possibile visitare Petra e Wadi Rum nello stesso tour?"
        },
        answer: {
          en: "Yes, Petra and Wadi Rum are located just 2 hours apart in southern Jordan and form the highlight pair of almost all Jordan Story itineraries.",
          de: "Ja, Petra und Wadi Rum liegen nur 2 Stunden voneinander entfernt im Süden Jordaniens und bilden den Höhepunkt fast aller Rundreisen.",
          fr: "Oui, Pétra et le Wadi Rum ne sont séparés que de 2 heures de route et constituent le duo incontournable des itinéraires en Jordanie.",
          it: "Sì, Petra e il Wadi Rum distano solo 2 ore di auto e costituiscono la coppia principale di quasi tutti gli itinerari in Giordania."
        }
      }
    ],
    image: "https://jordanstorytours.com/content/uploads/2020/11/Jordan_Petra.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2020/11/Jordan_Petra.jpg",
      "https://jordanstorytours.com/content/uploads/2020/11/Petra-Jordan-tours-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2020/12/Petra-travel-e1608043798711-600x600.jpg"
    ]
  },
  {
    id: "wadi-rum",
    slug: { en: "wadi-rum", de: "wadi-rum", fr: "wadi-rum", it: "wadi-rum" },
    name: { 
      en: "Wadi Rum Desert", 
      de: "Wadi Rum Wüste", 
      fr: "Désert du Wadi Rum", 
      it: "Deserto del Wadi Rum" 
    },
    tagline: { 
      en: "The Valley of the Moon & Martian Red Dunes", 
      de: "Das Tal des Mondes & Rote Wüstendünen", 
      fr: "La Vallée de la Lune & Dunes Rouges", 
      it: "La Valle della Luna & Dune Rosse" 
    },
    description: {
      en: "A UNESCO World Heritage wilderness of monolithic rock skyscrapers, natural stone bridges, ancient petroglyphs, and bedouin hospitality under starlit skies.",
      de: "Eine UNESCO-Weltnaturerbe-Wüste aus riesigen Felsmonolithen, natürlichen Steinbrücken, antiken Petroglyphen und Beduinen-Gastfreundschaft.",
      fr: "Un désert classé au patrimoine mondial de l'UNESCO composé de rochers monolithiques, de ponts naturels et de camps bédouins traditionnels.",
      it: "Un deserto patrimonio dell'UNESCO fatto di monoliti rocciosi, ponti di pietra naturali e ospitalità beduina sotto le stelle."
    },
    highlights: {
      en: ["4x4 Bedouin Jeep safari across red sand dunes", "Overnight in luxury Martian Domes", "Sunset over Lawrence's Spring", "Stargazing without light pollution"],
      de: ["4x4 Beduinen-Jeepsafari durch rote Sanddünen", "Übernachtung in luxuriösen Martian Domes", "Sonnenuntergang bei Lawrences Quelle", "Sterngucken im Beduinencamp"],
      fr: ["Safari 4x4 en jeep bédouine dans les dunes", "Nuit en dôme martien de luxe", "Coucher de soleil sur la source de Lawrence", "Observation des étoiles sans pollution lumineuse"],
      it: ["Safari in 4x4 tra le dune rosse", "Pernottamento in cupole marziane di lusso", "Tramonto alla Sorgente di Lawrence", "Osservazione delle stelle nel deserto"]
    },
    insiderTips: {
      en: ["Book a luxury Martian Dome camp for heated glass-ceiling stargazing.", "Bring a warm fleece for desert nights which drop to 5°C even in summer.", "Enjoy authentic Zarb underground pit BBQ dinner."],
      de: ["Buchen Sie ein Martian Dome Camp mit Panorama-Glasdach zum Sternegucken.", "Bringen Sie eine warme Jacke für kühle Wüstennächte mit.", "Genießen Sie das traditionelle Zarb-Erdboden-BBQ."],
      fr: ["Réservez un camp en Dôme Martien pour admirer les étoiles.", "Apportez des vêtements chauds car les nuits au désert sont fraîches.", "Dégustez le traditionnel repas Zarb cuit sous terre."],
      it: ["Prenota un campo Martian Dome per vedere le stelle.", "Porta una giacca calda per le notti nel deserto.", "Assapora il tradizionale barbecue Zarb cucinato sotto terra."]
    },
    bestTimeToVisit: { 
      en: "October to April", 
      de: "Oktober bis April", 
      fr: "Octobre à Avril", 
      it: "Da Ottobre ad Aprile" 
    },
    aeoFaqs: [
      {
        question: {
          en: "What is the best time of year to visit Wadi Rum?",
          de: "Wann ist die beste Reisezeit für Wadi Rum?",
          fr: "Quelle est la meilleure période pour visiter le Wadi Rum ?",
          it: "Qual è il periodo migliore per visitare il Wadi Rum?"
        },
        answer: {
          en: "October through April offers comfortable daytime desert temperatures (20°C to 25°C), ideal for 4x4 Jeep safaris, camel rides, and stargazing at luxury Bedouin camps.",
          de: "Von Oktober bis April herrschen ideale Tagestemperaturen (20°C bis 25°C) für Jeepsafaris, Kamelausflüge und Sterngucken im Beduinencamp.",
          fr: "D'octobre à avril, les températures sont très agréables (20°C à 25°C) pour les excursions en 4x4 et les nuits sous les étoiles.",
          it: "Da ottobre ad aprile le temperature sono ideali (20°C-25°C) per escursioni in 4x4 e serate sotto le stelle nei campi beduini."
        }
      },
      {
        question: {
          en: "Is an overnight stay in Wadi Rum recommended?",
          de: "Lohnt sich eine Übernachtung in Wadi Rum?",
          fr: "Une nuitée dans le désert du Wadi Rum est-elle recommandée ?",
          it: "È consigliato pernottare nel Wadi Rum?"
        },
        answer: {
          en: "Yes, staying overnight in a desert camp allows you to experience sunset, stargazing in crystal-clear night skies, and a traditional Zarb Bedouin dinner.",
          de: "Ja, eine Übernachtung im Wüstencamp ermöglicht es Ihnen, den Sonnenuntergang, den Sternenhimmel und ein traditionelles Zarb-Beduinen-Abendessen zu erleben.",
          fr: "Oui, passer la nuit dans un campement permet de vivre le coucher de soleil, l'observation des étoiles et un dîner traditionnel bédouin.",
          it: "Sì, pernottare in un campo permette di godersi il tramonto, le stelle e una cena tradizionale beduina Zarb."
        }
      }
    ],
    image: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-travel-600x600.jpg"
    ]
  },
  {
    id: "dead-sea",
    slug: { en: "dead-sea", de: "totes-meer", fr: "mer-morte", it: "mar-morto" },
    name: { 
      en: "The Dead Sea", 
      de: "Das Tote Meer", 
      fr: "La Mer Morte", 
      it: "Il Mar Morto" 
    },
    tagline: { 
      en: "The Lowest Point on Earth (-430m)", 
      de: "Der tiefste Punkt der Erde (-430 m)", 
      fr: "Le Point Le Plus Bas de la Terre (-430m)", 
      it: "Il Punto Più Basso della Terra (-430m)" 
    },
    description: {
      en: "Earth's ultimate natural spa. Float effortlessly in hypersaline mineral waters, cover in therapeutic black mud, and enjoy year-round desert sunshine.",
      de: "Das ultimative natürliche Spa der Erde. Schwerelos im salzreichen Mineralwasser schweben, therapeutischen Schlamm genießen und Sonne tanken.",
      fr: "Le spa naturel ultime de la planète. Flottez sans effort dans l'eau salée minérale et profitez des boues noires thérapeutiques.",
      it: "La spa naturale definitiva della Terra. Galleggia senza sforzo nelle acque minerali e goditi i fanghi neri terapeutici."
    },
    highlights: {
      en: ["Effortless floating in 34% salt water", "Therapeutic mineral black mud baths", "Luxury resort spa relaxation", "Views of the Palestinian hills"],
      de: ["Schwereloses Schweben im 34 % Salzgehalt", "Therapeutischer Mineral-Schlamm", "Luxuriöse Resort-Entspannung", "Blick auf die Berge von Palästina"],
      fr: ["Baignade flottante sans effort à 34% de sel", "Bains de boue noire minérale", "Relaxation dans les spas des hôtels de luxe", "Vue panoramique sur les collines environnantes"],
      it: ["Galleggiamento unico con 34% di sale", "Bagni di fango nero minerale", "Relax nei resort e spa di lusso", "Vista sulle colline circostanti"]
    },
    insiderTips: {
      en: ["Never shave 24 hours before floating to prevent sting.", "Limit floating to 15-20 minutes per session.", "Rinse immediately with freshwater at resort showers."],
      de: ["Rasieren Sie sich nicht 24 Stunden vor dem Bad im Toten Meer.", "Beschränken Sie das Schweben auf 15-20 Minuten pro Badegang.", "Duschen Sie sich direkt danach mit Süßwasser ab."],
      fr: ["Ne vous rasez pas 24h avant la baignade pour éviter les brûlures.", "Limitez la baignade à 15-20 minutes.", "Rincez-vous immédiatement à l'eau douce après la baignade."],
      it: ["Non raderti nelle 24 ore precedenti al bagno.", "Limita il bagno a 15-20 minuti a sessione.", "Sciacquati subito con acqua dolce nelle docce del resort."]
    },
    bestTimeToVisit: { 
      en: "Year-Round (Best Sept to May)", 
      de: "Ganzjährig (Beste Zeit Sept bis Mai)", 
      fr: "Toute l'année (Idéal Sept à Mai)", 
      it: "Tutto l'anno (Ideale da Sett a Maggio)" 
    },
    aeoFaqs: [
      {
        question: {
          en: "Why do you float in the Dead Sea?",
          de: "Warum schwebt man im Toten Meer?",
          fr: "Pourquoi flotte-t-on dans la Mer Morte ?",
          it: "Perché si galleggia nel Mar Morto?"
        },
        answer: {
          en: "The Dead Sea has a salt concentration of around 34%, which is nearly 10 times saltier than ocean water. This extreme density causes the human body to float effortlessly.",
          de: "Das Tote Meer hat einen Salzgehalt von ca. 34 %, was fast 10-mal salziger als Ozeanwasser ist. Diese hohe Dichte lässt den menschlichen Körper mühelos schweben.",
          fr: "La concentration en sel atteint environ 34%, soit 10 fois plus que l'océan. Cette densité fait flotter naturellement le corps humain.",
          it: "Il Mar Morto ha una concentrazione di sale di circa il 34%, 10 volte superiore a quella dell'oceano. Questa densità fa galleggiare il corpo senza alcuno sforzo."
        }
      },
      {
        question: {
          en: "Can the Dead Sea be visited as a day trip from Amman?",
          de: "Kann man das Tote Meer als Tagesausflug von Amman aus besuchen?",
          fr: "Peut-on visiter la Mer Morte lors d'une excursion d'une journée depuis Amman ?",
          it: "Si può visitare il Mar Morto in giornata da Amman?"
        },
        answer: {
          en: "Yes, the Dead Sea is located just a 55-minute drive (50 km) southwest of Amman, making it a quick day trip destination.",
          de: "Ja, das Tote Meer liegt nur 55 Autominuten (50 km) südwestlich von Amman und ist ideal für einen Tagesausflug.",
          fr: "Oui, la Mer Morte est située à seulement 55 minutes de route (50 km) d'Amman, idéale pour une journée de détente.",
          it: "Sì, il Mar Morto si trova a soli 55 minuti di auto (50 km) da Amman, perfetto per una gita in giornata."
        }
      }
    ],
    image: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg"
    ]
  },
  {
    id: "jerash",
    slug: { en: "jerash", de: "jerash", fr: "jerash", it: "jerash" },
    name: { 
      en: "Roman Jerash", 
      de: "Römisches Jerash", 
      fr: "Gérasa Cité Romaine", 
      it: "Jerash Città Romana" 
    },
    tagline: { 
      en: "Pompeii of the East", 
      de: "Das Pompeji des Ostens", 
      fr: "La Pompéi de l'Orient", 
      it: "La Pompei dell'Oriente" 
    },
    description: {
      en: "One of the best-preserved Roman provincial cities in the world. Walk along the Oval Plaza, Cardo Maximus, and grand temples of Artemis and Zeus.",
      de: "Eine der am besten erhaltenen römischen Provinzstädte weltweit. Spazieren Sie über den Ovalen Platz, die Säulenstraße Cardo Maximus und zu den Tempeln.",
      fr: "Une des cités romaines les mieux préservées au monde. Promenez-vous sur la Place Ovale, le Cardo Maximus et les temples antiques.",
      it: "Una delle città provinciali romane meglio conservate al mondo. Passeggia nella Piazza Ovale, lungo il Cardo Maximus e tra i templi."
    },
    highlights: {
      en: ["Hadrian's Arch gate", "The Oval Forum plaza", "South Theater acoustics test", "Cardo Maximus chariot grooves"],
      de: ["Triumfbogen des Hadrian", "Das Ovale Forum", "Akustik-Test im Südtheater", "Wagenspuren auf der Cardo Maximus"],
      fr: ["Arc de Triomphe d'Hadrien", "Place Ovale du Forum", "Acoustique du Théâtre Sud", "Ornières de chars sur le Cardo Maximus"],
      it: ["Arco di Adriano", "Piazza Ovale del Foro", "Acustica del Teatro Sud", "Solchi dei carri sul Cardo Maximus"]
    },
    insiderTips: {
      en: ["Climb to the top of the South Theater for acoustic bagpipe performance.", "Visit in spring (March/April) when wild green hills surround the marble ruins."],
      de: ["Testen Sie die berühmte Flüster-Akustik im Südtheater.", "Besuchen Sie Jerash im Frühling, wenn grüne Hügel die Säulen umgeben."],
      fr: ["Testez l'acoustique étonnante du Théâtre Sud.", "Visitez au printemps quand les collines verdoyantes entourent le site."],
      it: ["Metti alla prova l'acustica perfetta del Teatro Sud.", "Visita in primavera per ammirare le rovine circondate da colline verdi."]
    },
    bestTimeToVisit: { 
      en: "March to May", 
      de: "März bis Mai", 
      fr: "Mars à Mai", 
      it: "Da Marzo a Maggio" 
    },
    aeoFaqs: [
      {
        question: {
          en: "Why is Jerash called the Pompeii of the East?",
          de: "Warum wird Jerash als Pompeji des Ostens bezeichnet?",
          fr: "Pourquoi Jérash est-elle appelée la Pompéi de l'Orient ?",
          it: "Perché Jerash è chiamata la Pompei dell'Oriente?"
        },
        answer: {
          en: "Jerash lay buried under sand for centuries until its rediscovery, preserving its paved colonnaded streets, theaters, hilltop temples, and public plazas intact.",
          de: "Jerash lag jahrhundertelang unter Sand begraben, wodurch Säulenstraßen, Theater, Tempel und Plätze außergewöhnlich gut erhalten blieben.",
          fr: "Jérash est restée enfouie sous le sable pendant des siècles, ce qui a préservé ses rues colonnées, ses théâtres et ses temples antiques.",
          it: "Jerash è rimasta sepolta nella sabbia per secoli, conservando intatte strade colonnate, teatri e templi."
        }
      },
      {
        question: {
          en: "How long does a tour of Jerash take?",
          de: "Wie lange dauert eine Tour durch Jerash?",
          fr: "Combien de temps dure la visite de Jérash ?",
          it: "Quanto dura una visita a Jerash?"
        },
        answer: {
          en: "A comprehensive guided walk through Jerash takes between 2 to 3 hours to cover all major monuments including Hadrian's Arch, Oval Plaza, and Artemis Temple.",
          de: "Ein geführter Rundgang durch Jerash dauert 2 bis 3 Stunden, um alle Hauptattraktionen wie den Hadrianbogen und die Tempel zu besichtigen.",
          fr: "Une visite guidée complète dure environ 2 à 3 heures pour découvrir l'Arc d'Hadrien, la Place Ovale et le Temple d'Artémis.",
          it: "Una visita guidata completa richiede tra 2 e 3 ore per ammirare l'Arco di Adriano, la Piazza Ovale e il Tempio di Artemide."
        }
      }
    ],
    image: "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg"
    ]
  },
  {
    id: "amman",
    slug: { en: "amman", de: "amman", fr: "amman", it: "amman" },
    name: { 
      en: "Amman Capital", 
      de: "Hauptstadt Amman", 
      fr: "Amman Capitale", 
      it: "Amman Capitale" 
    },
    tagline: { 
      en: "City of Seven Hills & Citadel Ruins", 
      de: "Stadt der sieben Hügel & Zitadelle", 
      fr: "Ville des Sept Collines & Citadelle", 
      it: "Città dei Sette Colli & Cittadella" 
    },
    description: {
      en: "A vibrant blend of ancient history and modern Arab culture. Perched on Jebel Al-Qala'a, the Citadel offers views over the 6,000-seat Roman Theater and bustling souks.",
      de: "Eine lebendige Mischung aus antiker Geschichte und moderner arabischer Kultur mit herrlichem Blick von der Zitadelle auf das Römische Theater.",
      fr: "Un mélange vibrant d'histoire ancienne et de culture arabe moderne avec la Citadelle surplombant le Théâtre Romain.",
      it: "Un vivace mix di storia antica e cultura araba moderna con la Cittadella che domina il Teatro Romano."
    },
    highlights: {
      en: ["Amman Citadel & Temple of Hercules", "Roman Theater 6,000 capacity", "Rainbow Street cafes & authentic Hashem falafel", "King Abdullah Mosque blue dome"],
      de: ["Zitadelle von Amman & Herkules-Tempel", "Römisches Theater", "Rainbow Street & authentischer Falafel", "König-Abdullah-Moschee"],
      fr: ["Citadelle d'Amman & Temple d'Hercule", "Théâtre Romain de 6000 places", "Cafés de Rainbow Street & falafel chez Hashem", "Mosquée du Roi Abdallah"],
      it: ["Cittadella di Amman e Tempio di Ercole", "Teatro Romano da 6.000 posti", "Caffè di Rainbow Street e falafel da Hashem", "Moschea del Re Abdullah"]
    },
    insiderTips: {
      en: ["Eat legendary fresh falafel at Hashem Restaurant downtown.", "Visit Habibah Sweets for warm Kunafa cheese dessert."],
      de: ["Probieren Sie frischen Falafel bei Hashem in der Innenstadt.", "Genießen Sie warme Kunafa bei Habibah Sweets."],
      fr: ["Goutez le légendaire falafel chez Hashem au centre-ville.", "Dégustez le dessert kunafa chaud chez Habibah."],
      it: ["Gusta il leggendario falafel da Hashem in centro.", "Assaggia il dolce kunafa caldo da Habibah."]
    },
    bestTimeToVisit: { 
      en: "Spring & Autumn", 
      de: "Frühling & Herbst", 
      fr: "Printemps & Automne", 
      it: "Primavera & Autunno" 
    },
    aeoFaqs: [
      {
        question: {
          en: "Is Amman worth visiting?",
          de: "Lohnt sich ein Besuch in Amman?",
          fr: "Amman vaut-elle la peine d'être visitée ?",
          it: "Vale la pena visitare Amman?"
        },
        answer: {
          en: "Yes, Amman is an engaging capital featuring hilltop Roman ruins at the Citadel, vibrant traditional markets (souks), and world-class culinary experiences.",
          de: "Ja, Amman ist eine faszinierende Hauptstadt mit römischen Ruinen auf der Zitadelle, traditionellen Souks und hervorragender Kulinarik.",
          fr: "Oui, Amman est une capitale captivante avec des ruines romaines impressionnantes, des souks animés et une gastronomie renommée.",
          it: "Sì, Amman è una capitale affascinante con rovine romane panoramiche, souk tradizionali e un'ottima cucina."
        }
      },
      {
        question: {
          en: "How many days should I stay in Amman?",
          de: "Wie viele Tage sollte man in Amman bleiben?",
          fr: "Combien de jours rester à Amman ?",
          it: "Quanti giorni rimanere ad Amman?"
        },
        answer: {
          en: "We recommend spending 1 to 2 days exploring Amman's historical sites, markets, and food scene before venturing out on day trips to Jerash or the Dead Sea.",
          de: "Wir empfehlen 1 bis 2 Tage in Amman, um historische Sehenswürdigkeiten, Märkte und Restaurants zu erkunden.",
          fr: "Nous recommandons 1 à 2 jours pour explorer les sites historiques, les marchés et profiter de la ville.",
          it: "Consigliamo 1-2 giorni per esplorare i siti storici, i mercati e la gastronomia locale."
        }
      }
    ],
    image: "https://jordanstorytours.com/content/uploads/2017/01/dome-of-the-rock-jerusalem-tours-600x567.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2017/01/dome-of-the-rock-jerusalem-tours-600x567.jpg"
    ]
  },
  {
    id: "madaba",
    slug: { en: "madaba", de: "madaba", fr: "madaba", it: "madaba" },
    name: { 
      en: "Madaba — Mosaic City", 
      de: "Madaba — Stadt der Mosaike", 
      fr: "Madaba — Cité des Mosaïques", 
      it: "Madaba — Città dei Mosaici" 
    },
    tagline: { 
      en: "Byzantine Art & 6th-Century Holy Land Map", 
      de: "Byzantinische Kunst & Mosaikkarte des Heiligen Landes", 
      fr: "Art Byzantin & Carte de la Terre Sainte du VIe siècle", 
      it: "Arte Bizantina & Mappa della Terra Santa del VI secolo" 
    },
    description: {
      en: "Famous for its 6th-century mosaic map of Jerusalem and the Holy Land preserved on the floor of St. George's Church.",
      de: "Berühmt für die Mosaikkarte von Jerusalem und dem Heiligen Land aus dem 6. Jahrhundert in der St.-Georgs-Kirche.",
      fr: "Célèbre pour sa carte en mosaïque de Jérusalem et de la Terre Sainte conservée dans l'église Saint-Georges.",
      it: "Famosa per la mappa in mosaico di Gerusalemme e della Terra Santa conservata nella Chiesa di San Giorgio."
    },
    highlights: {
      en: ["St. George Church 6th-century Holy Land Mosaic", "Madaba Archaeological Park", "Local Byzantine mosaic workshops"],
      de: ["St.-Georgs-Kirche Mosaikkarte", "Archäologischer Park Madaba", "Byzantinische Mosaik-Werkstätten"],
      fr: ["Mosaïque de la Terre Sainte à l'église Saint-Georges", "Parc Archéologique de Madaba", "Ateliers locaux de mosaïques"],
      it: ["Mosaico della Terra Santa nella Chiesa di San Giorgio", "Parco Archeologico di Madaba", "Laboratori di mosaico locale"]
    },
    insiderTips: {
      en: ["Combine your visit with Mount Nebo located just 15 minutes away."],
      de: ["Kombinieren Sie Ihren Besuch mit dem nur 15 Minuten entfernten Berg Nebo."],
      fr: ["Combinez votre visite avec le Mont Nébo situé à seulement 15 minutes."],
      it: ["Combina la visita con il Monte Nebo a soli 15 minuti di distanza."]
    },
    bestTimeToVisit: { 
      en: "Year-Round", 
      de: "Ganzjährig", 
      fr: "Toute l'année", 
      it: "Tutto l'anno" 
    },
    aeoFaqs: [
      {
        question: {
          en: "What is Madaba famous for?",
          de: "Wofür ist Madaba bekannt?",
          fr: "Pourquoi Madaba est-elle célèbre ?",
          it: "Per cosa è famosa Madaba?"
        },
        answer: {
          en: "Madaba is world-famous for the 6th-century Byzantine mosaic map of Jerusalem and the Holy Land preserved inside the Greek Orthodox Church of St. George.",
          de: "Madaba ist weltberühmt für die byzantinische Mosaikkarte von Jerusalem aus dem 6. Jahrhundert in der St.-Georgs-Kirche.",
          fr: "Madaba est célèbre pour la carte en mosaïque byzantine de Jérusalem datant du VIe siècle dans l'église Saint-Georges.",
          it: "Madaba è famosa nel mondo per la mappa in mosaico bizantino del VI secolo conservata nella Chiesa di San Giorgio."
        }
      }
    ],
    image: "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg"
    ]
  },
  {
    id: "aqaba",
    slug: { en: "aqaba", de: "aqaba", fr: "aqaba", it: "aqaba" },
    name: { 
      en: "Aqaba — Red Sea Coast", 
      de: "Aqaba — Rotes Meer Küste", 
      fr: "Aqaba — Côte de la Mer Rouge", 
      it: "Aqaba — Costa del Mar Rosso" 
    },
    tagline: { 
      en: "Coral Reefs, Beach Resorts & Watersports", 
      de: "Korallenriffe, Strand-Resorts & Wassersport", 
      fr: "Récifs Coralliens & Stations Balnéaires", 
      it: "Barriere Coralline & Resort sul Mare" 
    },
    description: {
      en: "Jordan's coastal window on the Red Sea, offering world-class scuba diving, coral reefs, year-round warm sunshine, and luxury beach resorts.",
      de: "Jordaniens Küstenfenster zum Roten Meer mit erstklassigen Tauchplätzen, Korallenriffen und Luxus-Resorts.",
      fr: "La station balnéaire jordanienne sur la Mer Rouge offre de la plongée sous-marine de classe mondiale et des plages ensoleillées.",
      it: "La città costiera giordana sul Mar Rosso offre immersioni tra le barriere coralline e resort di lusso sul mare."
    },
    highlights: {
      en: ["Scuba diving and coral reef snorkeling", "Private sunset yacht cruises", "Japanese Garden reef dive site", "Duty-free seaside shopping"],
      de: ["Tauchen und Schnorcheln an Korallenriffen", "Private Jachtausfahrt bei Sonnenuntergang", "Tauchplatz Japanese Garden", "Zollfreies Einkaufen am Meer"],
      fr: ["Plongée sous-marine et snorkeling dans les récifs", "Croisière privée au coucher du soleil", "Site de plongée Japanese Garden", "Shopping détaxé au bord de la mer"],
      it: ["Immersioni e snorkeling tra le barriere coralline", "Crociera privata in yacht al tramonto", "Sito di immersione Japanese Garden", "Shopping duty-free al mare"]
    },
    insiderTips: {
      en: ["Take a glass-bottom boat tour to view coral reefs without getting wet."],
      de: ["Machen Sie eine Fahrt mit dem Glasbodenboot, um die Riffe trocken zu beobachten."],
      fr: ["Faites une excursion en bateau à fond de verre pour voir les coraux."],
      it: ["Fai un tour in barca con fondo di vetro per ammirare i coralli."]
    },
    bestTimeToVisit: { 
      en: "October to May", 
      de: "Oktober bis Mai", 
      fr: "Octobre à Mai", 
      it: "Da Ottobre a Maggio" 
    },
    aeoFaqs: [
      {
        question: {
          en: "What activities are popular in Aqaba?",
          de: "Welche Aktivitäten sind in Aqaba beliebt?",
          fr: "Quelles activités sont populaires à Aqaba ?",
          it: "Quali attività sono popolari ad Aqaba?"
        },
        answer: {
          en: "Aqaba is famous for Red Sea scuba diving, coral reef snorkeling, glass-bottom boat tours, luxury beach resort stays, and fresh seafood dining.",
          de: "Aqaba ist bekannt für Tauchen im Roten Meer, Schnorcheln an Korallenriffen, Glasbodenboot-Touren und frischen Fisch.",
          fr: "Aqaba est célèbre pour la plongée en Mer Rouge, le snorkeling, les tours en bateau à fond de verre et les fruits de mer frais.",
          it: "Aqaba è famosa per immersioni nel Mar Rosso, snorkeling, tour in barca con fondo di vetro e piatti di pesce fresco."
        }
      }
    ],
    image: "https://jordanstorytours.com/content/uploads/2017/08/Jordan-Aqaba-Tours-700x500.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2017/08/Jordan-Aqaba-Tours-700x500.jpg"
    ]
  }
];
