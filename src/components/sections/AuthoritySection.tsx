"use client";

import { motion } from "framer-motion";

export function AuthoritySection() {
  return (
    <section className="py-24 px-4 bg-black/40">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-2xl overflow-hidden relative glass-panel"
          >
            {/* Placeholder for César's Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10" />
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <span className="text-white/20 font-mono">[ Foto César Carvalho - P&B, Contraste Alto ]</span>
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-20">
              <p className="text-3xl font-serif italic text-white/90">&quot;Vender é desenhar o caminho mais curto entre a dor do cliente e a sua solução.&quot;</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">Quem é César Carvalho?</h2>

            <div className="space-y-4 text-lg text-white/70">
              <p>
                Não sou palestrante motivacional. Sou construtor de processos.
                Ao longo dos últimos anos, estruturei e escalei operações comerciais que saíram do zero para milhões em faturamento.
              </p>
              <p>
                Minha abordagem une a frieza dos dados com a profundidade psicológica das negociações de alto nível. Eu não vou te ensinar a &quot;sorrir mais&quot; ou &quot;falar bonito&quot;. Vou te entregar frameworks validados, scripts que convertem e uma gestão que não aceita desculpas.
              </p>
              <p className="text-white font-medium">
                Se você busca atalhos mágicos, este não é o lugar. Se você quer construir um império sólido, nós precisamos conversar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">+X Mi</p>
                <p className="text-sm text-white/50">Gerenciados em Vendas</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">+Y</p>
                <p className="text-sm text-white/50">Empresas Estruturadas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
