import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(() => {
    return localStorage.getItem('cookieConsent');
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('analyticsConsent', 'true');
    setCookieConsent('accepted');
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('analyticsConsent', 'false');
    setCookieConsent('declined');
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream font-body text-charcoal">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-rose-dark text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-rose">
        Skip to main content
      </a>

      <Navbar scrolled={scrollY > 50} />

      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname + location.hash}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex-grow pt-16"
          role="main"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-rose-dark text-white p-3 rounded-full shadow-lg hover:bg-rose transition focus:outline-none focus:ring-2 focus:ring-rose-dark z-40"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up" aria-hidden="true"></i>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!cookieConsent && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-charcoal text-white p-4 md:p-6 z-50"
            role="region"
            aria-label="Cookie consent"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm opacity-90">
                🍪 We use cookies to enhance your experience. By continuing, you agree to our{' '}
                <a href="/privacy" className="underline hover:text-rose transition">Cookie Policy</a>.
              </p>
              <div className="flex gap-3">
                <button onClick={handleAcceptCookies} className="bg-rose text-white px-4 py-2 rounded font-semibold hover:bg-rose-dark transition text-sm focus:outline-none focus:ring-2 focus:ring-rose">
                  Accept
                </button>
                <button onClick={handleDeclineCookies} className="bg-white/10 text-white px-4 py-2 rounded font-semibold hover:bg-white/20 transition text-sm focus:outline-none focus:ring-2 focus:ring-white/50">
                  Decline
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;