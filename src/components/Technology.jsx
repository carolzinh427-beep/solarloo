import React from 'react';
import AccordionGallery from './AccordionGallery';

export default function Technology() {
  const techItems = [
    {
      image: '/solar_panels_onda_verde.jpg',
      label: 'Painéis Solares (Módulos)',
      description: 'Captam a iluminação solar e realizam a conversão primária em energia elétrica contínua.',
    },
    {
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80',
      label: 'Inversor Solar Inteligente',
      description: 'Transforma a corrente contínua produzida na corrente alternada utilizada em tomadas e equipamentos.',
    },
    {
      image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
      label: 'Estruturas de Fixação',
      description: 'Suportes de liga leve e alta durabilidade projetados para se adaptarem ao seu telhado com total segurança.',
    },
    {
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      label: 'Monitoramento no Celular',
      description: 'Acompanhe a geração em tempo real pelo aplicativo no seu smartphone em qualquer lugar.',
    },
  ];

  return (
    <section id="tecnologia" className="section-padding tech-section-green">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2>Equipamentos e tecnologia do sistema</h2>
          <p>Entenda como cada componente trabalha em conjunto para gerar energia limpa para o seu imóvel.</p>
        </div>

        <div className="tech-gallery-container">
          <AccordionGallery
            items={techItems}
            defaultIndex={0}
            accentColor="#7CB342"
            overlayColor="#0A1505"
            textColor="#FFFFFF"
            height={320}
            gap={10}
            radius={14}
            expandRatio={0.5}
            duration={0.5}
            trigger="hover"
          />
        </div>
      </div>

      <style>{`
        .tech-section-green {
          background-color: #DCEEC2 !important;
          padding-top: 48px;
          padding-bottom: 48px;
        }

        .tech-gallery-container {
          max-width: 1040px;
          margin: 0 auto;
          box-shadow: 0 12px 32px rgba(124, 179, 66, 0.15);
          border-radius: 16px;
          padding: 8px;
          background-color: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(124, 179, 66, 0.3);
        }

        .section-header mb-8 {
          margin-bottom: 24px;
        }

        @media (max-width: 640px) {
          .tech-section-green {
            padding-top: 36px;
            padding-bottom: 36px;
          }
          .tech-gallery-container {
            padding: 4px;
            border-radius: 12px;
          }
        }
      `}</style>
    </section>
  );
}
