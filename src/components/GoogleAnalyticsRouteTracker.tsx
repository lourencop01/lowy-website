'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export function GoogleAnalyticsRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { state: { consent, hasConsented } } = useCookieConsent();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!hasConsented || !consent.analytics || !window.gtag) return;

    const query = searchParams?.toString();
    const url = `${window.location.origin}${pathname}${query ? `?${query}` : ''}`;

    window.gtag('event', 'page_view', {
      page_location: url,
      page_title: document.title,
      page_referrer: document.referrer
    });
  }, [pathname, searchParams, hasConsented, consent.analytics]);

  return null;
}
