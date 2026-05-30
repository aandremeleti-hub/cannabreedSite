import Image from 'next/image';
import imgManufaturaAgricola from '@/assets/images/manufatura-agricola.png';
import IconProjeto from '@/components/icons/IconProjeto';
import IconExecucao from '@/components/icons/IconExecucao';
import IconControle from '@/components/icons/IconControle';
import IconColheita from '@/components/icons/IconColheita';
import IconPreparo from '@/components/icons/IconPreparo';
import IconEmbalagem from '@/components/icons/IconEmbalagem';
import IconExpedicao from '@/components/icons/IconExpedicao';
import IconEscopoBg from '@/components/icons/IconEscopoBg';
import IconEscopoSmall from '@/components/icons/IconEscopoSmall';
import './ContractedManufacturing.css';

export default function ContractedManufacturing() {
  const cards = [
    { id: 'escopo', title: 'Escopo', Icon: null },
    { id: 'projeto', title: 'Projeto', Icon: IconProjeto },
    { id: 'execucao', title: 'Execução', Icon: IconExecucao },
    { id: 'controle', title: 'Controle', Icon: IconControle },
    { id: 'colheita', title: 'Colheita', Icon: IconControle },
    { id: 'preparo', title: 'Preparo', Icon: IconPreparo },
    { id: 'embalagem', title: 'Embalagem', Icon: IconEmbalagem },
    { id: 'expedicao', title: 'Expedição', Icon: IconExpedicao },
  ];

  return (
    <section className="cdmo-section" id="manufatura-contratada" aria-labelledby="cdmo-section-title">
      <div className="cdmo-container">
        
        {/* Content Side */}
        <div className="cdmo-content">
          <div className="cdmo-header">
            <h2 id="cdmo-section-title" className="cdmo-title">
              Manufatura Agrícola Contratada
            </h2>
            <p className="cdmo-description">
              CDMO agrícola de <span className="cdmo-highlight-italic">Cannabis sativa</span> L. com manufatura terceirizada do cultivo à embalagem. Inclui cultivo, colheita, secagem, <span className="cdmo-highlight-italic">trimming</span> e embalagem. Produção de biomassa vegetal, sem extração industrial. Etapas modulares.
            </p>
          </div>

          <div className="cdmo-cards-wrapper">
            <ul className="cdmo-cards-grid" aria-label="Etapas modulares da manufatura contratada">
              {cards.map((card) => (
                <li className="cdmo-card-item" key={card.id}>
                  <article className="cdmo-card">
                    <h3 className="cdmo-card-title">{card.title}</h3>
                    <div className="cdmo-card-icon-container">
                      {card.id === 'escopo' ? (
                        <div className="cdmo-card-escopo-icon" aria-hidden="true">
                          <IconEscopoBg className="cdmo-card-icon-bg" />
                          <IconEscopoSmall className="cdmo-card-icon-fg" />
                        </div>
                      ) : (
                        <card.Icon
                          className="cdmo-card-icon"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Side */}
        <div className="cdmo-image-wrapper">
          <Image
            src={imgManufaturaAgricola}
            alt="Mão de um profissional da Cannabreed segurando três mudas enraizadas de Cannabis sativa em cubos de propagação"
            fill
            sizes="(max-width: 1024px) 100vw, 382px"
            className="cdmo-image"
            placeholder="blur"
          />
        </div>

      </div>
    </section>
  );
}
