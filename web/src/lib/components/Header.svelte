<script lang="ts" context="module">
	// import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import NavItem from '$lib/components/NavItem.svelte';
	export type HeaderNavProps = { label: string; url: { slug: string; _id: string } }[];
</script>

<script lang="ts">
	export let nav: HeaderNavProps = [];
</script>

<header>
	<div class="corner">
		<a href="/"><span class="h3">Michael Edelman</span></a>
	</div>
	<nav>
		<NavBar>
			{#each nav as { label, url }}
				<NavItem {label} path={url.slug} />
			{/each}
		</NavBar>
	</nav>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
	}
	nav {
		display: flex;
		justify-content: flex-end;
		flex: 1;
	}
	.corner {
		height: 3rem;
		flex: 1;
	}
	.corner a {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
	}

	.corner a span {
		color: var(--color-red);
		font-weight: 700;
		margin-top: 0;
		padding-bottom: 0;
	}
</style>
