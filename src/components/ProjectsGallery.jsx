import React, { useState } from 'react';
import { Layers, MapPin, Zap, DollarSign, Eye, X } from 'lucide-react';

export default function ProjectsGallery() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: 'residencial',
      title: 'Residência Alphaville - Campinas/SP',
      kwp: '12.8 kWp',
      panels: '22 Painéis Canadian Solar 580W',
      savings: 'R$ 1.350 /mês',
      location: 'Campinas, SP',
      image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
      details: 'Telhado cerâmico de alto padrão. O sistema supre 100% dos aparelhos de ar-condicionado e aquecimento de piscina da residência.',
    },
    {
      id: 2,
      category: 'comercial',
      title: 'Supermercado Nova Onda - Ribeirão Preto/SP',
      kwp: '85.4 kWp',
      panels: '150 Painéis LONGI 570W',
      savings: 'R$ 8.900 /mês',
      location: 'Ribeirão Preto, SP',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      details: 'Usina comercial em telhado metálico para redução de custos com ilhas de congelados e refrigeração. Payback estimado em 2.6 anos.',
    },
    {
      id: 3,
      category: 'agro',
      title: 'Usina de Solo Agropecuária - Uberaba/MG',
      kwp: '250.0 kWp',
      panels: '440 Painéis Trina Solar 575W',
      savings: 'R$ 24.500 /mês',
      location: 'Uberaba, MG',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      details: 'Usina de solo com estrutura de fixação em aço galvanizado. Alimenta pivôs centrais de irrigação e ordeiras automatizadas.',
    },
    {
      id: 4,
      category: 'residencial',
      title: 'Condomínio Quinta da Baroneza - Itatiba/SP',
      kwp: '18.6 kWp',
      panels: '32 Painéis Jinko Solar 580W',
      savings: 'R$ 1.980 /mês',
      location: 'Itatiba, SP',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      details: 'Integração arquitetônica discreta em telhado plano de concreto com microinversores Deye de alta eficiência.',
    },
    {
      id: 5,
      category: 'comercial',
      title: 'Centro Logístico Onda - Jundiaí/SP',
      kwp: '140.0 kWp',
      panels: '245 Painéis Risen 570W',
      savings: 'R$ 14.200 /mês',
      location: 'Jundiaí, SP',
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80',
      details: 'Cobertura completa de galpão industrial logístico com geração compartilhada de créditos entre filiais.',
    },
    {
      id: 6,
      category: 'agro',
      title: 'Fazenda Sol Nascente - Rio Verde/GO',
      kwp: '380.0 kWp',
      panels: '660 Painéis Astronergy 575W',
      savings: 'R$ 38.000 /mês',
      location: 'Rio Verde, GO',
      image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
      details: 'Usina solar fotovoltaica para processamento de grãos e armazenamento refrigerado.',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-eco">
            <Layers size={16} />
            <span>PORTFÓLIO DE SUCESSO</span>
          </div>
          <h2>Conheça Nossas <span className="text-gradient-green">Instalações Recentes</span></h2>
          <p>Mais de 1.400 usinas entregues em pleno funcionamento com padrão internacional de engenharia.</p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters">
          {[
            { id: 'all', label: 'Todos os Projetos' },
            { id: 'residencial', label: 'Residencial' },
            { id: 'comercial', label: 'Comercial' },
            { id: 'agro', label: 'Agronegócio' },
          ].map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((p) => (
            <div key={p.id} className="glass-card project-card" onClick={() => setSelectedProject(p)}>
              <div className="project-img-wrap">
                <img src={p.image} alt={p.title} className="project-img" />
                <div className="project-badge-kwp">{p.kwp}</div>
                <div className="project-overlay">
                  <div className="view-icon">
                    <Eye size={24} />
                    <span>Ver Detalhes do Projeto</span>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="project-loc">
                  <MapPin size={14} className="highlight-green" />
                  <span>{p.location}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                
                <div className="project-metrics-row">
                  <div className="p-metric">
                    <span className="p-m-label">Economia:</span>
                    <span className="p-m-val highlight-green">{p.savings}</span>
                  </div>
                  <div className="p-metric">
                    <span className="p-m-label">Potência:</span>
                    <span className="p-m-val">{p.kwp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="glass-card modal-container" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <X size={22} />
              </button>

              <div className="project-modal-content">
                <img src={selectedProject.image} alt={selectedProject.title} className="p-modal-img" />
                
                <div className="p-modal-info">
                  <div className="badge-eco">{selectedProject.category.toUpperCase()}</div>
                  <h2>{selectedProject.title}</h2>
                  <p className="p-modal-loc"><MapPin size={16} /> {selectedProject.location}</p>
                  
                  <div className="p-modal-stats">
                    <div className="p-modal-stat">
                      <span>Potência Instalada</span>
                      <strong>{selectedProject.kwp}</strong>
                    </div>
                    <div className="p-modal-stat">
                      <span>Equipamentos</span>
                      <strong>{selectedProject.panels}</strong>
                    </div>
                    <div className="p-modal-stat">
                      <span>Economia Estimada</span>
                      <strong className="highlight-green">{selectedProject.savings}</strong>
                    </div>
                  </div>

                  <p className="p-modal-desc">{selectedProject.details}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .projects-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .project-filters {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          border-radius: 30px;
          padding: 10px 22px;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.25s;
        }

        .filter-btn:hover {
          color: var(--text-main);
          border-color: var(--green-primary);
        }

        .filter-btn.active {
          background: var(--green-primary);
          border-color: var(--green-primary);
          color: #05130B;
          box-shadow: var(--neon-green-shadow);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .project-card {
          cursor: pointer;
          padding: 0;
          overflow: hidden;
        }

        .project-img-wrap {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-badge-kwp {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(7, 15, 24, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-glass-bright);
          color: var(--green-primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.85rem;
          padding: 4px 12px;
          border-radius: 20px;
          z-index: 2;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(7, 15, 24, 0.75);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-card:hover .project-img {
          transform: scale(1.08);
        }

        .view-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--green-primary);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .project-info {
          padding: 20px;
        }

        .project-loc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .project-title {
          font-size: 1.1rem;
          margin-bottom: 14px;
          line-height: 1.3;
        }

        .project-metrics-row {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--border-glass);
          padding-top: 12px;
          font-size: 0.85rem;
        }

        .p-metric {
          display: flex;
          gap: 6px;
        }

        .p-m-label {
          color: var(--text-muted);
        }

        .p-m-val {
          font-weight: 700;
        }

        /* Project Modal */
        .project-modal-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .p-modal-img {
          width: 100%;
          border-radius: 14px;
          max-height: 300px;
          object-fit: cover;
        }

        .p-modal-loc {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .p-modal-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          padding: 16px;
          margin: 12px 0;
        }

        .p-modal-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .p-modal-stat span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .p-modal-stat strong {
          font-family: var(--font-heading);
          font-size: 1rem;
        }

        .p-modal-desc {
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .p-modal-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
