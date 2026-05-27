import Image from 'next/image';
import cardImage from '@/assets/images/card-laudo.png';
import iconPremium from '@/assets/icons/icon-premium.svg';
import './CardLaudo.css';

export default function CardLaudo({ onClick }) {
  return (
    <article className="card-laudo-container">
      {/* Absolute overlay icon */}
      <div className="card-laudo-icon-wrapper">
        <Image
          src={iconPremium}
          alt=""
          width={53}
          height={58}
          className="card-laudo-icon"
        />
      </div>

      {/* Card Image Area */}
      <div className="card-laudo-image-wrapper">
        <Image
          src={cardImage}
          alt="Laudos e Perícias Técnicas em Cannabis"
          fill
          sizes="(max-width: 1024px) 100vw, 333px"
          className="card-laudo-img"
        />
      </div>

      {/* Card Content Area */}
      <div className="card-laudo-content">
        <div className="card-laudo-box-content">
          <div className="card-laudo-text-container">
            <h3 className="card-laudo-title">
              Laudos e Perícias Técnicas
            </h3>
            <p className="card-laudo-description">
              Laudos agronômicos, perícias em cultivo e material vegetal, 
              pareceres técnicos e assistência especializada em demandas produtivas e regulatórias.
            </p>
          </div>
          <button 
            type="button" 
            onClick={onClick} 
            className="card-laudo-btn"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </article>
  );
}
