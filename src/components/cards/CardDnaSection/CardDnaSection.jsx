import React from 'react';
import Image from 'next/image';
import './CardDnaSection.css';

export default function CardDnaSection({ title, iconSrc, className, content }) {
  return (
    <article className={`dna-section-card ${className}`} aria-labelledby={`${className}-title`}>
      <header className="dna-section-card-header">
        <h3 id={`${className}-title`} className="dna-section-card-title">
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
        {content}
      </div>
    </article>
  );
}
