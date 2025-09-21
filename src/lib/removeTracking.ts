export function removeTrackingScripts(): void {
  if (typeof document === 'undefined') return;

  const el = document.getElementById('google-analytics');
  if (el) el.remove();

  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.length = 0;
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}
