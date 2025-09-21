'use client';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';
import { FaPeopleGroup, FaPhoneSlash } from 'react-icons/fa6';
import { LuTurtle } from 'react-icons/lu';
import { HiTrendingDown } from 'react-icons/hi';

export default function ProblemsSection() {
  const problemIcons = [FaPeopleGroup, LuTurtle, FaPhoneSlash, HiTrendingDown];

  return (
    <section id="dores" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollAnimateWrapper>
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              Problemas que travam o seu crescimento
            </h2>
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={100}>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              Se o seu website não aparece no Google ou não converte visitas em contactos, está a perder vendas todos os dias.
            </p>
          </ScrollAnimateWrapper>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => {
            const Icon = problemIcons[item - 1];
            return (
            <ScrollAnimateWrapper key={item} delay={200 + (item * 100)} className="flex h-full">
              <div className="group bg-accent/5 border border-border p-8 rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary cursor-pointer flex flex-col h-full">
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full flex-shrink-0 bg-gradient-to-r from-primary to-accent text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-4 transition-colors group-hover:text-primary flex-shrink-0">
                  {item === 1 ? 'Pouco tráfego orgânico' : item === 2 ? 'Site lento e desatualizado' : item === 3 ? 'Não gera contactos' : 'Concorrência a dominar'}
                </h3>
                <p className="text-text/70 flex-grow">
                  {item === 1 ? 'Sem SEO, o seu site não é encontrado por quem já procura os seus serviços.' : item === 2 ? 'Velocidade e UX fracas reduzem o ranking no Google e a confiança do utilizador.' : item === 3 ? 'Muito tráfego, poucos resultados: falta estratégia de conversão (CRO).' : 'Os seus concorrentes investem e ganham posições no Google antes de si.'}
                </p>
              </div>
            </ScrollAnimateWrapper>
          );})}
        </div>
      </div>
    </section>
  );
}
