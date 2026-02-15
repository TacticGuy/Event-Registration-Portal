# TechFest 2026 - Event Registration

A registration site for TechFest 2026. Built with React and TypeScript.

## What's included

- Registration form with validation
- Countdown timer to event start
- Animated background with interactive text
- Event details and contact info
- Responsive design for mobile and desktop

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run dev server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Tech Stack

- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- Lucide icons

## Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Navigation
│   ├── Hero.tsx                # Main section + countdown
│   ├── EventDetails.tsx         # Event info
│   ├── RegistrationForm.tsx     # Registration form
│   ├── ContactInfo.tsx          # Contact section
│   ├── Footer.tsx
│   ├── CountdownTimer.tsx
│   ├── FormProgress.tsx
│   ├── SuccessDialog.tsx
│   ├── InteractiveBackground.tsx
│   └── ui/                      # UI components
├── lib/
│   └── utils.ts
├── App.tsx
└── globals.css
```
