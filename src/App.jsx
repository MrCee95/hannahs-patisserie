import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initGA, usePageViews } from './hooks/useAnalytics';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

function App() {
  // Initialize GA on app mount
  useEffect(() => {
    initGA();
  }, []);

  return (
    <BrowserRouter basename="/hannahs-patisserie">
      <AnalyticsTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

// Separate component to use hooks
function AnalyticsTracker() {
  usePageViews(); // Track page views on route change
  return null;
}

export default App;