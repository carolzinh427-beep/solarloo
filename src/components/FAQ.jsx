import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'Como funciona a economia de até 95% na conta de luz?',
      a: 'Os painéis solares geram energia durante o dia. A energia que você não consome instantaneamente é injetada na rede da distribuidora (Enel, CPFL, Cemig, etc.), gerando créditos em kWh. À noite ou em dias nublados, você consome esses créditos. Ao final do mês, você paga apenas a taxa mínima de disponibilidade da rede.',
    },
    {
      q: 'O que acontece à noite ou em dias chuvosos/nublados?',
      a: 'À noite, seu sistema não produz energia solar e você utiliza a energia normal da rede da concessionária (usando seus créditos acumulados). Em dias chuvosos ou nublados, os painéis continuam gerando energia com a radiação difusa, porém com eficiência reduzida (~25% a 50% da capacidade total).',
    },
    {
      q: 'Quanto tempo duram os painéis solares e qual é a garantia?',
      a: 'Os painéis solares de alta performance da Onda Verde possuem garantia de fábrica de 25 anos de eficiência (garantindo que produzirão pelo menos 84,8% da capacidade nominal após 25 anos). A vida útil total estimada do sistema supera os 30 a 35 anos.',
    },
    {
      q: 'Como funciona o financiamento solar sem entrada?',
      a: 'Através dos nossos bancos parceiros (Santander, BV, Solfácil, BB), você pode financiar 100% do projeto com carência de até 120 dias para começar a pagar. Na prática, a 1ª parcela só vence quando o sistema já estiver gerando economia!',
    },
    {
      q: 'Quanto tempo leva desde a assinatura do contrato até a usina funcionando?',
      a: 'O processo completo leva em média de 15 a 30 dias úteis. Isso inclui o projeto de engenharia, a solicitação de parecer de acesso junto à concessionária, a entrega dos equipamentos, a montagem física (1 a 3 dias) e a vistoria final para troca do relógio bidirecional.',
    },
    {
      q: 'E se eu me mudar de casa no futuro? Posso levar o sistema solar comigo?',
      a: 'Sim! Você tem duas opções: 1) Desinstalar e transportar os painéis para seu novo imóvel; ou 2) Manter o sistema no imóvel atual, o que valoriza a propriedade em cerca de 10% a 15% na hora da venda ou locação, ou transferir os créditos de energia para a nova conta (desde que esteja na mesma área da concessionária).',
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-eco">
            <HelpCircle size={16} />
            <span>TIRE SUAS DÚVIDAS</span>
          </div>
          <h2>Perguntas <span className="text-gradient-green">Frequentes</span></h2>
          <p>Tudo o que você precisa saber sobre a transição para a energia solar limpa e renovável.</p>
        </div>

        {/* Search Bar */}
        <div className="faq-search-wrap">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar dúvida ex: garantia, financiamento, chuva..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-search-input"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className={`glass-card faq-item ${openIndex === idx ? 'open' : ''}`}
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{faq.q}</h3>
                  <div className="faq-arrow">
                    <ChevronDown size={20} />
                  </div>
                </div>

                {openIndex === idx && (
                  <div className="faq-answer-row">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="no-faq-text">Nenhuma pergunta encontrada para sua busca.</p>
          )}
        </div>

      </div>

      <style>{`
        .faq-section {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }

        .faq-search-wrap {
          max-width: 600px;
          margin: 0 auto 40px auto;
          position: relative;
        }

        .search-icon {
          position: absolute;
          top: 50%;
          left: 16px;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .faq-search-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          background: rgba(7, 15, 24, 0.8);
          border: 1px solid var(--border-glass);
          border-radius: 50px;
          color: var(--text-main);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.25s;
        }

        .faq-search-input:focus {
          border-color: var(--green-primary);
          box-shadow: 0 0 15px rgba(0, 230, 118, 0.2);
        }

        .faq-accordion-list {
          max-width: 850px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          padding: 20px 24px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .faq-question-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .faq-question {
          font-size: 1.1rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .faq-arrow {
          color: var(--text-muted);
          transition: transform 0.3s ease;
        }

        .faq-item.open .faq-arrow {
          transform: rotate(180deg);
          color: var(--green-primary);
        }

        .faq-item.open {
          border-color: var(--border-glass-bright);
          background: rgba(13, 31, 48, 0.9);
        }

        .faq-answer-row {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border-glass);
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .no-faq-text {
          text-align: center;
          color: var(--text-muted);
          padding: 20px;
        }
      `}</style>
    </section>
  );
}
