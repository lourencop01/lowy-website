'use client';

interface CTASectionProps {
  onCtaClick: (subject: string) => void;
}

export default function CTASection({ onCtaClick }: CTASectionProps) {
  return (
    <section id="contactos" className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="flex flex-col items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center motion-safe:animate-[float_10s_ease-in-out_infinite] will-change-transform">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Pronto para crescer no Google?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Fale connosco e receba um plano simples para aumentar tráfego e leads esta semana!
        </p>
        <div className="flex flex-col gap-4 justify-center items-center max-w-2xl">
          <button onClick={() => onCtaClick('Agendar Demonstração')} className="w-full bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ring-offset-2 ring-offset-transparent">
            Marcar demonstração de 15 min (sem compromisso)
          </button>
          <button onClick={() => onCtaClick('Pedir Proposta')} className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ring-offset-2 ring-offset-transparent">
            Receber proposta em 24h
          </button>
        </div>
        <p className="mt-4 text-white/70 text-sm">Resposta em 24h. Sem compromisso.</p>
      </div>
    </section>
  );
}
