export interface Review {
  id: string;
  author: string;
  country: string;
  flag: string;
  rating: number;
  date: string;
  tourName: { en: string; de: string };
  comment: { en: string; de: string };
  verifiedBooker: boolean;
  avatarUrl?: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Dr. Markus & Julia Weber',
    country: 'Germany',
    flag: '🇩🇪',
    rating: 5,
    date: 'February 2026',
    tourName: {
      en: 'Jordan Story Classic 2 — 7-Day Grand Expedition',
      de: 'Jordan Story Klassik 2 — 7-Tage Große Jordanien Expedition'
    },
    comment: {
      en: 'An extraordinary experience! Our driver Tariq was exceptionally professional, knowledgeable, and punctual. The Martian dome camp in Wadi Rum and the private tour in Petra exceeded all expectations. Deutschsprachige Betreuung war hervorragend!',
      de: 'Ein traumhaftes Erlebnis! Unser Fahrer Tariq war überaus professionell, zuvorkommend und pünktlich. Die Übernachtung im Martian Dome Camp im Wadi Rum und die Privatführung in Petra waren absolute Highlights.'
    },
    verifiedBooker: true,
  },
  {
    id: 'rev-2',
    author: 'Sarah & James Sterling',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rating: 5,
    date: 'January 2026',
    tourName: {
      en: 'Jordan Luxury Tour 1 — Heritage & 5-Star Serenity',
      de: 'Jordan Luxus-Tour 1 — 5-Sterne Erbe & Eleganz'
    },
    comment: {
      en: 'Every detail was seamless from VIP airport arrival to our Dead Sea spa retreat at Kempinski Ishtar. Having a dedicated private Mercedes chauffeur made the entire 6-day itinerary stress-free and unforgettable.',
      de: 'Jedes Detail war perfekt durchdacht – von der VIP-Flughafenbetreuung bis zum Entspannungsaufenthalt am Toten Meer im Kempinski Resort. Ein unvergesslicher Urlaub!'
    },
    verifiedBooker: true,
  },
  {
    id: 'rev-3',
    author: 'Claire & Antoine Dupont',
    country: 'France',
    flag: '🇫🇷',
    rating: 5,
    date: 'December 2025',
    tourName: {
      en: 'Budget Tour 4 — Petra, Wadi Rum Desert & Dead Sea',
      de: 'Budget-Tour 4 — Petra, Wadi Rum Wüste & Totes Meer'
    },
    comment: {
      en: 'Best tour operator in Jordan! Unbeatable value, super comfortable vehicle, and authentic Bedouin hospitality. Watching the sunset over red dunes in Wadi Rum will stay with us forever.',
      de: 'Bester Reiseveranstalter in Jordanien! Hervorragendes Preis-Leistungs-Verhältnis, bequemes Fahrzeug und echte Beduinen-Gastfreundschaft.'
    },
    verifiedBooker: true,
  },
  {
    id: 'rev-4',
    author: 'Michael B. Davies',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    date: 'November 2025',
    tourName: {
      en: 'Jordan & Holy Land Tour 2 — Biblical Pilgrimage',
      de: 'Jordanien & Heiliges Land Tour 2 — Biblische Pilgerreise'
    },
    comment: {
      en: 'Standing at Bethany Beyond the Jordan and Mount Nebo was deeply moving. The historical depth of our licensed guide combined with seamless private transport was first class.',
      de: 'Der Besuch der Taufstelle am Jordan und des Berges Nebo war zutiefst bewegend. Sehr kompetente Führung und perfekter Service.'
    },
    verifiedBooker: true,
  }
];
