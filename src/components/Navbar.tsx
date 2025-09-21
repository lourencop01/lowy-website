'use client';
import Image from 'next/image';

interface NavbarProps {
  onCtaClick: (subject: string) => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  return (
    <header className="bg-surface/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="relative w-17 h-8 rounded transition-transform hover:scale-[1.02]">
              <Image src="/logo_black_nobg.webp" alt="Logótipo" fill className="object-cover" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Início</a>
              <a href="#servicos" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Serviços</a>
              <a href="#precos" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Preços</a>
              <a href="#testemunhos" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Testemunhos</a>
              <a href="#contacto" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:underline underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">Contactos</a>
            </div>
          </div>
            <button onClick={() => onCtaClick('Pedir Proposta')} className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-2 rounded-full text-sm font-medium cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ring-offset-surface">
              Pedir Proposta
            </button>
        </div>
      </nav>
    </header>
  );
}
