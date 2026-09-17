import React from 'react';
import { Award, ShieldCheck, Wrench, Smartphone, FileCheck, Lock, Check } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: <Award size={26} className="highlight-green" />,
      title: 'Engenharia Própria Credenciada',
      description: 'Projetos desenhados por engenheiros eletricistas especialistas (CREA), garantindo máxima eficiência e conformidade técnica.',
    },
    {
      icon: <ShieldCheck size={26} style={{ color: '#FFD600' }} />,
      title: 'Módulos Tier 1 & Inversores Globais',
      description: 'Trabalhamos exclusivamente com as marcas líderes do ranking Bloomberg Tier 1 (Canadian, LONGI, Deye, Growatt).',
    },
    {
      icon: <Wrench size={26} style={{ color: '#00B4D8' }} />,
      title: 'Garantia Real de 25 Anos',
      description: 'Garantia de fábrica de 25 anos para os módulos e até 12 anos para inversores, com suporte técnico local priorizado.',
    },
    {
      icon: <Smartphone size={26} className="highlight-green" />,
      title: 'Aplicativo de Telemetria no Celular',
      description: 'Acompanhe diariamente quantos kWh sua usina produziu, os créditos acumulados e sua economia financeira acumulada.',
    },
    {
      icon: <FileCheck size={26} style={{ color: '#FFD600' }} />,
      title: 'Homologação Zero Burocracia',
      description: 'Resolvemos 100% dos trâmites junto à concessionária de energia da sua região para sua usina ser ligada sem dores de cabeça.',
    },
    {
      icon: <Lock size={26} style={{ color: '#00B4D8' }} />,
      title: 'Seguro de Instalação Incluso',
      description: 'Sua propriedade e equipamentos protegidos contra vendavais, granizo, raios e riscos de engenharia durante e pós-montagem.',
    },
  ];

  return (
    <section className="why-section section-padding">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-eco">
            <Award size={16} />
            <span>EXCELÊNCIA & SEGURANÇA</span>
          </div>
          <h2>Por Que Escolher a <span className="text-gradient-green">Onda Verde</span>?</h2>
          <p>Somos referência em qualidade de execução, transparência contratual e suporte técnico pós-venda.</p>
        </div>

        <div className="why-grid">
          {features.map((item, idx) => (
            <div key={idx} className="glass-card why-card">
              <div className="why-icon-box">
                {item.icon}
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .why-section {
          background: var(--bg-primary);
          position: relative;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .why-card {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .why-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .why-card-title {
          font-size: 1.2rem;
          color: var(--text-main);
        }

        .why-card-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
