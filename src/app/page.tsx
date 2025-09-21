'use client';
import { lazy, Suspense } from 'react';
import ContactForm from '../components/ContactForm';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LazySection from '../components/LazySection';
import Script from 'next/script';
import { trackGenerateLead, trackCustomEvent } from '@/lib/analytics';

// Lazy load the sections
const ProblemsSection = lazy(() => import('../components/ProblemsSection'));
const SolutionsSection = lazy(() => import('../components/SolutionsSection'));
const AuditSection = lazy(() => import('../components/AuditSection'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));
const PricingSection = lazy(() => import('../components/PricingSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const CaseStudySection = lazy(() => import('../components/CaseStudySection'));
const FAQSection = lazy(() => import('../components/FAQSection'));
const CTASection = lazy(() => import('../components/CTASection'));

export default function Page() {
  const handleCtaClick = (subject: string) => {
    // Track the lead generation event
    trackGenerateLead(subject);
    
    // Track custom event with more context
    trackCustomEvent('cta_click', {
      event_category: 'engagement',
      event_label: subject,
      section: subject
    });
    
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
            url: "/hero.webp"
          }
        })}
      </Script>
      
      <Navbar onCtaClick={handleCtaClick} />
      <HeroSection onCtaClick={handleCtaClick} />
      
      <LazySection>
        <Suspense fallback={<div className="py-20 bg-surface" />}>
          <ProblemsSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="py-20 bg-bg" />}>
          <SolutionsSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="py-20 bg-gradient-to-r from-primary to-accent" />}>
          <AuditSection onCtaClick={handleCtaClick} />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="py-20 bg-surface" />}>
          <ServicesSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="py-20 bg-bg" />}>
          <PricingSection onCtaClick={handleCtaClick} />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="py-20 bg-surface" />}>
          <TestimonialsSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="py-20 bg-bg" />}>
          <CaseStudySection onCtaClick={handleCtaClick} />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="py-20 bg-surface" />}>
          <FAQSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="py-20 bg-gradient-to-r from-primary to-accent" />}>
          <CTASection onCtaClick={handleCtaClick} />
        </Suspense>
      </LazySection>

      {/* Contact Form Section */}
      <LazySection>
        <Suspense fallback={<div className="py-20 bg-bg" />}>
          <section id="contacto" className="py-20 bg-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                  Fale connosco
                </h2>
                <p className="text-xl text-text/70 max-w-3xl mx-auto">
                  Pronto para aumentar o seu tráfego e leads? Envie-nos uma mensagem e receba uma proposta personalizada em 24h.
                </p>
              </div>
              <ContactForm />
            </div>
          </section>
        </Suspense>
      </LazySection>

      <Footer />
    </div>
  );
}