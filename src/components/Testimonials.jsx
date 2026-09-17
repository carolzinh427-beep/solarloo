import React from 'react';
import { MessageSquare, Star, Quote, ArrowDownRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Eduardo Mendes',
      role: 'Proprietário Residencial',
      city: 'Campinas / SP',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      before: 'R$ 1.450',
      after: 'R$ 98',
      rating: 5,
      text: 'A Onda Verde cumpriu exatamente o que prometeu no projeto. Minha conta caiu de quase 1500 reais para a taxa mínima! O aplicativo de acompanhamento é fantástico e o suporte da equipe foi exemplar.',
    },
    {
      id: 2,
      name: 'Dr. Fernando Silveira',
      role: 'Clínica Odontológica',
      city: 'Ribeirão Preto / SP',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      before: 'R$ 3.800',
      after: 'R$ 210',
      rating: 5,
      text: 'Instalamos a usina no telhado da clínica e financiamos 100% sem entrada. A própria parcela ficou menor do que o valor que eu pagava na conta de luz. Recomendadíssimo!',
    },
    {
      id: 3,
      name: 'Mariana Vasconcelos',
      role: 'Fazenda Santa Maria',
      city: 'Uberaba / MG',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      before: 'R$ 12.400',
      after: 'R$ 680',
      rating: 5,
      text: 'No agronegócio a energia elétrica é um gargalo gigante. A Onda Verde projetou nossa usina de solo com uma velocidade incrível. Homologaram na CEMIG sem qualquer complicação.',
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-eco">
            <MessageSquare size={16} />
            <span>HISTÓRIAS REAIS DE ECONOMIA</span>
          </div>
          <h2>O Que Dizem Nossos <span className="text-gradient-green">Clientes</span></h2>
          <p>Confira como a Onda Verde transformou a vida financeira e operacional de mais de 1.400 famílias e empresas.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card testimonial-card">
              <Quote className="quote-bg-icon" size={80} />

              <div className="t-header">
                <img src={t.avatar} alt={t.name} className="t-avatar" />
                <div className="t-author">
                  <h4>{t.name}</h4>
                  <span>{t.role} • {t.city}</span>
                  <div className="t-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#FFD600" color="#FFD600" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="t-text">"{t.text}"</p>

              {/* Before vs After Pill */}
              <div className="t-bill-pill">
                <div className="pill-side old">
                  <span className="p-label">Antes:</span>
                  <span className="p-val">{t.before}</span>
                </div>
                <div className="pill-arrow">
                  <ArrowDownRight size={18} className="highlight-green" />
                </div>
                <div className="pill-side new">
                  <span className="p-label">Hoje:</span>
                  <span className="p-val highlight-green">{t.after}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .testimonials-section {
          background: var(--bg-primary);
          position: relative;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .testimonial-card {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .quote-bg-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          color: rgba(255, 255, 255, 0.03);
          pointer-events: none;
        }

        .t-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .t-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid var(--green-primary);
          object-fit: cover;
        }

        .t-author h4 {
          font-size: 1.05rem;
          color: var(--text-main);
        }

        .t-author span {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
        }

        .t-stars {
          display: flex;
          gap: 2px;
          margin-top: 4px;
        }

        .t-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
          font-style: italic;
        }

        .t-bill-pill {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          padding: 10px 14px;
        }

        .pill-side {
          display: flex;
          gap: 6px;
          align-items: center;
          font-size: 0.85rem;
        }

        .pill-side.old .p-val {
          color: #EF4444;
          text-decoration: line-through;
        }

        .pill-side.new .p-val {
          font-weight: 800;
          font-family: var(--font-heading);
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
