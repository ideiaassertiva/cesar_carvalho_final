"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Loader2 } from "lucide-react";

// Schema atualizado conforme a nova solicitação
const qualificationSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  phone: z.string()
    .length(11, "O WhatsApp deve ter exatamente 11 dígitos (DDD + 9 + número)")
    .regex(/^\d+$/, "Apenas números são permitidos (sem espaços, () ou -)"),
  email: z.string().email("Email inválido"),
  cnpj: z.string()
    .length(14, "O CNPJ deve ter exatamente 14 números")
    .regex(/^\d+$/, "Apenas números são permitidos (sem pontos, barras ou traços)"),
  momento: z.enum(["mei", "eupresa", "equipe_sem_processo", "equipe_escalar"], {
    required_error: "Selecione o momento atual da sua operação",
  }),
  revenue: z.enum(["under_10k", "10k_to_80k", "80k_to_300k", "300k_to_1m", "over_1m"], {
    required_error: "Selecione seu faturamento médio mensal",
  }),
});

type QualificationFormData = z.infer<typeof qualificationSchema>;

export function QualificationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"grupo_wpp" | "wpp_consultor" | "calendly" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<QualificationFormData>({
    resolver: zodResolver(qualificationSchema),
    mode: "onChange",
  });

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ["name", "phone", "email", "cnpj"];
    if (step === 2) fieldsToValidate = ["momento", "revenue"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep(prev => prev + 1);
  };

  const onSubmit = async (data: QualificationFormData) => {
    setIsSubmitting(true);

    try {
      // Envia os dados para a API Route que vai salvar no Google Sheets
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error("Erro ao enviar dados", error);
    }

    // Lógica de Direcionamento baseada no Momento
    if (data.momento === "mei" || data.momento === "eupresa") {
      setSubmitResult("grupo_wpp");
    } else if (data.momento === "equipe_sem_processo") {
      setSubmitResult("wpp_consultor");
    } else if (data.momento === "equipe_escalar") {
      setSubmitResult("calendly");
    }

    setIsSubmitting(false);
  };

  if (submitResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-8 text-center"
      >
        {submitResult === "grupo_wpp" && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold gradient-text">Sua aplicação foi recebida!</h3>
            <p className="text-white/70 mb-6">
              Identificamos o seu momento atual. Recomendamos que você participe do nosso grupo de networking e estruturação comercial no WhatsApp.
            </p>
            <a
              href="https://chat.whatsapp.com/JnhDLWvJMXn3Dw7dQKvLcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-colors"
            >
              Entrar no Grupo VIP
            </a>
          </div>
        )}

        {submitResult === "wpp_consultor" && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold gradient-text">Sua aplicação foi recebida!</h3>
            <p className="text-white/70 mb-6">
              Identificamos que a <strong className="text-white">Estruturação de Processos</strong> é o caminho ideal para o seu momento.
            </p>
            <a
              href="https://wa.me/5511956370650?text=Sou%20empres%C3%A1rio%20e%20quero%20estruturar%20minha%20equipe%20comercial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-colors"
            >
              Falar com Consultor
            </a>
          </div>
        )}

        {submitResult === "calendly" && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold gradient-text">Aplicação em análise prioritária</h3>
            <p className="text-white/70 mb-6">
              Seu perfil atende aos requisitos para <strong className="text-white">Acompanhamento e Mentoria de Alto Nível</strong>.
              Nossa equipe analisará seus dados e aguardamos você para uma reunião estratégica.
            </p>
            <a
              href="https://calendly.com/cesarcarvalho/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-colors"
            >
              Agendar Reunião Estratégica
            </a>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "50%" }}
          animate={{ width: `${(step / 2) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold mb-6">Dados Iniciais</h3>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Nome Completo</label>
                <input
                  {...register("name")}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Seu nome completo"
                />
                {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">WhatsApp (apenas números com DDD)</label>
                <input
                  {...register("phone")}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Ex: 11999999999"
                  maxLength={11}
                />
                {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Email Profissional</label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="email@suaempresa.com"
                />
                {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">CNPJ (apenas números)</label>
                <input
                  {...register("cnpj")}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Ex: 00000000000000"
                  maxLength={14}
                />
                {errors.cnpj && <span className="text-red-400 text-xs mt-1 block">{errors.cnpj.message}</span>}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-6">Sobre o Negócio</h3>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Qual é o momento atual da sua operação?</label>
                <select
                  {...register("momento")}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none"
                >
                  <option value="">Selecione...</option>
                  <option value="mei">Sou MEI ou autônomo — ainda estou estruturando meu negócio.</option>
                  <option value="eupresa">Sou dono e ainda centralizo quase tudo — sou eu quem resolve.</option>
                  <option value="equipe_sem_processo">Tenho empresa com equipe, mas falta processo comercial e previsibilidade.</option>
                  <option value="equipe_escalar">Já tenho equipe de vendas e quero escalar com mais método e resultado.</option>
                </select>
                {errors.momento && <span className="text-red-400 text-xs mt-1 block">{errors.momento.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Faturamento mensal aproximado</label>
                <select
                  {...register("revenue")}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none"
                >
                  <option value="">Selecione...</option>
                  <option value="under_10k">Até R$ 10k</option>
                  <option value="10k_to_80k">R$ 10k – R$ 80k</option>
                  <option value="80k_to_300k">R$ 80k – R$ 300k</option>
                  <option value="300k_to_1m">R$ 300k – R$ 1M</option>
                  <option value="over_1m">Acima de R$ 1M</option>
                </select>
                {errors.revenue && <span className="text-red-400 text-xs mt-1 block">{errors.revenue.message}</span>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-4 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(prev => prev - 1)}
              className="px-6 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm"
            >
              Voltar
            </button>
          )}

          {step < 2 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto flex items-center gap-2 px-6 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors"
            >
              Próximo <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="ml-auto flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <><Loader2 size={16} className="animate-spin" /> Processando...</>
              ) : (
                "Finalizar Aplicação"
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
