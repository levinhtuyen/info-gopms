<template>
  <aside
    class="absolute top-0 h-full items-center hidden lg:flex"
    :class="props.direction === 'L' ? 'left-0' : 'right-0'"
  >
    <button class="w-14 h-full grid place-items-center focus:outline-none rounded-lg">
      <ChevronLeftIcon v-if="props.direction === 'L'" />
      <ChevronRightIcon v-else />
    </button>
  </aside>
</template>

<script setup lang="ts">
import ChevronLeftIcon from '@/components/Icons/ChevronLeft.vue';
import ChevronRightIcon from '@/components/Icons/ChevronRight.vue';
import { useAttrs } from 'vue';

interface IProps {
  direction: 'L' | 'R';
}

const props = defineProps<IProps>();
</script>
