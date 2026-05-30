import Header from '@/components/layout/Header/Header';
import ResearchAndDevelopment from '@/components/layout/ResearchAndDevelopment/ResearchAndDevelopment';
import ProductiveOperation from '@/components/layout/ProductiveOperation/ProductiveOperation';
import CdmoTransition from '@/components/transitions/CdmoTransition/CdmoTransition';
import ContractedManufacturing from '@/components/layout/ContractedManufacturing/ContractedManufacturing';
import PdTransition from '@/components/transitions/PdTransition/PdTransition';
import ExpertReportsSection from '@/components/layout/ExpertReportsSection/ExpertReportsSection';
import RegulatoryCompliance from '@/components/layout/RegulatoryCompliance/RegulatoryCompliance';

export const metadata = {
    title: 'Serviços — Cannabreed',
    description: 'Conheça nossos serviços de P&D, melhoramento genético, Operação Produtiva, Contracted Manufacturing, Serviços Periciais, Laudos, Regulatório e Conformidade.',
};

export default function ServicosPage() {
    return (
        <main className="services-page-main">
            <Header />
            <CdmoTransition/>
            <RegulatoryCompliance />
            <PdTransition />
            <ExpertReportsSection />
            <CdmoTransition />
            <ProductiveOperation />
            <PdTransition />
            <ResearchAndDevelopment />
            <CdmoTransition />
            <ContractedManufacturing />
            <PdTransition />
        </main>
    );
}