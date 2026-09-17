import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import StaggeredMenu from './StaggeredMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', link: '#hero', ariaLabel: 'Ir para o início' },
    { label: 'Energia Solar', link: '#solutions', ariaLabel: 'Conhecer soluções' },
    { label: 'Como Funciona', link: '#how-it-works', ariaLabel: 'Entender como funciona' },
    { label: 'Simulação', link: '#simulation', ariaLabel: 'Simular economia' },
    { label: 'FAQ', link: '#faq', ariaLabel: 'Ver perguntas frequentes' },
    { label: 'Contato', link: '#contact', ariaLabel: 'Entrar em contato' },
  ];

  const socialItems = [
    { label: 'WhatsApp: (11) 92489-1417', link: 'https://wa.me/5511924891417' },
    { label: 'Instagram: @ondaverdeenergia', link: 'https://www.instagram.com/ondaverdeenergia/' },
  ];

  return (
    <header className={`header-root ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Top Bar Verde Claro */}
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
                  <a href={item.link} className="nav-item-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button & Mobile Staggered Menu Trigger */}
          <div className="header-actions">
            <a href="#simulation" className="btn-primary btn-header">
              <span>Simular economia</span>
              <ArrowRight size={16} />
            </a>

            {/* React Bits Staggered Menu para Dispositivos Móveis e Navegação Fluida */}
            <div className="staggered-menu-mobile-container">
              <StaggeredMenu
                position="right"
                items={navItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#454545"
                openMenuButtonColor="#7CB342"
                changeMenuColorOnOpen={true}
                colors={['#F4F9EC', '#DCEDC8', '#FFFFFF']}
                logoUrl="/logo.svg"
                accentColor="#7CB342"
                isFixed={false}
              />
            </div>
          </div>

        </div>
      </div>

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

        .staggered-menu-mobile-container {
          display: none;
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .btn-header {
            display: none;
          }
          .staggered-menu-mobile-container {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
