import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './BaseCientificaModalContent.css';

export default function BaseCientificaModalContent({ data }) {
  if (!data) return null;

  return (
    <div className="bc-modal-content-wrapper">
      {/* Left Area: Image */}
      <div className="bc-modal-image-col">
        <Image
          src={data.modalImageSrc}
          alt={data.modalImageAlt || data.title}
          fill
          sizes="(max-width: 1024px) 100vw, 509px"
          priority
          className="bc-modal-image"
        />
      </div>

      {/* Right Area: Text Content */}
      <div className="bc-modal-text-col">
        <div className="bc-modal-text-inner">
          <h2 className="bc-modal-title">
            {data.title}
          </h2>
          <p className="bc-modal-description">
            {data.description}
          </p>
          <Link
            href="/contato?assunto=Contato Técnico / Base Científica"
            className="bc-modal-cta-btn"
          >
            Falar com Pesquisador
          </Link>
        </div>
      </div>
    </div>
  );
}
