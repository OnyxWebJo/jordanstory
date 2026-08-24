export interface TourGalleryItem {
  id: string;
  url: string;
  alt: { en: string; de: string };
  caption?: { en: string; de: string };
  sortOrder: number;
  rightsStatus: 'VERIFIED_OWNED' | 'LEGACY_SITE_ASSET';
}

export interface Tour {
  id: string;
  slug: { en: string; de: string };
  title: { en: string; de: string };
  subtitle: { en: string; de: string };
  category: 'Classical' | 'Luxury' | 'Budget' | 'Biblical' | 'Day Tour' | 'Islamic';
  storyCollection: string;
  durationDays: number;
  durationNights: number;
  startingPriceUSD: number;
  highlights: { en: string[]; de: string[] };
  route: string[];
  inclusions: { en: string[]; de: string[] };
  exclusions: { en: string[]; de: string[] };
  itinerary: {
    day: number;
    title: { en: string; de: string };
    description: { en: string; de: string };
    meals?: string;
    accommodation?: string;
  }[];
  heroImage: string;
  gallery: TourGalleryItem[];
}

export const TOURS_DATA: Tour[] = [
  // --- BUDGET TOURS (4) ---
  {
    id: "budget-tour-1",
    slug: { en: "budget-tour-1-petra-dead-sea-jerash", de: "budget-tour-1-petra-totes-meer-jerash" },
    title: { en: "Budget Tour 1 — Petra, Dead Sea & Jerash", de: "Budget-Tour 1 — Petra, Totes Meer & Jerash" },
    subtitle: { en: "Jordan's Essential Icons in 3 Unforgettable Days", de: "Jordaniens wichtigste Highlights in 3 unvergesslichen Tagen" },
    category: "Budget",
    storyCollection: "Essential Story",
    durationDays: 3,
    durationNights: 2,
    startingPriceUSD: 399,
    highlights: {
      en: ["Full day exploring Petra Rose City", "Floating in the mineral-rich Dead Sea", "Walk through Roman Jerash"],
      de: ["Ganztägige Erkundung von Petra", "Baden im mineralreichen Toten Meer", "Spaziergang durch das römische Jerash"]
    },
    route: ["Amman", "Petra", "Dead Sea", "Jerash"],
    inclusions: {
      en: ["Airport pickup and drop-off", "Free Jordan Entry Visa assistance", "English-speaking driver & AC vehicle", "2 Nights 3-star hotel accommodation", "Daily breakfast & Petra dinner"],
      de: ["Flughafentransfer hin und zurück", "Kostenlose Visum-Unterstützung", "Englischsprachiger Fahrer & Klima-Fahrzeug", "2 Nächte 3-Sterne-Hotelunterkunft", "Tägliches Frühstück & Petra-Abendessen"]
    },
    exclusions: { en: ["Entrance fees", "International flights", "Tips"], de: ["Eintrittsgelder", "Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Arrival → Transfer to Petra", de: "Ankunft → Transfer nach Petra" }, description: { en: "Welcome to Jordan! Pickup from Queen Alia International Airport and scenic transfer to Petra.", de: "Willkommen in Jordanien! Flughafentransfer nach Petra." }, meals: "Dinner", accommodation: "3-Star Hotel in Petra" },
      { day: 2, title: { en: "Petra Exploration → Dead Sea → Amman", de: "Petra Erkundung → Totes Meer → Amman" }, description: { en: "Walk through the Siq to Al-Khazneh Treasury. Afternoon Dead Sea floating before continuing to Amman.", de: "Petra Erkundung und Nachmittags-Bad im Toten Meer." }, meals: "Breakfast", accommodation: "3-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman City Tour → Ancient Jerash → Departure", de: "Amman Stadtrundfahrt → Antikes Jerash → Abreise" }, description: { en: "Explore Amman Citadel & Roman Theater, then visit Jerash before final airport transfer.", de: "Amman Zitadelle und Römerstadt Jerash vor der Abreise." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1579606030856-494b28b7fa15?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "bt1-1", url: "https://images.unsplash.com/photo-1579606030856-494b28b7fa15?auto=format&fit=crop&w=1200&q=80", alt: { en: "Petra Treasury Al-Khazneh facade view", de: "Fassade des Schatzhauses Al-Khazneh in Petra" }, caption: { en: "The iconic Rose City Treasury revealed through the Siq gorge", de: "Das berühmte Schatzhaus der Felsenstadt Petra" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "bt1-2", url: "https://images.unsplash.com/photo-1580834341580-8c19a9a880b9?auto=format&fit=crop&w=1200&q=80", alt: { en: "Walking through the narrow Petra Siq gorge", de: "Spaziergang durch die schmale Siq-Schlucht in Petra" }, caption: { en: "The ancient 1.2km canyon pathway into Petra", de: "Der 1,2 km lange antike Schluchtenweg nach Petra" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" },
      { id: "bt1-3", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", alt: { en: "Hypersaline floating in the Dead Sea", de: "Schwebendes Bad im salzreichen Toten Meer" }, caption: { en: "Natural mineral salt floating at the lowest point on Earth (-430m)", de: "Natürliches Mineralbad am tiefsten Punkt der Erde" }, sortOrder: 3, rightsStatus: "VERIFIED_OWNED" },
      { id: "bt1-4", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80", alt: { en: "Jerash Roman Forum & Colonnade Street", de: "Römisches Forum und Säulenstraße in Jerash" }, caption: { en: "Preserved Greco-Roman architecture of ancient Jerash", de: "Gut erhaltene römische Architektur im antiken Jerash" }, sortOrder: 4, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "budget-tour-2",
    slug: { en: "budget-tour-2-amman-jerash-madaba-petra-dead-sea", de: "budget-tour-2-amman-jerash-madaba-petra-totes-meer" },
    title: { en: "Budget Tour 2 — Amman, Jerash, Madaba, Petra & Dead Sea", de: "Budget-Tour 2 — Amman, Jerash, Madaba, Petra & Totes Meer" },
    subtitle: { en: "Comprehensive 3-Day Journey Across North & South Wonders", de: "Umfassende 3-Tage-Reise durch den Norden & Süden" },
    category: "Budget",
    storyCollection: "Essential Story",
    durationDays: 3,
    durationNights: 2,
    startingPriceUSD: 449,
    highlights: {
      en: ["Amman Citadel & Roman Jerash", "Madaba Mosaic Map & Mount Nebo", "Petra Treasury & Dead Sea Lunch Float"],
      de: ["Zitadelle von Amman & Römisches Jerash", "Mosaikkarte von Madaba & Berg Nebo", "Petra Schatzhaus & Totes Meer Mittagessen"]
    },
    route: ["Amman", "Jerash", "Madaba", "Mount Nebo", "Dead Sea", "Petra"],
    inclusions: {
      en: ["Private AC transfers with English-speaking driver", "2 Nights 3-star hotel", "Daily breakfast, Dead Sea lunch & Petra dinner", "Free Entry Visa assistance"],
      de: ["Klimatisierte Privat-Transfers mit Fahrer", "2 Nächte 3-Sterne-Hotel", "Tägliches Frühstück, Totes Meer Mittagessen & Petra Abendessen", "Kostenlose Visum-Unterstützung"]
    },
    exclusions: { en: ["Entrance fees", "Flights", "Tips"], de: ["Eintrittsgelder", "Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Airport → Amman City → Jerash → Amman", de: "Flughafen → Amman → Jerash → Amman" }, description: { en: "Airport pickup, tour of Amman Citadel and Roman Jerash.", de: "Empfang am Flughafen, Amman Zitadelle und Jerash." }, meals: "None", accommodation: "3-Star Hotel in Amman" },
      { day: 2, title: { en: "Amman → Madaba → Mount Nebo → Dead Sea → Petra", de: "Amman → Madaba → Berg Nebo → Totes Meer → Petra" }, description: { en: "Visit Madaba, Mount Nebo sanctuary, and Dead Sea resort float before arriving in Petra.", de: "Besuch von Madaba, Berg Nebo und Bad am Toten Meer." }, meals: "Breakfast, Lunch & Dinner", accommodation: "3-Star Hotel in Petra" },
      { day: 3, title: { en: "Petra Exploration → Airport Departure", de: "Petra Erkundung → Flughafentransfer" }, description: { en: "Morning guided walk through Petra Siq to the Treasury, followed by airport drop-off.", de: "Morgendliche Petra-Erkundung und Flughafentransfer." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "bt2-1", url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", alt: { en: "Madaba St George Byzantine Mosaic Map", de: "Mosaikkarte von Madaba in der St. Georgs Kirche" }, caption: { en: "6th century Byzantine map of the Holy Land", de: "Byzantinische Mosaikkarte des Heiligen Landes aus dem 6. Jahrhundert" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "bt2-2", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80", alt: { en: "Mount Nebo view overlooking Jordan Valley", de: "Blick vom Berg Nebo auf das Jordantal" }, caption: { en: "Panoramas of the Promised Land from Mount Nebo", de: "Panorama auf das Gelobte Land vom Berg Nebo" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" },
      { id: "bt2-3", url: "https://images.unsplash.com/photo-1579606030856-494b28b7fa15?auto=format&fit=crop&w=1200&q=80", alt: { en: "Petra Rose City Al-Khazneh Treasury", de: "Felsenstadt Petra Schatzhaus Al-Khazneh" }, caption: { en: "Ancient Nabataean architecture carved directly into sandstone", de: "Antike nabatäische Felsenarchitektur" }, sortOrder: 3, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "budget-tour-3",
    slug: { en: "budget-tour-3-amman-jerash-ajloun-madaba-petra-dead-sea", de: "budget-tour-3-amman-jerash-ajloun-madaba-petra-totes-meer" },
    title: { en: "Budget Tour 3 — 4-Day Complete Northern & Southern Highlights", de: "Budget-Tour 3 — 4-Tage Komplett-Highlights Jordanien" },
    subtitle: { en: "4 Days Exploring Roman Ruins, Crusader Castles, Petra & Dead Sea", de: "4 Tage Römerstädte, Burgen, Petra & Totes Meer" },
    category: "Budget",
    storyCollection: "Essential Story",
    durationDays: 4,
    durationNights: 3,
    startingPriceUSD: 520,
    highlights: {
      en: ["Jerash Roman Ruins & Ajloun Castle", "Madaba Mosaics & Mount Nebo Viewpoint", "Full Day Petra Exploration", "Dead Sea Floating Resort"],
      de: ["Römisches Jerash & Festung Ajloun", "Mosaike in Madaba & Berg Nebo", "Ganzer Tag in Petra", "Totes Meer Schwebebad"]
    },
    route: ["Amman", "Jerash", "Ajloun", "Madaba", "Mount Nebo", "Petra", "Dead Sea"],
    inclusions: {
      en: ["Private vehicle with English-speaking driver", "3 Nights 3-star hotel accommodations", "Daily breakfast & 2 dinners", "Visa assistance"],
      de: ["Privatfahrzeug mit Fahrer", "3 Nächte in 3-Sterne-Hotels", "Tägliches Frühstück & 2 Abendessen", "Visum-Hilfe"]
    },
    exclusions: { en: ["Entrance fees", "Flights", "Tips"], de: ["Eintrittsgelder", "Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Arrival → Amman → Jerash & Ajloun Castle", de: "Ankunft → Amman → Jerash & Burg Ajloun" }, description: { en: "Pickup from airport, full day exploring Jerash & Ajloun Castle.", de: "Flughafentransfer und Tour durch Jerash & Ajloun." }, meals: "None", accommodation: "3-Star Hotel in Amman" },
      { day: 2, title: { en: "Amman → Madaba → Mount Nebo → Petra", de: "Amman → Madaba → Berg Nebo → Petra" }, description: { en: "Visit St. George Mosaic in Madaba, Mount Nebo sanctuary, scenic Kings Highway drive to Petra.", de: "Mosaikstadt Madaba, Berg Nebo und Panoramafahrt nach Petra." }, meals: "Breakfast & Dinner", accommodation: "3-Star Hotel in Petra" },
      { day: 3, title: { en: "Petra Full Day Exploration", de: "Petra Ganztägige Erkundung" }, description: { en: "Walk through the Siq to Treasury, Royal Tombs, and Monastery.", de: "Petra Schatzhaus, Königsgräber und Kloster." }, meals: "Breakfast & Dinner", accommodation: "3-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra → Dead Sea Resort Float → Airport", de: "Petra → Totes Meer Bad → Flughafen" }, description: { en: "Morning Dead Sea floating & mineral mud spa before final airport transfer.", de: "Totes Meer Schwebebad und Flughafentransfer." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "bt3-1", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80", alt: { en: "Jerash Greco-Roman Colonnaded Street", de: "Römische Säulenstraße im antiken Jerash" }, caption: { en: "Walking through the ruins of ancient Jerash", de: "Spaziergang durch die Ruinen von Jerash" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "bt3-2", url: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80", alt: { en: "Ajloun Islamic Fortress on hilltop", de: "Islamische Festung Ajloun auf dem Hügel" }, caption: { en: "Saladin's 12th century fortress overlooking Jordan pine forests", de: "Saladins Burg aus dem 12. Jahrhundert" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" },
      { id: "bt3-3", url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80", alt: { en: "Petra Ad-Deir Monastery monument", de: "Das Felsenkloster Ad-Deir in Petra" }, caption: { en: "The majestic Ad-Deir Monastery at the peak of Petra", de: "Das majestätische Kloster Ad-Deir in Petra" }, sortOrder: 3, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "budget-tour-4",
    slug: { en: "budget-tour-4-petra-wadi-rum-dead-sea", de: "budget-tour-4-petra-wadi-rum-totes-meer" },
    title: { en: "Budget Tour 4 — Petra, Wadi Rum Desert & Dead Sea", de: "Budget-Tour 4 — Petra, Wadi Rum Wüste & Totes Meer" },
    subtitle: { en: "4 Days of Desert Safari, Bedouin Camp Stars & Dead Sea Float", de: "4 Tage Wüstensafari, Beduinencamp & Totes Meer" },
    category: "Budget",
    storyCollection: "Desert Story",
    durationDays: 4,
    durationNights: 3,
    startingPriceUSD: 560,
    highlights: {
      en: ["Bedouin Camp overnight under stars", "2-Hour 4x4 Jeep Safari in Wadi Rum", "Full day in Petra Rose City", "Dead Sea Floating"],
      de: ["Übernachtung im Beduinencamp", "2-Stunden 4x4-Jeepsafari im Wadi Rum", "Ganzer Tag in Petra", "Baden im Toten Meer"]
    },
    route: ["Amman", "Petra", "Wadi Rum", "Dead Sea"],
    inclusions: {
      en: ["Private AC transfers", "2 Nights 3-star hotel + 1 Night Wadi Rum Bedouin Camp", "Daily breakfast, Petra dinner & Wadi Rum Zarb dinner", "2-Hour 4x4 Jeep Safari"],
      de: ["Privat-Transfers", "2 Nächte 3-Sterne-Hotel + 1 Nacht Beduinencamp", "Tägliches Frühstück & 2 Abendessen (inkl. Beduinen Zarb)", "2-Stunden Jeep-Safari"]
    },
    exclusions: { en: ["Entrance fees", "Flights", "Tips"], de: ["Eintrittsgelder", "Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Arrival → Transfer to Petra", de: "Ankunft → Transfer nach Petra" }, description: { en: "Airport pickup and drive to Petra.", de: "Flughafentransfer nach Petra." }, meals: "Dinner", accommodation: "3-Star Hotel in Petra" },
      { day: 2, title: { en: "Petra Exploration → Wadi Rum Desert", de: "Petra Erkundung → Wadi Rum Wüste" }, description: { en: "Explore Petra Treasury, then transfer to Wadi Rum for sunset & Bedouin Zarb dinner.", de: "Petra Schatzhaus und Abend-Transfer ins Wadi Rum." }, meals: "Breakfast & Zarb Dinner", accommodation: "Wadi Rum Bedouin Camp" },
      { day: 3, title: { en: "Wadi Rum 4x4 Jeep Safari → Dead Sea", de: "Wadi Rum 4x4 Jeep Safari → Totes Meer" }, description: { en: "Morning 4x4 Jeep safari through red sand dunes, then transfer to Dead Sea.", de: "Morgendliche Jeep-Safari und Transfer zum Toten Meer." }, meals: "Breakfast", accommodation: "Dead Sea Resort" },
      { day: 4, title: { en: "Dead Sea Float → Airport Departure", de: "Totes Meer Schwebebad → Abreise" }, description: { en: "Morning Dead Sea floating, then final transfer to Queen Alia Airport.", de: "Entspannung am Toten Meer und Flughafentransfer." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "bt4-1", url: "https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80", alt: { en: "Wadi Rum red sand dunes & 4x4 jeep", de: "Rote Sanddünen und 4x4-Jeep im Wadi Rum" }, caption: { en: "Exploring the UNESCO World Heritage Wadi Rum desert", de: "Entdeckung der UNESCO-Weltkulturerbe-Wüste Wadi Rum" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "bt4-2", url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80", alt: { en: "Bedouin camp stargazing under Wadi Rum night sky", de: "Beduinencamp unter dem Sternenhimmel des Wadi Rum" }, caption: { en: "Stargazing at Bedouin camp under clear desert skies", de: "Sternenbeobachtung im Wüstencamp" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" },
      { id: "bt4-3", url: "https://images.unsplash.com/photo-1579606030856-494b28b7fa15?auto=format&fit=crop&w=1200&q=80", alt: { en: "Petra Treasury Al-Khazneh", de: "Felsenstadt Petra Schatzhaus" }, caption: { en: "The Rose City Treasury in Petra", de: "Das Schatzhaus in Petra" }, sortOrder: 3, rightsStatus: "VERIFIED_OWNED" }
    ]
  },

  // --- CLASSICAL TOURS (2) ---
  {
    id: "jordan-classic-1",
    slug: { en: "jordan-story-classic-tour-1", de: "jordan-story-klassik-tour-1" },
    title: { en: "Jordan Story Classic — Petra, Wadi Rum & Dead Sea", de: "Jordan Story Klassik — Petra, Wadi Rum & Totes Meer" },
    subtitle: { en: "The Grand Journey Across Jordan's Wonders", de: "Die große Reise durch Jordaniens Weltwunder" },
    category: "Classical",
    storyCollection: "Complete Story",
    durationDays: 5,
    durationNights: 4,
    startingPriceUSD: 699,
    highlights: {
      en: ["Bedouin camp overnight under Wadi Rum stars", "4x4 Jeep Safari through desert dunes", "Petra Treasury & Monastery", "Dead Sea wellness float"],
      de: ["Übernachtung im Beduinencamp", "4x4-Jeep-Safari im Wadi Rum", "Petra Schatzhaus & Kloster", "Totes Meer Wellness-Erlebnis"]
    },
    route: ["Amman", "Jerash", "Petra", "Wadi Rum", "Dead Sea"],
    inclusions: {
      en: ["All private transfers with English-speaking driver", "3 Nights 4-star hotels + 1 Night Wadi Rum Bedouin Camp", "Daily breakfast, Petra dinner, Wadi Rum Zarb dinner", "2-Hour Wadi Rum 4x4 Jeep Tour"],
      de: ["Alle privaten Transfers mit Fahrer", "3 Nächte in 4-Sterne-Hotels + 1 Nacht Wüstencamp", "Tägliches Frühstück & Abendessen", "2-stündige 4x4 Jeep-Tour im Wadi Rum"]
    },
    exclusions: { en: ["Entrance fees", "International flights", "Tips"], de: ["Eintrittsgelder", "Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman" }, description: { en: "Airport assistance and transfer to hotel in Amman.", de: "Flughafentransfer zum Hotel in Amman." }, meals: "None", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Amman → Jerash → Ajloun Castle → Amman", de: "Amman → Jerash → Burg Ajloun → Amman" }, description: { en: "Full day tour of Jerash and Ajloun Castle.", de: "Ganztagestour durch Jerash und die Festung Ajloun." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman → King's Highway → Madaba → Mount Nebo → Petra", de: "Amman → Königsstraße → Madaba → Berg Nebo → Petra" }, description: { en: "Scenic journey along the King's Highway visiting Madaba mosaic map and Mount Nebo.", de: "Fahrt auf der Königsstraße mit Stopps in Madaba und am Berg Nebo." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Full Day → Wadi Rum Desert Camp", de: "Petra Ganztag → Wadi Rum Wüstencamp" }, description: { en: "Morning exploring Petra. Sunset transfer to Wadi Rum for traditional Bedouin Zarb dinner.", de: "Morgens Petra. Transfer ins Wadi Rum zum Beduinen-Abendessen." }, meals: "Breakfast & Zarb Dinner", accommodation: "Martian Luxury Camp in Wadi Rum" },
      { day: 5, title: { en: "Wadi Rum 4x4 Jeep → Dead Sea → Departure", de: "Wadi Rum 4x4 Jeep → Totes Meer → Abreise" }, description: { en: "Morning Jeep tour across reddish dunes, floating in the Dead Sea, then airport drop-off.", de: "Jeep-Wüstensafari, Entspannung am Toten Meer, danach Flughafentransfer." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1580834341580-8c19a9a880b9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "jc1-1", url: "https://images.unsplash.com/photo-1580834341580-8c19a9a880b9?auto=format&fit=crop&w=1200&q=80", alt: { en: "Walking inside Petra Siq canyon", de: "Wanderung im Siq-Canyon in Petra" }, caption: { en: "Entering the Rose City of Petra through the ancient Siq", de: "Eingang zur Felsenstadt Petra" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "jc1-2", url: "https://images.unsplash.com/photo-1579606030856-494b28b7fa15?auto=format&fit=crop&w=1200&q=80", alt: { en: "Petra Treasury Al-Khazneh", de: "Petra Schatzhaus Al-Khazneh" }, caption: { en: "The iconic facade of Petra Treasury", de: "Das berühmte Schatzhaus in Petra" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" },
      { id: "jc1-3", url: "https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80", alt: { en: "Wadi Rum Bedouin 4x4 safari", de: "Beduinen 4x4-Safari im Wadi Rum" }, caption: { en: "Cruising across red desert sand dunes", de: "Jeep-Safari über die roten Sanddünen" }, sortOrder: 3, rightsStatus: "VERIFIED_OWNED" },
      { id: "jc1-4", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", alt: { en: "Dead Sea mineral mud bath & float", de: "Schlammbad und Schwebebad im Toten Meer" }, caption: { en: "Relaxing at Dead Sea resort", de: "Erholung am Toten Meer" }, sortOrder: 4, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "jordan-classic-2",
    slug: { en: "jordan-story-classic-tour-2-7-days", de: "jordan-story-klassik-tour-2-7-tage" },
    title: { en: "Jordan Story Classic 2 — 7-Day Grand Expedition", de: "Jordan Story Klassik 2 — 7-Tage Große Jordanien Expedition" },
    subtitle: { en: "Complete 7-Day Immersion from Roman North to Red Sea Aqaba", de: "Vollständige 7-Tage-Reise vom römischen Norden bis nach Aqaba" },
    category: "Classical",
    storyCollection: "Grand Story",
    durationDays: 7,
    durationNights: 6,
    startingPriceUSD: 899,
    highlights: {
      en: ["Full day Petra Treasury & Monastery", "Wadi Rum 4x4 Jeep Safari & Martian Camp", "Dead Sea Floating & Aqaba Red Sea Coastal Resort", "Jerash, Ajloun, Madaba & Mount Nebo"],
      de: ["Ganzer Tag in Petra", "Wadi Rum 4x4 Jeep Safari & Beduinencamp", "Totes Meer & Aqaba Rotes Meer Strandresort", "Jerash, Ajloun, Madaba & Berg Nebo"]
    },
    route: ["Amman", "Jerash", "Ajloun", "Madaba", "Mount Nebo", "Petra", "Wadi Rum", "Aqaba", "Dead Sea"],
    inclusions: {
      en: ["Private AC vehicle with driver", "5 Nights 4-Star Hotels + 1 Night Wadi Rum Camp", "Daily breakfast & 4 dinners", "2-Hour 4x4 Jeep Safari"],
      de: ["Klimatisiertes Fahrzeug mit Fahrer", "5 Nächte in 4-Sterne-Hotels + 1 Nacht Wüstencamp", "Tägliches Frühstück & 4 Abendessen", "2-Stunden Jeep Safari"]
    },
    exclusions: { en: ["Entrance fees", "Flights", "Tips"], de: ["Eintrittsgelder", "Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman" }, description: { en: "VIP airport assistance and hotel transfer.", de: "Flughafentransfer zum Hotel." }, meals: "None", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Amman → Jerash → Ajloun Castle → Amman", de: "Amman → Jerash → Burg Ajloun → Amman" }, description: { en: "Explore Roman Jerash and Saladin's Ajloun fortress.", de: "Entdeckung von Jerash und Festung Ajloun." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Madaba → Mount Nebo → Kerak Castle → Petra", de: "Madaba → Berg Nebo → Burg Karak → Petra" }, description: { en: "Byzantine mosaics, Mount Nebo sanctuary, and Crusader castle.", de: "Mosaikstadt Madaba, Berg Nebo und Kreuzfahrerburg Karak." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Full Day Exploration → Wadi Rum", de: "Petra Ganztag → Wadi Rum" }, description: { en: "Marvel at the Treasury and Monastery, then sunset transfer to Wadi Rum.", de: "Petra Erkundung und Transfer ins Wadi Rum." }, meals: "Breakfast & Zarb Dinner", accommodation: "Martian Camp Wadi Rum" },
      { day: 5, title: { en: "Wadi Rum 4x4 Jeep → Aqaba Red Sea", de: "Wadi Rum 4x4 Jeep → Aqaba Rotes Meer" }, description: { en: "Desert Jeep safari, then drive to Aqaba Red Sea coastal resort.", de: "Wüsten-Jeep-Safari und Weiterfahrt nach Aqaba." }, meals: "Breakfast", accommodation: "4-Star Beach Resort in Aqaba" },
      { day: 6, title: { en: "Aqaba → Dead Sea Resort", de: "Aqaba → Totes Meer Resort" }, description: { en: "Morning Red Sea coastal walk, then drive north along Dead Sea highway.", de: "Morgens Aqaba, danach Fahrt zum Toten Meer." }, meals: "Breakfast & Dinner", accommodation: "Dead Sea Resort" },
      { day: 7, title: { en: "Dead Sea Floating → Airport Departure", de: "Totes Meer Schwebebad → Abreise" }, description: { en: "Morning spa floating before final airport transfer.", de: "Totes Meer Schwebebad und Flughafentransfer." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "jc2-1", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", alt: { en: "Aqaba Red Sea turquoise coast", de: "Türkisfarbene Küste des Roten Meeres in Aqaba" }, caption: { en: "Relaxing at Aqaba Red Sea coastal resort", de: "Erholung am Strand von Aqaba" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "jc2-2", url: "https://images.unsplash.com/photo-1579606030856-494b28b7fa15?auto=format&fit=crop&w=1200&q=80", alt: { en: "Petra Treasury monument", de: "Petra Schatzhaus Monument" }, caption: { en: "Petra Treasury", de: "Das Schatzhaus von Petra" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" },
      { id: "jc2-3", url: "https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80", alt: { en: "Wadi Rum desert rock bridge", de: "Felsenbrücke im Wadi Rum" }, caption: { en: "Natural rock arches of Wadi Rum desert", de: "Natürliche Felsenbrücken im Wadi Rum" }, sortOrder: 3, rightsStatus: "VERIFIED_OWNED" }
    ]
  },

  // --- LUXURY TOURS (3) ---
  {
    id: "jordan-luxury-1",
    slug: { en: "jordan-luxury-tour-1", de: "jordan-luxus-tour-1" },
    title: { en: "Jordan Luxury Tour 1 — Heritage & 5-Star Serenity", de: "Jordan Luxus-Tour 1 — 5-Sterne Erbe & Eleganz" },
    subtitle: { en: "6 Days of Chauffeur Comfort, 5-Star Resorts & Private Guides", de: "6 Tage Chauffeur-Komfort, 5-Sterne-Resorts & private Reiseleiter" },
    category: "Luxury",
    storyCollection: "Luxury Story",
    durationDays: 6,
    durationNights: 5,
    startingPriceUSD: 1450,
    highlights: {
      en: ["Private chauffeur in executive vehicle", "5-Star Mövenpick Petra & Kempinski Dead Sea", "Private licensed guide in Petra & Jerash", "Gourmet dining & Dead Sea spa treatments"],
      de: ["Privater Chauffeur im Luxusfahrzeug", "5-Sterne Mövenpick Petra & Kempinski Totes Meer", "Privater lizenzierter Reiseleiter", "Gourmet-Dinner & Totes Meer Spa"]
    },
    route: ["Amman", "Ajloun", "Jerash", "Madaba", "Mount Nebo", "Dead Sea", "Petra", "Al-Karak"],
    inclusions: {
      en: ["All transfers in private luxury vehicle", "5 Nights in 5-Star Deluxe Hotels", "All Entrance fees included", "Private tour guide throughout", "Dead Sea Resort VIP Pass & Lunch"],
      de: ["Alle Transfers im privaten Luxusfahrzeug", "5 Nächte in 5-Sterne-Luxushotels", "Alle Eintrittsgelder inklusive", "Durchgehender privater Reiseleiter", "Totes Meer VIP-Pass & Mittagessen"]
    },
    exclusions: { en: ["International airfare", "Personal expenses"], de: ["Flüge", "Persönliche Ausgaben"] },
    itinerary: [
      { day: 1, title: { en: "VIP Airport Pickup → Amman City Tour", de: "VIP Flughafentransfer → Amman Stadtrundfahrt" }, description: { en: "VIP arrival assistance, private city tour.", de: "VIP-Empfang am Flughafen, private Stadtrundfahrt." }, meals: "Dinner", accommodation: "5-Star St. Regis / Four Seasons Amman" },
      { day: 2, title: { en: "Amman → Ajloun Castle → Roman Jerash", de: "Amman → Burg Ajloun → Römisches Jerash" }, description: { en: "Guided tour of Ajloun Castle & Jerash ruins.", de: "Geführte Tour durch die Festung Ajloun & Jerash." }, meals: "Breakfast", accommodation: "5-Star Amman" },
      { day: 3, title: { en: "Madaba → Mount Nebo → Dead Sea Luxury Resort", de: "Madaba → Berg Nebo → Totes Meer Luxus-Resort" }, description: { en: "Mosaic city Madaba, Mount Nebo sanctuary, and Kempinski Dead Sea resort float.", de: "Mosaikstadt Madaba, Berg Nebo und Spa-Entspannung im Kempinski Totes Meer." }, meals: "Breakfast & Lunch", accommodation: "Kempinski Hotel Ishtar Dead Sea" },
      { day: 4, title: { en: "Dead Sea → Petra Rose City", de: "Totes Meer → Felsenstadt Petra" }, description: { en: "Drive along the Scenic Dead Sea Highway to Petra.", de: "Fahrt entlang der Panoramastraße am Toten Meer nach Petra." }, meals: "Breakfast & Dinner", accommodation: "Mövenpick Resort Petra" },
      { day: 5, title: { en: "Petra Guided Tour → Al-Karak Crusader Castle → Amman", de: "Petra Führung → Kreuzfahrerburg Al-Karak → Amman" }, description: { en: "Private guide through Petra Treasury & Monastery, followed by Karak Fortress.", de: "Private Führung durch Petra und Besichtigung der Burg Karak." }, meals: "Breakfast", accommodation: "5-Star Amman" },
      { day: 6, title: { en: "Amman → VIP Airport Departure", de: "Amman → VIP Flughafentransfer" }, description: { en: "Final luxury transfer to Queen Alia Airport.", de: "Abschließender Luxustransfer zum Flughafen." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "jl1-1", url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80", alt: { en: "Kempinski Dead Sea luxury infinity pool", de: "Luxuriöser Infinity-Pool im Kempinski Totes Meer" }, caption: { en: "5-Star luxury resort on the Dead Sea coast", de: "5-Sterne-Luxusresort am Toten Meer" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "jl1-2", url: "https://images.unsplash.com/photo-1579606030856-494b28b7fa15?auto=format&fit=crop&w=1200&q=80", alt: { en: "Mövenpick Petra resort luxury entrance", de: "Luxuriöser Eingang des Mövenpick Petra Resorts" }, caption: { en: "Located right at the entrance of Petra Rose City", de: "Direkt am Eingang zur Felsenstadt Petra gelegen" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" },
      { id: "jl1-3", url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80", alt: { en: "Luxury Martian Glass Dome Camp in Wadi Rum", de: "Luxuriöses Martian Glass Dome Camp im Wadi Rum" }, caption: { en: "Private luxury stargazing dome in Wadi Rum desert", de: "Private Luxus-Glaskuppel zur Sternenbeobachtung" }, sortOrder: 3, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "jordan-luxury-2",
    slug: { en: "jordan-luxury-tour-2-7-days", de: "jordan-luxus-tour-2-7-tage" },
    title: { en: "Jordan Luxury Tour 2 — 7-Day Royal Deluxe Journey", de: "Jordan Luxus-Tour 2 — 7-Tage Royale Deluxe Reise" },
    subtitle: { en: "7 Days of Executive Chauffeur, Luxury Martian Dome & Dead Sea Spa", de: "7 Tage Chauffeur-Luxus, Martian Dome Camp & Totes Meer Spa" },
    category: "Luxury",
    storyCollection: "Luxury Story",
    durationDays: 7,
    durationNights: 6,
    startingPriceUSD: 1650,
    highlights: {
      en: ["5-Star Luxury Hotels & Glass Martian Dome", "Executive Chauffeur Mercedes / GMC vehicle", "Private licensed guide in Petra, Jerash & Amman", "All entrances, VIP transfers & gourmet meals"],
      de: ["5-Sterne Luxushotels & Glas-Martian-Dome", "Chauffeur im Luxusfahrzeug (Mercedes/GMC)", "Privater Reiseleiter in Petra, Jerash & Amman", "Alle Eintritte, VIP-Transfers & Gourmet-Verpflegung"]
    },
    route: ["Amman", "Jerash", "Madaba", "Mount Nebo", "Petra", "Wadi Rum", "Dead Sea"],
    inclusions: {
      en: ["Executive Chauffeur vehicle", "6 Nights 5-Star Luxury Accommodations", "Private tour guide throughout", "All Entrance fees & VIP passes"],
      de: ["Chauffeur-Luxusfahrzeug", "6 Nächte in 5-Sterne-Luxushotels", "Durchgehender privater Reiseleiter", "Alle Eintrittsgelder & VIP-Pässe"]
    },
    exclusions: { en: ["Flights", "Tips"], de: ["Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "VIP Arrival in Amman", de: "VIP Ankunft in Amman" }, description: { en: "VIP airport lounge pickup & luxury transfer.", de: "VIP-Empfang am Flughafen & Luxustransfer." }, meals: "Dinner", accommodation: "Four Seasons Amman" },
      { day: 2, title: { en: "Amman Citadel → Roman Jerash Private Tour", de: "Amman Zitadelle → Römisches Jerash Private Führung" }, description: { en: "Private guide through Roman ruins & Citadel.", de: "Private Führung durch Jerash & Zitadelle." }, meals: "Breakfast & Lunch", accommodation: "Four Seasons Amman" },
      { day: 3, title: { en: "Madaba Mosaics → Mount Nebo → Petra Luxury", de: "Madaba Mosaike → Berg Nebo → Petra Luxus" }, description: { en: "Byzantine art, Moses sanctuary & Mövenpick Petra.", de: "Mosaikstadt Madaba, Berg Nebo & Mövenpick Petra." }, meals: "Breakfast & Dinner", accommodation: "Mövenpick Resort Petra" },
      { day: 4, title: { en: "Petra Treasury Private Tour → Wadi Rum Martian Dome", de: "Petra Führung → Wadi Rum Martian Dome Camp" }, description: { en: "Private guide in Petra, sunset transfer to luxury Martian glass dome camp.", de: "Petra Führung und Übernachtung im Martian Dome Camp." }, meals: "Breakfast & Zarb Dinner", accommodation: "Memories Aicha Luxury Camp Wadi Rum" },
      { day: 5, title: { en: "Wadi Rum 4x4 VIP Safari → Dead Sea Luxury Resort", de: "Wadi Rum 4x4 VIP Safari → Totes Meer Luxus Resort" }, description: { en: "VIP 4x4 desert safari, drive to Kempinski Dead Sea Resort.", de: "Wüsten-Jeepsafari & Kempinski Totes Meer Resort." }, meals: "Breakfast", accommodation: "Kempinski Hotel Ishtar Dead Sea" },
      { day: 6, title: { en: "Dead Sea Spa & Wellness Day", de: "Totes Meer Spa & Wellness-Tag" }, description: { en: "Full day private spa treatment & salt water float.", de: "Ganztägige Spa-Entspannung & Schwebebad." }, meals: "Breakfast & Dinner", accommodation: "Kempinski Hotel Ishtar Dead Sea" },
      { day: 7, title: { en: "Dead Sea → VIP Airport Departure", de: "Totes Meer → VIP Flughafentransfer" }, description: { en: "Executive transfer to Queen Alia Airport.", de: "Chauffeur-Transfer zum Flughafen." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "jl2-1", url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80", alt: { en: "Memories Aicha Luxury Martian Dome Camp", de: "Memories Aicha Luxus Martian Dome Camp" }, caption: { en: "Luxury Martian Glass Domes under desert stars", de: "Luxuriöse Glaskuppeln unter den Sternen der Wüste" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "jl2-2", url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80", alt: { en: "Kempinski Dead Sea Ishtar luxury resort", de: "Kempinski Hotel Ishtar Totes Meer Resort" }, caption: { en: "Private Dead Sea beach & spa infinity pool", de: "Privater Strand & Spa-Infinity-Pool am Toten Meer" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "jordan-luxury-3",
    slug: { en: "jordan-luxury-tour-3-8-days", de: "jordan-luxus-tour-3-8-tage" },
    title: { en: "Jordan Luxury Tour 3 — 8-Day Royal Heritage & Red Sea", de: "Jordan Luxus-Tour 3 — 8-Tage Royale Entdeckung & Rotes Meer" },
    subtitle: { en: "The Pinnacle 8-Day Jordan Luxury Experience with Red Sea Yachting", de: "Das 8-Tage Ultimative Luxus-Erlebnis mit Jachtausflug am Roten Meer" },
    category: "Luxury",
    storyCollection: "Luxury Story",
    durationDays: 8,
    durationNights: 7,
    startingPriceUSD: 1990,
    highlights: {
      en: ["Private Red Sea Sunset Yacht Cruise in Aqaba", "5-Star Resorts (Kempinski Dead Sea, Mövenpick Petra, Al Manara Aqaba)", "Private Chauffeur & Personal Tour Concierge", "All entrances, gourmet meals & VIP airport lounge access"],
      de: ["Private Jachtausfahrt bei Sonnenuntergang im Roten Meer", "5-Sterne Resorts in Petra, Aqaba & Totem Meer", "Chauffeur & persönlicher Reise-Concierge", "Alle Eintritte, Gourmet-Dinner & VIP Lounge Access"]
    },
    route: ["Amman", "Jerash", "Madaba", "Mount Nebo", "Petra", "Wadi Rum", "Aqaba", "Dead Sea"],
    inclusions: {
      en: ["Executive Chauffeur Vehicle", "7 Nights in 5-Star Deluxe Hotels", "Private Red Sea Yacht Charter", "All Entrance permits & private guides"],
      de: ["Chauffeur-Luxusfahrzeug", "7 Nächte in 5-Sterne-Luxushotels", "Private Jacht-Charter am Roten Meer", "Alle Eintrittsgelder & private Reiseleiter"]
    },
    exclusions: { en: ["Flights", "Tips"], de: ["Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "VIP Arrival in Amman", de: "VIP Ankunft in Amman" }, description: { en: "VIP airport lounge assistance & luxury hotel check-in.", de: "VIP-Flughafenbetreuung & Check-in." }, meals: "Dinner", accommodation: "St. Regis Amman" },
      { day: 2, title: { en: "Amman → Roman Jerash → Ajloun Castle", de: "Amman → Römisches Jerash → Burg Ajloun" }, description: { en: "Private guided tour of Jerash ruins & Ajloun.", de: "Geführte Tour durch Jerash & Burg Ajloun." }, meals: "Breakfast & Lunch", accommodation: "St. Regis Amman" },
      { day: 3, title: { en: "Kings Highway → Madaba → Mt Nebo → Petra", de: "Königsstraße → Madaba → Berg Nebo → Petra" }, description: { en: "Byzantine mosaic map, Moses sanctuary & Mövenpick Petra.", de: "Mosaikkarte, Berg Nebo & Mövenpick Petra." }, meals: "Breakfast & Dinner", accommodation: "Mövenpick Resort Petra" },
      { day: 4, title: { en: "Petra Treasury Full Day → Wadi Rum Martian Camp", de: "Petra Ganztag → Wadi Rum Martian Camp" }, description: { en: "Private guide in Petra, sunset transfer to luxury Martian dome camp.", de: "Petra Führung & Martian Dome Übernachtung." }, meals: "Breakfast & Zarb Dinner", accommodation: "Aicha Luxury Camp Wadi Rum" },
      { day: 5, title: { en: "Wadi Rum 4x4 VIP Safari → Aqaba Red Sea Luxury", de: "Wadi Rum 4x4 VIP Safari → Aqaba Rotes Meer Luxus" }, description: { en: "Desert Jeep safari, transfer to Al Manara Luxury Resort Aqaba.", de: "Wüsten-Jeepsafari & Al Manara Luxusresort Aqaba." }, meals: "Breakfast", accommodation: "Al Manara Luxury Collection Aqaba" },
      { day: 6, title: { en: "Private Red Sea Sunset Yacht Cruise", de: "Private Jachtausfahrt bei Sonnenuntergang" }, description: { en: "Morning coral snorkeling, afternoon private sunset yacht cruise.", de: "Schnorcheln & private Jachtausfahrt bei Sonnenuntergang." }, meals: "Breakfast & Lunch", accommodation: "Al Manara Luxury Collection Aqaba" },
      { day: 7, title: { en: "Aqaba → Kempinski Dead Sea Resort", de: "Aqaba → Kempinski Totes Meer Resort" }, description: { en: "Scenic Dead Sea highway drive, floating & spa treatment.", de: "Fahrt zum Toten Meer, Schwebebad & Spa." }, meals: "Breakfast & Dinner", accommodation: "Kempinski Hotel Ishtar Dead Sea" },
      { day: 8, title: { en: "Dead Sea → VIP Airport Departure", de: "Totes Meer → VIP Flughafentransfer" }, description: { en: "Final luxury transfer to Queen Alia Airport.", de: "Chauffeur-Transfer zum Flughafen." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "jl3-1", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", alt: { en: "Private Red Sea Sunset Yacht Cruise in Aqaba", de: "Private Jachtausfahrt bei Sonnenuntergang in Aqaba" }, caption: { en: "Exclusive sunset yacht cruise on the Red Sea", de: "Exklusive Jachtfahrt bei Sonnenuntergang" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "jl3-2", url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80", alt: { en: "Kempinski Dead Sea luxury resort", de: "Kempinski Totes Meer Luxusresort" }, caption: { en: "Luxury infinity spa resort on the Dead Sea", de: "Luxuriöses Spa-Resort am Toten Meer" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" }
    ]
  },

  // --- BIBLICAL / HOLY LAND TOURS (3) ---
  {
    id: "holy-land-1",
    slug: { en: "jordan-holy-land-tour-1-6-days", de: "jordan-heiliges-land-tour-1-6-tage" },
    title: { en: "Jordan Holy Land Tour 1 — 6-Day Sacred Trail", de: "Jordanien Heiliges Land Tour 1 — 6-Tage Biblischer Pfad" },
    subtitle: { en: "6 Days Following Biblical Prophets, St. George Mosaics & Petra", de: "6 Tage auf den Spuren biblischer Propheten & Mosaike" },
    category: "Biblical",
    storyCollection: "Sacred Story",
    durationDays: 6,
    durationNights: 5,
    startingPriceUSD: 950,
    highlights: {
      en: ["Baptism Site of Jesus Christ (Bethany Beyond Jordan)", "Mount Nebo Sanctuary where Moses saw the Promised Land", "Madaba St. George 6th century Mosaic Map", "Petra Rose City & Dead Sea float"],
      de: ["Taufstelle Jesu Christi am Jordan", "Berg Nebo Heiligtum des Mose", "Mosaikkarte von Madaba in der St.-Georgs-Kirche", "Petra Felsenstadt & Totes Meer"]
    },
    route: ["Amman", "Baptism Site", "Mount Nebo", "Madaba", "Petra", "Dead Sea"],
    inclusions: {
      en: ["Private AC vehicle with driver", "5 Nights 4-Star Hotels", "Holy site permits & guides", "Daily breakfast & 3 dinners"],
      de: ["Privatfahrzeug mit Fahrer", "5 Nächte in 4-Sterne-Hotels", "Eintrittsgenehmigungen & Reiseleiter", "Tägliches Frühstück & 3 Abendessen"]
    },
    exclusions: { en: ["Flights", "Tips"], de: ["Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman" }, description: { en: "Airport pickup & hotel transfer.", de: "Flughafentransfer & Check-in." }, meals: "Dinner", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Baptism Site → Mount Nebo → Madaba", de: "Taufstelle → Berg Nebo → Madaba" }, description: { en: "Visit Jordan River Baptism Site, Mt Nebo & Madaba St. George.", de: "Taufstelle am Jordan, Berg Nebo & Madaba." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman → Kings Highway → Petra", de: "Amman → Königsstraße → Petra" }, description: { en: "Scenic Kings Highway drive to Petra.", de: "Fahrt auf der Königsstraße nach Petra." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Full Day Biblical Exploration", de: "Petra Ganztägige Erkundung" }, description: { en: "Walk through Siq to Treasury & Aaron's Tomb view.", de: "Besichtigung des Schatzhauses & Aaron-Berg." }, meals: "Breakfast", accommodation: "4-Star Hotel in Petra" },
      { day: 5, title: { en: "Petra → Dead Sea Resort Float", de: "Petra → Totes Meer Schwebebad" }, description: { en: "Drive to Dead Sea, float in saline waters.", de: "Fahrt zum Toten Meer & Schwebebad." }, meals: "Breakfast & Dinner", accommodation: "Dead Sea Resort" },
      { day: 6, title: { en: "Dead Sea → Departure", de: "Totes Meer → Abreise" }, description: { en: "Transfer to Queen Alia Airport.", de: "Flughafentransfer zum Abflug." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "hl1-1", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80", alt: { en: "Mount Nebo Memorial Church & Brazen Serpent", de: "Berg Nebo Gedächtniskirche und Eherne Schlange" }, caption: { en: "Mount Nebo sanctuary overlooking the Promised Land", de: "Heiligtum auf dem Berg Nebo" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "hl1-2", url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", alt: { en: "Madaba Mosaic Map of Holy Land", de: "Mosaikkarte von Madaba" }, caption: { en: "6th century Byzantine Jerusalem mosaic map", de: "Byzantinische Mosaikkarte von Jerusalem aus dem 6. Jhr." }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "holy-land-2",
    slug: { en: "jordan-holy-land-tour-2", de: "jordan-heiliges-land-tour-2" },
    title: { en: "Jordan & Holy Land Tour 2 — Biblical Pilgrimage", de: "Jordanien & Heiliges Land Tour 2 — Biblische Pilgerreise" },
    subtitle: { en: "7 Days Following the Footsteps of Moses, John the Baptist & Kings", de: "7 Tage auf den Spuren von Mose, Johannes dem Täufer & Königen" },
    category: "Biblical",
    storyCollection: "Sacred Story",
    durationDays: 7,
    durationNights: 6,
    startingPriceUSD: 1100,
    highlights: {
      en: ["Baptism Site of Jesus Christ (Bethany Beyond the Jordan)", "Mount Nebo Sanctuary & Brazen Serpent", "Madaba St. George Mosaic Map", "Petra & Dead Sea exploration"],
      de: ["Taufstelle Jesu Christi (Bethanien jenseits des Jordans)", "Berg Nebo & Eherne Schlange", "Mosaikkarte von Madaba in der St.-Georgs-Kirche", "Petra & Totes Meer"]
    },
    route: ["Amman", "Baptism Site", "Mount Nebo", "Madaba", "Petra", "Dead Sea"],
    inclusions: {
      en: ["All transfers & hotel accommodations", "Holy site entry permits & guides", "Daily breakfast & 3 dinners"],
      de: ["Alle Transfers & Hotelunterkünfte", "Eintrittsgenehmigungen für heilige Stätten", "Tägliches Frühstück & 3 Abendessen"]
    },
    exclusions: { en: ["Personal expenses", "Flights"], de: ["Persönliche Ausgaben", "Flüge"] },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman" }, description: { en: "Airport pickup and hotel check-in.", de: "Flughafentransfer und Check-in." }, meals: "Dinner", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Baptism Site → Mount Nebo → Madaba", de: "Taufstelle → Berg Nebo → Madaba" }, description: { en: "Visit the Jordan River Baptism Site, Mount Nebo sanctuary, and St. George Church.", de: "Besuch der Taufstelle am Jordan, des Berges Nebo und der St.-Georgs-Kirche." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman → Machaerus (Mukawir) → Petra", de: "Amman → Machaerus (Mukawir) → Petra" }, description: { en: "Visit Herod's fortress where John the Baptist was imprisoned, drive to Petra.", de: "Besichtigung der Festung Machaerus und Weiterfahrt nach Petra." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Full Day Biblical Exploration", de: "Petra Ganztägige Erkundung" }, description: { en: "Walk through the Siq to the Treasury, Royal Tombs, and Aaron's Tomb viewpoint.", de: "Besichtigung des Schatzhauses, der Königsgräber und des Aaron-Berges." }, meals: "Breakfast", accommodation: "4-Star Hotel in Petra" },
      { day: 5, title: { en: "Petra → Lot's Cave → Dead Sea", de: "Petra → Höhle des Lot → Totes Meer" }, description: { en: "Visit Lot's Cave overlooking the Dead Sea, float in the mineral waters.", de: "Besichtigung der Höhle des Lot und Entspannung am Toten Meer." }, meals: "Breakfast & Dinner", accommodation: "Dead Sea Resort" },
      { day: 6, title: { en: "Dead Sea Spiritual Day", de: "Totes Meer Entspannungstag" }, description: { en: "Relaxation and floating at the lowest point on Earth.", de: "Wellness- und Entspannungstag am Toten Meer." }, meals: "Breakfast", accommodation: "Dead Sea Resort" },
      { day: 7, title: { en: "Dead Sea → Departure", de: "Totes Meer → Abreise" }, description: { en: "Transfer to Queen Alia Airport.", de: "Flughafentransfer zum Abflug." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "hl2-1", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80", alt: { en: "Baptism Site Bethany Beyond the Jordan", de: "Taufstelle Bethanien jenseits des Jordans" }, caption: { en: "The authentic Baptism Site of Jesus Christ at the Jordan River", de: "Die authentische Taufstelle Jesu Christi am Jordan" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "hl2-2", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", alt: { en: "Dead Sea salt crystal shoreline near Lot's Cave", de: "Salzkristallufer am Toten Meer nahe der Lot-Höhle" }, caption: { en: "Crystalline salt deposits on the Dead Sea shore", de: "Kristalline Salzablagerungen am Ufer des Toten Meeres" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "holy-land-3",
    slug: { en: "jordan-holy-land-tour-3-8-days", de: "jordan-heiliges-land-tour-3-8-tage" },
    title: { en: "Jordan Holy Land Tour 3 — 8-Day Complete Pilgrimage", de: "Jordanien Heiliges Land Tour 3 — 8-Tage Komplett-Pilgerreise" },
    subtitle: { en: "8 Days Visiting Jordan River, Mt Nebo, Machaerus, Lot's Cave & Petra", de: "8 Tage Taufstelle, Berg Nebo, Machaerus, Lot-Höhle & Petra" },
    category: "Biblical",
    storyCollection: "Sacred Story",
    durationDays: 8,
    durationNights: 7,
    startingPriceUSD: 1250,
    highlights: {
      en: ["Baptism Site of Jesus Christ (Bethany)", "Mount Nebo Sanctuary & Brazen Serpent", "Machaerus (Mukawir) Herod's Palace Ruins", "Lot's Cave & Sanctuary at Dead Sea"],
      de: ["Taufstelle Jesu Christi in Bethanien", "Berg Nebo & Eherne Schlange", "Palastruinen von Machaerus", "Höhle des Lot am Toten Meer"]
    },
    route: ["Amman", "Baptism Site", "Mount Nebo", "Madaba", "Mukawir", "Petra", "Dead Sea"],
    inclusions: {
      en: ["Private AC vehicle with driver", "7 Nights 4-Star Hotel Accommodation", "All holy site permits & private guide", "Daily breakfast & 4 dinners"],
      de: ["Privatfahrzeug mit Fahrer", "7 Nächte in 4-Sterne-Hotels", "Alle Eintrittsgelder & Reiseleiter", "Tägliches Frühstück & 4 Abendessen"]
    },
    exclusions: { en: ["Flights", "Tips"], de: ["Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman" }, description: { en: "Airport pickup & transfer to Amman hotel.", de: "Flughafentransfer zum Hotel." }, meals: "Dinner", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Baptism Site → Mount Nebo → Madaba", de: "Taufstelle → Berg Nebo → Madaba" }, description: { en: "Jordan River Baptism Site, Mt Nebo & Madaba Mosaics.", de: "Taufstelle am Jordan, Berg Nebo & Mosaike." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman → Mukawir (Machaerus) → Petra", de: "Amman → Mukawir (Machaerus) → Petra" }, description: { en: "Herod's Mukawir fortress where John the Baptist was martyred.", de: "Festung Mukawir und Weiterfahrt nach Petra." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Full Day Pilgrimage Walk", de: "Petra Ganztägige Pilgerwanderung" }, description: { en: "Explore Treasury, Royal Tombs, and Aaron's Tomb view.", de: "Schatzhaus, Königsgräber & Aaron-Berg." }, meals: "Breakfast", accommodation: "4-Star Hotel in Petra" },
      { day: 5, title: { en: "Petra → Lot's Cave → Dead Sea", de: "Petra → Höhle des Lot → Totes Meer" }, description: { en: "Lot's Cave sanctuary overlooking Dead Sea saline waters.", de: "Höhle des Lot und Entspannung am Toten Meer." }, meals: "Breakfast & Dinner", accommodation: "Dead Sea Resort" },
      { day: 6, title: { en: "Dead Sea Spiritual Spa Day", de: "Totes Meer Spa-Tag" }, description: { en: "Relaxation and mineral mud floating.", de: "Wellness & Mineral-Schlammbad." }, meals: "Breakfast", accommodation: "Dead Sea Resort" },
      { day: 7, title: { en: "Dead Sea → Tell Mar Elias → Anjara → Amman", de: "Totes Meer → Tell Mar Elias → Anjara → Amman" }, description: { en: "Elijah's birthplace Tell Mar Elias & Lady of the Mountain shrine in Anjara.", de: "Geburtsort des Elija Tell Mar Elias & Anjara Heiligtum." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 8, title: { en: "Amman → Airport Departure", de: "Amman → Flughafentransfer" }, description: { en: "Final airport transfer.", de: "Abschließender Flughafentransfer." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "hl3-1", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", alt: { en: "Dead Sea salt crystal formations", de: "Salzkristallformationen am Toten Meer" }, caption: { en: "Crystalline salt formations near Lot's Cave", de: "Kristalline Salzformationen nahe der Lot-Höhle" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" }
    ]
  },

  // --- ISLAMIC TOURS (2) ---
  {
    id: "islamic-tour-1",
    slug: { en: "islamic-tour-jordan-companions", de: "islamische-tour-jordanien-gefährten" },
    title: { en: "Islamic Heritage Tour — Companions Tombs & Battlefields", de: "Islamische Erbe-Tour — Gräber der Gefährten & Schlachtfelder" },
    subtitle: { en: "5 Days Visiting Tombs of Sahaba (Companions) & Mutah Battlefield", de: "5 Tage Besichtigung der Gräber der Sahaba & Schlachtfeld Mu'tah" },
    category: "Islamic",
    storyCollection: "Sacred Story",
    durationDays: 5,
    durationNights: 4,
    startingPriceUSD: 650,
    highlights: {
      en: ["Tombs of Sahaba (Abu Ubaidah, Muath Ibn Jabal, Shurahbil)", "Battlefield of Mu'tah shrine & tombs of Ja'far Ibn Abi Talib", "King Abdullah Blue Mosque & Citadel", "Petra & Dead Sea float"],
      de: ["Gräber der Sahaba (Abu Ubaidah, Muath Ibn Jabal)", "Schlachtfeld von Mu'tah & Grab von Ja'far Ibn Abi Talib", "König-Abdullah-Moschee & Zitadelle", "Petra & Totes Meer"]
    },
    route: ["Amman", "Jordan Valley", "Mutah", "Petra", "Dead Sea"],
    inclusions: {
      en: ["Private AC vehicle & driver", "4 Nights Hotel Accommodations", "Daily Halal breakfast & 2 dinners", "Islamic site entry permits"],
      de: ["Klimatisiertes Fahrzeug mit Fahrer", "4 Nächte Hotelunterkunft", "Tägliches Halal-Frühstück & 2 Abendessen", "Eintrittsgelder"]
    },
    exclusions: { en: ["Flights", "Tips"], de: ["Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman → King Abdullah Mosque", de: "Ankunft in Amman → König-Abdullah-Moschee" }, description: { en: "Airport pickup, visit King Abdullah Blue Mosque and Amman Citadel.", de: "Flughafentransfer, Besuch der blauen Moschee und Zitadelle." }, meals: "Dinner", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Jordan Valley Sahaba Tombs (Abu Ubaidah & Muath)", de: "Jordantal Sahaba-Gräber (Abu Ubaidah & Muath)" }, description: { en: "Visit tombs of venerable companions Abu Ubaidah, Muath Ibn Jabal & Shurahbil.", de: "Besuch der Gräber der Gefährten im Jordantal." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Amman → Mutah Battlefield Shrine → Petra", de: "Amman → Schlachtfeld Mu'tah → Petra" }, description: { en: "Visit shrine of Ja'far Ibn Abi Talib & Zayd Ibn Harithah at Mutah, drive to Petra.", de: "Besichtigung des Schlachtfeldes von Mu'tah und der Gräber von Ja'far & Zayd." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 4, title: { en: "Petra Rose City → Dead Sea Resort", de: "Petra Felsenstadt → Totes Meer Resort" }, description: { en: "Explore Petra Treasury, afternoon drive to Dead Sea for floating.", de: "Besichtigung von Petra und Nachmittags-Transfer zum Toten Meer." }, meals: "Breakfast", accommodation: "Dead Sea Resort" },
      { day: 5, title: { en: "Dead Sea → Airport Departure", de: "Totes Meer → Flughafentransfer" }, description: { en: "Morning Dead Sea floating & airport drop-off.", de: "Totes Meer Schwebebad & Flughafentransfer." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "it1-1", url: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1200&q=80", alt: { en: "Amman Citadel Temple of Hercules pillars & mosque view", de: "Amman Zitadelle Herkules-Tempel Säulen und Moschee-Blick" }, caption: { en: "Amman Citadel hilltop with views of King Abdullah Blue Mosque", de: "Amman Zitadelle mit Blick auf die König-Abdullah-Moschee" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "it1-2", url: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80", alt: { en: "Ajloun Saladin Islamic Fortress", de: "Saladin Burg Ajloun" }, caption: { en: "Islamic fortress built by Saladin's general in 1184 AD", de: "Islamische Festung erbaut 1184 n.Chr." }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "islamic-historical-tour",
    slug: { en: "islamic-historical-tour-1", de: "islamisch-historische-tour-1" },
    title: { en: "Islamic & Historical Jordan Tour — 6 Days", de: "Islamisch-Historische Jordanien Tour — 6 Tage" },
    subtitle: { en: "6 Days Combining Islamic Shrines, Ajloun Saladin Fortress & Petra", de: "6 Tage Islamische Heiligtümer, Saladin-Burg Ajloun & Petra" },
    category: "Islamic",
    storyCollection: "Sacred Story",
    durationDays: 6,
    durationNights: 5,
    startingPriceUSD: 780,
    highlights: {
      en: ["Ajloun Castle built by Saladin's nephew (1184 AD)", "Tombs of Sahaba & Prophet Shoaib Shrine", "Petra Rose City & Dead Sea Float", "Desert Castles Qasr Amra & Qasr Al-Kharanah"],
      de: ["Burg Ajloun (1184 n.Chr. von Saladins Neffen erbaut)", "Gräber der Sahaba & Shoaib Heiligtum", "Petra Felsenstadt & Totes Meer", "Wüstenschlösser Qasr Amra"]
    },
    route: ["Amman", "Ajloun", "Jordan Valley", "Mutah", "Petra", "Dead Sea"],
    inclusions: {
      en: ["Private AC vehicle with driver", "5 Nights Hotel Accommodations", "Daily Halal breakfast & 3 dinners", "All entrance fees"],
      de: ["Privatfahrzeug mit Fahrer", "5 Nächte Hotelunterkunft", "Tägliches Halal-Frühstück & 3 Abendessen", "Alle Eintrittsgelder"]
    },
    exclusions: { en: ["Flights", "Tips"], de: ["Flüge", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Arrival in Amman", de: "Ankunft in Amman" }, description: { en: "Airport pickup & transfer to hotel.", de: "Flughafentransfer zum Hotel." }, meals: "Dinner", accommodation: "4-Star Hotel in Amman" },
      { day: 2, title: { en: "Amman → Ajloun Saladin Fortress → Jerash", de: "Amman → Saladin-Burg Ajloun → Jerash" }, description: { en: "Explore Ajloun Castle built in 1184 AD & Roman Jerash.", de: "Besichtigung von Burg Ajloun und Römerstadt Jerash." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 3, title: { en: "Jordan Valley Sahaba Shrines → Prophet Shoaib", de: "Jordantal Sahaba-Heiligtümer → Prophet Shoaib" }, description: { en: "Visit tombs of Abu Ubaidah, Muath Ibn Jabal and Prophet Shoaib shrine.", de: "Besuch der Sahaba-Gräber und Shoaib-Heiligtum." }, meals: "Breakfast", accommodation: "4-Star Hotel in Amman" },
      { day: 4, title: { en: "Amman → Mutah Battlefield → Petra", de: "Amman → Schlachtfeld Mu'tah → Petra" }, description: { en: "Visit Mutah battlefield & Ja'far Ibn Abi Talib shrine, drive to Petra.", de: "Schlachtfeld Mu'tah und Weiterfahrt nach Petra." }, meals: "Breakfast & Dinner", accommodation: "4-Star Hotel in Petra" },
      { day: 5, title: { en: "Petra Rose City → Dead Sea Resort", de: "Petra Felsenstadt → Totes Meer Resort" }, description: { en: "Explore Petra Treasury, afternoon transfer to Dead Sea.", de: "Petra Erkundung & Transfer zum Toten Meer." }, meals: "Breakfast & Dinner", accommodation: "Dead Sea Resort" },
      { day: 6, title: { en: "Dead Sea → Departure", de: "Totes Meer → Flughafentransfer" }, description: { en: "Morning floating & airport transfer.", de: "Totes Meer Schwebebad & Flughafentransfer." }, meals: "Breakfast" }
    ],
    heroImage: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "ih1-1", url: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80", alt: { en: "Ajloun Saladin Fortress towers", de: "Festungstürme der Saladin-Burg Ajloun" }, caption: { en: "Historic Ajloun Castle built in 1184 AD", de: "Historische Burg Ajloun erbaut 1184 n.Chr." }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" }
    ]
  },

  // --- DAY TOURS (6) ---
  {
    id: "day-tour-baptism-deadsea",
    slug: { en: "baptism-site-dead-sea-day-tour", de: "taufstelle-totes-meer-tagesausflug" },
    title: { en: "Baptism Site & Dead Sea Day Excursion", de: "Taufstelle Jesu & Totes Meer Tagesausflug" },
    subtitle: { en: "1-Day Sacred Pilgrimage & Natural Mineral Spa Float from Amman", de: "1-tägige biblische Pilgerreise & Totes Meer Spa ab Amman" },
    category: "Day Tour",
    storyCollection: "Day Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 115,
    highlights: {
      en: ["Baptism Site of Jesus Christ (Bethany Beyond the Jordan)", "Jordan River holy water bank", "Dead Sea resort day pass & floating", "Therapeutic black mud bath"],
      de: ["Taufstelle Jesu Christi jenseits des Jordans", "Ufer des heiligen Jordan-Flusses", "Totes Meer Tagespass & Schwebebad", "Therapeutischer Schlamm"]
    },
    route: ["Amman", "Baptism Site", "Dead Sea", "Amman"],
    inclusions: {
      en: ["Private AC vehicle with driver", "Hotel pickup and drop-off in Amman", "Dead Sea Resort Entry & Shower Pass", "Mineral Mud Experience"],
      de: ["Klimatisiertes Fahrzeug mit Fahrer", "Hotelabholung & Rücktransfer in Amman", "Totes Meer Resort Tageskarte", "Schlammbad-Erlebnis"]
    },
    exclusions: { en: ["Baptism site entrance fee", "Lunch & drinks", "Tips"], de: ["Eintritt Taufstelle", "Mittagessen", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Amman → Baptism Site → Dead Sea Resort → Amman", de: "Amman → Taufstelle → Totes Meer Resort → Amman" }, description: { en: "Drive down to Jordan River Valley to visit Bethany Beyond Jordan where Jesus Christ was baptized. Continue to luxury Dead Sea resort for lunch, floating & mud bath.", de: "Fahrt zur Taufstelle Jesu Christi und Entspannung im Totes-Meer-Resort." }, meals: "None" }
    ],
    heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "dt1-1", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", alt: { en: "Dead Sea hypersaline floating", de: "Schwebebad im Toten Meer" }, caption: { en: "Natural mineral mud & saline floating", de: "Therapeutisches Schwebebad am Toten Meer" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "day-tour-deadsea-mujib",
    slug: { en: "dead-sea-wadi-mujib-day-tour", de: "totes-meer-wadi-mujib-tagesausflug" },
    title: { en: "Dead Sea & Wadi Mujib Canyon Adventure", de: "Totes Meer & Wadi Mujib Schluchten-Abenteuer" },
    subtitle: { en: "1-Day Canyoning Water Trail & Floating at Earth's Lowest Point", de: "1 Tag Canyon-Wanderung & Schwebebad am tiefsten Punkt der Erde" },
    category: "Day Tour",
    storyCollection: "Adventure Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 150,
    highlights: {
      en: ["Wadi Mujib Siq Trail canyoning water trek", "Natural freshwater waterfall pool swim", "Dead Sea resort floating pass", "Black mud spa massage"],
      de: ["Wadi Mujib Siq Trail Schluchten-Wanderung", "Schwimmen am natürlichen Wasserfall", "Totes Meer Resort Tageskarte", "Mineral-Schlammbad"]
    },
    route: ["Amman", "Wadi Mujib", "Dead Sea", "Amman"],
    inclusions: {
      en: ["Private vehicle & driver", "Dead Sea Resort Day Pass", "Wadi Mujib Siq Trail entrance assistance"],
      de: ["Privatfahrzeug mit Fahrer", "Totes Meer Tageskarte", "Wadi Mujib Siq Trail Unterstützung"]
    },
    exclusions: { en: ["Wadi Mujib permit", "Lunch", "Tips"], de: ["Wadi Mujib Eintritt", "Mittagessen", "Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Amman → Wadi Mujib Canyon Trail → Dead Sea Float → Amman", de: "Amman → Wadi Mujib Schlucht → Totes Meer → Amman" }, description: { en: "Hike up the water Siq trail in Mujib Biosphere Reserve (-420m) to the hidden waterfall. Afterwards relax at Dead Sea resort.", de: "Wanderung durch die Mujib-Schlucht und Erholung am Toten Meer." }, meals: "None" }
    ],
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "dt2-1", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80", alt: { en: "Wadi Mujib canyon water siq trail", de: "Wadi Mujib Schluchten-Wasserweg" }, caption: { en: "Canyoning through Wadi Mujib Biosphere Reserve (-420m)", de: "Canyon-Wanderung durch das Biosphärenreservat Wadi Mujib" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "day-tour-petra-rum-express",
    slug: { en: "wadi-rum-and-petra-tour-from-amman", de: "petra-und-wadi-rum-tagesausflug-ab-amman" },
    title: { en: "Wadi Rum & Petra Express Day Safari from Amman", de: "Petra & Wadi Rum Express-Tagesausflug ab Amman" },
    subtitle: { en: "1-Day VIP Private Chauffeur Excursion to Petra & Wadi Rum Dunes", de: "1-tägige VIP-Exkursion nach Petra & Wadi Rum ab Amman" },
    category: "Day Tour",
    storyCollection: "Express Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 275,
    highlights: {
      en: ["Guided walk through Petra Siq & Treasury reveal", "2-Hour 4x4 Bedouin Jeep Safari across red dunes", "Desert sunset view over Wadi Rum mountains", "Executive AC private vehicle"],
      de: ["Spaziergang durch den Siq zum Schatzhaus in Petra", "2-Stunden 4x4-Jeepsafari im Wadi Rum", "Wüsten-Sonnenuntergang im Wadi Rum", "Komfortabler Privat-Transfer"]
    },
    route: ["Amman", "Petra", "Wadi Rum", "Amman"],
    inclusions: {
      en: ["Private Executive AC vehicle with driver", "Hotel pickup & drop-off in Amman", "2-Hour 4x4 Bedouin Jeep Safari in Wadi Rum", "Complimentary cold bottled water"],
      de: ["Privates Luxus-Fahrzeug mit Fahrer", "Hotelabholung in Amman", "2-Stunden 4x4 Jeep-Safari im Wadi Rum", "Mineralwasser"]
    },
    exclusions: { en: ["Petra entrance fee", "Meals & tips"], de: ["Petra Eintrittsgeld", "Mahlzeiten & Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Amman → Petra Rose City → Wadi Rum 4x4 Safari → Amman", de: "Amman → Petra Felsenstadt → Wadi Rum 4x4 Safari → Amman" }, description: { en: "Early 6:00 AM pickup. Drive to Petra for 3-hour walk through Siq to Treasury. Continue to Wadi Rum for 2-hour 4x4 Jeep safari.", de: "Frühe Abholung um 06:00 Uhr in Amman. Petra-Besichtigung und 4x4-Jeepsafari im Wadi Rum." }, meals: "None" }
    ],
    heroImage: "https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "dt3-1", url: "https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80", alt: { en: "Wadi Rum 4x4 bedouin safari", de: "Wadi Rum 4x4 Beduinen-Safari" }, caption: { en: "4x4 Jeep safari through red desert dunes", de: "Jeep-Safari über die roten Wüstendünen" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" },
      { id: "dt3-2", url: "https://images.unsplash.com/photo-1579606030856-494b28b7fa15?auto=format&fit=crop&w=1200&q=80", alt: { en: "Petra Treasury Al-Khazneh view", de: "Blick auf das Schatzhaus von Petra" }, caption: { en: "Express visit to Petra Treasury", de: "Express-Besuch des Schatzhauses in Petra" }, sortOrder: 2, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "day-tour-jerash-ajloun",
    slug: { en: "jerash-ajloun-day-tour", de: "jerash-ajloun-tagesausflug" },
    title: { en: "Jerash & Ajloun Castle Day Excursion", de: "Jerash & Burg Ajloun Tagesausflug" },
    subtitle: { en: "1-Day Northern Greco-Roman & Islamic Fortress Heritage", de: "1-tägiger Ausflug ins römische Jerash & Burg Ajloun" },
    category: "Day Tour",
    storyCollection: "Day Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 120,
    highlights: {
      en: ["Roman Jerash Oval Forum & Hadrian Arch", "Ajloun Fortress built by Saladin nephew (1184 AD)", "Pine forest views of Jordan Valley"],
      de: ["Römisches Jerash Ovales Forum & Hadrianstor", "Burg Ajloun (1184 n. Chr.)", "Blick auf das Jordantal"]
    },
    route: ["Amman", "Jerash", "Ajloun", "Amman"],
    inclusions: { en: ["Private vehicle & driver", "Amman Hotel pickup/drop-off"], de: ["Privatfahrzeug mit Fahrer", "Hotelabholung in Amman"] },
    exclusions: { en: ["Entrance fees", "Lunch & tips"], de: ["Eintrittsgelder", "Mittagessen & Trinkgelder"] },
    itinerary: [
      { day: 1, title: { en: "Amman → Roman Jerash → Ajloun Castle → Amman", de: "Amman → Römisches Jerash → Burg Ajloun → Amman" }, description: { en: "Explore Roman Jerash ruins and Saladin's Ajloun Castle before returning to Amman.", de: "Besichtigung von Jerash und Burg Ajloun." }, meals: "None" }
    ],
    heroImage: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "dt4-1", url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80", alt: { en: "Hadrian's Arch entry in Roman Jerash", de: "Hadrianstor im römischen Jerash" }, caption: { en: "Monumental Hadrian Arch built in 129 AD", de: "Hadrianstor erbaut 129 n.Chr." }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "day-tour-petra-express",
    slug: { en: "petra-from-amman-day-tour", de: "petra-tagesausflug-ab-amman" },
    title: { en: "Petra Rose City Express Day Tour from Amman", de: "Petra Felsenstadt Express-Tagesausflug ab Amman" },
    subtitle: { en: "1-Day Private Chauffeur Day Trip to Petra Treasury", de: "1-tägiger Tagesausflug nach Petra ab Amman" },
    category: "Day Tour",
    storyCollection: "Express Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 180,
    highlights: {
      en: ["Full 4-hour exploration inside Petra", "Walk through 1.2km Siq canyon gorge", "Al-Khazneh Treasury reveal", "Royal Tombs & Roman Colonnade"],
      de: ["4 Stunden Erkundung in Petra", "Spaziergang durch den 1,2 km Siq", "Das Schatzhaus Al-Khazneh", "Königsgräber"]
    },
    route: ["Amman", "Petra", "Amman"],
    inclusions: { en: ["Private AC vehicle with driver", "Hotel pickup and drop-off in Amman"], de: ["Privatfahrzeug mit Fahrer", "Hotelabholung in Amman"] },
    exclusions: { en: ["Petra entrance ticket", "Lunch & tips"], de: ["Petra Eintrittskarte", "Mittagessen"] },
    itinerary: [
      { day: 1, title: { en: "Amman → Petra Rose City → Amman", de: "Amman → Petra Felsenstadt → Amman" }, description: { en: "Morning pickup at 6:30 AM. 3-hour drive to Petra. Enjoy 4 hours walking through the Siq to Treasury & Royal Tombs before returning to Amman.", de: "Morgendliche Abholung und Fahrt nach Petra zur Erkundung des Schatzhauses." }, meals: "None" }
    ],
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "dt5-1", url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80", alt: { en: "Petra Monastery Ad-Deir", de: "Felsenkloster Ad-Deir in Petra" }, caption: { en: "Ad-Deir Monastery monument in Petra", de: "Das Felsenkloster Ad-Deir in Petra" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" }
    ]
  },
  {
    id: "day-tour-madaba-nebo-deadsea",
    slug: { en: "madaba-nebo-dead-sea-day-tour", de: "madaba-nebo-totes-meer-tagesausflug" },
    title: { en: "Madaba, Mount Nebo & Dead Sea Day Tour", de: "Madaba, Berg Nebo & Totes Meer Tagesausflug" },
    subtitle: { en: "1-Day Byzantine Mosaic Art, Moses Viewpoint & Dead Sea Float", de: "1 Tag Mosaikstadt Madaba, Berg Nebo & Totes Meer" },
    category: "Day Tour",
    storyCollection: "Day Story",
    durationDays: 1,
    durationNights: 0,
    startingPriceUSD: 135,
    highlights: {
      en: ["Madaba St. George 6th century Holy Land mosaic map", "Mount Nebo sanctuary & Promised Land view", "Dead Sea resort floating & mineral black mud"],
      de: ["Mosaikkarte in der St.-Georgs-Kirche Madaba", "Berg Nebo Aussichtspunkt", "Totes Meer Schwebebad"]
    },
    route: ["Amman", "Madaba", "Mount Nebo", "Dead Sea", "Amman"],
    inclusions: { en: ["Private vehicle & driver", "Dead Sea Resort Day Pass"], de: ["Privatfahrzeug mit Fahrer", "Totes Meer Tageskarte"] },
    exclusions: { en: ["Madaba & Nebo permits", "Lunch & tips"], de: ["Eintrittsgelder", "Mittagessen"] },
    itinerary: [
      { day: 1, title: { en: "Amman → Madaba → Mount Nebo → Dead Sea → Amman", de: "Amman → Madaba → Berg Nebo → Totes Meer → Amman" }, description: { en: "Visit Madaba St. George mosaic map, Mount Nebo sanctuary, and float at Dead Sea resort.", de: "Besuch von Madaba, Berg Nebo und Schwebebad am Toten Meer." }, meals: "None" }
    ],
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { id: "dt6-1", url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", alt: { en: "Madaba Byzantine Mosaic Map", de: "Mosaikkarte von Madaba" }, caption: { en: "Holy Land mosaic map in Madaba", de: "Mosaikkarte des Heiligen Landes in Madaba" }, sortOrder: 1, rightsStatus: "VERIFIED_OWNED" }
    ]
  }
];
