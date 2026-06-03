"use client";

import React from 'react';
import IconLeafFilled from '../../icons/IconLeafFilled';
import IconLeafOutline from '../../icons/IconLeafOutline';
import CardBaseCientifica from '../../cards/CardBaseCientifica/CardBaseCientifica';

import pdOrigem from '@/assets/images/pd-origem.png';
import pdParcerias from '@/assets/images/pd-parcerias.png';
import pdPesquisa from '@/assets/images/pd-pesquisa.png';
import pdCompromisso from '@/assets/images/pd-compromisso.png';

import iconDoutores from '@/assets/icons/icon-doutores.svg';
import iconParceria from '@/assets/icons/icon-parceria.svg';
import iconMicroscope from '@/assets/icons/icon-microscope.svg';
import iconLetterLocker from '@/assets/icons/icon-letter-locker.svg';

import './BaseCientifica.css';

export default function BaseCientifica() {
  const handleCardClick = (cardTitle) => {
    console.log(`Card clicado: ${cardTitle}`);
  };

  return (
    <section className="bc-section" aria-labelledby="bc-section-title">
      {/* Grafismos decorativos de fundo isolados nesta seção */}
      <div className="bc-bg-graphics" aria-hidden="true">
        <div className="bc-bg-leaf-grid grid-left">
          <IconLeafFilled className="bc-bg-leaf leaf-1" />
          <IconLeafOutline className="bc-bg-leaf leaf-2" />
          <IconLeafFilled className="bc-bg-leaf leaf-3" />
          <IconLeafOutline className="bc-bg-leaf leaf-4" />
          <IconLeafFilled className="bc-bg-leaf leaf-5" />
        </div>
        <div className="bc-bg-leaf-grid grid-center">
          <IconLeafFilled className="bc-bg-leaf leaf-1" />
          <IconLeafOutline className="bc-bg-leaf leaf-2" />
          <IconLeafFilled className="bc-bg-leaf leaf-3" />
          <IconLeafOutline className="bc-bg-leaf leaf-4" />
          <IconLeafFilled className="bc-bg-leaf leaf-5" />
        </div>
        <div className="bc-bg-leaf-grid grid-right">
          <IconLeafFilled className="bc-bg-leaf leaf-1" />
          <IconLeafOutline className="bc-bg-leaf leaf-2" />
          <IconLeafFilled className="bc-bg-leaf leaf-3" />
          <IconLeafOutline className="bc-bg-leaf leaf-4" />
          <IconLeafFilled className="bc-bg-leaf leaf-5" />
        </div>
      </div>

      <div className="bc-container">
        <h2 id="bc-section-title" className="bc-title">
          Base Científica
        </h2>
        
        <div className="bc-grid" role="list">
          <div role="listitem">
            <CardBaseCientifica
              title="Origem Acadêmica e Método Científico"
              imageSrc={pdOrigem}
              imageAlt="Foto de Renato Tonini em frente ao Departamento de Agronomia da UFV"
              iconSrc={iconDoutores}
              onClick={() => handleCardClick("Origem Acadêmica e Método Científico")}
            />
          </div>
          <div role="listitem">
            <CardBaseCientifica
              title="Parcerias Acadêmicas Estratégicas"
              imageSrc={pdParcerias}
              imageAlt="Foto de apresentação acadêmica sobre melhoramento genético no Brasil"
              iconSrc={iconParceria}
              onClick={() => handleCardClick("Parcerias Acadêmicas Estratégicas")}
            />
          </div>
          <div role="listitem">
            <CardBaseCientifica
              title="Pesquisa e Desenvolvimento Aplicado"
              imageSrc={pdPesquisa}
              imageAlt="Foto de pesquisadores em laboratório analisando amostras de Cannabis"
              iconSrc={iconMicroscope}
              onClick={() => handleCardClick("Pesquisa e Desenvolvimento Aplicado")}
            />
          </div>
          <div role="listitem">
            <CardBaseCientifica
              title="Compromisso Estrutural de Longo Prazo"
              imageSrc={pdCompromisso}
              imageAlt="Foto de tubo de ensaio com extrato vegetal em laboratório"
              iconSrc={iconLetterLocker}
              onClick={() => handleCardClick("Compromisso Estrutural de Longo Prazo")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

