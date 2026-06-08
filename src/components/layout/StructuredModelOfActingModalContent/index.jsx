import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import IconLogoMark from '@/components/icons/IconLogoMark';
import modalImg from '@/assets/images/structured-projects-model-modal.png';
import './style.css';

export default function StructuredModelOfActingModalContent() {
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
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

    checkScroll();
    const timeoutId = setTimeout(checkScroll, 200);

    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const modelPoints = [
    "Definição clara de escopo, objetivos técnicos e limites operacionais",
    "Planejamento baseado em parâmetros verificáveis e análise de dados",
    "Estrutura documental robusta e rastreabilidade integral",
    "Adequação ao marco regulatório vigente",
    "Indicadores de desempenho e metas compatíveis com a realidade produtiva"
  ];

  return (
    <div className="structured-model-modal-container">
      {/* Left side: Image */}
      <div className="structured-model-modal-image-wrapper">
        <Image
          src={modalImg}
          alt="Modelo de Atuação"
          fill
          sizes="(max-width: 768px) 100vw, 509px"
          className="structured-model-modal-img"
          priority
        />
      </div>

      {/* Right side: Light Green Content container */}
      <div className="structured-model-modal-info-wrapper">
        <div 
          className="structured-model-modal-scroll-area"
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          <div className="structured-model-modal-content">
            <h2 className="structured-model-modal-title">
              Modelo de Atuação e Compromisso Técnico
            </h2>
            
            <p className="structured-model-modal-desc">
              A Cannabreed adota um modelo de atuação técnico e estruturado, integrando genética, governança regulatória e organização operacional em uma abordagem sistêmica.
            </p>

            <p className="structured-model-modal-desc">
              Cada projeto é conduzido com base em método, evidência técnica e critérios objetivos, assegurando coerência entre planejamento, execução e conformidade.
            </p>

            <h3 className="structured-model-modal-subtitle">
              Nossa atuação é fundamentada em:
            </h3>

            <ul className="structured-model-modal-list" aria-label="Pontos fundamentais do nosso modelo de atuação">
              {modelPoints.map((item, index) => (
                <li key={index} className="structured-model-modal-list-item">
                  <div className="structured-model-modal-icon-box">
                    <IconLogoMark size={22} className="structured-model-modal-bullet-icon" />
                  </div>
                  <span className="structured-model-modal-list-text">{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="structured-model-modal-quote">
              Operamos exclusivamente dentro dos parâmetros legais e institucionais, com compromisso explícito com responsabilidade técnica, segurança regulatória e desenvolvimento sustentável do setor no Brasil.
            </blockquote>
          </div>
        </div>

        {/* Scroll Arrow Indicator */}
        {showScrollArrow && (
          <div className="structured-model-modal-scroll-indicator" aria-hidden="true">
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
