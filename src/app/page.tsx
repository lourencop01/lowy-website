'use client';
import ScrollAnimateWrapper from '../components/ScrollAnimateWrapper';
import ContactForm from '../components/ContactForm';
import HeroSection from '../components/HeroSection';
import ProblemsSection from '../components/ProblemsSection';
import SolutionsSection from '../components/SolutionsSection';
import AuditSection from '../components/AuditSection';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CaseStudySection from '../components/CaseStudySection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function Page() {
  const handleCtaClick = (subject: string) => {
    // Dispatch custom event to notify ContactForm
    window.dispatchEvent(new CustomEvent('ctaClicked', { detail: { subject } }));
    
    // Scroll to contact form
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-bg">
      <Script id="webpage-structured-data" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Lowy — Websites e SEO que geram resultados",
          description:
            "Construímos websites rápidos e otimizados para Google e ChatGPT que aumentam a visibilidade online e transformam visitas em vendas.",
          inLanguage: "pt-PT",
          isPartOf: {
            "@type": "WebSite",
            name: "Lowy",
            url: "https://lowy.pt/"
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: "/hero.png"
          }
        })}
      </Script>
      
      <Navbar onCtaClick={handleCtaClick} />
      <HeroSection onCtaClick={handleCtaClick} />
      <ProblemsSection />
      <SolutionsSection />
      <AuditSection onCtaClick={handleCtaClick} />
      <ServicesSection />
      <PricingSection onCtaClick={handleCtaClick} />
      <TestimonialsSection />
      <CaseStudySection onCtaClick={handleCtaClick} />
      <FAQSection />
      <CTASection onCtaClick={handleCtaClick} />

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollAnimateWrapper>
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                Fale connosco
              </h2>
            </ScrollAnimateWrapper>
            <ScrollAnimateWrapper delay={100}>
              <p className="text-xl text-text/70 max-w-3xl mx-auto">
                Pronto para aumentar o seu tráfego e leads? Envie-nos uma mensagem e receba uma proposta personalizada em 24h.
              </p>
            </ScrollAnimateWrapper>
          </div>
          <ScrollAnimateWrapper delay={200}>
            <ContactForm />
          </ScrollAnimateWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
}