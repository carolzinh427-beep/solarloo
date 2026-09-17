import React from 'react';
import { Shield, FileCheck, CheckCircle2, Award } from 'lucide-react';

export default function TrustSection() {
  const trustPillars = [
    {
      icon: <Shield size={24} className="trust-icon" />,
      title: 'Compromisso com a Qualidade',
      description: 'Trabalhamos com equipamentos testados e homologados pelos órgãos reguladores competentes.',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: <FileCheck size={24} className="trust-icon" />,
      title: 'Projeto Técnico Responsável',
      description: 'Dimensionamento elaborado por profissionais para garantir máxima eficiência e segurança operacional.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: <CheckCircle2 size={24} className="trust-icon" />,
      title: 'Transparência no Processo',
      description: 'Clareza em todas as etapas, desde o orçamento inicial até a ligação do sistema com a distribuidora.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: <Award size={24} className="trust-icon" />,
      title: 'Suporte e Acompanhamento',
      description: 'Atendimento dedicado para orientar e solucionar todas as dúvidas sobre o funcionamento do seu sistema.',
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        
        {/* Section Header (NO BADGES AS REQUESTED) */}
        <div className="section-header">
          <h2>Engenharia e atendimento responsável</h2>
          <p>Nossa prioridade é oferecer um serviço transparente, seguro e alinhado com as normas técnicas do setor elétrico.</p>
        </div>

        <div className="trust-grid">
          {trustPillars.map((pillar, idx) => (
            <div key={idx} className="card-clean trust-card">
              <div className="trust-img-frame">
                <img src={pillar.image} alt={pillar.title} className="trust-img" />
              </div>
              
              <div className="trust-body">
                <div className="trust-title-row">
                  <div className="trust-icon-box">{pillar.icon}</div>
                  <h3 className="trust-title">{pillar.title}</h3>
                </div>

                <p className="trust-desc">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .trust-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .trust-img-frame {
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background-color: #E2E8F0;
        }

        .trust-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .trust-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .trust-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .trust-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background-color: var(--green-light);
          border: 1px solid var(--green-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-icon {
          color: var(--green-primary);
        }

        .trust-title {
          font-size: 1.05rem;
          line-height: 1.3;
        }

        .trust-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
