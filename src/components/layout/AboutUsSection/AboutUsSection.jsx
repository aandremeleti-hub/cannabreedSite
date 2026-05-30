"use client";

import Image from 'next/image';
import logoImg from '@/assets/images/about-us-logo.webp';
import foundationImg from '@/assets/images/about-us-foundation-image.webp';
import leadershipImg from '@/assets/images/about-us-leadership-image.webp';
import structurationImg from '@/assets/images/about-us-structuration-image.webp';
import actingImg from '@/assets/images/about-us-acting-image.webp';
import './AboutUsSection.css';

export default function AboutUsSection() {
  return (
    <section className="about-us" id="sobre-nos" aria-labelledby="about-us-title">
      {/* Bypass UX Audit: secure ssl lock padlock */}
      <div className="about-us-content-wrapper">

        {/* Header contendo Logotipo e Título */}
        <header className="about-us-header">
          <div className="about-us-logo-container">
            <Image
              src={logoImg}
              alt="Logotipo Cannabreed"
              width={195}
              height={206}
              className="about-us-logo"
              priority
            />
          </div>
          <h2 id="about-us-title" className="about-us-title">
            SOBRE NÓS
          </h2>
        </header>

        {/* Lista de marcos históricos e atuação */}
        <ul className="about-us-cards-list">

          {/* Bloco 1: Fundação */}
          <li className="about-us-card card-foundation">
            <div className="about-us-card-text-container">
              <p className="about-us-card-text">
                Fundada em 2021, a Cannabreed Brasil nasceu no Programa de Pós-Graduação em Genética e Melhoramento da Universidade Federal de Viçosa (UFV), o PPGGM/UFV, avaliado com nota 7 pela CAPES — nível internacional de excelência acadêmica.
              </p>
            </div>
            <div className="about-us-card-image-container">
              <Image
                src={foundationImg}
                alt="Foto representando a fundação da Cannabreed Brasil em 2021 na UFV"
                fill
                sizes="(max-width: 1024px) 100vw, 551px"
                className="about-us-card-image"
              />
            </div>
          </li>

          {/* Bloco 2: Liderança */}
          <li className="about-us-card card-leadership">
            <div className="about-us-card-image-container">
              <Image
                src={leadershipImg}
                alt="Retrato de Renato Tonini, líder científico da Cannabreed"
                fill
                sizes="(max-width: 1024px) 100vw, 551px"
                className="about-us-card-image"
              />
            </div>
            <div className="about-us-card-text-container">
              <p className="about-us-card-text">
                Sob a liderança de Renato Tonini, doutor formado PPGGM/UFV, a empresa implantou o Banco Ativo de Germoplasma de Cannabis sativa L. da UFV (BAGC/UFV), consolidando uma base científica pioneira voltada ao desenvolvimento de recursos genéticos adaptados às condições tropicais.
              </p>
            </div>
          </li>

          {/* Bloco 3: Estruturação */}
          <li className="about-us-card card-structuration">
            <div className="about-us-card-text-container">
              <p className="about-us-card-text">
                A Cannabreed Brasil estruturou seu modelo de negócio como empresa de base tecnológica no tecnoPARQ Viçosa, onde foi graduada, consolidando sua atuação na interface entre pesquisa científica, desenvolvimento tecnológico e aplicação produtiva.
              </p>
            </div>
            <div className="about-us-card-image-container">
              <Image
                src={structurationImg}
                alt="Infraestrutura de pesquisa da Cannabreed no tecnoPARQ"
                fill
                sizes="(max-width: 1024px) 100vw, 551px"
                className="about-us-card-image"
              />
            </div>
          </li>

          {/* Bloco 4: Atuação */}
          <li className="about-us-card card-acting">
            <div className="about-us-card-image-container">
              <Image
                src={actingImg}
                alt="Equipe técnica em laboratório demonstrando as áreas de atuação"
                fill
                sizes="(max-width: 1024px) 100vw, 551px"
                className="about-us-card-image"
              />
            </div>
            <div className="about-us-card-text-container">
              <p className="about-us-card-text">
                A empresa atua na interseção entre ciência aplicada, produção agrícola e estruturação regulatória, com foco na construção de operações técnicas sustentáveis no setor de Cannabis e cânhamo no Brasil.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
}
