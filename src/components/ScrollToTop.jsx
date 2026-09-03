import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Force immediate scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Refresh AOS immediately after scroll reset
    if (typeof AOS !== 'undefined') {
      setTimeout(() => {
        AOS.refreshHard();
      }, 50);
    }
  }, [pathname]);

  return null;
}
