<template>
	<div class="navigation-menu">
		<router-link class="navigation-menu__link" to="/">FPS Check</router-link>
		<router-link class="navigation-menu__link" to="/scroll-1">Scroll example 1</router-link>
		<router-link class="navigation-menu__link" to="/hexagon-example">Hexagon example</router-link>
	</div>
</template>

<style lang="scss" scoped>
.navigation-menu {
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	
	&__link {
		&:not(:last-child) {
			margin-right: 8px;
			border-right: 1px solid var(--color-grey-1);
			padding-right: 8px;
		}
	}
}
</style>
