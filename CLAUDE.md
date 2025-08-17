# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint with TypeScript support
- `npm run preview` - Preview production build locally

## Testing & Quality Assurance

- Always run `npm run lint` before committing changes
- No testing framework is currently configured - manual testing required
- Build validation: Run `npm run build` to ensure production compatibility

## Architecture Overview

### Tech Stack
- **Framework**: React 18 with TypeScript and Vite
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Internationalization**: react-i18next (Portuguese/English)
- **Analytics**: Custom GTM (Google Tag Manager) integration
- **Email API**: Resend API via Vercel functions
- **Deployment**: Vercel with serverless functions

### Project Structure

- `src/pages/` - Page components (currently only `home.tsx`)
- `src/components/` - Reusable React components
  - `ui/` - Base UI components using Radix UI
  - Landing page sections (Hero, Testimonials, HowItWorks, etc.)
- `src/hooks/` - Custom React hooks
  - `useGTM.ts` - Comprehensive analytics tracking
  - `usePageTracking.ts` - Page view tracking
- `src/constants/` - Application constants (URLs, etc.)
- `src/locales/` - i18n translation files (pt/en)
- `api/` - Vercel serverless functions for backend logic

### Key Features

#### Analytics & Tracking
The app has comprehensive GTM integration via `useGTM` hook with tracking for:
- Form submissions with conversion values
- Button clicks and WhatsApp interactions
- Video interactions and testimonial views
- Scroll depth and time on page
- Language changes and section views

#### Internationalization
- Default language: Portuguese (`pt`)
- Fallback language: Portuguese
- Content stored in JSON files under `src/locales/`
- Uses react-i18next with namespace approach

#### Contact System
- Contact form with name, phone, city, and optional bill value
- Serverless API endpoint `/api/send-email.js` using Resend
- Emails sent to `diogonascii@gmail.com` and `sejaradial@gmail.com`
- WhatsApp integration with floating button and tracking

### Configuration Files

- `vite.config.ts` - Vite configuration with proxy setup for `/api` routes
- `vercel.json` - Vercel deployment configuration with API rewrites and CORS headers
- `tailwind.config.ts` - Tailwind CSS configuration
- Path aliases configured: `@` maps to `./src`

### Environment Variables

Required for production:
- `RESEND_API_KEY` - For email functionality via Resend API

### Development Notes

- Server runs on port 3000 with HMR enabled
- API proxy configured to handle `/api/*` routes during development
- Source maps enabled for both CSS and JS in development
- Manual chunk splitting configured for vendor libraries (React/React-DOM)