# MnM Corp - B2B Automotive Remanufacturing Website

## Overview
A professional B2B corporate website for MnM Co., Ltd., a specialist in remanufacturing automotive transmissions (DCT, A/T) and EV reduction gears. The website targets B2B automotive clients, investors, and partners with a professional, high-tech, eco-friendly brand identity.

## Tech Stack
- **Frontend:** React (Vite) + TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Animation:** Framer Motion for smooth transitions
- **Icons:** Lucide React
- **Routing:** Wouter (React Router alternative)
- **State Management:** TanStack React Query
- **Backend:** Express.js + Node.js
- **Database:** PostgreSQL (Drizzle ORM)
- **Forms:** React Hook Form with Zod validation
- **i18n:** Custom React context for Korean/English

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── home/            # Hero, Metrics, Certifications, Products, Testimonials
│   │   ├── company/         # Timeline
│   │   ├── technology/      # ProcessFlow
│   │   ├── business/        # ResourcesSection, ProductVisualization
│   │   ├── contact/         # ContactForm
│   │   └── ui/              # Shadcn UI components
│   ├── pages/               # Home, Company, Business, Technology, Quality, Contact
│   ├── data/                # constants.ts - all static data
│   └── lib/                 # Utilities, i18n.tsx
server/
├── routes.ts                # API endpoints (contact, resources)
├── storage.ts               # Database storage with Drizzle ORM
└── index.ts                 # Express server
shared/
└── schema.ts                # Data models and Zod schemas
```

## Pages
1. **Home** - Hero section, key metrics, certifications, products preview, testimonials, CTA
2. **Company** - About, CEO message, timeline, certifications, location
3. **Business** - Product cards, product visualization with animated gears, resources downloads
4. **Technology** - Facilities, 10-step process flow, technical capabilities
5. **Quality** - Quality metrics, MES/Interlocking systems, testing equipment
6. **Contact** - Contact form, contact information, facility address

## Key Features
- **Multi-language Support:** Korean/English toggle with i18n context provider
- **PostgreSQL Database:** Contact form submissions persist to database
- **Downloadable Resources:** 5 placeholder PDFs served via /api/resources/:id endpoint
- **Client Testimonials:** 3 testimonials with partner logos section
- **Interactive 3D Visualization:** Animated SVG gears with Framer Motion
- Animated counters for metrics
- Interactive timeline component
- 10-step process flow visualization with hover states
- Responsive navigation with mobile menu
- IATF 16949 and ISO 45001 certification badges

## Design System
- **Primary Color:** Deep Blue (215, 90%, 30%)
- **Accent Color:** Eco Green (152, 60%, 40%)
- **Typography:** Inter, Noto Sans KR
- **Border Radius:** Small (0.375rem - 0.5625rem)

## API Endpoints
- `POST /api/contact` - Submit contact form (persists to PostgreSQL)
- `GET /api/contacts` - Retrieve contact submissions
- `GET /api/resources/:resourceId` - Download placeholder PDF documents
  - Available resources: company-brochure, dct-spec, ev-gear-spec, quality-certification, process-overview

## Footer Contact Info (Mandatory)
- Company: 한국인프라연구원(주)
- Email: infrastructure@kakao.com
- Phone: 010-9143-0800

## Development
The application runs on port 5000. Use `npm run dev` to start the development server.

## Notes
- PDF files are placeholders - coordinate with content owners to replace with finalized branded assets when available
- Database uses Drizzle ORM with PostgreSQL via DATABASE_URL environment variable
