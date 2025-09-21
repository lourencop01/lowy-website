'use client';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';
import { FaMedal } from 'react-icons/fa6';
import { HiTrendingUp } from 'react-icons/hi';
import { GiSprint } from 'react-icons/gi';
import { RiMoneyEuroCircleFill } from 'react-icons/ri';

export default function SolutionsSection() {
  const solutionIcons = [FaMedal, GiSprint, RiMoneyEuroCircleFill, HiTrendingUp];

  return (
    <section id="solucao" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollAnimateWrapper>
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              A solução: estratégia + execução que gera vendas
            </h2>
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={100}>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              Unimos design, performance e SEO técnico para aumentar tráfego qualificado e conversões de forma previsível.
            </p>
          </ScrollAnimateWrapper>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => {
            const Icon = solutionIcons[item - 1];
            return (
            <ScrollAnimateWrapper key={item} delay={200 + (item * 100)} className="flex h-full">
              <div className="group bg-surface p-8 rounded-2xl shadow-sm border border-border transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary cursor-pointer flex flex-col h-full">
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full flex-shrink-0 bg-gradient-to-r from-primary to-accent text-white">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-4 transition-colors group-hover:text-primary flex-shrink-0">
                {item === 1 ? 'SEO técnico e conteúdos' : item === 2 ? 'Websites ultra rápidos' : item === 3 ? 'CRO: converter mais' : 'Relatórios e melhoria contínua'}
              </h3>
              <p className="text-text/70 flex-grow">
                {item === 1 ? 'Estrutura, palavras-chave e conteúdos pensados para posicionar no Google e captar intenção de compra.' : item === 2 ? 'Desenvolvimento otimizado (Core Web Vitals) para melhor ranking e experiência de utilização.' : item === 3 ? 'Páginas e funis pensados para transformar visitas em leads com provas sociais e CTAs claros.' : 'Painéis simples com métricas que importam e ações mensais para crescer.'}
              </p>
              </div>
            </ScrollAnimateWrapper>
          );})}
        </div>
      </div>
    </section>
  );
}
