import Header from '@/components/layout/Header/Header';
import ContactSection from '@/components/layout/ContactSection/ContactSection';

export const metadata = {
  title: 'Contato — Cannabreed',
  description: 'Entre em contato com a Cannabreed. Estamos prontos para impulsionar a sua produção com genéticas canábicas de alta performance.',
};

export default function ContatoPage() {
  return (
    <main className="contact-page-main">
      <Header />
      <ContactSection />
    </main>
  );
}
