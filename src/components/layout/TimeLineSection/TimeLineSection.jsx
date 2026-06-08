"use client";

import Image from 'next/image';
import ufvImg from '@/assets/images/logo_UFV 1.svg';
import pivoImg from '@/assets/images/timeline-pivo.jpg';
import beginningImg from '@/assets/images/timeline-beggining.jpg';
import expansionImg from '@/assets/images/timeline-expansion.png';
import secondImg from '@/assets/images/timeline-second.png';
import implementationImg from '@/assets/images/timeline-implementation.png';
import dnaImg from '@/assets/images/timeline-dna-image.png';
import CardTimeLine from '../../cards/CardTimeLine/CardTimeLine';
import './TimeLineSection.css';

export default function TimeLineSection() {
  const events = [
    {
      year: '2021',
      text: 'Nascimento da Cannabreed Brasil na Universidade Federal de Viçosa (UFV)',
      image: ufvImg,
      alt: 'Logo da Universidade Federal de Viçosa (UFV)',
      type: 'odd',
    },
    {
      year: '2022',
      text: 'Pivotagem estratégica para empresa de melhoramento genético',
      image: pivoImg,
      alt: 'Processo de cultivo e seleção genética de Cannabis',
      type: 'even',
    },
    {
      year: '2023',
      text: 'Início formal da pesquisa em sementes e melhoramento genético. Implantação do primeiro Banco Ativo de Germoplasma de Cannabis do Brasil (BAGC/UFV) - MG',
      image: beginningImg,
      alt: 'Ambiente de germoplasma e sementes de Cannabis na UFV',
      type: 'odd',
    },
    {
      year: '2024',
      text: 'Expansão estratégica para atuação em conformidade regulatória, com aderência ao marco regulatório brasileiro',
      image: expansionImg,
      alt: 'Estufa de cultivo de Cannabis em conformidade regulatória',
      type: 'even',
    },
    {
      year: '2025',
      text: 'Implantação do segundo Banco Ativo de Germoplasma de Cannabis (BAGC/UFRPE) – PE. Expansão territorial da infraestrutura genética e consolidação da presença no Nordeste',
      image: secondImg,
      alt: 'Segundo banco de germoplasma implantado na UFRPE no Nordeste',
      type: 'odd',
    },
    {
      year: '2026',
      text: 'Implementação do Programa Particular de Melhoramento Cannabreed Brasil para cânhamo industrial e Cannabis medicinal',
      image: implementationImg,
      alt: 'Estufa de melhoramento de cânhamo industrial e Cannabis medicinal',
      type: 'even',
    }
  ];

  return (
    <section className="timeline-section" id="linha-do-tempo" aria-labelledby="timeline-section-title">
      {/* DNA background central — visível apenas no desktop e agora de ponta a ponta */}
      <div className="timeline-dna-background" aria-hidden="true">
        <Image
          src={dnaImg}
          alt=""
          fill
          sizes="100vw"
          className="timeline-dna-image"
          priority={false}
        />
      </div>

      <div className="timeline-content-wrapper">
        <h2 id="timeline-section-title" className="timeline-main-title">
          LINHA DO TEMPO
        </h2>

        {/* Body: DNA side panel (esquerda) + events list (direita) */}
        <div className="timeline-body-wrapper">

          {/* DNA side panel — visível apenas em telas ≤ 1214px, oculto no desktop */}
          <div className="timeline-dna-side-panel" aria-hidden="true">
            <div className="timeline-dna-image-rotator">
              <Image
                src={dnaImg}
                alt=""
                fill
                sizes="2000px"
                className="timeline-dna-side-image"
                priority={false}
              />
            </div>
          </div>

          {/* Coluna principal: grid desktop / lista mobile */}
          <div className="timeline-layout-container">

            {/* Eixo horizontal desktop */}
            <div className="timeline-horizontal-axis" aria-hidden="true" />

            {/* Eixo vertical mobile */}
            <div className="timeline-vertical-axis" aria-hidden="true" />

            <ul className="timeline-events-list">
              {events.map((event, index) => {
                return (
                  <CardTimeLine
                    key={event.year}
                    year={event.year}
                    text={event.text}
                    image={event.image}
                    alt={event.alt}
                    type={event.type}
                    index={index}
                  />
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
