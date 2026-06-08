import React from 'react';
import './CardStructuredProjects.css';

export default function CardStructuredProjects({ title, iconNode, onClick }) {
  const handleKeyDown = (e) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article 
      className="structured-projects-card" 
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="structured-projects-card-content">
        <div className="structured-projects-card-icon-box">
          {iconNode}
        </div>
        <h3 className="structured-projects-card-title">
          {title}
        </h3>
      </div>
    </article>
  );
}

