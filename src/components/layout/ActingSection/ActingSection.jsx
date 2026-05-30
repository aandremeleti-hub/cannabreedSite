import Image from 'next/image';
import actingBg from '@/assets/images/acting-container-image.webp';
import iconMelhoramento from '@/assets/icons/acting-melhoramento-icon.svg';
import iconPD from '@/assets/icons/acting-pd-icon.svg';
import iconProtecao from '@/assets/icons/acting-protecao-icon.svg';
import iconGestao from '@/assets/icons/acting-gestao-icon.svg';
import iconEstruturacao from '@/assets/icons/acting-estruturacao-icon.svg';
import './ActingSection.css';

export default function ActingSection() {
  const actingCards = [
    {
      id: 'melhoramento',
      title: 'Melhoramento genético e adaptação ao tropical',
      icon: iconMelhoramento,
    },
    {
      id: 'pd',
      title: 'P&D aplicado à produção',
      icon: iconPD,
    },
    {
      id: 'protecao',
      title: 'Proteção de cultivares',
      icon: iconProtecao,
    },
    {
      id: 'gestao',
      title: 'Gestão de propriedade intelectual',
      icon: iconGestao,
    },
    {
      id: 'estruturacao',
      title: 'Estruturação técnica e regulatória',
      icon: iconEstruturacao,
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
              {actingCards.map((card) => (
                <li className="acting-section-card-item" key={card.id}>
                  <article className="acting-card-container">
                    <div className="acting-card-text-wrapper">
                      <h3 className="acting-card-title">
                        {card.title}
                      </h3>
                    </div>
                    <div className="acting-card-icon-wrapper">
                      <Image
                        src={card.icon}
                        alt=""
                        width={48}
                        height={48}
                        className="acting-card-icon"
                        aria-hidden="true"
                      />
                    </div>
                  </article>
                </li>
              ))}
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
