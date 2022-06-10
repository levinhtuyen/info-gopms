<template>
  <header class="fixed w-full z-40 bg-white">
    <section class="container mx-auto py-3 flex items-center justify-between">
      <a class="flex flex-nowrap" href="/">
        <img
          class="inline-block w-8 sm:w-10 mr-2"
          src="@/assets/images/logo.png"
          alt="GoPMS logo"
        />
        <img class="w-24 sm:w-32" src="@/assets/images/logo-letter.png" alt="GoPMS letter logo" />
      </a>
      <div class="flex items-center">
        <nav class="mr-5">
          <ul class="grid grid-flow-col gap-16 items-center text-primary">
            <li
              class="font-semibold hidden lg:inline-block"
              v-for="(link, index) in links"
              :key="index"
            >
              <span
                class="cursor-pointer hover:text-primaryDark hover:underline"
                @click="scrollTo(link.id)"
                role="link"
                >{{ link.name }}</span
              >
            </li>
            <li>
              <CustomButton
                class="hidden md:block"
                :text="t('registerNow')"
                color="primary"
                size="sm"
                role="link"
                @click="scrollTo(ID.registerForm)"
              />
            </li>
          </ul>
        </nav>
        <div class="grid grid-cols-2 lg:grid-cols-1 gap-2">
          <LocaleController />
          <button
            class="flex justify-center items-center lg:hidden"
            role="menubar"
            @click="toggleDropDownNav"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>
    </section>
    <DropDownNav :isNavOpen="isNavOpen" :links="links" @toggleDropDownNav="toggleDropDownNav" />
  </header>
</template>

<script setup lang="ts">
import DropDownNav from '@/components/DropDownNav.vue';
import HamburgerIcon from '@/components/Icons/Hanmburger.vue';
import CustomButton from '@/components/UI/Button.vue';
import { ID } from '@/constants/ids';
import { scrollTo } from '@/helpers';
import { useI18n } from '@/plugins/i18n';
import { computed, ref } from 'vue';
import LocaleController from './LocaleController.vue';

const { t } = useI18n();

const isNavOpen = ref(false);

const links = computed(() => [
  { name: t('home'), id: ID.introSection },
  { name: t('features'), id: ID.featuresSection },
  { name: t('price'), id: ID.priceSection },
]);

const toggleDropDownNav = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>
