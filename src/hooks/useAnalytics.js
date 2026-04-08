import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = 'G-XXXXXXXXXX'; 

export const initGA = () => {
  if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(GA_TRACKING_ID, {
      gaOptions: { anonymizeIp: true, cookieDomain: 'auto', cookieFlags: 'SameSite=None; Secure' }
    });
    console.log('✅ Google Analytics initialized');
  }
};

export const usePageViews = () => {
  const location = useLocation();
  useEffect(() => {
    if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
      console.log('📊 Page view tracked:', location.pathname);
    }
  }, [location]);
};

export const trackEvent = (category, action, label, value) => {
  if (GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event({ category, action, label, value, nonInteraction: false });
    console.log('🎯 Event tracked:', { category, action, label, value });
  }
};

export const trackOutboundLink = (url, label) => {
  trackEvent('Outbound Link', 'Click', label || url, 1);
};

export const trackFormSubmit = (formName) => {
  trackEvent('Form', 'Submit', formName, 1);
};

export default { initGA, usePageViews, trackEvent, trackOutboundLink, trackFormSubmit };