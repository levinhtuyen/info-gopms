<template>
  <!-- button incomplete. -->
  <!-- 1. Hover and focus effect should be defined. -->
  <!-- 2. Size 'lg' should be defined -->
  <button
    :class="[colorClass, sizeClass]"
    class="relative rounded-md font-semibold focus:outline-none focus:ring-4"
    style="min-width: 6rem"
    :disabled="isDisabled || isLoading"
  >
    <div v-if="isLoading" class="absolute inset-0 grid place-items-center">
      <svg
        class="h-5 w-5 text-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <span :class="{ 'opacity-0': isLoading }">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface IProps {
  size: 'sm' | 'md';
  color?: 'primary' | 'secondary' | 'white';
  isDisabled?: boolean;
  isLoading?: boolean;
  text: string;
}

const props = withDefaults(defineProps<IProps>(), {
  color: 'primary',
  isDisabled: false,
  isLoading: false,
});

const colorClass = computed(() => {
  switch (props.color) {
    case 'primary':
      return `bg-primary text-white ${
        props.isDisabled || props.isLoading
          ? 'opacity-70'
          : 'hover:bg-primaryLight focus:ring-primaryGhost active:bg-primaryDark'
      }`;
    case 'secondary':
      return 'bg-secondary text-white hover:opacity-90';
    case 'white':
      return 'bg-white text-primary focus:ring-primaryGhost active:bg-gray-50';
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-2 text-sm';
    case 'md':
      return 'px-4 py-3 text-xl';
  }
});
</script>
