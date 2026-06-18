"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/images/logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">

      {/* =========================================
          CONTEÚDO PRINCIPAL (COLUNAS + CTA)
          ========================================= */}
      <div className="footer-main-content">

        {/* GRUPO DE COLUNAS (MARCA + LINKS + CONTATO) */}
        <div className="footer-columns-group">
          {/* COLUNA 1: MARCA */}
          <div className="footer-col-brand">
            <Link href="/" className="footer-logo-link" aria-label="Cannabreed - Voltar ao início">
              <Image
                src={logoImg}
                alt="Logotipo Cannabreed"
                width={220}
                height={58}
                className="footer-logo-image"
              />
            </Link>
            <p className="footer-brand-description">
              A Cannabreed é referência em genética canábica de alta performance, unindo ciência, inovação e excelência técnica para entregar resultados incomparáveis.
            </p>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO */}
          <div className="footer-col-links">
            <h3 className="footer-col-title">Navegação</h3>
            <ul className="footer-links-list">
              <li><Link href="/" className="footer-link-item">Home</Link></li>
              <li><Link href="/sobre-nos" className="footer-link-item">Sobre a Cannabreed</Link></li>
              <li><Link href="/servicos" className="footer-link-item">Nossos Serviços</Link></li>
              <li><Link href="/PD" className="footer-link-item">Pesquisa & Desenvolvimento</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATO */}
          <div className="footer-col-contact">
            <h3 className="footer-col-title">Contato</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-label">Email:</span>
                <a href="mailto:contato@cannabreed.com.br" className="footer-link-item">contato@cannabreed.com.br</a>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-label">Sede:</span>
                <span className="footer-contact-text">Viçosa, MG - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA INTEGRADO (HORIZONTAL NO DESKTOP) */}
        <div className="footer-col-cta">
          <div className="footer-cta-text-group">
            <h2 className="footer-cta-title">
              Pronto para elevar o padrão <br className="hidden-mobile" /> agronômico da sua operação?
            </h2>
            <p className="footer-cta-description">
              Nossa equipe de especialistas está pronta para analisar <br className="hidden-mobile" /> seu projeto e fornecer genéticas de alta performance.
            </p>
          </div>
          <Link href="/contato" className="footer-cta-button" aria-label="Fale com nossos especialistas">
            Falar com Especialista
          </Link>
        </div>
      </div>

      {/* =========================================
          RODAPÉ INFERIOR (LEGAL / COPYRIGHT)
          ========================================= */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            &copy; {currentYear} Cannabreed. Todos os direitos reservados.
          </p>
          <div className="footer-legal-links">
            <Link href="/termos" className="footer-legal-link">Termos de Uso</Link>
            <span className="footer-legal-separator">•</span>
            <Link href="/privacidade" className="footer-legal-link">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
