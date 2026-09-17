import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'O que é energia solar?',
      a: 'É a energia elétrica gerada a partir da luz do sol através de painéis fotovoltaicos. Essa eletricidade é convertida por um inversor para alimentar os aparelhos e iluminação do seu imóvel.',
    },
    {
      q: 'Quanto posso economizar?',
      a: 'A economia depende do seu padrão de consumo e do tamanho do sistema instalado. Com o sistema adequado, é possível reduzir significativamente o valor da conta de energia, pagando à concessionária apenas a taxa mínima de disponibilidade da rede.',
    },
    {
      q: 'A energia solar funciona em dias nublados?',
      a: 'Sim. Os painéis solares continuam gerando energia em dias nublados ou chuvosos utilizando a radiação solar difusa, embora a produção ocorra em ritmo reduzido em comparação com dias ensolarados.',
    },
    {
      q: 'Preciso trocar meu telhado?',
      a: 'Na grande maioria dos casos, não. As estruturas de fixação são projetadas para se adaptar a diferentes tipos de telha (cerâmica, metálica, fibrocimento ou laje). É realizada apenas uma avaliação técnica prévia para confirmar a resistência da estrutura.',
    },
    {
      q: 'Quanto tempo leva para instalar?',
      a: 'A instalação física dos painéis e equipamentos em um imóvel residencial ou comercial de pequeno porte leva em média de 1 a 3 dias. O processo completo, incluindo o trâmite com a distribuidora de energia, leva alguns dias adicionais.',
    },
    {
      q: 'A energia solar funciona à noite?',
      a: 'Durante a noite não há geração solar. Se o seu sistema for conectado à rede (on-grid), você utiliza a energia fornecida pela distribuidora. Caso tenha gerado excedente durante o dia, esse excedente é compensado como crédito.',
    },
    {
      q: 'Como funciona a manutenção?',
      a: 'A manutenção é simples e de baixo custo. Consiste basicamente na limpeza periódica da superfície dos painéis (para remover poeira e fuligem) e na inspeção visual dos equipamentos.',
    },
    {
      q: 'A economia é garantida?',
      a: 'A geração de energia é proporcional à radiação solar da sua região e ao dimensionamento correto do projeto. Com equipamentos adequados e projeto bem executado, os resultados são previsíveis e acompanhados por sistema de monitoramento.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-subtle">
      <div className="container">
        
        <div className="section-header">
          <h2>Perguntas frequentes</h2>
          <p>Esclareça as principais dúvidas sobre o funcionamento e os benefícios da energia solar.</p>
        </div>

        <div className="faq-accordion-wrap">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-accordion-item ${openIndex === idx ? 'active' : ''}`}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <div className="faq-question-btn">
                <h3 className="faq-q-text">{faq.q}</h3>
                <ChevronDown size={20} className="faq-icon-arrow" />
              </div>

              {openIndex === idx && (
                <div className="faq-answer-box">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .faq-accordion-wrap {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-accordion-item {
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px 24px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .faq-accordion-item:hover {
          border-color: #CBD5E1;
        }

        .faq-accordion-item.active {
          border-color: var(--green-primary);
        }

        .faq-question-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .faq-q-text {
          font-size: 1.05rem;
          color: var(--text-title);
          font-weight: 600;
        }

        .faq-icon-arrow {
          color: var(--text-muted);
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }

        .faq-accordion-item.active .faq-icon-arrow {
          transform: rotate(180deg);
          color: var(--green-primary);
        }

        .faq-answer-box {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid var(--border-color);
          color: var(--text-body);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
