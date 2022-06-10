<template>
  <button
    class="absolute bottom-32 right-[74px] w-11 h-11 bg-white rounded-full cursor-pointer focus:outline-none"
    @click="scrollTo(ID.home)"
  >
    <BackToTopIcon class="w-full h-full" />
    <span class="hidden">Click here to scroll to the top</span>
  </button>
</template>

<script setup lang="ts">
import BackToTopIcon from '@/components/Icons/BackToTop.vue';
import { ID } from '@/constants/ids';
import { scrollTo } from '@/helpers';
</script>
