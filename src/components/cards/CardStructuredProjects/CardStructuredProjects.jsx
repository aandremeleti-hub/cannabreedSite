import React from 'react';
import './CardStructuredProjects.css';

export default function CardStructuredProjects({ title, iconNode }) {
  return (
    <article className="structured-projects-card">
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
