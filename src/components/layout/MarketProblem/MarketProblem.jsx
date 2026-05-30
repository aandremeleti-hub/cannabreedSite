import Image from 'next/image';
import iconMicroscope from '@/assets/icons/icon-microscope.svg';
import iconTable from '@/assets/icons/icon-table.svg';
import iconSyringe from '@/assets/icons/icon-syringe.svg';
import iconLetterLocker from '@/assets/icons/icon-letter-locker.svg';
import iconToolsCross from '@/assets/icons/icon-tools-cross.svg';
import plantImage from '@/assets/images/market-problem-plant.webp';
import bgImage from '@/assets/images/market-problem-bg.webp';
import './MarketProblem.css';

const PROBLEMS = [
  {
    id: 1,
    title: 'Base genética inadequada',
    icon: iconMicroscope,
    className: 'card-1',
    gapClass: 'gap-small',
  },
  {
    id: 2,
    title: 'P&D',
    icon: iconTable,
    className: 'card-2',
    gapClass: 'gap-large',
  },
  {
    id: 3,
    title: 'Ambiente regulatório',
    icon: iconLetterLocker,
    className: 'card-3',
    gapClass: 'gap-large',
  },
  {
    id: 4,
    title: 'Instabilidade de THC',
    icon: iconSyringe,
    className: 'card-4',
    gapClass: 'gap-large',
  },
  {
    id: 5,
    title: 'Sistema produtivo não estruturado',
    icon: iconToolsCross,
    className: 'card-5',
    gapClass: 'gap-large',
  },
];

export default function MarketProblem() {
  return (
    <section className="market-problem">
      {/* Background SVG vector layer */}
      <div className="market-problem-bg-container">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="market-problem-bg-image"
        />
      </div>

      {/* Main content wrapper */}
      <div className="market-problem-content-wrapper">
        <h2 className="market-problem-title">
          PROBLEMAS DO MERCADO
        </h2>

        {/* Central plant and staggered card layout */}
        <div className="market-problem-layout">
          {/* Plant illustration centered behind/staggered with cards */}
          <div className="market-problem-plant">
            <Image
              src={plantImage}
              alt="Planta de Cannabis medicinal"
              fill
              className="market-problem-plant-image"
            />
          </div>

          {/* Staggered cards */}
          {PROBLEMS.map((problem) => (
            <article
              key={problem.id}
              className={`market-problem-card ${problem.className}`}
            >
              <div className={`market-problem-card-content ${problem.gapClass}`}>
                <div className="market-problem-card-icon-wrapper">
                  <Image
                    src={problem.icon}
                    alt=""
                    width={67}
                    height={67}
                    className="market-problem-card-icon"
                  />
                </div>
                <h3 className="market-problem-card-title">
                  {problem.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
