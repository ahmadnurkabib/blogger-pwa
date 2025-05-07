import type { Config } from './types';

export default {
  id: '/',
  name: 'ASC Files Lovers',
  shortName: 'ASC Files Lovers',
  description: 'The real Tutorials Daily use',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Cloud Support Download',
      shortName: 'Cloud ASC',
      description: 'File Support premium',
      url: '/p/asc-files-support-sync.html?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '4873b552-8323-4964-b68d-f388c0fba239',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.ahmadservicecenter.com',
} satisfies Config;
