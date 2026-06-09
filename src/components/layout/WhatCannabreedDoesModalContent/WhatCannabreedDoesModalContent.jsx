import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './WhatCannabreedDoesModalContent.css';

export default function WhatCannabreedDoesModalContent({ data }) {
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      // Show arrow if we can scroll down more (with a 15px threshold to account for fractional pixels)
      const canScrollMore = scrollHeight - scrollTop - clientHeight > 15;
      setShowScrollArrow(canScrollMore);
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        setShowScrollArrow(scrollHeight - scrollTop - clientHeight > 15);
      }
    };

    // Run immediately and after a short timeout to ensure contents are rendered
    checkScroll();
    const timeoutId = setTimeout(checkScroll, 200);

    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkScroll);
    };
  }, [data]);

  if (!data) return null;

  return (
    <div 
      className="what-cannabreed-does-modal-content-container"
    >
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
        <div className="what-cannabreed-does-modal-scroll-area">
          <div 
            className="what-cannabreed-does-modal-right-body"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
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

            {/* CTA Button */}
            <div className="what-cannabreed-does-modal-cta-wrapper">
              <Link
                href={`/contato?assunto=Interesse em ${encodeURIComponent(data.title)}`}
                className="what-cannabreed-does-modal-cta-btn"
              >
                Falar com Especialista
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Arrow Indicator */}
        {showScrollArrow && (
          <div className="what-cannabreed-does-modal-scroll-indicator" aria-hidden="true">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
