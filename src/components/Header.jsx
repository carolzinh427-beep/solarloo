import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Energia Solar', href: '#solutions' },
    { label: 'Como Funciona', href: '#how-it-works' },
    { label: 'Simulação', href: '#simulation' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className={`header-root ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Top Bar em Verde Claro Acima do Header */}
      <div className="top-bar-green">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-text">Atendimento Comercial • Soluções em Energia Solar</span>
          </div>
          <div className="top-bar-right">
            <a
              href="https://wa.me/5511924891417"
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-wa-link"
            >
              <Phone size={13} />
              <span>(11) 92489-1417</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="container header-container">
          
          {/* Official Logo */}
          <a href="#hero" className="logo-brand">
            <img src="/logo.svg" alt="Onda Verde Energia Solar" className="header-logo-img" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="nav-item-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button */}
          <div className="header-actions">
            <a href="#simulation" className="btn-primary btn-header">
              <span>Simular economia</span>
              <ArrowRight size={16} />
            </a>
            
            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu principal"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
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
            <li style={{ marginTop: '12px' }}>
              <a
                href="#simulation"
                className="btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Simular economia
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        .header-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: #FFFFFF;
          transition: all 0.25s ease;
        }

        .header-scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        /* Top Bar Verde Claro */
        .top-bar-green {
          background-color: var(--green-light);
          border-bottom: 1px solid var(--green-border);
          padding: 6px 0;
          font-size: 0.82rem;
          color: var(--charcoal-primary);
        }

        .top-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-bar-text {
          font-weight: 600;
          color: var(--charcoal-primary);
        }

        .top-bar-wa-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--green-hover);
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .top-bar-wa-link:hover {
          opacity: 0.85;
        }

        .main-navbar {
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-color);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .header-logo-img {
          height: 44px;
          width: auto;
          display: block;
        }

        .desktop-nav {
          display: flex;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 32px;
        }

        .nav-item-link {
          color: var(--text-body);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .nav-item-link:hover {
          color: var(--green-primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-header {
          padding: 10px 20px;
          font-size: 0.9rem;
        }

        .mobile-hamburger {
          display: none;
          background: none;
          border: none;
          color: var(--text-title);
          cursor: pointer;
          padding: 6px;
        }

        .mobile-drawer {
          display: none;
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-color);
          padding: 20px 24px 28px 24px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          color: var(--text-title);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 600;
          display: block;
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .btn-header {
            display: none;
          }
          .mobile-hamburger {
            display: block;
          }
          .mobile-drawer {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
