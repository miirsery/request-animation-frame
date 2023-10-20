<template>
	<div ref="scrollRef" class="smooth-scroll">
		<div ref="containerRef">
			<slot />
		</div>
	</div>
</template>

<script setup>
import {nextTick, onMounted, onUpdated, ref, watch} from "vue";
import { useWindowSize } from "../../../hooks/index.js";

const props = defineProps({
	offset: {
		type: Number,
		default: 0,
		required: false,
	}
})

const { screen } = useWindowSize()

const scrollRef = ref()
const containerRef = ref()

const SCROLL_SETTINGS = {
	ease: 0.1,
	current: 0,
	previous: 0,
	rounded: 0,
}

watch(() => screen, () => {
	console.log(screen)
	setBodyHeight()
}, { deep: true })

onMounted(() =>{
	nextTick(() => {
		setBodyHeight()
		
		requestAnimationFrame(() => smoothScrollingHandler());
	})
})

onUpdated(() => {
	nextTick(() => {
		setBodyHeight()
		
		requestAnimationFrame(() => smoothScrollingHandler());
	})
})

const setBodyHeight = () => {
	if (containerRef.value) {
		nextTick(() => {
			document.body.style.height = `${
				containerRef.value.getBoundingClientRect().height + props.offset
			}px`;
		})
	}
}

const smoothScrollingHandler = () => {
	if (!containerRef.value) return
	
	if (scrollRef.value) {
		if (window.scrollY <= 10) {
			scrollRef.value.style.position = 'static'
		} else {
			scrollRef.value.style.position = 'fixed'
		}
	}
	
	SCROLL_SETTINGS.current = window.scrollY;
	SCROLL_SETTINGS.previous += (SCROLL_SETTINGS.current - SCROLL_SETTINGS.previous) * SCROLL_SETTINGS.ease;
	SCROLL_SETTINGS.rounded = Math.round(SCROLL_SETTINGS.previous * 100) / 100;
	
	containerRef.value.style.transform = `translateY(-${SCROLL_SETTINGS.previous}px)`;
	
	// Recursive call
	requestAnimationFrame(() => smoothScrollingHandler());
};
</script>

<style lang="scss" scoped src="./style.scss" />
