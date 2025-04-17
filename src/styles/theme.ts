/**
 * Design System Theme
 * 
 * This theme object works alongside global.css CSS variables.
 * - Colors, typography, and spacing reference CSS variables
 * - Additional tokens and complex objects are defined here
 * 
 * USAGE GUIDE:
 * - For simple CSS: Use CSS variables directly
 * - For styled-components or JS logic: Use this theme object
 */

export interface Theme {
  colors: {
    primary: {
      p200: string;
      p500: string;
      p600: string;
      p700: string;
      p800: string;
      p900: string;
    };
    neutral: {
      n200: string;
      n300: string;
      n400: string;
      n500: string;
      n600: string;
      n700: string;
      n800: string;
      n900: string;
    };
    system: {
      error: string;
    };
    // Additional colors not in CSS variables
    accent: string;
    mainDarkColor: string;
    inputBackground: string;
    lighGray: string;
    darkGray: string;
    black: string;
    white: string;
  };
  fonts: {
    heading: string;
    body: string;
    // Additional font definitions
    main: string;
    secondary: string;
  };
  fontSizes: {
    // Title sizes
    titleH1: string;
    titleH2: string;
    titleH3: string;
    // Paragraph sizes
    p16: string;
    p14: string;
    p12: string;
    // Input and button sizes
    input: string;
    button16: string;
    button14: string;
    button12: string;
    // Label sizes
    label16: string;
    label12: string;
    label10: string;
    label8: string;
    // Additional sizes
    fs12: string;
    fs14: string;
    fs16: string;
    fs18: string;
    fs20: string;
    fs24: string;
    fs28: string;
    fs32: string;
    fs48: string;
    fs68: string;
  };
  fontWeights: {
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  lineHeights: {
    lh32: string;
    lh24: string;
    lh20: string;
    lh16: string;
    lh12: string;
  };
  spacing: {
    paragraphSpacing8: string;
    paragraphSpacing0: string;
  };
  borders: {
    main: string;
    hover: string;
    auth: string;
  };
  radius: {
    br10: string;
    br30: string;
    round: string;
  };
}

export const theme: Theme = {
  colors: {
    // Reference CSS variables for colors
    primary: {
      p200: 'var(--p200)',
      p500: 'var(--p500)',
      p600: 'var(--p600)',
      p700: 'var(--p700)',
      p800: 'var(--p800)',
      p900: 'var(--p900)',
    },
    neutral: {
      n200: 'var(--n200)',
      n300: 'var(--n300)',
      n400: 'var(--n400)',
      n500: 'var(--n500)',
      n600: 'var(--n600)',
      n700: 'var(--n700)',
      n800: 'var(--n800)',
      n900: 'var(--n900)',
    },
    system: {
      error: 'var(--e500)',
    },
    // Additional colors not in CSS variables
    accent: '#EC5615',
    mainDarkColor: '#252525',
    inputBackground: 'rgba(216, 216, 216, 0.5)',
    lighGray: '#D8D8D8',
    darkGray: '#808080',
    black: '#000000',
    white: '#FFFFFF',
  },
  fonts: {
    // Reference CSS variables
    heading: 'var(--font-family-heading)',
    body: 'var(--font-family-body)',
    // Additional font definitions
    main: 'Fira Sans, sans-serif',
    secondary: 'Fira Sans Condensed, sans-serif',
  },
  fontSizes: {
    // Reference CSS variables
    titleH1: 'var(--font-size-title-h1)',
    titleH2: 'var(--font-size-title-h2)',
    titleH3: 'var(--font-size-title-h3)',
    p16: 'var(--font-size-paragraph-16)',
    p14: 'var(--font-size-paragraph-14)',
    p12: 'var(--font-size-paragraph-12)',
    input: 'var(--font-size-input)',
    button16: 'var(--font-size-button-16)',
    button14: 'var(--font-size-button-14)',
    button12: 'var(--font-size-button-12)',
    label16: 'var(--font-size-label-16)',
    label12: 'var(--font-size-label-12)',
    label10: 'var(--font-size-label-10)',
    label8: 'var(--font-size-label-8)',
    // Additional sizes
    fs12: '12px',
    fs14: '14px',
    fs16: '16px',
    fs18: '18px',
    fs20: '20px',
    fs24: '24px',
    fs28: '28px',
    fs32: '32px',
    fs48: '48px',
    fs68: '68px',
  },
  fontWeights: {
    regular: 'var(--font-weight-regular)',
    medium: '500',
    semibold: '600',
    bold: 'var(--font-weight-bold)',
  },
  lineHeights: {
    lh32: 'var(--line-height-32)',
    lh24: 'var(--line-height-24)',
    lh20: 'var(--line-height-20)',
    lh16: 'var(--line-height-16)',
    lh12: 'var(--line-height-12)',
  },
  spacing: {
    paragraphSpacing8: 'var(--paragraph-spacing-8)',
    paragraphSpacing0: 'var(--paragraph-spacing-0)',
  },
  borders: {
    main: '1px solid var(--n400)',
    hover: '1px solid var(--p500)',
    auth: '1px solid var(--n300)',
  },
  radius: {
    br10: '10px',
    br30: '30px',
    round: '50%',
  },
}; 