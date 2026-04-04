import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll position for navbar effects + back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowBackToTop(currentScrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change (improves UX)
  useEffect(() => {
    // Skip scroll for anchor links within same page
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  // Back to top handler
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream font-body text-charcoal">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                   bg-rose-dark text-white px-4 py-2 rounded-lg z-50 
                   focus:outline-none focus:ring-2 focus:ring-rose"
      >
        Skip to main content
      </a>

      {/* Navbar with scroll-aware styling */}
      <Navbar scrolled={scrollY > 50} />

      {/* Main content area */}
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow pt-16" // pt-16 accounts for fixed navbar height
          role="main"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button (appears after scrolling) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-rose-dark text-white p-3 
                       rounded-full shadow-lg hover:bg-rose transition 
                       focus:outline-none focus:ring-2 focus:ring-rose-dark z-40"
            aria-label="Back to top"
            title="Back to top"
          >
            <i className="fas fa-arrow-up" aria-hidden="true"></i>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Consent Banner (optional, can be extracted to separate component) */}
      <CookieBanner />
    </div>
  );
};

// ===== Cookie Banner Sub-Component =====
const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    console.log('✅ Cookies accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    console.log('❌ Cookies declined');
  };

  if (!showBanner) return null;

  return (
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
          <a href="/privacy" className="underline hover:text-rose transition">
            Cookie Policy
          </a>
          .
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="bg-rose text-white px-4 py-2 rounded font-semibold 
                       hover:bg-rose-dark transition text-sm
                       focus:outline-none focus:ring-2 focus:ring-rose"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-white/10 text-white px-4 py-2 rounded font-semibold 
                       hover:bg-white/20 transition text-sm
                       focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Decline
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Layout;
