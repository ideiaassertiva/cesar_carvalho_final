"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PremiumQualificationModal } from "@/components/v2/PremiumQualificationModal";
import { BentoGrid, BentoCard } from "@/components/v2/BentoGrid";
import { DataVizGraphic } from "@/components/v2/DataVizGraphic";
import { ArrowRight, BarChart3, Crosshair, ShieldCheck, Zap, Activity, Users, Globe } from "lucide-react";

export default function V2LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-white/30 selection:text-white">
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tighter text-lg flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded-sm" />
            César Carvalho
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm font-medium hover:text-white/70 transition-colors"
          >
            Apply for Assessment
          </button>
        </div>
      </nav>

      {/* Hero Section - The Ruler Archetype */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 mb-8 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Enterprise Sales Architecture
              </div>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6">
                Predictable scale requires <span className="text-white/40">engineered systems.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-light">
                We transform chaotic sales operations into deterministic revenue engines for established enterprises. Data-driven, systemic, and rigorously executed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                >
                  Initiate Assessment <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#framework"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/10 rounded-full font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Explore the Framework
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[600px] w-full rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col p-8 shadow-2xl shadow-white/5"
          >
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-white/60" />
                <span className="text-sm font-medium text-white/60">Revenue Trajectory Analysis</span>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>

            <div className="flex-grow w-full h-full relative">
               <DataVizGraphic />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-white/50 mb-1">Current State</div>
                <div className="text-2xl font-medium">$4.8M <span className="text-sm text-white/40 font-normal">/yr</span></div>
              </div>
              <div className="p-4 rounded-xl bg-white text-black">
                <div className="text-xs text-black/60 mb-1">Engineered Output</div>
                <div className="text-2xl font-medium">$14.0M <span className="text-sm text-black/40 font-normal">/yr</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Symptom vs Root Cause Section */}
      <section className="py-32 px-6 border-t border-white/5 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">
              The Illusion of Effort
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Most teams misdiagnose scaling bottlenecks. They attack symptoms with brute force—more calls, more reps, more software—while the underlying systemic architecture remains fragile.
            </p>
          </div>

          <BentoGrid>
            <BentoCard delay={0.1} className="md:col-span-2">
              <Crosshair className="w-8 h-8 text-white/40 mb-6" />
              <h3 className="text-2xl font-medium mb-3">Symptom: Inconsistent Pipeline</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Relying on &quot;hero reps&quot; or sheer volume rather than a deterministic, mathematically sound qualification matrix.
              </p>
              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40 uppercase tracking-wider">Root Cause Analysis</span>
                <span className="text-sm font-medium text-white">Absence of leading indicators</span>
              </div>
            </BentoCard>

            <BentoCard delay={0.2} className="md:col-span-1 bg-white text-black">
              <Activity className="w-8 h-8 text-black/40 mb-6" />
              <h3 className="text-2xl font-medium mb-3">The Mathematical Approach</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                We view sales not as an art, but as a manufacturing process. Inputs must predictably equal outputs.
              </p>
            </BentoCard>

            <BentoCard delay={0.3} className="md:col-span-1">
              <Users className="w-8 h-8 text-white/40 mb-6" />
              <h3 className="text-xl font-medium mb-3">Talent Churn</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                High turnover is a symptom of broken ramp-up frameworks, not just poor hiring.
              </p>
            </BentoCard>

            <BentoCard delay={0.4} className="md:col-span-2">
              <Zap className="w-8 h-8 text-white/40 mb-6" />
              <h3 className="text-2xl font-medium mb-3">Symptom: Stalled Conversion Rates</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Deals dying in the middle of the funnel because the structural authority and risk-reversal mechanisms were not properly staged.
              </p>
               <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40 uppercase tracking-wider">Root Cause Analysis</span>
                <span className="text-sm font-medium text-white">Flawed decision-architecture</span>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* The Methodology Section */}
      <section id="framework" className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">
              The Engineering Framework
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              A proprietary, non-negotiable operational sequence designed for high-ticket, high-complexity enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Diagnostic Topology",
                desc: "Complete audit of current conversion metrics, identifying the highest-leverage friction points in the existing architecture."
              },
              {
                step: "02",
                title: "Protocol Synthesis",
                desc: "Customizing our core operational templates to your specific market dynamics, ensuring the math supports your growth targets."
              },
              {
                step: "03",
                title: "Systemic Deployment",
                desc: "Rigorous implementation of the new protocols, training your leadership layer to manage the system, not the individuals."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8 rounded-3xl border border-white/10 bg-[#050505]"
              >
                <div className="text-5xl font-light text-white/10 mb-6">{item.step}</div>
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority / Proof Section */}
      <section className="py-32 px-6 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-square border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1556761175-5972d9314cd1?q=80&w=1974&auto=format&fit=crop"
                alt="Corporate Authority"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <div className="text-2xl font-medium mb-1">César Carvalho</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">Chief Architect</div>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8">
              Governed by Data.<br />
              Executed with Precision.
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/60 font-light leading-relaxed">
                With over a decade engineering high-performance revenue teams, I do not rely on motivational rhetoric.
              </p>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                I deploy structural fixes that force predictable outcomes. If the system is built correctly, scaling becomes an exercise in mathematics, not hope.
              </p>

              <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-medium mb-2">150+</div>
                  <div className="text-sm text-white/50">Systems Architected</div>
                </div>
                <div>
                  <div className="text-4xl font-medium mb-2">$85M+</div>
                  <div className="text-sm text-white/50">Revenue Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Application Gateway */}
      <section className="py-40 px-6 relative bg-white text-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ShieldCheck className="w-12 h-12 mx-auto mb-8 text-black/40" />
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6">
            Require structural change?
          </h2>
          <p className="text-xl text-black/60 font-light mb-12 max-w-2xl mx-auto">
            We strictly partner with organizations capable of deploying systemic changes. Submit your operational metrics for preliminary review.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            Submit Operational Metrics <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center text-white/30 text-xs uppercase tracking-widest flex flex-col items-center gap-4">
        <div className="w-4 h-4 bg-white/20 rounded-sm mb-4" />
        <p>&copy; {new Date().getFullYear()} César Carvalho Architecture. All rights reserved.</p>
        <p>Strictly Analytical. High-End Corporate Solutions.</p>
      </footer>

      <PremiumQualificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
