"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 px-4 bg-black overflow-hidden">

      {/* Background Image - Right Side */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradients to blend the image smoothly into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
        <div className="absolute right-0 top-0 w-full md:w-[60%] h-full">
          <Image
            src="/images/cesar-hero.png"
            alt="César Carvalho"
            fill
            className="object-cover object-right md:object-center opacity-70"
            priority
          />
        </div>
      </div>

      <div className="container relative z-20 max-w-7xl mx-auto space-y-8">
        {/* Top Logo */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-48 h-16">
          <Image
            src="/images/logo-branco.png"
            alt="Logo César Carvalho"
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-2xl text-center md:text-left pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Vagas abertas para consultoria premium
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight drop-shadow-lg text-white"
          >
            O crescimento da sua empresa começa quando <span className="text-amber-500">as vendas deixam de depender apenas de você.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mt-6 mb-8 drop-shadow-md mx-auto md:mx-0 font-light"
          >
            Organize sua operação comercial com um método claro e grande previsibilidade no faturamento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => document.getElementById('form-aplicacao')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-black bg-amber-500 rounded-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(245,158,11,0.3)]"
            >
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full" />
              Quero Estruturar Minhas Vendas
            </button>
            <p className="mt-4 text-sm text-white/50">Aplicação em menos de 2 minutos</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
