"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Diagnóstico Brutal",
    desc: "Analisamos seus números, processos atuais (ou a falta deles) e onde você está sangrando dinheiro sem perceber."
  },
  {
    title: "Engenharia da Oferta",
    desc: "Reestruturamos como seu produto/serviço é apresentado. Deixamos de vender características para vender a transformação inevitável."
  },
  {
    title: "Processo e Playbook",
    desc: "Desenhamos o funil de ponta a ponta. Scripts, objeções mapeadas, cadências de follow-up. Nada fica ao acaso."
  },
  {
    title: "Tecnologia e Dados",
    desc: "Implementação de CRM e dashboards. Se não podemos medir, não podemos gerenciar. Fim do 'eu acho'."
  },
  {
    title: "Escala e Gestão",
    desc: "Treinamento da equipe, rituais de gestão, acompanhamento de métricas e tração para crescimento contínuo."
  }
];

export function MethodSection() {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">O Método de Estruturação</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Um ecossistema comercial não nasce da noite para o dia. Ele é forjado através de um método rígido, previsível e escalável em 5 etapas.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10" />

                {/* Content */}
                <div className={`pl-20 md:pl-0 w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                }`}>
                  <div className="glass-panel p-8 hover:bg-white/10 transition-colors">
                    <span className="text-white/20 font-mono text-xl mb-4 block">0{index + 1}</span>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
