import Image from 'next/image';
import img1 from '@/assets/images/authority-image-1.webp';
import img2 from '@/assets/images/authority-image-2.webp';
import img3 from '@/assets/images/authority-image-3.webp';
import iconParceria from '@/assets/icons/icon-parceria.svg';
import iconDoutores from '@/assets/icons/icon-doutores.svg';
import iconGermoplasma from '@/assets/icons/icon-germoplasma.svg';
import iconAtuacao from '@/assets/icons/icon-atuacao.svg';
import './AuthoritySection.css';

export default function AuthoritySection() {
  return (
    <section className="authority-section" id="ped" aria-labelledby="authority-title">
      <div className="authority-content-wrapper">
        <h2 id="authority-title" className="authority-main-title">
          AUTORIDADE EM DESTAQUE
        </h2>
        <div className="authority-general-container">
          
          {/* Collage de Imagens (Esquerda) */}
          <div className="authority-images-container" aria-hidden="true">
            <div className="authority-image-box authority-image-box-3">
              <Image 
                src={img3} 
                alt="Composição científica da equipe técnica 1"
                fill
                sizes="(max-width: 1024px) 100vw, 428px"
                className="authority-img"
              />
            </div>
            <div className="authority-image-box authority-image-box-2">
              <Image 
                src={img2} 
                alt="Composição científica da equipe técnica 2"
                fill
                sizes="(max-width: 1024px) 100vw, 313px"
                className="authority-img"
              />
            </div>
            <div className="authority-image-box authority-image-box-1">
              <Image 
                src={img1} 
                alt="Composição científica da equipe técnica 3"
                fill
                sizes="(max-width: 1024px) 100vw, 194px"
                className="authority-img"
              />
            </div>
          </div>

          {/* Conteúdo Textual (Direita) */}
          <div className="authority-content">
            
            <div className="authority-items-list">
              
              {/* Item 1: Parceria */}
              <article className="authority-item-container">
                <div className="authority-icon-wrapper">
                  <Image src={iconParceria} alt="" width={67} height={67} className="authority-icon" />
                </div>
                <div className="authority-item-content">
                  <h3 className="authority-item-title">Parceria com Universidade Federal</h3>
                  <p className="authority-item-text">
                    Rigor metodológico, validação científica e alinhamento com padrões internacionais.
                  </p>
                </div>
              </article>

              {/* Item 2: Doutores */}
              <article className="authority-item-container">
                <div className="authority-icon-wrapper">
                  <Image src={iconDoutores} alt="" width={67} height={67} className="authority-icon" />
                </div>
                <div className="authority-item-content">
                  <h3 className="authority-item-title">Doutores em Melhoramento Genético</h3>
                  <p className="authority-item-text">
                    A liderança técnica da Cannabreed é formada por doutores em Genética e Melhoramento pela UFV, combinando formação científica de alto nível com aplicação prática.
                  </p>
                </div>
              </article>

              {/* Item 3: Protagonismo */}
              <article className="authority-item-container">
                <div className="authority-icon-wrapper">
                  <Image src={iconGermoplasma} alt="" width={67} height={67} className="authority-icon" />
                </div>
                <div className="authority-item-content">
                  <h3 className="authority-item-title">Protagonismo em Bancos de Germoplasma</h3>
                  <p className="authority-item-text">
                    A Cannabreed é fundadora dos dois primeiros Bancos de Germoplasma de Cannabis no Brasil. Esse protagonismo posiciona a empresa como referência em recursos genéticos e conservação estratégica.
                  </p>
                </div>
              </article>

              {/* Item 4: Atuação */}
              <article className="authority-item-container">
                <div className="authority-icon-wrapper">
                  <Image src={iconAtuacao} alt="" width={67} height={67} className="authority-icon" />
                </div>
                <div className="authority-item-content authority-item-content-center">
                  <h3 className="authority-item-title">
                    Atuação Reconhecida em Laudos, Perícias Técnicas e Processos
                  </h3>
                </div>
              </article>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
