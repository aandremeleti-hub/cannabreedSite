"use client";

import React from 'react';
import './PDSection.css';

export default function PDSection() {
  return (
    <section className="pd-section" id="pd-info" aria-labelledby="pd-title">
      <div className="pd-content-wrapper">
        <header className="pd-header">
          {/* Grafismo decorativo de folhas à esquerda */}
          <div className="pd-graphic-container" aria-hidden="true"></div>

          {/* Conteúdo textual à direita */}
          <div className="pd-text-container">
            <h2 id="pd-title" className="pd-title">
              P&D
            </h2>
            <div className="pd-description">
              <p className="pd-desc-paragraph">Ciência aplicada. Operação auditável. Sem espetáculo.</p>
              <p className="pd-desc-paragraph">Menos tendência. Mais genética, padrão e rastreabilidade.</p>
              <p className="pd-desc-paragraph">Não é sobre hype — é sobre processo, dados e conformidade.</p>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
