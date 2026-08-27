# Master English Internal Link Matrix (00J Audit)

Structured Link Topology defining link direction, anchor text standards, and page hierarchy across the website.

---

## 1. Top-Down Page Hierarchy & Linking Rules

```text
[Root Homepage /en]
   │
   ├── Navigation Header Links ──> [/en/tours, /en/destinations, /en/booking]
   │
   ├── Hero & Story Collections ──> [/en/tours/[slug], /en/destinations/[slug]]
   │
   ├── Featured Tours Cards ──> [/en/tours/[slug]]
   │
   ├── Interactive Map Nodes ──> [/en/destinations/[slug]]
   │
   └── AEO FAQs ──> [/en/booking]
```

---

## 2. Master Link Matrix

| Source Page | Destination Page | Context / Section | Recommended Anchor Text | Purpose |
|-------------|------------------|-------------------|-------------------------|---------|
| `/en` | `/en/tours` | Header Nav & Footer | `Tour Packages` / `Rundreisen` | Crawl path to tour catalog |
| `/en` | `/en/destinations` | Header Nav & Footer | `Destinations` | Crawl path to destination hub |
| `/en` | `/en/booking` | Header CTA | `Book Private Tour` | Conversion action |
| `/en` | `/en/tours/jordan-story-classic-tour-1` | Featured Tours | `View Details` | Product discovery |
| `/en/tours` | `/en/tours/[slug]` | Tour Cards | `View Details` / `Details Ansehen` | Direct product navigation |
| `/en/tours/[slug]` | `/en/booking` | Pricing Sidebar CTA | `Book This Tour` | Booking flow entry |
| `/en/tours/[slug]` | `/en/destinations/petra` | Route Badges | `Petra Rose City` | Contextual entity link |
| `/en/destinations` | `/en/destinations/[slug]` | Landmark Cards | `Full Guide` | Destination detail discovery |
| `/en/destinations/[slug]` | `/en/booking` | Sidebar Banner | `Request Tour Quote` | High-intent conversion |
