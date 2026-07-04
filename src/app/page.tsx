import { HeroSection } from "@/components/sections/HeroSection";
import { DiagnosisSection } from "@/components/sections/DiagnosisSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { MethodSection } from "@/components/sections/MethodSection";
import { PathsSection } from "@/components/sections/PathsSection";
import { QualificationForm } from "@/components/forms/QualificationForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Fold 1: Hero */}
      <HeroSection />

      {/* Fold 2: Diagnóstico */}
      <DiagnosisSection />

      {/* Fold 3: Autoridade */}
      <AuthoritySection />

      {/* Fold 4: O Método */}
      <MethodSection />

      {/* Fold 5: Caminhos/Níveis */}
      <PathsSection />

      {/* Fold 6: Aplicação (Form) */}
      <section className="py-24 px-4 bg-black relative" id="form-aplicacao">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-white/5 blur-[120px] rounded-full" />
        </div>

        <div className="container relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Aplicação para Consultoria</h2>
            <p className="text-white/60 text-lg">
              Preencha o formulário abaixo para entendermos o momento do seu negócio.
              Nossa equipe analisará suas respostas e direcionará para o melhor caminho.
            </p>
          </div>

          <QualificationForm />
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-8 text-center border-t border-white/10 text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} César Carvalho. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
