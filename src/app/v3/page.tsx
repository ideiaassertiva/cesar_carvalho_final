import { StoryExperience } from "@/components/v3/StoryExperience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Jornada do Fundador | Cesar Carvalho",
  description: "Deixe de ser o funcionário do mês da sua própria empresa.",
};

export default function V3Page() {
  return (
    <main className="min-h-screen bg-black selection:bg-white/30">
      <StoryExperience />
    </main>
  );
}
