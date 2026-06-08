import React from 'react';
import imgInterfaceModal from '@/assets/images/modal-renato-interface.png';
import imgTrajetoriaModal from '@/assets/images/modal-renato-trajetoria.png';
import imgIntegracaoModal from '@/assets/images/modal-renato-integracao.png';
import imgRenatoFallback from '@/assets/images/renato-image.jpg';

export const RENATO_TECHNICAL_ACTING_DATA = {
  'interface': {
    title: 'Interface',
    text: 'Renato Tonini atua na interface entre melhoramento genético, proteção de cultivares e Pesquisa & Desenvolvimento aplicado, com foco na estruturação técnica e regulatória da cadeia produtiva da Cannabis e do cânhamo no Brasil.',
    imageSrc: imgInterfaceModal,
    imageAlt: 'Renato Tonini ao lado de placa azul do Departamento de Agronomia da Universidade Federal de Viçosa (UFV), sorrindo em um dia ensolarado',
    iconKey: 'interface'
  },
  'trajetoria': {
    title: 'Trajetória',
    text: (
      <>
        Sua trajetória está orientada à adaptação de <em>Cannabis sativa</em> L. às condições tropicais, à estabilidade genética, à previsibilidade produtiva e à consolidação científica da base genética nacional.
      </>
    ),
    imageSrc: imgTrajetoriaModal,
    imageAlt: 'Renato de Traglia Tonini palestrando com microfone em mãos',
    iconKey: 'trajetoria'
  },
  'integracao': {
    title: 'Integração',
    text: 'Combina formação acadêmica de excelência com atuação prática em projetos estruturantes, integrando ciência, planejamento produtivo e governança técnica.',
    imageSrc: imgIntegracaoModal,
    imageAlt: 'Retrato de perfil profissional de Renato de Traglia Tonini, líder científico da Cannabreed',
    iconKey: 'integracao'
  }
};
