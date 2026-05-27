"use client";

import Image from 'next/image';
import CardGenetica from '@/components/cards/CardGenetica/CardGenetica';
import CardImportation from '@/components/cards/CardImportation/CardImportation';
import CardLaudo from '@/components/cards/CardLaudo/CardLaudo';
import CardStructuration from '@/components/cards/CardStructuration/CardStructuration';
import bgImage from '@/assets/images/what-cannabreed-does-bg.jpeg';
import './WhatCannabreedDoes.css';

export default function WhatCannabreedDoes() {
  const handleCardClick = (cardName) => {
    console.log(`Card clicked: ${cardName}`);
    // Adicionar lógica de clique futura (ex: abrir modal, âncora)
  };

  return (
    <section className="what-cannabreed-does">
      {/* Background Decor Layer */}
      <div className="what-cannabreed-does-bg-container">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="what-cannabreed-does-bg-image"
        />
        <div className="what-cannabreed-does-overlay"></div>
      </div>

      {/* Main Content Area */}
      <div className="what-cannabreed-does-content">
        {/* Title Box */}
        <div className="what-cannabreed-does-title-box">
          <h2 className="what-cannabreed-does-title">
            O QUE A CANNABREED FAZ
          </h2>
          <p className="what-cannabreed-does-subtitle">
            Estrutura técnica completa para transformar projetos 
            em operações produtivas, conformes e sustentáveis.
          </p>
        </div>

        {/* Cards Container */}
        <div className="what-cannabreed-does-cards-container">
          <CardGenetica onClick={() => handleCardClick('Genética e Melhoramento')} />
          <CardImportation onClick={() => handleCardClick('Importação de Sementes')} />
          <CardLaudo onClick={() => handleCardClick('Laudos e Perícias')} />
          <CardStructuration onClick={() => handleCardClick('Estruturação Regulatória')} />
        </div>
      </div>
    </section>
  );
}
