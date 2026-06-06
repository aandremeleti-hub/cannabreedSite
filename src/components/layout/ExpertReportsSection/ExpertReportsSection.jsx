"use client";

import React from 'react';
import Image from 'next/image';
import IconReports from '@/components/icons/IconReports';
import IconForensics from '@/components/icons/IconForensics';
import IconOpinions from '@/components/icons/IconOpinions';
import IconTechnicalAssistance from '@/components/icons/IconTechnicalAssistance';
import forensicMortar from '@/assets/images/forensic-mortar.png';
import CardExpertReports from '../../cards/CardExpertReports/CardExpertReports';
import './ExpertReportsSection.css';

export default function ExpertReportsSection() {
  const cards = [
    {
      title: 'Laudos',
      Icon: IconReports,
      id: 'laudos'
    },
    {
      title: 'Perícia',
      Icon: IconForensics,
      id: 'pericia'
    },
    {
      title: 'Pareceres',
      Icon: IconOpinions,
      id: 'pareceres'
    },
    {
      title: 'Assistência Técnica',
      Icon: IconTechnicalAssistance,
      id: 'assistencia'
    }
  ];


  return (
    <section className="expert-reports" aria-labelledby="expert-reports-headline">

      <div className="expert-reports-content">
        {/* Left Column: Text Content and Card Grid */}
        <div className="expert-reports-left">
          <div className="expert-reports-title-box">
            <h2 id="expert-reports-headline" className="expert-reports-title">
              Periciais e Laudos
            </h2>
            <p className="expert-reports-description">
              Serviços Periciais e Laudos Técnicos para processos judiciais, conformidade e defesa técnica
            </p>
          </div>

          <div className="expert-reports-grid">
            {cards.map(({ title, Icon, id }) => (
              <CardExpertReports
                key={id}
                title={title}
                iconNode={<Icon className="expert-reports-card-icon" size={48} />}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Rounded Illustration Image */}
        <div className="expert-reports-right">
          <div className="expert-reports-image-wrapper">
            <Image
              src={forensicMortar}
              alt="Mão com luva azul triturando material vegetal verde em um almofariz com pistilo de porcelana"
              fill
              className="expert-reports-image"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
