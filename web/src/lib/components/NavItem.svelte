<script lang="ts">
	import { getContext } from 'svelte';
	import type { NavItemProps, NavSegment } from '$types';

	export let segment: NavItemProps['segment'] = null;
	export let external: NavItemProps['external'] = null;
	export let title: NavItemProps['title'] = null;

	const current = getContext<NavSegment>('nav');
</script>

{#if external}
	<li><a href={external}><slot /></a></li>
{:else}
	<li class:active={current === segment}>
		<a sveltekit:prefetch href={segment} {title}><slot /></a>
	</li>
{/if}

<!-- <li class:active={$page.path === path}>
	<a sveltekit:prefetch href={path}>{label}</a>
</li> -->
<!-- <style lang="postcss">
	li {
		position: relative;
		height: 100%;
		margin: 0 1rem;
	}

	li.active {
	}

	a {
		display: flex;
		height: 100%;
		align-items: center;
		text-transform: uppercase;
		color: var(--color-text-link);
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 0.1rem;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-text-link-hover);
	}
</style> -->
