<template>
  <section :id="ID.introSection" class="relative w-screen mb-20">
    <img
      class="w-full object-cover object-bottom hidden lg:inline-block"
      style="height: 95vh; z-index: -1; box-shadow: 0px 30px 40px #fff7ed"
      src="@/assets/images/background-web.png"
    />
    <img
      class="w-full object-cover object-bottom hidden sm:inline-block lg:hidden"
      style="height: 95vh; z-index: -1; box-shadow: 0px 30px 40px #fff7ed"
      src="@/assets/images/background-tablet.png"
    />
    <img
      class="w-full object-cover object-bottom inline-block sm:hidden"
      style="height: 80vh; z-index: -1; box-shadow: 0px 30px 40px #fff7ed"
      src="@/assets/images/background-mobile.png"
    />
    <div
      class="container absolute top-40 md:top-72 left-1/2 transform -translate-x-1/2 lg:flex lg:flex-row-reverse items-center justify-center lg:justify-between"
    >
      <img
        class="mb-8"
        width="579"
        src="@/assets/images/macbook.png"
        alt="Macbook pro with GoPMS page on the screen"
      />
      <div class="">
        <h1
          class="mb-8 font-bold text-grayScale text-2xl leading-snug md:text-3xl lg:text-4xl lg:leading-snug xl:text-5xl xl:leading-snug"
          v-html="t('heroPrimaryDefault')"
        ></h1>
        <div>
          <CustomButton
            @click="scrollTo(ID.registerForm)"
            :text="t('registerNow')"
            color="primary"
            role="link"
            size="md"
          />
        </div>
      </div>
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

<style lang="scss" scoped></style>
