# TechFest 2026 - Event Registration Website

A modern, interactive event registration website built with cutting-edge web technologies. This platform provides a seamless experience for users to register for TechFest 2026, complete with real-time countdown timers, smooth animations, and an engaging user interface.

---

## Features

Modern Interactive Design
- Responsive design that works on all devices (mobile, tablet, desktop)
- Smooth scrolling and navigation
- Interactive background with cursor-tracking text animations
- Beautiful gradient effects and color schemes

Smooth Animations
- Page transitions and element animations
- Hover effects on buttons and cards
- Animated countdown timer
- Framer Motion powered interactions

Event Registration
- Simple and intuitive registration form
- Form validation with error handling
- Success notifications
- Progress tracking for form completion

Real-time Countdown
- Live countdown timer showing days, hours, minutes, seconds
- No flickering or blinking effects
- Smooth updates every second

Enhanced UX
- Interactive background words that glow when cursor approaches
- Contact information section
- Event schedule with detailed timeline
- Social media links

---

## Tech Stack

### Frontend Framework & Language
- **React 18** - Modern UI library for building interactive components
- **TypeScript** - Adds static typing for safer, more maintainable code
- **Vite** - Lightning-fast build tool and dev server

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS processing for advanced styling features
- **Custom CSS** - Custom animations and effects in `globals.css`

### Animation & Interactivity
- **Framer Motion** - Professional animation library for React
  - Smooth transitions between states
  - Gesture-driven animations (hover, tap, scroll)
  - Layout animations for dynamic content

### UI Components & Icons
- **Lucide React** - Beautiful, consistent icon library
  - Calendar, MapPin, Users icons for event info
  - Menu, X icons for navigation
  - CheckCircle, AlertCircle for form feedback
  - Social media icons (Facebook, Twitter, Instagram, LinkedIn)

### Development Tools
- **Node.js & npm** - JavaScript runtime and package manager
- **TypeScript Compiler** - Compiles TypeScript to JavaScript
- **HTML5** - Modern markup structure

---

## Project Structure

```
Event-Registration/
├── public/                        # Static assets
│   └── fonts/
│       └── monbloc.css           # Custom font imports
│
├── src/
│   ├── components/               # React components
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Hero.tsx              # Hero section with countdown
│   │   ├── EventDetails.tsx       # Event features & schedule
│   │   ├── RegistrationForm.tsx   # Form with validation
│   │   ├── ContactInfo.tsx        # Contact & social links
│   │   ├── Footer.tsx             # Footer section
│   │   ├── CountdownTimer.tsx     # Timer component
│   │   ├── FormProgress.tsx       # Progress bar
│   │   ├── SuccessDialog.tsx      # Success modal
│   │   └── InteractiveBackground.tsx # Cursor-tracking text
│   │
│   ├── ui/                       # UI sub-components
│   │   ├── button.tsx
│   │   ├── checkbox.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── select.tsx
│   │
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   │
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point
│   ├── globals.css               # Global styles & animations
│   └── vite-env.d.ts             # Vite environment types
│
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
├── package.json                  # Project dependencies
├── index.html                    # HTML entry point
└── components.json               # Component metadata
```

---

## Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone or navigate to the project folder**
   ```bash
   cd Event-Registration
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173` (or the port Vite assigns)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build locally**
   ```bash
   npm run preview
   ```

---

## Key Components Overview

### Header Component
- Sticky navigation with smooth scroll to sections
- Mobile-responsive menu
- Logo with gradient branding
- "Register Now" CTA button

### Hero Section
- Large, eye-catching heading with gradients
- Event date, venue, and expected attendees info
- Real-time countdown timer
- Call-to-action button

### Event Details
- Feature cards showcasing event highlights
- Event schedule timeline
- Statistics display (speakers, demos, prize pool, etc.)
- Hover animations on cards

### Registration Form
- Step-by-step form with validation
- Fields: Name, Email, Phone, College, Year, Branch
- Terms & conditions checkbox
- Real-time validation feedback
- Success message on submission

### Interactive Background
- Words that illuminate when cursor approaches
- Smooth fade effects
- Non-intrusive design element

### Contact Section
- Email, phone, location information
- Social media links with hover effects
- Professional card layout

---

## Custom Features

### Cursor-Tracking Text Animation
The `InteractiveBackground` component tracks cursor movement and makes nearby words glow. Words like "Build", "Create", "Innovate", etc. become illuminated as you move your cursor near them.

### Smooth Countdown Timer
Updates every second without flickering or visual artifacts. Each time unit (days, hours, minutes, seconds) is displayed in a styled box with hover effects.

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints for responsive layouts
- Touch-friendly interactions

### Form Validation
- Required field validation
- Email format checking
- Real-time error messages
- Success confirmation

---

## Dependencies

### Main Dependencies
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "framer-motion": "^10.x",
  "lucide-react": "^0.x,
  "typescript": "^5.x"
}
```

### Dev Dependencies
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer
- TypeScript ESLint

---



## Configuration Files Explained

### `vite.config.ts`
Configures the Vite build tool with React plugin and optimization settings.

### `tailwind.config.js`
Customizes Tailwind CSS colors, spacing, and other design tokens. Includes custom color palette with dark theme.

### `tsconfig.json` & `tsconfig.app.json` & `tsconfig.node.json`
TypeScript configurations for strict type checking and modern JavaScript features.

### `package.json`
Lists all project dependencies and npm scripts for development and production.

---

## Deployment

Deployed in **Vercel**

**Webpage**: https://event-registration-portal-beige.vercel.app/

---

**Made with ❤ for Mozilla FireFox Club**
