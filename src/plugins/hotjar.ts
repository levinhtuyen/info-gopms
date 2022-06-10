import { isProductionEnv } from '@/constants/environments';
import VueHotjar from 'vue-hotjar-next';
import type { hotjarOptions } from 'vue-hotjar-next';

export const hotJarOptions: hotjarOptions = {
  id: 2549918, // Hotjar Site ID
  isProduction: isProductionEnv,
};

export default VueHotjar;
