import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  backgroundColor: isOpen ? '#7CB342' : '#F1F8E9',
                  borderColor: isOpen ? '#558B2F' : '#7CB342',
                  scale: isOpen ? 1.01 : 1,
                }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenIndex(isOpen ? -1 : idx);
                  }
                }}
              >
                <div className="faq-question-btn">
                  <h3 className={`faq-q-text ${isOpen ? 'text-white' : 'text-green-dark'}`}>
                    {faq.q}
                  </h3>
                  <div className={`faq-icon-wrapper ${isOpen ? 'bg-white-20' : 'bg-green-light'}`}>
                    <ChevronDown
                      size={20}
                      className={`faq-icon-arrow ${isOpen ? 'rotate-180 text-white' : 'text-green-primary'}`}
                    />
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-answer-box">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>

      <style>{`
        .faq-accordion-wrap {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-accordion-item {
          border-width: 2px;
          border-style: solid;
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          cursor: pointer;
          transition: box-shadow 0.25s ease, transform 0.2s ease;
          box-shadow: 0 4px 12px rgba(124, 179, 66, 0.08);
          user-select: none;
        }

        .faq-accordion-item:hover {
          box-shadow: 0 8px 20px rgba(124, 179, 66, 0.2);
          transform: translateY(-1px);
        }

        .faq-question-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .faq-q-text {
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.4;
          transition: color 0.2s ease;
        }

        .faq-q-text.text-green-dark {
          color: #2E5B10;
        }

        .faq-q-text.text-white {
          color: #FFFFFF;
        }

        .faq-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: background-color 0.25s ease;
        }

        .faq-icon-wrapper.bg-green-light {
          background-color: #DCEDC8;
        }

        .faq-icon-wrapper.bg-white-20 {
          background-color: rgba(255, 255, 255, 0.25);
        }

        .faq-icon-arrow {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s ease;
        }

        .faq-icon-arrow.text-green-primary {
          color: #558B2F;
        }

        .faq-icon-arrow.text-white {
          color: #FFFFFF;
        }

        .faq-icon-arrow.rotate-180 {
          transform: rotate(180deg);
        }

        .faq-answer-box {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          color: #F4FBF0;
          font-size: 1rem;
          line-height: 1.65;
          font-weight: 450;
        }

        .faq-accordion-item:not(.active) .faq-answer-box {
          border-top-color: rgba(124, 179, 66, 0.2);
          color: #334E22;
        }
      `}</style>
    </section>
  );
}

