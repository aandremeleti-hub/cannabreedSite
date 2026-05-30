"use client";

import React from 'react';
import Image from 'next/image';
import IconReports from '@/components/icons/IconReports';
import IconForensics from '@/components/icons/IconForensics';
import IconOpinions from '@/components/icons/IconOpinions';
import IconTechnicalAssistance from '@/components/icons/IconTechnicalAssistance';
import IconCustody from '@/components/icons/IconCustody';
import IconSandbox from '@/components/icons/IconSandbox';
import IconAudit from '@/components/icons/IconAudit';
import regulatoryCrop from '@/assets/images/regulatory-crop.png';
import './RegulatoryCompliance.css';

export default function RegulatoryCompliance() {
  const cards = [
    {
      title: 'Análise',
      Icon: IconReports,
      id: 'analise'
    },
    {
      title: 'Dossiê',
      Icon: IconForensics,
      id: 'dossie'
    },
    {
      title: 'Rastreio',
      Icon: IconOpinions,
      id: 'rastreio'
    },
    {
      title: 'Controle THC',
      Icon: IconTechnicalAssistance,
      id: 'controle-thc'
    },
    {
      title: 'Custódia',
      Icon: IconCustody,
      id: 'custodia'
    },
    {
      title: 'Sandbox',
      Icon: IconSandbox,
      id: 'sandbox'
    },
    {
      title: 'Auditoria',
      Icon: IconAudit,
      id: 'auditoria'
    }
  ];

  return (
    <section className="regulatory-compliance" aria-labelledby="regulatory-headline">
      <div className="regulatory-compliance-content">
        {/* Left Column: Title and 7-Card Grid */}
        <div className="regulatory-compliance-left">
          <div className="regulatory-compliance-title-box">
            <h2 id="regulatory-headline" className="regulatory-compliance-title">
              Regulatório e Conformidade
            </h2>
            <div className="regulatory-compliance-description">
              <p className='regulatory-compliance-description-first-line'>
                Anvisa – RDCs 1.012; 1.013; 1.014 de 2026.
                <br />
                Serviços para empresas, associações e instituições de pesquisa.
              </p>
            </div>
          </div>

          <div className="regulatory-compliance-grid">
            {cards.map(({ title, Icon, id }) => (
              <div 
                key={id} 
                className="regulatory-compliance-card" 
                tabIndex="0"
                role="button"
                aria-label={`Ver mais sobre ${title}`}
              >
                <span className="regulatory-compliance-card-title">{title}</span>
                <div className="regulatory-compliance-card-icon-wrapper">
                  <Icon className="regulatory-compliance-card-icon" size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Outdoor Crop Field Illustration */}
        <div className="regulatory-compliance-right">
          <div className="regulatory-compliance-image-wrapper">
            <Image
              src={regulatoryCrop}
              alt="Plantação externa de cannabis em fileiras, protegida por telas laterais de arame e estacas de bambu sob céu limpo"
              className="regulatory-compliance-image"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
