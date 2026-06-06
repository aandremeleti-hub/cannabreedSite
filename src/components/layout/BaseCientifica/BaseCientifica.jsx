"use client";

import React from 'react';
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

  const cardsData = [
    {
      title: "Origem Acadêmica e Método Científico",
      imageSrc: pdOrigem,
      imageAlt: "Foto de Renato Tonini em frente ao Departamento de Agronomia da UFV",
      iconSrc: iconDoutores,
      onClickValue: "Origem Acadêmica e Método Científico"
    },
    {
      title: "Parcerias Acadêmicas Estratégicas",
      imageSrc: pdParcerias,
      imageAlt: "Foto de apresentação acadêmica sobre melhoramento genético no Brasil",
      iconSrc: iconParceria,
      onClickValue: "Parcerias Acadêmicas Estratégicas"
    },
    {
      title: "Pesquisa e Desenvolvimento Aplicado",
      imageSrc: pdPesquisa,
      imageAlt: "Foto de pesquisadores em laboratório analisando amostras de Cannabis",
      iconSrc: iconMicroscope,
      onClickValue: "Pesquisa e Desenvolvimento Aplicado"
    },
    {
      title: "Compromisso Estrutural de Longo Prazo",
      imageSrc: pdCompromisso,
      imageAlt: "Foto de tubo de ensaio com extrato vegetal em laboratório",
      iconSrc: iconLetterLocker,
      onClickValue: "Compromisso Estrutural de Longo Prazo"
    }
  ];

  return (
    <section className="bc-section" aria-labelledby="bc-section-title">
      {/* Grafismos decorativos de fundo isolados nesta seção */}
      <div className="bc-bg-graphics" aria-hidden="true"></div>

      <div className="bc-container">
        <h2 id="bc-section-title" className="bc-title">
          Base Científica
        </h2>
        
        <div className="bc-grid" role="list">
          {cardsData.map((data, index) => (
            <div role="listitem" key={index}>
              <CardBaseCientifica
                title={data.title}
                imageSrc={data.imageSrc}
                imageAlt={data.imageAlt}
                iconSrc={data.iconSrc}
                onClick={() => handleCardClick(data.onClickValue)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

