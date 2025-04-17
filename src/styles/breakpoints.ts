/**
 * Breakpoints for responsive design
 * 
 * This file defines the breakpoints used throughout the application.
 * Use these in styled-components or other CSS-in-JS solutions.
 */

type SizeKey = 'mobile' | 'mobileOnly' | 'tablet' | 'tabletOnly' | 'beforeDesktop' | 'desktop';
type Size = Record<SizeKey, string>;
type Device = Record<SizeKey, string>;

const size: Size = {
  mobile: '480px',
  mobileOnly: '479px',
  tablet: '768px',
  tabletOnly: '767px',
  beforeDesktop: '1439px',
  desktop: '1440px',
};

export const device: Device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletOnly: `(max-width: ${size.tabletOnly})`,
  beforeDesktop: `(max-width: ${size.beforeDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
};

/**
 * Breakpoint values in pixels (without units)
 * Useful for JavaScript calculations
 */
export const breakpointValues = {
  mobile: 480,
  tablet: 768,
  desktop: 1440,
}; 