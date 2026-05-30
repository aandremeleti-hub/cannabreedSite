import Image from 'next/image';
import heroBg from '@/assets/images/hero-illustration.webp';
import rectDecor from '@/assets/icons/rectangle-decor.svg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Media Container */}
      <div className="hero-background-container">
        <Image
          src={heroBg}
          alt="Ciência e Genética de Cannabis"
          fill
          priority
          className="hero-bg-image"
        />
        <Image
          src={rectDecor}
          alt=""
          fill
          className="hero-bg-overlay"
        />
      </div>

      {/* Hero Content Area */}
      <div className="hero-content-wrapper">
        <div className="hero-container">
          <div className="hero-text-container">
            <h1 className="hero-title">
              CIÊNCIA, GENÉTICA E CONFORMIDADE <br />
              PARA O MERCADO DE CANNABIS
            </h1>
            <p className="hero-description">
              Projetos de genética e P&D em Cannabis e cânhamo, estruturados 
              conforme ANVISA, com documentação robusta, rastreabilidade 
              e execução científica comprovável.
            </p>
          </div>
          <a href="#contato" className="hero-cta">
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
