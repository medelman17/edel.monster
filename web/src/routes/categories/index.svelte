<script lang="ts" context="module">
	import type { posts, config as cfg, cats } from '$lib/sanity/api';
	import type { LoadInput } from '@sveltejs/kit';

	export const hydrate = false;
	export const prerender = true;

	export const load = async ({ stuff, fetch, page: { params } }: LoadInput) => {
		const res = await fetch(`/api/cats.json`);
		const cats = await res.json();
		return { props: { cats, config: stuff.config } };
	};
</script>

<script lang="ts">
	import View from '$lib/components/View.svelte';
	import VStack from '$lib/components/StackVertical.svelte';
	import HStack from '$lib/components/StackHorizontal.svelte';
	export let cats: cats.ListCategoryQueryInput;
	// export let config: cfg.GetConfigQueryResult;
</script>

<View>
	<VStack>
		<HStack>
			{JSON.stringify(cats, null, 2)}
		</HStack>
	</VStack>
</View>
