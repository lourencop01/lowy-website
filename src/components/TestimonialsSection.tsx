'use client';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Valentina Menella',
      position: 'Dona',
      company: 'Valentina Hair Concept',
      testimonial: '"Tem sido ótimo trabalhar com o Lourenço! Desde que lançámos o site, notámos logo mais marcações, principalmente de clientes novos e muitos estrangeiros. Alguns até mencionaram que nos encontraram no ChatGPT! Agora temos começado a semana com a agenda quase cheia."',
      image: '/valentina-profile-picture.webp'
    }
  ];

  return (
    <section id="testemunhos" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Resultados que os clientes sentem
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            Histórias reais de empresas que escalaram tráfego, leads e vendas connosco.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="flex h-full">
              <div className="bg-bg p-8 rounded-2xl border border-border hover:shadow-lg hover:scale-105 transition-all flex flex-col h-full">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="w-5 h-5 text-accent mr-1 motion-safe:animate-[pulse_2s_ease-in-out_infinite]" />
                ))}
              </div>
              <p className="text-text/70 mb-6">
                {testimonial.testimonial}
              </p>
              <div className="flex items-center">
                {testimonial.image ? (
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} profile picture`}
                      fill
                      sizes="48px"
                      className="object-cover rounded-full"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-border rounded-full mr-4"></div>
                )}
                <div>
                  <div className="font-semibold text-text">{testimonial.name}</div>
                  <div className="text-text/70 text-sm">{testimonial.position}, {testimonial.company}</div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
