export interface DestinationData {
  id: string;
  slug: { en: string; de: string };
  name: { en: string; de: string };
  tagline: { en: string; de: string };
  description: { en: string; de: string };
  highlights: { en: string[]; de: string[] };
  insiderTips: { en: string[]; de: string[] };
  bestTimeToVisit: { en: string; de: string };
  image: string;
  gallery: string[];
}

export const DESTINATIONS_FULL: DestinationData[] = [
  {
    id: "petra",
    slug: { en: "petra", de: "petra" },
    name: { en: "Petra — Rose City", de: "Petra — Die Rosa-Rote Felsenstadt" },
    tagline: { en: "Nabataean Wonder Carved in Pink Sandstone", de: "Nabatuäisches Weltwunder in rosarotem Sandstein" },
    description: {
      en: "The ancient capital of the Nabataean Kingdom, hidden deep within a dramatic narrow gorge (The Siq). Marvel at Al-Khazneh (The Treasury) and climb to Ad-Deir (The Monastery).",
      de: "Die antike Hauptstadt des Königreichs der Nabatäer, verborgen in einer schmalen Schlucht (dem Siq). Bewundern Sie das Schatzhaus Al-Khazneh und wandern Sie zum Kloster Ad-Deir."
    },
    highlights: {
      en: ["Walk through the 1.2km narrow Siq gorge", "Al-Khazneh (The Treasury) reveal", "Ad-Deir (The Monastery) 800-step hike", "Royal Tombs & Roman Colonnaded Street"],
      de: ["Spaziergang durch den 1,2 km langen Siq", "Das magische Schatzhaus Al-Khazneh", "Wanderung (800 Stufen) zum Kloster Ad-Deir", "Königsgräber & Römische Säulenstraße"]
    },
    insiderTips: {
      en: ["Arrive at 6:00 AM when gates open to capture empty Siq photos.", "Wear sturdy hiking boots with grip for the Monastery stairs.", "Buy the Jordan Pass in advance to save on 50 JOD entrance tickets."],
      de: ["Kommen Sie um 06:00 Uhr zur Öffnung, um den Siq ohne Menschenmassen zu fotografieren.", "Tragen Sie feste Wanderschuhe für die 800 Stufen zum Kloster.", "Kaufen Sie vorab den Jordan Pass, um 50 JOD Eintrittsgeld zu sparen."]
    },
    bestTimeToVisit: { en: "March to May & September to November", de: "März bis Mai & September bis November" },
    image: "https://jordanstorytours.com/content/uploads/2020/11/Jordan_Petra.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2020/11/Jordan_Petra.jpg",
      "https://jordanstorytours.com/content/uploads/2020/11/Petra-Jordan-tours-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2020/12/Petra-travel-e1608043798711-600x600.jpg"
    ]
  },
  {
    id: "wadi-rum",
    slug: { en: "wadi-rum", de: "wadi-rum" },
    name: { en: "Wadi Rum Desert", de: "Wadi Rum Wüste" },
    tagline: { en: "The Valley of the Moon & Martian Red Dunes", de: "Das Tal des Mondes & Rote Wüstendünen" },
    description: {
      en: "A UNESCO World Heritage wilderness of monolithic rock skyscrapers, natural stone bridges, ancient petroglyphs, and bedouin hospitality under starlit skies.",
      de: "Eine UNESCO-Weltnaturerbe-Wüste aus riesigen Felsmonolithen, natürlichen Steinbrücken, antiken Petroglyphen und Beduinen-Gastfreundschaft."
    },
    highlights: {
      en: ["4x4 Bedouin Jeep safari across red sand dunes", "Overnight in luxury Martian Domes", "Sunset over Lawrence's Spring", "Stargazing without light pollution"],
      de: ["4x4 Beduinen-Jeepsafari durch rote Sanddünen", "Übernachtung in luxuriösen Martian Domes", "Sonnenuntergang bei Lawrences Quelle", "Sterngucken im Beduinencamp"]
    },
    insiderTips: {
      en: ["Book a luxury Martian Dome camp for heated glass-ceiling stargazing.", "Bring a warm fleece for desert nights which drop to 5°C even in summer.", "Enjoy authentic Zarb underground pit BBQ dinner."],
      de: ["Buchen Sie ein Martian Dome Camp mit Panorama-Glasdach zum Sternegucken.", "Bringen Sie eine warme Jacke für kühle Wüstennächte mit.", "Genießen Sie das traditionelle Zarb-Erdboden-BBQ."]
    },
    bestTimeToVisit: { en: "October to April", de: "Oktober bis April" },
    image: "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-travel-600x600.jpg"
    ]
  },
  {
    id: "dead-sea",
    slug: { en: "dead-sea", de: "totes-meer" },
    name: { en: "The Dead Sea", de: "Das Tote Meer" },
    tagline: { en: "The Lowest Point on Earth (-430m)", de: "Der tiefste Punkt der Erde (-430 m)" },
    description: {
      en: "Earth's ultimate natural spa. Float effortlessly in hypersaline mineral waters, cover in therapeutic black mud, and enjoy year-round desert sunshine.",
      de: "Das ultimative natürliche Spa der Erde. Schwerelos im salzreichen Mineralwasser schweben, therapeutischen Schlamm genießen und Sonne tanken."
    },
    highlights: {
      en: ["Effortless floating in 34% salt water", "Therapeutic mineral black mud baths", "Luxury resort spa relaxation", "Views of the Palestinian hills"],
      de: ["Schwereloses Schweben im 34 % Salzgehalt", "Therapeutischer Mineral-Schlamm", "Luxuriöse Resort-Entspannung", "Blick auf die Berge von Palästina"]
    },
    insiderTips: {
      en: ["Never shave 24 hours before floating to prevent sting.", "Limit floating to 15-20 minutes per session.", "Rinse immediately with freshwater at resort showers."],
      de: ["Rasieren Sie sich nicht 24 Stunden vor dem Bad im Toten Meer.", "Beschränken Sie das Schweben auf 15-20 Minuten pro Badegang.", "Duschen Sie sich direkt danach mit Süßwasser ab."]
    },
    bestTimeToVisit: { en: "Year-Round (Best Sept to May)", de: "Ganzjährig (Beste Zeit Sept bis Mai)" },
    image: "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg",
      "https://jordanstorytours.com/content/uploads/2021/01/Dead-Sea-3-e1610326117330-700x500.jpg"
    ]
  },
  {
    id: "jerash",
    slug: { en: "jerash", de: "jerash" },
    name: { en: "Roman Jerash", de: "Römisches Jerash" },
    tagline: { en: "Pompeii of the East", de: "Das Pompeji des Ostens" },
    description: {
      en: "One of the best-preserved Roman provincial cities in the world. Walk along the Oval Plaza, Cardo Maximus, and grand temples of Artemis and Zeus.",
      de: "Eine der am besten erhaltenen römischen Provinzstädte weltweit. Spazieren Sie über den Ovalen Platz, die Säulenstraße Cardo Maximus und zu den Tempeln."
    },
    highlights: {
      en: ["Hadrian's Arch gate", "The Oval Forum plaza", "South Theater acoustics test", "Cardo Maximus chariot grooves"],
      de: ["Triumfbogen des Hadrian", "Das Ovale Forum", "Akustik-Test im Südtheater", "Wagenspuren auf der Cardo Maximus"]
    },
    insiderTips: {
      en: ["Climb to the top of the South Theater for acoustic bagpipe performance.", "Visit in spring (March/April) when wild green hills surround the marble ruins."],
      de: ["Testen Sie die berühmte Flüster-Akustik im Südtheater.", "Besuchen Sie Jerash im Frühling, wenn grüne Hügel die Säulen umgeben."]
    },
    bestTimeToVisit: { en: "March to May", de: "März bis Mai" },
    image: "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2020/11/Jerash-Tours-in-Jordan-e1605959035108-600x534.jpg"
    ]
  },
  {
    id: "amman",
    slug: { en: "amman", de: "amman" },
    name: { en: "Amman Capital", de: "Hauptstadt Amman" },
    tagline: { en: "City of Seven Hills & Citadel Ruins", de: "Stadt der sieben Hügel & Zitadelle" },
    description: {
      en: "A vibrant blend of ancient history and modern Arab culture. Perched on Jebel Al-Qala'a, the Citadel offers views over the 6,000-seat Roman Theater and bustling souks.",
      de: "Eine lebendige Mischung aus antiker Geschichte und moderner arabischer Kultur mit herrlichem Blick von der Zitadelle auf das Römische Theater."
    },
    highlights: {
      en: ["Amman Citadel & Temple of Hercules", "Roman Theater 6,000 capacity", "Rainbow Street cafes & authentic Hashem falafel", "King Abdullah Mosque blue dome"],
      de: ["Zitadelle von Amman & Herkules-Tempel", "Römisches Theater", "Rainbow Street & authentischer Falafel", "König-Abdullah-Moschee"]
    },
    insiderTips: {
      en: ["Eat legendary fresh falafel at Hashem Restaurant downtown.", "Visit Habibah Sweets for warm Kunafa cheese dessert."],
      de: ["Probieren Sie frischen Falafel bei Hashem in der Innenstadt.", "Genießen Sie warme Kunafa bei Habibah Sweets."]
    },
    bestTimeToVisit: { en: "Spring & Autumn", de: "Frühling & Herbst" },
    image: "https://jordanstorytours.com/content/uploads/2017/01/dome-of-the-rock-jerusalem-tours-600x567.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2017/01/dome-of-the-rock-jerusalem-tours-600x567.jpg"
    ]
  },
  {
    id: "madaba",
    slug: { en: "madaba", de: "madaba" },
    name: { en: "Madaba — Mosaic City", de: "Madaba — Stadt der Mosaike" },
    tagline: { en: "Byzantine Art & 6th-Century Holy Land Map", de: "Byzantinische Kunst & Mosaikkarte des Heiligen Landes" },
    description: {
      en: "Famous for its 6th-century mosaic map of Jerusalem and the Holy Land preserved on the floor of St. George's Church.",
      de: "Berühmt für die Mosaikkarte von Jerusalem und dem Heiligen Land aus dem 6. Jahrhundert in der St.-Georgs-Kirche."
    },
    highlights: {
      en: ["St. George Church 6th-century Holy Land Mosaic", "Madaba Archaeological Park", "Local Byzantine mosaic workshops"],
      de: ["St.-Georgs-Kirche Mosaikkarte", "Archäologischer Park Madaba", "Byzantinische Mosaik-Werkstätten"]
    },
    insiderTips: {
      en: ["Combine your visit with Mount Nebo located just 15 minutes away."],
      de: ["Kombinieren Sie Ihren Besuch mit dem nur 15 Minuten entfernten Berg Nebo."]
    },
    bestTimeToVisit: { en: "Year-Round", de: "Ganzjährig" },
    image: "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg"
    ]
  },
  {
    id: "aqaba",
    slug: { en: "aqaba", de: "aqaba" },
    name: { en: "Aqaba — Red Sea Coast", de: "Aqaba — Rotes Meer Küste" },
    tagline: { en: "Coral Reefs, Beach Resorts & Watersports", de: "Korallenriffe, Strand-Resorts & Wassersport" },
    description: {
      en: "Jordan's coastal window on the Red Sea, offering world-class scuba diving, coral reefs, year-round warm sunshine, and luxury beach resorts.",
      de: "Jordaniens Küstenfenster zum Roten Meer mit erstklassigen Tauchplätzen, Korallenriffen und Luxus-Resorts."
    },
    highlights: {
      en: ["Scuba diving and coral reef snorkeling", "Private sunset yacht cruises", "Japanese Garden reef dive site", "Duty-free seaside shopping"],
      de: ["Tauchen und Schnorcheln an Korallenriffen", "Private Jachtausfahrt bei Sonnenuntergang", "Tauchplatz Japanese Garden", "Zollfreies Einkaufen am Meer"]
    },
    insiderTips: {
      en: ["Take a glass-bottom boat tour to view coral reefs without getting wet."],
      de: ["Machen Sie eine Fahrt mit dem Glasbodenboot, um die Riffe trocken zu beobachten."]
    },
    bestTimeToVisit: { en: "October to May", de: "Oktober bis Mai" },
    image: "https://jordanstorytours.com/content/uploads/2017/08/Jordan-Aqaba-Tours-700x500.jpg",
    gallery: [
      "https://jordanstorytours.com/content/uploads/2017/08/Jordan-Aqaba-Tours-700x500.jpg"
    ]
  }
];
