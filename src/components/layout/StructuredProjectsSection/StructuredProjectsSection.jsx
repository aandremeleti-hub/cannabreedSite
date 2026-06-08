"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoMark from '@/assets/icons/structured-projects-logomark.svg';
import titleBg from '@/assets/images/structured-projects-title.jpg';
import bottomBg from '@/assets/images/structured-projects-bottom.jpg';
import IconStructuredWho from '@/components/icons/IconStructuredWho';
import IconStructuredModel from '@/components/icons/IconStructuredModel';
import CardStructuredProjects from '@/components/cards/CardStructuredProjects/CardStructuredProjects';
import ModalLight from '@/components/layout/Modal/ModalLight';
import StructuredWhoWeActForModalContent from '@/components/layout/StructuredWhoWeActForModalContent';
import StructuredModelOfActingModalContent from '@/components/layout/StructuredModelOfActingModalContent';
import './StructuredProjectsSection.css';

export default function StructuredProjectsSection() {
  const [activeModal, setActiveModal] = useState(null);

  const cardsData = [
    {
      title: "Para quem atuamos",
      iconNode: <IconStructuredWho className="structured-projects-card-icon" size={67} />,
      onClick: () => setActiveModal('who')
    },
    {
      title: "Modelo de atuação",
      iconNode: <IconStructuredModel className="structured-projects-card-icon" size={67} />,
      onClick: () => setActiveModal('model')
    }
  ];


  return (
    <section className="structured-projects" id="projetos-estruturados" aria-labelledby="structured-projects-main-title">
      
      {/* Upper Part: Title Container with Left LogoMark and Right Title Box */}
      <div className="structured-projects-title-container">
        
        {/* Background Image & Gradient Overlay */}
        <div className="structured-projects-title-bg-wrapper">
          <Image
            src={titleBg}
            alt=""
            fill
            sizes="100vw"
            className="structured-projects-title-bg-img"
            priority
          />
          <div className="structured-projects-title-overlay" />
        </div>

        {/* Content Wrapper */}
        <div className="structured-projects-title-content">
          <div className="structured-projects-logo-box">
            <Image
              src={logoMark}
              alt="Marca da Cannabreed"
              width={194}
              height={205}
              className="structured-projects-logomark"
            />
          </div>
          
          <div className="structured-projects-title-box">
            <h2 id="structured-projects-main-title" className="structured-projects-title">
              ATUAÇÃO TÉCNICA PARA PROJETOS ESTRUTURADOS
            </h2>
            <p className="structured-projects-subtitle">
              A Cannabreed atua junto a organizações que demandam base científica sólida, estrutura técnica consistente e conformidade regulatória para desenvolver projetos de Cannabis e cânhamo no Brasil.
            </p>
          </div>
        </div>

      </div>

      {/* Middle Part: Cards Container */}
      <div className="structured-projects-cards-wrapper">
        <div className="structured-projects-cards-container">
          {cardsData.map((data, index) => (
            <CardStructuredProjects 
              key={index} 
              title={data.title} 
              iconNode={data.iconNode} 
              onClick={data.onClick}
            />
          ))}
        </div>
      </div>

      {/* Bottom Part: Background Image, Gradient Overlay, and Text blocks */}
      <div className="structured-projects-bottom-container">
        
        {/* Background Image & Gradient Overlay */}
        <div className="structured-projects-bottom-bg-wrapper">
          <Image
            src={bottomBg}
            alt=""
            fill
            sizes="100vw"
            className="structured-projects-bottom-bg-img"
          />
          <div className="structured-projects-bottom-overlay" />
        </div>

        {/* Content Wrapper */}
        <div className="structured-projects-bottom-content">
          <div className="structured-projects-bottom-left-text">
            <p>
              A condução técnica é orientada por método científico, padronização de processos e controle de variáveis críticas, reduzindo incertezas e ampliando previsibilidade.
            </p>
          </div>
          <div className="structured-projects-bottom-right-text">
            <p>
              Operamos exclusivamente dentro dos parâmetros legais and institucionais, com compromisso explícito com responsabilidade técnica, segurança regulatória e desenvolvimento sustentável do setor no Brasil.
            </p>
          </div>
        </div>

        {/* CTA Button Wrapper */}
        <div className="structured-projects-cta-wrapper">
          <Link
            href="/contato?assunto=Projetos Estruturados"
            className="structured-projects-cta-btn"
          >
            Iniciar Projeto Estruturado
          </Link>
        </div>

      </div>

      {/* Light Overlay Modals */}
      <ModalLight isOpen={activeModal !== null} onClose={() => setActiveModal(null)}>
        {activeModal === 'who' && <StructuredWhoWeActForModalContent />}
        {activeModal === 'model' && <StructuredModelOfActingModalContent />}
      </ModalLight>

    </section>
  );
}

