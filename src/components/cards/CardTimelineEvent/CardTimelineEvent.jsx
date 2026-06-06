import React from 'react';
import Image from 'next/image';
import './CardTimelineEvent.css';

export default function CardTimelineEvent({ year, text, imageSrc, imageAlt, isOdd }) {
  return (
    <div className="timeline-card-container">
      <div className="timeline-card-graphic-wrapper">
        {isOdd && <div className="timeline-branch-line line-down" aria-hidden="true" />}
        {!isOdd && <div className="timeline-branch-line line-up" aria-hidden="true" />}
        <div className="timeline-axis-dot" aria-hidden="true" />
        <div className="timeline-photo-circle">
          <Image
            src={imageSrc}
            alt={imageAlt || text}
            width={140}
            height={140}
            className="timeline-photo-img"
          />
        </div>
      </div>

      <div className="timeline-event-text-block">
        <h3 className="timeline-event-year-title">
          <span className="timeline-pin-icon" aria-hidden="true">📍</span> {year}
        </h3>
        <p className="timeline-event-description">
          {text}
        </p>
      </div>
    </div>
  );
}
