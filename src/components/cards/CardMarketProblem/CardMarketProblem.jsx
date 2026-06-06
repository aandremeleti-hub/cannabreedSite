import React from 'react';
import Image from 'next/image';
import './CardMarketProblem.css';

export default function CardMarketProblem({ title, iconSrc, className, gapClass }) {
  return (
    <article className={`market-problem-card ${className || ''}`}>
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
