<script lang="ts" context="module">
	import View from '$lib/components/View.svelte';
	import VStack from '$lib/components/StackVertical.svelte';
	import HStack from '$lib/components/StackHorizontal.svelte';
	import type { cats, config as cfg } from '$lib/sanity/api';
	import type { LoadInput } from '@sveltejs/kit';

	export const load = async ({ stuff, fetch, page: { params } }: LoadInput) => {
		const res = await fetch(`/api/cats/${params.slug}.json`);
		const cat = await res.json();
		return { props: { cat, config: stuff.config } };
	};
</script>

<script lang="ts">
	export let cat: any;
	// export let config: cfg.GetConfigQueryResult;
</script>

<View>
	<VStack>
		<HStack>
			{JSON.stringify(cat, null, 2)}
		</HStack>
	</VStack>
</View>
