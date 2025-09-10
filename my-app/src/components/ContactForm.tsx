'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mldwzawl");
  
  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <div className="bg-surface border border-success/20 rounded-2xl p-8 max-w-md mx-auto">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text mb-2">Mensagem enviada!</h3>
          <p className="text-text/70">Obrigado pelo seu contacto. Responderemos em 24h.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
            Nome *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text placeholder-text/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            placeholder="O seu nome"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-warning text-sm mt-1"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text placeholder-text/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            placeholder="o.seu@email.com"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-warning text-sm mt-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
            Telefone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text placeholder-text/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            placeholder="+351 912 345 678"
          />
          <ValidationError 
            prefix="Phone" 
            field="phone"
            errors={state.errors}
            className="text-warning text-sm mt-1"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
            Empresa
          </label>
          <input
            id="company"
            type="text"
            name="company"
            className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text placeholder-text/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            placeholder="Nome da sua empresa"
          />
          <ValidationError 
            prefix="Company" 
            field="company"
            errors={state.errors}
            className="text-warning text-sm mt-1"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
          Assunto *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
        >
          <option value="">Selecione um assunto</option>
          <option value="Pedir Proposta">Pedir Proposta</option>
          <option value="Auditoria Gratuita">Auditoria Gratuita</option>
          <option value="Agendar Demonstração">Agendar Demonstração</option>
        </select>
        <ValidationError 
          prefix="Subject" 
          field="subject"
          errors={state.errors}
          className="text-warning text-sm mt-1"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text placeholder-text/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-vertical"
          placeholder="Conte-nos sobre o seu projeto. Qual é o seu objetivo principal com o website ou SEO?"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-warning text-sm mt-1"
        />
      </div>

      <div className="text-center">
        <button 
          type="submit" 
          disabled={state.submitting}
          className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 disabled:from-primary/50 disabled:to-accent/50 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ring-offset-bg"
        >
          {state.submitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              A enviar...
            </span>
          ) : (
            'Enviar mensagem'
          )}
        </button>
      </div>

      <p className="text-center text-text/60 text-sm">
        Resposta garantida em 24h. Sem compromisso.
      </p>
    </form>
  );
}
