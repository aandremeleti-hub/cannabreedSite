import React from 'react';
import Image from 'next/image';
import './CardInadequateGenetics.css';

export default function CardInadequateGenetics({ title, iconSrc, iconNode }) {
  return (
    <article className="inadequate-genetics-card">
      <div className="inadequate-genetics-card-inner">
        <h3 className="inadequate-genetics-card-title">
          {title}
        </h3>
        <div className="inadequate-genetics-card-icon-wrapper">
          {iconNode ? (
            React.cloneElement(iconNode, {
              className: `inadequate-genetics-card-icon ${iconNode.props?.className || ''}`,
              'aria-hidden': 'true',
              preserveAspectRatio: 'xMidYMid meet',
              size: 48,
            })
          ) : (
            <Image
              src={iconSrc}
              alt=""
              className="inadequate-genetics-card-icon"
              // Use local styling definitions to control sizes, but set layout attributes for Next.js Image component
              width={48}
              height={48}
              priority
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </article>
  );
}
