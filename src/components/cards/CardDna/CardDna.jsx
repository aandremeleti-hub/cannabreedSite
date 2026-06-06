import React from 'react';
import Image from 'next/image';
import './CardDna.css';

export default function CardDna({ title, iconSrc, className, children }) {
  return (
    <article className={`dna-section-card ${className || ''}`} aria-labelledby={`${className || 'card'}-title`}>
      <header className="dna-section-card-header">
        <h3 id={`${className || 'card'}-title`} className="dna-section-card-title">
          {title}
        </h3>
        <div className="dna-section-card-icon-container">
          <Image
            src={iconSrc}
            alt=""
            width={102}
            height={108}
            className="dna-section-card-icon"
            aria-hidden="true"
          />
        </div>
      </header>
      <div className="dna-section-card-body">
        {children}
      </div>
    </article>
  );
}
