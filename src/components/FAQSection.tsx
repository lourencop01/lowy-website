'use client';
import Script from 'next/script';

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-text/70">
            Tudo o que precisa de saber para avançar com segurança.
          </p>
        </div>
        <Script id="faq-structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quanto tempo demora a lançar o meu website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Projetos Essencial demoram normalmente 2–3 semanas; Crescimento 4–6 semanas; Premium 6–8 semanas."
                }
              },
              {
                "@type": "Question",
                name: "Já tenho site. Podem tratar apenas do SEO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Sim. Fazemos auditoria técnica, plano de palavras‑chave e otimizações contínuas mesmo que o seu site tenha sido criado por outra equipa."
                }
              },
              {
                "@type": "Question",
                name: "Tenho de assinar fidelização?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Não. Os planos são mensais e pode cancelar quando quiser. Recomendamos 3–6 meses para ver todo o impacto do SEO."
                }
              },
              {
                "@type": "Question",
                name: "Conseguem escrever conteúdos para o meu setor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Claro. Pesquisamos o seu mercado e criamos conteúdos com linguagem e termos específicos do seu setor."
                }
              },
              {
                "@type": "Question",
                name: "Como medem os resultados?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Definimos KPIs claros (posições no Google, tráfego orgânico, leads) e enviamos relatórios mensais."
                }
              }
            ]
          })}
        </Script>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((faq) => (
            <div key={faq}>
              <div className="bg-bg rounded-2xl p-6 shadow-sm border border-border">
              <div className="group flex justify-between items-center w-full text-left transition-colors hover:bg-bg/50 rounded-lg p-2 -m-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                <h3 className="text-lg font-semibold text-text">
                  {faq === 1 ? 'Quanto tempo demora a lançar o meu website?' : faq === 2 ? 'Já tenho site. Podem tratar apenas do SEO?' : faq === 3 ? 'Tenho de assinar fidelização?' : faq === 4 ? 'Conseguem escrever conteúdos para o meu setor?' : 'Como medem os resultados?'}
                </h3>
              </div>
              <div className="mt-4 text-text/70 transition-[max-height] duration-300 ease-out">
                {faq === 1 ? 'Projetos Essencial demoram normalmente 2–3 semanas; Crescimento 4–6 semanas; Premium 6–8 semanas.' : faq === 2 ? 'Sim. Fazemos auditoria técnica, plano de palavras‑chave e otimizações contínuas mesmo que o seu site tenha sido criado por outra equipa.' : faq === 3 ? 'Não. Os planos são mensais e pode cancelar quando quiser. Recomendamos 3–6 meses para ver todo o impacto do SEO.' : faq === 4 ? 'Claro. Pesquisamos o seu mercado e criamos conteúdos com linguagem e termos específicos do seu setor.' : 'Definimos KPIs claros (posições no Google, tráfego orgânico, leads) e enviamos relatórios mensais.'}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
