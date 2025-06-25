# Canterbury Kiwi Agricultural Film Services

## Overview

Canterbury Kiwi is a professional agricultural filmmaking service website that showcases video production services for New Zealand's farming industry. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a modern design system and contact form functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom agricultural-themed color palette
- **UI Components**: shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints for contact form submission
- **Validation**: Zod schemas for request/response validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Email Service**: SendGrid integration for contact notifications

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL
- **Fallback**: In-memory storage implementation for development

## Key Components

### Database Schema
- **Contact Inquiries**: Stores customer contact form submissions with fields for name, email, phone, service type, and message
- **Users**: Basic user authentication schema (not actively used in current implementation)
- **Validation**: Drizzle-Zod integration for type-safe database operations

### API Endpoints
- `POST /api/contact`: Submit new contact inquiry with validation
- `GET /api/contact`: Retrieve all contact inquiries (admin functionality)

### Frontend Pages
- **Home Page**: Single-page application with multiple sections
  - Hero section with agricultural imagery
  - YouTube channel integration
  - Services showcase (Promotional Videos, Seasonal Videos, Aerial Photography)
  - Portfolio with video links and descriptions
  - About section with company statistics
  - Contact form with service selection

### UI Components
- Comprehensive shadcn/ui component library
- Custom agricultural color scheme (forest green, earth brown, harvest gold)
- Responsive design with mobile-first approach
- Toast notifications for user feedback

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form validation using React Hook Form + Zod
   - POST request to `/api/contact` endpoint
   - Server validates data and stores in PostgreSQL
   - Success/error feedback via toast notifications

2. **Content Delivery**:
   - Static assets served via Vite in development
   - Agricultural images stored in attached_assets directory
   - YouTube video integration for portfolio showcase

## External Dependencies

### Core Technologies
- **Database**: Neon Database (PostgreSQL)
- **Email Service**: SendGrid for contact notifications
- **Video Platform**: YouTube for content hosting
- **Icons**: Lucide React and React Icons

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESLint/Prettier**: Code quality and formatting
- **Drizzle Studio**: Database management interface

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with Replit modules
- **Database**: PostgreSQL 16 module
- **Hot Reload**: Vite HMR for frontend, tsx for backend
- **Port Configuration**: Backend on 5000, frontend proxy through Vite

### Production Build
- **Frontend**: Vite build output to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Deployment**: Replit autoscale deployment target
- **Environment**: Production mode with optimizations

### Configuration
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Session Storage**: PostgreSQL-backed sessions for scalability
- **Static Assets**: Served from build output directory

## Changelog

```
Changelog:
- June 25, 2025: Migrated all images to Cloudinary hosting for GitHub compatibility
- June 24, 2025: Added custom tractor icon for seasonal videos service
- June 23, 2025: Initial setup with local image assets
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```