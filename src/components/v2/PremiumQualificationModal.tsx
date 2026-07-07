"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Loader2, X, Activity, BarChart3, Target } from "lucide-react";

const qualificationSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email corporativo inválido"),
  phone: z.string().min(10, "Telefone é obrigatório"),
  role: z.enum(["founder", "sales_manager", "sales_rep", "other"], {
    required_error: "Selecione seu cargo",
  }),
  revenue: z.enum(["mei", "under_50k", "50k_to_200k", "over_200k"], {
    required_error: "Selecione seu faturamento médio mensal",
  }),
  painPoint: z.enum(["lead_generation", "closing", "process", "hiring"], {
    required_error: "Selecione seu principal desafio operacional",
  }),
});

type QualificationFormData = z.infer<typeof qualificationSchema>;

interface PremiumQualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PremiumQualificationModal({ isOpen, onClose }: PremiumQualificationModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"mei" | "nivel1" | "nivel2" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    reset,
    watch,
  } = useForm<QualificationFormData>({
    resolver: zodResolver(qualificationSchema),
    mode: "onChange",
  });

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setSubmitResult(null);
        reset();
      }, 300);
    }
  }, [isOpen, reset]);

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ["name", "email", "phone"];
    if (step === 2) fieldsToValidate = ["role", "revenue"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep((prev) => prev + 1);
  };

  const onSubmit = async (data: QualificationFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate complex analysis

    if (data.revenue === "mei") {
      setSubmitResult("mei");
    } else if (data.revenue === "under_50k") {
      setSubmitResult("nivel1");
    } else {
      setSubmitResult("nivel2");
    }
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-white/5"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-white/70" />
              <h2 className="text-lg font-medium tracking-tight text-white">
                Application Process
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8">
            {submitResult ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                {submitResult === "mei" && (
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-white/50" />
                    </div>
                    <h3 className="text-3xl font-medium tracking-tight text-white">Assessment Complete</h3>
                    <p className="text-white/60 max-w-md mx-auto text-lg leading-relaxed">
                      Based on our data-driven model, our current enterprise solutions are optimized for larger sales infrastructures. We recommend following our strategic insights until scaling requirements are met.
                    </p>
                  </div>
                )}

                {submitResult === "nivel1" && (
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-medium tracking-tight text-white">System Alignment Identified</h3>
                    <p className="text-white/60 max-w-md mx-auto text-lg leading-relaxed mb-8">
                      Our diagnostics indicate that <strong className="text-white font-medium">Process Structuring</strong> will yield the highest ROI for your current metrics.
                    </p>
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
                    >
                      Connect with Strategic Advisor
                    </a>
                  </div>
                )}

                {submitResult === "nivel2" && (
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                      <Activity className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-3xl font-medium tracking-tight text-white">Priority Analysis Status</h3>
                    <p className="text-white/60 max-w-md mx-auto text-lg leading-relaxed mb-8">
                      Your metrics align with our <strong className="text-white font-medium">High-Level Mentorship Protocol</strong>. An executive partner will review your data and contact you within 2 business hours.
                    </p>
                    <a
                      href="https://calendly.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
                    >
                      Schedule Executive Briefing
                    </a>
                  </div>
                )}
              </motion.div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="mb-10">
                  <div className="flex justify-between text-xs font-medium text-white/40 mb-3 tracking-wider uppercase">
                    <span className={step >= 1 ? "text-white" : ""}>01. Identity</span>
                    <span className={step >= 2 ? "text-white" : ""}>02. Metrics</span>
                    <span className={step >= 3 ? "text-white" : ""}>03. Bottleneck</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: "33.33%" }}
                      animate={{ width: `${(step / 3) * 100}%` }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-5"
                      >
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-white/60">Executive Name</label>
                          <input
                            {...register("name")}
                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all"
                            placeholder="John Doe"
                          />
                          {errors.name && <span className="text-red-400/80 text-xs mt-1 block">{errors.name.message}</span>}
                        </div>

                        <div className="space-y-1">
                          <label className="text-sm font-medium text-white/60">Corporate Email</label>
                          <input
                            {...register("email")}
                            type="email"
                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all"
                            placeholder="john@enterprise.com"
                          />
                          {errors.email && <span className="text-red-400/80 text-xs mt-1 block">{errors.email.message}</span>}
                        </div>

                        <div className="space-y-1">
                          <label className="text-sm font-medium text-white/60">Direct Contact</label>
                          <input
                            {...register("phone")}
                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all"
                            placeholder="+1 (555) 000-0000"
                          />
                          {errors.phone && <span className="text-red-400/80 text-xs mt-1 block">{errors.phone.message}</span>}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="space-y-3">
                          <label className="text-sm font-medium text-white/60">Operational Role</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              { value: "founder", label: "C-Level / Founder" },
                              { value: "sales_manager", label: "VP of Sales / Manager" },
                              { value: "sales_rep", label: "Account Executive / SDR" },
                              { value: "other", label: "Other" }
                            ].map((option) => (
                              <label key={option.value} className="relative flex items-center p-4 rounded-xl border border-white/10 bg-[#111] cursor-pointer hover:border-white/30 transition-all group">
                                <input
                                  type="radio"
                                  {...register("role")}
                                  value={option.value}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded-full border border-white/30 mr-3 peer-checked:bg-white peer-checked:border-white transition-colors" />
                                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{option.label}</span>
                              </label>
                            ))}
                          </div>
                          {errors.role && <span className="text-red-400/80 text-xs mt-1 block">{errors.role.message}</span>}
                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-medium text-white/60">Monthly Revenue Volume</label>
                          <select
                            {...register("revenue")}
                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all appearance-none"
                          >
                            <option value="">Select current tier...</option>
                            <option value="mei">Micro (Under $10k)</option>
                            <option value="under_50k">Emerging ($10k - $50k)</option>
                            <option value="50k_to_200k">Scaling ($50k - $200k)</option>
                            <option value="over_200k">Enterprise ($200k+)</option>
                          </select>
                          {errors.revenue && <span className="text-red-400/80 text-xs mt-1 block">{errors.revenue.message}</span>}
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="space-y-3">
                          <label className="text-sm font-medium text-white/60">Primary Operational Bottleneck</label>
                          <div className="space-y-3">
                            {[
                              { value: "lead_generation", label: "Pipeline Generation & Lead Quality" },
                              { value: "closing", label: "Conversion Rate Optimization" },
                              { value: "process", label: "Process Standardization & Analytics" },
                              { value: "hiring", label: "Talent Acquisition & Ramp-up Time" }
                            ].map((option) => (
                              <label key={option.value} className="relative flex items-center p-4 rounded-xl border border-white/10 bg-[#111] cursor-pointer hover:border-white/30 transition-all group">
                                <input
                                  type="radio"
                                  {...register("painPoint")}
                                  value={option.value}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded-full border border-white/30 mr-3 peer-checked:bg-white peer-checked:border-white transition-colors" />
                                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{option.label}</span>
                              </label>
                            ))}
                          </div>
                          {errors.painPoint && <span className="text-red-400/80 text-xs mt-1 block">{errors.painPoint.message}</span>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep((prev) => prev - 1)}
                        className="px-6 py-2.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                      >
                        Previous
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="ml-auto flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all text-sm"
                      >
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        className="ml-auto flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                      >
                        {isSubmitting ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing Data...</>
                        ) : (
                          "Submit Application"
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
