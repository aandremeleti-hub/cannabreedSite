"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import CardWhatCannabreedDoes from '@/components/cards/CardWhatCannabreedDoes/CardWhatCannabreedDoes';
import ModalLight from '@/components/layout/Modal/ModalLight';
import WhatCannabreedDoesModalContent from '@/components/layout/WhatCannabreedDoesModalContent/WhatCannabreedDoesModalContent';
import { WHAT_CANNABREED_DOES_DATA } from '@/data/whatCannabreedDoesData';
import bgImage from '@/assets/images/what-cannabreed-does-bg.jpeg';


// Import Assets for Cards
import imgGenetica from '@/assets/images/card-genetica.png';
import iconGenetica from '@/assets/icons/icon-diagnosis.svg';

import imgImportation from '@/assets/images/card-importation.png';
import iconImportation from '@/assets/icons/icon-truck.svg';

import imgLaudo from '@/assets/images/card-laudo.png';
import iconLaudo from '@/assets/icons/icon-premium.svg';

import imgStructuration from '@/assets/images/card-structuration.jpeg';
import iconStructuration from '@/assets/icons/icon-table-dolar.svg';

import './WhatCannabreedDoes.css';

export default function WhatCannabreedDoes() {
  const [activeServiceKey, setActiveServiceKey] = useState(null);

  const handleCardClick = (cardName) => {
    if (WHAT_CANNABREED_DOES_DATA[cardName]) {
      setActiveServiceKey(cardName);
    } else {
      console.log(`Card clicked: ${cardName}`);
    }
  };

  const cardsData = [
    {
      title: "Genética e Melhoramento",
      description: "Avaliação, desenvolvimento e adaptação de materiais genéticos. Foco em estabilidade, previsibilidade e desempenho em ambiente tropical.",
      imageSrc: imgGenetica,
      iconSrc: iconGenetica,
      onClickValue: "Genética e Melhoramento"
    },
    {
      title: "Importação de Sementes",
      description: "Organização técnica e documental para introdução, regularização e proteção de materiais genéticos and Cultivares.",
      imageSrc: imgImportation,
      iconSrc: iconImportation,
      onClickValue: "Importação de Sementes"
    },
    {
      title: "Laudos e Perícias Técnicas",
      description: "Laudos agronômicos, perícias em cultivo e material vegetal, pareceres técnicos e assistência especializada em demandas produtivas e regulatórias.",
      imageSrc: imgLaudo,
      iconSrc: iconLaudo,
      onClickValue: "Laudos e Perícias"
    },
    {
      title: "Estruturação Regulatória",
      description: "Enquadramento estratégico, documentação e implementação de sistemas de conformidade para viabilizar operações seguras. (RDCs 2026 / Sandbox).",
      imageSrc: imgStructuration,
      iconSrc: iconStructuration,
      onClickValue: "Estruturação Regulatória"
    }
  ];

  return (
    <section className="what-cannabreed-does" id="servicos">
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
          {cardsData.map((data, index) => (
            <CardWhatCannabreedDoes
              key={index}
              title={data.title}
              description={data.description}
              imageSrc={data.imageSrc}
              iconSrc={data.iconSrc}
              onClick={() => handleCardClick(data.onClickValue)}
            />
          ))}
        </div>
      </div>

      {/* Reusable Modal Rendering the newly generated ExpertReportsSection */}
      <ModalLight
        isOpen={activeServiceKey !== null}
        onClose={() => setActiveServiceKey(null)}
      >
        {activeServiceKey && (
          <WhatCannabreedDoesModalContent
            data={WHAT_CANNABREED_DOES_DATA[activeServiceKey]}
          />
        )}
      </ModalLight>


    </section>
  );
}

