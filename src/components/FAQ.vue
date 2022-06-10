<template>
  <section class="max-w-7xl mx-auto py-20">
    <h3 class="mb-16 px-2 text-center text-3xl md:text-4xl font-extrabold">
      {{ t('faq') }}
    </h3>
    <div class="relative">
      <GlideCarouselArrow direction="L" @click="slideLeft" />
      <GlideCarouselLayout :glideClassName="glideEnClassName" locale="en-US" />
      <GlideCarouselLayout :glideClassName="glideViClassName" locale="vi-VN" />
      <GlideCarouselArrow direction="R" @click="slideRight" />
    </div>
  </section>
</template>

<script setup lang="ts">
import GlideCarouselArrow from '@/components/UI/GlideCarouselArrow.vue';
import GlideCarouselLayout from '@/components/UI/GlideCarouselLayout.vue';
import { useI18n } from '@/plugins/i18n';
import Glide from '@glidejs/glide';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

interface IFaqObject {
  question: string;
  answer: string;
}

const { locale, t } = useI18n();

const glides = ref<[Glide.Properties | null, Glide.Properties | null]>([null, null]);

const glideEnClassName = 'glide-en-US';
const glideViClassName = 'glide-vi-VN';

const slideLeft = () => {
  glides.value.forEach((glide) => glide?.go('<'));
};

const slideRight = () => {
  glides.value.forEach((glide) => glide?.go('>'));
};

onMounted(() => {
  const options: Glide.Options = {
    type: 'carousel',
    perView: 3,
    gap: 24,
    breakpoints: {
      640: { perView: 1, peek: 40 },
      768: { perView: 2, peek: 80 },
      1024: { perView: 2, peek: 100 },
    },
    // breakpoints numbers are from Tailwind's responsive breakpoints.
  };
  const glideEn = new Glide(`.${glideEnClassName}`, options);
  const glideVi = new Glide(`.${glideViClassName}`, options);
  const glideEnIndex = 0;
  const glideViIndex = 1;
  // @ts-ignore
  // Glidejs type is wrong. Typed as event doesn't exist.
  // This event listener is for synchronizing each carousel in case of swiping.
  glideEn.on('run', (e) => {
    if (e.steps === 0) return;
    glides.value[glideViIndex]?.go(e.direction);
  });

  // @ts-ignore
  // Glidejs type is wrong. Typed as event doesn't exist.
  // This event listener is for synchronizing each carousel in case of swiping.
  glideVi.on('run', (e) => {
    if (e.steps === 0) return;
    glides.value[glideEnIndex]?.go(e.direction);
  });

  const mountedGlideEn = glideEn.mount();
  const mountedGlideVi = glideVi.mount();
  glides.value[glideEnIndex] = mountedGlideEn;
  glides.value[glideViIndex] = mountedGlideVi;
});

onBeforeUnmount(() => {
  glides.value.forEach((glide) => glide?.destroy());
});
</script>
