'use client';
import Image from 'next/image';

interface CaseStudySectionProps {
  onCtaClick: (subject: string) => void;
}

export default function CaseStudySection({ onCtaClick }: CaseStudySectionProps) {
  return (
    <section id="resultados" className="py-20 bg-bg">
      <div className="flex flex-col gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Caso de estudo
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            Resultados reais com impacto em tráfego, leads e faturação.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-border shadow-xl">
            <Image
              src="/valentina-website-case.webp"
              alt="Captura de ecrã do website"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
          <div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text">Valentina Hair Concept</h3>
              <blockquote className="bg-surface border border-border p-6 rounded-xl text-text/80">
                "Desde o primeiro mês que o site nos deu muita mais visibilidade, trouxe clientes novos e notámos a agenda a encher muito mais depressa."
              </blockquote>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                  <span className="text-text/80"><strong className="text-success">50%</strong> taxa de conversão de visitantes em chamadas</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                  <span className="text-text/80"><strong className="text-success">44%</strong> do tráfego online foi orgânico no primeiro mês</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                  <span className="text-text/80"><strong className="text-success">439%</strong> Mínimo retorno sobre o investimento, mensalmente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => onCtaClick('Auditoria Gratuita')} className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ring-offset-bg">
            Solicitar auditoria gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
