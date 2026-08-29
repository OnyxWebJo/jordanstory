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
,
  {
  "id": "mount-nebo",
  "slug": {
    "en": "mount-nebo",
    "de": "berg-nebo",
    "fr": "mont-nebo",
    "it": "monte-nebo"
  },
  "name": {
    "en": "Mount Nebo Sanctuary",
    "de": "Berg Nebo Heiligtum",
    "fr": "Sanctuaire du Mont Nébo",
    "it": "Santuario del Monte Nebo"
  },
  "tagline": {
    "en": "Biblical Memorial Where Moses Contemplated the Promised Land",
    "de": "Biblische Gedenkstätte, von der Moses das Gelobte Land erblickte",
    "fr": "Mémorial biblique où Moïse contempla la Terre Promise",
    "it": "Memoriale biblico dove Mosè contemplò la Terra Promessa"
  },
  "description": {
    "en": "Rise 817 meters above sea level at Mount Nebo (Siyagha), the holy site where Prophet Moses stood before his death. Visit the Memorial Church housing 6th-century Byzantine mosaics and gaze across the Jordan Valley to Jericho and Jerusalem.",
    "de": "Erheben Sie sich 817 Meter über den Meeresspiegel auf dem Berg Nebo (Siyagha), der heiligen Stätte, an der Moses vor seinem Tod stand. Besuchen Sie die Gedenkkirche mit byzantinischen Mosaiken aus dem 6. Jahrhundert.",
    "fr": "S'élevant à 817 mètres d'altitude, le Mont Nébo (Siyagha) est le lieu sacré où le prophète Moïse contempla la Terre Promise. Admirez la basilique et ses mosaïques byzantines du VIe siècle.",
    "it": "Situato a 817 metri sul livello del mare, il Monte Nebo (Siyagha) è il luogo sacro dove il profeta Mosè vide la Terra Promessa. Visita la chiesa memoriale con mosaici bizantini del VI secolo."
  },
  "highlights": {
    "en": [
      "Brazen Serpent Monument sculpture by Gian Paolo Fantoni",
      "6th-century Byzantine mosaics in the Memorial Church of Moses",
      "Panoramic outlook over the Jordan Valley, Dead Sea & West Bank"
    ],
    "de": [
      "Skulptur des Ehernen Schlange-Denkmals von Gian Paolo Fantoni",
      "Byzantinische Mosaike aus dem 6. Jahrhundert in der Moses-Gedenkkirche",
      "Panoramablick über das Jordantal, das Tote Meer & Jericho"
    ],
    "fr": [
      "Sculpture du serpent d'airain par Gian Paolo Fantoni",
      "Mosaïques byzantines du VIe siècle dans le mémorial de Moïse",
      "Vue panoramique sur la vallée du Jourdain, la Mer Morte & la Cisjordanie"
    ],
    "it": [
      "Scultura del serpente di rame di Gian Paolo Fantoni",
      "Mosaici bizantini del VI secolo nella chiesa memoriale di Mosè",
      "Vista panoramica sulla Valle del Giordano, il Mar Morto e la Cisgiordania"
    ]
  },
  "insiderTips": {
    "en": [
      "Visit early morning or late afternoon for clear atmospheric views of Jerusalem's towers.",
      "Combine Mount Nebo with Madaba mosaic town just 15 minutes away."
    ],
    "de": [
      "Besuchen Sie den Ort früh morgens für klare Sicht auf die Türme von Jerusalem.",
      "Kombinieren Sie den Berg Nebo mit Madaba, das nur 15 Minuten entfernt liegt."
    ],
    "fr": [
      "Visitez tôt le matin pour apercevoir au loin les clochers de Jérusalem.",
      "Combinez le Mont Nébo avec Madaba situé à seulement 15 minutes."
    ],
    "it": [
      "Visita al mattino presto per una vista limpida fino a Gerusalemme.",
      "Combina il Monte Nebo con Madaba a soli 15 minuti di distanza."
    ]
  },
  "bestTimeToVisit": {
    "en": "Year-Round (Best Oct-May)",
    "de": "Ganzjährig (Beste Zeit Okt-Mai)",
    "fr": "Toute l'année (Idéal Oct-Mai)",
    "it": "Tutto l'anno (Ideale Ott-Mag)"
  },
  "aeoFaqs": [
    {
      "question": {
        "en": "Can you see Jerusalem from Mount Nebo?",
        "de": "Kann man Jerusalem vom Berg Nebo aus sehen?",
        "fr": "Peut-on voir Jérusalem depuis le Mont Nébo ?",
        "it": "Si può vedere Gerusalemme dal Monte Nebo?"
      },
      "answer": {
        "en": "Yes, on clear days visitors can see the Jordan River valley, Jericho, the Dead Sea, and the distant hills of Jerusalem.",
        "de": "Ja, an klaren Tagen sieht man das Jordantal, Jericho, das Tote Meer und die fernen Hügel von Jerusalem.",
        "fr": "Oui, par temps clair, la vue s'étend sur la vallée du Jourdain, Jéricho, la Mer Morte et les collines de Jérusalem.",
        "it": "Sì, nelle giornate limpide si vedono la valle del Giordano, Gerico, il Mar Morto e le colline di Gerusalemme."
      }
    }
  ],
  "image": "/images/destinations/mount-nebo.jpg",
  "gallery": [
      "/images/destinations/mount-nebo.jpg",
      "https://jordanstorytours.com/content/uploads/2021/01/Mount-Nebo-Holy-Place.jpg",
      "https://jordanstorytours.com/content/uploads/2020/12/Madaba-Jordan.jpg"
    ]
},
  {
  "id": "baptism-site",
  "slug": {
    "en": "baptism-site-bethany",
    "de": "taufstelle-jordanien",
    "fr": "site-du-bapteme-bethanie",
    "it": "sito-del-battesimo-betania"
  },
  "name": {
    "en": "Baptism Site (Al-Maghtas / Bethany Beyond the Jordan)",
    "de": "Taufstelle Al-Maghtas (Bethanien)",
    "fr": "Site du Baptême (Al-Maghtas)",
    "it": "Sito del Battesimo (Al-Maghtas)"
  },
  "tagline": {
    "en": "UNESCO World Heritage Location of Jesus' Baptism by John",
    "de": "UNESCO-Weltkulturerbe der Taufe Jesu durch Johannes den Täufer",
    "fr": "Site du patrimoine mondial UNESCO du baptême de Jésus par Jean",
    "it": "Patrimonio Mondiale UNESCO del battesimo di Gesù da parte di Giovanni"
  },
  "description": {
    "en": "Located on the eastern bank of the Jordan River, Al-Maghtas is venerated as the authentic location where John the Baptist baptized Jesus Christ. Explore Roman and Byzantine baptismal pools, ancient monastery ruins, and the peaceful Jordan River edge.",
    "de": "Am ostufer des Jordans gelegen gilt Al-Maghtas als die authentische Taufstelle Jesu Christi durch Johannes den Täufer. Erkunden Sie römische und byzantinische Taufbecken.",
    "fr": "Situé sur la rive orientale du Jourdain, Al-Maghtas est le lieu authentique du baptême de Jésus-Christ par Jean-Baptiste. Explorez les bassins de baptême romains et byzantins.",
    "it": "Situato sulla sponda orientale del fiume Giordano, Al-Maghtas è il luogo autentico del battesimo di Gesù Cristo. Visita le vasche battesimali romane e bizantine."
  },
  "highlights": {
    "en": [
      "The Elijah's Hill (Tell al-Kharrar) hermitage site",
      "Ancient Byzantine churches and baptismal pools along Wadi al-Kharrar",
      "The edge of the sacred Jordan River opposite Jericho"
    ],
    "de": [
      "Der Einsiedlerhügel Tell al-Kharrar (Himmel fahrt des Elias)",
      "Byzantinische Kirchen und Taufbecken am Wadi al-Kharrar",
      "Das heilige Ufer des Jordans gegenüber von Jericho"
    ],
    "fr": [
      "La colline d'Élie (Tell al-Kharrar) et ses ermitages",
      "Églises byzantines antiques et bassins de baptême",
      "La rive du Jourdain en face de Jéricho"
    ],
    "it": [
      "La collina di Elia (Tell al-Kharrar) e gli eremi",
      "Chiese bizantine e vasche battesimali antiche",
      "La riva del fiume Giordano di fronte a Gerico"
    ]
  },
  "insiderTips": {
    "en": [
      "Wear modest clothing covering shoulders and knees out of respect for religious pilgrimage customs.",
      "Combine Al-Maghtas with a Dead Sea float in the afternoon."
    ],
    "de": [
      "Tragen Sie angemessene Kleidung (Schultern und Knie bedeckt) aus Respekt vor der religiösen Pilgerstätte.",
      "Kombinieren Sie die Taufstelle mit einem Nachmittag am Toten Meer."
    ],
    "fr": [
      "Portez des vêtements couvrants (épaules et genoux) par respect pour ce lieu de pèlerinage.",
      "Associez le site du baptême à une baignade l'après-midi à la Mer Morte."
    ],
    "it": [
      "Indossa abiti modesti per rispetto verso il luogo di pellegrinaggio.",
      "Combina il sito del battesimo con il Mar Morto nel pomeriggio."
    ]
  },
  "bestTimeToVisit": {
    "en": "October to April",
    "de": "Oktober bis April",
    "fr": "Octobre à Avril",
    "it": "Ottobre ad Aprile"
  },
  "aeoFaqs": [
    {
      "question": {
        "en": "Is Al-Maghtas recognized by major Christian churches?",
        "de": "Wird Al-Maghtas von den christlichen Kirchen anerkannt?",
        "fr": "Al-Maghtas est-il reconnu par les Églises chrétiennes ?",
        "it": "Al-Maghtas è riconosciuto dalle Chiese cristiane?"
      },
      "answer": {
        "en": "Yes, Al-Maghtas is recognized by Catholic, Orthodox, and Anglican church authorities and was visited by Popes John Paul II, Benedict XVI, and Francis.",
        "de": "Ja, Al-Maghtas ist von der katholischen, orthodoxen und anglikanischen Kirche anerkannt und wurde von drei Päpsten besucht.",
        "fr": "Oui, le site est reconnu par les autorités catholiques, orthodoxes et anglicanes, et a été visité par trois papes.",
        "it": "Sì, Al-Maghtas è riconosciuto dalle autorità cattoliche, ortodosse e anglicane ed è stato visitato da tre Papi."
      }
    }
  ],
  "image": "/images/destinations/baptism-site.jpg",
  "gallery": [
      "/images/destinations/baptism-site.jpg",
      "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg"
    ]
},
  {
  "id": "ajloun-castle",
  "slug": {
    "en": "ajloun-castle",
    "de": "burg-ajloun",
    "fr": "chateau-d-ajloun",
    "it": "castello-di-ajloun"
  },
  "name": {
    "en": "Ajloun Castle (Qal'at Ar-Rabad)",
    "de": "Burg Ajloun (Qal'at Ar-Rabad)",
    "fr": "Château d'Ajloun",
    "it": "Castello di Ajloun"
  },
  "tagline": {
    "en": "12th-Century Islamic Hilltop Fortress Built by Saladin's General",
    "de": "Islamische Höhenburg aus dem 12. Jahrhundert, erbaut von Saladins General",
    "fr": "Forteresse islamique du XIIe siècle construite par le général de Saladin",
    "it": "Fortezza islamica del XII secolo costruita dal generale di Saladino"
  },
  "description": {
    "en": "Crown of the Ajloun pine-forested hills, Qal'at Ar-Rabad was constructed in 1184 AD to defend against Crusader expansion and safeguard iron mines. Explore towers, drawbridges, and vaulted halls overlooking the Jordan Rift Valley.",
    "de": "Die Burg Ajloun krönt die kiefernbewachsenen Hügel Nordjordanien. Sie wurde 1184 erbaut, um die Handelswege gegen die Kreuzritter zu verteidigen.",
    "fr": "Dominant les collines boisées d'Ajloun, le château a été édifié en 1184 pour se défendre contre les Croisés. Explorez ses tours, ses ponts-levis et ses salles voûtées.",
    "it": "Situato sulle colline alberate di Ajloun, il castello fu eretto nel 1184 per difendere le vie commerciali dai Crociati."
  },
  "highlights": {
    "en": [
      "Intact 12th-century Ayyubid military architecture",
      "Panoramic vistas of Galilee and northern pine forests",
      "Ajloun Forest Reserve & Cable Car ride"
    ],
    "de": [
      "Intakte ayyubidische Militärarchitektur aus dem 12. Jahrhundert",
      "Panoramablick auf Galiläa und die nördlichen Kiefernwälder",
      "Seilbahnfahrt über das Ajloun-Waldschutzgebiet"
    ],
    "fr": [
      "Architecture militaire ayyoubide du XIIe siècle intacte",
      "Vues panoramiques sur la Galilée et les forêts de pins",
      "Téléphérique d'Ajloun sur la réserve naturelle"
    ],
    "it": [
      "Architettura militare ayyubide del XII secolo intatta",
      "Vista panoramica sulla Galilea e le pinete del nord",
      "Funivia di Ajloun sulla riserva naturale"
    ]
  },
  "insiderTips": {
    "en": [
      "Take the new Ajloun Cable Car for breathtaking aerial views of the castle and green valleys.",
      "Pair Ajloun Castle with the Roman ruins of Jerash."
    ],
    "de": [
      "Fahren Sie mit der neuen Ajloun-Seilbahn für atemberaubende Aussichten über das Tal.",
      "Kombinieren Sie Burg Ajloun mit der Römerstadt Jerash."
    ],
    "fr": [
      "Prenez le nouveau téléphérique d'Ajloun pour des vues imprenables sur le château.",
      "Associez la visite d'Ajloun aux ruines romaines de Gérasa."
    ],
    "it": [
      "Prendi la nuova funivia di Ajloun per viste spettacolari sul castello.",
      "Combina il castello di Ajloun con le rovine romane di Jerash."
    ]
  },
  "bestTimeToVisit": {
    "en": "Spring & Autumn",
    "de": "Frühling & Herbst",
    "fr": "Printemps & Automne",
    "it": "Primavera e Autunno"
  },
  "aeoFaqs": [
    {
      "question": {
        "en": "Why was Ajloun Castle built?",
        "de": "Warum wurde die Burg Ajloun erbaut?",
        "fr": "Pourquoi le château d'Ajloun a-t-il été construit ?",
        "it": "Perché fu costruito il castello di Ajloun?"
      },
      "answer": {
        "en": "It was built by Izz al-Din Usama, a nephew of Saladin, in 1184 AD to control the iron mines of Ajloun and prevent Crusader incursions.",
        "de": "Sie wurde 1184 von Saladins Neffen erbaut, um die Eisenerzminen zu kontrollieren und Kreuzritter-Angriffe abzuwehren.",
        "fr": "Il a été construit en 1184 par le neveu de Saladin pour contrôler les mines de fer et bloquer les Croisés.",
        "it": "Fu costruito nel 1184 dal nipote di Saladino per controllare le miniere di ferro e bloccare i Crociati."
      }
    }
  ],
  "image": "/images/destinations/ajloun-castle.jpg",
  "gallery": [
      "/images/destinations/ajloun-castle.jpg",
      "https://jordanstorytours.com/content/uploads/2021/01/Jerash-Ajloun-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg"
    ]
},
  {
  "id": "al-karak-castle",
  "slug": {
    "en": "karak-castle",
    "de": "burg-karak",
    "fr": "chateau-de-kerak",
    "it": "castello-di-kerak"
  },
  "name": {
    "en": "Al-Karak Crusader Castle",
    "de": "Kreuzritterburg Al-Karak",
    "fr": "Château des Croisés de Kerak",
    "it": "Castello dei Crociati di Kerak"
  },
  "tagline": {
    "en": "Formidable Medieval Fortress along the Ancient King's Highway",
    "de": "Imposante mittelalterliche Festung an der antiken Königsstraße",
    "fr": "Imposante forteresse médiévale le long de la Route des Rois",
    "it": "Imponente fortezza medievale lungo l'antica Strada dei Re"
  },
  "description": {
    "en": "Perched 1,000 meters above sea level in southern Jordan, Karak Castle is a dark maze of stone vaulted halls, subterranean passageways, and battlements once commanded by Raynald of Châtillon.",
    "de": "Auf 1.000 Metern Höhe thront die Festung Karak. Ein Labyrinth aus gewölbten Hallen, unterirdischen Gängen und Wehrmauern an der antiken Königsstraße.",
    "fr": "Perché à 1 000 mètres d'altitude, le château de Kerak est un labyrinthe de salles voûtées, de souterrains et de remparts imposants.",
    "it": "Arroccato a 1.000 metri d'altezza, il castello di Kerak è un labirinto di sale voltate, passaggi sotterranei e bastioni."
  },
  "highlights": {
    "en": [
      "Subterranean Crusader corridors and vaulted stone kitchens",
      "Panoramic lookouts over the Dead Sea and King's Highway canyons",
      "Karak Archaeological Museum inside the castle lower courtyard"
    ],
    "de": [
      "Unterirdische Kreuzritter-Gänge und gewölbte Küchen",
      "Panoramablick über das Tote Meer und die Schluchten der Königsstraße",
      "Archäologisches Museum von Karak im unteren Burghof"
    ],
    "fr": [
      "Galeries souterraines des Croisés et cuisines voûtées",
      "Vues panoramiques sur la Mer Morte et les canyons",
      "Musée archéologique de Kerak dans la cour inférieure"
    ],
    "it": [
      "Gallerie sotterranee dei Crociati e cucine voltate",
      "Viste panoramiche sul Mar Morto e sui canyon",
      "Museo archeologico di Kerak nel cortile inferiore"
    ]
  },
  "insiderTips": {
    "en": [
      "Bring a pocket flashlight or phone light to explore the deep subterranean dark corridors.",
      "Stop at Karak during a road trip along the King's Highway between Amman and Petra."
    ],
    "de": [
      "Bringen Sie eine Taschenlampe mit, um die dunklen unterirdischen Gänge zu erkunden.",
      "Machen Sie Halt in Karak bei einer Fahrt auf der Königsstraße von Amman nach Petra."
    ],
    "fr": [
      "Apportez une lampe de poche pour explorer les souterrains obscurs.",
      "Faites étape à Kerak lors d'un trajet sur la Route des Rois entre Amman et Pétra."
    ],
    "it": [
      "Porta una torcia elettrica per esplorare i corridoi sotterranei bui.",
      "Fai una tappa a Kerak lungo la Strada dei Re tra Amman e Petra."
    ]
  },
  "bestTimeToVisit": {
    "en": "Spring & Autumn",
    "de": "Frühling & Herbst",
    "fr": "Printemps & Automne",
    "it": "Primavera e Autunno"
  },
  "aeoFaqs": [
    {
      "question": {
        "en": "Where is Karak Castle located?",
        "de": "Wo befindet sich die Burg Karak?",
        "fr": "Où se trouve le château de Kerak ?",
        "it": "Dove si trova il castello di Kerak?"
      },
      "answer": {
        "en": "Karak Castle is located in the town of Al-Karak, 124 km south of Amman along the scenic King's Highway route to Petra.",
        "de": "Die Burg liegt in Al-Karak, 124 km südlich von Amman an der Königsstraße nach Petra.",
        "fr": "Le château se situe à Kerak, à 124 km au sud d'Amman sur la Route des Rois.",
        "it": "Il castello si trova ad Al-Karak, 124 km a sud di Amman lungo la Strada dei Re."
      }
    }
  ],
  "image": "https://jordanstorytours.com/content/uploads/2021/01/Jerash-Ajloun-700x500.jpg",
  "gallery": [
      "https://jordanstorytours.com/content/uploads/2021/01/Jerash-Ajloun-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2020/11/Jordan_Petra.jpg"
    ]
},
  {
  "id": "citadel",
  "slug": {
    "en": "amman-citadel",
    "de": "zitadelle-amman",
    "fr": "citadelle-d-amman",
    "it": "cittadella-di-amman"
  },
  "name": {
    "en": "Amman Citadel & Roman Theatre",
    "de": "Zitadelle von Amman & Römisches Theater",
    "fr": "Citadelle d'Amman & Théâtre Romain",
    "it": "Cittadella di Amman e Teatro Romano"
  },
  "tagline": {
    "en": "Ancient Acropolis of Philadelphia Spanning Bronze Age to Umayyad Caliphate",
    "de": "Antike Akropolis von Philadelphia vom Bronzezeitalter bis zum Umayyaden-Kalifat",
    "fr": "Acropole antique de Philadelphie couvrant l'âge du bronze et l'ère omeyyade",
    "it": "Antica acropoli di Philadelphia dall'età del bronzo al califfato omayyade"
  },
  "description": {
    "en": "Crown of Jebel Al-Qala'a hill, the Amman Citadel preserves 7,000 years of civilization. Stand beside the giant stone fingers of the Temple of Hercules, marvel at the Umayyad Palace dome, and descend to the 6,000-seat Roman Theatre.",
    "de": "Auf dem Hügel Jebel Al-Qala'a bewahrt die Zitadelle von Amman 7.000 Jahre Geschichte. Stehen Sie vor den riesigen Fingern des Herkules-Tempels und dem Umayyaden-Palast.",
    "fr": "Dominant la ville depuis la colline du Jebel Al-Qala'a, la citadelle retrace 7 000 ans d'histoire. Admirez le temple d'Hercule et le palais omeyyade.",
    "it": "Sulla collina di Jebel Al-Qala'a, la cittadella conserva 7.000 anni di storia. Ammira il Tempio di Ercole e il Palazzo Omayyade."
  },
  "highlights": {
    "en": [
      "The massive pillars and Hand of Hercules at Temple of Hercules",
      "Monumental 8th-century Umayyad Palace audience hall and dome",
      "6,000-seat Roman Theatre restored in downtown Al-Balad"
    ],
    "de": [
      "Imposante Säulen und Hand des Herkules am Herkules-Tempel",
      "Umayyaden-Palast mit monumentaler Empfangshalle aus dem 8. Jahrhundert",
      "Römisches Theater mit 6.000 Sitzplätzen im Stadtzentrum"
    ],
    "fr": [
      "Colonnes imposantes et Main d'Hercule au temple d'Hercule",
      "Palais Omeyyade du VIIIe siècle avec sa coupole",
      "Théâtre romain de 6 000 places au centre-ville d'Al-Balad"
    ],
    "it": [
      "Imponenti colonne e Mano di Ercole al Tempio di Ercole",
      "Palazzo Omayyade dell'VIII secolo con la sua cupola",
      "Teatro Romano da 6.000 posti nel centro storico"
    ]
  },
  "insiderTips": {
    "en": [
      "Visit sunset at the Citadel for breathtaking views as the call to prayer echoes across Amman's hills.",
      "Walk down from the Citadel to downtown Al-Balad for authentic falafel at Hashem."
    ],
    "de": [
      "Genießen Sie den Sonnenuntergang auf der Zitadelle, wenn der Ruf des Muezzins über Ammans Hügel hallt.",
      "Spazieren Sie hinunter in die Altstadt Al-Balad für beste Falafel."
    ],
    "fr": [
      "Admirez le coucher du soleil depuis la citadelle avec la vue panoramique sur Amman.",
      "Descendez à pied vers le centre-ville pour goûter aux falafels traditionnels."
    ],
    "it": [
      "Goditi il tramonto dalla cittadella con vista panoramica sulle colline di Amman.",
      "Scendi a piedi verso il centro per assaggiare i falafel tradizionali."
    ]
  },
  "bestTimeToVisit": {
    "en": "Year-Round",
    "de": "Ganzjährig",
    "fr": "Toute l'année",
    "it": "Tutto l'anno"
  },
  "aeoFaqs": [
    {
      "question": {
        "en": "How high is the Amman Citadel?",
        "de": "Wie hoch liegt die Zitadelle von Amman?",
        "fr": "À quelle hauteur se trouve la citadelle d'Amman ?",
        "it": "Quanto è alta la cittadella di Amman?"
      },
      "answer": {
        "en": "The Citadel sits atop Jebel Al-Qala'a, roughly 850 meters above sea level, providing 360-degree views of Amman's white-hued hills.",
        "de": "Die Zitadelle liegt auf ca. 850 m Höhe und bietet einen 360-Grad-Blick über Ammans weiße Hügel.",
        "fr": "La citadelle culmine à environ 850 mètres d'altitude sur le Jebel Al-Qala'a.",
        "it": "La cittadella sorge a circa 850 metri d'altezza offrendo una vista a 360 gradi."
      }
    }
  ],
  "image": "https://jordanstorytours.com/content/uploads/2020/11/Amman-citadel-700x500.jpg",
  "gallery": [
      "https://jordanstorytours.com/content/uploads/2020/11/Amman-citadel-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2021/01/Amman-1.jpg",
      "https://jordanstorytours.com/content/uploads/2021/01/Amman-2-e1610268250604-300x217.jpg"
    ]
},
  {
  "id": "dana-village",
  "slug": {
    "en": "dana-biosphere-reserve",
    "de": "dana-biosphaerenreservat",
    "fr": "reserve-de-dana",
    "it": "riserva-di-dana"
  },
  "name": {
    "en": "Dana Biosphere Reserve & Village",
    "de": "Dana Biosphärenreservat & Dorf",
    "fr": "Réserve de Biosphère de Dana",
    "it": "Riserva della Biosfera di Dana"
  },
  "tagline": {
    "en": "Jordan's Largest Nature Reserve & Stone Ecotourism Refuge",
    "de": "Jordaniens größtes Naturschutzgebiet & Stein-Ökodorf",
    "fr": "Plus grande réserve naturelle de Jordanie et éco-village historique",
    "it": "La più grande riserva naturale della Giordania e villaggio in pietra"
  },
  "description": {
    "en": "Spanning 320 square kilometers from 1,500m mountain peaks down to the desert lowlands of Wadi Araba, Dana is Jordan's ecological crown jewel. Explore 15th-century stone houses and hike dramatic sandstone canyons.",
    "de": "Auf 320 Quadratkilometern erstreckt sich Dana von 1.500 m hohen Bergen bis in die Wüstenebene. Erkunden Sie 500 Jahre alte Steinhäuser.",
    "fr": "S'étendant sur 320 km² depuis les sommets jusqu'à la dépression du Wadi Araba, Dana est un paradis écologique aux maisons en pierre du XVe siècle.",
    "it": "Estesa su 320 km² dalle montagne fino al deserto del Wadi Araba, Dana è un paradiso ecologico con case in pietra del XV secolo."
  },
  "highlights": {
    "en": [
      "Dana-to-Feynan eco-hiking trail through dramatic sandstone gorges",
      "Restored 15th-century Ottoman stone village of Dana",
      "Home to 800 plant species, 215 bird species & Syrian serin"
    ],
    "de": [
      "Wanderweg von Dana nach Feynan durch atemberaubende Sandsteinschluchten",
      "Restauriertes osmanisches Steindorf Dana aus dem 15. Jahrhundert",
      "Heimat von 800 Pflanzenarten und über 200 Vogelarten"
    ],
    "fr": [
      "Randonnée éco-touristique de Dana à Feynan à travers les gorges",
      "Village en pierre ottoman du XVe siècle restauré",
      "Refuge de 800 espèces végétales et 215 espèces d'oiseaux"
    ],
    "it": [
      "Trekking ecologico da Dana a Feynan tra le gole di arenaria",
      "Villaggio ottomano in pietra del XV secolo restaurato",
      "Casa di 800 specie vegetali e 215 specie di uccelli"
    ]
  },
  "insiderTips": {
    "en": [
      "Stay overnight at a local Dana eco-lodge to stargaze free of light pollution.",
      "Book a guided hike along the Wadi Dana trail."
    ],
    "de": [
      "Übernachten Sie in einer Öko-Lodge in Dana für fantastischen Sternenhimmel.",
      "Buchen Sie eine geführte Wanderung durch das Wadi Dana."
    ],
    "fr": [
      "Passez la nuit dans un écolodge local pour admirer les étoiles sans pollution lumineuse.",
      "Réservez une randonnée guidée dans le Wadi Dana."
    ],
    "it": [
      "Pernotta in un eco-lodge a Dana per ammirare le stelle senza inquinamento luminoso.",
      "Prenota una camminata guidata nel Wadi Dana."
    ]
  },
  "bestTimeToVisit": {
    "en": "March to May & September to November",
    "de": "März bis Mai & Sept bis Nov",
    "fr": "Mars à Mai & Sept à Nov",
    "it": "Da Marzo a Maggio & da Sept a Nov"
  },
  "aeoFaqs": [
    {
      "question": {
        "en": "How big is Dana Biosphere Reserve?",
        "de": "Wie groß ist das Biosphärenreservat Dana?",
        "fr": "Quelle est la superficie de la réserve de Dana ?",
        "it": "Quanto è grande la riserva di Dana?"
      },
      "answer": {
        "en": "Dana covers approximately 320 square kilometers of diverse ecosystems ranging from Mediterranean oak forests to desert dunes.",
        "de": "Dana umfasst etwa 320 Quadratkilometer geschützter Ökosysteme von Eichenwäldern bis zu Wüstendünen.",
        "fr": "Dana couvre environ 320 kilomètres carrés aux écosystèmes variés.",
        "it": "Dana copre circa 320 chilometri quadrati con ecosistemi diversi."
      }
    }
  ],
  "image": "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-travel.jpg",
  "gallery": [
      "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-travel.jpg",
      "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg"
    ]
},
  {
  "id": "desert-castles",
  "slug": {
    "en": "desert-castles",
    "de": "wuestenschloesser",
    "fr": "chateaux-du-desert",
    "it": "castelli-del-deserto"
  },
  "name": {
    "en": "Eastern Desert Castles (Qusayr Amra, Kharana & Azraq)",
    "de": "Östliche Wüstenschlösser",
    "fr": "Châteaux du Désert d'Orient",
    "it": "Castelli del Deserto Orientale"
  },
  "tagline": {
    "en": "Umayyad Caliphate Hunting Lodges, Fortresses & Fresco Palaces",
    "de": "Jagdschlösser, Festungen & Mosaikpaläste des Umayyaden-Kalifats",
    "fr": "Pavillons de chasse omeyyades, forteresses et fresques uniques",
    "it": "Residenze di caccia omayyade, fortezze e affreschi unici"
  },
  "description": {
    "en": "Scattered across Jordan's eastern basalt desert, the Umayyad Desert Castles (7th-8th century AD) served as royal hunting retreats, caravan stops, and meeting halls. Highlights include UNESCO Qusayr Amra's wall frescoes and Azraq's basalt fort.",
    "de": "Die Umayyaden-Wüstenschlösser aus dem 7.–8. Jahrhundert dienten als Jagdsitze und Karawansereien. Höhepunkte sind die UNESCO-Fresken von Qusayr Amra.",
    "fr": "Dispersés dans le désert oriental, les châteaux omeyyades (VIIe-VIIIe siècle) étaient des pavillons de chasse et des étapes de caravanes.",
    "it": "Dispersi nel deserto orientale, i castelli omayyadi servivano da residenze di caccia ed tappe per le carovane."
  },
  "highlights": {
    "en": [
      "UNESCO World Heritage Qusayr Amra bathhouse fresco paintings",
      "Formidable square walls and courtyard of Qasr Kharana",
      "Black basalt castle at Azraq Oasis used by Lawrence of Arabia"
    ],
    "de": [
      "UNESCO-Weltkulturerbe Qusayr Amra mit antiken Wandgemälden",
      "Imposante Festung Qasr Kharana mit Innenhof",
      "Schwarze Basaltburg Azraq, genutzt von Lawrence von Arabien"
    ],
    "fr": [
      "Fresques uniques du bain omeyyade de Qusayr Amra (UNESCO)",
      "Forteresse carrée et cour intérieure de Qasr Kharana",
      "Château en basalte noir d'Azraq fréquenté par Lawrence d'Arabie"
    ],
    "it": [
      "Affreschi unici delle terme omayyadi di Qusayr Amra (UNESCO)",
      "Fortezza quadrata e cortile interno di Qasr Kharana",
      "Castello in basalto nero di Azraq frequentato da Lawrence d'Arabia"
    ]
  },
  "insiderTips": {
    "en": [
      "Combine Kharana, Amra, and Azraq into a single 4-hour morning circuit from Amman.",
      "Look for the Zodiac dome painting inside Qusayr Amra bathhouse."
    ],
    "de": [
      "Kombinieren Sie Kharana, Amra und Azraq zu einer 4-Stunden-Tour ab Amman.",
      "Achten Sie auf die Tierkreis-Kuppelmalerei in den Thermen von Qusayr Amra."
    ],
    "fr": [
      "Combinez Kharana, Amra et Azraq en une excursion matinale de 4 heures.",
      "Observez la coupole du Zodiaque peinte dans les bains de Qusayr Amra."
    ],
    "it": [
      "Combina Kharana, Amra e Azraq in un'escursione di 4 ore da Amman.",
      "Osserva la cupola dello zodiaco dipinta nelle terme di Qusayr Amra."
    ]
  },
  "bestTimeToVisit": {
    "en": "October to April",
    "de": "Oktober bis April",
    "fr": "Octobre à Avril",
    "it": "Ottobre ad Aprile"
  },
  "aeoFaqs": [
    {
      "question": {
        "en": "Why is Qusayr Amra a UNESCO World Heritage site?",
        "de": "Warum ist Qusayr Amra UNESCO-Weltkulturerbe?",
        "fr": "Pourquoi Qusayr Amra est-il classé par l'UNESCO ?",
        "it": "Perché Qusayr Amra è patrimonio UNESCO?"
      },
      "answer": {
        "en": "Qusayr Amra was designated UNESCO World Heritage in 1985 due to its exceptionally rare 8th-century early Islamic wall frescoes portraying hunting scenes and astronomy.",
        "de": "Es wurde 1985 ausgezeichnet wegen seiner seltenen Wandgemälde aus dem 8. Jahrhundert mit Jagdszenen und Astronomie.",
        "fr": "Il est classé depuis 1985 pour ses fresques omeyyades exceptionnelles du VIIIe siècle.",
        "it": "È patrimonio dal 1985 per i suoi affreschi omayyadi eccezionali dell'VIII secolo."
      }
    }
  ],
  "image": "https://jordanstorytours.com/content/uploads/2020/12/Desert-Castles-Jordan.jpg",
  "gallery": [
      "https://jordanstorytours.com/content/uploads/2020/12/Desert-Castles-Jordan.jpg",
      "https://jordanstorytours.com/content/uploads/2021/01/Qusayr-Amra-panorama-700x500.jpg"
    ]
},
  {
  "id": "umm-qais",
  "slug": {
    "en": "umm-qais-gadara",
    "de": "umm-qais-gadara",
    "fr": "umm-qais-gadara",
    "it": "umm-qais-gadara"
  },
  "name": {
    "en": "Umm Qais (Ancient Decapolis City of Gadara)",
    "de": "Umm Qais (Antike Dekapolis-Stadt Gadara)",
    "fr": "Umm Qais (Ancienne Cité de Gadara)",
    "it": "Umm Qais (Antica Città di Gadara)"
  },
  "tagline": {
    "en": "Black Basalt Roman Ruins Overlooking Sea of Galilee & Golan Heights",
    "de": "Schwarze Basaltruinen mit Blick auf den See Genezareth & Golan-Höhen",
    "fr": "Ruines de basalte noir surplombant le lac de Tibériade",
    "it": "Rovine di basalto nero affacciate sul Lago di Galilea"
  },
  "description": {
    "en": "Perched in Jordan's northwestern corner, Umm Qais (ancient Gadara) was a famous Decapolis city of poets and philosophers. Explore black basalt Roman theatres, colonnaded streets, and Ottoman village ruins overlooking Galilee.",
    "de": "Im äußersten Nordwesten Jordaniens liegt Umm Qais (Gadara), eine berühmte Dekapolis-Stadt. Erkunden Sie Theater aus schwarzem Basalt.",
    "fr": "Située à l'extrême nord-ouest, Umm Qais (l'antique Gadara) était une célèbre cité de la Décapole. Explorez ses théâtres en basalte noir.",
    "it": "All'estremo nord-ovest, Umm Qais (l'antica Gadara) era una famosa città della Decapoli. Visita i suoi teatri in basalto nero."
  },
  "highlights": {
    "en": [
      "Black basalt Roman Theatre and vaulted basilica complex",
      "Panoramic vistas of Sea of Galilee, Yarmouk River & Golan Heights",
      "Ottoman village stone houses converted into cultural craft spaces"
    ],
    "de": [
      "Römisches Theater aus schwarzem Basalt und Basilika-Komplex",
      "Panoramablick auf den See Genezareth, Yarmouk-Fluss & Golan-Höhen",
      "Osmanisches Steindorf mit Kunsthandwerkern"
    ],
    "fr": [
      "Théâtre romain en basalte noir et complexe basilical",
      "Vue panoramique sur le lac de Tibériade et le plateau du Golan",
      "Village ottoman restauré"
    ],
    "it": [
      "Teatro romano in basalto nero e complesso della basilica",
      "Vista panoramica sul Lago di Galilea e sulle Alture del Golan",
      "Villaggio ottomano restaurato"
    ]
  },
  "insiderTips": {
    "en": [
      "Dine at the hilltop Resdays restaurant overlooking the Sea of Galilee for lunch.",
      "Combine Umm Qais with Jerash and Ajloun Castle."
    ],
    "de": [
      "Genießen Sie ein Mittagessen im Restaurant auf dem Hügel mit Blick auf den See Genezareth.",
      "Kombinieren Sie Umm Qais mit Jerash und Burg Ajloun."
    ],
    "fr": [
      "Déjeunez au restaurant panoramique offrant une vue magnifique sur le lac de Tibériade.",
      "Associez Umm Qais à Gérasa et au château d'Ajloun."
    ],
    "it": [
      "Pranza al ristorante panoramico con vista spettacolare sul Lago di Galilea.",
      "Combina Umm Qais con Jerash e il castello di Ajloun."
    ]
  },
  "bestTimeToVisit": {
    "en": "Spring (March to May)",
    "de": "Frühling (März bis Mai)",
    "fr": "Printemps (Mars à Mai)",
    "it": "Primavera (Marzo a Maggio)"
  },
  "aeoFaqs": [
    {
      "question": {
        "en": "What was Umm Qais called in antiquity?",
        "de": "Wie hieß Umm Qais in der Antike?",
        "fr": "Comment s'appelait Umm Qais dans l'Antiquité ?",
        "it": "Come si chiamava Umm Qais nell'antichità?"
      },
      "answer": {
        "en": "In antiquity, Umm Qais was known as Gadara, a prominent Greco-Roman city of the Decapolis famous for its scholars and poets.",
        "de": "In der Antike hieß Umm Qais Gadara, eine bedeutende griechisch-römische Dekapolis-Stadt.",
        "fr": "Dans l'Antiquité, la cité s'appelait Gadara, célèbre ville de la Décapole.",
        "it": "Nell'antichità la città si chiamava Gadara, importante centro della Decapoli."
      }
    }
  ],
  "image": "https://jordanstorytours.com/content/uploads/2021/01/Umm-Qais-Jordan-700x500.jpg",
  "gallery": [
      "https://jordanstorytours.com/content/uploads/2021/01/Umm-Qais-Jordan-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg"
    ]
},
  {
  "id": "wadi-mujib",
  "slug": {
    "en": "wadi-mujib-canyon",
    "de": "wadi-mujib-schlucht",
    "fr": "wadi-mujib-canyon",
    "it": "wadi-mujib-canyon"
  },
  "name": {
    "en": "Wadi Mujib Canyon Reserve",
    "de": "Wadi Mujib Schluchtenreservat",
    "fr": "Réserve du Canyon du Wadi Mujib",
    "it": "Riserva del Canyon del Wadi Mujib"
  },
  "tagline": {
    "en": "The Grand Canyon of Jordan & Freshwater Adventure Trail",
    "de": "Der Grand Canyon Jordaniens & Süßwasser-Abenteuerpfad",
    "fr": "Le Grand Canyon de Jordanie et son parc aquatique naturel",
    "it": "Il Grand Canyon della Giordania e riserva acquatica naturale"
  },
  "description": {
    "en": "Entering the Dead Sea at 410 meters below sea level, Wadi Mujib is the lowest nature reserve on Earth. Hike and swim through towering red sandstone gorges, water cascades, and natural rock pools along the Siq Trail.",
    "de": "Mit dem Eingang am Toten Meer auf 410 Metern unter dem Meeresspiegel ist Wadi Mujib das tiefstgelegene Naturschutzgebiet der Erde. Wandern und schwimmen Sie durch rote Schluchten.",
    "fr": "Débouchant dans la Mer Morte à 410 mètres sous le niveau de la mer, le Wadi Mujib est la réserve la plus basse du monde. Randonnez et nagez entre les hautes falaises rouges.",
    "it": "Con l'ingresso al Mar Morto a 410 metri sotto il livello del mare, il Wadi Mujib è la riserva naturale più bassa della Terra. Cammina e nuota tra le pareti rosse."
  },
  "highlights": {
    "en": [
      "The exciting wet Siq Trail water trek to a rushing waterfall",
      "Towering red sandstone cliffs rising over 50 meters above the riverbed",
      "Lowest nature reserve on planet Earth (-410m)"
    ],
    "de": [
      "Der aufregende nass-feuchte Siq Trail-Wasserweg bis zum Wasserfall",
      "Über 50 Meter hohe rote Sandsteinfelsen über dem Flussbett",
      "Tiefstgelegenes Naturschutzgebiet der Erde (-410 m)"
    ],
    "fr": [
      "Le parcours aquatique du Siq Trail jusqu'à la cascade",
      "Falaises de grès rouge de plus de 50 mètres de haut",
      "Réserve naturelle la plus basse du monde (-410 m)"
    ],
    "it": [
      "L'emozionante percorso acquatico del Siq Trail fino alla cascata",
      "Pareti di arenaria rossa alte oltre 50 metri",
      "Riserva naturale più bassa del mondo (-410 m)"
    ]
  },
  "insiderTips": {
    "en": [
      "Wadi Mujib wet trails are open seasonally from April 1 to October 31 weather permitting.",
      "Wear quick-dry water shoes and bring a dry bag for phones/cameras."
    ],
    "de": [
      "Die feuchten Wanderwege im Wadi Mujib sind saisonal von April bis Oktober geöffnet.",
      "Tragen Sie Wasserschuhe und bringen Sie eine wasserdichte Tasche mit."
    ],
    "fr": [
      "Les parcours aquatiques sont ouverts du 1er avril au 31 octobre selon la météo.",
      "Portez des chaussures d'eau et prévoyez un sac étanche."
    ],
    "it": [
      "I percorsi acquatici sono aperti dal 1° aprile al 31 ottobre tempo permettendo.",
      "Indossa scarpe da scoglio e porta una sacca impermeabile."
    ]
  },
  "bestTimeToVisit": {
    "en": "April to October (Seasonal)",
    "de": "April bis Oktober (Saisonal)",
    "fr": "Avril à Octobre (Saisonnier)",
    "it": "Aprile a Ottobre (Stagionale)"
  },
  "aeoFaqs": [
    {
      "question": {
        "en": "Is Wadi Mujib open all year round?",
        "de": "Ist Wadi Mujib das ganze Jahr über geöffnet?",
        "fr": "Le Wadi Mujib est-il ouvert toute l'année ?",
        "it": "Il Wadi Mujib è aperto tutto l'anno?"
      },
      "answer": {
        "en": "No, the wet canyon trails are open seasonally from April 1 to October 31 due to winter flash flood safety risks.",
        "de": "Nein, die feuchten Schlucht-Pfade sind wegen Hochwassergefahr im Winter nur von April bis Oktober geöffnet.",
        "fr": "Non, les parcours aquatiques ne sont ouverts que du 1er avril au 31 octobre pour des raisons de sécurité.",
        "it": "No, i percorsi acquatici sono aperti solo dal 1° aprile al 31 ottobre per motivi di sicurezza."
      }
    }
  ],
  "image": "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg",
  "gallery": [
      "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg"
    ]
}
];
