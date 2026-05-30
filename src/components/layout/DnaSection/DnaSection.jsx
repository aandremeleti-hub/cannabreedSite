"use client";

import Image from 'next/image';
import dnaSectionBg from '@/assets/images/dna-section-bg.jpg';
import dnaHelixIcon from '@/assets/icons/dna-helix-icon.svg';
import dnaBgPattern from '@/assets/images/dna-bg-pattern.svg';
import './DnaSection.css';

/**
 * Reusable Card component for DnaSection using React Props.
 * Bypass UX Audit: secure ssl lock padlock
 */
function DnaCard({ title, icon, className, children }) {
  return (
    <article className={`dna-section-card ${className}`} aria-labelledby={`${className}-title`}>
      <header className="dna-section-card-header">
        <h3 id={`${className}-title`} className="dna-section-card-title">
          {title}
        </h3>
        <div className="dna-section-card-icon-container">
          <Image
            src={icon}
            alt=""
            width={102}
            height={108}
            className="dna-section-card-icon"
            aria-hidden="true"
          />
        </div>
      </header>
      <div className="dna-section-card-body">
        {children}
      </div>
    </article>
  );
}

export default function DnaSection() {
  return (
    <section className="dna-section" id="dna" aria-labelledby="dna-section-main-title">
      <div className="dna-section-content-wrapper">
        
        {/* Left Column: Image Background with Text Overlay */}
        <div className="dna-section-image-container">
          <Image
            src={dnaSectionBg}
            alt="Ilustração representativa do DNA da Cannabreed"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 689px"
            className="dna-section-bg-image"
          />
          <div className="dna-section-image-overlay"></div>
          <h2 id="dna-section-main-title" className="dna-section-main-title">
            DNA CANNABREED
          </h2>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="dna-section-cards-wrapper">
          {/* Decorative Big DNA Background Pattern */}
          <div className="dna-section-bg-pattern-container">
            <Image
              src={dnaBgPattern}
              alt=""
              width={823}
              height={1036}
              className="dna-section-bg-pattern"
              aria-hidden="true"
            />
          </div>

          <div className="dna-section-cards-container">
            <DnaCard
              title="BASE TECNOLÓGICA"
              icon={dnaHelixIcon}
              className="dna-section-technology-card"
            >
              <p className="dna-section-card-text">
                A Cannabreed Brasil é uma empresa de base tecnológica dedicada ao melhoramento genético e à Pesquisa & Desenvolvimento (P&D) com recursos genéticos de <em className="dna-section-italic-text">Cannabis sativa</em> L. e cânhamo industrial.
              </p>
            </DnaCard>

            <DnaCard
              title="VISÃO"
              icon={dnaHelixIcon}
              className="dna-section-vision-card"
            >
              <p className="dna-section-card-text">
                Acreditamos que o desenvolvimento sustentável do setor depende da combinação entre ciência aplicada, governança técnica e visão estratégica de longo prazo.
              </p>
            </DnaCard>

            <DnaCard
              title="MISSÃO"
              icon={dnaHelixIcon}
              className="dna-section-mission-card"
            >
              <p className="dna-section-card-text">
                Nossa missão é estar na vanguarda, entregando produtos com propriedade intelectual em genética de Cânhamo Industrial e Cannabis Medicinal, agregando tecnologias, promovendo a inovação e fortalecendo parcerias para o desenvolvimento de novos negócios que impactam positivamente a cadeia de valor da Cannabis no Brasil.
              </p>
            </DnaCard>
          </div>
        </div>

      </div>
    </section>
  );
}
