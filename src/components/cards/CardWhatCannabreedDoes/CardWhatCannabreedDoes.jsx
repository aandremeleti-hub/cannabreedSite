import React from 'react';
import Image from 'next/image';
import './CardWhatCannabreedDoes.css';

export default function CardWhatCannabreedDoes({ title, description, imageSrc, iconSrc, onClick }) {
  return (
    <article className="card-wcd-container">
      {/* Absolute overlay icon */}
      <div className="card-wcd-icon-wrapper">
        <Image
          src={iconSrc}
          alt=""
          width={53}
          height={58}
          className="card-wcd-icon"
        />
      </div>

      {/* Card Image Area */}
      <div className="card-wcd-image-wrapper">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 333px"
          className="card-wcd-img"
        />
      </div>

      {/* Card Content Area */}
      <div className="card-wcd-content">
        <div className="card-wcd-box-content">
          <div className="card-wcd-text-container">
            <h3 className="card-wcd-title">
              {title}
            </h3>
            <p className="card-wcd-description">
              {description}
            </p>
          </div>
          <button 
            type="button" 
            onClick={onClick} 
            className="card-wcd-btn"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </article>
  );
}
