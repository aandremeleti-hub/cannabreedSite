"use client";

import React from 'react';
import Image from 'next/image';
import IconReports from '@/components/icons/IconReports';
import IconForensics from '@/components/icons/IconForensics';
import IconOpinions from '@/components/icons/IconOpinions';
import IconTechnicalAssistance from '@/components/icons/IconTechnicalAssistance';
import forensicMortar from '@/assets/images/forensic-mortar.png';
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

  React.useEffect(() => {
    const sourceContent = document.querySelector('.regulatory-compliance-content');
    const targetContent = document.querySelector('.expert-reports-content');
    const sourceSection = document.querySelector('.regulatory-compliance');
    const targetSection = document.querySelector('.expert-reports');

    if (!sourceContent || !targetContent) return;

    const syncHeights = () => {
      if (window.innerWidth > 1024) {
        if (sourceSection && targetSection) {
          const sectionHeight = sourceSection.getBoundingClientRect().height;
          targetSection.style.height = `${sectionHeight}px`;
        }
      } else {
        if (targetSection) {
          targetSection.style.height = 'auto';
        }
      }
    };

    // Initial run
    syncHeights();

    // Event listener for resize
    window.addEventListener('resize', syncHeights);

    // ResizeObserver to detect layout shifts and dynamic height changes of the source component
    const resizeObserver = new ResizeObserver(syncHeights);
    resizeObserver.observe(sourceContent);

    return () => {
      window.removeEventListener('resize', syncHeights);
      resizeObserver.disconnect();
    };
  }, []);

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
              <div 
                key={id} 
                className="expert-reports-card" 
                tabIndex="0"
                role="button"
                aria-label={`Ver mais sobre ${title}`}
              >
                <span className="expert-reports-card-title">{title}</span>
                <div className="expert-reports-card-icon-wrapper">
                  <Icon className="expert-reports-card-icon" size={48} />
                </div>
              </div>
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
