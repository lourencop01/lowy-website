'use client';
import Image from 'next/image';

interface HeroSectionProps {
  onCtaClick: (subject: string) => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-bg to-secondary/10 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 motion-safe:animate-[fade-up_600ms_ease-out_100ms_both]">
              <div className="flex flex-col gap-1">
                <span className="inline-block font-bold text-3xl lg:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-fill-transparent leading-[1.2] pb-px">Mais tráfego, mais clientes.</span>
                <span className="inline-block text-text font-bold text-4xl lg:text-5xl">Websites e SEO que geram resultados.</span>
              </div>
            </h1>
            <p className="text-xl text-text/70 mb-8 motion-safe:animate-[fade-up_700ms_ease-out_200ms_both] opacity-0">
              Construímos websites rápidos e otimizados para Google e ChatGPT que aumentam a visibilidade online e transformam visitas em vendas.
            </p>
            <button onClick={() => onCtaClick('Auditoria Gratuita')} className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ring-offset-bg motion-safe:animate-[fade-up_800ms_ease-out_300ms_both] opacity-0">
              Solicitar auditoria gratuita
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative overflow-hidden w-full max-w-2xl h-[28rem] md:h-[26rem] bg-border rounded-2xl flex items-center justify-center transition-transform hover:scale-[1.01] motion-safe:animate-[fade-up_900ms_ease-out_400ms_both] opacity-0">
              <Image
              src="/hero.webp"
              alt="Imagem principal"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
