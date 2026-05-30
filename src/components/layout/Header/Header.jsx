"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/images/logo.png';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Area */}
        <Link href="/" className="header-logo-wrapper" onClick={closeMobileMenu} aria-label="Cannabreed - Voltar ao início">
          <Image
            src={logoImg}
            alt="Logotipo Cannabreed"
            width={253}
            height={67}
            className="header-logo-image"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="header-nav-bar" aria-label="Navegação Principal">
          <div className="header-nav-bar-home-box">
            <Link href="/" className="header-nav-bar-home-text">
              Home
            </Link>
          </div>
          <div className="header-nav-bar-sobre-box">
            <Link href="/sobre-nos" className="header-nav-bar-sobre-text">
              Sobre nós
            </Link>
          </div>
          <div className="header-nav-bar-servicos-box">
            <Link href="/servicos" className="header-nav-bar-servicos-text">
              Serviços
            </Link>
          </div>
          <div className="header-nav-bar-ped-box">
            <Link href="/#ped" className="header-nav-bar-ped-text">
              P&D
            </Link>
          </div>
          <div className="header-nav-bar-contato-box">
            <Link href="/#contato" className="header-nav-bar-contato-text">
              Contato
            </Link>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`header-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-controls="header-mobile-nav-drawer"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Drawer */}
        <nav
          id="header-mobile-nav-drawer"
          className={`header-mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`}
          aria-label="Navegação Mobile"
        >
          <ul className="header-mobile-nav-list">
            <li className="header-mobile-nav-item">
              <Link href="/" className="header-mobile-nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="header-mobile-nav-item">
              <Link href="/sobre-nos" className="header-mobile-nav-link" onClick={closeMobileMenu}>
                Sobre nós
              </Link>
            </li>
            <li className="header-mobile-nav-item">
              <Link href="/servicos" className="header-mobile-nav-link" onClick={closeMobileMenu}>
                Serviços
              </Link>
            </li>
            <li className="header-mobile-nav-item">
              <Link href="/#ped" className="header-mobile-nav-link" onClick={closeMobileMenu}>
                P&D
              </Link>
            </li>
            <li className="header-mobile-nav-item">
              <Link href="/#contato" className="header-mobile-nav-link" onClick={closeMobileMenu}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Drawer Background Blur Overlay */}
        <div
          className={`header-mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      </div>
    </header>
  );
}
