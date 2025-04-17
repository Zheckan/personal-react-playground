import { useState, useEffect } from 'react';

/**
 * Hook for detecting if a media query matches
 * 
 * @param query - Media query string (e.g. '(min-width: 768px)')
 * @returns boolean - Whether the media query matches
 * 
 * @example
 * ```tsx
 * import { useMediaQuery } from '../hooks/useMediaQuery';
 * import { device } from '../styles/breakpoints';
 * 
 * const Component = () => {
 *   const isTablet = useMediaQuery(device.tablet);
 *   
 *   return (
 *     <div>
 *       {isTablet ? 'Tablet or larger' : 'Mobile'}
 *     </div>
 *   );
 * };
 * ```
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create media query list
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);

    // Define event handler
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add event listener
    mediaQuery.addEventListener('change', handler);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}; 