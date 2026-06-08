"use client";

import React, { useState } from 'react';
import CardBaseCientifica from '../../cards/CardBaseCientifica/CardBaseCientifica';
import ModalLight from '@/components/layout/Modal/ModalLight';
import BaseCientificaModalContent from '@/components/layout/BaseCientificaModalContent/BaseCientificaModalContent';

import pdOrigem from '@/assets/images/pd-origem.png';
import pdParcerias from '@/assets/images/pd-parcerias.png';
import pdPesquisa from '@/assets/images/pd-pesquisa.png';
import pdCompromisso from '@/assets/images/pd-compromisso.png';

import imgOrigemModal from '@/assets/images/modal-base-cientifica-origem.png';
import imgParceriasModal from '@/assets/images/modal-base-cientifica-parcerias.png';
import imgPesquisaModal from '@/assets/images/modal-base-cientifica-pesquisa.png';
import imgCompromissoModal from '@/assets/images/modal-base-cientifica-compromisso.png';

import iconDoutores from '@/assets/icons/icon-doutores.svg';
import iconParceria from '@/assets/icons/icon-parceria.svg';
import iconMicroscope from '@/assets/icons/icon-microscope.svg';
import iconLetterLocker from '@/assets/icons/icon-letter-locker.svg';

import './BaseCientifica.css';

export default function BaseCientifica() {
  const [activeCardData, setActiveCardData] = useState(null);

  const handleCardClick = (card) => {
    if (card.modalData) {
      setActiveCardData(card);
    } else {
      console.log(`Card clicado: ${card.title}`);
    }
  };

  const cardsData = [
    {
      title: "Origem Acadêmica e Método Científico",
      imageSrc: pdOrigem,
      imageAlt: "Foto de Renato Tonini em frente ao Departamento de Agronomia da UFV",
      iconSrc: iconDoutores,
      modalData: {
        title: "Origem Acadêmica e Método Científico",
        description: "A Cannabreed nasceu no ambiente universitário, com atuação orientada por método, dados e padrões técnicos. Sua estrutura é fundamentada em rigor metodológico, análise sistemática e aplicação prática do conhecimento científico.",
        modalImageSrc: imgOrigemModal,
        modalImageAlt: "Ambiente de laboratório de pesquisa científica moderna com equipamentos de vidro e modelos de DNA em telas"
      }
    },
    {
      title: "Parcerias Acadêmicas Estratégicas",
      imageSrc: pdParcerias,
      imageAlt: "Foto de apresentação acadêmica sobre melhoramento genético no Brasil",
      iconSrc: iconParceria,
      modalData: {
        title: "Parcerias Acadêmicas Estratégicas",
        description: "Rede de colaboração com universidades e especialistas do setor agro, fortalecendo validação, consistência técnica e qualidade metodológica. A atuação conjunta amplia a capacidade técnica e assegura embasamento científico contínuo.",
        modalImageSrc: imgParceriasModal,
        modalImageAlt: "Dois cientistas cooperando e apertando as mãos em um laboratório universitário"
      }
    },
    {
      title: "Pesquisa e Desenvolvimento Aplicado",
      imageSrc: pdPesquisa,
      imageAlt: "Foto de pesquisadores em laboratório analisando amostras de Cannabis",
      iconSrc: iconMicroscope,
      modalData: {
        title: "Pesquisa e Desenvolvimento Aplicado",
        description: "P&D em genética, melhoramento, protocolos e padronização voltados às condições tropicais brasileiras. Projetos estruturados para gerar estabilidade, previsibilidade agronômica e evolução técnica do setor.",
        modalImageSrc: imgPesquisaModal,
        modalImageAlt: "Estação de trabalho científica com microscópio, placas de petri com tecidos vegetais e tela exibindo dados genéticos"
      }
    },
    {
      title: "Compromisso Estrutural de Longo Prazo",
      imageSrc: pdCompromisso,
      imageAlt: "Foto de tubo de ensaio com extrato vegetal em laboratório",
      iconSrc: iconLetterLocker,
      modalData: {
        title: "Compromisso Estrutural de Longo Prazo",
        description: "Investimento contínuo em ciência e tecnologia, iniciado antes da regulamentação formal do setor. Atuação guiada por fundamentação técnica e visão estratégica de longo prazo para o desenvolvimento sustentável da Cannabis no Brasil.",
        modalImageSrc: imgCompromissoModal,
        modalImageAlt: "Estufa agrícola moderna de pesquisa sustentável com paredes de vidro e plantas verdes sob iluminação solar"
      }
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
                onClick={() => handleCardClick(data)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Reutilizável para a seção Base Científica */}
      <ModalLight
        isOpen={activeCardData !== null}
        onClose={() => setActiveCardData(null)}
      >
        {activeCardData && (
          <BaseCientificaModalContent
            data={activeCardData.modalData}
          />
        )}
      </ModalLight>
    </section>
  );
}


