<template>
  <transition name="fade">
    <div
      class="fixed top-0 left-0 z-50 w-full h-screen px-2 grid place-items-center"
      style="background-color: rgba(0, 0, 0, 0.5)"
      v-show="props.isModalOpen"
      @click="closeModal"
    >
      <section class="w-full max-w-md p-5 bg-white rounded-md" data-cy="register-success-modal">
        <header class="flex justify-center">
          <div>
            <SuccessIcon class="w-20" />
          </div>
        </header>
        <main class="p-4 text-center">
          <h3 class="mb-2 text-2xl text-primary font-bold">
            {{ t('registered') }}
          </h3>
          <p>{{ t('registeredModalHeading') }}</p>
          <p>{{ t('registeredModalParagraph') }}</p>
        </main>
        <footer class="flex justify-end">
          <CustomButton
            data-cy="register-success-modal-close-button"
            color="secondary"
            ref="closeBtn"
            :text="t('close')"
            size="sm"
          />
        </footer>
      </section>
    </div>
  </transition>
</template>

<script setup lang="ts">
import SuccessIcon from '@/components/Icons/Success.vue';
import CustomButton from '@/components/UI/Button.vue';
import { useI18n } from '@/plugins/i18n';
import { watch } from 'vue';

interface IProps {
  isModalOpen: boolean;
}

interface IEmits {
  (event: 'update:isModalOpen', payload: boolean): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<IEmits>();

const { t } = useI18n();

const closeModal = () => {
  emits('update:isModalOpen', false);
};

watch(
  () => props.isModalOpen,
  () => {
    const scrollOffClasses = ['h-screen', 'overflow-hidden'];
    if (props.isModalOpen) {
      document.body.classList.add(...scrollOffClasses);
      return;
    }
    document.body.classList.remove(...scrollOffClasses);
  },
);
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
