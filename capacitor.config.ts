import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kbellaaura.app',
  appName: 'K Bella Aura',
  webDir: 'dist',
  server: {
    url: 'https://045c1cfe-e018-4056-b7ca-2f742acbae58.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;
