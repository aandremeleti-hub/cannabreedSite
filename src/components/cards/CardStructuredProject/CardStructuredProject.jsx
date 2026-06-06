import React from 'react';
import './CardStructuredProject.css';

export default function CardStructuredProject({ title, Icon, className, onClick }) {
  return (
    <article className={`structured-projects-card ${className || ''}`} onClick={onClick}>
      <div className="structured-projects-card-content">
        <div className="structured-projects-card-icon-box">
          <Icon
            className="structured-projects-card-icon"
            size={67}
          />
        </div>
        <h3 className="structured-projects-card-title">
          {title}
        </h3>
      </div>
    </article>
  );
}
