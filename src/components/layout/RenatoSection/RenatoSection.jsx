import Image from 'next/image';
import renatoImage from '@/assets/images/renato-image.jpg';
import iconInterface from '@/assets/icons/icon-interface.svg';
import iconTrajetoria from '@/assets/icons/icon-trajetoria.svg';
import iconIntegracao from '@/assets/icons/icon-integracao.svg';
import IconLogoMark from '@/components/icons/IconLogoMark';
import './RenatoSection.css';

export default function RenatoSection() {
  const milestones = [
    {
      id: 'doctor',
      text: 'Doutor pelo Programa de Pós-Graduação em Genética e Melhoramento da Universidade Federal de Viçosa (UFV), avaliado com nota 7 pela CAPES — nível internacional de excelência acadêmica.',
    },
    {
      id: 'specialist',
      text: 'Especialista em Gestão da Inovação em Medicamentos da Biodiversidade – FIOCRUZ-RJ (2016)',
    },
    {
      id: 'master',
      text: 'Mestre em Agroecologia – UFV (2013)',
    },
    {
      id: 'bacharel',
      text: 'Bacharel em Ciências Biológicas – UNESP (2007)',
    },
  ];

  const cards = [
    {
      id: 'interface',
      title: 'Interface',
      icon: iconInterface,
    },
    {
      id: 'trajetoria',
      title: 'Trajetória',
      icon: iconTrajetoria,
    },
    {
      id: 'integracao',
      title: 'Integração',
      icon: iconIntegracao,
    },
  ];

  return (
    <section className="renato-section" id="lideranca-cientifica" aria-labelledby="renato-title">
      <div className="renato-section-container">
        
        {/* Left Side: Photo Card */}
        <div className="renato-image-card-wrapper">
          <div className="renato-image-card-container">
            <Image
              src={renatoImage}
              alt="Retrato fotográfico de Renato de Traglia Tonini, líder científico da Cannabreed"
              fill
              sizes="(max-width: 1024px) 100vw, 536px"
              className="renato-image-card-img"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="renato-content-container">
          <h2 id="renato-title" className="renato-section-title">
            RENATO DE TRAGLIA TONINI
          </h2>

          <ul className="renato-milestones-list" aria-label="Títulos e qualificações acadêmicas">
            {milestones.map((item) => (
              <li key={item.id} className="renato-milestone-item">
                <div className="renato-milestone-icon-box" aria-hidden="true">
                  <IconLogoMark className="renato-milestone-icon" size={38} />
                </div>
                <div className="renato-milestone-text-box">
                  <p className="renato-milestone-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="renato-cards-section">
            <h3 className="renato-section-cards-title">ATUAÇÃO TÉCNICA:</h3>
            <div className="renato-technical-cards-grid">
              {cards.map((card) => (
                <article key={card.id} className="renato-technical-card">
                  <div className="renato-technical-card-inner">
                    <div className="renato-technical-card-icon-box" aria-hidden="true">
                      <Image
                        src={card.icon}
                        alt=""
                        width={48}
                        height={42}
                        className="renato-technical-card-icon"
                      />
                    </div>
                    <h4 className="renato-technical-card-text">{card.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
