export interface TourGalleryItem {
  id: string;
  url: string;
  alt: { en: string; de?: string; fr?: string; it?: string };
  caption?: { en: string; de?: string; fr?: string; it?: string };
  sortOrder: number;
  rightsStatus: 'VERIFIED_OWNED' | 'LEGACY_SITE_ASSET';
}

export interface Tour {
  id: string;
  slug: { en: string; de?: string; fr?: string; it?: string };
  title: { en: string; de?: string; fr?: string; it?: string };
  subtitle: { en: string; de?: string; fr?: string; it?: string };
  category: 'Classical' | 'Luxury' | 'Budget' | 'Biblical' | 'Day Tour' | 'Islamic';
  storyCollection: string;
  durationDays: number;
  durationNights: number;
  startingPriceUSD: number;
  highlights: { en: string[]; de?: string[]; fr?: string[]; it?: string[] };
  route: string[];
  inclusions: { en: string[]; de?: string[]; fr?: string[]; it?: string[] };
  exclusions: { en: string[]; de?: string[]; fr?: string[]; it?: string[] };
  itinerary: {
    day: number;
    title: { en: string; de?: string; fr?: string; it?: string };
    description: { en: string; de?: string; fr?: string; it?: string };
    meals?: string;
    accommodation?: string;
  }[];
  heroImage: string;
  gallery: TourGalleryItem[];
  masterTourId?: string;
  entranceFeesStatus?: 'INCLUDED' | 'EXCLUDED' | 'PARTIALLY_INCLUDED' | 'CONDITIONAL';
  driverGuideType?: 'ENGLISH_SPEAKING_DRIVER' | 'DRIVER_AND_LOCAL_GUIDES' | 'PRIVATE_TOUR_GUIDE';
  mealsSummary?: { en: string; de?: string; fr?: string; it?: string };
  parityStatus?: 'PARITY_VERIFIED' | 'NEEDS_OWNER_DECISION';
  faqs?: {
    question: { en: string; de?: string; fr?: string; it?: string };
    answer: { en: string; de?: string; fr?: string; it?: string };
  }[];
}

export const TOURS_DATA: Tour[] = [
  // --- BUDGET TOURS (4) ---
  {
    id: "budget-tour-1",
    slug: { en: "budget-tour-1-petra-dead-sea-jerash", de: "budget-tour-1-petra-totes-meer-jerash", fr: "circuit-budget-1-petra-mer-morte-jerash", it: "tour-budget-1-petra-mar-morto-jerash" },
    title: { en: "Budget Tour 1 — Petra, Dead Sea & Jerash", de: "Budget-Tour 1 — Petra, Totes Meer & Jerash", fr: "Circuit Budget 1 — Pétra, Mer Morte & Gérasa", it: "Tour Budget 1 — Petra, Mar Morto e Jerash" },
    subtitle: { en: "Jordan's Essential Icons in 3 Unforgettable Days", de: "Jordaniens wichtigste Highlights in 3 unvergesslichen Tagen", fr: "Les icônes essentielles de la Jordanie en 3 jours inoubliables", it: "Le icone fondamentali della Giordania in 3 giorni indimenticabili" },
    category: "Budget",
    storyCollection: "Essential Story",
    durationDays: 3,
    durationNights: 2,
    startingPriceUSD: 399,
    highlights: {
      en: ["Full day exploring Petra Rose City", "Floating in the mineral-rich Dead Sea", "Walk through Roman Jerash"],
      de: ["Ganztägige Erkundung von Petra", "Baden im mineralreichen Toten Meer", "Spaziergang durch das römische Jerash"],
      fr: ["Journée complète à la découverte de la Cité Rose de Pétra", "Baignade flottante dans la Mer Morte", "Visite des ruines romaines de Gérasa"],
      it: ["Giornata intera a Petra la Città Rosa", "Bagno galleggiante nel Mar Morto ricchissimo di minerali", "Passeggiata tra le rovine romane di Jerash"]
    },
    route: ["Amman", "Petra", "Dead Sea", "Jerash"],
    inclusions: {
      en: ["Airport pickup and drop-off", "Free Jordan Entry Visa assistance", "English-speaking driver & AC vehicle", "2 Nights 3-star hotel accommodation", "Daily breakfast & Petra dinner"],
      de: ["Flughafentransfer hin und zurück", "Kostenlose Visum-Unterstützung", "Englischsprachiger Fahrer & Klima-Fahrzeug", "2 Nächte 3-Sterne-Hotelunterkunft", "Tägliches Frühstück & Petra-Abendessen"],
      fr: ["Transfert aéroport aller-retour", "Assistance visa gratuit pour la Jordanie", "Chauffeur anglophone & véhicule climatisé", "2 nuits en hôtel 3 étoiles", "Petit-déjeuner quotidien & dîner à Pétra"],
      it: ["Trasferimento da e per l'aeroporto", "Assistenza visto gratuito per la Giordania", "Autista parlante inglese e veicolo climatizzato", "2 notti in hotel 3 stelle", "Colazione giornaliera e cena a Petra"]
    },
    exclusions: {
      en: ["Entrance fees", "International flights", "Tips"],
      de: ["Eintrittsgelder", "Flüge", "Trinkgelder"],
      fr: ["Frais d'entrée sur les sites", "Vols internationaux", "Pourboires"],
      it: ["Biglietti d'ingresso", "Voli internazionali", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival → Transfer to Petra", de: "Ankunft → Transfer nach Petra", fr: "Arrivée → Transfert vers Pétra", it: "Arrivo → Trasferimento a Petra" }, description: { en: "Welcome to Jordan! Pickup from Queen Alia International Airport and scenic transfer to Petra.", de: "Willkommen in Jordanien! Flughafentransfer nach Petra.", fr: "Bienvenue en Jordanie ! Accueil à l'aéroport d'Amman et transfert panoramique vers Pétra.", it: "Benvenuti in Giordania! Accoglienza all'aeroporto di Amman e trasferimento panoramico a Petra." }, meals: "Dinner", accommodation: "3-Star Hotel in Petra" },
      { day: 2, title: { en: "Petra Exploration → Dead Sea → Amman", de: "Petra Erkundung → Totes Meer → Amman", fr: "Exploration de Pétra → Mer Morte → Amman", it: "Esplorazione di Petra → Mar Morto → Amman" }, description: { en: "Walk through the Siq to Al-Khazneh Treasury. Afternoon Dead Sea floating before continuing to Amman.", de: "Petra Erkundung und Nachmittags-Bad im Toten Meer.", fr: "Traversée du Siq jusqu'au Trésor (Al-Khazneh). Baignade l'après-midi à la Mer Morte avant de continuer vers Amman.", it: "Passeggiata nel Siq fino al Tesoro (Al-Khazneh). Bagno pomeridiano nel Mar Morto prima di proseguire per Amman." }, meals: "Breakfast", accommodation: "3-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman City Tour → Ancient Jerash → Departure", de: "Amman Stadtrundfahrt → Antikes Jerash → Abreise", fr: "Visite d'Amman → Gérasa Antique → Départ", it: "Tour di Amman → Antica Jerash → Partenza" }, description: { en: "Explore Amman Citadel & Roman Theater, then visit Jerash before final airport transfer.", de: "Amman Zitadelle und Römerstadt Jerash vor der Abreise.", fr: "Visite de la Citadelle d'Amman et du Théâtre Romain, puis découverte de Gérasa avant le transfert à l'aéroport.", it: "Visita della Cittadella di Amman e del Teatro Romano, poi esplorazione di Jerash prima del trasferimento finale." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2020/11/Petra-Jordan-tours-700x500.jpg",
    gallery: [
      { id: "bt1-1", url: "https://jordanstorytours.com/content/uploads/2020/11/Petra-Jordan-tours-700x500.jpg", alt: { en: "Petra Treasury Al-Khazneh facade", de: "Fassade des Schatzhauses Al-Khazneh in Petra" }, caption: { en: "Original legacy media: Petra Rose City Treasury", de: "Originales Medien-Asset: Das Schatzhaus von Petra" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "bt1-2", url: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg", alt: { en: "Dead Sea mineral floating", de: "Schwebendes Bad im salzreichen Toten Meer" }, caption: { en: "Original legacy media: Floating at the Dead Sea", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "bt1-3", url: "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg", alt: { en: "Jerash Roman Forum & Colonnade", de: "Römisches Forum in Jerash" }, caption: { en: "Original legacy media: Ancient Roman Jerash", de: "Originales Medien-Asset: Römisches Jerash" }, sortOrder: 3, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "bt1-4", url: "https://images.unsplash.com/photo-1579606032824-2c70034a7138?auto=format&fit=crop&w=1200&q=80", alt: { en: "Petra Monastery Ad-Deir facade", de: "Fassade des Klosters Ad-Deir in Petra" }, caption: { en: "High-resolution view of Petra Monastery", de: "Hochauflösende Ansicht des Klosters in Petra" }, sortOrder: 4, rightsStatus: "VERIFIED_OWNED" }
    ],
    faqs: [
      {
        question: {
          en: "What key landmarks are visited on Budget Tour 1?",
          de: "Welche Hauptsehenswürdigkeiten werden auf der Budget-Tour 1 besucht?",
          fr: "Quels sont les sites majeurs visités lors du Circuit Budget 1 ?",
          it: "Quali monumenti si visitano nel Tour Budget 1?"
        },
        answer: {
          en: "Budget Tour 1 covers Jordan's essential trio in 3 days: the ancient rose city of Petra, floating in the mineral-rich Dead Sea, and the Roman ruins of Jerash, along with Amman Citadel.",
          de: "Die Budget-Tour 1 umfasst Jordaniens wichtigste Highlights in 3 Tagen: die Felsenstadt Petra, das Tote Meer, Jerash und die Zitadelle von Amman.",
          fr: "Le Circuit Budget 1 couvre le trio incontournable en 3 jours : la cité rose de Pétra, la Mer Morte et les ruines romaines de Gérasa.",
          it: "Il Tour Budget 1 copre il trio fondamentale in 3 giorni: l'antica città di Petra, il Mar Morto e le rovine romane di Jerash."
        }
      },
      {
        question: {
          en: "What driver and vehicle setup is provided?",
          de: "Welches Fahrzeug und welcher Fahrer stehen zur Verfügung?",
          fr: "Quel type de véhicule et de chauffeur est fourni ?",
          it: "Che tipo di veicolo e autista sono previsti?"
        },
        answer: {
          en: "You travel in a private, air-conditioned vehicle with a dedicated English-speaking driver throughout the entire 3-day itinerary.",
          de: "Sie reisen in einem privaten, klimatisierten Fahrzeug mit einem erfahrenen englischsprachigen Fahrer während der gesamten 3 Tage.",
          fr: "Vous voyagerez dans un véhicule privé et climatisé avec un chauffeur anglophone dédié pendant les 3 jours.",
          it: "Viaggerai in un veicolo privato climatizzato con un autista esperto parlante inglese per tutti i 3 giorni."
        }
      },
      {
        question: {
          en: "Are entrance fees included in the starting price?",
          de: "Sind Eintrittsgelder im Startpreis enthalten?",
          fr: "Les droits d'entrée sont-ils inclus dans le prix de départ ?",
          it: "I biglietti d'ingresso sono inclusi nel prezzo di partenza?"
        },
        answer: {
          en: "Entrance fees to Petra and Jerash are excluded from the base price. We strongly recommend purchasing the Jordan Pass online prior to arrival to cover all site entries and visa fees.",
          de: "Eintrittsgelder für Petra und Jerash sind nicht im Grundpreis enthalten. Wir empfehlen den vorherigen Kauf des Jordan Pass.",
          fr: "Les billets d'entrée à Pétra et Jérash ne sont pas inclus. Nous recommandons d'acheter le Jordan Pass avant le départ.",
          it: "I biglietti per Petra e Jerash sono esclusi dal prezzo base. Consigliamo di acquistare il Jordan Pass prima dell'arrivo."
        }
      }
    ]
  },

  {
    id: "budget-tour-2",
    slug: { en: "budget-tour-2-amman-jerash-madaba-petra-dead-sea", de: "budget-tour-2-amman-jerash-madaba-petra-totes-meer", fr: "circuit-budget-2-amman-jerash-madaba-petra-mer-morte", it: "tour-budget-2-amman-jerash-madaba-petra-mar-morto" },
    title: { en: "Budget Tour 2 — Amman, Jerash, Madaba, Petra & Dead Sea", de: "Budget-Tour 2 — Amman, Jerash, Madaba, Petra & Totes Meer", fr: "Circuit Budget 2 — Amman, Gérasa, Madaba, Pétra & Mer Morte", it: "Tour Budget 2 — Amman, Jerash, Madaba, Petra e Mar Morto" },
    subtitle: { en: "Comprehensive 3-Day Journey Across North & South Wonders", de: "Umfassende 3-Tage-Reise durch den Norden & Süden", fr: "Grand itinéraire de 3 jours reliant les merveilles du Nord et du Sud", it: "Itinerario completo di 3 giorni tra le meraviglie del Nord e del Sud" },
    category: "Budget",
    storyCollection: "Essential Story",
    durationDays: 3,
    durationNights: 2,
    startingPriceUSD: 449,
    highlights: {
      en: ["Amman Citadel & Roman Jerash", "Madaba Mosaic Map & Mount Nebo", "Petra Treasury & Dead Sea Lunch Float"],
      de: ["Zitadelle von Amman & Römisches Jerash", "Mosaikkarte von Madaba & Berg Nebo", "Petra Schatzhaus & Totes Meer Mittagessen"],
      fr: ["Citadelle d'Amman & Gérasa la Romaine", "Carte de Madaba en mosaïque & Mont Nébo", "Trésor de Pétra & Déjeuner-baignade à la Mer Morte"],
      it: ["Cittadella di Amman & Jerash Romana", "Mappa Mosaico di Madaba & Monte Nebo", "Tesoro di Petra & Bagno con Pranzo al Mar Morto"]
    },
    route: ["Amman", "Jerash", "Madaba", "Mount Nebo", "Dead Sea", "Petra"],
    inclusions: {
      en: ["Private AC transfers with English-speaking driver", "2 Nights 3-star hotel", "Daily breakfast, Dead Sea lunch & Petra dinner", "Free Entry Visa assistance"],
      de: ["Klimatisierte Privat-Transfers mit Fahrer", "2 Nächte 3-Sterne-Hotel", "Tägliches Frühstück, Totes Meer Mittagessen & Petra Abendessen", "Kostenlose Visum-Unterstützung"],
      fr: ["Transfers privés climatisés avec chauffeur anglophone", "2 nuits en hôtel 3 étoiles", "Petit-déjeuner quotidien, déjeuner à la Mer Morte & dîner à Pétra", "Assistance visa gratuit"],
      it: ["Trasferimenti privati con autista in auto climatizzata", "2 notti in hotel 3 stelle", "Colazione giornaliera, pranzo al Mar Morto e cena a Petra", "Assistenza visto gratuito"]
    },
    exclusions: {
      en: ["Entrance fees", "Flights", "Tips"],
      de: ["Eintrittsgelder", "Flüge", "Trinkgelder"],
      fr: ["Frais d'entrée", "Vols", "Pourboires"],
      it: ["Biglietti d'ingresso", "Voli", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Airport → Amman City → Jerash → Amman", de: "Flughafen → Amman → Jerash → Amman", fr: "Aéroport → Amman Ville → Gérasa → Amman", it: "Aeroporto → Amman → Jerash → Amman" }, description: { en: "Airport pickup, tour of Amman Citadel and Roman Jerash.", de: "Empfang am Flughafen, Amman Zitadelle und Jerash.", fr: "Accueil à l'aéroport, visite de la Citadelle d'Amman et des ruines romaines de Gérasa.", it: "Accoglienza in aeroporto, tour della Cittadella di Amman e di Jerash romana." }, meals: "None", accommodation: "3-Star Hotel in Amman" },
      { day: 2, title: { en: "Amman → Madaba → Mount Nebo → Dead Sea → Petra", de: "Amman → Madaba → Berg Nebo → Totes Meer → Petra", fr: "Amman → Madaba → Mont Nébo → Mer Morte → Pétra", it: "Amman → Madaba → Monte Nebo → Mar Morto → Petra" }, description: { en: "Visit Madaba, Mount Nebo sanctuary, and Dead Sea resort float before arriving in Petra.", de: "Besuch von Madaba, Berg Nebo und Bad am Toten Meer.", fr: "Visite de Madaba, du sanctuaire du Mont Nébo et baignade au complexe de la Mer Morte avant d'arriver à Pétra.", it: "Visita di Madaba, del santuario del Monte Nebo e bagno al resort del Mar Morto prima dell'arrivo a Petra." }, meals: "Breakfast, Lunch & Dinner", accommodation: "3-Star Hotel in Petra" },
      { day: 3, title: { en: "Petra Exploration → Airport Departure", de: "Petra Erkundung → Flughafentransfer", fr: "Exploration de Pétra → Départ", it: "Esplorazione di Petra → Partenza" }, description: { en: "Morning guided walk through Petra Siq to the Treasury, followed by airport drop-off.", de: "Morgendliche Petra-Erkundung und Flughafentransfer.", fr: "Marche matinale à Pétra à travers le Siq jusqu'au Trésor, puis transfert direct à l'aéroport.", it: "Passeggiata mattutina a Petra nel Siq fino al Tesoro, seguita dal trasferimento in aeroporto." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg",
    gallery: [
      { id: "bt2-1", url: "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg", alt: { en: "Dead Sea floating resort experience", de: "Baden im Toten Meer" }, caption: { en: "Original legacy media: Dead Sea resort float", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "bt2-2", url: "https://jordanstorytours.com/content/uploads/2020/12/Petra-travel-e1608043798711-600x600.jpg", alt: { en: "Petra Rose City landscape", de: "Felsenstadt Petra" }, caption: { en: "Original legacy media: Petra sandstone carvings", de: "Originales Medien-Asset: Felsenstadt Petra" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "bt2-3", url: "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg", alt: { en: "Jerash Roman Forum", de: "Forum in Jerash" }, caption: { en: "Original legacy media: Jerash Forum", de: "Originales Medien-Asset: Jerash Forum" }, sortOrder: 3, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "How does Budget Tour 2 differ from Budget Tour 1?",
          de: "Wie unterscheidet sich die Budget-Tour 2 von der Budget-Tour 1?",
          fr: "Quelle est la différence entre le Circuit Budget 2 et le Circuit Budget 1 ?",
          it: "Come si differenzia il Tour Budget 2 dal Tour Budget 1?"
        },
        answer: {
          en: "Budget Tour 2 adds Madaba (the Mosaic City) and Mount Nebo to the itinerary, plus an included resort lunch at the Dead Sea.",
          de: "Die Budget-Tour 2 erweitert das Programm um Madaba (Mosaikstadt) und den Berg Nebo sowie ein inbegriffenes Resort-Mittagessen am Toten Meer.",
          fr: "Le Circuit Budget 2 ajoute Madaba (la cité des mosaïques) et le Mont Nébo, ainsi qu'un déjeuner inclus à la Mer Morte.",
          it: "Il Tour Budget 2 include Madaba (la città dei mosaici) e il Monte Nebo, oltre a un pranzo incluso al Mar Morto."
        }
      },
      {
        question: {
          en: "Which meals are included on Budget Tour 2?",
          de: "Welche Mahlzeiten sind bei der Budget-Tour 2 enthalten?",
          fr: "Quels repas sont inclus dans le Circuit Budget 2 ?",
          it: "Quali pasti sono inclusi nel Tour Budget 2?"
        },
        answer: {
          en: "Daily breakfast at your hotel, a resort lunch at the Dead Sea on Day 2, and dinner in Petra on Day 1 are included.",
          de: "Tägliches Frühstück im Hotel, ein Resort-Mittagessen am Toten Meer an Tag 2 sowie ein Abendessen in Petra an Tag 1 sind enthalten.",
          fr: "Le petit-déjeuner quotidien, un déjeuner au complexe de la Mer Morte au Jour 2 et le dîner à Pétra au Jour 1 sont inclus.",
          it: "La colazione giornaliera, il pranzo al resort del Mar Morto al Giorno 2 e la cena a Petra al Giorno 1 sono inclusi."
        }
      }
    ]
  },

  {
    id: "budget-tour-3",
    slug: { en: "budget-tour-3-amman-jerash-ajloun-madaba-petra-dead-sea", de: "budget-tour-3-amman-jerash-ajloun-madaba-petra-totes-meer", fr: "circuit-budget-3-amman-jerash-ajloun-madaba-petra-mer-morte", it: "tour-budget-3-amman-jerash-ajloun-madaba-petra-mar-morto" },
    title: { en: "Budget Tour 3 — 4-Day Complete Northern & Southern Highlights", de: "Budget-Tour 3 — 4-Tage Komplett-Highlights Jordanien", fr: "Circuit Budget 3 — 4 Jours Incontournables Nord & Sud", it: "Tour Budget 3 — 4 Giorni Completi Nord e Sud" },
    subtitle: { en: "4 Days Exploring Roman Ruins, Crusader Castles, Petra & Dead Sea", de: "4 Tage Römerstädte, Burgen, Petra & Totes Meer", fr: "4 jours à la découverte des cités romaines, châteaux des Croisés, Pétra & la Mer Morte", it: "4 giorni tra rovine romane, castelli dei crociati, Petra e Mar Morto" },
    category: "Budget",
    storyCollection: "Essential Story",
    durationDays: 4,
    durationNights: 3,
    startingPriceUSD: 520,
    highlights: {
      en: ["Jerash Roman Ruins & Ajloun Castle", "Madaba Mosaics & Mount Nebo Viewpoint", "Full Day Petra Exploration", "Dead Sea Floating Resort"],
      de: ["Römisches Jerash & Festung Ajloun", "Mosaike in Madaba & Berg Nebo", "Ganzer Tag in Petra", "Totes Meer Schwebebad"],
      fr: ["Ruines romaines de Gérasa & Château d'Ajloun", "Mosaïques de Madaba & Vue du Mont Nébo", "Journée complète d'exploration à Pétra", "Baignade au complexe de la Mer Morte"],
      it: ["Rovine romane di Jerash e Castello di Ajloun", "Mosaici di Madaba e belvedere del Monte Nebo", "Intera giornata a Petra", "Relax al resort del Mar Morto"]
    },
    route: ["Amman", "Jerash", "Ajloun", "Madaba", "Mount Nebo", "Petra", "Dead Sea"],
    inclusions: {
      en: ["Private vehicle with English-speaking driver", "3 Nights 3-star hotel accommodations", "Daily breakfast & 2 dinners", "Visa assistance"],
      de: ["Privatfahrzeug mit Fahrer", "3 Nächte in 3-Sterne-Hotels", "Tägliches Frühstück & 2 Abendessen", "Visum-Hilfe"],
      fr: ["Véhicule privé avec chauffeur anglophone", "3 nuits en hôtel 3 étoiles", "Petit-déjeuner quotidien & 2 dîners", "Assistance visa"],
      it: ["Veicolo privato con autista parlante inglese", "3 notti in hotel 3 stelle", "Colazione giornaliera e 2 cene", "Assistenza visto"]
    },
    exclusions: {
      en: ["Entrance fees", "Flights", "Tips"],
      de: ["Eintrittsgelder", "Flüge", "Trinkgelder"],
      fr: ["Frais d'entrée", "Vols", "Pourboires"],
      it: ["Biglietti d'ingresso", "Voli", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival → Amman → Jerash & Ajloun Castle", de: "Ankunft → Amman → Jerash & Burg Ajloun", fr: "Arrivée → Amman → Gérasa & Château d'Ajloun", it: "Arrivo → Amman → Jerash e Castello di Ajloun" }, description: { en: "Pickup from airport, full day exploring Jerash & Ajloun Castle.", de: "Flughafentransfer und Tour durch Jerash & Ajloun.", fr: "Accueil à l'aéroport et journée consacrée à la visite de Gérasa et de la forteresse d'Ajloun.", it: "Accoglienza in aeroporto e giornata dedicata a Jerash e al Castello di Ajloun." }, meals: "None", accommodation: "3-Star Hotel in Amman" },
      { day: 2, title: { en: "Amman → Madaba → Mount Nebo → Petra", de: "Amman → Madaba → Berg Nebo → Petra", fr: "Amman → Madaba → Mont Nébo → Pétra", it: "Amman → Madaba → Monte Nebo → Petra" }, description: { en: "Visit St. George Mosaic in Madaba, Mount Nebo sanctuary, scenic Kings Highway drive to Petra.", de: "Mosaikstadt Madaba, Berg Nebo und Panoramafahrt nach Petra.", fr: "Visite de la mosaïque de Saint-Georges à Madaba, du sanctuaire du Mont Nébo et route panoramique vers Pétra.", it: "Visita del mosaico di San Giorgio a Madaba, del santuario del Monte Nebo e strada panoramica dei Re fino a Petra." }, meals: "Breakfast & Dinner", accommodation: "3-Star Hotel in Petra" },
      { day: 3, title: { en: "Petra Full Day Exploration", de: "Petra Ganztägige Erkundung", fr: "Journée complète d'exploration de Pétra", it: "Intera giornata di esplorazione a Petra" }, description: { en: "Walk through the Siq to Treasury, Royal Tombs, and Monastery.", de: "Petra Schatzhaus, Königsgräber und Kloster.", fr: "Découverte de Pétra : traversée du Siq, le Trésor, les Tombeaux Royaux et le Monastère Ad-Deir.", it: "Esplorazione di Petra attraverso il Siq, il Tesoro, le Tombe Reali e il Monastero." }, meals: "Breakfast & Dinner", accommodation: "3-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra → Dead Sea Resort Float → Airport", de: "Petra → Totes Meer Bad → Flughafen", fr: "Pétra → Baignade à la Mer Morte → Aéroport", it: "Petra → Bagno al Mar Morto → Aeroporto" }, description: { en: "Morning Dead Sea floating & mineral mud spa before final airport transfer.", de: "Totes Meer Schwebebad und Flughafentransfer.", fr: "Baignade matinale dans la Mer Morte et soin à la boue minérale avant le transfert final à l'aéroport.", it: "Bagno mattutino nel Mar Morto con fanghi minerali prima del trasferimento finale in aeroporto." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg",
    gallery: [
      { id: "bt3-1", url: "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg", alt: { en: "Jerash Greco-Roman Colonnade", de: "Römische Säulenstraße in Jerash" }, caption: { en: "Original legacy media: Roman Jerash", de: "Originales Medien-Asset: Jerash" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "bt3-2", url: "https://jordanstorytours.com/content/uploads/2020/11/Petra-Jordan-tours-700x500.jpg", alt: { en: "Petra Treasury", de: "Schatzhaus in Petra" }, caption: { en: "Original legacy media: Petra Rose City", de: "Originales Medien-Asset: Petra" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "bt3-3", url: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg", alt: { en: "Dead Sea floating", de: "Baden im Toten Meer" }, caption: { en: "Original legacy media: Dead Sea Float", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 3, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What highlights are covered on the 4-Day Northern & Southern Tour?",
          de: "Welche Highlights werden auf der 4-Tages-Tour durch Norden und Süden abgedeckt?",
          fr: "Quels sont les temps forts couverts par ce circuit de 4 jours ?",
          it: "Quali attrazioni principali copre questo tour di 4 giorni?"
        },
        answer: {
          en: "Budget Tour 3 explores Roman Jerash, Ajloun Crusader Castle, Madaba mosaics, Mount Nebo, a full day inside Petra, and Dead Sea resort floating.",
          de: "Die Budget-Tour 3 erkundet Jerash, Burg Ajloun, Madaba, Berg Nebo, einen vollen Tag in Petra und das Tote Meer.",
          fr: "Le Circuit Budget 3 explore Gérasa, le château d'Ajloun, Madaba, le Mont Nébo, une journée complète à Pétra et la baignade à la Mer Morte.",
          it: "Il Tour Budget 3 esplora Jerash, il Castello di Ajloun, Madaba, il Monte Nebo, una giornata intera a Petra e il bagno nel Mar Morto."
        }
      },
      {
        question: {
          en: "How much walking is required in Petra and Jerash?",
          de: "Wie viel Fußweg ist in Petra und Jerash erforderlich?",
          fr: "Combien de marche est nécessaire à Pétra et Jérash ?",
          it: "Quanta camminata è richiesta a Petra e Jerash?"
        },
        answer: {
          en: "Moderate walking is expected: approximately 4-5 hours of walking inside Petra Rose City and 2 hours across Jerash Roman ruins.",
          de: "Moderate Fußwege: ca. 4-5 Stunden in Petra und 2 Stunden in den römischen Ruinen von Jerash.",
          fr: "Marche modérée : environ 4 à 5 heures de marche à Pétra et 2 heures dans les ruines romaines de Jérash.",
          it: "Camminata moderata: circa 4-5 ore a Petra e 2 ore tra le rovine romane di Jerash."
        }
      }
    ]
  },

  {
    id: "budget-tour-4",
    slug: { en: "budget-tour-4-petra-wadi-rum-dead-sea", de: "budget-tour-4-petra-wadi-rum-totes-meer", fr: "circuit-budget-4-petra-wadi-rum-mer-morte", it: "tour-budget-4-petra-wadi-rum-mar-morto" },
    title: { en: "Budget Tour 4 — Petra, Wadi Rum Desert & Dead Sea", de: "Budget-Tour 4 — Petra, Wadi Rum Wüste & Totes Meer", fr: "Circuit Budget 4 — Pétra, Désert du Wadi Rum & Mer Morte", it: "Tour Budget 4 — Petra, Deserto del Wadi Rum e Mar Morto" },
    subtitle: { en: "4 Days of Desert Safari, Bedouin Camp Stars & Dead Sea Float", de: "4 Tage Wüstensafari, Beduinencamp & Totes Meer", fr: "4 jours de safari dans le désert, nuit étoilée bédouine & Mer Morte", it: "4 giorni di safari nel deserto, campo beduino sotto le stelle e Mar Morto" },
    category: "Budget",
    storyCollection: "Desert Story",
    durationDays: 4,
    durationNights: 3,
    startingPriceUSD: 560,
    highlights: {
      en: ["Bedouin Camp overnight under stars", "2-Hour 4x4 Jeep Safari in Wadi Rum", "Full day in Petra Rose City", "Dead Sea Floating"],
      de: ["Übernachtung im Beduinencamp", "2-Stunden 4x4-Jeepsafari im Wadi Rum", "Ganzer Tag in Petra", "Baden im Toten Meer"],
      fr: ["Nuitée en campement bédouin sous les étoiles", "Safari en 4x4 de 2 heures au Wadi Rum", "Journée complète à Pétra", "Baignade flottante à la Mer Morte"],
      it: ["Pernottamento in campo beduino sotto le stelle", "Safari in 4x4 di 2 ore nel Wadi Rum", "Giornata intera a Petra la Città Rosa", "Bagno galleggiante nel Mar Morto"]
    },
    route: ["Amman", "Petra", "Wadi Rum", "Dead Sea"],
    inclusions: {
      en: ["Private AC transfers", "2 Nights 3-star hotel + 1 Night Wadi Rum Bedouin Camp", "Daily breakfast, Petra dinner & Wadi Rum Zarb dinner", "2-Hour 4x4 Jeep Safari"],
      de: ["Privat-Transfers", "2 Nächte 3-Sterne-Hotel + 1 Nacht Beduinencamp", "Tägliches Frühstück & 2 Abendessen (inkl. Beduinen Zarb)", "2-Stunden Jeep-Safari"],
      fr: ["Transferts privés climatisés", "2 nuits en hôtel 3 étoiles + 1 nuit en camp bédouin", "Petit-déjeuner quotidien & 2 dîners (dont le Zarb traditionnel)", "Safari 4x4 de 2 heures"],
      it: ["Trasferimenti privati con aria condizionata", "2 notti in hotel 3 stelle + 1 notte in campo beduino", "Colazione giornaliera e 2 cene (incluso il barbecue Zarb)", "Safari in 4x4 di 2 ore"]
    },
    exclusions: {
      en: ["Entrance fees", "Flights", "Tips"],
      de: ["Eintrittsgelder", "Flüge", "Trinkgelder"],
      fr: ["Frais d'entrée", "Vols", "Pourboires"],
      it: ["Biglietti d'ingresso", "Voli", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival → Transfer to Petra", de: "Ankunft → Transfer nach Petra", fr: "Arrivée → Transfert vers Pétra", it: "Arrivo → Trasferimento a Petra" }, description: { en: "Airport pickup and drive to Petra.", de: "Flughafentransfer nach Petra.", fr: "Accueil à l'aéroport et route vers Pétra.", it: "Accoglienza in aeroporto e trasferimento a Petra." }, meals: "Dinner", accommodation: "3-Star Hotel in Petra" },
      { day: 2, title: { en: "Petra Exploration → Wadi Rum Desert", de: "Petra Erkundung → Wadi Rum Wüste", fr: "Exploration de Pétra → Désert du Wadi Rum", it: "Esplorazione di Petra → Deserto del Wadi Rum" }, description: { en: "Explore Petra Treasury, then transfer to Wadi Rum for sunset & Bedouin Zarb dinner.", de: "Petra Schatzhaus und Abend-Transfer ins Wadi Rum.", fr: "Visite du Trésor de Pétra, puis transfert au Wadi Rum pour le coucher de soleil et le dîner Zarb.", it: "Visita del Tesoro di Petra, poi trasferimento nel Wadi Rum per il tramonto e la cena Zarb." }, meals: "Breakfast & Zarb Dinner", accommodation: "Wadi Rum Bedouin Camp" },
      { day: 3, title: { en: "Wadi Rum 4x4 Jeep Safari → Dead Sea", de: "Wadi Rum 4x4 Jeep Safari → Totes Meer", fr: "Safari 4x4 au Wadi Rum → Mer Morte", it: "Safari 4x4 nel Wadi Rum → Mar Morto" }, description: { en: "Morning 4x4 Jeep safari through red sand dunes, then transfer to Dead Sea.", de: "Morgendliche Jeep-Safari und Transfer zum Toten Meer.", fr: "Safari matinal en 4x4 dans les dunes de sable rouge, puis route vers la Mer Morte.", it: "Safari mattutino in 4x4 tra le dune di sabbia rossa, poi trasferimento al Mar Morto." }, meals: "Breakfast", accommodation: "Dead Sea Resort" },
      { day: 4, title: { en: "Dead Sea Float → Airport Departure", de: "Totes Meer Schwebebad → Abreise", fr: "Baignade à la Mer Morte → Départ", it: "Bagno al Mar Morto → Partenza" }, description: { en: "Morning Dead Sea floating, then final transfer to Queen Alia Airport.", de: "Entspannung am Toten Meer und Flughafentransfer.", fr: "Baignade matinale dans la Mer Morte puis transfert final à l'aéroport d'Amman.", it: "Bagno mattutino nel Mar Morto e trasferimento finale all'aeroporto di Amman." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg",
    gallery: [
      { id: "bt4-1", url: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg", alt: { en: "Wadi Rum Bedouin desert camp", de: "Beduinencamp im Wadi Rum" }, caption: { en: "Original legacy media: Wadi Rum Camp", de: "Originales Medien-Asset: Wadi Rum Camp" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "bt4-2", url: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-travel-600x600.jpg", alt: { en: "Wadi Rum red dunes", de: "Rote Dünen im Wadi Rum" }, caption: { en: "Original legacy media: Wadi Rum Red Dunes", de: "Originales Medien-Asset: Wadi Rum Dünen" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "bt4-3", url: "https://jordanstorytours.com/content/uploads/2020/11/Petra-Jordan-tours-700x500.jpg", alt: { en: "Petra Treasury facade", de: "Fassade des Schatzhauses in Petra" }, caption: { en: "Original legacy media: Petra Rose City", de: "Originales Medien-Asset: Petra" }, sortOrder: 3, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What makes Budget Tour 4's desert experience special?",
          de: "Was macht das Wüstenerlebnis der Budget-Tour 4 besonders?",
          fr: "Qu'est-ce qui rend l'expérience dans le désert du Circuit Budget 4 spéciale ?",
          it: "Cosa rende speciale l'esperienza nel deserto del Tour Budget 4?"
        },
        answer: {
          en: "Budget Tour 4 includes an authentic overnight stay in a Wadi Rum Bedouin camp under the stars, a 2-hour 4x4 Jeep Safari across red dunes, and a traditional underground Zarb BBQ dinner.",
          de: "Die Budget-Tour 4 beinhaltet eine authentische Übernachtung im Beduinencamp unter Sternen, eine 2-Stunden 4x4 Jeep-Safari und ein traditionelles Zarb-BBQ.",
          fr: "Le Circuit Budget 4 inclut une nuitée authentique dans un campement bedouin au Wadi Rum sous les étoiles, un safari 4x4 de 2h et un dîner Zarb.",
          it: "Il Tour Budget 4 include un pernottamento in campo beduino sotto le stelle nel Wadi Rum, un safari in 4x4 di 2 ore e una cena Zarb."
        }
      },
      {
        question: {
          en: "What type of camp accommodation is provided in Wadi Rum?",
          de: "Welche Unterkunft im Wüstencamp wird im Wadi Rum bereitgestellt?",
          fr: "Quel type d'hébergement est fourni au campement du Wadi Rum ?",
          it: "Che tipo di alloggio è previsto nel campo nel Wadi Rum?"
        },
        answer: {
          en: "You will stay in a comfortable Bedouin tent equipped with private bathroom facilities, hot water showers, and clean bedding.",
          de: "Sie übernachten in einem komfortablen Beduinenzelt mit eigenem Bad, Warmwasserdusche und sauberen Betten.",
          fr: "Vous séjournerez dans une tente bédouine confortable équipée d'une salle de bain privée avec eau chaude et de literie propre.",
          it: "Soggiornerai in una confortevole tenda beduina dotata di bagno privato con doccia calda e biancheria pulita."
        }
      }
    ]
  },

  // --- CLASSICAL TOURS (2) ---
  {
    id: "jordan-classic-1",
    slug: { en: "jordan-story-classic-tour-1", de: "jordan-story-klassik-tour-1", fr: "circuit-jordan-story-classique-1", it: "tour-jordan-story-classico-1" },
    title: { en: "Jordan Story Classic — Petra, Wadi Rum & Dead Sea", de: "Jordan Story Klassik — Petra, Wadi Rum & Totes Meer", fr: "Jordan Story Classique — Pétra, Wadi Rum & Mer Morte", it: "Jordan Story Classico — Petra, Wadi Rum e Mar Morto" },
    subtitle: { en: "The Grand Journey Across Jordan's Wonders", de: "Die große Reise durch Jordaniens Weltwunder", fr: "Le grand voyage à travers les merveilles de la Jordanie", it: "Il grande viaggio attraverso le meraviglie della Giordania" },
    category: "Classical",
    storyCollection: "Complete Story",
    durationDays: 5,
    durationNights: 4,
    startingPriceUSD: 699,
    highlights: {
      en: ["Bedouin camp overnight under Wadi Rum stars", "4x4 Jeep Safari through desert dunes", "Petra Treasury & Monastery", "Dead Sea wellness float"],
      de: ["Übernachtung im Beduinencamp", "4x4-Jeep-Safari im Wadi Rum", "Petra Schatzhaus & Kloster", "Totes Meer Wellness-Erlebnis"],
      fr: ["Nuit en camp bédouin sous les étoiles du Wadi Rum", "Safari 4x4 dans les dunes du désert", "Trésor & Monastère de Pétra", "Baignade bien-être à la Mer Morte"],
      it: ["Pernottamento in campo beduino sotto le stelle", "Safari in 4x4 tra le dune del deserto", "Tesoro e Monastero di Petra", "Relax al Mar Morto"]
    },
    route: ["Amman", "Jerash", "Petra", "Wadi Rum", "Dead Sea"],
    inclusions: {
      en: ["All private transfers with English-speaking driver", "3 Nights 4-star hotels + 1 Night Wadi Rum Bedouin Camp", "Daily breakfast, Petra dinner, Wadi Rum Zarb dinner", "2-Hour Wadi Rum 4x4 Jeep Tour"],
      de: ["Alle privaten Transfers mit Fahrer", "3 Nächte in 4-Sterne-Hotels + 1 Nacht Wüstencamp", "Tägliches Frühstück & Abendessen", "2-stündige 4x4 Jeep-Tour im Wadi Rum"],
      fr: ["Transfers privés avec chauffeur anglophone", "3 nuits en hôtel 4 étoiles + 1 nuit au campement bédouin", "Petit-déjeuner quotidien, dîner à Pétra & dîner Zarb au Wadi Rum", "Circuit 4x4 de 2h au Wadi Rum"],
      it: ["Trasferimenti privati con autista parlante inglese", "3 notti in hotel 4 stelle + 1 notte nel campo beduino", "Colazione giornaliera, cena a Petra e cena Zarb nel Wadi Rum", "Tour in 4x4 di 2 ore nel Wadi Rum"]
    },
    exclusions: {
      en: ["Entrance fees", "International flights", "Tips"],
      de: ["Eintrittsgelder", "Flüge", "Trinkgelder"],
      fr: ["Frais d'entrée", "Vols internationaux", "Pourboires"],
      it: ["Biglietti d'ingresso", "Voli internazionali", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman", fr: "Arrivée à Amman", it: "Arrivo ad Amman" }, description: { en: "Airport assistance and transfer to hotel in Amman.", de: "Flughafentransfer zum Hotel in Amman.", fr: "Accueil à l'aéroport et transfert à votre hôtel 4 étoiles à Amman.", it: "Accoglienza in aeroporto e trasferimento all'hotel 4 stelle ad Amman." }, meals: "None", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Amman → Jerash → Ajloun Castle → Amman", de: "Amman → Jerash → Burg Ajloun → Amman", fr: "Amman → Gérasa → Château d'Ajloun → Amman", it: "Amman → Jerash → Castello di Ajloun → Amman" }, description: { en: "Full day tour of Jerash and Ajloun Castle.", de: "Ganztagestour durch Jerash und die Festung Ajloun.", fr: "Journée d'excursion à Gérasa la Romaine et la forteresse d'Ajloun.", it: "Tour di un'intera giornata a Jerash e al Castello di Ajloun." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman → King's Highway → Madaba → Mount Nebo → Petra", de: "Amman → Königsstraße → Madaba → Berg Nebo → Petra", fr: "Amman → Route des Rois → Madaba → Mont Nébo → Pétra", it: "Amman → Strada dei Re → Madaba → Monte Nebo → Petra" }, description: { en: "Scenic journey along the King's Highway visiting Madaba mosaic map and Mount Nebo.", de: "Fahrt auf der Königsstraße mit Stopps in Madaba und am Berg Nebo.", fr: "Voyage pittoresque le long de la Route des Rois avec arrêts à Madaba et au Mont Nébo.", it: "Viaggio panoramico lungo la Strada dei Re con soste a Madaba e al Monte Nebo." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Full Day → Wadi Rum Desert Camp", de: "Petra Ganztag → Wadi Rum Wüstencamp", fr: "Pétra Journée Complète → Désert du Wadi Rum", it: "Petra Intera Giornata → Deserto del Wadi Rum" }, description: { en: "Morning exploring Petra. Sunset transfer to Wadi Rum for traditional Bedouin Zarb dinner.", de: "Morgens Petra. Transfer ins Wadi Rum zum Beduinen-Abendessen.", fr: "Matinée à Pétra. Transfert au coucher du soleil vers le Wadi Rum pour le dîner bédouin Zarb.", it: "Mattinata a Petra. Trasferimento al tramonto nel Wadi Rum per la cena beduina Zarb." }, meals: "Breakfast & Zarb Dinner", accommodation: "Martian Luxury Camp in Wadi Rum" },
      { day: 5, title: { en: "Wadi Rum 4x4 Jeep → Dead Sea → Departure", de: "Wadi Rum 4x4 Jeep → Totes Meer → Abreise", fr: "Wadi Rum 4x4 → Mer Morte → Départ", it: "Wadi Rum 4x4 → Mar Morto → Partenza" }, description: { en: "Morning Jeep tour across reddish dunes, floating in the Dead Sea, then airport drop-off.", de: "Jeep-Wüstensafari, Entspannung am Toten Meer, danach Flughafentransfer.", fr: "Safari matinal en 4x4 dans les dunes, baignade flottante à la Mer Morte, puis transfert à l'aéroport.", it: "Safari mattutino in 4x4 tra le dune, bagno al Mar Morto, poi trasferimento in aeroporto." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2020/11/Jordan_Petra.jpg",
    gallery: [
      { id: "jc1-1", url: "https://jordanstorytours.com/content/uploads/2020/11/Jordan_Petra.jpg", alt: { en: "Petra Treasury Al-Khazneh original site photo", de: "Original-Foto des Schatzhauses in Petra" }, caption: { en: "Original legacy media: Petra Rose City entrance", de: "Originales Medien-Asset: Eingang zur Felsenstadt Petra" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "jc1-2", url: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg", alt: { en: "Wadi Rum desert camp", de: "Wadi Rum Beduinencamp" }, caption: { en: "Original legacy media: Wadi Rum Night Stay", de: "Originales Medien-Asset: Übernachtung im Wadi Rum" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "jc1-3", url: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg", alt: { en: "Dead Sea mineral floating", de: "Baden im Toten Meer" }, caption: { en: "Original legacy media: Dead Sea Float", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 3, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What destinations are included in the 5-Day Classic Jordan Tour?",
          de: "Welche Reiseziele sind in der 5-Tage Klassik Jordanien Tour enthalten?",
          fr: "Quelles destinations sont incluses dans le Circuit Classique 5 Jours ?",
          it: "Quali destinazioni sono incluse nel Tour Classico di 5 Giorni?"
        },
        answer: {
          en: "This complete 5-day itinerary covers Amman, Jerash, Ajloun Castle, Madaba, Mount Nebo, full day in Petra Rose City, overnight Wadi Rum Bedouin camp, and Dead Sea floating.",
          de: "Dieses 5-Tage-Programm umfasst Amman, Jerash, Burg Ajloun, Madaba, Berg Nebo, Petra, Beduinencamp in Wadi Rum und das Tote Meer.",
          fr: "Ce circuit de 5 jours couvre Amman, Gérasa, Ajloun, Madaba, Mont Nébo, Pétra, le désert du Wadi Rum et la Mer Morte.",
          it: "Questo itinerario di 5 giorni copre Amman, Jerash, Ajloun, Madaba, Monte Nebo, Petra, Wadi Rum e Mar Morto."
        }
      },
      {
        question: {
          en: "What hotel category is provided for the Classic Series?",
          de: "Welche Hotelkategorie wird für die Klassik-Serie angeboten?",
          fr: "Quelle catégorie d'hôtel est fournie pour la Série Classique ?",
          it: "Quale categoria di hotel è prevista per la Serie Classica?"
        },
        answer: {
          en: "You will stay in handpicked 4-star hotels in Amman and Petra, plus a desert camp in Wadi Rum.",
          de: "Sie übernachten in ausgewählten 4-Sterne-Hotels in Amman und Petra sowie in einem Wüstencamp im Wadi Rum.",
          fr: "Vous séjournerez dans des hôtels 4 étoiles sélectionnés à Amman et Pétra, ainsi que dans un campement au Wadi Rum.",
          it: "Soggiornerai in hotel 4 stelle selezionati ad Amman e Petra, oltre al campo beduino nel Wadi Rum."
        }
      }
    ]
  },

  {
    id: "jordan-classic-2",
    slug: { en: "jordan-story-classic-tour-2-7-days", de: "jordan-story-klassik-tour-2-7-tage", fr: "circuit-jordan-story-classique-2-7-jours", it: "tour-jordan-story-classico-2-7-giorni" },
    title: { en: "Jordan Story Classic 2 — 7-Day Grand Expedition", de: "Jordan Story Klassik 2 — 7-Tage Große Jordanien Expedition", fr: "Jordan Story Classique 2 — Grande Expédition de 7 Jours", it: "Jordan Story Classico 2 — Grande Spedizione di 7 Giorni" },
    subtitle: { en: "Complete 7-Day Immersion from Roman North to Red Sea Aqaba", de: "Vollständige 7-Tage-Reise vom römischen Norden bis nach Aqaba", fr: "Immersion complète de 7 jours du Nord romain à la Mer Rouge d'Aqaba", it: "Immersione completa di 7 giorni dal Nord romano al Mar Rosso di Aqaba" },
    category: "Classical",
    storyCollection: "Grand Story",
    durationDays: 7,
    durationNights: 6,
    startingPriceUSD: 899,
    highlights: {
      en: ["Full day Petra Treasury & Monastery", "Wadi Rum 4x4 Jeep Safari & Martian Camp", "Dead Sea Floating & Aqaba Red Sea Coastal Resort", "Jerash, Ajloun, Madaba & Mount Nebo"],
      de: ["Ganzer Tag in Petra", "Wadi Rum 4x4 Jeep Safari & Beduinencamp", "Totes Meer & Aqaba Rotes Meer Strandresort", "Jerash, Ajloun, Madaba & Berg Nebo"],
      fr: ["Journée complète à Pétra (Trésor & Monastère)", "Safari 4x4 au Wadi Rum & Campement Martien", "Mer Morte & Séjour balnéaire à Aqaba sur la Mer Rouge", "Gérasa, Ajloun, Madaba & Mont Nébo"],
      it: ["Giornata intera a Petra (Tesoro e Monastero)", "Safari in 4x4 nel Wadi Rum e Campo Martiano", "Mar Morto e Resort sulla spiaggia di Aqaba sul Mar Rosso", "Jerash, Ajloun, Madaba e Monte Nebo"]
    },
    route: ["Amman", "Jerash", "Ajloun", "Madaba", "Mount Nebo", "Petra", "Wadi Rum", "Aqaba", "Dead Sea"],
    inclusions: {
      en: ["Private AC vehicle with driver", "5 Nights 4-Star Hotels + 1 Night Wadi Rum Camp", "Daily breakfast & 4 dinners", "2-Hour 4x4 Jeep Safari"],
      de: ["Klimatisierte Privat-Fahrzeug mit Fahrer", "5 Nächte in 4-Sterne-Hotels + 1 Nacht Wüstencamp", "Tägliches Frühstück & 4 Abendessen", "2-Stunden Jeep Safari"],
      fr: ["Véhicule privé climatisé avec chauffeur", "5 nuits en hôtels 4 étoiles + 1 nuit au désert", "Petit-déjeuner quotidien & 4 dîners", "Safari 4x4 de 2h au Wadi Rum"],
      it: ["Veicolo privato climatizzato con autista", "5 notti in hotel 4 stelle + 1 notte nel deserto", "Colazione giornaliera e 4 cene", "Safari in 4x4 di 2 ore nel Wadi Rum"]
    },
    exclusions: {
      en: ["Entrance fees", "Flights", "Tips"],
      de: ["Eintrittsgelder", "Flüge", "Trinkgelder"],
      fr: ["Frais d'entrée", "Vols", "Pourboires"],
      it: ["Biglietti d'ingresso", "Voli", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman", fr: "Arrivée à Amman", it: "Arrivo ad Amman" }, description: { en: "VIP airport assistance and hotel transfer.", de: "Flughafentransfer zum Hotel.", fr: "Assistance VIP à l'aéroport et transfert à l'hôtel.", it: "Assistenza VIP in aeroporto e trasferimento in hotel." }, meals: "None", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Amman → Jerash → Ajloun Castle → Amman", de: "Amman → Jerash → Burg Ajloun → Amman", fr: "Amman → Gérasa → Château d'Ajloun → Amman", it: "Amman → Jerash → Castello di Ajloun → Amman" }, description: { en: "Explore Roman Jerash and Saladin's Ajloun fortress.", de: "Entdeckung von Jerash und Festung Ajloun.", fr: "Exploration des ruines de Gérasa et de la forteresse d'Ajloun.", it: "Esplorazione delle rovine di Jerash e della fortezza di Ajloun." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Madaba → Mount Nebo → Kerak Castle → Petra", de: "Madaba → Berg Nebo → Burg Karak → Petra", fr: "Madaba → Mont Nébo → Château de Kerak → Pétra", it: "Madaba → Monte Nebo → Castello di Kerak → Petra" }, description: { en: "Byzantine mosaics, Mount Nebo sanctuary, and Crusader castle.", de: "Mosaikstadt Madaba, Berg Nebo und Kreuzfahrerburg Karak.", fr: "Mosaïques byzantines de Madaba, sanctuaire du Mont Nébo et château croisé de Kerak.", it: "Mosaici bizantini di Madaba, santuario del Monte Nebo e castello crociato di Kerak." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Full Day Exploration → Wadi Rum", de: "Petra Ganztag → Wadi Rum", fr: "Pétra Journée Complète → Wadi Rum", it: "Petra Intera Giornata → Wadi Rum" }, description: { en: "Marvel at the Treasury and Monastery, then sunset transfer to Wadi Rum.", de: "Petra Erkundung und Transfer ins Wadi Rum.", fr: "Émerveillement devant le Trésor et le Monastère, puis transfert au coucher du soleil au Wadi Rum.", it: "Ammira il Tesoro e il Monastero, poi trasferimento al tramonto nel Wadi Rum." }, meals: "Breakfast & Zarb Dinner", accommodation: "Martian Camp Wadi Rum" },
      { day: 5, title: { en: "Wadi Rum 4x4 Jeep → Aqaba Red Sea", de: "Wadi Rum 4x4 Jeep → Aqaba Rotes Meer", fr: "Wadi Rum Safari 4x4 → Aqaba Mer Rouge", it: "Wadi Rum Safari 4x4 → Aqaba Mar Rosso" }, description: { en: "Desert Jeep safari, then drive to Aqaba Red Sea coastal resort.", de: "Wüsten-Jeep-Safari und Weiterfahrt nach Aqaba.", fr: "Safari en 4x4 dans le désert, puis route vers la station balnéaire d'Aqaba.", it: "Safari in 4x4 nel deserto, poi trasferimento nella località balneare di Aqaba." }, meals: "Breakfast", accommodation: "4-Star Beach Resort in Aqaba" },
      { day: 6, title: { en: "Aqaba → Dead Sea Resort", de: "Aqaba → Totes Meer Resort", fr: "Aqaba → Complexe de la Mer Morte", it: "Aqaba → Resort sul Mar Morto" }, description: { en: "Morning Red Sea coastal walk, then drive north along Dead Sea highway.", de: "Morgens Aqaba, danach Fahrt zum Toten Meer.", fr: "Promenade matinale au bord de la Mer Rouge, puis route vers la Mer Morte.", it: "Passeggiata mattutina sul Mar Rosso, poi guida verso il Mar Morto." }, meals: "Breakfast & Dinner", accommodation: "Dead Sea Resort" },
      { day: 7, title: { en: "Dead Sea Floating → Airport Departure", de: "Totes Meer Schwebebad → Abreise", fr: "Baignade à la Mer Morte → Départ", it: "Bagno al Mar Morto → Partenza" }, description: { en: "Morning spa floating before final airport transfer.", de: "Totes Meer Schwebebad und Flughafentransfer.", fr: "Baignade bien-être dans la Mer Morte avant le transfert final à l'aéroport.", it: "Bagno di benessere nel Mar Morto prima del trasferimento finale in aeroporto." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2017/08/Jordan-Aqaba-Tours-700x500.jpg",
    gallery: [
      { id: "jc2-1", url: "https://jordanstorytours.com/content/uploads/2017/08/Jordan-Aqaba-Tours-700x500.jpg", alt: { en: "Aqaba Red Sea coast", de: "Strand von Aqaba am Roten Meer" }, caption: { en: "Original legacy media: Aqaba Red Sea Resort", de: "Originales Medien-Asset: Aqaba am Roten Meer" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "jc2-2", url: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg", alt: { en: "Wadi Rum camp stay", de: "Wadi Rum Beduinencamp" }, caption: { en: "Original legacy media: Wadi Rum Camp", de: "Originales Medien-Asset: Wadi Rum Camp" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "jc2-3", url: "https://jordanstorytours.com/content/uploads/2020/11/Jordan_Petra.jpg", alt: { en: "Petra Rose City entrance", de: "Eingang zur Felsenstadt Petra" }, caption: { en: "Original legacy media: Petra Rose City", de: "Originales Medien-Asset: Petra" }, sortOrder: 3, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What makes the 7-Day Classic Expedition the ultimate Jordan itinerary?",
          de: "Was macht die 7-Tage Klassik Expedition zur ultimativen Jordanien-Reise?",
          fr: "Qu'est-ce qui fait du Circuit Classique 7 Jours l'itinéraire ultime en Jordanie ?",
          it: "Cosa rende il Tour Classico di 7 Giorni l'itinerario perfetto per la Giordania?"
        },
        answer: {
          en: "This 7-day program covers the complete country from the Roman ruins of Jerash in the north to the Red Sea coastal resort of Aqaba in the south, plus Petra, Wadi Rum Bedouin camp, and Dead Sea.",
          de: "Dieses 7-Tage-Programm deckt das gesamte Land vom römischen Jerash im Norden bis nach Aqaba am Roten Meer im Süden ab, inklusive Petra, Wadi Rum und Totem Meer.",
          fr: "Ce circuit de 7 jours couvre tout le pays, de Gérasa au nord jusqu'à la Mer Rouge à Aqaba au sud, ainsi que Pétra, le Wadi Rum et la Mer Morte.",
          it: "Questo itinerario di 7 giorni copre l'intero paese, dalle rovine di Jerash al nord fino ad Aqaba sul Mar Rosso al sud, inclusi Petra, Wadi Rum e Mar Morto."
        }
      },
      {
        question: {
          en: "Is Red Sea coastal access included in Aqaba?",
          de: "Ist der Zugang zum Roten Meer in Aqaba enthalten?",
          fr: "L'accès à la Mer Rouge à Aqaba est-il inclus ?",
          it: "L'accesso al Mar Rosso ad Aqaba è incluso?"
        },
        answer: {
          en: "Yes, night 5 is spent at a 4-star beach resort in Aqaba with direct Red Sea beach access and optional snorkeling tours.",
          de: "Ja, Nacht 5 verbringen Sie in einem 4-Sterne-Strandresort in Aqaba mit direktem Zugang zum Roten Meer.",
          fr: "Oui, la 5ème nuit se passe dans un complexe balnéaire 4 étoiles à Aqaba avec accès direct à la plage.",
          it: "Sì, la quinta notte si trascorre in un resort 4 stelle ad Aqaba con accesso diretto alla spiaggia del Mar Rosso."
        }
      }
    ]
  },

  // --- LUXURY TOURS (3) ---
  {
    id: "jordan-luxury-1",
    slug: { en: "jordan-luxury-tour-1", de: "jordan-luxus-tour-1", fr: "circuit-jordanien-luxe-1", it: "tour-giordania-lusso-1" },
    title: { en: "Jordan Luxury Tour 1 — Heritage & 5-Star Serenity", de: "Jordan Luxus-Tour 1 — 5-Sterne Erbe & Eleganz", fr: "Circuit Luxe Jordanie 1 — Sérénité 5 Étoiles & Patrimoine", it: "Tour Lusso Giordania 1 — Serenità 5 Stelle e Patrimonio" },
    subtitle: { en: "6 Days of Chauffeur Comfort, 5-Star Resorts & Private Guides", de: "6 Tage Chauffeur-Komfort, 5-Sterne-Resorts & private Reiseleiter", fr: "6 jours de confort avec chauffeur privé, resorts 5 étoiles & guides dédiés", it: "6 giorni di comfort con autista privato, resort 5 stelle e guide dedicate" },
    category: "Luxury",
    storyCollection: "Luxury Story",
    durationDays: 6,
    durationNights: 5,
    startingPriceUSD: 1450,
    highlights: {
      en: ["Private chauffeur in executive vehicle", "5-Star Mövenpick Petra & Kempinski Dead Sea", "Private licensed guide in Petra & Jerash", "Gourmet dining & Dead Sea spa treatments"],
      de: ["Privater Chauffeur im Luxusfahrzeug", "5-Sterne Mövenpick Petra & Kempinski Totes Meer", "Privater lizenzierter Reiseleiter", "Gourmet-Dinner & Totes Meer Spa"],
      fr: ["Chauffeur privé en véhicule exécutif haut de gamme", "Hôtels 5 étoiles Mövenpick Pétra & Kempinski Mer Morte", "Guide privé agréé à Pétra & Gérasa", "Dîners gourmets & soins spa à la Mer Morte"],
      it: ["Autista privato in veicolo executive di lusso", "Hotel 5 stelle Mövenpick Petra e Kempinski Mar Morto", "Guida privata autorizzata a Petra e Jerash", "Cene gourmet e trattamenti spa al Mar Morto"]
    },
    route: ["Amman", "Ajloun", "Jerash", "Madaba", "Mount Nebo", "Dead Sea", "Petra", "Al-Karak"],
    inclusions: {
      en: ["All transfers in private luxury vehicle", "5 Nights in 5-Star Deluxe Hotels", "All Entrance fees included", "Private tour guide throughout", "Dead Sea Resort VIP Pass & Lunch"],
      de: ["Alle Transfers im privaten Luxusfahrzeug", "5 Nächte in 5-Sterne-Luxushotels", "Alle Eintrittsgelder inklusive", "Durchgehender privater Reiseleiter", "Totes Meer VIP-Pass & Mittagessen"],
      fr: ["Tous les transferts en véhicule de luxe privé", "5 nuits en hôtels deluxe 5 étoiles", "Tous les frais d'entrée inclus", "Guide privé tout au long du circuit", "Pass VIP & Déjeuner au complexe de la Mer Morte"],
      it: ["Tutti i trasferimenti in veicolo privato di lusso", "5 notti in hotel deluxe 5 stelle", "Tutti i biglietti d'ingresso inclusi", "Guida turistica privata per tutto il tour", "Pass VIP e pranzo al resort del Mar Morto"]
    },
    exclusions: {
      en: ["International airfare", "Personal expenses"],
      de: ["Flüge", "Persönliche Ausgaben"],
      fr: ["Vols internationaux", "Dépenses personnelles"],
      it: ["Voli internazionali", "Spese personali"]
    },
    itinerary: [
      { day: 1, title: { en: "VIP Airport Pickup → Amman City Tour", de: "VIP Flughafentransfer → Amman Stadtrundfahrt", fr: "Accueil VIP Aéroport → Visite d'Amman", it: "Accoglienza VIP Aeroporto → Tour di Amman" }, description: { en: "VIP arrival assistance, private city tour.", de: "VIP-Empfang am Flughafen, private Stadtrundfahrt.", fr: "Assistance VIP dès l'arrivée et visite privée de la capitale.", it: "Assistenza VIP all'arrivo e tour privato della capitale." }, meals: "Dinner", accommodation: "5-Star St. Regis / Four Seasons Amman" },
      { day: 2, title: { en: "Amman → Ajloun Castle → Roman Jerash", de: "Amman → Burg Ajloun → Römisches Jerash", fr: "Amman → Château d'Ajloun → Gérasa Romaine", it: "Amman → Castello di Ajloun → Jerash Romana" }, description: { en: "Guided tour of Ajloun Castle & Jerash ruins.", de: "Geführte Tour durch die Festung Ajloun & Jerash.", fr: "Visite guidée de la forteresse d'Ajloun et des ruines antiques de Gérasa.", it: "Visita guidata della fortezza di Ajloun e delle ruine romane di Jerash." }, meals: "Breakfast", accommodation: "5-Star Amman" },
      { day: 3, title: { en: "Madaba → Mount Nebo → Dead Sea Luxury Resort", de: "Madaba → Berg Nebo → Totes Meer Luxus-Resort", fr: "Madaba → Mont Nébo → Resort de Luxe de la Mer Morte", it: "Madaba → Monte Nebo → Resort di Lusso del Mar Morto" }, description: { en: "Mosaic city Madaba, Mount Nebo sanctuary, and Kempinski Dead Sea resort float.", de: "Mosaikstadt Madaba, Berg Nebo und Spa-Entspannung im Kempinski Totes Meer.", fr: "Mosaïques de Madaba, sanctuaire du Mont Nébo et détente au Kempinski Ishtar Mer Morte.", it: "Mosaici di Madaba, santuario del Monte Nebo e relax al Kempinski Ishtar Mar Morto." }, meals: "Breakfast & Lunch", accommodation: "Kempinski Hotel Ishtar Dead Sea" },
      { day: 4, title: { en: "Dead Sea → Petra Rose City", de: "Totes Meer → Felsenstadt Petra", fr: "Mer Morte → Pétra la Cité Rose", it: "Mar Morto → Petra la Città Rosa" }, description: { en: "Drive along the Scenic Dead Sea Highway to Petra.", de: "Fahrt entlang der Panoramastraße am Toten Meer nach Petra.", fr: "Route panoramique le long de la Mer Morte vers Pétra.", it: "Guida panoramica lungo la strada del Mar Morto verso Petra." }, meals: "Breakfast & Dinner", accommodation: "Mövenpick Resort Petra" },
      { day: 5, title: { en: "Petra Guided Tour → Al-Karak Crusader Castle → Amman", de: "Petra Führung → Kreuzfahrerburg Al-Karak → Amman", fr: "Visite Guidée de Pétra → Château de Kerak → Amman", it: "Visita Guidata di Petra → Castello di Kerak → Amman" }, description: { en: "Private guide through Petra Treasury & Monastery, followed by Karak Fortress.", de: "Private Führung durch Petra und Besichtigung der Burg Karak.", fr: "Guide privé à travers le Trésor et le Monastère de Pétra, puis visite de la forteresse de Kerak.", it: "Guida privata al Tesoro e al Monastero di Petra, seguita dalla fortezza di Kerak." }, meals: "Breakfast", accommodation: "5-Star Amman" },
      { day: 6, title: { en: "Amman → VIP Airport Departure", de: "Amman → VIP Flughafentransfer", fr: "Amman → Départ VIP Aéroport", it: "Amman → Partenza VIP Aeroporto" }, description: { en: "Final luxury transfer to Queen Alia Airport.", de: "Abschließender Luxustransfer zum Flughafen.", fr: "Transfert de luxe final vers l'aéroport d'Amman.", it: "Trasferimento finale di lusso all'aeroporto di Amman." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg",
    gallery: [
      { id: "jl1-1", url: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg", alt: { en: "Dead Sea luxury resort floating", de: "Luxuriöses Schwebebad im Toten Meer" }, caption: { en: "Original legacy media: Luxury Dead Sea resort float", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "jl1-2", url: "https://jordanstorytours.com/content/uploads/2020/11/Petra-Jordan-tours-700x500.jpg", alt: { en: "Mövenpick Petra luxury location", de: "Luxuriöse Lage in Petra" }, caption: { en: "Original legacy media: Petra Luxury Tour", de: "Originales Medien-Asset: Petra Luxustour" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "Which 5-star luxury hotels are included on Luxury Tour 1?",
          de: "Welche 5-Sterne-Luxushotels sind in der Luxus-Tour 1 enthalten?",
          fr: "Quels hôtels 5 étoiles de luxe sont inclus dans le Circuit Luxe 1 ?",
          it: "Quali hotel 5 stelle di lusso sono inclusi nel Tour Lusso 1?"
        },
        answer: {
          en: "You stay at Mövenpick Resort Petra right at the entrance of Petra, Kempinski Hotel Ishtar Dead Sea, and St. Regis or Four Seasons Amman.",
          de: "Sie übernachten im Mövenpick Resort Petra direkt am Eingang von Petra, im Kempinski Hotel Ishtar am Toten Meer und im St. Regis / Four Seasons Amman.",
          fr: "Vous séjournerez au Mövenpick Resort Pétra à l'entrée du site, au Kempinski Hotel Ishtar à la Mer Morte et au St. Regis ou Four Seasons Amman.",
          it: "Soggiornerai al Mövenpick Resort Petra direttamente all'ingresso di Petra, al Kempinski Hotel Ishtar sul Mar Morto e al St. Regis ad Amman."
        }
      },
      {
        question: {
          en: "Are all site entrance fees and private guides included?",
          de: "Sind alle Eintrittsgelder und privaten Reiseleiter enthalten?",
          fr: "Tous les droits d'entrée et guides privés sont-ils inclus ?",
          it: "Tutti i biglietti d'ingresso e le guide private sono inclusi?"
        },
        answer: {
          en: "Yes, all entrance tickets, private licensed local guides in Petra and Jerash, and VIP resort passes are fully included.",
          de: "Ja, alle Eintrittskarten, private lizenzierte Reiseleiter in Petra und Jerash sowie VIP-Resortpässe sind vollständig enthalten.",
          fr: "Oui, tous les billets d'entrée, guides locaux privés à Pétra et Jérash, et accès VIP au complexe sont entièrement inclus.",
          it: "Sì, tutti i biglietti d'ingresso, le guide locali private a Petra e Jerash e gli accessi VIP ai resort sono inclusi."
        }
      }
    ]
  },
  {
    id: "jordan-luxury-2",
    slug: { en: "jordan-luxury-tour-2-7-days", de: "jordan-luxus-tour-2-7-tage", fr: "circuit-jordanien-luxe-2-7-jours", it: "tour-giordania-lusso-2-7-giorni" },
    title: { en: "Jordan Luxury Tour 2 — 7-Day Royal Deluxe Journey", de: "Jordan Luxus-Tour 2 — 7-Tage Royale Deluxe Reise", fr: "Circuit Luxe Jordanie 2 — 7 Jours Voyage Royal Deluxe", it: "Tour Lusso Giordania 2 — 7 Giorni Viaggio Reale Deluxe" },
    subtitle: { en: "7 Days of Executive Chauffeur, Luxury Martian Dome & Dead Sea Spa", de: "7 Tage Chauffeur-Luxus, Martian Dome Camp & Totes Meer Spa", fr: "7 jours avec chauffeur privé, Dôme Martien de luxe & Spa Mer Morte", it: "7 giorni con autista privato, Dôme Martiano di lusso e Spa al Mar Morto" },
    category: "Luxury",
    storyCollection: "Luxury Story",
    durationDays: 7,
    durationNights: 6,
    startingPriceUSD: 1650,
    highlights: {
      en: ["5-Star Luxury Hotels & Glass Martian Dome", "Executive Chauffeur Mercedes / GMC vehicle", "Private licensed guide in Petra, Jerash & Amman", "All entrances, VIP transfers & gourmet meals"],
      de: ["5-Sterne Luxushotels & Glas-Martian-Dome", "Chauffeur im Luxusfahrzeug (Mercedes/GMC)", "Privater Reiseleiter in Petra, Jerash & Amman", "Alle Eintritte, VIP-Transfers & Gourmet-Verpflegung"],
      fr: ["Hôtels 5 étoiles & Dôme Martien en verre", "Véhicule exécutif Mercedes / GMC avec chauffeur", "Guide privé agréé à Pétra, Gérasa & Amman", "Tous billets d'entrée, transferts VIP & repas gourmets"],
      it: ["Hotel 5 stelle e Dôme Martiano in vetro", "Veicolo executive Mercedes / GMC con autista", "Guida privata autorizzata a Petra, Jerash e Amman", "Tutti gli ingressi, trasferimenti VIP e cene gourmet"]
    },
    route: ["Amman", "Jerash", "Madaba", "Mount Nebo", "Petra", "Wadi Rum", "Dead Sea"],
    inclusions: {
      en: ["Executive Chauffeur vehicle", "6 Nights 5-Star Luxury Accommodations", "Private tour guide throughout", "All Entrance fees & VIP passes"],
      de: ["Chauffeur-Luxusfahrzeug", "6 Nächte in 5-Sterne-Luxushotels", "Durchgehender privater Reiseleiter", "Alle Eintrittsgelder & VIP-Pässe"],
      fr: ["Véhicule exécutif avec chauffeur", "6 nuits en hébergement de luxe 5 étoiles", "Guide privé tout au long du voyage", "Toutes les entrées & pass VIP inclus"],
      it: ["Veicolo executive con autista", "6 notti in alloggi di lusso 5 stelle", "Guida turistica privata per tutto il tour", "Tutti gli ingressi e pass VIP inclusi"]
    },
    exclusions: {
      en: ["Flights", "Tips"],
      de: ["Flüge", "Trinkgelder"],
      fr: ["Vols", "Pourboires"],
      it: ["Voli", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "VIP Arrival in Amman", de: "VIP Ankunft in Amman", fr: "Arrivée VIP à Amman", it: "Arrivo VIP ad Amman" }, description: { en: "VIP airport lounge pickup & luxury transfer.", de: "VIP-Empfang am Flughafen & Luxustransfer.", fr: "Accueil VIP au salon de l'aéroport & transfert de luxe.", it: "Accoglienza VIP in aeroporto e trasferimento di lusso." }, meals: "Dinner", accommodation: "Four Seasons Amman" },
      { day: 2, title: { en: "Amman Citadel → Roman Jerash Private Tour", de: "Amman Zitadelle → Römisches Jerash Private Führung", fr: "Citadelle d'Amman → Gérasa Romaine Tour Privé", it: "Cittadella di Amman → Jerash Romana Tour Privato" }, description: { en: "Private guide through Roman ruins & Citadel.", de: "Private Führung durch Jerash & Zitadelle.", fr: "Guide privé à travers les ruines romaines et la Citadelle.", it: "Guida privata tra le rovine romane e la Cittadella." }, meals: "Breakfast & Lunch", accommodation: "Four Seasons Amman" },
      { day: 3, title: { en: "Madaba Mosaics → Mount Nebo → Petra Luxury", de: "Madaba Mosaike → Berg Nebo → Petra Luxus", fr: "Mosaïques de Madaba → Mont Nébo → Pétra Luxe", it: "Mosaici di Madaba → Monte Nebo → Petra Lusso" }, description: { en: "Byzantine art, Moses sanctuary & Mövenpick Petra.", de: "Mosaikstadt Madaba, Berg Nebo & Mövenpick Petra.", fr: "Art byzantin, sanctuaire de Moïse & Mövenpick Pétra.", it: "Arte bizantina, santuario di Mosè e Mövenpick Petra." }, meals: "Breakfast & Dinner", accommodation: "Mövenpick Resort Petra" },
      { day: 4, title: { en: "Petra Treasury Private Tour → Wadi Rum Martian Dome", de: "Petra Führung → Wadi Rum Martian Dome Camp", fr: "Visite Privée du Trésor de Pétra → Dôme Martien Wadi Rum", it: "Visita Privata del Tesoro di Petra → Dôme Martiano Wadi Rum" }, description: { en: "Private guide in Petra, sunset transfer to luxury Martian glass dome camp.", de: "Petra Führung und Übernachtung im Martian Dome Camp.", fr: "Guide privé à Pétra, transfert au coucher du soleil dans un Dôme Martien en verre.", it: "Guida privata a Petra, trasferimento al tramonto nel campo con Dôme Martiani in vetro." }, meals: "Breakfast & Zarb Dinner", accommodation: "Memories Aicha Luxury Camp Wadi Rum" },
      { day: 5, title: { en: "Wadi Rum 4x4 VIP Safari → Dead Sea Luxury Resort", de: "Wadi Rum 4x4 VIP Safari → Totes Meer Luxus Resort", fr: "Safari 4x4 VIP au Wadi Rum → Resort de Luxe de la Mer Morte", it: "Safari 4x4 VIP nel Wadi Rum → Resort di Lusso del Mar Morto" }, description: { en: "VIP 4x4 desert safari, drive to Kempinski Dead Sea Resort.", de: "Wüsten-Jeepsafari & Kempinski Totes Meer Resort.", fr: "Safari 4x4 VIP dans le désert, puis route vers le Kempinski Ishtar Mer Morte.", it: "Safari 4x4 VIP nel deserto, poi trasferimento al Kempinski Ishtar Mar Morto." }, meals: "Breakfast", accommodation: "Kempinski Hotel Ishtar Dead Sea" },
      { day: 6, title: { en: "Dead Sea Spa & Wellness Day", de: "Totes Meer Spa & Wellness-Tag", fr: "Journée Spa & Bien-être à la Mer Morte", it: "Giornata Spa e Benessere al Mar Morto" }, description: { en: "Full day private spa treatment & salt water float.", de: "Ganztägige Spa-Entspannung & Schwebebad.", fr: "Journée complète de soins spa privés et baignade flottante.", it: "Giornata intera di trattamenti spa privati e bagno galleggiante." }, meals: "Breakfast & Dinner", accommodation: "Kempinski Hotel Ishtar Dead Sea" },
      { day: 7, title: { en: "Dead Sea → VIP Airport Departure", de: "Totes Meer → VIP Flughafentransfer", fr: "Mer Morte → Départ VIP Aéroport", it: "Mar Morto → Partenza VIP Aeroporto" }, description: { en: "Executive transfer to Queen Alia Airport.", de: "Chauffeur-Transfer zum Flughafen.", fr: "Transfert exécutif vers l'aéroport d'Amman.", it: "Trasferimento executive all'aeroporto di Amman." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg",
    gallery: [
      { id: "jl2-1", url: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg", alt: { en: "Wadi Rum luxury desert camp", de: "Luxuriöses Wüstencamp im Wadi Rum" }, caption: { en: "Original legacy media: Luxury Wadi Rum Camp", de: "Originales Medien-Asset: Luxuscamp Wadi Rum" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "jl2-2", url: "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg", alt: { en: "Kempinski Dead Sea luxury float", de: "Luxuriöses Bad im Toten Meer" }, caption: { en: "Original legacy media: Kempinski Spa Float", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What desert camp is included in Wadi Rum on Luxury Tour 2?",
          de: "Welches Wüstencamp ist im Wadi Rum auf der Luxus-Tour 2 enthalten?",
          fr: "Quel campement est inclus au Wadi Rum dans le Circuit Luxe 2 ?",
          it: "Quale campo è incluso nel Wadi Rum nel Tour Lusso 2?"
        },
        answer: {
          en: "You stay in a luxury Martian Bubble Dome at Memories Aicha Luxury Camp featuring a glass ceiling for star-gazing, air-conditioning, and private bathroom.",
          de: "Sie übernachten in einem luxuriösen Martian Bubble Dome im Memories Aicha Luxury Camp mit Glasdach für die Sternenbeobachtung und eigenem Bad.",
          fr: "Vous séjournerez dans un Dôme Martien de luxe au Memories Aicha Camp avec plafond en verre pour observer les étoiles, climatisation et salle de bain.",
          it: "Soggiornerai in un Martian Bubble Dome di lusso al Memories Aicha Camp con soffitto in vetro per osservare le stelle, aria condizionata e bagno privato."
        }
      }
    ]
  },
  {
    id: "jordan-luxury-3",
    slug: { en: "jordan-luxury-tour-3-8-days", de: "jordan-luxus-tour-3-8-tage", fr: "circuit-jordanien-luxe-3-8-jours", it: "tour-giordania-lusso-3-8-giorni" },
    title: { en: "Jordan Luxury Tour 3 — 8-Day Royal Heritage & Red Sea", de: "Jordan Luxus-Tour 3 — 8-Tage Royale Entdeckung & Rotes Meer", fr: "Circuit Luxe Jordanie 3 — 8 Jours Patrimoine Royal & Mer Rouge", it: "Tour Lusso Giordania 3 — 8 Giorni Patrimonio Reale e Mar Rosso" },
    subtitle: { en: "The Pinnacle 8-Day Jordan Luxury Experience with Red Sea Yachting", de: "Das 8-Tage Ultimative Luxus-Erlebnis mit Jachtausflug am Roten Meer", fr: "L'expérience de luxe ultime de 8 jours avec croisière privée en yacht", it: "L'esperienza di lusso definitiva di 8 giorni con yacht privato sul Mar Rosso" },
    category: "Luxury",
    storyCollection: "Luxury Story",
    durationDays: 8,
    durationNights: 7,
    startingPriceUSD: 1990,
    highlights: {
      en: ["Private Red Sea Sunset Yacht Cruise in Aqaba", "5-Star Resorts (Kempinski Dead Sea, Mövenpick Petra, Al Manara Aqaba)", "Private Chauffeur & Personal Tour Concierge", "All entrances, gourmet meals & VIP airport lounge access"],
      de: ["Private Jachtausfahrt bei Sonnenuntergang im Roten Meer", "5-Sterne Resorts in Petra, Aqaba & Totem Meer", "Chauffeur & persönlicher Reise-Concierge", "Alle Eintritte, Gourmet-Dinner & VIP Lounge Access"],
      fr: ["Croisière privée en yacht au coucher du soleil sur la Mer Rouge", "Resorts 5 étoiles (Kempinski Mer Morte, Mövenpick Pétra, Al Manara Aqaba)", "Chauffeur privé & concierge de voyage dédié", "Toutes les entrées, repas gourmets & accès aux salons VIP d'aéroport"],
      it: ["Crociera privata in yacht al tramonto sul Mar Rosso ad Aqaba", "Resort 5 stelle (Kempinski Mar Morto, Mövenpick Petra, Al Manara Aqaba)", "Autista privato e concierge personale di viaggio", "Tutti gli ingressi, cene gourmet e accesso alle lounge VIP dell'aeroporto"]
    },
    route: ["Amman", "Jerash", "Madaba", "Mount Nebo", "Petra", "Wadi Rum", "Aqaba", "Dead Sea"],
    inclusions: {
      en: ["Executive Chauffeur Vehicle", "7 Nights in 5-Star Deluxe Hotels", "Private Red Sea Yacht Charter", "All Entrance permits & private guides"],
      de: ["Chauffeur-Luxusfahrzeug", "7 Nächte in 5-Sterne-Luxushotels", "Private Jacht-Charter am Roten Meer", "Alle Eintrittsgelder & private Reiseleiter"],
      fr: ["Véhicule exécutif avec chauffeur", "7 nuits en hôtels deluxe 5 étoiles", "Charter privé en yacht sur la Mer Rouge", "Tous les permis d'entrée & guides privés"],
      it: ["Veicolo executive con autista", "7 notti in hotel deluxe 5 stelle", "Charter privato in yacht sul Mar Rosso", "Tutti i permessi d'ingresso e guide private"]
    },
    exclusions: {
      en: ["Flights", "Tips"],
      de: ["Flüge", "Trinkgelder"],
      fr: ["Vols", "Pourboires"],
      it: ["Voli", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "VIP Arrival in Amman", de: "VIP Ankunft in Amman", fr: "Arrivée VIP à Amman", it: "Arrivo VIP ad Amman" }, description: { en: "VIP airport lounge assistance & luxury hotel check-in.", de: "VIP-Flughafenbetreuung & Check-in.", fr: "Assistance VIP au salon de l'aéroport & enregistrement à l'hôtel de luxe.", it: "Assistenza VIP nella lounge dell'aeroporto e check-in in hotel di lusso." }, meals: "Dinner", accommodation: "St. Regis Amman" },
      { day: 2, title: { en: "Amman → Roman Jerash → Ajloun Castle", de: "Amman → Römisches Jerash → Burg Ajloun", fr: "Amman → Gérasa Romaine → Château d'Ajloun", it: "Amman → Jerash Romana → Castello di Ajloun" }, description: { en: "Private guided tour of Jerash ruins & Ajloun.", de: "Geführte Tour durch Jerash & Burg Ajloun.", fr: "Visite guidée privée de Gérasa et d'Ajloun.", it: "Visita guidata privata di Jerash e Ajloun." }, meals: "Breakfast & Lunch", accommodation: "St. Regis Amman" },
      { day: 3, title: { en: "Kings Highway → Madaba → Mt Nebo → Petra", de: "Königsstraße → Madaba → Berg Nebo → Petra", fr: "Route des Rois → Madaba → Mont Nébo → Pétra", it: "Strada dei Re → Madaba → Monte Nebo → Petra" }, description: { en: "Byzantine mosaic map, Moses sanctuary & Mövenpick Petra.", de: "Mosaikkarte, Berg Nebo & Mövenpick Petra.", fr: "Mosaïque byzantine, sanctuaire de Moïse & Mövenpick Pétra.", it: "Mappa mosaico bizantina, santuario di Mosè e Mövenpick Petra." }, meals: "Breakfast & Dinner", accommodation: "Mövenpick Resort Petra" },
      { day: 4, title: { en: "Petra Treasury Full Day → Wadi Rum Martian Camp", de: "Petra Ganztag → Wadi Rum Martian Camp", fr: "Pétra Journée Complète → Campement Martien Wadi Rum", it: "Petra Intera Giornata → Campo Martiano Wadi Rum" }, description: { en: "Private guide in Petra, sunset transfer to luxury Martian dome camp.", de: "Petra Führung & Martian Dome Übernachtung.", fr: "Guide privé à Pétra, puis transfert au coucher du soleil vers le campement martien de luxe.", it: "Guida privata a Petra, poi trasferimento al tramonto nel campo martiano di lusso." }, meals: "Breakfast & Zarb Dinner", accommodation: "Aicha Luxury Camp Wadi Rum" },
      { day: 5, title: { en: "Wadi Rum 4x4 VIP Safari → Aqaba Red Sea Luxury", de: "Wadi Rum 4x4 VIP Safari → Aqaba Rotes Meer Luxus", fr: "Safari 4x4 VIP au Wadi Rum → Aqaba Luxe Mer Rouge", it: "Safari 4x4 VIP nel Wadi Rum → Aqaba Lusso Mar Rosso" }, description: { en: "Desert Jeep safari, transfer to Al Manara Luxury Resort Aqaba.", de: "Wüsten-Jeepsafari & Al Manara Luxusresort Aqaba.", fr: "Safari en 4x4 dans le désert, puis transfert au complexe Al Manara Luxury Collection d'Aqaba.", it: "Safari in 4x4 nel deserto, poi trasferimento all'Al Manara Luxury Resort ad Aqaba." }, meals: "Breakfast", accommodation: "Al Manara Luxury Collection Aqaba" },
      { day: 6, title: { en: "Private Red Sea Sunset Yacht Cruise", de: "Private Jachtausfahrt bei Sonnenuntergang", fr: "Croisière Privée en Yacht au Coucher du Soleil", it: "Crociera Privata in Yacht al Tramonto" }, description: { en: "Morning coral snorkeling, afternoon private sunset yacht cruise.", de: "Schnorcheln & private Jachtausfahrt bei Sonnenuntergang.", fr: "Matinée snorkeling dans les récifs coralliens, puis croisière privée en yacht au coucher du soleil.", it: "Mattinata di snorkeling tra i coralli, poi crociera privata in yacht al tramonto." }, meals: "Breakfast & Lunch", accommodation: "Al Manara Luxury Collection Aqaba" },
      { day: 7, title: { en: "Aqaba → Kempinski Dead Sea Resort", de: "Aqaba → Kempinski Totes Meer Resort", fr: "Aqaba → Kempinski Mer Morte", it: "Aqaba → Kempinski Mar Morto" }, description: { en: "Scenic Dead Sea highway drive, floating & spa treatment.", de: "Fahrt zum Toten Meer, Schwebebad & Spa.", fr: "Route panoramique le long de la Mer Morte, baignade flottante & soins au spa.", it: "Guida panoramica sul Mar Morto, bagno galleggiante e trattamenti spa." }, meals: "Breakfast & Dinner", accommodation: "Kempinski Hotel Ishtar Dead Sea" },
      { day: 8, title: { en: "Dead Sea → VIP Airport Departure", de: "Totes Meer → VIP Flughafentransfer", fr: "Mer Morte → Départ VIP Aéroport", it: "Mar Morto → Partenza VIP Aeroporto" }, description: { en: "Final luxury transfer to Queen Alia Airport.", de: "Chauffeur-Transfer zum Flughafen.", fr: "Transfert exécutif final vers l'aéroport d'Amman.", it: "Trasferimento executive finale all'aeroporto di Amman." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2017/08/Jordan-Aqaba-Tours-700x500.jpg",
    gallery: [
      { id: "jl3-2", url: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg", alt: { en: "Wadi Rum Martian camp", de: "Wadi Rum Luxus-Camp" }, caption: { en: "Original legacy media: Wadi Rum Martian Dome", de: "Originales Medien-Asset: Martian Dome" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What exclusive VIP experience highlights the 8-Day Royal Luxury Tour?",
          de: "Welches exklusive VIP-Erlebnis sticht auf der 8-Tage Royal Luxus Tour hervor?",
          fr: "Quelle expérience VIP exclusive caractérise le Circuit Royale Luxe de 8 Jours ?",
          it: "Quale esperienza VIP exclusive caractérise le Tour Lusso Reale di 8 Giorni?"
        },
        answer: {
          en: "Luxury Tour 3 includes a private sunset yacht cruise on the Red Sea in Aqaba, VIP airport lounge concierge assistance, 5-star Mövenpick, Kempinski, and Al Manara luxury resorts.",
          de: "Die Luxus-Tour 3 beinhaltet eine private Jachtausfahrt bei Sonnenuntergang im Roten Meer in Aqaba, VIP-Flughafen-Concierge und 5-Sterne-Luxusresorts.",
          fr: "Le Circuit Luxe 3 inclut une croisière privée en yacht au coucher du soleil à Aqaba, un service concierge VIP à l'aéroport et des resorts 5 étoiles.",
          it: "Il Tour Lusso 3 include una crociera privata in yacht al tramonto ad Aqaba, servizio concierge VIP all'aeroporto e resort 5 stelle."
        }
      }
    ]
  },

  // --- BIBLICAL / HOLY LAND TOURS (3) ---
  {
    id: "holy-land-1",
    slug: { en: "jordan-holy-land-tour-1-6-days", de: "jordan-heiliges-land-tour-1-6-tage", fr: "circuit-jordanien-terre-sainte-1-6-jours", it: "tour-giordania-terra-santa-1-6-giorni" },
    title: { en: "Jordan Holy Land Tour 1 — 6-Day Sacred Trail", de: "Jordanien Heiliges Land Tour 1 — 6-Tage Biblischer Pfad", fr: "Circuit Terre Sainte 1 — 6 Jours Sentier Sacré", it: "Tour Terra Santa 1 — 6 Giorni Sentiero Sacro" },
    subtitle: { en: "6 Days Following Biblical Prophets, St. George Mosaics & Petra", de: "6 Tage auf den Spuren biblischer Propheten & Mosaike", fr: "6 jours sur les traces des prophètes bibliques, des mosaïques & de Pétra", it: "6 giorni sulle tracce dei profeti biblici, dei mosaici di San Giorgio e Petra" },
    category: "Biblical",
    storyCollection: "Sacred Story",
    durationDays: 6,
    durationNights: 5,
    startingPriceUSD: 950,
    highlights: {
      en: ["Baptism Site of Jesus Christ (Bethany Beyond Jordan)", "Mount Nebo Sanctuary where Moses saw the Promised Land", "Madaba St. George 6th century Mosaic Map", "Petra Rose City & Dead Sea float"],
      de: ["Taufstelle Jesu Christi am Jordan", "Berg Nebo Heiligtum des Mose", "Mosaikkarte von Madaba in der St.-Georgs-Kirche", "Petra Felsenstadt & Totes Meer"],
      fr: ["Site du baptême du Christ (Béthanie au-delà du Jourdain)", "Sanctuaire du Mont Nébo où Moïse contempla la Terre Promise", "Mosaïque de Saint-Georges du 6ème siècle à Madaba", "Pétra la Cité Rose & baignade à la Mer Morte"],
      it: ["Luogo del battesimo di Gesù Cristo (Betania oltre il Giordano)", "Santuario del Monte Nebo dove Mosè vide la Terra Promessa", "Mappa Mosaico del VI secolo a Madaba", "Petra la Città Rosa e bagno al Mar Morto"]
    },
    route: ["Amman", "Baptism Site", "Mount Nebo", "Madaba", "Petra", "Dead Sea"],
    inclusions: {
      en: ["Private AC vehicle with driver", "5 Nights 4-Star Hotels", "Holy site permits & guides", "Daily breakfast & 3 dinners"],
      de: ["Privatfahrzeug mit Fahrer", "5 Nächte in 4-Sterne-Hotels", "Eintrittsgenehmigungen & Reiseleiter", "Tägliches Frühstück & 3 Abendessen"],
      fr: ["Véhicule privé climatisé avec chauffeur", "5 nuits en hôtels 4 étoiles", "Permis d'accès aux sites sacrés & guides", "Petit-déjeuner quotidien & 3 dîners"],
      it: ["Veicolo privato climatizzato con autista", "5 notti in hotel 4 stelle", "Permessi d'ingresso ai luoghi sacri e guide", "Colazione giornaliera e 3 cene"]
    },
    exclusions: {
      en: ["Flights", "Tips"],
      de: ["Flüge", "Trinkgelder"],
      fr: ["Vols", "Pourboires"],
      it: ["Voli", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman", fr: "Arrivée à Amman", it: "Arrivo ad Amman" }, description: { en: "Airport pickup & hotel transfer.", de: "Flughafentransfer & Check-in.", fr: "Accueil à l'aéroport et transfert à l'hôtel.", it: "Accoglienza in aeroporto e trasferimento in hotel." }, meals: "Dinner", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Baptism Site → Mount Nebo → Madaba", de: "Taufstelle → Berg Nebo → Madaba", fr: "Site du Baptême → Mont Nébo → Madaba", it: "Luogo del Battesimo → Monte Nebo → Madaba" }, description: { en: "Visit Jordan River Baptism Site, Mt Nebo & Madaba St. George.", de: "Taufstelle am Jordan, Berg Nebo & Madaba.", fr: "Visite du site du baptême au Jourdain, du Mont Nébo & de Madaba.", it: "Visita del luogo del battesimo sul fiume Giordano, del Monte Nebo e di Madaba." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman → Kings Highway → Petra", de: "Amman → Königsstraße → Petra", fr: "Amman → Route des Rois → Pétra", it: "Amman → Strada dei Re → Petra" }, description: { en: "Scenic Kings Highway drive to Petra.", de: "Fahrt auf der Königsstraße nach Petra.", fr: "Route panoramique des Rois vers Pétra.", it: "Guida panoramica lungo la Strada dei Re verso Petra." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Full Day Biblical Exploration", de: "Petra Ganztägige Erkundung", fr: "Exploration Biblique de Pétra Journée Complète", it: "Esplorazione Biblica di Petra Intera Giornata" }, description: { en: "Walk through Siq to Treasury & Aaron's Tomb view.", de: "Besichtigung des Schatzhauses & Aaron-Berg.", fr: "Traversée du Siq jusqu'au Trésor et vue sur le Tombeau d'Aaron.", it: "Passeggiata nel Siq fino al Tesoro e vista sulla Tomba di Aronne." }, meals: "Breakfast", accommodation: "4-Star Hotel in Petra" },
      { day: 5, title: { en: "Petra → Dead Sea Resort Float", de: "Petra → Totes Meer Schwebebad", fr: "Pétra → Complexe Balnéaire de la Mer Morte", it: "Petra → Resort sul Mar Morto" }, description: { en: "Drive to Dead Sea, float in saline waters.", de: "Fahrt zum Toten Meer & Schwebebad.", fr: "Route vers la Mer Morte, baignade flottante dans les eaux salées.", it: "Guida verso il Mar Morto e bagno galleggiante nelle acque saline." }, meals: "Breakfast & Dinner", accommodation: "Dead Sea Resort" },
      { day: 6, title: { en: "Dead Sea → Departure", de: "Totes Meer → Abreise", fr: "Mer Morte → Départ", it: "Mar Morto → Partenza" }, description: { en: "Transfer to Queen Alia Airport.", de: "Flughafentransfer zum Abflug.", fr: "Transfert à l'aéroport d'Amman.", it: "Trasferimento all'aeroporto di Amman." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg",
    gallery: [
      { id: "hl1-1", url: "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg", alt: { en: "Baptism Site of Jesus Christ", de: "Taufstelle Jesu Christi" }, caption: { en: "Original legacy media: Jordan River Baptism Site", de: "Originales Medien-Asset: Taufstelle am Jordan" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "hl1-2", url: "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg", alt: { en: "Dead Sea float near Mount Nebo", de: "Totes Meer Schwebebad" }, caption: { en: "Original legacy media: Dead Sea Float", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "Which sacred Holy Land pilgrimage sites are visited?",
          de: "Welche heiligen Stätten des Heiligen Landes werden besucht?",
          fr: "Quels sites sacrés de Terre Sainte sont visités ?",
          it: "Quali luoghi sacri della Terra Santa si visitano?"
        },
        answer: {
          en: "This sacred trail visits Bethany Beyond the Jordan (Baptism Site of Jesus Christ), Mount Nebo (where Moses viewed the Promised Land), Madaba St. George Mosaic Map, and Petra Rose City.",
          de: "Dieser heilige Pfad führt zur Taufstelle Jesu Christi am Jordan, zum Berg Nebo, zur Mosaikkarte in Madaba und nach Petra.",
          fr: "Ce parcours sacré visite Béthanie au-delà du Jourdain (site du baptême de Jésus), le Mont Nébo, Madaba et Pétra.",
          it: "Questo percorso sacro visita Betania oltre il Giordano (sito del battesimo di Gesù), il Monte Nebo, Madaba e Petra."
        }
      },
      {
        question: {
          en: "Are official holy site permits included?",
          de: "Sind offizielle Eintrittsgenehmigungen für die heiligen Stätten enthalten?",
          fr: "Les autorisations officielles pour les sites sacrés sont-elles incluses ?",
          it: "Sono inclusi i permessi ufficiali per i luoghi sacri?"
        },
        answer: {
          en: "Yes, official entry permits to Bethany Beyond the Jordan and Mount Nebo sanctuary are included along with specialized guides.",
          de: "Ja, offizielle Eintrittsgenehmigungen für Bethanien am Jordan und den Berg Nebo sowie fachkundige Führer sind enthalten.",
          fr: "Oui, les autorisations d'accès officielles à Béthanie et au Mont Nébo sont incluses avec des guides spécialisés.",
          it: "Sì, i permessi d'ingresso ufficiali per Betania e il Monte Nebo sono inclusi insieme a guide specializzate."
        }
      }
    ]
  },
  {
    id: "holy-land-2",
    slug: { en: "jordan-holy-land-tour-2", de: "jordan-heiliges-land-tour-2", fr: "circuit-jordanien-terre-sainte-2", it: "tour-giordania-terra-santa-2" },
    title: { en: "Jordan & Holy Land Tour 2 — Biblical Pilgrimage", de: "Jordanien & Heiliges Land Tour 2 — Biblische Pilgerreise", fr: "Circuit Terre Sainte 2 — Pèlerinage Biblique", it: "Tour Terra Santa 2 — Pellegrinaggio Biblico" },
    subtitle: { en: "7 Days Following the Footsteps of Moses, John the Baptist & Kings", de: "7 Tage auf den Spuren von Mose, Johannes dem Täufer & Königen", fr: "7 jours sur les pas de Moïse, Jean le Baptiste & des rois", it: "7 giorni sulle orme di Mosè, Giovanni Battista e dei Re" },
    category: "Biblical",
    storyCollection: "Sacred Story",
    durationDays: 7,
    durationNights: 6,
    startingPriceUSD: 1100,
    highlights: {
      en: ["Baptism Site of Jesus Christ (Bethany Beyond the Jordan)", "Mount Nebo Sanctuary & Brazen Serpent", "Madaba St. George Mosaic Map", "Petra & Dead Sea exploration"],
      de: ["Taufstelle Jesu Christi (Bethanien jenseits des Jordans)", "Berg Nebo & Eherne Schlange", "Mosaikkarte von Madaba in der St.-Georgs-Kirche", "Petra & Totes Meer"],
      fr: ["Site du baptême du Christ (Béthanie au-delà du Jourdain)", "Sanctuaire du Mont Nébo & Serpent d'airain", "Mosaïque de Saint-Georges à Madaba", "Exploration de Pétra & de la Mer Morte"],
      it: ["Luogo del battesimo di Gesù Cristo (Betania oltre il Giordano)", "Santuario del Monte Nebo e Serpente di Bronzo", "Mappa Mosaico di San Giorgio a Madaba", "Esplorazione di Petra e del Mar Morto"]
    },
    route: ["Amman", "Baptism Site", "Mount Nebo", "Madaba", "Petra", "Dead Sea"],
    inclusions: {
      en: ["All transfers & hotel accommodations", "Holy site entry permits & guides", "Daily breakfast & 3 dinners"],
      de: ["Alle Transfers & Hotelunterkünfte", "Eintrittsgenehmigungen für heilige Stätten", "Tägliches Frühstück & 3 Abendessen"],
      fr: ["Tous les transferts & hébergements en hôtel", "Permis d'entrée aux sites sacrés & guides", "Petit-déjeuner quotidien & 3 dîners"],
      it: ["Tutti i trasferimenti e sistemazioni in hotel", "Permessi d'ingresso ai luoghi sacri e guide", "Colazione giornaliera e 3 cene"]
    },
    exclusions: {
      en: ["Personal expenses", "Flights"],
      de: ["Persönliche Ausgaben", "Flüge"],
      fr: ["Dépenses personnelles", "Vols"],
      it: ["Spese personali", "Voli"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman", fr: "Arrivée à Amman", it: "Arrivo ad Amman" }, description: { en: "Airport pickup and hotel check-in.", de: "Flughafentransfer und Check-in.", fr: "Accueil à l'aéroport et enregistrement à l'hôtel.", it: "Accoglienza in aeroporto e check-in in hotel." }, meals: "Dinner", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Baptism Site → Mount Nebo → Madaba", de: "Taufstelle → Berg Nebo → Madaba", fr: "Site du Baptême → Mont Nébo → Madaba", it: "Luogo del Battesimo → Monte Nebo → Madaba" }, description: { en: "Visit the Jordan River Baptism Site, Mount Nebo sanctuary, and St. George Church.", de: "Besuch der Taufstelle am Jordan, des Berges Nebo und der St.-Georgs-Kirche.", fr: "Visite du site du baptême au Jourdain, du Mont Nébo et de l'église Saint-Georges.", it: "Visita del luogo del battesimo sul fiume Giordano, del Monte Nebo e della chiesa di San Giorgio." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman → Machaerus (Mukawir) → Petra", de: "Amman → Machaerus (Mukawir) → Petra", fr: "Amman → Machéronte (Mukawir) → Pétra", it: "Amman → Macheronte (Mukawir) → Petra" }, description: { en: "Visit Herod's fortress where John the Baptist was imprisoned, drive to Petra.", de: "Besichtigung der Festung Machaerus und Weiterfahrt nach Petra.", fr: "Visite de la forteresse d'Hérode où Jean le Baptiste fut emprisonné, puis route vers Pétra.", it: "Visita della fortezza di Erode dove fu imprigionato San Giovanni Battista, poi guida verso Petra." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Full Day Biblical Exploration", de: "Petra Ganztägige Erkundung", fr: "Pétra Exploration Biblique Journée Complète", it: "Petra Esplorazione Biblica Intera Giornata" }, description: { en: "Walk through the Siq to the Treasury, Royal Tombs, and Aaron's Tomb viewpoint.", de: "Besichtigung des Schatzhauses, der Königsgräber und des Aaron-Berges.", fr: "Traversée du Siq jusqu'au Trésor, Tombeaux Royaux et belvédère du Tombeau d'Aaron.", it: "Passeggiata nel Siq fino al Tesoro, Tombe Reali e punto panoramico della Tomba di Aronne." }, meals: "Breakfast", accommodation: "4-Star Hotel in Petra" },
      { day: 5, title: { en: "Petra → Lot's Cave → Dead Sea", de: "Petra → Höhle des Lot → Totes Meer", fr: "Pétra → Grotte de Loth → Mer Morte", it: "Petra → Grotta di Lot → Mar Morto" }, description: { en: "Visit Lot's Cave overlooking the Dead Sea, float in the mineral waters.", de: "Besichtigung der Höhle des Lot und Entspannung am Toten Meer.", fr: "Visite de la grotte de Loth surplombant la Mer Morte et baignade flottante.", it: "Visita della grotta di Lot affacciata sul Mar Morto e bagno galleggiante nelle acque minerali." }, meals: "Breakfast & Dinner", accommodation: "Dead Sea Resort" },
      { day: 7, title: { en: "Dead Sea → Departure", de: "Totes Meer → Abreise", fr: "Mer Morte → Départ", it: "Mar Morto → Partenza" }, description: { en: "Transfer to Queen Alia Airport.", de: "Flughafentransfer zum Abflug.", fr: "Transfert à l'aéroport d'Amman.", it: "Trasferimento all'aeroporto di Amman." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg",
    gallery: [
      { id: "hl2-1", url: "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg", alt: { en: "Baptism Site Bethany Beyond the Jordan", de: "Taufstelle Bethanien am Jordan" }, caption: { en: "Original legacy media: Jordan River Baptism Site", de: "Originales Medien-Asset: Taufstelle am Jordan" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "hl2-2", url: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg", alt: { en: "Dead Sea mineral water", de: "Totes Meer Mineralwasser" }, caption: { en: "Original legacy media: Dead Sea Float", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What additional sacred sites are visited on Holy Land Tour 2?",
          de: "Welche zusätzlichen heiligen Stätten werden auf der Heiliges Land Tour 2 besucht?",
          fr: "Quels sites sacrés supplémentaires sont visités lors du Circuit Terre Sainte 2 ?",
          it: "Quali altri luoghi sacri si visitano nel Tour Terra Santa 2?"
        },
        answer: {
          en: "Holy Land Tour 2 includes Machaerus (Mukawir) where John the Baptist was imprisoned, plus Lot's Cave sanctuary overlooking the Dead Sea.",
          de: "Die Heiliges Land Tour 2 beinhaltet Machaerus (Mukawir), wo Johannes der Täufer inhaftiert war, sowie die Höhle des Lot am Toten Meer.",
          fr: "Le Circuit Terre Sainte 2 inclut Machéronte (Mukawir) où Jean le Baptiste fut emprisonné et la grotte de Loth à la Mer Morte.",
          it: "Il Tour Terra Santa 2 include Macheronte (Mukawir) dove fu imprigionato San Giovanni Battista e la grotta di Lot sul Mar Morto."
        }
      }
    ]
  },
  {
    id: "holy-land-3",
    slug: { en: "jordan-holy-land-tour-3-8-days", de: "jordan-heiliges-land-tour-3-8-tage", fr: "circuit-jordanien-terre-sainte-3-8-jours", it: "tour-giordania-terra-santa-3-8-giorni" },
    title: { en: "Jordan Holy Land Tour 3 — 8-Day Complete Pilgrimage", de: "Jordanien Heiliges Land Tour 3 — 8-Tage Komplett-Pilgerreise", fr: "Circuit Terre Sainte 3 — 8 Jours Grand Pèlerinage", it: "Tour Terra Santa 3 — 8 Giorni Grande Pellegrinaggio" },
    subtitle: { en: "8 Days Visiting Jordan River, Mt Nebo, Machaerus, Lot's Cave & Petra", de: "8 Tage Taufstelle, Berg Nebo, Machaerus, Lot-Höhle & Petra", fr: "8 jours d'immersion au Jourdain, Mont Nébo, Machéronte, Grotte de Loth & Pétra", it: "8 giorni tra il fiume Giordano, Monte Nebo, Macheronte, Grotta di Lot e Petra" },
    category: "Biblical",
    storyCollection: "Sacred Story",
    durationDays: 8,
    durationNights: 7,
    startingPriceUSD: 1250,
    highlights: {
      en: ["Baptism Site of Jesus Christ (Bethany)", "Mount Nebo Sanctuary & Brazen Serpent", "Machaerus (Mukawir) Herod's Palace Ruins", "Lot's Cave & Sanctuary at Dead Sea"],
      de: ["Taufstelle Jesu Christi in Bethanien", "Berg Nebo & Eherne Schlange", "Palastruinen von Machaerus", "Höhle des Lot am Toten Meer"],
      fr: ["Site du baptême du Christ à Béthanie", "Sanctuaire du Mont Nébo", "Ruines du palais d'Hérode à Machéronte", "Grotte de Loth & sanctuaire de la Mer Morte"],
      it: ["Luogo del battesimo di Gesù Cristo a Betania", "Santuario del Monte Nebo", "Rovine del palazzo di Erode a Macheronte", "Grotta di Lot e santuario del Mar Morto"]
    },
    route: ["Amman", "Baptism Site", "Mount Nebo", "Madaba", "Mukawir", "Petra", "Dead Sea"],
    inclusions: {
      en: ["Private AC vehicle with driver", "7 Nights 4-Star Hotel Accommodation", "All holy site permits & private guide", "Daily breakfast & 4 dinners"],
      de: ["Privatfahrzeug mit Fahrer", "7 Nächte in 4-Sterne-Hotels", "Alle Eintrittsgelder & Reiseleiter", "Tägliches Frühstück & 4 Abendessen"],
      fr: ["Véhicule privé climatisé avec chauffeur", "7 nuits en hôtel 4 étoiles", "Tous les permis des sites sacrés & guide privé", "Petit-déjeuner quotidien & 4 dîners"],
      it: ["Veicolo privato climatizzato con autista", "7 notti in hotel 4 stelle", "Tutti i permessi dei luoghi sacri e guida privata", "Colazione giornaliera e 4 cene"]
    },
    exclusions: {
      en: ["Flights", "Tips"],
      de: ["Flüge", "Trinkgelder"],
      fr: ["Vols", "Pourboires"],
      it: ["Voli", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman", fr: "Arrivée à Amman", it: "Arrivo ad Amman" }, description: { en: "Airport pickup & transfer to Amman hotel.", de: "Flughafentransfer zum Hotel.", fr: "Accueil à l'aéroport et transfert à l'hôtel d'Amman.", it: "Accoglienza in aeroporto e trasferimento all'hotel di Amman." }, meals: "Dinner", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Baptism Site → Mount Nebo → Madaba", de: "Taufstelle → Berg Nebo → Madaba", fr: "Site du Baptême → Mont Nébo → Madaba", it: "Luogo del Battesimo → Monte Nebo → Madaba" }, description: { en: "Jordan River Baptism Site, Mt Nebo & Madaba Mosaics.", de: "Taufstelle am Jordan, Berg Nebo & Mosaike.", fr: "Site du baptême du Jourdain, Mont Nébo et mosaïques de Madaba.", it: "Luogo del battesimo sul Giordano, Monte Nebo e mosaici di Madaba." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman → Mukawir (Machaerus) → Petra", de: "Amman → Mukawir (Machaerus) → Petra", fr: "Amman → Machéronte (Mukawir) → Pétra", it: "Amman → Macheronte (Mukawir) → Petra" }, description: { en: "Herod's Mukawir fortress where John the Baptist was martyred.", de: "Festung Mukawir und Weiterfahrt nach Petra.", fr: "Forteresse de Machéronte où Jean le Baptiste fut martyrisé, puis route vers Pétra.", it: "Fortezza di Erode a Macheronte dove fu martirizzato San Giovanni Battista, poi guida verso Petra." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Full Day Pilgrimage Walk", de: "Petra Ganztägige Pilgerwanderung", fr: "Pétra Marche de Pèlerinage Journée Complète", it: "Petra Cammino di Pellegrinaggio Intera Giornata" }, description: { en: "Explore Treasury, Royal Tombs, and Aaron's Tomb view.", de: "Schatzhaus, Königsgräber & Aaron-Berg.", fr: "Découverte du Trésor, des Tombeaux Royaux et du Mont Hor (Aaron).", it: "Esplorazione del Tesoro, delle Tombe Reali e vista sulla Tomba di Aronne." }, meals: "Breakfast", accommodation: "4-Star Hotel in Petra" },
      { day: 5, title: { en: "Petra → Lot's Cave → Dead Sea", de: "Petra → Höhle des Lot → Totes Meer", fr: "Pétra → Grotte de Loth → Mer Morte", it: "Petra → Grotta di Lot → Mar Morto" }, description: { en: "Lot's Cave sanctuary overlooking Dead Sea saline waters.", de: "Höhle des Lot und Entspannung am Toten Meer.", fr: "Sanctuaire de la grotte de Loth surplombant les eaux salées de la Mer Morte.", it: "Santuario della grotta di Lot affacciato sulle acque saline del Mar Morto." }, meals: "Breakfast & Dinner", accommodation: "Dead Sea Resort" },
      { day: 6, title: { en: "Dead Sea Spiritual Spa Day", de: "Totes Meer Spa-Tag", fr: "Journée Spa Spirituel à la Mer Morte", it: "Giornata Spa Spirituale al Mar Morto" }, description: { en: "Relaxation and mineral mud floating.", de: "Wellness & Mineral-Schlammbad.", fr: "Relaxation et baignade dans la boue minérale.", it: "Relax e bagno galleggiante nei fanghi minerali." }, meals: "Breakfast", accommodation: "Dead Sea Resort" },
      { day: 7, title: { en: "Dead Sea → Tell Mar Elias → Anjara → Amman", de: "Totes Meer → Tell Mar Elias → Anjara → Amman", fr: "Mer Morte → Tell Mar Elias → Anjara → Amman", it: "Mar Morto → Tell Mar Elias → Anjara → Amman" }, description: { en: "Elijah's birthplace Tell Mar Elias & Lady of the Mountain shrine in Anjara.", de: "Geburtsort des Elija Tell Mar Elias & Anjara Heiligtum.", fr: "Lieu de naissance d'Élie à Tell Mar Elias et sanctuaire Notre-Dame de la Montagne à Anjara.", it: "Luogo di nascita di Elia a Tell Mar Elias e santuario della Madonna della Montagna ad Anjara." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 8, title: { en: "Amman → Airport Departure", de: "Amman → Flughafentransfer", fr: "Amman → Départ Aéroport", it: "Amman → Partenza Aeroporto" }, description: { en: "Final airport transfer.", de: "Abschließender Flughafentransfer.", fr: "Transfert final vers l'aéroport.", it: "Trasferimento finale in aeroporto." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg",
    gallery: [
      { id: "hl3-1", url: "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg", alt: { en: "Dead Sea float near Lot's Cave", de: "Bad im Toten Meer" }, caption: { en: "Original legacy media: Dead Sea float", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "hl3-2", url: "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg", alt: { en: "Baptism Site am Jordan", de: "Taufstelle am Jordan" }, caption: { en: "Original legacy media: Jordan River", de: "Originales Medien-Asset: Jordan-Fluss" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What makes the 8-Day Holy Land Tour the complete Jordan pilgrimage?",
          de: "Was macht die 8-Tage Heiliges Land Tour zur vollständigen Jordanien-Pilgerreise?",
          fr: "Qu'est-ce qui fait du Circuit Terre Sainte de 8 Jours le pèlerinage le plus complet ?",
          it: "Cosa rende il Tour Terra Santa di 8 Giorni il pellegrinaggio più completo?"
        },
        answer: {
          en: "It encompasses Tell Mar Elias (birthplace of Prophet Elijah), Anjara Lady of the Mountain sanctuary, Bethany Baptism Site, Mt Nebo, Machaerus, Lot's Cave, and Petra.",
          de: "Die Reise umfasst Tell Mar Elias (Geburtsort des Propheten Elija), Anjara, Bethanien am Jordan, Berg Nebo, Machaerus, Höhle des Lot und Petra.",
          fr: "Il englobe Tell Mar Elias (lieu de naissance du prophète Élie), le sanctuaire d'Anjara, Béthanie, le Mont Nébo, Machéronte, la grotte de Loth et Pétra.",
          it: "Comprende Tell Mar Elias (luogo di nascita del profeta Elia), il sanctuario di Anjara, Betania, il Monte Nebo, Macheronte, la grotta di Lot e Petra."
        }
      }
    ]
  },

  // --- ISLAMIC TOURS (2) ---
  {
    id: "islamic-tour-1",
    slug: { en: "islamic-tour-jordan-companions", de: "islamische-tour-jordanien-gefährten", fr: "circuit-islamique-jordanie-compagnons", it: "tour-islamico-giordania-compagni" },
    title: { en: "Islamic Heritage Tour — Companions Tombs & Battlefields", de: "Islamische Erbe-Tour — Gräber der Gefährten & Schlachtfelder", fr: "Circuit Patrimoine Islamique — Tombeaux des Compagnons & Champs de Bataille", it: "Tour Patrimonio Islamico — Tombe dei Compagni e Campi di Battaglia" },
    subtitle: { en: "5 Days Visiting Tombs of Sahaba (Companions) & Mutah Battlefield", de: "5 Tage Besichtigung der Gräber der Sahaba & Schlachtfeld Mu'tah", fr: "5 jours de visite des tombeaux des Sahaba (Compagnons) & du champ de bataille de Mu'tah", it: "5 giorni di visite alle tombe dei Sahaba (Compagni) e al campo di battaglia di Mutah" },
    category: "Islamic",
    storyCollection: "Sacred Story",
    durationDays: 5,
    durationNights: 4,
    startingPriceUSD: 650,
    highlights: {
      en: ["Tombs of Sahaba (Abu Ubaidah, Muath Ibn Jabal, Shurahbil)", "Battlefield of Mu'tah shrine & tombs of Ja'far Ibn Abi Talib", "King Abdullah Blue Mosque & Citadel", "Petra & Dead Sea float"],
      de: ["Gräber der Sahaba (Abu Ubaidah, Muath Ibn Jabal)", "Schlachtfeld von Mu'tah & Grab von Ja'far Ibn Abi Talib", "König-Abdullah-Moschee & Zitadelle", "Petra & Totes Meer"],
      fr: ["Tombeaux des Sahaba (Abu Ubaidah, Muath Ibn Jabal, Shurahbil)", "Sanctuaire du champ de bataille de Mu'tah & tombeau de Ja'far Ibn Abi Talib", "Mosquée bleue du Roi Abdallah & Citadelle d'Amman", "Baignade à Pétra & à la Mer Morte"],
      it: ["Tombe dei Sahaba (Abu Ubaidah, Muath Ibn Jabal, Shurahbil)", "Santuario del campo di battaglia di Mu'tah e tomba di Ja'far Ibn Abi Talib", "Moschea Blu del Re Abdullah e Cittadella", "Petra e bagno al Mar Morto"]
    },
    route: ["Amman", "Jordan Valley", "Mutah", "Petra", "Dead Sea"],
    inclusions: {
      en: ["Private AC vehicle & driver", "4 Nights Hotel Accommodations", "Daily Halal breakfast & 2 dinners", "Islamic site entry permits"],
      de: ["Klimatisiertes Fahrzeug mit Fahrer", "4 Nächte Hotelunterkunft", "Tägliches Halal-Frühstück & 2 Abendessen", "Eintrittsgelder"],
      fr: ["Véhicule privé climatisé avec chauffeur", "4 nuits en hôtel", "Petit-déjeuner quotidien Halal & 2 dîners", "Permis d'entrée aux sites islamiques"],
      it: ["Veicolo privato climatizzato con autista", "4 notti in hotel", "Colazione giornaliera Halal e 2 cene", "Permessi d'ingresso ai luoghi islamici"]
    },
    exclusions: {
      en: ["Flights", "Tips"],
      de: ["Flüge", "Trinkgelder"],
      fr: ["Vols", "Pourboires"],
      it: ["Voli", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman → King Abdullah Mosque", de: "Ankunft in Amman → König-Abdullah-Moschee", fr: "Arrivée à Amman → Mosquée du Roi Abdallah", it: "Arrivo ad Amman → Moschea del Re Abdullah" }, description: { en: "Airport pickup, visit King Abdullah Blue Mosque and Amman Citadel.", de: "Flughafentransfer, Besuch der blauen Moschee und Zitadelle.", fr: "Accueil à l'aéroport, visite de la Mosquée Bleue du Roi Abdallah et de la Citadelle d'Amman.", it: "Accoglienza in aeroporto, visita della Moschea Blu del Re Abdullah e della Cittadella di Amman." }, meals: "Dinner", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Jordan Valley Sahaba Tombs (Abu Ubaidah & Muath)", de: "Jordantal Sahaba-Gräber (Abu Ubaidah & Muath)", fr: "Tombeaux des Sahaba dans la Vallée du Jourdain", it: "Tombe dei Sahaba nella Valle del Giordano" }, description: { en: "Visit tombs of venerable companions Abu Ubaidah, Muath Ibn Jabal & Shurahbil.", de: "Besuch der Gräber der Gefährten im Jordantal.", fr: "Visite des sanctuaires des vénérables compagnons Abu Ubaidah, Muath Ibn Jabal & Shurahbil.", it: "Visita alle tombe dei venerabili compagni Abu Ubaidah, Muath Ibn Jabal e Shurahbil." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman → Mutah Battlefield Shrine → Petra", de: "Amman → Schlachtfeld Mu'tah → Petra", fr: "Amman → Sanctuaire du Champ de Bataille de Mu'tah → Pétra", it: "Amman → Santuario del Campo di Battaglia di Mutah → Petra" }, description: { en: "Visit shrine of Ja'far Ibn Abi Talib & Zayd Ibn Harithah at Mutah, drive to Petra.", de: "Besichtigung des Schlachtfeldes von Mu'tah und der Gräber von Ja'far & Zayd.", fr: "Visite du sanctuaire de Ja'far Ibn Abi Talib & Zayd Ibn Harithah à Mu'tah, puis route vers Pétra.", it: "Visita al santuario di Ja'far Ibn Abi Talib e Zayd Ibn Harithah a Mutah, poi guida verso Petra." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Rose City → Dead Sea Resort", de: "Petra Felsenstadt → Totes Meer Resort", fr: "Pétra la Cité Rose → Resort de la Mer Morte", it: "Petra la Città Rosa → Resort sul Mar Morto" }, description: { en: "Explore Petra Treasury, afternoon drive to Dead Sea for floating.", de: "Besichtigung von Petra und Nachmittags-Transfer zum Toten Meer.", fr: "Découverte du Trésor de Pétra, puis route l'après-midi vers la Mer Morte pour la baignade.", it: "Esplorazione del Tesoro di Petra, trasferimento pomeridiano al Mar Morto per il bagno." }, meals: "Breakfast", accommodation: "Dead Sea Resort" },
      { day: 5, title: { en: "Dead Sea → Airport Departure", de: "Totes Meer → Flughafentransfer", fr: "Mer Morte → Départ Aéroport", it: "Mar Morto → Partenza Aeroporto" }, description: { en: "Morning Dead Sea floating & airport drop-off.", de: "Totes Meer Schwebebad & Flughafentransfer.", fr: "Baignade matinale dans la Mer Morte & transfert à l'aéroport.", it: "Bagno mattutino nel Mar Morto e trasferimento in aeroporto." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2017/01/dome-of-the-rock-jerusalem-tours-600x567.jpg",
    gallery: [
      { id: "it1-1", url: "https://jordanstorytours.com/content/uploads/2017/01/dome-of-the-rock-jerusalem-tours-600x567.jpg", alt: { en: "Islamic Heritage Dome of the Rock shrine", de: "Islamisches Erbe Felsendom Heiligtum" }, caption: { en: "Original legacy media: Islamic & Historical Tours", de: "Originales Medien-Asset: Islamische Touren" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "it1-2", url: "https://jordanstorytours.com/content/uploads/2021/01/Qusayr-Amra-panorama-700x500.jpg", alt: { en: "Qasr Amra Desert Castle", de: "Wüstenschloss Qasr Amra" }, caption: { en: "Original legacy media: UNESCO Desert Castle", de: "Originales Medien-Asset: Wüstenschloss" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "Which Sahaba (Companions) shrines are visited?",
          de: "Welche Schrein-Stätten der Sahaba (Gefährten) werden besucht?",
          fr: "Quels sanctuaires des Sahaba (Compagnons) sont visités ?",
          it: "Quali santuari dei Sahaba (Compagni) si visitano?"
        },
        answer: {
          en: "The tour visits the tombs of Abu Ubaidah Amer Ibn Al-Jarrah, Muath Ibn Jabal, Shurahbil Ibn Hasana, and Ja'far Ibn Abi Talib at Mutah.",
          de: "Die Tour besucht die Gräber von Abu Ubaidah, Muath Ibn Jabal, Shurahbil und Ja'far Ibn Abi Talib in Mu'tah.",
          fr: "Le circuit visite les tombeaux d'Abu Ubaidah, Muath Ibn Jabal, Shurahbil et Ja'far Ibn Abi Talib à Mutah.",
          it: "Il tour visita le tombe di Abu Ubaidah, Muath Ibn Jabal, Shurahbil e Ja'far Ibn Abi Talib a Mutah."
        }
      },
      {
        question: {
          en: "Are all meals 100% Halal certified?",
          de: "Sind alle Mahlzeiten 100% Halal-zertifiziert?",
          fr: "Tous les repas sont-ils certifiés 100% Halal ?",
          it: "Tutti i pasti sono certificati 100% Halal?"
        },
        answer: {
          en: "Yes, all included breakfasts and dinners served across hotels and local restaurants are 100% Halal certified.",
          de: "Ja, alle enthaltenen Mahlzeiten in den Hotels und Restaurants sind 100% Halal-zertifiziert.",
          fr: "Oui, tous les repas inclus servis dans les hôtels et restaurants sont certifiés 100% Halal.",
          it: "Sì, tutti i pasti inclusi serviti in hotel e ristoranti sono certificati 100% Halal."
        }
      }
    ]
  },

  {
    id: "islamic-historical-tour",
    slug: { en: "islamic-historical-tour-1", de: "islamisch-historische-tour-1", fr: "circuit-historique-islamique-1", it: "tour-storico-islamico-1" },
    title: { en: "Islamic & Historical Jordan Tour — 6 Days", de: "Islamisch-Historische Jordanien Tour — 6 Tage", fr: "Circuit Historique & Islamique en Jordanie — 6 Jours", it: "Tour Storico e Islamico della Giordania — 6 Giorni" },
    subtitle: { en: "6 Days Combining Islamic Shrines, Ajloun Saladin Fortress & Petra", de: "6 Tage Islamische Heiligtümer, Saladin-Burg Ajloun & Petra", fr: "6 jours combinant les sanctuaires islamiques, la forteresse d'Ajloun & Pétra", it: "6 giorni tra santuari islamici, la fortezza di Saladino ad Ajloun e Petra" },
    category: "Islamic",
    storyCollection: "Sacred Story",
    durationDays: 6,
    durationNights: 5,
    startingPriceUSD: 780,
    highlights: {
      en: ["Ajloun Castle built by Saladin's nephew (1184 AD)", "Tombs of Sahaba & Prophet Shoaib Shrine", "Petra Rose City & Dead Sea Float", "Desert Castles Qasr Amra & Qasr Al-Kharanah"],
      de: ["Burg Ajloun (1184 n.Chr. von Saladins Neffen erbaut)", "Gräber der Sahaba & Shoaib Heiligtum", "Petra Felsenstadt & Totes Meer", "Wüstenschlösser Qasr Amra"],
      fr: ["Château d'Ajloun construit par le neveu de Saladin (1184 apr. J.-C.)", "Tombeaux des Sahaba & Sanctuaire du Prophète Shoaib", "Pétra la Cité Rose & Baignade à la Mer Morte", "Châteaux du Désert Qasr Amra & Qasr Al-Kharanah"],
      it: ["Castello di Ajloun (1184 d.C.)", "Tombe dei Sahaba e Santuario del Profeta Shoaib", "Petra e bagno al Mar Morto", "Castelli del Deserto Qasr Amra e Qasr Al-Kharanah"]
    },
    route: ["Amman", "Ajloun", "Jordan Valley", "Mutah", "Petra", "Dead Sea"],
    inclusions: {
      en: ["Private AC vehicle with driver", "5 Nights Hotel Accommodations", "Daily Halal breakfast & 3 dinners", "All entrance fees"],
      de: ["Privatfahrzeug mit Fahrer", "5 Nächte Hotelunterkunft", "Tägliches Halal-Frühstück & 3 Abendessen", "Alle Eintrittsgelder"],
      fr: ["Véhicule privé climatisé avec chauffeur", "5 nuits en hôtel", "Petit-déjeuner Halal quotidien & 3 dîners", "Tous les frais d'entrée"],
      it: ["Veicolo privato climatizzato con autista", "5 notti in hotel", "Colazione Halal giornaliera e 3 cene", "Tutti i biglietti d'ingresso"]
    },
    exclusions: {
      en: ["Flights", "Tips"],
      de: ["Flüge", "Trinkgelder"],
      fr: ["Vols", "Pourboires"],
      it: ["Voli", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman", fr: "Arrivée à Amman", it: "Arrivo ad Amman" }, description: { en: "Airport pickup & transfer to hotel.", de: "Flughafentransfer zum Hotel.", fr: "Accueil à l'aéroport et transfert à l'hôtel.", it: "Accoglienza in aeroporto e trasferimento in hotel." }, meals: "Dinner", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Amman → Ajloun Saladin Fortress → Jerash", de: "Amman → Saladin-Burg Ajloun → Jerash", fr: "Amman → Forteresse d'Ajloun → Gérasa", it: "Amman → Fortezza di Ajloun → Jerash" }, description: { en: "Explore Ajloun Castle built in 1184 AD & Roman Jerash.", de: "Besichtigung von Burg Ajloun und Römerstadt Jerash.", fr: "Visite du château d'Ajloun et de Gérasa la Romaine.", it: "Visita del Castello di Ajloun e di Jerash romana." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Jordan Valley Sahaba Shrines → Prophet Shoaib", de: "Jordantal Sahaba-Heiligtümer → Prophet Shoaib", fr: "Sanctuaires des Sahaba dans la Vallée du Jourdain → Prophète Shoaib", it: "Santuari dei Sahaba nella Valle del Giordano → Profeta Shoaib" }, description: { en: "Visit tombs of Abu Ubaidah, Muath Ibn Jabal and Prophet Shoaib shrine.", de: "Besuch der Sahaba-Gräber und Shoaib-Heiligtum.", fr: "Visite des tombeaux d'Abu Ubaidah, Muath Ibn Jabal et du sanctuaire du Prophète Shoaib.", it: "Visita alle tombe di Abu Ubaidah, Muath Ibn Jabal e al santuario del Profeta Shoaib." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 4, title: { en: "Amman → Mutah Battlefield → Petra", de: "Amman → Schlachtfeld Mu'tah → Petra", fr: "Amman → Champ de Bataille de Mu'tah → Pétra", it: "Amman → Campo di Battaglia di Mutah → Petra" }, description: { en: "Visit Mutah battlefield & Ja'far Ibn Abi Talib shrine, drive to Petra.", de: "Schlachtfeld Mu'tah und Weiterfahrt nach Petra.", fr: "Visite du champ de bataille de Mu'tah et route vers Pétra.", it: "Visita al campo di battaglia di Mutah e guida verso Petra." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 5, title: { en: "Petra Rose City → Dead Sea Resort", de: "Petra Felsenstadt → Totes Meer Resort", fr: "Pétra la Cité Rose → Resort de la Mer Morte", it: "Petra la Città Rosa → Resort sul Mar Morto" }, description: { en: "Explore Petra Treasury, afternoon transfer to Dead Sea.", de: "Petra Erkundung & Transfer zum Toten Meer.", fr: "Exploration de Pétra et transfert vers la Mer Morte.", it: "Esplorazione di Petra e trasferimento al Mar Morto." }, meals: "Breakfast & Dinner", accommodation: "Dead Sea Resort" },
      { day: 6, title: { en: "Dead Sea → Departure", de: "Totes Meer → Flughafentransfer", fr: "Mer Morte → Départ", it: "Mar Morto → Partenza" }, description: { en: "Morning floating & airport transfer.", de: "Totes Meer Schwebebad & Flughafentransfer.", fr: "Baignade matinale & transfert à l'aéroport.", it: "Bagno mattutino e trasferimento in aeroporto." }, meals: "Breakfast" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2021/01/Qusayr-Amra-panorama-700x500.jpg",
    gallery: [
      { id: "ih1-1", url: "https://jordanstorytours.com/content/uploads/2021/01/Qusayr-Amra-panorama-700x500.jpg", alt: { en: "Qasr Amra Desert Castle panorama", de: "Panorama des Wüstenschlosses Qasr Amra" }, caption: { en: "Original legacy media: Qasr Amra UNESCO Desert Castle", de: "Originales Medien-Asset: Wüstenschloss Qasr Amra" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "ih1-2", url: "https://jordanstorytours.com/content/uploads/2017/01/dome-of-the-rock-jerusalem-tours-600x567.jpg", alt: { en: "Dome of the Rock Islamic Heritage", de: "Felsendom Islamisches Erbe" }, caption: { en: "Original legacy media: Islamic Shrines", de: "Originales Medien-Asset: Islamische Heiligtümer" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What historical Islamic fortresses are featured?",
          de: "Welche historischen islamischen Festungen werden besichtig?",
          fr: "Quelles forteresses islamiques historiques sont présentées ?",
          it: "Quali fortezze storiche islamiche sono incluse?"
        },
        answer: {
          en: "Ajloun Castle (Qal'at Ar-Rabad), built in 1184 AD by Saladin's nephew Izz Al-Din Usama to defend against Crusader forces.",
          de: "Burg Ajloun (1184 n. Chr. von Saladins Neffen erbaut), um die Region gegen die Kreuzfahrer zu verteidigen.",
          fr: "Le château d'Ajloun (construit en 1184 par le neveu de Saladin pour se défendre contre les Croisés).",
          it: "Il Castello di Ajloun (costruito nel 1184 dal nipote di Saladino per difendersi dai Crociati)."
        }
      }
    ]
  },

  // --- DAY TOURS (6) ---
  {
    id: "day-tour-baptism-deadsea",
    slug: { en: "baptism-site-dead-sea-day-tour", de: "taufstelle-totes-meer-tagesausflug", fr: "excursion-site-bapteme-mer-morte-1-jour", it: "escursione-luogo-battesimo-mar-morto-1-giorno" },
    title: { en: "Baptism Site & Dead Sea Day Excursion", de: "Taufstelle Jesu & Totes Meer Tagesausflug", fr: "Excursion d'un Jour au Site du Baptême & à la Mer Morte", it: "Escursione di un Giorno al Luogo del Battesimo e Mar Morto" },
    subtitle: { en: "1-Day Sacred Pilgrimage & Natural Mineral Spa Float from Amman", de: "1-tägige biblische Pilgerreise & Totes Meer Spa ab Amman", fr: "1 jour de pèlerinage sacré & baignade spa à la Mer Morte depuis Amman", it: "1 giorno di pellegrinaggio sacro e bagno spa al Mar Morto da Amman" },
    category: "Day Tour",
    storyCollection: "Day Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 115,
    highlights: {
      en: ["Baptism Site of Jesus Christ (Bethany Beyond the Jordan)", "Jordan River holy water bank", "Dead Sea resort day pass & floating", "Therapeutic black mud bath"],
      de: ["Taufstelle Jesu Christi jenseits des Jordans", "Ufer des heiligen Jordan-Flusses", "Totes Meer Tagespass & Schwebebad", "Therapeutischer Schlamm"],
      fr: ["Site du baptême du Christ (Béthanie au-delà du Jourdain)", "Rive sacrée du fleuve Jourdain", "Pass journée complexe Mer Morte & baignade flottante", "Bain de boue noire thérapeutique"],
      it: ["Luogo del battesimo di Gesù Cristo (Betania)", "Sponda sacra del fiume Giordano", "Pass giornaliero al resort del Mar Morto e bagno galleggiante", "Bagno terapeutico nei fanghi neri"]
    },
    route: ["Amman", "Baptism Site", "Dead Sea", "Amman"],
    inclusions: {
      en: ["Private AC vehicle with driver", "Hotel pickup and drop-off in Amman", "Dead Sea Resort Entry & Shower Pass", "Mineral Mud Experience"],
      de: ["Klimatisierte Fahrzeug mit Fahrer", "Hotelabholung & Rücktransfer in Amman", "Totes Meer Resort Tageskarte", "Schlammbad-Erlebnis"],
      fr: ["Véhicule privé climatisé avec chauffeur", "Prise en charge et retour à l'hôtel à Amman", "Pass d'entrée au complexe & douches à la Mer Morte", "Expérience de boue minérale"],
      it: ["Veicolo privato climatizzato con autista", "Ritiro e riaccompagnamento in hotel ad Amman", "Pass d'ingresso al resort e docce al Mar Morto", "Esperienza con fanghi minerali"]
    },
    exclusions: {
      en: ["Baptism site entrance fee", "Lunch & drinks", "Tips"],
      de: ["Eintritt Taufstelle", "Mittagessen", "Trinkgelder"],
      fr: ["Frais d'entrée au site du baptême", "Déjeuner & boissons", "Pourboires"],
      it: ["Biglietto per il luogo del battesimo", "Pranzo e bevande", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Amman → Baptism Site → Dead Sea Resort → Amman", de: "Amman → Taufstelle → Totes Meer Resort → Amman", fr: "Amman → Site du Baptême → Complexe Mer Morte → Amman", it: "Amman → Luogo del Battesimo → Resort Mar Morto → Amman" }, description: { en: "Drive down to Jordan River Valley to visit Bethany Beyond Jordan where Jesus Christ was baptized. Continue to luxury Dead Sea resort for lunch, floating & mud bath.", de: "Fahrt zur Taufstelle Jesu Christi und Entspannung im Totes-Meer-Resort.", fr: "Route vers la vallée du Jourdain pour visiter Béthanie où Jésus-Christ fut baptisé, puis détente au complexe de la Mer Morte.", it: "Guida verso la valle del Giordano per visitare Betania dove Gesù Cristo fu battezzato, poi relax al resort del Mar Morto." }, meals: "None" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg",
    gallery: [
      { id: "dt1-1", url: "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg", alt: { en: "Baptism Site of Jesus Christ", de: "Taufstelle Jesu Christi" }, caption: { en: "Original legacy media: Jordan River Baptism Site", de: "Originales Medien-Asset: Taufstelle am Jordan" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What amenities are included at the Dead Sea resort on this day trip?",
          de: "Welche Annehmlichkeiten sind beim Tagesausflug im Totes-Meer-Resort enthalten?",
          fr: "Quels équipements sont inclus au complexe de la Mer Morte ?",
          it: "Quali servizi sono inclusi nel resort del Mar Morto?"
        },
        answer: {
          en: "The excursion includes private beach resort entry, freshwater swimming pools, showers, towel service, and therapeutic mineral mud.",
          de: "Der Tagesausflug beinhaltet den Strandzugang im Resort, Süßwasserpools, Duschen, Handtücher und mineralischen Heilschlamm.",
          fr: "L'excursion inclut l'accès à la plage privée du complexe, les piscines d'eau douce, douches, serviettes et boue minérale.",
          it: "La gita include l'accesso alla spiaggia privata del resort, piscine d'acqua dolce, docce, teli mare e fango minerale."
        }
      }
    ]
  },

  {
    id: "day-tour-deadsea-mujib",
    slug: { en: "dead-sea-wadi-mujib-day-tour", de: "totes-meer-wadi-mujib-tagesausflug", fr: "excursion-mer-morte-wadi-mujib-1-jour", it: "escursione-mar-morto-wadi-mujib-1-giorno" },
    title: { en: "Dead Sea & Wadi Mujib Canyon Adventure", de: "Totes Meer & Wadi Mujib Schluchten-Abenteuer", fr: "Aventure au Canyon du Wadi Mujib & Mer Morte", it: "Avventura nel Canyon del Wadi Mujib e Mar Morto" },
    subtitle: { en: "1-Day Canyoning Water Trail & Floating at Earth's Lowest Point", de: "1 Tag Canyon-Wanderung & Schwebebad am tiefsten Punkt der Erde", fr: "1 jour de randonnée aquatique en canyon & baignade au point le plus bas de la Terre", it: "1 giorno di canyoning e bagno galleggiante nel punto più basso della Terra" },
    category: "Day Tour",
    storyCollection: "Adventure Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 150,
    highlights: {
      en: ["Wadi Mujib Siq Trail canyoning water trek", "Natural freshwater waterfall pool swim", "Dead Sea resort floating pass", "Black mud spa massage"],
      de: ["Wadi Mujib Siq Trail Schluchten-Wanderung", "Schwimmen am natürlichen Wasserfall", "Totes Meer Resort Tageskarte", "Mineral-Schlammbad"],
      fr: ["Randonnée aquatique du Siq Trail dans le canyon du Wadi Mujib", "Baignade sous la cascade naturelle d'eau douce", "Pass journée baignade au complexe de la Mer Morte", "Application de boue noire minérale"],
      it: ["Canyoning lungo il Siq Trail nel canyon del Wadi Mujib", "Bagno nella cascata naturale d'acqua dolce", "Pass giornaliero per il bagno al resort del Mar Morto", "Fanghi neri minerali"]
    },
    route: ["Amman", "Wadi Mujib", "Dead Sea", "Amman"],
    inclusions: {
      en: ["Private vehicle & driver", "Dead Sea Resort Day Pass", "Wadi Mujib Siq Trail entrance assistance"],
      de: ["Privatfahrzeug mit Fahrer", "Totes Meer Tageskarte", "Wadi Mujib Siq Trail Unterstützung"],
      fr: ["Véhicule privé & chauffeur", "Pass journée au complexe de la Mer Morte", "Assistance pour le parcours du Siq au Wadi Mujib"],
      it: ["Veicolo privato con autista", "Pass giornaliero al resort del Mar Morto", "Assistenza per l'ingresso al Siq Trail del Wadi Mujib"]
    },
    exclusions: {
      en: ["Wadi Mujib permit", "Lunch", "Tips"],
      de: ["Wadi Mujib Eintritt", "Mittagessen", "Trinkgelder"],
      fr: ["Permis d'entrée au Wadi Mujib", "Déjeuner", "Pourboires"],
      it: ["Permesso per il Wadi Mujib", "Pranzo", "Mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Amman → Wadi Mujib Canyon Trail → Dead Sea Float → Amman", de: "Amman → Wadi Mujib Schlucht → Totes Meer → Amman", fr: "Amman → Canyon du Wadi Mujib → Baignade à la Mer Morte → Amman", it: "Amman → Canyon del Wadi Mujib → Bagno al Mar Morto → Amman" }, description: { en: "Hike up the water Siq trail in Mujib Biosphere Reserve (-420m) to the hidden waterfall. Afterwards relax at Dead Sea resort.", de: "Wanderung durch die Mujib-Schlucht und Erholung am Toten Meer.", fr: "Randonnée aquatique dans le canyon de la réserve de biosphère du Mujib (-420 m) jusqu'à la cascade cachée, puis détente à la Mer Morte.", it: "Escursione nel canyon d'acqua della riserva di Mujib (-420m) fino alla cascata nascosta, poi relax al resort del Mar Morto." }, meals: "None" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg",
    gallery: [
      { id: "dt2-1", url: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg", alt: { en: "Dead Sea water floating", de: "Baden im Toten Meer" }, caption: { en: "Original legacy media: Dead Sea float", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "dt2-2", url: "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg", alt: { en: "Dead Sea spa resort", de: "Totes Meer Spa Resort" }, caption: { en: "Original legacy media: Dead Sea Resort", de: "Originales Medien-Asset: Dead Sea Resort" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What should I wear and bring for the Wadi Mujib canyon trail?",
          de: "Was sollte ich für die Wadi Mujib Schluchten-Wanderung anziehen und mitbringen?",
          fr: "Que dois-je porter et apporter pour la randonnée dans le canyon du Wadi Mujib ?",
          it: "Cosa dovrei indossare e portare per l'escursione nel canyon del Wadi Mujib?"
        },
        answer: {
          en: "Bring quick-drying water shoes, swimwear, change of dry clothes, and a waterproof phone pouch. Life jackets are provided on site.",
          de: "Bringen Sie schnelltrocknende Wasserschuhe, Badebekleidung, Wechselkleidung und eine wasserdichte Handytasche mit. Schwimmwesten werden bereitgestellt.",
          fr: "Apportez des chaussures d'eau à séchage rapide, un maillot de bain, des vêtements de rechange et une pochette étanche. Les gilets de sauvetage sont fournis.",
          it: "Porta scarpe da acqua ad asciugatura rapida, costume da bagno, cambio e custodia impermeabile. I giubbotti di salvataggio sono forniti."
        }
      }
    ]
  },

  {
    id: "day-tour-petra-rum-express",
    slug: { en: "wadi-rum-and-petra-tour-from-amman", de: "petra-und-wadi-rum-tagesausflug-ab-amman", fr: "excursion-petra-et-wadi-rum-express-depuis-amman", it: "escursione-petra-e-wadi-rum-express-da-amman" },
    title: { en: "Wadi Rum & Petra Express Day Safari from Amman", de: "Petra & Wadi Rum Express-Tagesausflug ab Amman", fr: "Safari Express 1 Jour Pétra & Wadi Rum depuis Amman", it: "Safari Express 1 Giorno Petra e Wadi Rum da Amman" },
    subtitle: { en: "1-Day VIP Private Chauffeur Excursion to Petra & Wadi Rum Dunes", de: "1-tägige VIP-Exkursion nach Petra & Wadi Rum ab Amman", fr: "1 jour d'excursion VIP avec chauffeur privé vers Pétra & les dunes du Wadi Rum", it: "1 giorno di escursione VIP con autista privato a Petra e nel Wadi Rum" },
    category: "Day Tour",
    storyCollection: "Express Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 275,
    highlights: {
      en: ["Guided walk through Petra Siq & Treasury reveal", "2-Hour 4x4 Bedouin Jeep Safari across red dunes", "Desert sunset view over Wadi Rum mountains", "Executive AC private vehicle"],
      de: ["Spaziergang durch den Siq zum Schatzhaus in Petra", "2-Stunden 4x4-Jeepsafari im Wadi Rum", "Wüsten-Sonnenuntergang im Wadi Rum", "Komfortabler Privat-Transfer"],
      fr: ["Visite guidée de Pétra à travers le Siq jusqu'au Trésor", "Safari 4x4 de 2h en jeep bédouine dans les dunes rouges", "Coucher de soleil féerique sur le désert du Wadi Rum", "Véhicule exécutif climatisé"],
      it: ["Visita guidata a Petra attraverso il Siq fino al Tesoro", "Safari in 4x4 di 2 ore tra le dune rosse del Wadi Rum", "Tramonto panoramico sulle montagne del Wadi Rum", "Veicolo executive climatizzato"]
    },
    route: ["Amman", "Petra", "Wadi Rum", "Amman"],
    inclusions: {
      en: ["Private Executive AC vehicle with driver", "Hotel pickup & drop-off in Amman", "2-Hour 4x4 Bedouin Jeep Safari in Wadi Rum", "Complimentary cold bottled water"],
      de: ["Privates Luxus-Fahrzeug mit Fahrer", "Hotelabholung in Amman", "2-Stunden 4x4 Jeep-Safari im Wadi Rum", "Mineralwasser"],
      fr: ["Véhicule exécutif privé climatisé avec chauffeur", "Prise en charge et retour à l'hôtel à Amman", "Safari en jeep 4x4 bédouine de 2h au Wadi Rum", "Bouteilles d'eau fraîche gratuites"],
      it: ["Veicolo executive privato con autista", "Ritiro e riaccompagnamento in hotel ad Amman", "Safari in jeep 4x4 di 2 ore nel Wadi Rum", "Bottiglie d'acqua fresca offerte"]
    },
    exclusions: {
      en: ["Petra entrance fee", "Meals & tips"],
      de: ["Petra Eintrittsgeld", "Mahlzeiten & Trinkgelder"],
      fr: ["Billet d'entrée à Pétra", "Repas & pourboires"],
      it: ["Biglietto d'ingresso a Petra", "Pasti e mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Amman → Petra Rose City → Wadi Rum 4x4 Safari → Amman", de: "Amman → Petra Felsenstadt → Wadi Rum 4x4 Safari → Amman", fr: "Amman → Pétra la Cité Rose → Safari 4x4 Wadi Rum → Amman", it: "Amman → Petra la Città Rosa → Safari 4x4 Wadi Rum → Amman" }, description: { en: "Early 6:00 AM pickup. Drive to Petra for 3-hour walk through Siq to Treasury. Continue to Wadi Rum for 2-hour 4x4 Jeep safari.", de: "Frühe Abholung um 06:00 Uhr in Amman. Petra-Besichtigung und 4x4-Jeepsafari im Wadi Rum.", fr: "Départ matinal à 06h00 d'Amman. Visite de 3h à Pétra puis continuation vers le Wadi Rum pour 2h de safari en 4x4.", it: "Partenza alle 06:00 da Amman. Visita di 3 ore a Petra e safari in 4x4 di 2 ore nel Wadi Rum." }, meals: "None" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg",
    gallery: [
      { id: "dt3-1", url: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg", alt: { en: "Wadi Rum desert camp safari", de: "Wadi Rum Beduinen-Safari" }, caption: { en: "Original legacy media: Wadi Rum 4x4 Safari", de: "Originales Medien-Asset: Wadi Rum Safari" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "dt3-2", url: "https://jordanstorytours.com/content/uploads/2020/11/Petra-Jordan-tours-700x500.jpg", alt: { en: "Petra Treasury", de: "Schatzhaus von Petra" }, caption: { en: "Original legacy media: Petra Rose City", de: "Originales Medien-Asset: Petra" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "Can both Petra and Wadi Rum be comfortably visited in 1 day from Amman?",
          de: "Können Petra und Wadi Rum an einem Tag ab Amman bequem besucht werden?",
          fr: "Peut-on visiter Pétra et le Wadi Rum confortablement en 1 jour depuis Amman ?",
          it: "Si possono visitare Petra e Wadi Rum in 1 solo giorno da Amman?"
        },
        answer: {
          en: "Yes, with early 6:00 AM pickup and private chauffeur, you get 3 full hours at Petra Treasury and a 2-hour 4x4 Jeep safari in Wadi Rum before returning to Amman.",
          de: "Ja, mit Abholung um 06:00 Uhr und rechzeitiger Fahrt haben Sie 3 Stunden in Petra und eine 2-Stunden Jeep-Safari im Wadi Rum.",
          fr: "Oui, avec un départ à 06h00 en chauffeur privé, vous profitez de 3h à Pétra et de 2h de safari en 4x4 dans le Wadi Rum.",
          it: "Sì, partendo alle 06:00 in auto privata, avrai 3 ore a Petra e un safari di 2 ore nel Wadi Rum."
        }
      }
    ]
  },

  {
    id: "day-tour-jerash-ajloun",
    slug: { en: "jerash-ajloun-day-tour", de: "jerash-ajloun-tagesausflug", fr: "excursion-gerasa-et-chateau-ajloun-1-jour", it: "escursione-jerash-e-castello-ajloun-1-giorno" },
    title: { en: "Jerash & Ajloun Castle Day Excursion", de: "Jerash & Burg Ajloun Tagesausflug", fr: "Excursion d'un Jour à Gérasa & au Château d'Ajloun", it: "Escursione di un Giorno a Jerash e Castello di Ajloun" },
    subtitle: { en: "1-Day Northern Greco-Roman & Islamic Fortress Heritage", de: "1-tägiger Ausflug ins römische Jerash & Burg Ajloun", fr: "1 jour de découverte du patrimoine gréco-romain de Gérasa & de la forteresse d'Ajloun", it: "1 giorno tra le rovine romano-greche di Jerash e il Castello di Ajloun" },
    category: "Day Tour",
    storyCollection: "Day Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 120,
    highlights: {
      en: ["Roman Jerash Oval Forum & Hadrian Arch", "Ajloun Fortress built by Saladin nephew (1184 AD)", "Pine forest views of Jordan Valley"],
      de: ["Römisches Jerash Ovales Forum & Hadrianstor", "Burg Ajloun (1184 n. Chr.)", "Blick auf das Jordantal"],
      fr: ["Forum ovale de Gérasa la Romaine & Arc d'Hadrien", "Forteresse d'Ajloun construite par le neveu de Saladin (1184)", "Vues panoramiques sur les forêts de pins et la Vallée du Jourdain"],
      it: ["Forum Ovale di Jerash romana e Arco di Adriano", "Fortezza di Ajloun (1184 d.C.)", "Vista panoramica sulla Valle del Giordano"]
    },
    route: ["Amman", "Jerash", "Ajloun", "Amman"],
    inclusions: {
      en: ["Private vehicle & driver", "Amman Hotel pickup/drop-off"],
      de: ["Privatfahrzeug mit Fahrer", "Hotelabholung in Amman"],
      fr: ["Véhicule privé avec chauffeur", "Prise en charge et retour à l'hôtel à Amman"],
      it: ["Veicolo privato con autista", "Ritiro e riaccompagnamento in hotel ad Amman"]
    },
    exclusions: {
      en: ["Entrance fees", "Lunch & tips"],
      de: ["Eintrittsgelder", "Mittagessen & Trinkgelder"],
      fr: ["Frais d'entrée", "Déjeuner & pourboires"],
      it: ["Biglietti d'ingresso", "Pranzo e mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Amman → Roman Jerash → Ajloun Castle → Amman", de: "Amman → Römisches Jerash → Burg Ajloun → Amman", fr: "Amman → Gérasa Romaine → Château d'Ajloun → Amman", it: "Amman → Jerash Romana → Castello di Ajloun → Amman" }, description: { en: "Explore Roman Jerash ruins and Saladin's Ajloun Castle before returning to Amman.", de: "Besichtigung von Jerash und Burg Ajloun.", fr: "Exploration des ruines romaines de Gérasa et du château d'Ajloun avant le retour à Amman.", it: "Esplorazione delle rovine romane di Jerash e del Castello di Ajloun prima del rientro ad Amman." }, meals: "None" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg",
    gallery: [
      { id: "dt4-1", url: "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg", alt: { en: "Hadrian Arch entry in Roman Jerash", de: "Hadrianstor im römischen Jerash" }, caption: { en: "Original legacy media: Roman Jerash", de: "Originales Medien-Asset: Römisches Jerash" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "How long is the drive from Amman to Jerash and Ajloun?",
          de: "Wie lange dauert die Fahrt von Amman nach Jerash und Ajloun?",
          fr: "Combien de temps dure le trajet d'Amman à Jérash et Ajloun ?",
          it: "Quanto distano Jerash e Ajloun da Amman?"
        },
        answer: {
          en: "Jerash is just 45 minutes north of Amman, and Ajloun Castle is another 30 minutes through pine-forested hills.",
          de: "Jerash ist nur 45 Minuten nördlich von Amman gelegen, und Burg Ajloun weitere 30 Minuten entfernt.",
          fr: "Jérash est à seulement 45 minutes au nord d'Amman, et le château d'Ajloun à 30 minutes de plus.",
          it: "Jerash si trova a soli 45 minuti a nord di Amman, e il Castello di Ajloun a ulteriori 30 minuti."
        }
      }
    ]
  },

  {
    id: "day-tour-petra-express",
    slug: { en: "petra-from-amman-day-tour", de: "petra-tagesausflug-ab-amman", fr: "excursion-petra-express-depuis-amman-1-jour", it: "escursione-petra-express-da-amman-1-giorno" },
    title: { en: "Petra Rose City Express Day Tour from Amman", de: "Petra Felsenstadt Express-Tagesausflug ab Amman", fr: "Excursion Express d'un Jour à Pétra la Cité Rose depuis Amman", it: "Escursione Express di un Giorno a Petra la Città Rosa da Amman" },
    subtitle: { en: "1-Day Private Chauffeur Day Trip to Petra Treasury", de: "1-tägiger Tagesausflug nach Petra ab Amman", fr: "1 jour d'excursion privée avec chauffeur vers le Trésor de Pétra", it: "1 giorno di escursione con autista privato al Tesoro di Petra" },
    category: "Day Tour",
    storyCollection: "Express Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 180,
    highlights: {
      en: ["Full 4-hour exploration inside Petra", "Walk through 1.2km Siq canyon gorge", "Al-Khazneh Treasury reveal", "Royal Tombs & Roman Colonnade"],
      de: ["4 Stunden Erkundung in Petra", "Spaziergang durch den 1,2 km Siq", "Das Schatzhaus Al-Khazneh", "Königsgräber"],
      fr: ["4 heures complètes d'exploration à l'intérieur de Pétra", "Marche dans les gorges du canyon du Siq (1,2 km)", "Découverte spectaculaire du Trésor (Al-Khazneh)", "Tombeaux Royaux & Voie Colonnée Romaine"],
      it: ["4 ore intere di esplorazione all'interno di Petra", "Passeggiata nel canyon del Siq (1,2 km)", "Spettacolare vista del Tesoro (Al-Khazneh)", "Tombe Reali e Strada Colonnata"]
    },
    route: ["Amman", "Petra", "Amman"],
    inclusions: {
      en: ["Private AC vehicle with driver", "Hotel pickup and drop-off in Amman"],
      de: ["Privatfahrzeug mit Fahrer", "Hotelabholung in Amman"],
      fr: ["Véhicule privé climatisé avec chauffeur", "Prise en charge et retour à l'hôtel à Amman"],
      it: ["Veicolo privato climatizzato con autista", "Ritiro e riaccompagnamento in hotel ad Amman"]
    },
    exclusions: {
      en: ["Petra entrance ticket", "Lunch & tips"],
      de: ["Petra Eintrittskarte", "Mittagessen"],
      fr: ["Billet d'entrée à Pétra", "Déjeuner & pourboires"],
      it: ["Biglietto d'ingresso a Petra", "Pranzo e mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Amman → Petra Rose City → Amman", de: "Amman → Petra Felsenstadt → Amman", fr: "Amman → Pétra la Cité Rose → Amman", it: "Amman → Petra la Città Rosa → Amman" }, description: { en: "Morning pickup at 6:30 AM. 3-hour drive to Petra. Enjoy 4 hours walking through the Siq to Treasury & Royal Tombs before returning to Amman.", de: "Morgendliche Abholung und Fahrt nach Petra zur Erkundung des Schatzhauses.", fr: "Départ à 06h30 d'Amman. 3h de route vers Pétra. Profitez de 4h de marche dans le Siq jusqu'au Trésor avant le retour.", it: "Partenza alle 06:30 da Amman. 3 ore di guida per Petra. Goditi 4 ore nel Siq fino al Tesoro prima di tornare ad Amman." }, meals: "None" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2020/11/Petra-Jordan-tours-700x500.jpg",
    gallery: [
      { id: "dt5-1", url: "https://jordanstorytours.com/content/uploads/2020/11/Petra-Jordan-tours-700x500.jpg", alt: { en: "Petra Treasury Al-Khazneh facade", de: "Fassade des Schatzhauses in Petra" }, caption: { en: "Original legacy media: Petra Rose City Treasury", de: "Originales Medien-Asset: Schatzhaus von Petra" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "dt5-2", url: "https://jordanstorytours.com/content/uploads/2020/12/Petra-travel-e1608043798711-600x600.jpg", alt: { en: "Petra sandstone valley", de: "Felsental in Petra" }, caption: { en: "Original legacy media: Petra Valley", de: "Originales Medien-Asset: Petra Tal" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What is the recommended departure time for the Petra Day Tour from Amman?",
          de: "Wann ist die beste Abfahrtszeit für den Petra-Tagesausflug ab Amman?",
          fr: "Quelle est l'heure de départ recommandée pour l'excursion d'un jour à Pétra ?",
          it: "A che ora è consigliato partire da Amman per il tour di un giorno a Petra?"
        },
        answer: {
          en: "We recommend a 6:00 AM departure from Amman to arrive at Petra by 9:00 AM before heavy midday tour buses and sun peak.",
          de: "Wir empfehlen die Abfahrt um 06:00 Uhr morgens in Amman, um um 09:00 Uhr in Petra anzukommen.",
          fr: "Nous recommandons un départ à 06h00 d'Amman pour arriver à Pétra vers 09h00 avant la foule.",
          it: "Consigliamo di partire alle 06:00 da Amman per arrivare a Petra alle 09:00 prima dei grandi gruppi."
        }
      }
    ]
  },

  {
    id: "day-tour-madaba-nebo-deadsea",
    slug: { en: "madaba-nebo-dead-sea-day-tour", de: "madaba-nebo-totes-meer-tagesausflug", fr: "excursion-madaba-mont-nebo-mer-morte-1-jour", it: "escursione-madaba-monte-nebo-mar-morto-1-giorno" },
    title: { en: "Madaba, Mount Nebo & Dead Sea Day Tour", de: "Madaba, Berg Nebo & Totes Meer Tagesausflug", fr: "Excursion d'un Jour à Madaba, au Mont Nébo & à la Mer Morte", it: "Escursione di un Giorno a Madaba, Monte Nebo e Mar Morto" },
    subtitle: { en: "1-Day Byzantine Mosaic Art, Moses Viewpoint & Dead Sea Float", de: "1 Tag Mosaikstadt Madaba, Berg Nebo & Totes Meer", fr: "1 jour à la découverte des mosaïques byzantines, du sanctuaire de Moïse & baignade à la Mer Morte", it: "1 giorno tra mosaici bizantini, santuario di Mosè e bagno al Mar Morto" },
    category: "Day Tour",
    storyCollection: "Day Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 135,
    highlights: {
      en: ["Madaba St. George 6th century Holy Land mosaic map", "Mount Nebo sanctuary & Promised Land view", "Dead Sea resort floating & mineral black mud"],
      de: ["Mosaikkarte in der St.-Georgs-Kirche Madaba", "Berg Nebo Aussichtspunkt", "Totes Meer Schwebebad"],
      fr: ["Carte en mosaïque de la Terre Sainte du 6ème siècle à Madaba", "Sanctuaire du Mont Nébo & vue sur la Terre Promise", "Pass journée complexe Mer Morte & boue minérale"],
      it: ["Mappa Mosaico del VI secolo a Madaba", "Santuario del Monte Nebo e vista sulla Terra Promessa", "Pass giornaliero al resort del Mar Morto e fanghi minerali"]
    },
    route: ["Amman", "Madaba", "Mount Nebo", "Dead Sea", "Amman"],
    inclusions: {
      en: ["Private vehicle & driver", "Dead Sea Resort Day Pass"],
      de: ["Privatfahrzeug mit Fahrer", "Totes Meer Tageskarte"],
      fr: ["Véhicule privé avec chauffeur", "Pass journée au complexe de la Mer Morte"],
      it: ["Veicolo privato con autista", "Pass giornaliero al resort del Mar Morto"]
    },
    exclusions: {
      en: ["Madaba & Nebo permits", "Lunch & tips"],
      de: ["Eintrittsgelder", "Mittagessen"],
      fr: ["Billets pour Madaba & Mont Nébo", "Déjeuner & pourboires"],
      it: ["Biglietti per Madaba e Monte Nebo", "Pranzo e mance"]
    },
    itinerary: [
      { day: 1, title: { en: "Amman → Madaba → Mount Nebo → Dead Sea → Amman", de: "Amman → Madaba → Berg Nebo → Totes Meer → Amman", fr: "Amman → Madaba → Mont Nébo → Mer Morte → Amman", it: "Amman → Madaba → Monte Nebo → Mar Morto → Amman" }, description: { en: "Visit Madaba St. George mosaic map, Mount Nebo sanctuary, and float at Dead Sea resort.", de: "Besuch von Madaba, Berg Nebo und Schwebebad am Toten Meer.", fr: "Visite de la mosaïque de Madaba, du sanctuaire du Mont Nébo et baignade au complexe de la Mer Morte.", it: "Visita del mosaico di Madaba, del santuario del Monte Nebo e bagno al resort del Mar Morto." }, meals: "None" }
    ],
    heroImage: "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg",
    gallery: [
      { id: "dt6-1", url: "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg", alt: { en: "Dead Sea floating", de: "Bad im Toten Meer" }, caption: { en: "Original legacy media: Dead Sea resort float", de: "Originales Medien-Asset: Bad im Toten Meer" }, sortOrder: 1, rightsStatus: "LEGACY_SITE_ASSET" },
      { id: "dt6-2", url: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg", alt: { en: "Dead Sea salt shore", de: "Salzstrand am Toten Meer" }, caption: { en: "Original legacy media: Dead Sea Shore", de: "Originales Medien-Asset: Totes Meer Strand" }, sortOrder: 2, rightsStatus: "LEGACY_SITE_ASSET" }
    ],
    faqs: [
      {
        question: {
          en: "What is the key highlights order on this 1-day trip?",
          de: "Was ist die Reihenfolge der Highlights auf diesem Tagesausflug?",
          fr: "Quel est l'ordre des étapes sur cet itinéraire d'un jour ?",
          it: "Qual è l'ordine delle tappe in questo tour di un giorno?"
        },
        answer: {
          en: "You visit Madaba St. George Church first, followed by Mount Nebo sanctuary, and end the afternoon floating at Dead Sea beach resort.",
          de: "Sie besuchen zuerst die St.-Georgs-Kirche in Madaba, danach den Berg Nebo und verbringen den Nachmittag am Toten Meer.",
          fr: "Vous visitez l'église Saint-Georges à Madaba, puis le Mont Nébo, et terminez à la Mer Morte.",
          it: "Si visita prima la Chiesa di San Giorgio a Madaba, poi il Monte Nebo, e si conclude al Mar Morto."
        }
      }
    ]
  }
];
