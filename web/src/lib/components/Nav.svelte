<script lang="ts">
	import type { NavProps, NavSegment } from '$types';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	// import Icon from '$lib/components/Icon.svelte';

	export let segment: NavProps['segment'];
	export let page: NavProps['page'];
	export let logo: NavProps['logo'];

	const current = writable<null | NavSegment>(null);
	setContext('app', current);

	let isOpen = false;
	let isVisible = true;
	let hashDidChange = false;
	let lastScrollPosition = 0;

	page.subscribe(() => {
		isOpen = false;
	});

	function interceptTouchStart(e: TouchEvent) {
		if (!isOpen) {
			e.preventDefault();
			e.stopPropagation();
			isOpen = true;
		}
	}

	function handleHashChange() {
		hashDidChange = true;
	}

	function handleScroll() {
		const scroll = window.pageYOffset;
		if (!hashDidChange) {
			isVisible = scroll < 50 || scroll < lastScrollPosition;
		}
		lastScrollPosition = scroll;
		hashDidChange = false;
	}

	$: $current = segment;
</script>

<svelte:window on:hashchange={handleHashChange} on:scroll={handleScroll} />

<header class:visible={isVisible || isOpen}>
	<nav>
		<a sveltekit:prefetch href="." title="Homepage">Home</a>

		{#if isOpen}
			<div class="hide-if-desktop" on:click={() => (isOpen = false)} />
		{/if}

		<ul
			class="primary"
			class:open={isOpen}
			on:touchstart|capture={interceptTouchStart}
			on:mouseenter={() => (isOpen = true)}
			on:mouseleave={() => (isOpen = false)}
		>
			<li class="hide-if-desktop" class:active={!segment}>
				<a sveltekit:prefetch href=".">Home</a>
				<slot />
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100vw;
		height: var(--nav-h, 4rem);
		padding: 0 var(--side-nav, 4rem);
		margin: 0 auto;
		background-color: var(--color-bg-primary);
		z-index: 100;
		user-select: none;
		transform: translate(0, calc(-100% - 1rem));
		transition: transform 0.2s;
	}

	header.visible {
		transform: none;
	}

	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: var(--nav-h, 4rem);
		padding: 0 var(--side-nav, 4rem) 0 var(--side-nav, 4rem);
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: transparent;
		transform: none;
		transition: none;
		box-shadow: none;
	}

	.primary {
		list-style: none;
		margin: 0;
		line-height: 1;
	}

	ul :global(li) {
		display: block;
		display: none;
	}
	ul :global(li).active {
		display: block;
	}

	ul {
		position: relative;
		padding: 0 3rem 0 0;
	}

	ul.open {
		padding: 0 0 1em 0;
		background: white;
		border-left: 1px solid #eee;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		border-radius: 0 0 var(--border-r) var(--border-r);
		align-self: start;
	}
	ul.open :global(li) {
		display: block;
		text-align: right;
	}
	ul.open::after {
		display: none;
	}
	ul :global(li) :global(a) {
		font-size: var(--h5);
		padding: 0 0.8rem;
		border: none;
		color: inherit;
	}
	ul.open :global(li) :global(a) {
		padding: 1.5rem 3.7rem 1.5rem 4rem;
		display: block;
	}
	ul.open :global(li):first-child :global(a) {
		padding-top: 2.3rem;
	}

	ul::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	ul.open {
		padding: 0 0 1em 0;
		background: white;
		border-left: 1px solid #eee;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		border-radius: 0 0 var(--border-r) var(--border-r);
		align-self: start;
	}
	ul.open :global(li) {
		display: block;
		text-align: right;
	}
	ul.open::after {
		display: none;
	}
	ul :global(li) :global(a) {
		font-size: var(--h5);
		padding: 0 0.8rem;
		border: none;
		color: inherit;
	}
	ul.open :global(li) :global(a) {
		padding: 1.5rem 3.7rem 1.5rem 4rem;
		display: block;
	}
	ul.open :global(li):first-child :global(a) {
		padding-top: 2.3rem;
	}

	.primary :global(svg) {
		width: 2rem;
		height: 2rem;
	}

	@media (min-width: 840px) {
		ul {
			padding: 0;
			background: none;
		}

		ul.open {
			padding: 0;
			background: var(--color-bg-primary);
			border: none;
			align-self: initial;
		}

		ul.open :global(li) {
			display: inline;
			text-align: left;
		}
		ul.open :global(li) :global(a) {
			font-size: var(--h5);
			padding: 0 0.8rem;
			display: inline;
		}
		ul::after {
			display: none;
		}
		ul :global(li) {
			display: inline !important;
		}
		.hide-if-desktop {
			display: none !important;
		}
	}
</style>
