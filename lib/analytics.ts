/**
 * Authority Analytics Utility
 * Used for tracking high-intent conversion events in Phase 3.
 * Supports GA4, Facebook Pixel, and internal logging.
 */

type EventName = 
  | 'estimator_start' 
  | 'estimator_category_selected' 
  | 'estimator_service_selected' 
  | 'estimator_complete'
  | 'phone_click'
  | 'quote_request_start'
  | 'quote_request_complete';

interface EventParams {
  category?: string;
  service?: string;
  value?: number;
  label?: string;
  [key: string]: any;
}

export const trackEvent = (name: EventName, params?: EventParams) => {
  // 1. Log to console for development verification
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] Event: ${name}`, params);
  }

  // 2. GA4 (window.gtag)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, params);
  }

  // 3. Cloudflare Web Analytics (Internal)
  // Cloudflare beacon handles basic pageviews automatically, 
  // but we can send custom events if configured via Workers.
};

export const trackPhoneClick = (label: string) => {
  trackEvent('phone_click', { label });
};

export const trackEstimatorStep = (step: number, data?: any) => {
  if (step === 1) trackEvent('estimator_start');
  if (step === 2) trackEvent('estimator_category_selected', { category: data });
  if (step === 3) trackEvent('estimator_complete', { service: data.id, value: data.base });
};
