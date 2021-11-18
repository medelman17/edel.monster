<script context="module" lang="ts">
	import HeadingOne from './HeadingOne.svelte';
	import HeadingTwo from './HeadingTwo.svelte';
	import HeadingThree from './HeadingThree.svelte';
	import HeadingFour from './HeadingFour.svelte';
	import HeadingFive from './HeadingFive.svelte';
	import HeadingSix from './HeadingSix.svelte';

	export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	export type HeadingComponent = HeadingOne | HeadingTwo | HeadingThree | HeadingFour | HeadingFive;
	const options = {
		h1: HeadingOne,
		h2: HeadingTwo,
		h3: HeadingThree,
		h4: HeadingFour,
		h5: HeadingFive,
		h6: HeadingSix
	};
	export type HeadingOption = typeof options;
</script>

<script lang="ts">
	export let as: HeadingType = 'h1';

	let selected = options[as];
</script>

<svelte:component this={selected} />
