<template>
  <div>
    <button @click="increaseCounter">{{ counter }}</button>
    {{ time.toFixed(3) }}s
    <br />
    {{ fps !== null ? Math.floor(fps) + ' FPS' : 'Calculating FPS...' }}
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const time = ref(0);
const fps = ref(null);
const counter = ref(1);
let init = performance.now();
let last = init;
let animationFrame = null;
let initialized = false;

const increaseCounter = () => {
  counter.value++;
};

const animate = () => {
  const now = performance.now();
  const deltaTime = (now - last) / 1000;
  
  if (!initialized) {
    // Если это первая итерация, инициализируем fps
    fps.value = 1 / deltaTime;
    initialized = true;
  } else {
    fps.value = 1 / deltaTime;
    if (counter.value % 2 === 0) {
      time.value += deltaTime;
    }
  }
  
  last = now;
  animationFrame = requestAnimationFrame(animate);
};

onMounted(() => {
  animationFrame = requestAnimationFrame(animate);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame);
});
</script>

<style scoped>
/* Ваши стили здесь */
</style>