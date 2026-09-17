import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import Technology from './components/Technology';
import SolarSimulator from './components/SolarSimulator';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-main">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Solutions />
        <Technology />
        <SolarSimulator />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
