import React from 'react';
import { Shield, FileCheck, CheckCircle2, Award } from 'lucide-react';

export default function TrustSection() {
  const trustPillars = [
    {
      icon: <Shield size={26} className="trust-icon" />,
      title: 'Compromisso com a Qualidade',
      description: 'Trabalhamos com equipamentos testados e homologados pelos órgãos reguladores competentes.',
    },
    {
      icon: <FileCheck size={26} className="trust-icon" />,
      title: 'Projeto Técnico Responsável',
      description: 'Dimensionamento elaborado por profissionais para garantir máxima eficiência e segurança operacional.',
    },
    {
      icon: <CheckCircle2 size={26} className="trust-icon" />,
      title: 'Transparência no Processo',
      description: 'Clareza em todas as etapas, desde o orçamento inicial até a ligação do sistema com a distribuidora.',
    },
    {
      icon: <Award size={26} className="trust-icon" />,
      title: 'Suporte e Acompanhamento',
      description: 'Atendimento dedicado para orientar e solucionar todas as dúvidas sobre o funcionamento do seu sistema.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">
            <span>CONFIANÇA E SEGURANÇA</span>
          </div>
          <h2>Engenharia e atendimento responsável</h2>
          <p>Nossa prioridade é oferecer um serviço transparente, seguro e alinhado com as normas técnicas do setor elétrico.</p>
        </div>

        <div className="trust-grid">
          {trustPillars.map((pillar, idx) => (
            <div key={idx} className="card-clean trust-card">
              <div className="trust-icon-box">{pillar.icon}</div>
              <h3 className="trust-title">{pillar.title}</h3>
              <p className="trust-desc">{pillar.description}</p>
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
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .trust-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background-color: var(--green-light);
          border: 1px solid var(--green-border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .trust-icon {
          color: var(--green-primary);
        }

        .trust-title {
          font-size: 1.05rem;
          margin-bottom: 8px;
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
