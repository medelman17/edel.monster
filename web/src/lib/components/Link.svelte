<script lang="ts">
	// your script goes here

	export let href: string;
</script>

<a {href} sveltekit:prefetch><slot /></a>

<style>
	a {
		color: var(--color-text-link);
		font-weight: 700;
		text-decoration: none;
		transition: color 0.2s linear;
		cursor: pointer;
	}

	a:hover {
		color: var(--color-text-link-hover);
	}
</style>
