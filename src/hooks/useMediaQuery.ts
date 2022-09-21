import { useEffect, useState } from 'react';
export const BREAKPOINTS = {
  // Small devices (landscape phones, 576px and up)
  MOBILE: '(min-width: 576px)',
  // Medium devices (tablets, 768px and up)
  TABLET: '(min-width: 768px)',
  // Large devices (desktops, 992px and up)
  DESKTOP: '(min-width: 992px)',
  // X-Large devices (large desktops, 1200px and up)
  LARGE_DESKTOP: '(min-width: 1200px)',
  // XX-Large devices (larger desktops, 1400px and up)
  X_LARGE_DESKTOP: '(min-width: 1400px)'
};
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>();
  const media = window.matchMedia(query);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    // Removing listener
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches || media.matches;
};

export default useMediaQuery;
