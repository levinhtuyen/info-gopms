import App from '@/App.vue';
import VueGtag, { gtagOptions } from '@/plugins/gtag';
import { i18n } from '@/plugins/i18n';
import { router } from '@/router';
import '@/styles/tailwind.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import VueHotJar, { hotJarOptions } from '@/plugins/hotjar';

createApp(App)
  .use(router)
  .use(i18n)
  .use(createPinia())
  .use(VueGtag, gtagOptions)
  .use(VueHotJar, hotJarOptions)
  .mount('#app');
