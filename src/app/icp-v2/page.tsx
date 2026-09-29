"use client";

import { CesarCarvalhoTemplate, CesarCarvalhoCopy } from '@/components/lp/CesarCarvalhoTemplate';

const copy: CesarCarvalhoCopy = {
  hero: {
    headline: 'Sua equipe não precisa de mais pressão. Precisa de um processo que funcione sem você por perto.',
    subheadline: 'Estruture sua operação comercial com um método claro e pare de depender de sorte para bater meta.',
    cta: 'Quero Estruturar Minha Equipe',
  },
  pain: {
    cardTitle: 'Tem equipe, mas nada funciona quando você não está',
    bullets: [
      'Você contratou, mas a equipe ainda depende de você para tudo.',
      'As metas existem no papel, mas ninguém sabe exatamente como bater.',
      'Faltam indicadores, cadência comercial e reuniões que geram resultado.',
      'O atendimento varia conforme quem está de plantão, não existe padrão.',
      'Você lidera apagando incêndios, não construindo performance.',
      'Mais cobrança não resolveu. Falta método, direção e processo.',
    ],
    quote: 'Sua equipe não precisa de mais pressão. Precisa de um caminho claro.',
    cta: 'Este sou eu',
  },
  differentiation: {
    title: 'Existem muitos treinamentos prontos no mercado',
    subtitle: 'Mas nenhum treinamento genérico cria processo dentro da sua equipe.',
    paragraphs: [
      'Não é por falta de qualidade do treinamento. É porque nenhum foi pensado para a sua equipe, do jeito que ela é hoje.',
      'Treinamentos, playbooks genéricos e consultorias engessadas motivam por uma semana e depois a equipe volta pro improviso de sempre.',
      'Eles ignoram exatamente o que trava a sua operação: seu time, seu histórico de contratação, sua cultura comercial.',
    ],
    closing: 'Ninguém conhece a sua equipe melhor do que você. O meu papel não é trazer mais um treinamento de prateleira. É construir, com você, o processo que essa equipe específica precisa para vender sem depender de você no meio de cada negociação.',
  },
  authority: {
    closingBeforeBadge: 'Trabalho com poucos clientes por vez porque resultado exige atenção, não volume.',
    closingAfterBadge: 'Se você já tem equipe e sente que falta só o processo para ela render de verdade, o próximo passo não é contratar mais, é estruturar o que já existe.',
    showScarcityBadge: true,
  },
  methodology: {
    intro: 'Eu acredito que todo método precisa ser simples, para que a sua equipe consiga aplicar e repetir com consistência, sem depender de você em cada etapa. Um processo desenhado para a realidade do seu time.',
  },
  pathways: {
    programName: 'Programa de Estruturação Comercial para Times com Potencial',
    subtitle: 'Para quem tem equipe e quer transformar esforço em resultado.',
    mainParagraph: 'Se você já tem equipe comercial, mas sente que o resultado depende de quem está de plantão naquele dia, este é o seu caminho. Aqui não existe treinamento engessado: eu olho de perto para a sua equipe, entendo onde ela trava e construímos juntos, passo a passo, o processo comercial que ela consegue sustentar sozinha. A execução continua nas mãos do seu time, eu trago a experiência, a direção e o acompanhamento pessoal para que cada etapa vire rotina.',
    notThisLabel: 'Isso não é um treinamento pontual',
    notThisText: 'Onde eu dou uma palestra motivacional para sua equipe e depois cada um volta a vender do seu jeito.',
    isThisText: 'Eu analiso a sua equipe de perto, ao seu lado, e construímos juntos o processo comercial feito sob medida para o seu time, não um treinamento padrão de mercado.',
    includes: [
      'Diagnóstico da equipe e dos gargalos comerciais atuais',
      'Roteiro de vendas e padrão de atendimento personalizados',
      'Indicadores e cadência comercial que a equipe consegue manter sozinha',
      'Acompanhamento mensal com feedback técnico',
      'Modelos de 3, 6 ou 12 meses conforme necessidade',
      'Evolução contínua com suporte direto',
    ],
    cta: 'Quero Estruturar Minha Equipe',
    showScarcityBadge: true,
  },
};

export default function CesarCarvalhoICP2() {
  return <CesarCarvalhoTemplate copy={copy} />;
}
