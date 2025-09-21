'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export function GoogleAnalytics() {
  const { state: { consent, hasConsented } } = useCookieConsent();
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Reflect consent changes after GA is loaded
  useEffect(() => {
    if (scriptLoaded && hasConsented && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        functionality_storage: 'granted',
        personalization_storage: consent.marketing ? 'granted' : 'denied'
      });
    }
  }, [scriptLoaded, hasConsented, consent.analytics, consent.marketing]);

  const handleScriptLoad = () => {
    setTimeout(() => {
      if (typeof window === 'undefined') return;

      if (!window.dataLayer) window.dataLayer = [];
      if (typeof window.gtag !== 'function') {
        window.gtag = function(...args: unknown[]) {
          window.dataLayer?.push(args);
        } as any;
      }

      setScriptLoaded(true);

      // Ensure gtag is available before calling
      if (!window.gtag) return;

      // Initialize GA
      window.gtag('js', new Date());
      window.gtag('config', gaId!, {
        anonymize_ip: true,
        allow_google_signals: false,
        send_page_view: false
      });

      // We load GA only after consent, so grant analytics now and fire the first page_view
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        functionality_storage: 'granted',
        personalization_storage: consent.marketing ? 'granted' : 'denied'
      });

      window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_title: document.title,
        page_referrer: document.referrer
      });
    }, 100);
  };

  const shouldLoadGA = Boolean(hasConsented && consent.analytics && gaId);
  if (!shouldLoadGA) return null;

  return (
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      onLoad={handleScriptLoad}
    />
  );
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
