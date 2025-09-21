'use client';

import { useState } from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export function CookieConsentBanner() {
  const { showBanner, grantConsent } = useCookieConsent();
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  if (!showBanner) return null;

  const acceptAll = () => {
    grantConsent({
      analytics: true,
      marketing: true,
    });
  };

  const openPreferences = () => {
    setShowModal(true);
  };

  const savePreferences = () => {
    grantConsent(preferences);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setPreferences({
      analytics: false,
      marketing: false,
    });
  };

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-t border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-text mb-2">
                Utilizamos cookies
              </h3>
              <p className="text-sm text-text/70">
                Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para melhorar a sua experiência. 
                Pode escolher quais categorias aceitar.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={openPreferences}
                className="px-6 py-2 text-sm font-medium text-text bg-bg border border-border rounded-full hover:bg-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Gerir preferências
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-accent border border-transparent rounded-full hover:from-primary/90 hover:to-accent/90 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          />
          
          {/* Modal */}
          <div className="relative bg-surface rounded-2xl shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto border border-border">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text">
                  Preferências de Cookies
                </h2>
                <button
                  onClick={closeModal}
                  className="text-text/50 hover:text-text transition-colors p-1 rounded-full hover:bg-bg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p className="text-sm text-text/70">
                  Personalize as suas preferências de cookies. Pode alterar estas definições a qualquer momento.
                </p>

                {/* Essential Cookies */}
                <div className="border border-border rounded-xl p-4 bg-bg/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-text">Cookies Essenciais</h3>
                    <span className="text-xs text-text/60 bg-border px-3 py-1 rounded-full">
                      Sempre Ativo
                    </span>
                  </div>
                  <p className="text-sm text-text/60">
                    Estes cookies são necessários para o funcionamento básico do website e não podem ser desativados.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-text">Cookies de Análise</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-border peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-accent"></div>
                    </label>
                  </div>
                  <p className="text-sm text-text/60">
                    Ajudam-nos a compreender como os visitantes utilizam o nosso website, permitindo-nos melhorar a experiência.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-text">Cookies de Marketing</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-border peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-secondary peer-checked:to-accent"></div>
                    </label>
                  </div>
                  <p className="text-sm text-text/60">
                    Utilizados para mostrar anúncios relevantes e medir a eficácia das campanhas publicitárias.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={() => {
                    setPreferences({ analytics: false, marketing: false });
                    savePreferences();
                  }}
                  className="flex-1 px-4 py-2 text-sm font-medium text-text bg-bg border border-border rounded-full hover:bg-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  Rejeitar Todos
                </button>
                <button
                  onClick={savePreferences}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-full hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  Guardar Preferências
                </button>
                <button
                  onClick={() => {
                    setPreferences({ analytics: true, marketing: true });
                    savePreferences();
                  }}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-accent border border-transparent rounded-full hover:from-primary/90 hover:to-accent/90 transition-all transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  Aceitar Todos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
