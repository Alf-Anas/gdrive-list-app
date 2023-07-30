import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'gdrive.list.app',
  appName: 'gdrive-list-app',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
