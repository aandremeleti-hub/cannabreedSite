// Configuration data for Market Problem Detail Modals
import iconAcessoLimitado from '@/assets/icons/inadequate-genetics/icon-acesso-limitado.svg';
import iconBaixaPrevisibilidade from '@/assets/icons/inadequate-genetics/icon-baixa-previsibilidade.svg';
import iconInstabilidadeGenetica from '@/assets/icons/inadequate-genetics/icon-instabilidade-genetica.svg';
import iconDificuldadePadronizacao from '@/assets/icons/inadequate-genetics/icon-dificuldade-padronizacao.svg';
import iconInconsistenciaLotes from '@/assets/icons/inadequate-genetics/icon-inconsistencia-lotes.svg';

// Operational React icon components for problem 5 and 4
import IconPreparo from '@/components/icons/IconPreparo';
import IconColheita from '@/components/icons/IconColheita';
import IconControle from '@/components/icons/IconControle';
import IconEmbalagem from '@/components/icons/IconEmbalagem';
import IconExpedicao from '@/components/icons/IconExpedicao';

// React icon components for problem 4 (semantic compatibility overrides)
import IconAnalysis from '@/components/icons/IconAnalysis';
import IconMetrics from '@/components/icons/IconMetrics';
import IconAudit from '@/components/icons/IconAudit';
import IconTests from '@/components/icons/IconTests';
import IconProtection from '@/components/icons/IconProtection';

// React icon components for problem 2 (P&D details)
import IconPD from '@/components/icons/IconPD';
import IconResearch from '@/components/icons/IconResearch';
import IconRoutines from '@/components/icons/IconRoutines';
import IconInnovation from '@/components/icons/IconInnovation';
import IconTechnicalAssistance from '@/components/icons/IconTechnicalAssistance';


export const PROBLEMS_DETAIL_DATA = {
  1: {
    id: 1,
    title: 'Base genética inadequada para produção tropical',
    description: 'O mercado brasileiro ainda carece de genética nacional validada e tecnologias efetivamente adaptadas às condições tropicais. A dependência de materiais estrangeiros, sem validação local consistente, reduz previsibilidade e amplia a variabilidade produtiva.',
    quote: '“Sem estabilidade genética, não há repetibilidade nem base técnica para escalar.”',
    criticalPoints: [
      {
        id: '1-1',
        title: 'Acesso limitado a variedades testadas no Brasil',
        icon: iconAcessoLimitado,
      },
      {
        id: '1-2',
        title: 'Baixa previsibilidade agronômica tropical',
        icon: iconBaixaPrevisibilidade,
      },
      {
        id: '1-3',
        title: 'Instabilidade genética e variação química',
        icon: iconInstabilidadeGenetica,
      },
      {
        id: '1-4',
        title: 'Dificuldade de padronização da matéria-prima',
        icon: iconDificuldadePadronizacao,
      },
      {
        id: '1-5',
        title: 'Inconsistência entre lotes',
        icon: iconInconsistenciaLotes,
      },
    ],
  },
  2: {
    id: 2,
    title: 'Baixa maturidade em P&D aplicado à produção',
    description: 'Sem estrutura científica organizada e orientada à produção, os projetos não evoluem tecnicamente nem constroem diferenciação competitiva.',
    quote: '“Sem P&D aplicado, estruturado e integrado à produção, não há inovação sustentável nem vantagem competitiva.”',
    criticalPoints: [
      {
        id: '2-1',
        title: 'Falta de protocolos experimentais estruturados',
        icon: <IconPD />,
      },
      {
        id: '2-2',
        title: 'Ausência de delineamentos e evidências técnicas',
        icon: <IconResearch />,
      },
      {
        id: '2-3',
        title: 'Rotina científica inexistente ou informal',
        icon: <IconRoutines />,
      },
      {
        id: '2-4',
        title: 'Baixa capacidade de caracterização e estabilidade',
        icon: <IconInnovation />,
      },
      {
        id: '2-5',
        title: 'Atraso no desenvolvimento de materiais adaptados',
        icon: <IconTechnicalAssistance />,
      },
    ],
  },
  3: {
    id: 3,
    title: 'Ambiente regulatório instável e risco operacional',
    description: 'Projetos mal enquadrados ou documentalmente frágeis enfrentam risco regulatório elevado e vulnerabilidade operacional. Erros de estrutura jurídica e falhas de conformidade comprometem a continuidade da operação.',
    quote: '“O ambiente normativo exige governança documental estruturada como condição mínima para operar com segurança.”',
    criticalPoints: [
      {
        id: '3-1',
        title: 'Enquadramento regulatório incorreto',
        icon: iconAcessoLimitado,
      },
      {
        id: '3-2',
        title: 'Exposição jurídica e risco de não conformidade',
        icon: iconBaixaPrevisibilidade,
      },
      {
        id: '3-3',
        title: 'Estrutura documental insuficiente',
        icon: iconInstabilidadeGenetica,
      },
      {
        id: '3-4',
        title: 'Estrutura documental insuficiente',
        icon: iconDificuldadePadronizacao,
      },
      {
        id: '3-5',
        title: 'Dossiês e registros inconsistentes',
        icon: iconInconsistenciaLotes,
      },
    ],
  },
  5: {
    id: 5,
    title: 'Ausência de sistema produtivo estruturado',
    description: 'A ausência de organização técnica na execução compromete qualidade, estabilidade e eficiência operacional.',
    quote: '“Projetos sem governança técnica e metas claras não sustentam escala nem atraem investimento.”',
    criticalPoints: [
      {
        id: '5-1',
        title: 'Manejo sem padronização técnica',
        icon: <IconPreparo />,
      },
      {
        id: '5-2',
        title: 'Falhas em atividades pós-colheita',
        icon: <IconColheita />,
      },
      {
        id: '5-3',
        title: 'Ausência de POPs, checkpoints e indicadores',
        icon: <IconControle />,
      },
      {
        id: '5-4',
        title: 'Variação de qualidade entre lotes',
        icon: <IconEmbalagem />,
      },
      {
        id: '5-5',
        title: 'Perdas produtivas e inconsistência operacional',
        icon: <IconExpedicao />,
      },
    ],
  },
  4: {
    id: 4,
    title: 'Instabilidade do teor de THC e impacto operacional',
    description: 'O controle do teor de THC é um dos pontos técnicos mais sensíveis da produção em ambiente regulado. Pequenas variações podem comprometer lotes e afetar diretamente a continuidade da operação.',
    quote: '“Sem controle técnico consistente, o risco regulatório torna-se imediato e compromete a operação.”',
    criticalPoints: [
      {
        id: '4-1',
        title: 'Ausência de plano estruturado de amostragem',
        icon: <IconAnalysis />,
      },
      {
        id: '4-2',
        title: 'Falta de monitoramento sistemático',
        icon: <IconMetrics />,
      },
      {
        id: '4-3',
        title: 'Gestão insuficiente de desvios',
        icon: <IconAudit />,
      },
      {
        id: '4-4',
        title: 'Risco de THC acima do limite legal',
        icon: <IconTests />,
      },
      {
        id: '4-5',
        title: 'Impacto direto na continuidade da atividade',
        icon: <IconProtection />,
      },
    ],
  },
};
