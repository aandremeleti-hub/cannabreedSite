import Image from 'next/image';
import cardImage from '@/assets/images/card-genetica.png';
import iconDiagnosis from '@/assets/icons/icon-diagnosis.svg';
import './CardGenetica.css';

export default function CardGenetica({ onClick }) {
  return (
    <article className="card-genetica-container">
      {/* Absolute overlay icon */}
      <div className="card-genetica-icon-wrapper">
        <Image
          src={iconDiagnosis}
          alt=""
          width={53}
          height={58}
          className="card-genetica-icon"
        />
      </div>

      {/* Card Image Area */}
      <div className="card-genetica-image-wrapper">
        <Image
          src={cardImage}
          alt="Genética e Melhoramento de Cannabis"
          fill
          sizes="(max-width: 1024px) 100vw, 333px"
          className="card-genetica-img"
        />
      </div>

      {/* Card Content Area */}
      <div className="card-genetica-content">
        <div className="card-genetica-box-content">
          <div className="card-genetica-text-container">
            <h3 className="card-genetica-title">
              Genética e Melhoramento
            </h3>
            <p className="card-genetica-description">
              Avaliação, desenvolvimento e adaptação de materiais genéticos. 
              Foco em estabilidade, previsibilidade e desempenho em ambiente tropical.
            </p>
          </div>
          <button 
            type="button" 
            onClick={onClick} 
            className="card-genetica-btn"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </article>
  );
}
