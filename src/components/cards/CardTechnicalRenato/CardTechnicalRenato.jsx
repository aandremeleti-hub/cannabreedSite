import React from 'react';
import './CardTechnicalRenato.css';

export default function CardTechnicalRenato({ title, Icon, onClick }) {
  return (
    <article className="renato-technical-card" onClick={onClick}>
      <div className="renato-technical-card-inner">
        <div className="renato-technical-card-icon-box" aria-hidden="true">
          <Icon
            className="renato-technical-card-icon"
            size={42}
          />
        </div>
        <h4 className="renato-technical-card-text">{title}</h4>
      </div>
    </article>
  );
}
