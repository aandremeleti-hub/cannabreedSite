import React from 'react';
import './CardProductiveOperation.css';

export default function CardProductiveOperation({ title, iconNode, cardId }) {
  return (
    <button
      type="button"
      className={`po-card po-card-${cardId}`}
      aria-label={`Ver detalhes sobre ${title}`}
      role="listitem"
    >
      <div className="po-card-icon-wrapper">
        {iconNode}
      </div>
      <span className="po-card-title">{title}</span>
    </button>
  );
}
