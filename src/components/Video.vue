<template>
  <section class="py-20">
    <div class="container mx-auto">
      <video
        class="w-full"
        :poster="poster"
        preload="metadata"
        controls
        :src="src"
        type="video/mp4"
        volume="0.4"
      ></video>
    </div>
  </section>
</template>

<script setup lang="ts">
// @ts-ignore
import src from '@/assets/videos/intro-video.mp4';
// @ts-ignore
import poster from '@/assets/images/screenshot-video.png';
</script>
