"use client";

import React from 'react';
import IconLeafFilled from '../../icons/IconLeafFilled';
import IconLeafOutline from '../../icons/IconLeafOutline';
import './PDSection.css';

export default function PDSection() {
  return (
    <section className="pd-section" id="pd-info" aria-labelledby="pd-title">
      <div className="pd-content-wrapper">
        <header className="pd-header">
          {/* Grafismo decorativo de folhas à esquerda */}
          <div className="pd-graphic-container" aria-hidden="true">
            <div className="pd-leaf-grid">
              <IconLeafFilled className="pd-leaf leaf-1" />
              <IconLeafOutline className="pd-leaf leaf-2" />
              <IconLeafFilled className="pd-leaf leaf-3" />
              <IconLeafOutline className="pd-leaf leaf-4" />
              <IconLeafFilled className="pd-leaf leaf-5" />
            </div>
          </div>

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
