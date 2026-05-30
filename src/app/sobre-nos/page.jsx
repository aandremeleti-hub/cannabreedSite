import Header from '@/components/layout/Header/Header';
import AboutUsSection from '@/components/layout/AboutUsSection/AboutUsSection';
import RenatoSection from '@/components/layout/RenatoSection/RenatoSection';
import DnaSection from '@/components/layout/DnaSection/DnaSection';
import TimeLineSection from '@/components/layout/TimeLineSection/TimeLineSection';
import ActingSection from '@/components/layout/ActingSection/ActingSection';
import StructuredProjectsSection from '@/components/layout/StructuredProjectsSection/StructuredProjectsSection';
import ContractedManufacturing from '@/components/layout/ContractedManufacturing/ContractedManufacturing';

export const metadata = {
  title: 'Sobre Nós — Cannabreed',
  description: 'Conheça a história, equipe e atuação da Cannabreed no melhoramento de Cannabis.',
};

export default function SobreNosPage() {
  return (
    <main className="about-page-main">
      <Header />
      <AboutUsSection />      
      <ActingSection />
      <TimeLineSection />
      <DnaSection />
      <RenatoSection />
      <StructuredProjectsSection />
    </main>
  );
}
