"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { QualificationForm } from "@/components/forms/QualificationForm";
import { MoveDown } from "lucide-react";

export function StoryExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full text-white" style={{ height: "600vh" }}>
      {/* ProgressBar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-white z-50 origin-left"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />

      {/* Fold 1: The Weight (Pain) */}
      <FoldOne scrollProgress={scrollYProgress} />

      {/* Fold 2: The Bottleneck (Realization) */}
      <FoldTwo scrollProgress={scrollYProgress} />

      {/* Fold 3: The Illusion of Control */}
      <FoldThree scrollProgress={scrollYProgress} />

      {/* Fold 4: The Turning Point */}
      <FoldFour scrollProgress={scrollYProgress} />

      {/* Fold 5: The Machine (Release) */}
      <FoldFive scrollProgress={scrollYProgress} />

      {/* Fold 6: The Climax (Qualification) */}
      <FoldSix scrollProgress={scrollYProgress} />
    </div>
  );
}

function FoldOne({ scrollProgress }: { scrollProgress: any }) {
  const opacity = useTransform(scrollProgress, [0, 0.15], [1, 0]);
  const y = useTransform(scrollProgress, [0, 0.15], [0, -100]);
  const scale = useTransform(scrollProgress, [0, 0.15], [1, 0.95]);

  return (
    <motion.section
      style={{ opacity, y, scale }}
      className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center p-6 bg-black z-10"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/50 tracking-[0.2em] uppercase text-sm"
        >
          A Realidade Nua e Crua
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter"
        >
          Você não construiu uma empresa.
          <br />
          <span className="text-white/30">Você construiu uma prisão.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto"
        >
          Acordar cedo, dormir tarde, apagar incêndios e ser o único capaz de vender. Até quando sua saúde mental vai sustentar seu faturamento?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs uppercase tracking-widest">A fundura do poço</span>
          <MoveDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </motion.section>
  );
}

function FoldTwo({ scrollProgress }: { scrollProgress: any }) {
  const opacity = useTransform(scrollProgress, [0.1, 0.25, 0.35], [0, 1, 0]);
  const y = useTransform(scrollProgress, [0.1, 0.25, 0.35], [100, 0, -100]);

  return (
    <motion.section
      style={{ opacity, y }}
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center p-6 bg-black z-20 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          O Pior Funcionário do Mês:<br/>
          <span className="text-white/40 italic">O Dono.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
          {[
            { title: "Sua agenda dita o teto", desc: "Se você não atende a ligação, o negócio não fecha. Sua empresa depende da sua estamina física." },
            { title: "Ninguém vende como você", desc: "A velha desculpa para não treinar ninguém e manter o ego inflamado de ser o 'salvador' da pátria." },
            { title: "A estagnação dói", desc: "O faturamento não cresce há meses. E você sabe exatamente o porquê: você é o gargalo." }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-xl">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FoldThree({ scrollProgress }: { scrollProgress: any }) {
  const opacity = useTransform(scrollProgress, [0.3, 0.45, 0.55], [0, 1, 0]);
  const scale = useTransform(scrollProgress, [0.3, 0.45, 0.55], [0.8, 1, 1.2]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center p-6 bg-[#050505] z-30 pointer-events-none"
    >
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-6xl font-medium leading-tight">
          A Ilusão do Controle te custa <br/>
          <span className="font-bold underline decoration-red-900/50 underline-offset-8">sua liberdade.</span>
        </h2>
        <p className="text-2xl text-white/50 font-light italic">
          &quot;Se eu quiser bem feito, eu mesmo tenho que fazer.&quot;
        </p>
        <p className="text-xl text-white/40">
          Essa crença limitante é o que te mantém refém. Você não precisa de mais horas no dia. Você precisa de engenharia de vendas.
        </p>
      </div>
    </motion.section>
  );
}

function FoldFour({ scrollProgress }: { scrollProgress: any }) {
  const opacity = useTransform(scrollProgress, [0.5, 0.65, 0.75], [0, 1, 0]);
  const filter = useTransform(scrollProgress, [0.5, 0.65, 0.75], ["blur(10px)", "blur(0px)", "blur(10px)"]);

  return (
    <motion.section
      style={{ opacity, filter }}
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center p-6 bg-gradient-to-b from-[#050505] to-[#111] z-40 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">O Ponto de Virada</h2>
          <p className="text-lg text-white/60">
            Chega um momento na jornada de todo herói em que ele percebe que a força bruta não é mais suficiente.
            Ele precisa de sabedoria. Ele precisa de um sistema.
          </p>
          <p className="text-lg text-white/60">
            Imagine acordar, olhar o CRM e ver que vendas foram fechadas sem a sua presença. Reuniões agendadas sem o seu dedo. Negócios escalando enquanto você janta com sua família.
          </p>
        </div>
        <div className="flex-1 w-full aspect-square rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
          <span className="text-2xl font-light text-white/80 z-10 text-center px-8">A mudança de paradigma.</span>
        </div>
      </div>
    </motion.section>
  );
}

function FoldFive({ scrollProgress }: { scrollProgress: any }) {
  const opacity = useTransform(scrollProgress, [0.7, 0.85, 0.95], [0, 1, 0]);
  const y = useTransform(scrollProgress, [0.7, 0.85, 0.95], [50, 0, -50]);

  return (
    <motion.section
      style={{ opacity, y }}
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center p-6 bg-[#111] z-50 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-5xl md:text-6xl font-bold">
          A Máquina de Vendas
        </h2>
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light">
          Nós construímos o motor. Nós refinamos as engrenagens (processos) e abastecemos com o combustível certo (estratégia). Você apenas assume a direção de uma empresa escalável.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {["Previsibilidade", "Autonomia", "Escala", "Paz de Espírito"].map((word, i) => (
            <div key={i} className="py-4 border-b border-white/20 text-white/80 font-medium">
              {word}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FoldSix({ scrollProgress }: { scrollProgress: any }) {
  // This fold is NOT pointer-events-none because it has the form
  const opacity = useTransform(scrollProgress, [0.85, 0.95], [0, 1]);
  // Add pointer-events only when visible
  const pointerEvents = useTransform(scrollProgress, [0.85, 0.9], ["none", "auto"]);

  return (
    <motion.section
      style={{ opacity, pointerEvents: pointerEvents as any }}
      className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#111] to-[#1a1a1a] z-50"
    >
      <div className="max-w-3xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">O Próximo Capítulo</h2>
          <p className="text-white/60 text-lg">
            Descubra se você está pronto para abdicar do micro-gerenciamento e abraçar o crescimento estruturado.
          </p>
        </div>

        {/* Anti-gravity glassmorphism effect container */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur-lg" />
          <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <QualificationForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
