import React from 'react';
import './CardTechnicalActing.css';

export default function CardTechnicalActing({ title, iconNode, onClick }) {
  return (
    <button 
      className="renato-technical-card" 
      onClick={onClick}
      type="button"
      aria-label={`Ver detalhes sobre ${title}`}
    >
      <div className="renato-technical-card-inner">
        <div className="renato-technical-card-icon-box" aria-hidden="true">
          {iconNode}
        </div>
        <h4 className="renato-technical-card-text">{title}</h4>
      </div>
    </button>
  );
}
