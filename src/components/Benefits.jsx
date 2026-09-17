import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { DollarSign, TrendingUp, Leaf, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      number: '01',
      icon: <DollarSign size={22} className="benefit-icon" />,
      title: 'Economia imediata de até 95% na conta de luz',
      description: 'Reduza drasticamente a fatura mensal de energia elétrica logo no primeiro mês de funcionamento do sistema solar.',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=600&q=80',
      highlights: [
        'Proteção contra inflação energética',
        'Pagamento mínimo de taxa da concessionária',
        'Retorno sobre o investimento (Payback) rápido'
      ]
    },
    {
      number: '02',
      icon: <TrendingUp size={22} className="benefit-icon" />,
      title: 'Valorização patrimonial do seu imóvel',
      description: 'Imóveis com sistema de energia solar instalado ganham apelo imediato de mercado e valorizam até 10% a 15% na venda ou locação.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      highlights: [
        'Ativo sustentável e tecnológico',
        'Maior liquidez no mercado imobiliário',
        'Diferencial competitivo para residências e comércios'
      ]
    },
    {
      number: '03',
      icon: <Leaf size={22} className="benefit-icon" />,
      title: 'Energia 100% limpa, renovável e sustentável',
      description: 'Gere sua própria eletricidade através da radiação solar, sem emissão de gases poluentes e sem impacto ambiental negativo.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80',
      highlights: [
        'Zero emissão de CO2 durante a operação',
        'Contribuição direta para o meio ambiente',
        'Selo ESG para empresas e residências conscientes'
      ]
    },
    {
      number: '04',
      icon: <ShieldCheck size={22} className="benefit-icon" />,
      title: 'Previsibilidade e proteção contra aumentos tarifários',
      description: 'Chega de surpresas com bandeiras amarelas ou vermelhas. Fique imune aos reajustes constantes da distribuidora de energia.',
      image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80',
      highlights: [
        'Orçamento mensal previsível e estável',
        'Equipamentos com garantia de até 25 anos',
        'Independência energética a longo prazo'
      ]
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container">
        <div className="section-header">
          <h2>Por que investir em energia solar?</h2>
          <p>Confira os principais motivos para fazer a transição para a geração própria no seu imóvel.</p>
        </div>

        <div className="benefits-stack-container">
          <ScrollStack
            itemDistance={50}
            itemScale={0.035}
            itemStackDistance={20}
            stackPosition="12%"
            scaleEndPosition="5%"
            baseScale={0.88}
          >
            {benefitsList.map((item, idx) => (
              <ScrollStackItem key={idx}>
                <div className="benefit-card-content">
                  <div className="benefit-card-image-frame">
                    <img src={item.image} alt={item.title} className="benefit-card-img" />
                    <span className="benefit-card-num">Motivo {item.number}</span>
                  </div>

                  <div className="benefit-card-body">
                    <div className="benefit-card-header">
                      <div className="benefit-icon-badge">{item.icon}</div>
                      <h3>{item.title}</h3>
                    </div>

                    <p className="benefit-card-desc">{item.description}</p>

                    <ul className="benefit-highlights-list">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx}>
                          <CheckCircle2 size={16} className="text-green-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>

      <style>{`
        .benefits-stack-container {
          position: relative;
          margin-top: 1.5rem;
        }

        .benefit-card-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 24px;
          align-items: center;
        }

        .benefit-card-image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 14px;
          overflow: hidden;
          background-color: #E2E8F0;
          border: 1px solid #E2E8F0;
        }

        .benefit-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .benefit-card-num {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #7CB342;
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.78rem;
          padding: 3px 10px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .benefit-card-body {
          display: flex;
          flex-direction: column;
        }

        .benefit-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .benefit-icon-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background-color: #F4F9EC;
          border: 1px solid #DCEDC8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .benefit-icon {
          color: #7CB342;
        }

        .benefit-card-header h3 {
          font-size: 1.22rem;
          line-height: 1.3;
          color: #222222;
        }

        .benefit-card-desc {
          font-size: 0.92rem;
          color: #666666;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .benefit-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .benefit-highlights-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: #454545;
          font-weight: 500;
        }

        .text-green-primary {
          color: #7CB342;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .benefit-card-content {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .benefit-card-header h3 {
            font-size: 1.05rem;
          }
          .benefit-card-desc {
            font-size: 0.85rem;
            margin-bottom: 8px;
          }
          .benefit-highlights-list li {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}

