<template>
	<div class="hexagon-interval">
		<button id="addHexagon" @click="handleHexagonAdd">Add Hexagon</button>
		
		<div class="main">
			<div ref="container" class="container"></div>
		</div>
	</div>
</template>

<script setup>
import {ref} from "vue";

const container = ref()

const handleHexagonAdd = () => {
	const hexagon = document.createElement("div");
	hexagon.classList.add("hexagon");
	container.value.appendChild(hexagon);
	
	let rotation = 0;

	const animate = () => {
	  rotation += 1;
	  hexagon.style.transform = `rotate(${rotation}deg)`;
	  requestAnimationFrame(animate);
	}

	animate()
}
</script>

<style lang="scss" scoped src="./styles.scss" />