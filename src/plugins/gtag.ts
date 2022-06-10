import { isProductionEnv } from '@/constants/environments';
import VueGtag from 'vue-gtag';
import type { PluginOptions } from 'vue-gtag';

export const gtagOptions: PluginOptions = {
  config: { id: 'G-JBK9ZJ6VBW' },
  appName: 'GoPMS Intro',
  pageTrackerScreenviewEnabled: true,
  enabled: isProductionEnv,
};

export default VueGtag;
