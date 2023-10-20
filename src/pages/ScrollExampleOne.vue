<template>
	<smooth-scroll :offset="200">
		<div class="scroll-example-one-page">
			<h1>Scroll 1</h1>
			
			<scroll-example-one />
		</div>
	</smooth-scroll>
</template>
<script setup>
import ScrollExampleOne from "../components/ScrollExampleOne/ScrollExampleOne.vue";
import SmoothScroll from "../components/shared/SmoothScroll/SmoothScroll.vue";
</script>