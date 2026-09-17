import React, { useState } from 'react';
import { Home, Building2, Tractor, Zap, Cpu, ShieldAlert, ArrowRight, Check } from 'lucide-react';

export default function Services({ onOpenProposalModal }) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'residential',
      title: 'Energia Solar Residencial',
      icon: <Home size={24} />,
      badge: 'Economia Familiar',
      tagline: 'Transforme o sol no melhor investimento para a sua casa',
      description: 'Ideal para casas urbanas, condomínios fechados e sítios. Além de economizar até 95% na conta de luz, o seu imóvel valoriza em média 12% no mercado imobiliário.',
      highlights: [
        'Instalação rápida sem quebradeira em até 3 dias',
        'Monitoramento na palma da mão via aplicativo mobile',
        'Garantia de fábrica de 25 anos nos módulos',
        'Proteção contra aumentos de tarifa da distribuidora',
      ],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'commercial',
      title: 'Comercial & Empresarial',
      icon: <Building2 size={24} />,
      badge: 'Redução de OPEX',
      tagline: 'Aumente a margem de lucro da sua empresa reduzindo custos fixos',
      description: 'Para supermercados, padarias, academias, galpões e escritórios. O projeto solar reduz os custos operacionais diretos e garante a certificação ESG de empresa sustentável.',
      highlights: [
        'Abatimento fiscal e incentivos verdes',
        'Financiamento 100% bancável com carência estendida',
        'Retorno sobre o investimento (ROI) acelerado',
        'Proteção da lucratividade do seu negócio',
      ],
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'agro',
      title: 'Agronegócio & Projetos Rurais',
      icon: <Tractor size={24} />,
      badge: 'Força no Campo',
      tagline: 'Energia limpa para irrigação, granjas, secadores e pivôs',
      description: 'Desenvolvemos usinas solares de solo e flutuantes para propriedades rurais. Garantimos autonomia e redução drástica de gastos em sistemas que operam em alta potência.',
      highlights: [
        'Usinas de Solo e Flutuantes em açudes/represas',
        'Sistemas On-Grid e Híbridos com armazenamento',
        'Linhas de crédito agro exclusivas (FCO, Pronaf, Moderagro)',
        'Resistência extrema a poeira e intempéries',
      ],
      image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ev',
      title: 'Estações de Recarga EV Wallbox',
      icon: <Zap size={24} />,
      badge: 'Mobilidade Elétrica',
      tagline: 'Abasteça seu carro elétrico com a energia do próprio sol',
      description: 'Instalação de carregadores rápidos tipo 2 (Wallbox) para residências, condomínios e estabelecimentos comerciais que desejam atrair clientes premium.',
      highlights: [
        'Carga rápida inteligente de 7kW a 22kW',
        'Integração direta com o sistema solar da propriedade',
        'Gestão de cobrança para condomínios e estabelecimentos',
        'Compatível com 100% dos veículos elétricos do mercado',
      ],
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'om',
      title: 'Monitoramento & Manutenção O&M',
      icon: <Cpu size={24} />,
      badge: 'Inteligência 24/7',
      tagline: 'Sua usina produzindo sempre em capacidade máxima',
      description: 'Nossa central de telemetria acompanha a geração diária da sua usina. Realizamos lavagem de painéis, termografia com drones e manutenção preventiva regular.',
      highlights: [
        'Detecção de falhas e sombreamento em tempo real',
        'Limpeza técnica de módulos com água desmineralizada',
        'Inspeção preventiva com câmeras térmicas',
        'Relatórios mensais detalhados de desempenho',
      ],
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const current = services[activeTab];

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge-eco">
            <Zap size={16} />
            <span>SOLUÇÕES DE PONTA A PONTA</span>
          </div>
          <h2>Conheça os Serviços da <span className="text-gradient-green">Onda Verde</span></h2>
          <p>Oferecemos engenharia completa desde a análise de viabilidade até a homologação junto à concessionária de energia.</p>
        </div>

        {/* Tabs Bar */}
        <div className="services-tabs">
          {services.map((srv, idx) => (
            <button
              key={srv.id}
              className={`service-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <div className="tab-icon">{srv.icon}</div>
              <span>{srv.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="glass-card service-display-card">
          <div className="service-content-grid">
            
            <div className="service-info-col">
              <div className="badge-eco badge-sm">{current.badge}</div>
              <h3 className="service-title">{current.title}</h3>
              <p className="service-tagline">{current.tagline}</p>
              <p className="service-desc">{current.description}</p>

              <div className="service-highlights-list">
                {current.highlights.map((item, i) => (
                  <div key={i} className="highlight-row">
                    <div className="check-box">
                      <Check size={14} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary btn-service-cta" onClick={() => onOpenProposalModal()}>
                <span>Quero Orçamento para {current.title}</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="service-img-col">
              <div className="service-img-wrap">
                <img src={current.image} alt={current.title} className="service-img" />
                <div className="img-glow-overlay"></div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .services-section {
          position: relative;
          background: var(--bg-primary);
        }

        .services-tabs {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 12px;
          margin-bottom: 30px;
          scrollbar-width: none;
        }

        .services-tabs::-webkit-scrollbar {
          display: none;
        }

        .service-tab-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 14px;
          padding: 14px 20px;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          white-space: nowrap;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .service-tab-btn:hover {
          background: rgba(0, 230, 118, 0.08);
          border-color: var(--green-primary);
          color: var(--text-main);
        }

        .service-tab-btn.active {
          background: linear-gradient(135deg, rgba(0, 230, 118, 0.2) 0%, rgba(0, 180, 216, 0.1) 100%);
          border-color: var(--green-primary);
          color: var(--green-primary);
          box-shadow: 0 0 20px rgba(0, 230, 118, 0.2);
        }

        .service-display-card {
          padding: 40px;
        }

        .service-content-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }

        .badge-sm {
          font-size: 0.75rem;
          margin-bottom: 12px;
        }

        .service-title {
          font-size: 2.2rem;
          margin-bottom: 8px;
        }

        .service-tagline {
          color: var(--green-primary);
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 16px;
        }

        .service-desc {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .service-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 30px;
        }

        .highlight-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .check-box {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(0, 230, 118, 0.2);
          color: var(--green-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .service-img-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          box-shadow: 0 15px 35px rgba(0,0,0,0.5);
          border: 1px solid var(--border-glass-bright);
        }

        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-img-wrap:hover .service-img {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .service-content-grid {
            grid-template-columns: 1fr;
          }
          .service-display-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
