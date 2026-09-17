import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `Olá! Meu nome é *${formData.name}* (${formData.city}).\n\nMensagem: ${formData.message || 'Gostaria de agendar uma visita técnica ou simulação de energia solar.'}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5511999999999?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-eco">
            <MessageSquare size={16} />
            <span>FALE COM NOSSOS ENGENHEIROS</span>
          </div>
          <h2>Estamos Prontos para Atender <span className="text-gradient-green">Você</span></h2>
          <p>Tire suas dúvidas, agende uma visita técnica sem custo ou receba seu estudo de viabilidade solar.</p>
        </div>

        <div className="contact-grid">
          
          {/* Left Contact Info Cards */}
          <div className="contact-info-col">
            <h3 className="c-title">Canais de Atendimento Direto</h3>

            <div className="c-info-cards-list">
              
              <div className="glass-card c-info-card">
                <div className="c-icon green"><Phone size={22} /></div>
                <div>
                  <h4>Central de Atendimento 24h</h4>
                  <p>0800 888 9000 (Ligação Gratuita)</p>
                  <p>(11) 99999-9999 (WhatsApp Comercial)</p>
                </div>
              </div>

              <div className="glass-card c-info-card">
                <div className="c-icon cyan"><Mail size={22} /></div>
                <div>
                  <h4>E-mail Comercial & Projetos</h4>
                  <p>contato@ondaverdeenergia.com.br</p>
                  <p>projetos@ondaverdeenergia.com.br</p>
                </div>
              </div>

              <div className="glass-card c-info-card">
                <div className="c-icon gold"><MapPin size={22} /></div>
                <div>
                  <h4>Matriz & Centro de Engenharia</h4>
                  <p>Av. Das Nações Unidas, 12901 - 18º Andar</p>
                  <p>Brooklin, São Paulo - SP, 04578-910</p>
                </div>
              </div>

              <div className="glass-card c-info-card">
                <div className="c-icon green"><Clock size={22} /></div>
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 08:00 às 19:00</p>
                  <p>Sábados: 08:00 às 13:00</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Direct Message Form */}
          <div className="glass-card contact-form-card">
            <h3 className="c-title">Envie uma Mensagem Rápida</h3>
            <p className="c-subtitle">Nossos especialistas retornarão em menos de 15 minutos.</p>

            <form onSubmit={handleSubmit} className="c-form">
              <div className="c-field">
                <label>Nome Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="c-field">
                  <label>WhatsApp / Celular *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="c-field">
                  <label>Sua Cidade / Estado *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: São Paulo / SP"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="c-field">
                <label>Como Podemos Te Ajudar?</label>
                <textarea
                  rows="4"
                  placeholder="Ex: Gostaria de saber mais sobre orçamento residencial..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                <span>Falar com Engenheiro no WhatsApp</span>
                <Send size={18} />
              </button>

              <div className="modal-security-note">
                <ShieldCheck size={16} className="highlight-green" />
                <span>Atendimento prioritário humano sem robôs chatos.</span>
              </div>
            </form>
          </div>

        </div>

      </div>

      {/* Floating WhatsApp Widget Button */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Onda%20Verde%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare size={28} />
        <span className="wa-tooltip">Fale Conosco no WhatsApp!</span>
      </a>

      <style>{`
        .contact-section {
          background: var(--bg-primary);
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 40px;
        }

        .c-title {
          font-size: 1.3rem;
          margin-bottom: 20px;
        }

        .c-subtitle {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .c-info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .c-info-card {
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .c-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .c-icon.green { background: rgba(0, 230, 118, 0.15); color: var(--green-primary); }
        .c-icon.cyan { background: rgba(0, 180, 216, 0.15); color: var(--cyan-primary); }
        .c-icon.gold { background: rgba(255, 214, 0, 0.15); color: #FFD600; }

        .c-info-card h4 {
          font-size: 0.95rem;
          margin-bottom: 2px;
        }

        .c-info-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .contact-form-card {
          padding: 36px;
        }

        .c-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .c-field label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .c-field input, .c-field textarea {
          width: 100%;
          padding: 12px 14px;
          background: rgba(7, 15, 24, 0.8);
          border: 1px solid var(--border-glass);
          border-radius: 10px;
          color: var(--text-main);
          font-size: 0.95rem;
          font-family: var(--font-body);
          outline: none;
        }

        .c-field input:focus, .c-field textarea:focus {
          border-color: var(--green-primary);
        }

        /* Floating WhatsApp */
        .floating-wa-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          background: #25D366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.5);
          z-index: 999;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .floating-wa-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 15px 35px rgba(37, 211, 102, 0.7);
        }

        .wa-tooltip {
          position: absolute;
          right: 70px;
          background: rgba(7, 15, 24, 0.9);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
          border: 1px solid var(--border-glass);
        }

        .floating-wa-btn:hover .wa-tooltip {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-form-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
