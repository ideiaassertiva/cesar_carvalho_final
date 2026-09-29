"use client";

import { CesarCarvalhoTemplate, CesarCarvalhoCopy } from '@/components/lp/CesarCarvalhoTemplate';

const copy: CesarCarvalhoCopy = {
  hero: {
    headline: 'Sua empresa não vai crescer enquanto tudo depender de você.',
    subheadline: 'Estruture decisões, vendas e atendimento em um processo que funciona mesmo quando você não está — e ganhe previsibilidade real no faturamento.',
    cta: 'Quero Sair do Centro da Operação',
  },
  pain: {
    cardTitle: 'O empreendedor que ainda faz tudo sozinho',
    bullets: [
      'Você atende, vende, decide, apaga incêndio e ainda tenta pensar no crescimento — tudo ao mesmo tempo.',
      'Quando você para, a empresa para junto.',
      'Já tentou contratar, mas ninguém faz do jeito que você faz — porque não existe processo para ensinar.',
      'Sabe que precisa se organizar, mas no dia a dia não existe espaço para isso.',
      'Trabalha mais do que nunca e sente que a empresa não anda na mesma velocidade que você.',
      'Tem potencial real, mas sem estrutura ele não vira resultado consistente.',
    ],
    quote: 'Você não precisa trabalhar mais. Precisa parar de centralizar tudo em você.',
    cta: 'Este sou eu',
  },
  differentiation: {
    title: 'Existem muitos cursos e fórmulas prontas no mercado',
    subtitle: 'Mas nenhuma fórmula genérica tira você do centro da sua própria operação.',
    paragraphs: [
      'Não é por falta de vontade. Cursos, fórmulas e métodos replicáveis são pensados para quem já tem equipe e estrutura, não para quem ainda é o motor da empresa.',
      'Eles ignoram o que faz o seu momento ser único: você decide tudo, faz tudo e ainda é quem vende mais.',
    ],
    closing: 'Ninguém entende mais do seu negócio do que você. O meu papel não é te ensinar mais uma fórmula pronta. É te ajudar a transformar o que só está na sua cabeça em processo, para que a empresa comece a andar com ou sem você por perto.',
  },
  authority: {
    closingBeforeBadge: 'Trabalho com poucos clientes por vez porque resultado exige atenção, não volume.',
    closingAfterBadge: 'Se você chegou até aqui fazendo tudo sozinho, o próximo passo não é trabalhar mais, é finalmente ter alguém olhando de fora para o que só você enxergava por dentro.',
    showScarcityBadge: true,
  },
  methodology: {
    intro: 'Eu acredito que todo método precisa ser simples, para que seja aplicado por quem toca o negócio sozinho, sem tempo sobrando. Um processo desenhado para tirar você do centro da operação, um passo de cada vez.',
  },
  pathways: {
    programName: 'Programa de Estruturação',
    subtitle: 'Para todo empreendedor que quer deixar de ser operacional e passar a ser mais estratégico.',
    mainParagraph: 'Se você é o empreendedor que hoje faz e resolve tudo, este é o seu caminho. Aqui não existe fórmula genérica de quem já tem equipe: eu olho de perto para a sua rotina, entendo onde só você consegue operar e construímos juntos, passo a passo, o mínimo de estrutura para você sair do centro da operação. Você executa o processo, eu trago a experiência, a direção e o acompanhamento pessoal para que cada passo gere resultado.',
    notThisLabel: 'Isso não é uma mentoria informativa',
    notThisText: 'Onde eu te dou um curso pronto e você tenta adaptar sozinho ao seu negócio, sem ninguém olhando o seu dia a dia.',
    isThisText: 'Eu analiso a sua rotina de perto, ao seu lado, e construímos juntos o primeiro processo que a sua empresa vai ter, feito sob medida para o seu momento.',
    includes: [
      'Clareza do que só você deveria continuar fazendo — e do que pode sair da sua mão',
      'Primeiro processo comercial simples e replicável',
      'Roteiro de vendas que qualquer pessoa consegue aplicar, não só você',
      'Acompanhamento mensal com feedback técnico',
      'Modelos de 3, 6 ou 12 meses conforme necessidade',
      'Evolução contínua com suporte direto',
    ],
    cta: 'Quero Sair do Centro da Operação',
    showScarcityBadge: true,
  },
};

export default function CesarCarvalhoICP1() {
  return <CesarCarvalhoTemplate copy={copy} />;
}
