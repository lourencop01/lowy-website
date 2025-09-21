export function trackGenerateLead(source: string, value: number = 0, currency: string = 'EUR') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency,
      value,
      lead_source: source,
      event_category: 'booking',
      event_label: 'book_now_button'
    });
    if (process.env.NODE_ENV === 'development') {
      console.log('Lead generated:', { source, value, currency });
    }
  }
}

export function trackCustomEvent(eventName: string, parameters: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
    if (process.env.NODE_ENV === 'development') {
      console.log('Custom event tracked:', { eventName, parameters });
    }
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
