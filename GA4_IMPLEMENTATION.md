# Google Analytics 4 with Consent Mode - Implementation Guide

## Overview

This implementation provides Google Analytics 4 (GA4) with Consent Mode v2 for a Next.js App Router project. The solution ensures GDPR compliance by:

- Default-denying all tracking until explicit consent
- Loading GA4 scripts only after analytics consent is granted
- Providing consent management with dynamic updates
- Manual page view tracking for SPA navigation
- Safe event tracking utilities

## Files Created

### Core Components

1. **`src/contexts/CookieConsentContext.tsx`**
   - React context for managing consent state
   - Persists consent to localStorage
   - Provides consent granting/revoking functions

2. **`src/components/GoogleAnalytics.tsx`**
   - Conditionally loads GA4 script after consent
   - Initializes GA with consent mode updates
   - Fires initial page_view event

3. **`src/components/GoogleAnalyticsRouteTracker.tsx`**
   - Tracks page_view events on SPA route changes
   - Only tracks when analytics consent is granted

4. **`src/components/CookieConsentBanner.tsx`**
   - User-friendly consent banner
   - Multiple consent options (essential, analytics, all)

### Utilities

1. **`src/lib/analytics.ts`**
   - Safe event tracking functions
   - `trackGenerateLead()` for lead generation events
   - `trackCustomEvent()` for general events

2. **`src/lib/removeTracking.ts`**
   - Cleanup utility to remove GA scripts
   - Called when consent is revoked

### Modified Files

1. **`src/app/layout.tsx`**
   - Added default-deny consent mode bootstrap
   - Integrated consent provider and GA components

2. **`src/app/page.tsx`**
   - Added analytics tracking to CTA clicks
   - Example of lead generation tracking

## Environment Configuration

Create a `.env.local` file with:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual GA4 measurement ID.

## Key Features

### 1. Consent Mode v2 Compliance

- **Default Deny**: All tracking categories denied by default
- **Dynamic Updates**: Consent mode updates when user preferences change
- **Granular Control**: Separate analytics and marketing consent

### 2. Privacy-First Approach

- **No Auto Page Views**: GA4 configured with `send_page_view: false`
- **Manual Tracking**: Page views sent only after consent
- **Script Loading**: GA4 script loads only when needed
- **Clean Removal**: Scripts removed on consent withdrawal

### 3. Analytics Features

- **Lead Tracking**: Automated lead generation events on CTAs
- **Custom Events**: Flexible event tracking system
- **Route Tracking**: SPA navigation tracking
- **Development Logging**: Console logs in development mode

## Usage Examples

### Tracking Events

```typescript
import { trackGenerateLead, trackCustomEvent } from '@/lib/analytics';

// Track lead generation
trackGenerateLead('hero_button', 100, 'EUR');

// Track custom events
trackCustomEvent('video_play', {
  video_title: 'Product Demo',
  video_duration: 120
});
```

### Managing Consent

```typescript
import { useCookieConsent } from '@/contexts/CookieConsentContext';

function MyComponent() {
  const { state, grantConsent, revokeConsent } = useCookieConsent();

  const acceptAnalytics = () => {
    grantConsent({
      analytics: true,
      marketing: false
    });
  };

  return (
    <div>
      <p>Analytics consent: {state.consent.analytics ? 'Granted' : 'Denied'}</p>
      <button onClick={acceptAnalytics}>Accept Analytics</button>
    </div>
  );
}
```

## QA Checklist

### ✅ Before Consent

- [ ] No GA4 script loaded in network tab
- [ ] Only consent mode default script present
- [ ] No `page_view` events fired
- [ ] Console shows no GA-related logs (except default consent)

### ✅ After Accepting Analytics

- [ ] GA4 script loads exactly once
- [ ] Consent mode updates to granted for analytics
- [ ] Initial `page_view` event fired once
- [ ] Console logs show consent update (dev mode)

### ✅ SPA Navigation

- [ ] `page_view` events fire on route changes
- [ ] Correct page URLs tracked
- [ ] No duplicate events

### ✅ Event Tracking

- [ ] CTA clicks generate lead events
- [ ] Custom events fire with correct parameters
- [ ] Events only fire when analytics consent granted
- [ ] Development logs appear in dev mode

### ✅ Consent Management

- [ ] Cookie banner appears for new users
- [ ] Consent choices persist across sessions
- [ ] Consent can be revoked
- [ ] Revoking consent stops all tracking

### ✅ After Rejecting/Withdrawing

- [ ] Consent mode set to denied
- [ ] No further events fire
- [ ] GA script optionally removed
- [ ] Cookie banner reappears

### ✅ Technical Validation

- [ ] No duplicate GA script tags
- [ ] Production build succeeds
- [ ] TypeScript compilation passes
- [ ] No console errors

## Testing Instructions

### Development Testing

1. **Start development server**:

   ```bash
   npm run dev
   ```

2. **Open browser dev tools** and check:
   - Network tab for script loading
   - Console for debug messages
   - Application tab for localStorage

3. **Test consent flow**:
   - Clear localStorage
   - Refresh page
   - Accept/reject consent
   - Check network requests

### Production Testing

1. **Build and start**:

   ```bash
   npm run build
   npm run start
   ```

2. **Validate GA4 setup** in production mode:
   - Verify measurement ID is set
   - Test with actual GA4 property
   - Monitor real-time reports

### GA4 Property Validation

1. **Real-time reports**: Check events appear
2. **Debug view**: Use GA4 debug mode
3. **Consent signals**: Verify consent mode working

## Implementation Notes

### Security Considerations

- No sensitive data tracked
- User consent respected
- GDPR/CCPA compliant defaults

### Performance Impact

- GA4 script loads only after consent
- Minimal bundle size increase
- No blocking scripts

### Maintenance

- Monitor GA4 property for data
- Update consent categories as needed
- Review tracking events quarterly

## Troubleshooting

### Common Issues

1. **GA4 not loading**:
   - Check `NEXT_PUBLIC_GA_ID` environment variable
   - Verify consent is granted for analytics

2. **No events tracked**:
   - Ensure analytics consent is granted
   - Check browser network tab for requests
   - Verify GA4 measurement ID

3. **Consent not persisting**:
   - Check localStorage in browser
   - Verify context provider wraps components

4. **TypeScript errors**:
   - Ensure all imports are correct
   - Check global type declarations

### Debug Steps

1. Open browser developer tools
2. Check Console tab for errors/logs
3. Verify Network tab shows GA requests
4. Test localStorage for consent data
5. Use GA4 debug mode for validation

---

**Note**: Remember to replace `G-XXXXXXXXXX` with your actual GA4 measurement ID before deploying to production.
