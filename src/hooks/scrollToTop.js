import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();  // Track current route

  useEffect(() => {
    // Scroll to top when the component is mounted and pathname changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Makes scrolling smooth
    });
  }, [pathname]);  // Trigger when the pathname (route) changes

  return null;  // This component doesn't render any UI
};
