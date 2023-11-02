<template>
  <div class="fps-check">
    <button @click="increaseCounter">Click #{{ counter }}</button>
      {{ time.toFixed(3) }}s
    <br />

	  <div class="fps-check__text">
		  {{ fps !== null ? Math.floor(fps) + ' FPS' : 'Calculating FPS...' }}
	  </div>

    <h3>Используется для отображения FPS, которое выдает монитор</h3>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const time = ref(0)
const fps = ref(null)
const counter = ref(1)

let init = performance.now()
let last = ref(init)
let animationFrame = ref()
let initialized = ref(false)

const increaseCounter = () => {
  counter.value++
}

const animate = () => {
  const now = performance.now()
  const deltaTime = (now - last.value) / 1000

  if (!initialized.value) {
    // Если это первая итерация, инициализируем fps
    fps.value = 1 / deltaTime
    initialized.value = true
  } else {
    fps.value = 1 / deltaTime
    if (counter.value % 2 === 0) {
      time.value += deltaTime
    }
  }

  last.value = now
  animationFrame.value = requestAnimationFrame(animate)
}

onMounted(() => {
  animationFrame.value = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame.value)
})
</script>

<style lang="scss" scoped src="./styles.scss" />
