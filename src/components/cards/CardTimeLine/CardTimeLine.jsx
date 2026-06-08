import React, { useState } from 'react';
import Image from 'next/image';
import './CardTimeLine.css';

export default function CardTimeLine({ year, text, image, alt, type, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const isOdd = type === 'odd';

  return (
    <li
      className={`timeline-event-item item-${type} timeline-event-${year}`}
      style={{ gridColumn: index + 1 }}
    >
      <div className={`timeline-card-container ${isOpen ? 'is-open' : ''}`}>
        <div
          className="timeline-card-graphic-wrapper"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          aria-label={`Mostrar informações do ano ${year}`}
        >
          {isOdd && <div className="timeline-branch-line line-down" aria-hidden="true" />}
          {!isOdd && <div className="timeline-branch-line line-up" aria-hidden="true" />}
          <div className="timeline-axis-dot" aria-hidden="true" />
          <div className="timeline-pulse-ring" aria-hidden="true" />
          <div className="timeline-photo-circle">
            <Image
              src={image}
              alt={alt}
              width={140}
              height={140}
              className="timeline-photo-img"
            />
          </div>
        </div>

        <div className="timeline-event-text-block">
          <div className="timeline-event-text-inner">
            <h3 className="timeline-event-year-title">
              <span className="timeline-pin-icon" aria-hidden="true">📍</span> {year}
            </h3>
            <p className="timeline-event-description">
              {text}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

