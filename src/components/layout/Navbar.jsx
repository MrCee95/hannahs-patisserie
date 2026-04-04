import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackEvent } from '../../hooks/useAnalytics';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Our Mission', path: '/about', hash: '#mission' },
  { name: 'Training', path: '/about', hash: '#training' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = ({ scrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (name, path) => {
    trackEvent('Navigation', 'Click', name, 1);
    setMobileOpen(false);
  };

  const isActive = (link) => {
    if (link.hash) {
      return location.pathname === link.path && location.hash === link.hash;
    }
    return location.pathname === link.path;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur-md shadow-md' : 'bg-cream/90'}`} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-heading text-2xl text-rose-dark font-bold hover:text-rose transition focus:outline-none focus:ring-2 focus:ring-rose rounded" onClick={() => handleNavClick('Logo', '/')}>
            Hannah's Patisserie
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path + link.hash}
                to={link.hash ? `${link.path}${link.hash}` : link.path}
                className={`font-semibold text-sm uppercase tracking-wide transition focus:outline-none focus:ring-2 focus:ring-rose rounded ${isActive(link) ? 'text-rose' : 'text-charcoal hover:text-rose'}`}
                onClick={() => handleNavClick(link.name, link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-rose-dark p-2 focus:outline-none focus:ring-2 focus:ring-rose rounded" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="mobile-menu">
            {mobileOpen ? <i className="fas fa-times" aria-hidden="true"></i> : <i className="fas fa-bars" aria-hidden="true"></i>}
          </button>
        </div>

        {mobileOpen && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden mt-4 pb-4 border-t border-rose/20" role="menu">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <Link key={link.path + link.hash} to={link.hash ? `${link.path}${link.hash}` : link.path} className={`block py-2 font-semibold transition ${isActive(link) ? 'text-rose' : 'hover:text-rose'}`} onClick={() => handleNavClick(link.name, link.path)} role="menuitem">
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;