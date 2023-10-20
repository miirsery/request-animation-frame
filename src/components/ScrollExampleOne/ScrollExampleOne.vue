<template>
	<div ref="container" id="container">
		<section class="wrap">
				<div class="item" id="item-1">
					<img src="https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c0a9ff8c2ee6e9426391016abac8f0&auto=format&fit=crop&w=700&q=80" alt="">
					<div class="content">
						<h1>1 Skate ipsum dolor sit ametle</h1>
						<p>Opposite footed speed wobbles layback Bones Brigade risers transition half-cab late. Indy grab Animal Chin airwalk crail grab flypaper goofy footed alley oop layback.</p>
					</div>
				</div>
				<div class="item flip" id="item-2">
					<img src="https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c0a9ff8c2ee6e9426391016abac8f0&auto=format&fit=crop&w=700&q=80" alt="">
					<div class="content">
						<h1>2 Skate ipsum dolor sit ametle</h1>
						<p>Opposite footed speed wobbles layback Bones Brigade risers transition half-cab late. Indy grab Animal Chin airwalk crail grab flypaper goofy footed alley oop layback.</p>
					</div>
				</div>
				<div class="item" id="item-3">
					<img src="https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c0a9ff8c2ee6e9426391016abac8f0&auto=format&fit=crop&w=700&q=80" alt="">
					<div class="content">
						<h1>3 Skate ipsum dolor sit ametle</h1>
						<p>Opposite footed speed wobbles layback Bones Brigade risers transition half-cab late. Indy grab Animal Chin airwalk crail grab flypaper goofy footed alley oop layback.</p>
					</div>
				</div>
				<div class="item flip scroll" id="item-4">
					<img src="https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c0a9ff8c2ee6e9426391016abac8f0&auto=format&fit=crop&w=700&q=80" alt="">
					<div class="content">
						<h1>4 Scroll ipsum dolor sit ametle</h1>
						<p>Opposite footed speed wobbles layback Bones Brigade risers transition half-cab late. Indy grab Animal Chin airwalk crail grab flypaper goofy footed alley oop layback.</p>
					</div>
				</div>
				<div class="item" id="item-5">
					<img src="https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c0a9ff8c2ee6e9426391016abac8f0&auto=format&fit=crop&w=700&q=80" alt="">
					<div class="content">
						<h1>5 Skate ipsum dolor sit ametle</h1>
						<p>Opposite footed speed wobbles layback Bones Brigade risers transition half-cab late. Indy grab Animal Chin airwalk crail grab flypaper goofy footed alley oop layback.</p>
					</div>
				</div>
				<div class="item flip" id="item-6">
					<img src="https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c0a9ff8c2ee6e9426391016abac8f0&auto=format&fit=crop&w=700&q=80" alt="">
					<div class="content">
						<h1>6 Skate ipsum dolor sit ametle</h1>
						<p>Opposite footed speed wobbles layback Bones Brigade risers transition half-cab late. Indy grab Animal Chin airwalk crail grab flypaper goofy footed alley oop layback.</p>
					</div>
				</div>
				<div class="item" id="item-7">
					<img src="https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c0a9ff8c2ee6e9426391016abac8f0&auto=format&fit=crop&w=700&q=80" alt="">
					<div class="content">
						<h1>7 Skate ipsum dolor sit ametle</h1>
						<p>Opposite footed speed wobbles layback Bones Brigade risers transition half-cab late. Indy grab Animal Chin airwalk crail grab flypaper goofy footed alley oop layback.</p>
					</div>
				</div>
		</section>
	</div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";

const numSteps = 20.0;
let prevRatio = 0.0;

const elements = reactive({})
const container = ref()
const items = ref()

onMounted(() => {
	items.value = document.querySelectorAll('.item');
	
	createObserver();
})

const throttle = (action) => {
	let isRunning = false;
	
	return function() {
		if (isRunning) return;
		
		isRunning = true;
		
		requestAnimationFrame(() => {
			action();
			
			isRunning = false;
		});
	}
}


const createObserver = () => {
	const options = {
		root: null,
		rootMargin: '-400px',
		threshold: [0]
	};
	
	const observer = new IntersectionObserver(handleIntersect, options);
	
	items.value.forEach(element => {
		observer.observe(element);
	});
}

const buildThresholdList = () => {
	const thresholds = [];
	
	for (let i = 1.0; i <= numSteps; i++) {
		const ratio = i/numSteps;
		
		thresholds.push(ratio);
	}
	
	thresholds.push(0);
	
	return thresholds;
}

const status = (elem, status) => {
	if (status === 'enter') {
		elements[elem.id] = elem;
	} else if (status === 'leave') {
		delete elements[elem.id];
	}
}

const tick = (scroll) => {
	Object.entries(elements).forEach((element) => {
		let amount = Math.abs(scroll - element[1].offsetTop + container.value.offsetHeight);
		
		element[1].style.transform = `perspective(1000px) rotateY(0) rotateX(${((amount * 0.15) * Math.PI)/180}deg) scale3d(1, 1, 1)`;
	});
}

const handleIntersect = (entries) =>{
	entries.forEach((entry) => {
		if (entry.intersectionRatio > prevRatio) {
			status(entry.target, 'enter')
		} else {
			status(entry.target, 'leave')
		}
		
		prevRatio = entry.intersectionRatio;
	});
}


window.addEventListener('scroll', throttle(() => {
	const scrollTop = window.scrollY;
	
	tick(scrollTop)
}));
</script>

<style lang="scss" scoped src="./styles.scss" />
