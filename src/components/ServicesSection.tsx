'use client';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';
import { Fa1, Fa2, Fa3, Fa4, Fa5 } from 'react-icons/fa6';

export default function ServicesSection() {
  const serviceNumberIcons = [Fa1, Fa2, Fa3, Fa4, Fa5];

  return (
    <section id="servicos" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollAnimateWrapper>
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
              Serviços que fazem o seu negócio crescer
            </h2>
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={100}>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              Do design ao SEO, trabalhamos ponta a ponta para gerar tráfego qualificado e leads reais.
            </p>
          </ScrollAnimateWrapper>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'Criação de Websites',
            'Gestão de SEO', 
            'Atualizações de Conteúdo',
            'Criação de blog',
            'Alojamento e Segurança'
          ].map((service, index) => {
            const NumIcon = serviceNumberIcons[index];
            return (
            <div key={index} className="group bg-surface border border-border p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 hover:border-primary cursor-pointer ">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-white">
                {NumIcon ? <NumIcon className="w-7 h-7" /> : null}
              </div>
              <h3 className="text-xl font-semibold text-text mb-4 transition-colors group-hover:text-primary">
                {service}
              </h3>
              <p className="text-text/70 mb-6">
                {service === 'Criação de Websites' ? 'Sites modernos, rápidos e responsivos focados em conversões e desempenho.' : service === 'Gestão de SEO' ? 'Estratégia completa de SEO on-page, técnico e conteúdos para subir no Google.' : service === 'Atualizações de Conteúdo' ? 'Manutenção contínua do site e conteúdos para manter relevância e autoridade.' : service === 'Criação de blog' ? 'Artigos otimizados para SEO que atraem tráfego qualificado com intenção de compra.' : 'Infraestrutura segura, cópias de segurança e monitorização para manter o site sempre online.'}
              </p>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}
