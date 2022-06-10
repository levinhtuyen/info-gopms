<template>
  <footer class="relative w-screen mt-16 pt-24 pb-8 bg-black text-gray-300">
    <div class="container mx-auto mb-8 grid sm:grid-cols-2 gap-10">
      <section>
        <img class="mb-3" src="@/assets/images/logo.png" alt="GoPMS logo" />
        <p class="w-64 mb-6 leading-6">
          {{ t('footerParagraph') }}
        </p>
      </section>
      <section class="grid gap-8 sm:grid-flow-col">
        <div>
          <h6 class="mb-6 text-xl text-white font-medium">
            {{ t('quickLinks') }}
          </h6>
          <ul class="grid gap-3 text-sm">
            <li v-for="(link, index) in quickLinks" :key="index">
              <span class="cursor-pointer hover:underline" @click="scrollTo(link.id)" role="link">
                {{ link.text }}
              </span>
            </li>
            <li>
              <span class="cursor-pointer hover:underline"
                ><a :href="YOUTUBE_VIDEO_LINK" target="_blank" rel="noopener">Video</a></span
              >
            </li>
          </ul>
        </div>
        <div>
          <h6 class="mb-6 text-xl text-white font-medium">
            {{ t('contactUs') }}
          </h6>
          <ul class="text-sm">
            <li class="flex">
              <EmailIcon />
              <a
                class="ml-3 hover:underline"
                :href="`mailto:${GOPMS_EMAIL_ADDRESS}`"
                target="_blank"
                rel="noopener"
                >{{ GOPMS_EMAIL_ADDRESS }}</a
              >
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="container mx-auto text-sm sm:flex justify-between">
      <div>&copy; {{ new Date().getFullYear() }} GoPMS. All rights reserved</div>
    </div>
    <BackToTopButton />
  </footer>
</template>

<script setup lang="ts">
import BackToTopButton from '@/components/BackToTopButton.vue';
import EmailIcon from '@/components/Icons/Email.vue';
import { ID } from '@/constants/ids';
import { GOPMS_EMAIL_ADDRESS, YOUTUBE_VIDEO_LINK } from '@/constants/links';
import { scrollTo } from '@/helpers';
import { useI18n } from '@/plugins/i18n';
import { computed } from 'vue';

const { t } = useI18n();

const quickLinks = computed(() => [
  { id: ID.home, text: t('home') },
  { id: ID.featuresSection, text: t('features') },
  { id: ID.priceSection, text: t('price') },
  { id: ID.registerForm, text: t('register') },
]);
</script>
