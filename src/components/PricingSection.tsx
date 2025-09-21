'use client';

interface PricingSectionProps {
  onCtaClick: (subject: string) => void;
}

export default function PricingSection({ onCtaClick }: PricingSectionProps) {
  const featuresByPlan: Record<'Basic' | 'Growth' | 'Premium', string[]> = {
    Basic: [
      'Website otimizado',
      'Alojamento e SSL incluídos',
    ],
    Growth: [
      'Tudo do Basic, mais:',
      'SEO técnico e on-page',
      '1 artigo de blog por mês',
      'Relatórios mensais de desempenho',
    ],
    Premium: [
      'Tudo do Growth, mais:',
      '2 artigos de blog por mês',
      'Aquisição de backlinks',
    ],
  };

  return (
    <section id="precos" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Planos simples, foco em resultados
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            Escolha o plano certo para a fase do seu negócio. Sem complicações, sem fidelizações.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Basic', 'Growth', 'Premium'].map((plan, index) => (
            <div key={plan} className="flex h-full">
              <div className={`bg-surface w-full p-8 rounded-2xl shadow-sm border transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full ${index === 1 ? 'ring-2 ring-primary border-primary md:scale-105' : 'border-border'}`}>
              {index === 1 && (
                <div className="bg-primary w-fit text-white text-sm font-medium px-4 py-2 rounded-full inline-block mb-4 animate-[pulse_2.5s_ease-in-out_infinite]">
                  Mais escolhido
                </div>
              )}
              <h3 className="text-2xl font-bold text-text mb-4">{plan === 'Basic' ? 'Essencial' : plan === 'Growth' ? 'Crescimento' : 'Premium'}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text">{plan === 'Basic' ? '€49' : plan === 'Growth' ? '€89' : '€189'}</span>
                <span className="text-text/70">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                {featuresByPlan[plan as 'Basic' | 'Growth' | 'Premium'].map((feature, i) => (
                  <li key={i} className="flex items-center text-text/70">
                    <div className="w-5 h-5 bg-primary/20 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button onClick={() => onCtaClick('Pedir Proposta')} className={`w-full py-3 px-6 rounded-lg font-medium cursor-pointer transition-all hover:shadow-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ${
                index === 1 
                  ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:brightness-[1.03] hover:shadow-[0_8px_30px_rgba(10,42,101,.35)]' 
                  : 'bg-gradient-to-r from-bg to-secondary hover:from-border hover:to-secondary/80 text-text'
              }`}>
                {plan === 'Basic' ? 'Escolher Essencial' : plan === 'Growth' ? 'Começar Crescimento' : 'Assinar Premium'}
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
