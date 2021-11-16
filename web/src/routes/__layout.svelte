<script lang="ts" context="module">
	import type { config as cfg } from '$lib/sanity/api';
	import type { LoadInput } from '@sveltejs/kit';

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
