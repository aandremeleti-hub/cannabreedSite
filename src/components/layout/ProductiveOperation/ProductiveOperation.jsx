"use client";

import React from 'react';
import Image from 'next/image';
import IconLayout from '../../icons/IconLayout';
import IconRoutines from '../../icons/IconRoutines';
import IconMetrics from '../../icons/IconMetrics';
import IconTeam from '../../icons/IconTeam';
import IconAnalysis from '../../icons/IconAnalysis';
import IconReview from '../../icons/IconReview';

import cultivoExternoImg from '@/assets/images/po-cultivo-externo.png';
import './ProductiveOperation.css';

const cardsData = [
  { id: 'layout', title: 'Layout', Icon: IconLayout },
  { id: 'routines', title: 'Rotinas', Icon: IconRoutines },
  { id: 'metrics', title: 'Métricas', Icon: IconMetrics },
  { id: 'team', title: 'Equipe', Icon: IconTeam },
  { id: 'analysis', title: 'Análise', Icon: IconAnalysis },
  { id: 'review', title: 'Revisão', Icon: IconReview },
];

export default function ProductiveOperation() {
  return (
    <section className="po-section" id="operacao-produtiva" aria-labelledby="po-section-title">
      <div className="po-container">
        {/* Lado Esquerdo: Textos e Grade de Cards */}
        <div className="po-content-left">
          <header className="po-header">
            <h2 id="po-section-title" className="po-title">
              Operação Produtiva
            </h2>
            <p className="po-description-subtitle">
              Cultivo, Pós-colheita e Padronização.
              <br />
              Serviços “mão na massa” para fazer a unidade produzir bem e com padrão.
            </p>

          </header>

          <div className="po-cards-grid" role="list">
            {cardsData.map((card) => (
              <button
                key={card.id}
                type="button"
                className={`po-card po-card-${card.id}`}
                aria-label={`Ver detalhes sobre ${card.title}`}
                role="listitem"
              >
                <div className="po-card-icon-wrapper">
                  <card.Icon className="po-card-icon" size={42} />
                </div>
                <span className="po-card-title">{card.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Lado Direito: Imagem do Cultivo Externo */}
        <div className="po-content-right">
          <Image
            src={cultivoExternoImg}
            alt="Campos de cultivo de Cannabis sativa com cercas de suporte e céu nublado"
            fill
            className="po-image"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
