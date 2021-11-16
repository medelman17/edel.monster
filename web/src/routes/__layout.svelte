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

	export const load = async ({ stuff, fetch, page: { params } }: LoadInput) => {
		const res = await fetch(`/api/config.json`);
		const config = await res.json();
		return { props: { config }, stuff: { config } };
	};
</script>

<script lang="ts">
	import '../app.css';
	import View from '$lib/components/View.svelte';
	import Header from '$lib/components/Header.svelte';

	export let config: cfg.GetConfigQueryResult;
</script>

<View>
	<Header nav={[...config.navigation.items]} />
	<slot />
</View>
