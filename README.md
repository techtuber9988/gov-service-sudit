# GovPortal: Accessible Public Services Portal

A professional, high-fidelity full-stack implementation of a government services portal, reverse-engineered and improved based on an accessibility audit of [india.gov.in](https://www.india.gov.in/).

This project demonstrates how to transform audit findings into real-world code, implementing a modern, accessible, and performant user experience.

## 🚀 Key Features

- **Multi-Page Experience**: Dedicated Home, Search, and About pages for better information architecture.
- **Accessibility First**: Full remediation of 5 critical accessibility findings (WCAG 2.1).
- **Modern UI/UX**:
  - Custom design system using 'Outfit' and 'Inter' typography.
  - Smooth CSS animations (text reveals, staggered slide-ups, and page transitions).
  - Professional government-themed color palette.
- **Full-Stack Architecture**: React (Vite) frontend communicating with an Express API backend.
- **Automated Testing**: Comprehensive test suite covering both API logic and Accessibility contracts.

## 📂 Project Structure

```
.
├── client/                 # React SPA (Frontend)
│   └── src/
│       ├── components/     # UI Components
│       │   ├── Home.jsx            # Landing page with info and animations
│       │   ├── About.jsx           # Mission and accessibility info
│       │   ├── Navigation.jsx      # Sticky top nav with routing
│       │   ├── SearchPage.jsx      # Wrapper for the search feature
│       │   └── ServiceSearch.jsx   # Core search logic & accessibility fixes
│       ├── App.jsx                 # Root component & page state management
│       ├── index.css               # Modern design system & animations
│       └── main.jsx                # Entry point
├── server/                 # Express API (Backend)
│   └── src/
│       ├── index.js                # Server entry point & CORS config
│       ├── routes/services.js      # API endpoints for service filtering
│       └── data/services.json      # Service dataset with accessibility metadata
├── docs/                   # Audit Documentation
│   ├── accessibility-audit-report.csv
│   └── audit-methodology.md
├── test/                   # Separate test directory
│   ├── client/                     # Accessibility contract tests (Vitest)
│   └── server/                     # API route tests (Node.js test)
└── package.json            # Root workspace configuration
```

## 🛠️ From Audit Finding to Code Fix

| Finding ID | Issue | Fix Location | Implementation Detail |
|---|---|---|---|
| **WEB-001** | Placeholder "Loading..." alt text | `ServiceSearch.jsx` / `services.json` | Replaced lazy-load placeholders with descriptive `thumbnailAlt` text for every service image. |
| **WEB-002** | Duplicated DOM for breakpoints | Architecture | Implemented a single responsive layout using CSS Grid/Flexbox instead of duplicating markup for mobile/desktop. |
| **WEB-003** | Ambiguous "View All" links | `ServiceSearch.jsx` | Each result link uses an `aria-label` that explicitly states its destination (e.g., "View details for [Service Name]"). |
| **WEB-004** | Inconsistent heading levels | `ServiceSearch.jsx` | Standardized heading hierarchy: Section uses `<h2>`, individual results use `<h3>`. |
| **WEB-005** | Virtual-keyboard focus trap | `ServiceSearch.jsx` | Replaced custom virtual keyboard with a native `<input>`, ensuring 100% keyboard operability and no traps. |

## 🏁 Local Setup

Requires Node.js 18+.

```bash
# 1. Install all dependencies for client and server
npm install

# 2. Start the Backend Server (Terminal 1)
npm run dev:server   # Runs on http://localhost:4000

# 3. Start the Frontend Client (Terminal 2)
npm run dev:client   # Runs on http://localhost:5173
```

## 🧪 Testing

Run the complete test suite to verify both the API and the Accessibility Contract:

```bash
npm test
```

- **Server Tests**: Verifies that `GET /api/services` correctly filters and returns data.
- **Client Tests**: Uses Vitest to programmatically ensure that `aria-labels`, `alt` text, and heading levels remain compliant with the audit fixes.

## 🏛️ Project Vision

This project serves as a "proof of concept" for how government portals can transition from legacy, inaccessible designs to modern, inclusive digital experiences without sacrificing functionality or official authority.
