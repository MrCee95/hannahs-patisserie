import { trackOutboundLink } from '../../hooks/useAnalytics';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row 
                      justify-between items-center gap-4">
        
        {/* Copyright */}
        <p className="opacity-75">
          &copy; <time dateTime="2024">2024</time> Hannah's Patisserie. 
          All Rights Reserved.
        </p>

        {/* Contact */}
        <p>
          <i className="fas fa-phone text-rose mr-3" aria-hidden="true"></i>
          <a 
            href="tel:+233547572955" 
            className="hover:text-rose transition focus:outline-none 
                       focus:ring-2 focus:ring-rose rounded"
          >
            +233 54 757 2955
          </a>{' '}
          /{' '}
          <a 
            href="tel:+233201959415" 
            className="hover:text-rose transition focus:outline-none 
                       focus:ring-2 focus:ring-rose rounded"
          >
            +233 20 195 9415
          </a>
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl" role="navigation" aria-label="Social media">
          <a
  href="https://instagram.com/hannahs_patisserie_gh"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackOutboundLink('https://instagram.com/hannahs_patisserie_gh', 'Instagram')}
>
  <i className="fab fa-instagram"></i>
</a>

<a
  href="https://facebook.com/hannahs_patisserie_gh"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackOutboundLink('https://facebook.com/hannahs_patisserie_gh', 'Facebook')}
>
  <i className="fab fa-facebook"></i>
</a>

<a
  href="https://tiktok.com/@hannahs_patisserie_gh"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackOutboundLink('https://tiktok.com/@hannahs_patisserie_gh', 'TikTok')}
>
  <i className="fab fa-tiktok"></i>
</a>

<a
  href="https://snapchat.com/hannahs_patisserie_gh"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackOutboundLink('https://snapchat.com/hannahs_patisserie_gh', 'Snapchat')}
>
  <i className="fab fa-snapchat"></i>
</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;