# MnM Corp B2B Automotive Remanufacturing Website - Design Guidelines

## Design Approach
**Industrial Corporate B2B Reference-Based Design**
Drawing inspiration from leading B2B industrial and automotive manufacturing websites that balance professionalism with modern digital experiences. Focus on trust, technological expertise, and manufacturing precision.

## Typography System
- **Primary Font:** Inter or Noto Sans KR (clean, technical sans-serif)
- **Hierarchy:**
  - Hero Headlines: 3xl-5xl, bold (700-800)
  - Section Headers: 2xl-3xl, semibold (600)
  - Subsections: xl-2xl, medium (500)
  - Body Text: base-lg, regular (400)
  - Captions/Stats: sm-base, medium (500)

## Layout & Spacing
- **Spacing Scale:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (px-4, py-8, gap-12, etc.)
- **Container:** max-w-7xl for main content sections
- **Section Padding:** py-16 md:py-24 for desktop, py-12 for mobile
- **Grid Systems:** 
  - 3-4 column grids for product/feature cards
  - 2-column for content+image layouts
  - Single column on mobile (always)

## Page-Specific Design Specifications

### 1. Home Page
**Hero Section:**
- Full-width industrial/manufacturing facility background image (transmission assembly line, clean room, or precision machinery)
- Centered overlay with headline: "Global Leader in Transmission Remanufacturing"
- Subheadline emphasizing sustainability and precision engineering
- Dual CTA buttons: "Explore Products" (primary) + "Contact Us" (secondary)
- Buttons with backdrop-blur-sm bg-white/10 treatment over hero image

**Key Metrics Section:**
- 4-column grid showcasing animated counters
- Display: "15,100 units/year Production Capacity" | "<1600ppm Defect Rate" | "X Years Experience" | "X+ Global Partners"
- Large numbers (4xl-5xl) with descriptive labels below

**Certifications Showcase:**
- Badge display for IATF 16949 and ISO 45001 certifications
- Grid layout with certification logos/badges and descriptions

### 2. Company (About Us)
**CEO Message Section:**
- 2-column layout: CEO photo (placeholder) + message text
- Professional portrait-style image on left, quote/message on right

**Company Timeline:**
- Vertical timeline component with milestone cards
- Key dates: 2018 (Founding) → 2022 (EV Gear Mass Production) → 2025 (Gen2 DCT)
- Each milestone card includes year, title, and brief description
- Visual timeline connector line running through cards

**Location Info:**
- Map integration placeholder or location card
- Display: Seosan-si, Chungnam location

### 3. Business (Products)
**Product Grid:**
- 2x2 or 3-column grid of product cards
- Each card includes:
  - Product category image (transmission/gear parts - high-quality industrial photography)
  - Product name as header
  - Type/variant details (e.g., "Dry & Wet types")
  - Key specifications or benefits
  - "Learn More" link/button

**Products to showcase:**
1. DCT (Double Clutch Transmission)
2. EV Reduction Gears (highlight as "Key Growth Area")
3. A/T (Automatic Transmission - Front-wheel 8-speed)
4. Heavy Machinery Transmission Services

### 4. Technology & Infrastructure
**Facilities Highlight:**
- Feature Clean Room specifications prominently (Class 20k/3k)
- Image of clean room manufacturing environment
- Technical specifications in cards or info panels

**Process Flow Visualization:**
- 10-step horizontal or vertical flow diagram
- Steps: RO Check → Motor Test → Disassembly → Cleaning → Assembly → EOL
- Each step represented with icon + label
- Connecting lines/arrows between steps
- Hover states reveal additional details

### 5. Quality Control
**Systems Overview:**
- Card-based layout highlighting MES and Interlocking System
- Equipment list in organized grid:
  - Air Leak Testers
  - EOL Testers
  - Fool-proof systems
- Technical diagrams or equipment photos

### 6. Contact Page
**Split Layout:**
- Left: Contact form (Name, Company, Email, Message fields)
- Right: Office information card
  - Address: "198, Seongyeon 4-ro, Seongyeon-myeon, Seosan-si, Chungnam, Korea"
  - Map placeholder
  - Business hours

## Core Components

### Navigation Header
- Clean horizontal navbar with logo left, menu items right
- Menu items: Home | Company | Business | Technology | Quality | Contact
- Sticky/fixed on scroll with subtle shadow
- Mobile: Hamburger menu

### Footer (MANDATORY SPECIFICATIONS)
- Multi-column footer layout
- **Critical Contact Information (Must Display Exactly):**
  - Company Name: 한국인프라연구원(주)
  - Email: infrastructure@kakao.com
  - Phone: 010-9143-0800
- Additional sections: Quick Links, Social Media placeholders, Copyright

### Cards & Containers
- Rounded corners (rounded-lg to rounded-xl)
- Subtle shadows (shadow-md, shadow-lg on hover)
- White backgrounds with subtle borders
- Hover states: lift effect (scale-105 transform + shadow increase)

## Images Strategy
**Required Images:**
1. **Hero:** Industrial manufacturing facility, transmission assembly line, or clean room operations
2. **Products:** High-quality automotive parts photography (transmissions, gears, mechanical components)
3. **Technology:** Clean room facilities, manufacturing equipment, precision machinery
4. **Company:** CEO portrait, facility exteriors, team collaboration (professional corporate photography)

All images should convey precision, advanced technology, and industrial professionalism.

## Animation & Interactions
- **Framer Motion transitions:** Smooth page transitions, fade-in on scroll for sections
- **Metric Counters:** Animated number counting on viewport entry
- **Timeline:** Reveal animations as user scrolls
- **Process Flow:** Hover states show detailed descriptions
- **Product Cards:** Gentle lift on hover
- Keep animations subtle and professional (avoid playful/casual effects)

## Accessibility & Quality
- High contrast text on backgrounds
- Proper heading hierarchy (h1 → h6)
- Alt text for all images
- Form labels and validation
- Keyboard navigation support

This design creates a trustworthy, technologically advanced B2B presence that showcases MnM Corp's expertise in automotive remanufacturing while maintaining industrial professionalism throughout.