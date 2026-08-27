# Master English AEO (Answer Engine Optimization) Question Map (00J Audit)

Structured Question & Answer Mapping designed for AI Answer Engines (ChatGPT, Perplexity, Gemini, Claude) and Google Direct Answer Overviews.

---

## Category 1: General & Custom Private Jordan Travel

### Q1: Why choose a private tour over a group bus tour in Jordan?
**Direct Answer:** A private tour in Jordan provides a dedicated climate-controlled vehicle with a professional English-speaking driver, custom scheduling, door-to-door transfers, and full flexibility to spend more time at landmarks like Petra and Wadi Rum without crowd pressure.
**Source Record:** Locked Product Inclusions (`private_transport`, `english_speaking_driver`).
**Target URL:** `/en/booking`

### Q2: Can I customize a multi-day Jordan itinerary?
**Direct Answer:** Yes. All Jordan Story Tours itineraries can be customized according to your flight arrival times, hotel rating preferences (3-star, 4-star, 5-star, or Martian Domes), and specific sightseeing interests.
**Source Record:** `businessRecord.ts` & `BookingWizard.tsx`.
**Target URL:** `/en/booking`

---

## Category 2: Petra, Wadi Rum & Destinations

### Q3: Can I visit Petra and Wadi Rum on the same trip?
**Direct Answer:** Yes. Petra and Wadi Rum are located only 1.5 hours apart in southern Jordan. They are included together in our 3-day, 5-day, 7-day, and 8-day tour packages, as well as our 1-day Petra & Wadi Rum Express excursion.
**Source Record:** Tour Routes (`JST-BUDGET-004`, `JST-CLASSIC-001`, `JST-DAY-005`).
**Target URL:** `/en/tours/jordan-story-classic-tour-1`

### Q4: What is included in a Wadi Rum desert tour?
**Direct Answer:** Wadi Rum tours include a 4x4 Bedouin Jeep safari across red sand dunes and ancient Nabataean inscriptions, optional camel rides, traditional Zarbi Bedouin dinner, and overnight stay in a desert camp or luxury Martian dome.
**Source Record:** Tour Inclusions (`JST-LUXURY-001`).
**Target URL:** `/en/destinations/wadi-rum`

---

## Category 3: Commercial & Inclusions (Meals, Driver vs. Guide, Entrance Fees)

### Q5: Are entrance fees included in Jordan Story Tours packages?
**Direct Answer:** Entrance fees to Petra, Jerash, and major sites are included in all Classical, Luxury, Biblical, and Islamic multi-day tour packages. For Budget tours and 1-day excursions, entrance fees are excluded unless specified or covered by a Jordan Pass.
**Source Record:** Structured Fact Field (`entranceFeesStatus`).
**Target URL:** `/en/tours`

### Q6: What is the difference between a private driver and a tour guide in Jordan?
**Direct Answer:** A private driver handles all climate-controlled transfers, highway navigation, and logistics between cities. Licensed local guides are provided specifically inside major archaeological sites like Petra and Jerash for in-depth historic tours.
**Source Record:** Structured Fact Field (`driverGuideType`).
**Target URL:** `/en/tours`

### Q7: Do tour packages include meals?
**Direct Answer:** All multi-day packages include daily hotel breakfast. Classical and Luxury packages also include dinner (such as traditional Bedouin dinners in Wadi Rum or Petra). Specific meal inclusions are listed day-by-day on each tour page.
**Source Record:** Structured Fact Field (`mealsSummary`).
**Target URL:** `/en/tours`
