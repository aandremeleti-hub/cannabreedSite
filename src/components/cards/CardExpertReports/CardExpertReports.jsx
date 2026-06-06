import React from 'react';
import './CardExpertReports.css';

export default function CardExpertReports({ title, iconNode }) {
  return (
    <div 
      className="expert-reports-card" 
      tabIndex="0"
      role="button"
      aria-label={`Ver mais sobre ${title}`}
    >
      <div className="expert-reports-card-icon-wrapper">
        {iconNode}
      </div>
      <span className="expert-reports-card-title">{title}</span>
    </div>
  );
}
