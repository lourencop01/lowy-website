'use client';

interface AuditSectionProps {
  onCtaClick: (subject: string) => void;
}

export default function AuditSection({ onCtaClick }: AuditSectionProps) {
  return (
    <section id="auditoria" className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center motion-safe:animate-[float_10s_ease-in-out_infinite] will-change-transform">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Auditoria gratuita ao seu website e SEO
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Receba um relatório simples com oportunidades prioritárias para aumentar tráfego e conversões.
        </p>
        <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
          <button onClick={() => onCtaClick('Auditoria Gratuita')} className="w-fit bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ring-offset-2 ring-offset-transparent">
            Quero uma auditoria gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
