"use client";

import React, { useState } from 'react';
import IconLogoMark from '@/components/icons/IconLogoMark';
import './WhatWeDontDo.css';

export default function WhatWeDontDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "1. Atuação Exclusivamente em Conformidade",
      content: "Não atuamos fora da lei nem conduzimos atividades em desconformidade com o marco regulatório aplicável. Toda atuação é estruturada dentro das normas vigentes e dos parâmetros técnicos exigidos."
    },
    {
      title: "2. Não Participação no Mercado Informal",
      content: "Não operamos com materiais sem origem comprovada ou sem rastreabilidade adequada. Trabalhamos exclusivamente com documentação, registro e controle técnico formalizados."
    },
    {
      title: "3. Não Atuação no Segmento Recreativo",
      content: "Nossa atuação é estritamente técnica, científica e regulatória. Não participamos do segmento recreativo."
    },
    {
      title: "4. Compromisso com Metas Realistas",
      content: "Não fazemos promessas irreais. Trabalhamos com metas técnicas, critérios objetivos, prazos factíveis e entregáveis compatíveis com a realidade de cada projeto."
    },
    {
      title: "5. Projetos Apenas com Planejamento e Viabilidade",
      content: "Não assumimos projetos sem diagnóstico prévio, definição clara de escopo, requisitos técnicos e condições mínimas para execução responsável."
    }
  ];

  const toggleItem = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="wwdd-section" aria-labelledby="wwdd-section-title">
      <div className="wwdd-container">
        <header className="wwdd-header">
          <div className="wwdd-title-row">
            <div className="wwdd-logo-wrapper" aria-hidden="true">
              <IconLogoMark className="wwdd-logo-icon" size={38} />
            </div>
            <h2 id="wwdd-section-title" className="wwdd-title">
              O Que Não Fazemos
            </h2>
          </div>
          <p className="wwdd-subtitle">
            Proteção jurídica e posicionamento estratégico que delimitam nossa atuação profissional.
          </p>
        </header>

        <div className="wwdd-accordion">
          {items.map((item, idx) => {
            const isOpen = activeIndex === idx;
            const panelId = `wwdd-panel-${idx}`;
            const headerId = `wwdd-header-${idx}`;

            return (
              <div
                key={idx}
                className={`wwdd-accordion-item ${isOpen ? 'wwdd-accordion-item-open' : ''}`}
              >
                <button
                  id={headerId}
                  className="wwdd-accordion-header-btn"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="wwdd-accordion-item-title">{item.title}</span>
                  <span className="wwdd-accordion-item-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={panelId}
                  className="wwdd-accordion-content-panel"
                  role="region"
                  aria-labelledby={headerId}
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? '1' : '0',
                    visibility: isOpen ? 'visible' : 'hidden'
                  }}
                >
                  <div className="wwdd-accordion-content-inner">
                    <p className="wwdd-accordion-item-description">{item.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
