import React from 'react';
import CardInadequateGenetics from '../../cards/CardInadequateGenetics/CardInadequateGenetics';
import { PROBLEMS_DETAIL_DATA } from '../../../data/problemsDetailData';
import './ProblemDetailSection.css';

export default function ProblemDetailSection({ problemId }) {
  const data = PROBLEMS_DETAIL_DATA[problemId];

  if (!data) {
    return null;
  }

  return (
    <section 
      className="problem-detail-section" 
      id={`problem-detail-${problemId}`}
      aria-labelledby={`problem-detail-headline-${problemId}`}
    >
      <div className="problem-detail-container">
        {/* Left Column: Title with vertical indicator and description */}
        <div className="problem-detail-info-column">
          <div className="problem-detail-header-box">
            <div className="problem-detail-indicator" aria-hidden="true" />
            <h2 id={`problem-detail-headline-${problemId}`} className="problem-detail-title">
              {data.title}
            </h2>
          </div>
          <p className="problem-detail-description">
            {data.description}
          </p>
        </div>

        {/* Right Column: Cards Grid and Green Quote */}
        <div className="problem-detail-details-column">
          <div className="problem-detail-grid" role="list">
            {data.criticalPoints.map((point) => (
              <div role="listitem" key={point.id}>
                <CardInadequateGenetics
                  title={point.title}
                  iconSrc={!React.isValidElement(point.icon) ? point.icon : undefined}
                  iconNode={React.isValidElement(point.icon) ? point.icon : undefined}
                />
              </div>
            ))}
          </div>

          <blockquote className="problem-detail-quote-box">
            <p className="problem-detail-quote">
              {data.quote}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
