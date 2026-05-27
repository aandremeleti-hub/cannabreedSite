import Hero from '@/components/layout/Hero/Hero';
import MarketProblem from '@/components/layout/MarketProblem/MarketProblem';
import WhatCannabreedDoes from '@/components/layout/WhatCannabreedDoes/WhatCannabreedDoes';
import AuthoritySection from '@/components/layout/AuthoritySection/AuthoritySection';

export default function Page() {
  return (
    <main className="home-main">
      <Hero />
      <MarketProblem />
      <WhatCannabreedDoes />
      <AuthoritySection />
    </main>
  );
}
