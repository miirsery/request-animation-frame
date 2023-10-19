<template>
	<div class="container">
		<navigation-menu />

		<router-view />
	</div>
</template>
<script setup>
import NavigationMenu from "./components/NavigationMenu.vue";
</script>