import React from 'react';
import './CardRegulatoryCompliance.css';

export default function CardRegulatoryCompliance({ title, iconNode }) {
  return (
    <div 
      className="regulatory-compliance-card" 
      tabIndex="0"
      role="button"
      aria-label={`Ver mais sobre ${title}`}
    >
      <div className="regulatory-compliance-card-icon-wrapper">
        {iconNode}
      </div>
      <span className="regulatory-compliance-card-title">{title}</span>
    </div>
  );
}
