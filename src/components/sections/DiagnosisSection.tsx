"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function DiagnosisSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Por que sua empresa estagnou?</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A maioria dos negócios trava porque foca em táticas isoladas em vez de construir um ecossistema de vendas robusto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[2px] bg-white/20 z-0" />

          {/* Perfil 1 (Amador) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 relative z-10 border-red-500/20"
          >
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
              <X className="text-red-500" />
            </div>
            <h3 className="text-2xl font-bold mb-6">O Vendedor Refém</h3>
            <ul className="space-y-4">
              {[
                "Depende de indicações para fechar o mês",
                "Contrata pelo 'feeling' e reza para dar certo",
                "Não sabe quanto custa adquirir um cliente (CAC)",
                "Acha que o problema é sempre 'o lead desqualificado'",
                "O dono é o melhor (e às vezes o único) vendedor"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-red-500/50 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Perfil 2 (Profissional) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 relative z-10 border-white/20 bg-white/5"
          >
             <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <Check className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6">A Máquina de Vendas</h3>
            <ul className="space-y-4">
              {[
                "Previsibilidade de receita (sabe quanto vai faturar)",
                "Processo de onboarding de novos vendedores validado",
                "Acompanhamento diário de métricas de conversão",
                "Argumentação baseada em dados e dores reais",
                "O negócio cresce independente da presença do dono"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
