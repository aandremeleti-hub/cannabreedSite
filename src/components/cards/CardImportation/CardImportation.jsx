import Image from 'next/image';
import cardImage from '@/assets/images/card-importation.jpeg';
import iconTruck from '@/assets/icons/icon-truck.svg';
import './CardImportation.css';

export default function CardImportation({ onClick }) {
  return (
    <article className="card-importation-container">
      {/* Absolute overlay icon */}
      <div className="card-importation-icon-wrapper">
        <Image
          src={iconTruck}
          alt=""
          width={53}
          height={58}
          className="card-importation-icon"
        />
      </div>

      {/* Card Image Area */}
      <div className="card-importation-image-wrapper">
        <Image
          src={cardImage}
          alt="Importação de Sementes de Cannabis"
          fill
          sizes="(max-width: 1024px) 100vw, 333px"
          className="card-importation-img"
        />
      </div>

      {/* Card Content Area */}
      <div className="card-importation-content">
        <div className="card-importation-box-content">
          <div className="card-importation-text-container">
            <h3 className="card-importation-title">
              Importação de Sementes
            </h3>
            <p className="card-importation-description">
              Organização técnica e documental para introdução, 
              regularização e proteção de materiais genéticos e Cultivares.
            </p>
          </div>
          <button 
            type="button" 
            onClick={onClick} 
            className="card-importation-btn"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </article>
  );
}
