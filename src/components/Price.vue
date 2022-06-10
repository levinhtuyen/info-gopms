<template>
  <section class="w-full py-20 text-white overflow-hidden" :id="ID.priceSection">
    <div class="relative py-28 grid gap-6 place-items-center bg-orange-800">
      <p class="px-1 text-xl text-center" style="max-width: 750px">
        {{ t('pricingDesc') }}
      </p>
      <h3 class="text-5xl font-extrabold">{{ t('forFree') }}</h3>
      <div>
        <CustomButton
          @click="scrollTo(ID.registerForm)"
          :text="t('registerNow')"
          color="white"
          size="md"
        />
      </div>
      <img
        class="absolute -top-10 -left-20 w-32 h-32 transform rotate-90 md:left-10 lg:left-20"
        src="@/assets/images/ellipse.png"
        alt="Ellipse on top-left"
      />
      <img
        class="absolute top-80 -left-28 w-48 h-48 md:left-20 md:top-64 lg:left-44"
        src="@/assets/images/ellipse.png"
        alt="Ellipse on bottom-left"
      />
      <img
        class="absolute -bottom-28 -right-44 w-72 md:-right-12 lg:right-28"
        src="@/assets/images/ellipse.png"
        alt="Ellipse on bottom-right"
      />
      <img
        class="absolute -bottom-20 -right-48 transform -rotate-90 hidden lg:block"
        style="width: 409px; height: 409px"
        src="@/assets/images/ellipse.png"
        alt="Ellipse on bottom-far-right"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CustomButton from '@/components/UI/Button.vue';
import { ID } from '@/constants/ids';
import { scrollTo } from '@/helpers';
import { useI18n } from '@/plugins/i18n';

const { t } = useI18n();
</script>
