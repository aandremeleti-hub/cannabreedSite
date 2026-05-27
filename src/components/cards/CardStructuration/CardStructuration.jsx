import Image from 'next/image';
import cardImage from '@/assets/images/card-structuration.jpeg';
import iconTableDolar from '@/assets/icons/icon-table-dolar.svg';
import './CardStructuration.css';

export default function CardStructuration({ onClick }) {
  return (
    <article className="card-structuration-container">
      {/* Absolute overlay icon */}
      <div className="card-structuration-icon-wrapper">
        <Image
          src={iconTableDolar}
          alt=""
          width={53}
          height={58}
          className="card-structuration-icon"
        />
      </div>

      {/* Card Image Area */}
      <div className="card-structuration-image-wrapper">
        <Image
          src={cardImage}
          alt="Estruturação Regulatória para Cannabis"
          fill
          sizes="(max-width: 1024px) 100vw, 333px"
          className="card-structuration-img"
        />
      </div>

      {/* Card Content Area */}
      <div className="card-structuration-content">
        <div className="card-structuration-box-content">
          <div className="card-structuration-text-container">
            <h3 className="card-structuration-title">
              Estruturação Regulatória
            </h3>
            <p className="card-structuration-description">
              Enquadramento estratégico, documentação e implementação de sistemas de 
              conformidade para viabilizar operações seguras. (RDCs 2026 / Sandbox).
            </p>
          </div>
          <button 
            type="button" 
            onClick={onClick} 
            className="card-structuration-btn"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </article>
  );
}
