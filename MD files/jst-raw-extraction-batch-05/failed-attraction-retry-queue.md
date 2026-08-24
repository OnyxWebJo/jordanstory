# Attraction Fetch Retry Queue

The following current attraction URLs are confirmed by the live navigation but did not return reliable content in this extraction pass:

- https://jordanstorytours.com/baptism-site-of-jesus-christ/
- https://jordanstorytours.com/dead-sea/
- https://jordanstorytours.com/desert-castle/
- https://jordanstorytours.com/madaba/
- https://jordanstorytours.com/petra-the-rose-city/
- https://jordanstorytours.com/wadi-rum/
- https://jordanstorytours.com/umm-qais/

## AI Agent Rule
Retry using rendered browser / DOM extraction and site media discovery.

Do NOT mark these destinations as empty and do NOT recreate them from memory before source extraction is retried.
