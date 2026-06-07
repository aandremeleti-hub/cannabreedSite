import React from 'react';
import Image from 'next/image';
import './RenatoTechnicalActingModalContent.css';

export default function RenatoTechnicalActingModalContent({ data, iconNode }) {
  if (!data) return null;

  return (
    <div className="renato-modal-content-container">
      {/* Top Image Section */}
      <div className="renato-modal-top-image-container">
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          fill
          sizes="(max-width: 509px) 100vw, 509px"
          priority
          className="renato-modal-top-image"
        />
      </div>

      {/* Mid Overlapping Icon Badge */}
      {iconNode && (
        <div className="renato-modal-icon-badge" aria-hidden="true">
          {React.cloneElement(iconNode, {
            className: `renato-modal-badge-icon ${iconNode.props?.className || ''}`,
            size: 38
          })}
        </div>
      )}

      {/* Bottom Text Content Section */}
      <div className="renato-modal-bottom-text-container">
        <div className="renato-modal-text-wrap">
          {data.text}
        </div>
      </div>
    </div>
  );
}
