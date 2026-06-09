"use client";

import React from 'react';
import './PDSection.css';

export default function PDSection({ title = "P&D" }) {
  return (
    <section className="pd-section" id="pd-info" aria-labelledby="pd-title">
      <div className="pd-content-wrapper">
        <header className="pd-header">
          {/* Grafismo decorativo de folhas à esquerda */}
          <div className="pd-graphic-container" aria-hidden="true"></div>

          {/* Conteúdo textual à direita */}
          <div className="pd-text-container">
            <h2 id="pd-title" className="pd-title">
              {title}
            </h2>
          </div>
        </header>
      </div>
    </section>
  );
}
