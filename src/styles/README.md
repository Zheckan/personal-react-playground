# Design Token System

This directory contains the design token system for our application. It provides a consistent way to use colors, typography, spacing, and other design elements throughout the application.

## Files

- `breakpoints.ts` - Responsive breakpoints and media queries
- `theme.ts` - Design tokens for colors, typography, spacing, etc.

## Relationship with global.css

Our design system uses a hybrid approach:

1. **CSS Variables** in `src/assets/global.css` define the base design tokens
2. **TypeScript objects** in this directory reference those CSS variables and add additional tokens

This approach gives us the best of both worlds:

- CSS variables for global consistency and theming
- TypeScript objects for type safety and programmatic usage

## Usage Guidelines

### When to use CSS Variables (from global.css)

- In regular CSS files
- For simple styling needs
- When you need to support CSS cascade and inheritance

```css
.my-element {
  color: var(--p500);
  font-family: var(--font-family-body);
}
```

### When to use Theme Object (from theme.ts)

- In styled-components or other CSS-in-JS solutions
- When you need TypeScript type checking
- For programmatic usage in components

```tsx
import styled from "styled-components";
import { theme } from "../styles/theme";

const StyledButton = styled.button`
  background-color: ${theme.colors.primary.p500};
  color: ${theme.colors.neutral.n200};
  font-family: ${theme.fonts.body};
`;
```

### When to use Breakpoints (from breakpoints.ts)

- For responsive styling in styled-components
- For conditional rendering based on screen size

```tsx
import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { useMediaQuery } from "../hooks/useMediaQuery";

const ResponsiveContainer = styled.div`
  padding: 1rem;

  @media ${device.tablet} {
    padding: 2rem;
  }
`;

// In a component
const MyComponent = () => {
  const isDesktop = useMediaQuery(device.desktop);

  return <div>{isDesktop ? <DesktopView /> : <MobileView />}</div>;
};
```
