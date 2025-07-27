import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import CostCalculator from './components/CostCalculator';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Process />
              <WhyChooseUs />
              <Pricing />
              <div className="py-24 bg-slate-800">
                <div className="max-w-4xl mx-auto px-6">
                  <CostCalculator />
                </div>
              </div>
              <Contact />
              <FAQ />
              <Testimonials />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;