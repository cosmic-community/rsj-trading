# RSJ Trading

![App Preview](https://imgix.cosmicjs.com/11173060-72dc-11f1-a87f-d72293b1048a-autopilot-photo-1519085360753-af0119f7cbe7-1782642493022.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive company website for **RSJ Trading**, built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). The site showcases professional services, an expert team, real-world case studies, and glowing client testimonials — all managed dynamically through your Cosmic bucket.

## Features

- 🏠 **Stunning Homepage** with hero, featured services, case studies, testimonials, and a call-to-action
- 🛠️ **Services Catalog** with detail pages including pricing, descriptions, and imagery
- 👥 **Team Members** directory with photos, roles, and bios
- 📊 **Case Studies** showcasing client results and outcomes
- 💬 **Testimonials** with star ratings and client details
- 📨 **Contact Form** with server-side handling and email notifications
- 📱 Fully responsive, mobile-first design with smooth animations
- ⚡ Server-rendered for speed and SEO
- 🎨 Modern UI built with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a40f6e22480bda4445b7e75&clone_repository=6a40f7ff2480bda4445b7eac)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: A company website with product catalog, contact form, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "RSJ Trading". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type. A company website with product catalog, contact form, and testimonials.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)
- [Resend](https://resend.com) for contact form emails

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account and bucket with the required object types

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables (see below)
4. Run the development server:
   ```bash
   bun run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single case study with related services
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with four Cosmic object types:

- **services** — name, short/full descriptions, icon, featured image, starting price
- **team-members** — name, role, photo, bio, email
- **case-studies** — title, client name, summary, content, results, featured image, related services
- **testimonials** — quote, client name, company, role, photo, rating

Read more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Import the repo in Vercel
3. Add environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`, `RESEND_API_KEY`)
4. Deploy

### Netlify
1. Connect your repo
2. Set build command to `bun run build`
3. Add environment variables
4. Deploy

<!-- README_END -->