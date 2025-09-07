import ScrollAnimateWrapper from '../components/ScrollAnimateWrapper';
import { FaPeopleGroup, FaPhoneSlash, FaMedal, Fa1, Fa2, Fa3, Fa4, Fa5 } from 'react-icons/fa6';
import { LuTurtle } from 'react-icons/lu';
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
import { GiSprint } from 'react-icons/gi';
import { RiMoneyEuroCircleFill } from 'react-icons/ri';

export default function Page() {
  const problemIcons = [FaPeopleGroup, LuTurtle, FaPhoneSlash, HiTrendingDown];
  const solutionIcons = [FaMedal, GiSprint, RiMoneyEuroCircleFill, HiTrendingUp];
  const serviceNumberIcons = [Fa1, Fa2, Fa3, Fa4, Fa5];
  return (
    <div className="min-h-screen bg-bg">
      {/* Navbar */}
      <header className="bg-surface/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <div className="w-32 h-8 bg-border rounded transition-transform hover:scale-[1.02]"></div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#inicio" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Início</a>
                <a href="#servicos" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Serviços</a>
                <a href="#precos" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Preços</a>
                <a href="#testemunhos" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Testemunhos</a>
                <a href="#contactos" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Contactos</a>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-2 rounded-full text-sm font-medium cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ring-offset-surface">
                Pedir Proposta
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-bg to-secondary/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-text mb-6 motion-safe:animate-[fade-up_600ms_ease-out_100ms_both]">
                Mais tráfego. Mais clientes. Websites e SEO que geram resultados.
              </h1>
              <p className="text-xl text-text/70 mb-8 motion-safe:animate-[fade-up_700ms_ease-out_200ms_both] opacity-0">
                Construímos websites rápidos e otimizados para SEO que aumentam a visibilidade no Google e transformam visitas em vendas.
              </p>
              <button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ring-offset-bg motion-safe:animate-[fade-up_800ms_ease-out_300ms_both] opacity-0">
                Começar Agora
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-80 bg-border rounded-2xl flex items-center justify-center transition-transform hover:scale-[1.01] motion-safe:animate-[fade-up_900ms_ease-out_400ms_both] opacity-0">
                <span className="text-border/60">Imagem/Ilustração do serviço</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Pain Points Section */}
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

      {/* Our Solution / Value Proposition Section */}
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
                  {item === 1 ? 'Estrutura, keywords e conteúdos pensados para posicionar no Google e captar intenção de compra.' : item === 2 ? 'Desenvolvimento otimizado (Core Web Vitals) para melhor ranking e experiência de utilização.' : item === 3 ? 'Páginas e funis pensados para transformar visitas em leads com provas sociais e CTAs claros.' : 'Dashboards simples com métricas que importam e ações mensais para crescer.'}
                </p>
                </div>
              </ScrollAnimateWrapper>
            );})}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              'Criação de Blog',
              'Alojamento & Segurança'
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
                  {service === 'Criação de Websites' ? 'Sites modernos, rápidos e responsivos focados em conversões e performance.' : service === 'Gestão de SEO' ? 'Estratégia completa de SEO on-page, técnico e conteúdos para subir no Google.' : service === 'Atualizações de Conteúdo' ? 'Manutenção contínua do site e conteúdos para manter relevância e autoridade.' : service === 'Criação de Blog' ? 'Artigos otimizados para SEO que atraem tráfego qualificado com intenção de compra.' : 'Infraestrutura segura, backups e monitorização para manter o site sempre online.'}
                </p>
                <button className="text-primary hover:text-primary/80 font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">
                  Saber mais →
                </button>
              </div>
            );})}
          </div>
        </div>
      </section>

      {/* Packages / Pricing Section */}
      <section id="precos" className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollAnimateWrapper>
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                Planos simples, foco em resultados
              </h2>
            </ScrollAnimateWrapper>
            <ScrollAnimateWrapper delay={100}>
              <p className="text-xl text-text/70 max-w-3xl mx-auto">
                Escolha o plano certo para a fase do seu negócio. Sem complicações, sem fidelizações.
              </p>
            </ScrollAnimateWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Basic', 'Growth', 'Premium'].map((plan, index) => (
              <ScrollAnimateWrapper key={plan} delay={200 + (index * 100)} className="flex h-full">
                <div className={`bg-surface w-full p-8 rounded-2xl shadow-sm border transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full ${index === 1 ? 'ring-2 ring-primary border-primary scale-105' : 'border-border'}`}>
                {index === 1 && (
                  <div className="bg-primary w-fit text-white text-sm font-medium px-4 py-2 rounded-full inline-block mb-4 animate-[pulse_2.5s_ease-in-out_infinite]">
                    Mais escolhido
                  </div>
                )}
                <h3 className="text-2xl font-bold text-text mb-4">{plan === 'Basic' ? 'Essencial' : plan === 'Growth' ? 'Crescimento' : 'Premium'}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-text">{plan === 'Basic' ? '€499' : plan === 'Growth' ? '€899' : '€1.499'}</span>
                  <span className="text-text/70">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[1, 2, 3, 4].map((feature) => (
                    <li key={feature} className="flex items-center text-text/70">
                      <div className="w-5 h-5 bg-success/20 rounded-full mr-3"></div>
                      {plan === 'Basic' && (feature === 1 ? 'Website one-page otimizado' : feature === 2 ? 'Setup SEO on-page' : feature === 3 ? 'Formulários e tracking básico' : 'Alojamento e SSL incluídos')} 
                      {plan === 'Growth' && (feature === 1 ? 'Website até 5 páginas' : feature === 2 ? 'SEO técnico + conteúdos mensais' : feature === 3 ? 'Otimização de conversão (CRO)' : 'Relatórios mensais de performance')} 
                      {plan === 'Premium' && (feature === 1 ? 'Website à medida + blog' : feature === 2 ? 'Plano editorial e link building' : feature === 3 ? 'Automação e integrações' : 'Consultoria estratégica e A/B testing')}
          </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium cursor-pointer transition-all hover:shadow-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ${
                  index === 1 
                    ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:brightness-[1.03] hover:shadow-[0_8px_30px_rgba(10,42,101,.35)]' 
                    : 'bg-gradient-to-r from-bg to-secondary hover:from-border hover:to-secondary/80 text-text'
                }`}>
                  Pedir Proposta
                </button>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testemunhos" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollAnimateWrapper>
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                Resultados que os clientes sentem
              </h2>
            </ScrollAnimateWrapper>
            <ScrollAnimateWrapper delay={100}>
              <p className="text-xl text-text/70 max-w-3xl mx-auto">
                Histórias reais de empresas que escalaram tráfego, leads e vendas connosco.
              </p>
            </ScrollAnimateWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <ScrollAnimateWrapper key={testimonial} delay={200 + (testimonial * 100)} className="flex h-full">
                <div className="bg-bg p-8 rounded-2xl border border-border hover:shadow-lg hover:scale-105 transition-all flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-5 h-5 bg-accent rounded-full mr-1 motion-safe:animate-[pulse_2s_ease-in-out_infinite]"></div>
                  ))}
                </div>
                <p className="text-text/70 mb-6">
                  {testimonial === 1 ? '“Em 3 meses subimos para o top 3 no Google e triplicámos pedidos de orçamento.”' : testimonial === 2 ? '“O novo site é rápido e claro. Passámos de 1–2 leads/semana para 10+.”' : '“Finalmente percebo o que funciona: relatórios simples e melhorias contínuas todos os meses.”'}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-border rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-text">{testimonial === 1 ? 'Rita Carvalho' : testimonial === 2 ? 'João Mendes' : 'Ana Rocha'}</div>
                    <div className="text-text/70 text-sm">{testimonial === 1 ? 'Diretora, Clínica Lumina' : testimonial === 2 ? 'CEO, M2 Construções' : 'Marketing Manager, TechWave'}</div>
                  </div>
                </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollAnimateWrapper>
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                Perguntas frequentes
              </h2>
            </ScrollAnimateWrapper>
            <ScrollAnimateWrapper delay={100}>
              <p className="text-xl text-text/70">
                Tudo o que precisa de saber para avançar com segurança.
              </p>
            </ScrollAnimateWrapper>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((faq) => (
              <ScrollAnimateWrapper key={faq} delay={200 + (faq * 100)}>
                <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
                <button className="group flex justify-between items-center w-full text-left cursor-pointer transition-colors hover:bg-bg/50 rounded-lg p-2 -m-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                  <h3 className="text-lg font-semibold text-text">
                    {faq === 1 ? 'Quanto tempo demora a lançar o meu website?' : faq === 2 ? 'Já tenho site. Podem apenas tratar do SEO?' : faq === 3 ? 'Tenho de assinar fidelização?' : faq === 4 ? 'Conseguem escrever conteúdos para o meu setor?' : 'Como medem os resultados?'}
                  </h3>
                  <div className="w-6 h-6 bg-border rounded-full transition-transform group-hover:rotate-180 flex items-center justify-center">
                    <svg className="w-3 h-3 text-text/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="mt-4 text-text/70 transition-[max-height] duration-300 ease-out">
                  {faq === 1 ? 'Projetos Essencial demoram normalmente 2–3 semanas; Crescimento 4–6 semanas; Premium 6–8 semanas, dependendo do escopo.' : faq === 2 ? 'Sim. Fazemos auditoria técnica, plano de keywords e otimizações contínuas mesmo que o seu site tenha sido criado por outra equipa.' : faq === 3 ? 'Não. Os planos são mensais e pode cancelar quando quiser. Recomendamos 3–6 meses para ver todo o impacto do SEO.' : faq === 4 ? 'Claro. Pesquisamos o seu mercado e criamos conteúdos com linguagem e termos específicos do seu setor.' : 'Definimos KPIs claros (posições no Google, tráfego orgânico, leads) e enviamos relatórios mensais com próximos passos.'}
                </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contactos" className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center motion-safe:animate-[float_10s_ease-in-out_infinite] will-change-transform">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para crescer no Google?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Fale connosco e receba um plano simples para aumentar tráfego e leads nos próximos 30 dias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ring-offset-2 ring-offset-transparent">
              Marcar Demo
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ring-offset-2 ring-offset-transparent">
              Pedir Proposta
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="w-32 h-8 bg-black/20 rounded mb-6"></div>
              <p className="text-black/60 mb-6">
                Criamos websites rápidos e estratégias de SEO que colocam a sua marca no topo do Google e convertem visitas em clientes.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((social) => (
                  <div key={social} className="w-8 h-8 bg-black/20 rounded"></div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Ligações Rápidas</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-black/60 hover:text-black">Início</a></li>
                <li><a href="#" className="text-black/60 hover:text-black">Serviços</a></li>
                <li><a href="#" className="text-black/60 hover:text-black">Preços</a></li>
                <li><a href="#" className="text-black/60 hover:text-black">Sobre</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Serviços</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-black/60 hover:text-black">Criação de Websites</a></li>
                <li><a href="#" className="text-black/60 hover:text-black">Gestão de SEO</a></li>
                <li><a href="#" className="text-black/60 hover:text-black">Atualizações de Conteúdo</a></li>
                <li><a href="#" className="text-black/60 hover:text-black">Criação de Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contactos</h4>
              <ul className="space-y-3 text-black/60">
                <li>ola@suaagencia.pt</li>
                <li>+351 910 000 000</li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-black/20 mt-12 pt-8 text-center text-black/60">
            <p>&copy; 2024 Sua Agência. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}