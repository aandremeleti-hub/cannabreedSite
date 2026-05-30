import Image from 'next/image';
import logoMark from '@/assets/icons/structured-projects-logomark.svg';
import titleBg from '@/assets/images/structured-projects-title.jpg';
import bottomBg from '@/assets/images/structured-projects-bottom.jpg';
import whoActingIcon from '@/assets/icons/structured-projects-who-acting.svg';
import modelIcon from '@/assets/icons/structured-projects-model.svg';
import './StructuredProjectsSection.css';

export default function StructuredProjectsSection() {
  return (
    <section className="structured-projects" id="projetos-estruturados" aria-labelledby="structured-projects-main-title">
      
      {/* Upper Part: Title Container with Left LogoMark and Right Title Box */}
      <div className="structured-projects-title-container">
        
        {/* Background Image & Gradient Overlay */}
        <div className="structured-projects-title-bg-wrapper">
          <Image
            src={titleBg}
            alt=""
            fill
            sizes="100vw"
            className="structured-projects-title-bg-img"
            priority
          />
          <div className="structured-projects-title-overlay" />
        </div>

        {/* Content Wrapper */}
        <div className="structured-projects-title-content">
          <div className="structured-projects-logo-box">
            <Image
              src={logoMark}
              alt="Marca da Cannabreed"
              width={194}
              height={205}
              className="structured-projects-logomark"
            />
          </div>
          
          <div className="structured-projects-title-box">
            <h2 id="structured-projects-main-title" className="structured-projects-title">
              ATUAÇÃO TÉCNICA PARA PROJETOS ESTRUTURADOS
            </h2>
            <p className="structured-projects-subtitle">
              A Cannabreed atua junto a organizações que demandam base científica sólida, estrutura técnica consistente e conformidade regulatória para desenvolver projetos de Cannabis e cânhamo no Brasil.
            </p>
          </div>
        </div>

      </div>

      {/* Middle Part: Cards Container */}
      <div className="structured-projects-cards-wrapper">
        <div className="structured-projects-cards-container">
          
          {/* Card 1: Para quem atuamos */}
          <article className="structured-projects-card who-acting-card">
            <div className="structured-projects-card-content">
              <div className="structured-projects-card-icon-box">
                <Image
                  src={whoActingIcon}
                  alt=""
                  width={67}
                  height={67}
                  className="structured-projects-card-icon"
                />
              </div>
              <h3 className="structured-projects-card-title">
                Para quem atuamos
              </h3>
            </div>
          </article>

          {/* Card 2: Modelo de atuação */}
          <article className="structured-projects-card model-card">
            <div className="structured-projects-card-content">
              <div className="structured-projects-card-icon-box">
                <Image
                  src={modelIcon}
                  alt=""
                  width={67}
                  height={67}
                  className="structured-projects-card-icon"
                />
              </div>
              <h3 className="structured-projects-card-title">
                Modelo de atuação
              </h3>
            </div>
          </article>

        </div>
      </div>

      {/* Bottom Part: Background Image, Gradient Overlay, and Text blocks */}
      <div className="structured-projects-bottom-container">
        
        {/* Background Image & Gradient Overlay */}
        <div className="structured-projects-bottom-bg-wrapper">
          <Image
            src={bottomBg}
            alt=""
            fill
            sizes="100vw"
            className="structured-projects-bottom-bg-img"
          />
          <div className="structured-projects-bottom-overlay" />
        </div>

        {/* Content Wrapper */}
        <div className="structured-projects-bottom-content">
          <div className="structured-projects-bottom-left-text">
            <p>
              A condução técnica é orientada por método científico, padronização de processos e controle de variáveis críticas, reduzindo incertezas e ampliando previsibilidade.
            </p>
          </div>
          <div className="structured-projects-bottom-right-text">
            <p>
              Operamos exclusivamente dentro dos parâmetros legais e institucionais, com compromisso explícito com responsabilidade técnica, segurança regulatória e desenvolvimento sustentável do setor no Brasil.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
