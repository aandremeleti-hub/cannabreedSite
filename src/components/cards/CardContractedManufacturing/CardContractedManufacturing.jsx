import React from 'react';
import './CardContractedManufacturing.css';

export default function CardContractedManufacturing({ title, iconNode }) {
  return (
    <article className="cdmo-card">
      <div className="cdmo-card-icon-container">
        {iconNode}
      </div>
      <h3 className="cdmo-card-title">{title}</h3>
    </article>
  );
}
