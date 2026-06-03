import Image from 'next/image';
import actingBg from '@/assets/images/acting-container-image.webp';
import IconMelhoramento from '@/components/icons/IconMelhoramento';
import IconPD from '@/components/icons/IconPD';
import IconProtection from '@/components/icons/IconProtection';
import IconGestao from '@/components/icons/IconGestao';
import IconEstruturacao from '@/components/icons/IconEstruturacao';
import './ActingSection.css';

export default function ActingSection() {
  const actingCards = [
    {
      id: 'melhoramento',
      title: 'Melhoramento genético e adaptação ao tropical',
      Icon: IconMelhoramento,
    },
    {
      id: 'pd',
      title: 'P&D aplicado à produção',
      Icon: IconPD,
    },
    {
      id: 'protecao',
      title: 'Proteção de cultivares',
      Icon: IconProtection,
    },
    {
      id: 'gestao',
      title: 'Gestão de propriedade intelectual',
      Icon: IconGestao,
    },
    {
      id: 'estruturacao',
      title: 'Estruturação técnica e regulatória',
      Icon: IconEstruturacao,
    },
  ];

  return (
    <section className="acting-section" id="areas-atuacao" aria-labelledby="acting-section-title">
      <div className="acting-section-container">
        
        {/* Left Column: Content */}
        <div className="acting-section-content">
          <div className="acting-section-content-box">
            <h2 className="acting-section-title" id="acting-section-title">
              ÁREAS DE ATUAÇÃO
            </h2>
            
            <ul className="acting-section-cards-list">
              {actingCards.map((card) => {
                const IconComponent = card.Icon;
                return (
                  <li className="acting-section-card-item" key={card.id}>
                    <article className="acting-card-container">
                      <div className="acting-card-text-wrapper">
                        <h3 className="acting-card-title">
                          {card.title}
                        </h3>
                      </div>
                      <div className="acting-card-icon-wrapper">
                        <IconComponent
                          className="acting-card-icon"
                          size={48}
                        />
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <p className="acting-section-description">
            Integramos ciência, inovação e conformidade para transformar projetos 
            em sistemas produtivos estruturados, previsíveis e escaláveis.
          </p>
        </div>

        {/* Right Column: Illustration Image */}
        <div className="acting-section-image-wrapper" aria-hidden="true">
          <Image
            src={actingBg}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 664px"
            className="acting-section-bg-image"
          />
        </div>
        
      </div>
    </section>
  );
}
