"use client";

import Image from 'next/image';
import dnaSectionBg from '@/assets/images/dna-section-bg.jpg';
import dnaHelixIcon from '@/assets/icons/dna-helix-icon.svg';
import './DnaSection.css';

import CardDnaSection from '@/components/cards/CardDnaSection/CardDnaSection';
export default function DnaSection() {
  const cardsData = [
    {
      title: "BASE TECNOLÓGICA",
      iconSrc: dnaHelixIcon,
      className: "dna-section-technology-card",
      content: (
        <p className="dna-section-card-text">
          A Cannabreed Brasil é uma empresa de base tecnológica dedicada ao melhoramento genético e à Pesquisa & Desenvolvimento (P&D) com recursos genéticos de <em className="dna-section-italic-text">Cannabis sativa</em> L. e cânhamo industrial.
        </p>
      )
    },
    {
      title: "VISÃO",
      iconSrc: dnaHelixIcon,
      className: "dna-section-vision-card",
      content: (
        <p className="dna-section-card-text">
          Acreditamos que o desenvolvimento sustentável do setor depende da combinação entre ciência aplicada, governança técnica e visão estratégica de longo prazo.
        </p>
      )
    },
    {
      title: "MISSÃO",
      iconSrc: dnaHelixIcon,
      className: "dna-section-mission-card",
      content: (
        <p className="dna-section-card-text">
          Nossa missão é estar na vanguarda, entregando produtos com propriedade intelectual em genética de Cânhamo Industrial e Cannabis Medicinal, agregando tecnologias, promovendo a inovação e fortalecendo parcerias para o desenvolvimento de novos negócios que impactam positivamente a cadeia de valor da Cannabis no Brasil.
        </p>
      )
    }
  ];

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


          <div className="dna-section-cards-container">
            {cardsData.map((data, index) => (
              <CardDnaSection key={index} {...data} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
