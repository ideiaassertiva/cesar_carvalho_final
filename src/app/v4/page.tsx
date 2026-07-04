"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cinzel, Raleway, Cardo } from 'next/font/google';
import {
  ArrowRight,
  BarChart3,
  Target,
  TrendingUp,
  ClipboardCheck,
  Search,
  CheckCircle2,
  XCircle,
  Briefcase,
  UserCheck
} from 'lucide-react';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const cardo = Cardo({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'] });

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20 pb-20">
      {/* Imagem de fundo - Lado Direito */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradientes para mesclar a imagem ao fundo preto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
        <div className="absolute right-0 top-0 w-full md:w-[60%] h-full">
          <img
            src="/images/cesar-hero.png"
            alt="César Carvalho"
            className="w-full h-full object-cover object-right md:object-center opacity-70"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center md:items-start text-center md:text-left max-w-7xl h-full justify-center">
        {/* Logo - Canto Inferior Direito (agora é relativo à tela) */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="absolute bottom-10 right-10 hidden md:block z-30">
          <img src="/images/logo-nome-branco.png" alt="César Carvalho Logo" className="h-48 object-contain opacity-80" />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex-1 flex flex-col justify-center max-w-3xl pt-16 md:pt-0">
          <h1 className={`${cinzel.className} text-5xl md:text-7xl font-bold text-[#F9F7F3] tracking-tight leading-tight mb-8 drop-shadow-lg`}>
            O crescimento <br/>
            da sua empresa <br/>
            começa quando <br/>
            <span className="text-[#A99340]">as vendas deixam</span> <br/>
            <span className="text-[#A99340]">de depender apenas</span> <br/>
            <span className="text-[#A99340]">de você.</span>
          </h1>
          <p className={`${raleway.className} text-xl md:text-2xl text-[#F9F7F3]/90 mb-12 max-w-2xl font-light drop-shadow-md mx-auto md:mx-0`}>
            Organize sua operação comercial com um método claro e alcance previsibilidade no faturamento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <a href="#lead-form" className={`${raleway.className} w-full sm:w-auto px-8 py-4 bg-[#A99340] hover:bg-[#8c7934] text-[#F9F7F3] rounded-sm font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(169,147,64,0.3)]`}>
              Quero Estruturar Minhas Vendas <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Animated Arrow Down */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 md:left-20 transform -translate-x-1/2 md:translate-x-0 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <a href="#diagnostico" className="text-[#A99340]/60 hover:text-[#A99340] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PainDiagnostic() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="text-center mb-24">
          <h2 className={`${cinzel.className} text-4xl md:text-5xl font-bold text-[#062237] mb-6`}>Qual é o seu cenário hoje?</h2>
          <div className="w-20 h-1 bg-[#A99340] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Card 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col h-full bg-white border border-[#222B30]/10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all overflow-hidden relative"
          >
            <div className="absolute top-0 w-full h-1 bg-[#A99340]"></div>
            <div className="p-10 md:p-14 flex flex-col h-full">
              <div className="mb-10 text-center">
                <h3 className={`${cinzel.className} text-3xl font-bold text-[#062237]`}>O dono que faz tudo sozinho</h3>
              </div>
              <ul className={`${raleway.className} space-y-8 text-[#222B30] text-lg flex-1`}>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#A99340] shrink-0 mt-1" />
                  <p>Você vende, atende, administra e ainda tenta crescer — ao mesmo tempo.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#A99340] shrink-0 mt-1" />
                  <p>Quando você para o faturamento para junto.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#A99340] shrink-0 mt-1" />
                  <p>Já tentou contratar, mas não deu certo porque não havia processo.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#A99340] shrink-0 mt-1" />
                  <p>Sabe que precisa se organizar, mas o dia a dia não deixa espaço.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#A99340] shrink-0 mt-1" />
                  <p>Trabalha mais do que nunca e ainda não sente que está avançando.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#A99340] shrink-0 mt-1" />
                  <p>Tem potencial real, mas sem estrutura ele não se converte em resultado</p>
                </li>
              </ul>
              <div className="mt-12 pt-10 border-t border-[#222B30]/10 text-center">
                <p className={`${cardo.className} italic text-2xl md:text-3xl text-[#062237] mb-8 leading-snug`}>"O gargalo não é falta de esforço. É falta de estrutura."</p>
                <a href="#caminhos" className={`${raleway.className} inline-block px-10 py-4 border-2 border-[#062237] text-[#062237] hover:bg-[#062237] hover:text-white rounded-sm font-bold text-lg transition-colors uppercase tracking-widest`}>
                  Este sou eu
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col h-full bg-white border border-[#222B30]/10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all overflow-hidden relative"
          >
            <div className="absolute top-0 w-full h-1 bg-[#062237]"></div>
            <div className="p-10 md:p-14 flex flex-col h-full">
              <div className="mb-10 text-center">
                <h3 className={`${cinzel.className} text-3xl font-bold text-[#062237]`}>Tem equipe, mas nada funciona quando você não está</h3>
              </div>
              <ul className={`${raleway.className} space-y-8 text-[#222B30] text-lg flex-1`}>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#062237] shrink-0 mt-1" />
                  <p>Você contratou, mas a equipe ainda depende de você para tudo.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#062237] shrink-0 mt-1" />
                  <p>As metas existem no papel, mas ninguém sabe exatamente como bater.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#062237] shrink-0 mt-1" />
                  <p>Faltam indicadores, cadência comercial e reuniões que geram resultado.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#062237] shrink-0 mt-1" />
                  <p>O atendimento varia conforme quem está de plantão — sem padrão.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#062237] shrink-0 mt-1" />
                  <p>Você lidera apagando incêndios, não construindo performance.</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#062237] shrink-0 mt-1" />
                  <p>Mais cobrança não resolveu. Falta método, direção e processo.</p>
                </li>
              </ul>
              <div className="mt-12 pt-10 border-t border-[#222B30]/10 text-center">
                <p className={`${cardo.className} italic text-2xl md:text-3xl text-[#062237] mb-8 leading-snug`}>"Sua equipe não precisa de mais pressão. Precisa de um caminho claro."</p>
                <a href="#caminhos" className={`${raleway.className} inline-block px-10 py-4 border-2 border-[#062237] text-[#062237] hover:bg-[#062237] hover:text-white rounded-sm font-bold text-lg transition-colors uppercase tracking-widest`}>
                  Este sou eu
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section className="py-32 bg-[#062237] relative">
      {/* Texture overlay mais visível */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
           style={{ backgroundImage: 'url("/images/fundo-textura-2.png")' }}>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="text-center mb-20">
          <h2 className={`${cinzel.className} text-4xl md:text-5xl font-bold text-[#F9F7F3] mb-6`}>Quem eu sou</h2>
          <div className="w-20 h-1 bg-[#A99340] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="md:col-span-5 relative">
            <div className="relative p-3 bg-[#23444D] rounded-sm">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-[#222B30] relative z-10 border-2 border-[#A99340]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#062237] via-transparent to-transparent z-10"></div>
                {/* Imagem em Grayscale exigida */}
                <img src="/images/cesar-dobra3.png" alt="César Carvalho" className="object-cover w-full h-full grayscale hover:grayscale-[0.5] transition-all duration-700" />
                <div className="absolute bottom-8 left-8 z-20">
                  <p className={`${cinzel.className} text-[#F9F7F3] font-bold text-3xl tracking-wider`}>CÉSAR CARVALHO</p>
                  <p className={`${raleway.className} text-[#A99340] font-semibold tracking-widest text-sm uppercase mt-2`}>Estrategista Comercial</p>
                </div>
              </div>
            </div>
            {/* Decoração sutil atrás da foto */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#A99340]/20 z-0 rounded-sm"></div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="md:col-span-7">
            <div className={`${raleway.className} space-y-6 text-[#F9F7F3]/90 text-lg md:text-xl font-light leading-relaxed`}>
              <p>
                <strong className="text-[#F9F7F3] font-bold text-2xl md:text-3xl block mb-4">Meu nome é César Carvalho.</strong>
                Sou estrategista comercial, mentor e formador de líderes. Ao longo da minha trajetória, trabalhei com empresários e equipes que tinham potencial real mas enfrentavam um problema em comum: <strong className="text-[#A99340] font-semibold">nenhum método para transformar esse potencial em resultado consistente.</strong>
              </p>
              <p>
                Meu trabalho não é vender soluções prontas.
              </p>
              <p>
                É enxergar o que está travando sua operação, reorganizar as bases, construir um processo comercial funcional e acompanhar a evolução com precisão.
              </p>
              <p>
                Meu trabalho une ciência comportamental, neurovendas e liderança estratégica em uma <strong className="text-[#A99340] font-semibold">metodologia que respeita quem você é e onde você quer chegar.</strong>
              </p>

              <div className="pl-6 border-l-2 border-[#A99340] my-8 py-2">
                <p className={`${cardo.className} text-2xl text-[#F9F7F3] italic leading-relaxed`}>
                  "Vender é um ato de consciência. Liderar é despertar grandeza em outros. Minha missão é guiar empresários a expandirem seus resultados através da performance, da verdade e da estrutura."
                </p>
              </div>

              <p>
                Trabalho com poucos clientes por vez porque resultado exige atenção, não volume. Se você chegou até aqui, provavelmente já percebeu que o próximo passo não é trabalhar mais, é trabalhar diferente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  const methods = [
    {
      icon: <Search className="w-6 h-6 text-[#F9F7F3]" />,
      title: "1. DIAGNÓSTICO DA OPERAÇÃO ATUAL",
      description: "Antes de propor qualquer coisa, eu entendo onde sua empresa está de verdade. Números, processos, comportamentos, gargalos ocultos. Sem isso, qualquer plano é chute."
    },
    {
      icon: <XCircle className="w-6 h-6 text-[#F9F7F3]" />,
      title: "2. IDENTIFICAÇÃO DOS GARGALOS COMERCIAIS",
      description: "Onde as oportunidades estão vazando? Onde a equipe trava? Onde o processo não existe ou não funciona? Só com esse mapa claro é possível agir com precisão."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#F9F7F3]" />,
      title: "3. ORGANIZAÇÃO DOS PROCESSOS",
      description: "Estruturação da operação comercial: roteiro de vendas, padrão de atendimento, cadência de prospecção e funil com etapas claras para todos seguirem."
    },
    {
      icon: <Target className="w-6 h-6 text-[#F9F7F3]" />,
      title: "4. DEFINIÇÃO DE INDICADORES",
      description: "O que não é medido não é gerenciado. Definimos os KPIs certos para o seu momento, sem excesso de painel, sem dado inútil."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-[#F9F7F3]" />,
      title: "5. ESTRUTURAÇÃO DA ROTINA COMERCIAL",
      description: "Uma operação de vendas que funciona tem ritmo. Reuniões com propósito, revisões de meta, feedback técnico e uma rotina que gera resultado, não apenas movimento."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#F9F7F3]" />,
      title: "6. ACOMPANHAMENTO E EVOLUÇÃO DA PERFORMANCE",
      description: "Implementação não é o fim, é o começo. Acompanho a evolução, ajusto o que precisa e garanto que o método viva dentro da operação, não apenas no planejamento."
    }
  ];

  return (
    <section className="py-24 bg-[#F9F7F3] border-t border-[#222B30]/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16 text-center">
          <h2 className={`${cinzel.className} text-4xl md:text-5xl font-bold text-[#062237] mb-4`}>Meu Método</h2>
          <h3 className={`${cinzel.className} text-2xl md:text-3xl font-bold text-[#A99340] mb-6`}>Por Trás das Vendas (PTV)</h3>
          <div className="w-20 h-1 bg-[#A99340] mx-auto mb-6"></div>
          <p className={`${raleway.className} text-xl text-[#222B30] max-w-3xl mx-auto font-light leading-relaxed`}>
            Eu acredito que todo método precisa ser simples, para que seja aplicado e replicado com consistência. E isso que faz a diferença. Um processo desenhado para a realidade de cada empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
              }}
              className="bg-white border border-[#222B30]/10 p-8 rounded-sm group hover:shadow-xl transition-all hover:border-[#A99340]"
            >
              <div className="w-14 h-14 bg-[#23444D] rounded-sm flex items-center justify-center mb-6 shadow-md group-hover:bg-[#062237] transition-colors">
                {method.icon}
              </div>
              <h3 className={`${cinzel.className} text-xl font-bold text-[#062237] mb-3`}>{method.title}</h3>
              <p className={`${raleway.className} text-[#222B30]/80`}>{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pathways() {
  return (
    <section id="caminhos" className="py-24 bg-[#062237] relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none" style={{ backgroundImage: 'url("/images/fundo-textura-2.png")' }}></div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <h2 className={`${cinzel.className} text-4xl md:text-5xl font-bold text-[#F9F7F3] mb-6`}>Comigo, você tem dois caminhos</h2>
          <div className="w-20 h-1 bg-[#A99340] mx-auto mb-6"></div>
          <p className={`${raleway.className} text-xl text-[#F9F7F3]/80 max-w-2xl mx-auto`}>Cada um pensado para um momento diferente. Qual é o seu?</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-transparent"
        >
          {/* Layout usando Grid para separar como duas colunas distintas com espaçamento no meio */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Coluna 1 */}
            <div className="flex flex-col bg-[#142e42]/80 border border-white/20 rounded-sm overflow-hidden">
              <div className={`${cinzel.className} p-6 md:p-8 border-b border-white/20 text-2xl md:text-3xl text-[#A99340] font-bold bg-[#142e42] text-center uppercase tracking-widest min-h-[140px] flex items-center justify-center`}>
                Estruturação Comercial para Empresas
              </div>
              <div className="p-6 md:p-8 border-b border-white/20 text-white text-lg bg-[#142e42]/90 text-center font-medium min-h-[100px] flex items-center justify-center">
                Para empresas com equipe ou em fase de organização comercial.
              </div>
              <div className="p-6 md:p-8 border-b border-white/20 text-white/90 text-lg leading-relaxed bg-[#142e42]/60 min-h-[220px]">
                Se sua empresa precisa sair do improviso, ter processos definidos, indicadores funcionando e uma equipe que vende com consistência, <strong className="text-white font-bold">esse é o caminho</strong>. Vamos construir a base comercial que sua operação precisa para crescer sem depender da sua presença constante.
              </div>
              <div className="p-6 md:p-8 bg-[#142e42]/40 flex-1 flex flex-col">
                <span className={`${cardo.className} block mb-6 font-bold text-[#A99340] text-xl`}>O que está incluso:</span>
                <ul className="space-y-4 mb-10 flex-1">
                  {[
                    'Diagnóstico completo da operação comercial',
                    'Estruturação do processo de vendas',
                    'Definição e implantação de indicadores',
                    'Organização da rotina e cadência comercial',
                    'Alinhamento entre liderança, equipe e execução',
                    'Previsibilidade real no faturamento'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-[#A99340] mr-3 shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center mt-auto pt-8">
                  <a
                    href="#lead-form"
                    className={`${raleway.className} px-10 py-4 bg-[#A99340] hover:bg-[#8c7934] text-white rounded-sm font-bold text-lg transition-colors shadow-[0_0_15px_rgba(169,147,64,0.4)] uppercase tracking-widest text-center`}
                  >
                    Esse é o meu caminho
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="flex flex-col bg-[#1a354a]/80 border border-white/20 rounded-sm overflow-hidden">
              <div className={`${cinzel.className} p-6 md:p-8 border-b border-white/20 text-2xl md:text-3xl text-[#A99340] font-bold bg-[#1a354a] text-center uppercase tracking-widest min-h-[140px] flex items-center justify-center`}>
                Programa de Acompanhamento para Empreendedores
              </div>
              <div className="p-6 md:p-8 border-b border-white/20 text-white text-lg bg-[#1a354a]/90 text-center font-medium min-h-[100px] flex items-center justify-center">
                Para quem quer aprender a vender com estratégia e consistência.
              </div>
              <div className="p-6 md:p-8 border-b border-white/20 text-white/90 text-lg leading-relaxed bg-[#1a354a]/60 min-h-[220px]">
                Se você é empreendedor e quer aprender a vender seus produtos ou serviços de forma previsível, estratégica e escalável — esse programa foi feito para você. Com acompanhamento próximo e personalizado ao longo do tempo, construímos juntos sua máquina comercial.
              </div>
              <div className="p-6 md:p-8 bg-[#1a354a]/40 flex-1 flex flex-col">
                <span className={`${cardo.className} block mb-6 font-bold text-[#A99340] text-xl`}>O que está incluso:</span>
                <ul className="space-y-4 mb-10 flex-1">
                  {[
                    'Clareza de oferta e posicionamento comercial',
                    'Roteiro e processo de vendas personalizado',
                    'Desenvolvimento de linguagem e autoridade',
                    'Acompanhamento mensal com feedback técnico',
                    'Modelos de 3, 6 ou 12 meses conforme necessidade',
                    'Evolução contínua com suporte direto'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-[#A99340] mr-3 shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center mt-auto pt-8">
                  <a
                    href="#lead-form"
                    className={`${raleway.className} px-10 py-4 bg-[#A99340] hover:bg-[#8c7934] text-white rounded-sm font-bold text-lg transition-colors shadow-[0_0_15px_rgba(169,147,64,0.4)] uppercase tracking-widest text-center`}
                  >
                    Esse é o meu caminho
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    cnpj: '',
    faturamento: '',
    momento: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add external form handler integration here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    let value = e.target.value;

    if (e.target.name === 'whatsapp' || e.target.name === 'cnpj') {
      value = value.replace(/\D/g, ''); // Remove non-numeric characters
    }

    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <section id="lead-form" className="py-24 bg-[#F9F7F3] relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white border-2 border-[#222B30]/10 rounded-sm p-10 md:p-16 shadow-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className={`${cinzel.className} text-3xl md:text-4xl font-bold text-[#062237] mb-4`}>Dê o primeiro passo rumo à previsibilidade do seu faturamento.</h2>
            <p className={`${raleway.className} text-[#222B30] text-lg`}>Preencha os dados abaixo com atenção. Nossa equipe avaliará seu momento atual para direcioná-lo ao próximo passo mais adequado.</p>
          </motion.div>

          <form onSubmit={handleSubmit} className={`${raleway.className} space-y-8`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#062237] uppercase tracking-wider">Nome completo</label>
                <input required type="text" name="nome" onChange={handleChange} className="w-full bg-[#F9F7F3] border border-[#222B30]/20 rounded-sm px-4 py-3 text-[#222B30] focus:outline-none focus:border-[#A99340] focus:ring-1 focus:ring-[#A99340] transition-colors" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#062237] uppercase tracking-wider">WhatsApp</label>
                <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full bg-[#F9F7F3] border border-[#222B30]/20 rounded-sm px-4 py-3 text-[#222B30] focus:outline-none focus:border-[#A99340] focus:ring-1 focus:ring-[#A99340] transition-colors" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#062237] uppercase tracking-wider">E-mail</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#F9F7F3] border border-[#222B30]/20 rounded-sm px-4 py-3 text-[#222B30] focus:outline-none focus:border-[#A99340] focus:ring-1 focus:ring-[#A99340] transition-colors" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#062237] uppercase tracking-wider">CNPJ</label>
                <input required type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} className="w-full bg-[#F9F7F3] border border-[#222B30]/20 rounded-sm px-4 py-3 text-[#222B30] focus:outline-none focus:border-[#A99340] focus:ring-1 focus:ring-[#A99340] transition-colors" placeholder="00.000.000/0000-00" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-[#062237] uppercase tracking-wider">Faturamento aproximado</label>
                <select required name="faturamento" defaultValue="" onChange={handleChange} className="w-full bg-[#F9F7F3] border border-[#222B30]/20 rounded-sm px-4 py-3 text-[#222B30] focus:outline-none focus:border-[#A99340] focus:ring-1 focus:ring-[#A99340] transition-colors appearance-none">
                  <option value="" disabled>Selecione uma faixa</option>
                  <option value="Ate 10k">Até R$ 10.000/mês</option>
                  <option value="De 10k a 80k">De R$ 10.000 a R$ 80.000/mês</option>
                  <option value="De 80k a 300k">De R$ 80.000 a R$ 300.000/mês</option>
                  <option value="De 300k a 1M">De R$ 300.000 a R$ 1.000.000/mês</option>
                  <option value="Acima de 1M">Acima de R$ 1.000.000/mês</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <label className="text-sm font-bold text-[#062237] uppercase tracking-wider">Qual o momento atual da sua operação?</label>
              <select required name="momento" defaultValue="" onChange={handleChange} className="w-full bg-[#F9F7F3] border border-[#222B30]/20 rounded-sm px-4 py-3 text-[#222B30] focus:outline-none focus:border-[#A99340] focus:ring-1 focus:ring-[#A99340] transition-colors appearance-none">
                <option value="" disabled>Selecione o seu momento atual</option>
                <option value="mei">Sou MEI ou autônomo.</option>
                <option value="centralizo">Sou dono e ainda centralizo quase tudo.</option>
                <option value="sem-processo">Tenho empresa com equipe, mas falta processo comercial.</option>
                <option value="escalar">Já tenho equipe de vendas e quero escalar com mais previsibilidade.</option>
              </select>
            </div>

            <button type="submit" className={`${cinzel.className} w-full py-5 mt-8 bg-[#A99340] hover:bg-[#8c7934] text-[#F9F7F3] rounded-sm font-bold text-xl transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(169,147,64,0.2)] flex justify-center items-center tracking-wide`}>
              Solicitar Reunião Estratégica
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <img src="/images/logo-nome-dourado.png" alt="César Carvalho Logo" className="h-16 md:h-24 object-contain mb-6" />
        <p className={`${raleway.className} text-white/50 text-sm`}>
          &copy; {new Date().getFullYear()} César Carvalho. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default function CesarCarvalhoV4() {
  return (
    <main className="min-h-screen bg-[#F9F7F3] text-[#222B30] font-sans selection:bg-[#A99340]/30 selection:text-[#062237]">
      <Hero />
      <PainDiagnostic />
      <Authority />
      <Methodology />
      <Pathways />
      <LeadForm />
      <Footer />
    </main>
  );
}
