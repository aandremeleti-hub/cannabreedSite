"use client";

import React from 'react';
import IconAudit from '@/components/icons/IconAudit';
import IconExecucao from '@/components/icons/IconExecucao';
import IconIntegracao from '@/components/icons/IconIntegracao';
import './DiferencialTecnico.css';

export default function DiferencialTecnico() {
  const differentials = [
    {
      id: 'conformidade-regulatoria',
      title: 'Conformidade Regulatória Aplicada',
      description: 'Regulação aplicada à prática, com estrutura técnica capaz de atender às exigências formais e sustentar auditorias. A atuação é orientada por documentação consistente, rastreabilidade e aderência às normas vigentes, reduzindo riscos e ampliando a segurança operacional.',
      Icon: IconAudit,
    },
    {
      id: 'execucao-tecnica',
      title: 'Execução Técnica em Campo',
      description: 'Implementação prática de processos com padrão, controle e foco em produtividade. A operação é estruturada com protocolos claros, indicadores e organização técnica, assegurando previsibilidade e estabilidade produtiva.',
      Icon: IconExecucao,
    },
    {
      id: 'integracao-estrutural',
      title: 'Integração Estrutural Completa',
      description: 'Integração entre ciência, regulação e operação em um modelo unificado, evitando fragmentação entre áreas. A abordagem elimina estruturas isoladas e conecta pesquisa, conformidade e execução produtiva em uma única arquitetura técnica.',
      Icon: IconIntegracao,
    },
  ];

  return (
    <section className="dt-section" aria-labelledby="dt-section-title">
      <div className="dt-container">
        <header className="dt-header">
          <h2 id="dt-section-title" className="dt-title">
            Diferencial Técnico
          </h2>
        </header>

        <div className="dt-grid" role="list">
          {differentials.map(({ id, title, description, Icon }) => (
            <article 
              key={id} 
              className="dt-card" 
              role="listitem"
              tabIndex="0"
              aria-labelledby={`title-${id}`}
            >
              <div className="dt-card-icon-wrapper" aria-hidden="true">
                <Icon className="dt-card-icon" />
              </div>
              <div className="dt-card-content">
                <h3 id={`title-${id}`} className="dt-card-title">
                  {title}
                </h3>
                <p className="dt-card-description">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
