import React from 'react';
import Image from 'next/image';
import logoImg from '@/assets/images/logo.png';
import EnvelopeIcon from '@/components/icons/EnvelopeIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import MapPinIcon from '@/components/icons/MapPinIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section-container">
        <div className="contact-section-header">
          <h2 className="contact-section-title">Fale Conosco</h2>
          <p className="contact-section-subtitle">
            Estamos prontos para impulsionar a sua produção com genéticas de alta performance. Entre em contato com a equipe Cannabreed.
          </p>
        </div>

        <div className="contact-section-content">
          {/* Formulário de Contato */}
          <div className="contact-section-form-wrapper">
            <form className="contact-section-form">
              <div className="contact-form-group">
                <label htmlFor="contact-name" className="contact-form-label">Nome Completo</label>
                <input type="text" id="contact-name" className="contact-form-input" placeholder="Seu nome" required />
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-email" className="contact-form-label">E-mail Corporativo</label>
                <input type="email" id="contact-email" className="contact-form-input" placeholder="seuemail@empresa.com" required />
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-subject" className="contact-form-label">Assunto</label>
                <input type="text" id="contact-subject" className="contact-form-input" placeholder="Como podemos ajudar?" required />
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-message" className="contact-form-label">Mensagem</label>
                <textarea id="contact-message" className="contact-form-textarea" placeholder="Escreva sua mensagem aqui..." rows="5" required></textarea>
              </div>
              <button type="submit" className="contact-form-submit-btn">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="contact-section-info-wrapper">
            <div className="contact-info-card">
              <div className="contact-card-logo-wrapper">
                <Image
                  src={logoImg}
                  alt="Logotipo Cannabreed"
                  width={200}
                  height={53}
                  className="contact-card-logo-image"
                  priority
                />
              </div>
              <h3 className="contact-info-card-title">Informações de Contato</h3>
              
              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <EnvelopeIcon className="contact-info-icon" />
                  </div>
                  <div className="contact-info-text-wrapper">
                    <span className="contact-info-label">E-mail</span>
                    <a href="mailto:contato@cannabreed.com.br" className="contact-info-value">contato@cannabreed.com.br</a>
                  </div>
                </li>
                
                <li className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <PhoneIcon className="contact-info-icon" />
                  </div>
                  <div className="contact-info-text-wrapper">
                    <span className="contact-info-label">Telefone</span>
                    <a href="tel:+5511999999999" className="contact-info-value">+55 (11) 99999-9999</a>
                  </div>
                </li>
                
                <li className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <MapPinIcon className="contact-info-icon" />
                  </div>
                  <div className="contact-info-text-wrapper">
                    <span className="contact-info-label">Endereço</span>
                    <span className="contact-info-value">Av. Fictícia, 1000 - São Paulo, SP<br/>CEP 00000-000</span>
                  </div>
                </li>
              </ul>

              <div className="contact-social-wrapper">
                <h4 className="contact-social-title">Siga-nos</h4>
                <div className="contact-social-links">
                  <a href="#" className="contact-social-link" aria-label="Instagram">
                    <InstagramIcon className="contact-social-icon" />
                  </a>
                  <a href="#" className="contact-social-link" aria-label="WhatsApp">
                    <WhatsAppIcon className="contact-social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
