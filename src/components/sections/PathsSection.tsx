"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function PathsSection() {
  return (
    <section className="py-24 px-4 bg-black/40 border-t border-white/5" id="aplicacao">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Escolha o seu nível de jogo</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Não atendemos todos os tipos de empresas. Nossas soluções são desenhadas para momentos específicos de maturidade de negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Nível 1: Estruturação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 flex flex-col h-full"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Estruturação Comercial</h3>
              <p className="text-white/50">Para empresas faturando até R$ 50k/mês</p>
            </div>

            <p className="text-white/80 mb-8 flex-grow">
              Ideal para quem está preso na operação, dependendo de si mesmo ou de indicações para vender.
              Vamos desenhar o seu primeiro processo comercial previsível, do script de vendas à contratação do seu primeiro SDR/Closer.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Mapeamento de ICP e Oferta",
                "Playbook de Vendas inicial",
                "Processo de Prospecção (Outbound/Inbound)",
                "Configuração básica de CRM"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <ArrowRight size={16} className="text-white/40" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Nível 2: Acompanhamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-10 flex flex-col h-full border-white/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-4 py-1 bg-white text-black text-xs font-bold rounded-bl-lg">
              PREMIUM
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Mentoria & Acompanhamento</h3>
              <p className="text-white/50">Para empresas acima de R$ 50k/mês</p>
            </div>

            <p className="text-white/80 mb-8 flex-grow">
              Para negócios que já validaram seu produto e precisam escalar a equipe comercial.
              Atuação direta nos seus indicadores, rituais de gestão, treinamento da equipe e otimização de conversão avançada.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Acompanhamento quinzenal/mensal",
                "Auditoria de calls e feedbacks diretos",
                "Otimização de funil e CAC",
                "Gestão de performance do time",
                "Recrutamento e seleção avançada"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                  <ArrowRight size={16} className="text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
