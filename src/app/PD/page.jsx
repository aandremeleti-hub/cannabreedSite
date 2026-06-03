import Header from '@/components/layout/Header/Header';
import PDSection from '@/components/layout/PDSection/PDSection';
import BaseCientifica from '@/components/layout/BaseCientifica/BaseCientifica';
import DiferencialTecnico from '@/components/layout/DiferencialTecnico/DiferencialTecnico';
import WhatWeDontDo from '@/components/layout/WhatWeDontDo/WhatWeDontDo';

export const metadata = {
  title: 'P&D — Cannabreed',
  description: 'Pesquisa, Desenvolvimento e Melhoramento Genético da Cannabreed. Conheça também nossos limites éticos e posicionamento estratégico.',
};

export default function PDPage() {
  return (
    <main className="pd-page-main">
      <Header />
      <PDSection />
      <BaseCientifica />
      <DiferencialTecnico />
      <WhatWeDontDo />
    </main>
  );
}


