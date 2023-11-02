<template>
	<div class="hexagon-page">
		<h1>Hexagon Example</h1>
		<h2>Current State: {{ activeMethod }}</h2>

    <fps-check />

		<button @click="() => {
			if (activeMethod === 'interval') {
				activeMethod = 'raf'
			} else if (activeMethod === 'raf') {
				activeMethod = 'both'
			} else {
        activeMethod = 'interval'
			}
		}">Change method</button>

		<div class="hexagon-page__content">
			<hexagon-interval v-if="activeMethod === 'interval'" />

			<hexagon-req-anim-frame v-if="activeMethod === 'raf'" />

      <div v-if="activeMethod === 'both'" class="hexagon-page__content-both">
        <div class="hexagon-page__content-both-item">
          <h2>interval</h2>
          <hexagon-interval />
        </div>

        <div class="hexagon-page__content-both-item">
          <h2>rAF</h2>
          <hexagon-req-anim-frame />
        </div>
      </div>
		</div>
	</div>
</template>

<script setup>
import {computed, ref} from "vue";
import HexagonInterval from "../components/Hexagons/HexagonInterval.vue";
import HexagonReqAnimFrame from "../components/Hexagons/HexagonReqAnimFrame.vue";
import FpsCheck from "../components/FpsCheck/FpsCheck.vue";

const activeMethod = ref('interval')
</script>

<style lang="scss" scoped>
.hexagon-page {
	padding: 0 20px;

  &__content {
    &-both {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-item {
        width: 50%;
      }
    }
  }
}
</style>
