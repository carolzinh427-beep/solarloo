import React, { useState, useEffect } from 'react';
import { Sun, Menu, X, ArrowRight } from 'lucide-react';

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
      <div className="container header-container">
        
        {/* Logo */}
        <a href="#hero" className="logo-brand">
          <div className="logo-icon-box">
            <Sun size={24} className="logo-sun-icon" />
          </div>
          <div className="logo-text-box">
            <span className="logo-title">ONDA VERDE</span>
            <span className="logo-sub">ENERGIA SOLAR</span>
          </div>
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
          border-bottom: 1px solid var(--border-color);
          transition: all 0.25s ease;
        }

        .header-scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border-bottom-color: transparent;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo-icon-box {
          width: 40px;
          height: 40px;
          background-color: var(--green-light);
          border: 1px solid var(--green-border);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-sun-icon {
          color: var(--green-primary);
        }

        .logo-text-box {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-title);
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .logo-sub {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--green-primary);
          letter-spacing: 0.15em;
          margin-top: 3px;
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
