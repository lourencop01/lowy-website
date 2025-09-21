import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative w-24 h-16 mx-auto mb-8">
          <Image src="/logo_black_nobg.webp" alt="Lowy" fill className="object-contain" />
        </div>
        
        <h1 className="text-6xl font-bold text-text mb-4">404</h1>
        <h2 className="text-2xl lg:text-3xl font-bold text-text mb-6">
          Página não encontrada
        </h2>
        <p className="text-xl text-text/70 mb-8 max-w-md mx-auto">
          A página que procura não existe ou foi movida. Vamos ajudá-lo a encontrar o que precisa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ring-offset-bg transition-all">
              Voltar ao início
            </button>
          </Link>
          <Link href="/#contacto">
            <button className="bg-surface hover:bg-surface/80 text-text border border-border px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ring-offset-bg transition-all">
              Contactar-nos
            </button>
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-surface rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text mb-4">
            Está perdido? Podemos ajudar
          </h3>
          <p className="text-text/70 mb-4">
            Se chegou aqui através de um link que deveria funcionar, informe-nos para que possamos corrigir o problema.
          </p>
          <Link href="/#contacto">
            <span className="text-primary hover:text-primary/80 font-medium cursor-pointer transition-colors">
              Reportar problema →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
