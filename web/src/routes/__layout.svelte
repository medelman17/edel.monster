<script lang="ts" context="module">
	import type { config as cfg } from '$lib/sanity/api';
	import type { LoadInput } from '@sveltejs/kit';
	import * as Sentry from '@sentry/browser';
	import { Integrations } from '@sentry/tracing';

	Sentry.init({
		dsn: 'https://d4e4a673a04a4e14bf9c45ec604899a6@o315883.ingest.sentry.io/6067375',
		integrations: [new Integrations.BrowserTracing()],
		tracesSampleRate: 1.0
	});

	export const load = async ({ fetch }: LoadInput) => {
		const res = await fetch(`/api/config.json`);
		const config = await res.json();
		return { props: { config }, stuff: { config } };
	};
</script>

<script lang="ts">
	import '../app.css';
	import { page, navigating, session } from '$app/stores';
	import View from '$lib/components/View.svelte';
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import NavItem from '$lib/components/NavItem.svelte';

	export let config: cfg.GetConfigQueryResult;
	export let segment: any;
</script>

{#if $navigating && $navigating.to}
	<div>Preloading Indicator...</div>
{/if}

<View>
	<Header nav={[...config.navigation.items]} />
	<slot />
</View>

<!-- <Nav {segment} {page} logo="">
	<NavItem segment="blog">Blog</NavItem>
	<NavItem segment="about">About</NavItem>
	<NavItem segment="contact">Contact</NavItem>
</Nav> -->

<!-- <main><slot /></main> -->
<style>
	main {
		position: relative;
	}
</style>
