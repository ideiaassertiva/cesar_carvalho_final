"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cinzel, Raleway } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const CALENDLY_URL = "https://calendly.com/cesarcarvalho/30min";

// Destino pós-envio conforme "O que está te impedindo de ir para o próximo nível?".
// Exceção: momento "escalar" prevalece sobre qualquer impedimento e vai para o Calendly.
const REDIRECT_BY_IMPEDIMENTO: Record<string, string> = {
  'Não sei vender': '/obrigado-1',
  'Não sei formar um time de vendas': '/obrigado-2',
  'Não sei ler indicadores': '/obrigado-3',
  'Não tenho constância': '/obrigado-4',
  'Não tenho previsibilidade': '/obrigado-5',
  'Outro': '/obrigado-6',
};

// Converte os valores deste formulário para o contrato da API /api/submit
const MOMENTO_TO_API: Record<string, string> = {
  'mei': 'mei',
  'centralizo': 'eupresa',
  'sem-processo': 'equipe_sem_processo',
  'escalar': 'equipe_escalar',
};

const FATURAMENTO_TO_API: Record<string, string> = {
  'Ate 10k': 'under_10k',
  'De 10k a 80k': '10k_to_80k',
  'De 80k a 300k': '80k_to_300k',
  'De 300k a 1M': '300k_to_1m',
  'Acima de 1M': 'over_1m',
};

export function LeadForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    cnpj: '',
    faturamento: '',
    momento: '',
    impedimento: '',
    impedimento_outro: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.nome,
          phone: formData.whatsapp,
          email: formData.email,
          cnpj: formData.cnpj,
          momento: MOMENTO_TO_API[formData.momento] || formData.momento,
          revenue: FATURAMENTO_TO_API[formData.faturamento] || formData.faturamento,
          impedimento: formData.impedimento,
          impedimento_outro: formData.impedimento === 'Outro' ? formData.impedimento_outro : '',
        }),
      });
    } catch (error) {
      // Mesmo se a gravação falhar, o lead segue para o destino correto
      console.error('Erro ao salvar lead na planilha', error);
    }

    // "escalar" prevalece sobre o impedimento; os demais momentos seguem o impedimento
    const destino = formData.momento === 'escalar'
      ? CALENDLY_URL
      : REDIRECT_BY_IMPEDIMENTO[formData.impedimento];
    if (destino) {
      window.location.href = destino;
    } else {
      setIsSubmitting(false);
    }
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

            <div className="space-y-2 pt-4">
              <label className="text-sm font-bold text-[#062237] uppercase tracking-wider">O que está te impedindo de ir para o próximo nível?</label>
              <select required name="impedimento" defaultValue="" onChange={handleChange} className="w-full bg-[#F9F7F3] border border-[#222B30]/20 rounded-sm px-4 py-3 text-[#222B30] focus:outline-none focus:border-[#A99340] focus:ring-1 focus:ring-[#A99340] transition-colors appearance-none">
                <option value="" disabled>Selecione uma opção</option>
                <option value="Não sei vender">Não sei vender</option>
                <option value="Não sei formar um time de vendas">Não sei formar um time de vendas</option>
                <option value="Não sei ler indicadores">Não sei ler indicadores</option>
                <option value="Não tenho constância">Não tenho constância</option>
                <option value="Não tenho previsibilidade">Não tenho previsibilidade</option>
                <option value="Outro">Outro (descreva seu problema)</option>
              </select>
            </div>

            {formData.impedimento === 'Outro' && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#062237] uppercase tracking-wider">Descreva seu problema</label>
                <textarea
                  required
                  name="impedimento_outro"
                  value={formData.impedimento_outro}
                  onChange={handleChange}
                  rows={3}
                  maxLength={300}
                  className="w-full bg-[#F9F7F3] border border-[#222B30]/20 rounded-sm px-4 py-3 text-[#222B30] focus:outline-none focus:border-[#A99340] focus:ring-1 focus:ring-[#A99340] transition-colors resize-none"
                  placeholder="Em poucas palavras, o que está travando sua operação hoje?"
                />
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className={`${cinzel.className} w-full py-5 mt-8 bg-[#A99340] hover:bg-[#8c7934] text-[#F9F7F3] rounded-sm font-bold text-xl transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(169,147,64,0.2)] flex justify-center items-center tracking-wide disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`}>
              {isSubmitting ? 'Enviando...' : 'Solicitar Reunião Estratégica'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
