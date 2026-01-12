'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Promotion codes with their discount amounts in euros and payment URLs
const PROMOTION_CODES: Record<string, { discount: number; url: string }> = {
  'PADRINHO': {
    discount: 60,
    url: 'https://pay.gocardless.com/BRT00048ZS5KY4B' // Replace with actual URL
  }
};

// Default payment URL (when no promo code is applied)
const DEFAULT_PAYMENT_URL = 'https://pay.gocardless.com/BRT00041TZFZ90F';

export default function SubscribePage() {
  const [promotionCode, setPromotionCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [paymentUrl, setPaymentUrl] = useState(DEFAULT_PAYMENT_URL);
  const [codeStatus, setCodeStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const basePrice = 89;

  const handleApplyPromoCode = () => {
    const code = promotionCode.trim().toUpperCase();
    if (code && PROMOTION_CODES[code]) {
      setAppliedDiscount(PROMOTION_CODES[code].discount);
      setPaymentUrl(PROMOTION_CODES[code].url);
      setCodeStatus('valid');
    } else if (code) {
      setAppliedDiscount(0);
      setPaymentUrl(DEFAULT_PAYMENT_URL);
      setCodeStatus('invalid');
    } else {
      setAppliedDiscount(0);
      setPaymentUrl(DEFAULT_PAYMENT_URL);
      setCodeStatus('idle');
    }
  };

  const handlePromotionCodeChange = (value: string) => {
    setPromotionCode(value.toUpperCase());
    // Reset status when user starts typing
    if (codeStatus !== 'idle') {
      setCodeStatus('idle');
      setAppliedDiscount(0);
      setPaymentUrl(DEFAULT_PAYMENT_URL);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Open GoCardless payment page in a new tab
    window.open(paymentUrl, '_blank');
  };

  const finalPrice = basePrice - appliedDiscount;

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Navbar onCtaClick={() => {}} />
      
      <main className="flex-grow py-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-text mb-4">
              Subscrever
            </h1>
            <p className="text-xl text-text/70">
              Complete os seus dados para finalizar a subscrição
            </p>
          </div>

          {/* Payment Form */}
          <div className="bg-surface border border-border rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-text mb-2">
                    First name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-bg text-text placeholder-text/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-text mb-2">
                    Last name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-bg text-text placeholder-text/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-text mb-2">
                  Company Name *
                </label>
                <input
                  id="companyName"
                  type="text"
                  name="companyName"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-bg text-text placeholder-text/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>

              {/* Promotion Code */}
              <div>
                <label htmlFor="promotionCode" className="block text-sm font-medium text-text mb-2">
                  Promotion Code
                </label>
                <div className="flex gap-2">
                  <input
                    id="promotionCode"
                    type="text"
                    name="promotionCode"
                    value={promotionCode}
                    onChange={(e) => handlePromotionCodeChange(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleApplyPromoCode())}
                    className="flex-1 px-4 py-3 border border-border rounded-lg bg-bg text-text placeholder-text/50 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    placeholder="Enter code (optional)"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromoCode}
                    className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors focus:ring-2 focus:ring-primary/40"
                  >
                    Apply
                  </button>
                </div>
                {codeStatus === 'valid' && (
                  <p className="text-sm text-success mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Code applied! You save {appliedDiscount}€
                  </p>
                )}
                {codeStatus === 'invalid' && (
                  <p className="text-sm text-warning mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Invalid promotion code
                  </p>
                )}
              </div>

              {/* Total Price */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 mt-8">
                {appliedDiscount > 0 ? (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-text/70">Original Price</span>
                      <span className="text-lg text-text/70 line-through">{basePrice}€</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-success">Discount</span>
                      <span className="text-lg text-success">-{appliedDiscount}€</span>
                    </div>
                    <div className="border-t border-primary/20 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-text">Total</span>
                        <span className="text-3xl font-bold text-text">{finalPrice}€</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-text">Total</span>
                    <span className="text-3xl font-bold text-text">{basePrice}€</span>
                  </div>
                )}
                <p className="text-sm text-text/60 mt-2">Pagamento único mensal</p>
              </div>

              {/* Subscribe Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ring-offset-2 ring-offset-bg transition-all"
                >
                  Subscribe
                </button>
              </div>

              {/* Security Notice */}
              <p className="text-center text-text/60 text-sm mt-4">
                🔒 Pagamento seguro. Cancele a qualquer momento.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
