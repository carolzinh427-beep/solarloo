import React, { useState, useEffect } from 'react';
import { Sun, Zap, Menu, X, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Header({ onOpenProposalModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Calculadora', href: '#calculator' },
    { label: 'Serviços', href: '#services' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Financiamento', href: '#financing' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className={`header-wrapper ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Top Banner Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-badge"><ShieldCheck size={14} /> Empresa Certificada ANEEL & INMETRO</span>
            <span className="top-text">Atendimento em todo o Brasil • Instalação Rápida</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:08008889000" className="top-link"><Phone size={14} /> 0800 888 9000</a>
            <a 
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20simular%20energia%20solar%20com%20a%20Onda%20Verde." 
              target="_blank" 
              rel="noopener noreferrer"
              className="top-link top-wa"
            >
              <MessageSquare size={14} /> WhatsApp Comercial
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="container nav-container">
          {/* Logo */}
          <a href="#hero" className="logo">
            <div className="logo-icon">
              <Sun className="icon-sun" size={26} />
              <Zap className="icon-zap" size={16} />
            </div>
            <div className="logo-text">
              <span className="brand-name">ONDA VERDE</span>
              <span className="brand-sub">ENERGIA SOLAR</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <ul className="desktop-menu">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Action */}
          <div className="header-actions">
            <button className="btn-primary btn-sm" onClick={onOpenProposalModal}>
              <span>Simular Economia</span>
              <ArrowRight size={16} />
            </button>
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-menu">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mobile-cta-item">
              <button 
                className="btn-primary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposalModal();
                }}
              >
                Simular Economia Agora
              </button>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        .header-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .top-bar {
          background: rgba(7, 15, 24, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.8rem;
          padding: 6px 0;
          color: var(--text-muted);
        }

        .top-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .top-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 230, 118, 0.15);
          color: var(--green-primary);
          padding: 2px 10px;
          border-radius: 20px;
          font-weight: 600;
        }

        .top-link {
          color: var(--text-muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s;
        }

        .top-link:hover {
          color: var(--green-primary);
        }

        .top-wa {
          color: #25D366;
          font-weight: 600;
        }

        .main-nav {
          background: rgba(10, 25, 47, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-glass);
          padding: 14px 0;
          transition: all 0.3s ease;
        }

        .header-scrolled .main-nav {
          background: rgba(7, 15, 24, 0.92);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          padding: 10px 0;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-icon {
          position: relative;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, rgba(0, 230, 118, 0.2), rgba(0, 180, 216, 0.2));
          border: 1px solid var(--green-primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--neon-green-shadow);
        }

        .icon-sun {
          color: #FFD600;
          animation: pulseGlow 4s infinite alternate;
        }

        .icon-zap {
          position: absolute;
          bottom: 4px;
          right: 4px;
          color: var(--green-primary);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.25rem;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, #FFFFFF 0%, #00E676 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }

        .brand-sub {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--cyan-primary);
          margin-top: 2px;
        }

        .desktop-menu {
          display: flex;
          list-style: none;
          gap: 24px;
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.25s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--green-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--green-primary);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-sm {
          padding: 10px 20px;
          font-size: 0.9rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        .mobile-drawer {
          display: none;
          background: rgba(7, 15, 24, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-glass-bright);
          padding: 20px 24px;
        }

        .mobile-menu {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          color: var(--text-main);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          display: block;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .desktop-menu {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-drawer {
            display: block;
          }
          .top-bar-left .top-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
