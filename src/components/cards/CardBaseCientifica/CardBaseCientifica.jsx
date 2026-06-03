import React from 'react';
import Image from 'next/image';
import iconPremium from '@/assets/icons/icon-premium.svg';
import './CardBaseCientifica.css';

export default function CardBaseCientifica({ title, imageSrc, imageAlt, iconSrc, onClick }) {
  return (
    <article className="card-bc-container">
      {/* Absolute overlay badge icon */}
      <div className="card-bc-badge-wrapper">
        <Image
          src={iconSrc || iconPremium}
          alt=""
          width={50}
          height={50}
          className="card-bc-badge"
        />
      </div>

      {/* Card Image Area */}
      <div className="card-bc-image-wrapper">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 1024px) 100vw, 312px"
          className="card-bc-img"
        />
      </div>

      {/* Card Content Area */}
      <div className="card-bc-content">
        <div className="card-bc-content-inner">
          <h3 className="card-bc-title">
            {title}
          </h3>
          <button 
            type="button" 
            onClick={onClick} 
            className="card-bc-btn"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </article>
  );
}
