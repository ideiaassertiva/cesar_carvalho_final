"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cinzel, Raleway } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export interface ObrigadoVideo {
  title: string;
  // Cole aqui a URL completa do YouTube (ex: https://youtu.be/XXXX ou https://www.youtube.com/watch?v=XXXX).
  // Deixe undefined/vazio para manter o placeholder até o vídeo ser escolhido.
  url?: string;
}

function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

const DEFAULT_VIDEOS: ObrigadoVideo[] = [
  { title: 'Vídeo 1' },
  { title: 'Vídeo 2' },
  { title: 'Vídeo 3' },
];

interface ObrigadoTemplateProps {
  headline?: string;
  subheadline?: string;
  videos?: ObrigadoVideo[];
}

export function ObrigadoTemplate({
  headline = 'Obrigado. Recebemos seus dados e em breve nosso consultor entrará em contato.',
  subheadline = 'Enquanto isso, assista abaixo essa série de vídeos que preparamos pra você resolver o seu problema e já fazer sua primeira venda hoje.',
  videos = DEFAULT_VIDEOS,
}: ObrigadoTemplateProps) {
  return (
    <main className="min-h-screen bg-black text-[#F9F7F3] flex flex-col items-center pt-20 pb-20 relative overflow-hidden">
      {/* Imagem de fundo estilo Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
        <div className="absolute right-0 top-0 w-full md:w-[60%] h-full opacity-30">
          <img
            src="/images/cesar-hero.png"
            alt="César Carvalho"
            className="w-full h-full object-cover object-right md:object-center"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center max-w-5xl h-full mt-10 md:mt-20">

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col items-center w-full">
          <h1 className={`${cinzel.className} text-4xl md:text-5xl font-bold text-[#A99340] tracking-tight leading-tight mb-8 drop-shadow-lg max-w-4xl mx-auto`}>
            {headline}
          </h1>

          <p className={`${raleway.className} text-xl md:text-2xl text-[#F9F7F3]/90 mb-12 max-w-2xl mx-auto font-light drop-shadow-md`}>
            {subheadline}
          </p>

          {/* Série de vídeos do YouTube — miniplayers lado a lado */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {videos.map((video, index) => {
              const videoId = extractYouTubeId(video.url);
              return (
                <div key={index} className="text-left">
                  <p className={`${raleway.className} text-sm font-bold text-[#A99340] uppercase tracking-widest mb-3`}>
                    {video.title}
                  </p>
                  <div className="w-full aspect-video bg-[#111] border border-[#222B30]/30 rounded-xl overflow-hidden shadow-2xl relative">
                    {videoId ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[#F9F7F3]/40 text-center px-3">
                        <span className={`${raleway.className} text-sm font-medium`}>[ Espaço para o Vídeo do YouTube ]</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <a href="/" className={`${raleway.className} px-8 py-3 border border-[#A99340] text-[#A99340] hover:bg-[#A99340] hover:text-black rounded-sm font-semibold transition-all uppercase tracking-widest text-sm`}>
            Voltar para a página inicial
          </a>
        </motion.div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-20">
          <img src="/images/logo-nome-branco.png" alt="César Carvalho Logo" className="h-24 object-contain opacity-50" />
        </motion.div>
      </div>
    </main>
  );
}
