import { Link } from 'react-router-dom';
import { trackOutboundLink } from '../../hooks/useAnalytics';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="opacity-75 text-sm text-center md:text-left">
          &copy; <time dateTime={currentYear.toString()}>{currentYear}</time> Hannah's Patisserie. All Rights Reserved.
        </p>

        <p className="text-sm text-center">
          <i className="fas fa-phone text-rose mr-2" aria-hidden="true"></i>
          <a href="tel:+233547572955" className="hover:text-rose transition focus:outline-none focus:ring-2 focus:ring-rose rounded" onClick={(e) => trackOutboundLink('tel:+233547572955', 'Phone 1')}>
            +233 54 757 2955
          </a>{' '}
          /{' '}
          <a href="tel:+233201959415" className="hover:text-rose transition focus:outline-none focus:ring-2 focus:ring-rose rounded" onClick={(e) => trackOutboundLink('tel:+233201959415', 'Phone 2')}>
            +233 20 195 9415
          </a>
        </p>

        <div className="flex space-x-6 text-2xl" role="navigation" aria-label="Social media">
          <a href="https://instagram.com/hannahs_patisserie_gh" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition focus:outline-none focus:ring-2 focus:ring-rose rounded" aria-label="Follow us on Instagram" onClick={(e) => trackOutboundLink('https://instagram.com/hannahs_patisserie_gh', 'Instagram')}>
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://facebook.com/hannahspatisseriegh" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition focus:outline-none focus:ring-2 focus:ring-rose rounded" aria-label="Like us on Facebook" onClick={(e) => trackOutboundLink('https://facebook.com/hannahspatisseriegh', 'Facebook')}>
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="mailto:hello@hannahspatisserie.com" className="hover:text-rose transition focus:outline-none focus:ring-2 focus:ring-rose rounded" aria-label="Email us" onClick={(e) => trackOutboundLink('mailto:hello@hannahspatisserie.com', 'Email')}>
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs opacity-60">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center sm:justify-start gap-4">
            <li><Link to="/privacy" className="hover:text-rose transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-rose transition">Terms of Service</Link></li>
            <li><Link to="/accessibility" className="hover:text-rose transition">Accessibility</Link></li>
          </ul>
        </nav>
        <p className="mt-4 sm:mt-0">Made with ❤️ in Kasoa, Ghana</p>
      </div>
    </footer>
  );
};

export default Footer;