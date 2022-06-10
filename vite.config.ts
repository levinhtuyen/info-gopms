import vueI18n from '@intlify/vite-plugin-vue-i18n';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(), vueI18n({ include: resolve(__dirname, 'src/plugins/i18n/**') })],
  optimizeDeps: { include: ['@glidejs/glide'] },
});
