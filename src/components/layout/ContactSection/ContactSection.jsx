'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logoImg from '@/assets/images/logo.png';
import EnvelopeIcon from '@/components/icons/EnvelopeIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import MapPinIcon from '@/components/icons/MapPinIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import './ContactSection.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgzkyvz';

export default function ContactSection() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [validationError, setValidationError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.currentTarget;
    const data = new FormData(form);

    const nome = data.get('nome')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const assunto = data.get('assunto')?.toString().trim();

    if (!nome || !email || !assunto) {
      setValidationError('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Assunto).');
      return;
    }

    setValidationError('');
    setStatus('loading');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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
            {status === 'success' ? (
              <div className="contact-form-feedback contact-form-feedback--success">
                <div className="contact-form-feedback-icon">✓</div>
                <h3 className="contact-form-feedback-title">Mensagem enviada!</h3>
                <p className="contact-form-feedback-text">
                  Obrigado pelo contato. Nossa equipe retornará em breve.
                </p>
                <button
                  className="contact-form-feedback-btn"
                  onClick={() => setStatus('idle')}
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form className="contact-section-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-group">
                  <label htmlFor="contact-name" className="contact-form-label">Nome Completo *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="nome"
                    className="contact-form-input"
                    placeholder="Seu nome"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-email" className="contact-form-label">E-mail Corporativo *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="contact-form-input"
                    placeholder="seuemail@empresa.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-subject" className="contact-form-label">Assunto *</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="assunto"
                    className="contact-form-input"
                    placeholder="Como podemos ajudar?"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-message" className="contact-form-label">
                    Mensagem <span style={{ opacity: 0.6, fontWeight: 'normal', fontSize: '0.9em' }}>(Opcional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="mensagem"
                    className="contact-form-textarea"
                    placeholder="Escreva sua mensagem aqui..."
                    rows="5"
                    disabled={status === 'loading'}
                  ></textarea>
                </div>

                {validationError && (
                  <p className="contact-form-error-inline">
                    {validationError}
                  </p>
                )}

                {status === 'error' && (
                  <p className="contact-form-error-inline">
                    Ocorreu um erro ao enviar. Tente novamente ou entre em contato diretamente pelo e-mail.
                  </p>
                )}

                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className={`contact-form-submit-btn${status === 'loading' ? ' contact-form-submit-btn--loading' : ''}`}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
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
                    <a href="mailto:tonini@cannabreedbrasil.com" className="contact-info-value">contato@cannabreed.com.br</a>
                  </div>
                </li>

                <li className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <PhoneIcon className="contact-info-icon" />
                  </div>
                  <div className="contact-info-text-wrapper">
                    <span className="contact-info-label">Telefone</span>
                    <a href="tel:+5531997614333" className="contact-info-value">+55 (31) 99761-4333</a>
                  </div>
                </li>

                <li className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <MapPinIcon className="contact-info-icon" />
                  </div>
                  <div className="contact-info-text-wrapper">
                    <span className="contact-info-label">Endereço</span>
                    <span className="contact-info-value">Av Peter Henry Rolfs, s/n - Campus Universitário - Viçosa, MG<br />CEP 36570-510</span>
                  </div>
                </li>
              </ul>

              <div className="contact-social-wrapper">
                <h4 className="contact-social-title">Siga-nos</h4>
                <div className="contact-social-links">
                  <a href="https://www.instagram.com/cannabreedbrasil" className="contact-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="contact-social-icon" />
                  </a>
                  <a href="https://wa.me/5531997614333" className="contact-social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
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

