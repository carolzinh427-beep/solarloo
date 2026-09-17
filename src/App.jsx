import React, { useState } from 'react';
import WaveCanvas from './components/WaveCanvas';
import Header from './components/Header';
import Hero from './components/Hero';
import GreenImpactCounter from './components/GreenImpactCounter';
import SolarCalculator from './components/SolarCalculator';
import Services from './components/Services';
import FinancingSimulator from './components/FinancingSimulator';
import WhyUs from './components/WhyUs';
import ProjectsGallery from './components/ProjectsGallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProposalModal from './components/ProposalModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenProposalModal = (data = null) => {
    if (data) {
      setModalData(data);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      {/* Background Interactive Fluid Wave Animation */}
      <WaveCanvas />

      {/* Navigation Header */}
      <Header onOpenProposalModal={() => handleOpenProposalModal()} />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenProposalModal={() => handleOpenProposalModal()} />
        <GreenImpactCounter />
        <SolarCalculator onOpenProposalModal={(data) => handleOpenProposalModal(data)} />
        <Services onOpenProposalModal={() => handleOpenProposalModal()} />
        <FinancingSimulator onOpenProposalModal={() => handleOpenProposalModal()} />
        <WhyUs />
        <ProjectsGallery />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Lead Proposal Modal */}
      <ProposalModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialData={modalData}
      />
    </div>
  );
}
