<template>
  <button class="focus:outline-none" @click="toggleLocale">
    <FlagUK v-show="locale === 'en-US'" />
    <FlagVN v-show="locale === 'vi-VN'" />
    <span class="hidden">Click here to change language</span>
  </button>
</template>

<script setup lang="ts">
import { useI18n } from '@/plugins/i18n';
import FlagVN from '@/components/Icons/FlagVN.vue';
import FlagUK from '@/components/Icons/FlagUK.vue';

const { toggleLocale, locale } = useI18n();
</script>
