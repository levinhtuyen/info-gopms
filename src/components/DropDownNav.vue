<template>
  <section
    class="bg-white transition-all duration-500 overflow-hidden lg:hidden"
    :class="isNavOpen ? 'h-48 border-t border-b' : 'h-0'"
  >
    <nav class="w-full">
      <ul class="items-center text-primary">
        <li class="h-11 grid place-items-center" v-for="(link, index) in props.links" :key="index">
          <span
            class="font-semibold cursor-pointer hover:underline hover:text-primaryDark"
            @click="
              scrollTo(link.id);
              closeDropDownNav();
            "
            role="link"
            >{{ link.name }}</span
          >
        </li>
        <li class="h-14 grid place-items-center">
          <CustomButton
            :text="t('registerNow')"
            color="primary"
            size="sm"
            role="link"
            @click="
              scrollTo(ID.registerForm);
              closeDropDownNav();
            "
          />
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup lang="ts">
import CustomButton from '@/components/UI/Button.vue';
import { ID } from '@/constants/ids';
import { scrollTo } from '@/helpers';
import { useI18n } from '@/plugins/i18n';

interface IProps {
  isNavOpen: boolean;
  links: { name: string; id: ID }[];
}

interface IEmits {
  (event: 'toggleDropDownNav'): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<IEmits>();

const { t } = useI18n();

const closeDropDownNav = () => {
  emits('toggleDropDownNav');
};
</script>
