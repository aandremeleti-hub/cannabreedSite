import React from 'react';
import Image from 'next/image';
import './WhatCannabreedDoesModalContent.css';

export default function WhatCannabreedDoesModalContent({ data }) {
  if (!data) return null;

  return (
    <div className="what-cannabreed-does-modal-content-container">
      {/* Left Column: Image wrapper */}
      <div className="what-cannabreed-does-modal-left">
        <div className="what-cannabreed-does-modal-image-wrapper">
          <Image
            src={data.imageSrc}
            alt={data.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 545px"
            priority
            className="what-cannabreed-does-modal-image"
          />
        </div>
      </div>

      {/* Right Column: Text Information */}
      <div className="what-cannabreed-does-modal-right">
        <div className="what-cannabreed-does-modal-right-body">
          {/* Header */}
          <div className="what-cannabreed-does-modal-header">
            <h2 className="what-cannabreed-does-modal-title">
              {data.title}
            </h2>
            <p className="what-cannabreed-does-modal-description">
              {data.description}
            </p>
          </div>

          {/* List Section */}
          <div className="what-cannabreed-does-modal-list-section">
            <h3 className="what-cannabreed-does-modal-list-title">
              {data.listTitle}
            </h3>
            <ul className="what-cannabreed-does-modal-list" role="list">
              {data.listItems.map((item, index) => (
                <li key={index} className="what-cannabreed-does-modal-list-item" role="listitem">
                  <div className="what-cannabreed-does-modal-check-icon-container">
                    <Image
                      src={data.iconSrc}
                      alt=""
                      width={22}
                      height={30}
                      className="what-cannabreed-does-modal-check-icon"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="what-cannabreed-does-modal-item-text">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote Block */}
          {data.quote && (
            <blockquote className="what-cannabreed-does-modal-quote-box">
              <p className="what-cannabreed-does-modal-quote">
                {data.quote}
              </p>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
