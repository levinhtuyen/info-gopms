<template>
  <section class="pt-20 text-gray-900" :id="ID.featuresSection">
    <div class="container mx-auto">
      <div class="mb-16 grid place-items-center gap-6">
        <h2 class="text-center text-3xl font-bold sm:text-4xl">
          {{ t('whyGoPMS') }}
        </h2>
        <div>
          <p class="text-center" :class="locale === 'vi-VN' ? 'md:px-20' : ''">
            {{ t('solutionParagraphA') }}
          </p>
          <p class="text-center" :class="locale === 'en-US' ? 'md:px-20' : ''">
            {{ t('solutionParagraphB') }}
          </p>
        </div>
      </div>
      <div class="grid gap-10 md:grid-cols-3">
        <div v-for="(feature, index) in features" :key="index">
          <component :is="feature.icon" class="mb-6 mx-auto" />
          <h4 class="mb-2 text-center text-xl font-semibold">
            {{ feature.heading }}
          </h4>
          <p class="text-center">{{ feature.paragraph }}</p>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-16 px-6 lg:px-12 grid gap-12 lg:grid-flow-col" style="max-width: 1700px">
      <img
        class="shadow-lg"
        width="1000"
        src="@/assets/images/screen-left.png"
        alt="GoPMS Dashboard screen"
      />
      <img
        class="shadow-lg"
        width="10800"
        src="@/assets/images/screen-right.png"
        alt="GoPMS Report screen"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CollectionIcon from '@/components/Icons/Collection.vue';
import DashboardIcon from '@/components/Icons/Dashboard.vue';
import ManagementIcon from '@/components/Icons/Management.vue';
import { ID } from '@/constants/ids';
import { useI18n } from '@/plugins/i18n';
import { computed } from 'vue';

const { locale, t } = useI18n();

const features = computed(() => {
  return [
    {
      heading: t('features_1'),
      icon: DashboardIcon,
      alt: 'Dashboard icon',
      paragraph: 'Minimize operation time by real-time data integration with online travel agents',
    },
    {
      heading: t('features_2'),
      icon: ManagementIcon,
      alt: 'Management icon',
      paragraph: t('features_2_desc'),
    },
    {
      heading: t('features_3'),
      icon: CollectionIcon,
      alt: 'Collection icon',
      paragraph: t('features_3_desc'),
    },
  ];
});
</script>
