"use client";

import React, { useEffect } from 'react';
import './ModalLight.css';

export default function ModalLight({ isOpen, onClose, children }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-light-backdrop" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
    >
      <div 
        className="modal-light-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-light-close-button" 
          onClick={onClose} 
          aria-label="Fechar modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
