"use client";

import { CesarCarvalhoTemplate, CesarCarvalhoCopy } from '@/components/lp/CesarCarvalhoTemplate';

const copy: CesarCarvalhoCopy = {
  hero: {
    headline: (
      <>
        O crescimento <br />
        da sua empresa <br />
        começa quando <br />
        <span className="text-[#A99340]">as vendas deixam</span> <br />
        <span className="text-[#A99340]">de depender apenas</span> <br />
        <span className="text-[#A99340]">de você.</span>
      </>
    ),
    subheadline: 'Organize sua operação comercial com um método claro e alcance previsibilidade no faturamento.',
    cta: 'Quero Estruturar Minhas Vendas',
  },
  pain: {
    cardTitle: 'Tem equipe, mas nada funciona quando você não está',
    bullets: [
      'Você contratou, mas a equipe ainda depende de você para tudo.',
      'As metas existem no papel, mas ninguém sabe exatamente como bater.',
      'Faltam indicadores, cadência comercial e reuniões que geram resultado.',
      'O atendimento varia conforme quem está de plantão — sem padrão.',
      'Você lidera apagando incêndios, não construindo performance.',
      'Mais cobrança não resolveu. Falta método, direção e processo.',
    ],
    quote: 'Sua equipe não precisa de mais pressão. Precisa de um caminho claro.',
    cta: 'Este sou eu',
  },
  differentiation: {
    title: 'Existem muitas soluções prontas no mercado',
    subtitle: 'Mas nenhuma se encaixa perfeitamente no seu negócio, sabe por quê?',
    paragraphs: [
      'Não é por falta de qualidade. É porque nenhuma foi pensada para o seu negócio.',
      'Cursos, fórmulas, métodos replicáveis, consultorias engessadas. Todas são soluções genéricas, construídas para atender a média do mercado.',
      'Elas ignoram exatamente o que faz a sua operação ser a sua: seu momento, sua equipe, seu histórico, suas particularidades.',
    ],
    closing: 'Ninguém entende mais do seu negócio do que você. O meu papel não é substituir esse conhecimento por um método de prateleira — é somar a ele um olhar técnico, de fora, experiente, e transformar o que você já sabe em processo, direção e resultado.',
  },
  authority: {
    closingBeforeBadge: 'Trabalho com poucos clientes por vez porque resultado exige atenção, não volume.',
    closingAfterBadge: 'Se você chegou até aqui, provavelmente já percebeu que o próximo passo não é trabalhar mais, é trabalhar diferente.',
    showScarcityBadge: false,
  },
  methodology: {
    intro: 'Eu acredito que todo método precisa ser simples, para que seja aplicado e replicado com consistência. E isso que faz a diferença. Um processo desenhado para a realidade de cada empresa.',
  },
  pathways: {
    programName: 'Programa de Acompanhamento para Empreendedores',
    subtitle: 'Para quem quer aprender a vender com estratégia e consistência.',
    mainParagraph: 'Se você é o empreendedor que toca o próprio negócio e quer vender mais com previsibilidade no faturamento, este é o seu caminho. Aqui não existe fórmula genérica: eu olho de perto para a sua operação, entendo sua realidade a fundo e construímos juntos, passo a passo, a solução certa para o seu momento. A execução continua nas suas mãos — eu trago a experiência, a direção e o acompanhamento pessoal para que cada passo gere resultado.',
    notThisLabel: 'Isso não é uma mentoria informativa',
    notThisText: 'Onde eu te mostro um método pronto e você tenta adaptar sozinho ao seu negócio.',
    isThisText: 'Eu analiso profundamente a sua operação, ao seu lado, e construímos juntos uma solução feita sob medida para a sua realidade — não um modelo genérico. Adapto anos da minha experiência à sua realidade para te trazer resultado. Quem executa é você, eu trago a direção, a experiência e o acompanhamento em cada passo.',
    includes: [
      'Clareza de oferta e posicionamento comercial',
      'Roteiro e processo de vendas personalizado',
      'Desenvolvimento de linguagem e autoridade',
      'Acompanhamento mensal com feedback técnico',
      'Modelos de 3, 6 ou 12 meses conforme necessidade',
      'Evolução contínua com suporte direto',
    ],
    cta: 'Esse é o meu caminho',
    showScarcityBadge: false,
  },
};

export default function CesarCarvalhoV4() {
  return <CesarCarvalhoTemplate copy={copy} />;
}
