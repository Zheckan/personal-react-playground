# Project Structure and Design System

This document outlines the structure of our React application and explains how to use the design system.

## Project running
DO NOT FORGET TO RUN after cloning the repo: `npm install` for your own sanity.

To run the project, use:
```bash
npm run dev
```

## Directory Structure

```
src/
├── assets/              # Static assets
│   └── global.css       # Global CSS variables
├── components/          # Reusable UI components
│   ├── Button/          # Button component
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── index.ts     # Export file
│   └── index.ts         # Components barrel file
├── hooks/               # Custom React hooks
│   ├── useMediaQuery.ts # Media query hook
│   └── index.ts         # Hooks barrel file
├── pages/               # Page components
│   ├── Home/            # Home page
│   │   ├── Home.tsx
│   │   ├── Home.module.css
│   │   └── index.ts     # Export file
│   └── index.ts         # Pages barrel file
├── styles/              # Design system
│   ├── breakpoints.ts   # Responsive breakpoints
│   ├── theme.ts         # Design tokens
│   ├── index.ts         # Styles barrel file
│   └── README.md        # Design system documentation
└── App.tsx              # Main app component
```

## Design System

Our design system uses a hybrid approach:

1. **CSS Variables** in `assets/global.css` define the base design variables
2. **TypeScript objects** in the `styles/` directory reference those CSS variables and add additional variables for TS styling staff
3. **CSS Modules** for component-specific styling

### Key Files

- `assets/global.css` - CSS variables for colors, typography, spacing
- `styles/breakpoints.ts` - Responsive breakpoints and media queries
- `styles/theme.ts` - TypeScript theme object referencing CSS variables

## Import Guidelines

Use barrel files (index.ts) for cleaner imports:

```tsx
// Good
import { Button } from '../components';
import { useMediaQuery } from '../hooks';
import { theme, device } from '../styles';

// Avoid
import Button from '../components/Button/Button';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { theme } from '../styles/theme';
import { device } from '../styles/breakpoints';
```

It won't be a mistake to use the standard imports, but if you use a cooler imports, one Zhenya will be happy (:

## Styling Approach

We use CSS Modules for component styling:

1. Create a `.module.css` file next to your component
2. Import and use the styles in your component

```tsx
// Button.tsx
import styles from './Button.module.css';

const Button = ({ variant = 'primary' }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      Click me
    </button>
  );
};
```

Why we need that `.module.css` instead of normal CSS file? Because if will provide local scope for our styles, so we won't have conflicts with other styles in the project.

## Responsive Design

Use our breakpoints for consistent responsive behavior:

```tsx
// In CSS Modules
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

// In React components
import { useMediaQuery } from '../hooks';
import { device } from '../styles';

const Component = () => {
  const isTablet = useMediaQuery(device.tablet);
  
  return (
    <div>
      {isTablet ? <TabletView /> : <MobileView />}
    </div>
  );
};
```

## Adding New Components

1. Create a new directory in `components/`
2. Add component file, CSS module, and index.ts
3. Dont forget to export from `components/index.ts`

## Further Reading

See `styles/README.md` for more detailed information about the design token system. 