'use client';
import Image from 'next/image';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="relative w-18 h-8 rounded mb-6">
              <Image src="/logo_black.png" alt="Logótipo" fill className="object-cover" />
            </div>
            <p className="text-black/60 mb-6">
              Criamos websites rápidos e estratégias de SEO que colocam a sua marca no topo do Google e ChatGPT e convertem visitas em clientes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/lowy_digital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                aria-label="Seguir no Instagram"
              >
                <AiFillInstagram className="w-8 h-8 text-black/70 hover:text-black transition-colors" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Ligações Rápidas</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-black/60 hover:text-black">Início</a></li>
              <li><a href="#servicos" className="text-black/60 hover:text-black">Serviços</a></li>
              <li><a href="#precos" className="text-black/60 hover:text-black">Preços</a></li>
              <li><a href="#testemunhos" className="text-black/60 hover:text-black">Testemunhos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contactos</h3>
            <ul className="space-y-3 text-black/60">
              <li>lowydigitalseo@gmail.com</li>
              <li>+351 915 662 413 <br/>(rede móvel nacional)</li>
              <li>Lisboa, Portugal</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/20 mt-12 pt-8 text-center text-black/60">
          <p>&copy; 2025 Lowy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
