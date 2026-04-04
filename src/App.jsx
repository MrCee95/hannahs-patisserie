import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initGA, usePageViews } from './hooks/useAnalytics';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    initGA();
  }, []);
  return (
    <BrowserRouter basename="/Hannahs-Patisserie">  
      <AnalyticsTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-heading text-4xl text-rose-dark mb-4">404</h2>
                <p className="text-gray-600 mb-6">Page not found</p>
                <a href="/" className="text-rose hover:underline">Return Home</a>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function AnalyticsTracker() {
  usePageViews();
  return null;
}

export default App;