import React from 'react';
import './CardTechnicalActing.css';

export default function CardTechnicalActing({ title, iconNode }) {
  return (
    <article className="renato-technical-card">
      <div className="renato-technical-card-inner">
        <div className="renato-technical-card-icon-box" aria-hidden="true">
          {iconNode}
        </div>
        <h4 className="renato-technical-card-text">{title}</h4>
      </div>
    </article>
  );
}
