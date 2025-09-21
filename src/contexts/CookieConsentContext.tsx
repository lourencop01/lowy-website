'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentState {
  hasConsented: boolean;
  consent: ConsentState;
}

interface CookieConsentContextType {
  state: CookieConsentState;
  grantConsent: (consent: ConsentState) => void;
  revokeConsent: () => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const COOKIE_NAME = 'lowy_cookie_consent';

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CookieConsentState>({
    hasConsented: false,
    consent: {
      analytics: false,
      marketing: false,
    },
  });
  const [showBanner, setShowBanner] = useState(false);

  // Load consent from cookie on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedConsent = localStorage.getItem(COOKIE_NAME);
      if (savedConsent) {
        try {
          const parsed = JSON.parse(savedConsent);
          setState({
            hasConsented: true,
            consent: parsed,
          });
        } catch (error) {
          console.error('Failed to parse saved consent:', error);
          setShowBanner(true);
        }
      } else {
        setShowBanner(true);
      }
    }
  }, []);

  const grantConsent = (consent: ConsentState) => {
    const newState = {
      hasConsented: true,
      consent,
    };
    setState(newState);
    localStorage.setItem(COOKIE_NAME, JSON.stringify(consent));
    setShowBanner(false);
  };

  const revokeConsent = () => {
    const newState = {
      hasConsented: false,
      consent: {
        analytics: false,
        marketing: false,
      },
    };
    setState(newState);
    localStorage.removeItem(COOKIE_NAME);
    
    // Remove tracking scripts if available
    if (typeof window !== 'undefined') {
      const { removeTrackingScripts } = require('@/lib/removeTracking');
      removeTrackingScripts();
    }
    
    setShowBanner(true);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        state,
        grantConsent,
        revokeConsent,
        showBanner,
        setShowBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
