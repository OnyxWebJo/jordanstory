# Multilingual Tour Search Intent & AEO/SEO/GEO Query Study

## Overview
This document synthesizes traveler search behavior and AI answer engine query patterns across English (`EN`), German (`DE`), French (`FR`), and Italian (`IT`) for Jordan tour products, Petra itineraries, Wadi Rum desert camps, Dead Sea wellness resorts, and entry logistics.

---

## 1. Top Search Query Intent Clusters by Market

### A. English (`EN`) Search Intent Patterns
1. **Visa & Entry Fees:** *"Does Jordan Pass cover visa fees for 3-day tours?"*, *"Are entrance fees included in Jordan tour packages?"*
2. **Private Chauffeur vs. Local Guide:** *"What is included with a private driver in Jordan?"*, *"Do drivers stay with you in Petra?"*
3. **Pacing & Duration:** *"Can you see Petra, Jerash and Dead Sea in 3 days?"*, *"Is 7 days enough for complete Jordan tour?"*
4. **Wadi Rum Bedouin Camp Experience:** *"What is included in a Wadi Rum Bedouin camp overnight?"*, *"What is a Martian Bubble Dome in Wadi Rum?"*
5. **Dead Sea Amenities:** *"Do Dead Sea resorts provide towel service, showers, and mud baths?"*

### B. German (`DE`) Search Intent Patterns (`Jordanien Rundreise`)
1. **Visum & Jordan Pass:** *"Ist das Visum für Jordanien bei der Ankunft am Flughafen Amman kostenlos?"*, *"Welcher Jordan Pass ist für 3-5 Tage ideal?"*
2. **Privatreise mit Fahrer:** *"Wie sicher ist eine private Jordanien Rundreise mit klimatisiertem Fahrzeug?"*, *"Wie unterscheidet sich ein englischsprachiger Fahrer von einem lizenzierten Reiseleiter?"*
3. **Wadi Rum & Zarb:** *"Was ist das traditionelle Zarb-Abendessen im Beduinencamp?"*, *"Gibt es im Wüstencamp private Badezimmer und Warmwasser?"*
4. **Totes Meer Wellness:** *"Wie funktioniert das schwebende Bad im Toten Meer und welche Schlammbehandlungen gibt es?"*

### C. French (`FR`) Search Intent Patterns (`Circuit Jordanie`)
1. **Jordan Pass & Entrées:** *"Le Jordan Pass annule-t-il les frais de visa à l'aéroport d'Amman ?"*
2. **Circuit Privé avec Chauffeur:** *"Quel est le confort d'un circuit privé en Jordanie avec chauffeur dédié ?"*
3. **Pétra & Désert du Wadi Rum:** *"Combien de temps faut-il prévoir pour visiter le Siq et le Trésor de Pétra ?"*, *"Comment se passe une nuit en dôme martien sous les étoiles ?"*

### D. Italian (`IT`) Search Intent Patterns (`Tour Giordania`)
1. **Visto all'Arrivo & Jordan Pass:** *"Come si ottiene l'assistenza per il visto gratuito all'aeroporto di Amman?"*
2. **Tour Privato in Giordania:** *"È consigliabile un tour privato con autista per Petra e Mar Morto?"*
3. **Campo Beduino e Mar Morto:** *"Quali servizi sono inclusi nel pernottamento nel campo beduino del Wadi Rum?"*

---

## 2. AEO (Answer Engine Optimization) & GEO Entity Mapping

Every tour FAQ item is structured to serve:
1. **Direct Snippet Answers:** 40-50 word factual answers placed immediately under h3 questions.
2. **Entity Consistency:** Preserves exact facts (e.g. 3-star vs 5-star, exact duration, exact inclusion list).
3. **No Contradictions:** Verifies facts match across `EN`, `DE`, `FR`, `IT`.

---

## 3. Implementation Matrix Across All 24 Tours

All 24 tour records in [`src/data/tours.ts`](file:///Users/shadi/Desktop/My%20Projects%202026/jordanstory/frontend/src/data/tours.ts) are updated with 3-4 localized, search-intent driven FAQ items addressing:
- Exact landmark coverage & itinerary flow
- Vehicle & private driver/guide setup
- Entrance fees & Jordan Pass guidance
- Included meals, hotel tiers & Bedouin camp/Dead Sea resort amenities
