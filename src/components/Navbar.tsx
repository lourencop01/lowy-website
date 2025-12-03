'use client';
import Image from 'next/image';
import { useState } from 'react';

interface NavbarProps {
  onCtaClick: (subject: string) => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-surface/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="relative w-17 h-8 rounded transition-transform hover:scale-[1.02]">
              <Image src="/logo_black_nobg.webp" alt="Logótipo" fill sizes="68px" className="object-cover" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Início</a>
              <a href="#servicos" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Serviços</a>
              <a href="#precos" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Preços</a>
              <a href="#resultados" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Resultados</a>
              <a href="#testemunhos" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Testemunhos</a>
              <a href="#contacto" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Contactos</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onCtaClick('Pedir Proposta')} className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-2 rounded-full text-sm font-medium cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ring-offset-surface">
              Pedir Proposta
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-text hover:text-primary p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <a href="#inicio" onClick={handleNavClick} className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:bg-bg rounded">Início</a>
              <a href="#servicos" onClick={handleNavClick} className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:bg-bg rounded">Serviços</a>
              <a href="#precos" onClick={handleNavClick} className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:bg-bg rounded">Preços</a>
              <a href="#resultados" onClick={handleNavClick} className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:bg-bg rounded">Resultados</a>
              <a href="#testemunhos" onClick={handleNavClick} className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:bg-bg rounded">Testemunhos</a>
              <a href="#contacto" onClick={handleNavClick} className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:bg-bg rounded">Contactos</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
