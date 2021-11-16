<script lang="ts">
	import { page } from '$app/stores';
	export let path: string = '/';
	export let label: string;
</script>

<li class:active={$page.path === path}>
	<a sveltekit:prefetch href={path}>{label}</a>
</li>

<style lang="postcss">
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
</style>
