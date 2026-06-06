import React from 'react';
import './CardActing.css';

export default function CardActing({ title, Icon, onClick }) {
  return (
    <article className="acting-card-container" onClick={onClick}>
      <div className="acting-card-text-wrapper">
        <h3 className="acting-card-title">
          {title}
        </h3>
      </div>
      <div className="acting-card-icon-wrapper">
        <Icon
          className="acting-card-icon"
          size={48}
        />
      </div>
    </article>
  );
}
