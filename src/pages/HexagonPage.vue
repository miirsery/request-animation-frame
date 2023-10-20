<template>
	<div class="hexagon-page">
		<h1>Hexagon Example</h1>
		<h2>Current State: {{ activeMethod }}</h2>
		
		<button @click="() => {
			if (activeMethod === 'interval') {
				activeMethod = 'raf'
			} else {
				activeMethod = 'interval'
			}
		}">Change method</button>
		
		<div class="hexagon-page__content">
			<hexagon-interval v-if="activeMethod === 'interval'" />
			
			<hexagon-interval v-if="activeMethod === 'raf'" />
		</div>
	</div>
</template>

<script setup>
import {computed, ref} from "vue";
import HexagonInterval from "../components/Hexagons/HexagonInterval.vue";

const activeMethod = ref('interval')
</script>

<style lang="scss" scoped>
.hexagon-page {
	padding: 0 20px;
}
</style>
