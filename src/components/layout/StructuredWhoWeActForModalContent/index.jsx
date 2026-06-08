import React from 'react';
import Image from 'next/image';
import IconLogoMark from '@/components/icons/IconLogoMark';
import modalImg from '@/assets/images/structured-projects-who-modal.png';
import './style.css';

export default function StructuredWhoWeActForModalContent() {
  const whoWeActForList = [
    "Empresas do agronegócio",
    "Empresas de melhoramento genético",
    "Empreendedores com estrutura formalizada",
    "Laboratórios e indústrias",
    "Instituições de pesquisa",
    "Produtores com CNPJ",
    "Produtores individuais formalizados",
    "Associações estruturadas"
  ];

  return (
    <div className="structured-who-modal-container">
      {/* Left side: Image */}
      <div className="structured-who-modal-image-wrapper">
        <Image
          src={modalImg}
          alt="Para quem atuamos"
          fill
          sizes="(max-width: 768px) 100vw, 509px"
          className="structured-who-modal-img"
          priority
        />
      </div>

      {/* Right side: Light Green Content container */}
      <div className="structured-who-modal-info-wrapper">
        <div className="structured-who-modal-content">
          <h2 className="structured-who-modal-title">
            Para quem atuamos:
          </h2>
          
          <ul className="structured-who-modal-list" aria-label="Lista de organizações para quem atuamos">
            {whoWeActForList.map((item, index) => (
              <li key={index} className="structured-who-modal-list-item">
                <div className="structured-who-modal-icon-box">
                  <IconLogoMark size={22} className="structured-who-modal-bullet-icon" />
                </div>
                <span className="structured-who-modal-list-text">{item}</span>
              </li>
            ))}
          </ul>

          <p className="structured-who-modal-footnote">
            Nossa atuação é direcionada a projetos que exigem organização técnica, rastreabilidade, governança documental e alinhamento regulatório.
          </p>
        </div>
      </div>
    </div>
  );
}
