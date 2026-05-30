"use client";

import React from 'react';
import Image from 'next/image';
import IconSeeds from '../../icons/IconSeeds';
import IconProtection from '../../icons/IconProtection';
import IconResearch from '../../icons/IconResearch';
import IconVarieties from '../../icons/IconVarieties';
import IconPhenotypes from '../../icons/IconPhenotypes';
import IconSelection from '../../icons/IconSelection';
import IconInnovation from '../../icons/IconInnovation';
import IconTests from '../../icons/IconTests';

import cultivoImg from '@/assets/images/pd-cultivo.png';
import './ResearchAndDevelopment.css';

const cardsData = [
  { id: 'seeds', title: 'Sementes', Icon: IconSeeds },
  { id: 'protection', title: 'Proteção', Icon: IconProtection },
  { id: 'pd', title: 'P&D', Icon: IconResearch },
  { id: 'varieties', title: 'Variedades', Icon: IconVarieties },
  { id: 'phenotypes', title: 'Fenótipos', Icon: IconPhenotypes },
  { id: 'selection', title: 'Seleção', Icon: IconSelection },
  { id: 'innovation', title: 'Inovação', Icon: IconInnovation },
  { id: 'tests', title: 'Testes', Icon: IconTests },
];

export default function ResearchAndDevelopment() {
  return (
    <section className="rd-section" id="pd" aria-labelledby="rd-section-title">
      <div className="rd-container">
        {/* Lado Esquerdo: Conteúdo Textual e Grade de Cards */}
        <div className="rd-content-left">
          <header className="rd-header">
            <h2 id="rd-section-title" className="rd-title">
              Pesquisa, Desenvolvimento e Melhoramento Genético (P&D)
            </h2>
            <p className="rd-description">
              Serviços de alto valor (core da Cannabreed)
            </p>
          </header>

          <div className="rd-cards-grid" role="list">
            {cardsData.map((card) => (
              <button
                key={card.id}
                type="button"
                className={`rd-card rd-card-${card.id}`}
                aria-label={`Ver detalhes sobre ${card.title}`}
                role="listitem"
              >
                <div className="rd-card-icon-wrapper">
                  <card.Icon className="rd-card-icon" size={42} />
                </div>
                <span className="rd-card-title">{card.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Lado Direito: Imagem com visual premium */}
        <div className="rd-content-right">
          <Image
            src={cultivoImg}
            alt="Mãos segurando blocos de cultivo com brotos verdes de Cannabis sativa L."
            fill
            className="rd-image"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
