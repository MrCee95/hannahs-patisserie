import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// 🔑 Replace with your GA4 Measurement ID
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // e.g., G-ABC123XYZ

// Initialize GA4
export const initGA = () => {
  if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(GA_TRACKING_ID, {
      gaOptions: { 
        anonymizeIp: true, // Privacy: anonymize IP addresses
        cookieDomain: 'auto',
        cookieFlags: 'SameSite=None; Secure' // Required for HTTPS
      }
    });
    console.log('✅ Google Analytics initialized');
  }
};

// Track page views
export const usePageViews = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track if GA is initialized
    if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
      ReactGA.send({ 
        hitType: 'pageview', 
        page: location.pathname + location.search 
      });
      console.log('📊 Page view tracked:', location.pathname);
    }
  }, [location]);
};

// Custom event tracking
export const trackEvent = (category, action, label, value) => {
  if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event({
      category,
      action,
      label,
      value,
      nonInteraction: false,
    });
    console.log('🎯 Event tracked:', { category, action, label, value });
  }
};

// Track outbound links
export const trackOutboundLink = (url, label) => {
  trackEvent('Outbound Link', 'Click', label || url, 1);
};

// Track form submissions
export const trackFormSubmit = (formName) => {
  trackEvent('Form', 'Submit', formName, 1);
};

export default { initGA, usePageViews, trackEvent, trackOutboundLink, trackFormSubmit };