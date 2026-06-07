import React from 'react';
import Image from 'next/image';
import './CardMarketProblem.css';

export default function CardMarketProblem({ title, iconSrc, className, gapClass, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) onClick();
    }
  };

  return (
    <article 
      className={`market-problem-card ${className || ''}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Mais informações sobre: ${title}`}
    >
      <div className={`market-problem-card-content ${gapClass || ''}`}>
        <div className="market-problem-card-icon-wrapper">
          <Image
            src={iconSrc}
            alt=""
            width={67}
            height={67}
            className="market-problem-card-icon"
          />
        </div>
        <h3 className="market-problem-card-title">
          {title}
        </h3>
      </div>
    </article>
  );
}

