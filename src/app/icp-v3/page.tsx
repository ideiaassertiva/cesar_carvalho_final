"use client";

import { CesarCarvalhoTemplate, CesarCarvalhoCopy } from '@/components/lp/CesarCarvalhoTemplate';

const copy: CesarCarvalhoCopy = {
  hero: {
    headline: 'O que te trouxe até aqui não é o que vai te levar para o próximo nível.',
    subheadline: 'Repetir o que funcionou até aqui não vai te tirar do teto que você bateu. Descubra onde está o erro.',
    cta: 'Quero Escalar Minha Operação',
  },
  pain: {
    cardTitle: 'Tem processo, mas bateu um teto de crescimento',
    bullets: [
      'Sua equipe converte bem, mas o crescimento estagnou nos últimos meses.',
      'O processo que funcionou até aqui não aguenta a próxima meta de vendas.',
      'Toda decisão estratégica importante ainda passa pela sua mesa.',
      'Você sabe que precisa escalar, mas tem medo de perder a qualidade que construiu.',
      'Faltam indicadores de topo, os que mostram para onde crescer, não só o que já foi vendido.',
      'Contratar mais gente não resolveu: o gargalo não é volume de equipe, é direção.',
    ],
    quote: 'Escalar não é vender mais. É fazer o que já funciona, funcionar em maior escala.',
    cta: 'Este sou eu',
  },
  differentiation: {
    title: 'Existem muitas consultorias de crescimento no mercado',
    subtitle: 'Mas a maioria só sabe repetir o que já funciona para outra empresa e não para a sua.',
    paragraphs: [
      'Não é por falta de ambição. É porque escalar exige um olhar que só enxerga de fora do seu próprio processo.',
      'Consultorias de crescimento genéricas trazem benchmarks de mercado e ignoram o que fez a sua operação específica funcionar até aqui.',
      'Elas ignoram exatamente o que não pode se perder na escala: sua cultura comercial, seu histórico, o motivo pelo qual seu time já converte bem.',
    ],
    closing: 'Ninguém entende mais do seu negócio do que você. O meu papel não é substituir o que já funciona por um modelo genérico de crescimento. É somar um olhar técnico, de fora, experiente, para escalar sem perder o que te trouxe até aqui.',
  },
  authority: {
    closingBeforeBadge: 'Trabalho com poucos clientes por vez porque resultado exige atenção, não volume.',
    closingAfterBadge: 'Se sua operação já funciona e você quer escalar sem perder o controle, o próximo passo não é mudar tudo, é ajustar com precisão o que vai te levar ao próximo patamar.',
    showScarcityBadge: true,
  },
  methodology: {
    intro: 'Eu acredito que escalar não é reinventar o que já funciona, é ajustar com precisão cada parte do processo para aguentar a próxima meta. Um processo desenhado para levar uma operação que já funciona ao próximo nível.',
  },
  pathways: {
    programName: 'Programa de Aceleração Comercial',
    subtitle: 'Para quem já tem processo e quer escalar com método.',
    mainParagraph: 'Se você já tem equipe e processo comercial funcionando, mas sente que bateu um teto de crescimento, este é o seu caminho. Aqui não existe benchmark genérico de mercado: eu olho de perto para a sua operação, entendo o que fez ela funcionar até aqui e construímos juntos, passo a passo, o ajuste certo para o seu próximo patamar. A execução continua nas suas mãos — eu trago a experiência, a direção e o acompanhamento pessoal para que cada passo gere resultado na escala certa.',
    notThisLabel: 'Isso não é uma consultoria de benchmark',
    notThisText: 'Onde eu trago um modelo pronto de outra empresa e você tenta encaixar na sua realidade.',
    isThisText: 'Eu analiso profundamente a sua operação, ao seu lado, e construímos juntos o ajuste certo para escalar sem perder o que já funciona — não um modelo genérico de crescimento.',
    includes: [
      'Diagnóstico dos gargalos que travam a próxima fase de crescimento',
      'Redesenho dos processos para aguentar maiores metas',
      'Indicadores de topo para decisão estratégica de crescimento',
      'Acompanhamento mensal com feedback técnico',
      'Modelos de 3, 6 ou 12 meses conforme necessidade',
      'Evolução contínua com suporte direto',
    ],
    cta: 'Quero Escalar Minha Operação',
    showScarcityBadge: true,
  },
};

export default function CesarCarvalhoICP3() {
  return <CesarCarvalhoTemplate copy={copy} />;
}
