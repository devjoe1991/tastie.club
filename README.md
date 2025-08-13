# tastie.club 🍽️

**taste the unforgettable**

A premium subscription-based platform connecting discerning food enthusiasts with partner restaurants through exclusive tasting experiences.

## About

tastie.club is designed to redefine how people discover and experience new dining opportunities. For a monthly subscription fee, members gain access to book complimentary, chef-curated tasting menus at a selection of restaurants during their designated off-peak hours.

### The Vision

We create a symbiotic relationship where:
- **Restaurants** fill otherwise empty tables during off-peak hours and showcase their culinary specialties to new audiences
- **Food enthusiasts** explore the city's food scene in an exclusive and affordable way through curated tasting experiences

tastie.club positions itself as a more curated and experience-focused alternative to traditional discount-based dining services.

### Target Audience

- **Food Enthusiasts**: Urban professionals aged 25-45 who love trying new restaurants, appreciate quality food and unique experiences, and seek value without compromising on quality
- **Partner Restaurants**: Independent restaurants and quality-focused establishments looking to maximize table occupancy and build a loyal customer base

## Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend & Database**: Supabase
- **Authentication**: Supabase Auth
- **Payments**: Stripe (for subscription management)

## Current Phase: MVP

We're currently building our Minimum Viable Product (MVP) featuring:
- Elegant landing page showcasing the tastie.club value proposition
- "How It Works" section for both customers and restaurants
- Waitlist capture for early access (customers and restaurant partners)
- Fully responsive design across all devices

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

Create a `.env.local` file with your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
tastie.club/
├── app/                 # Next.js app directory
│   ├── components/      # Reusable UI components
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── docs/               # Project documentation
├── public/             # Static assets
└── README.md           # This file
```

## Contributing

This project follows a clean, minimalist design philosophy inspired by premium user experiences. When contributing:

1. Maintain the elegant, professional aesthetic
2. Ensure responsive design across all devices
3. Follow the established component patterns
4. Test thoroughly before submitting changes

## Roadmap

- ✅ **Phase 1**: Landing page and waitlist capture (Current)
- 🔄 **Phase 2**: User authentication and subscription system
- 📋 **Phase 3**: Restaurant dashboard and availability management
- 🎯 **Phase 4**: Booking system and notifications
- 🚀 **Phase 5**: Full platform launch

## Contact

For questions about tastie.club, please reach out through our landing page or check our documentation in the `docs/` directory.

---

*Built with passion for exceptional dining experiences* 🥂