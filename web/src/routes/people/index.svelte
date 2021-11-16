<script lang="ts" context="module">
	import View from '$lib/components/View.svelte';
	import VStack from '$lib/components/StackVertical.svelte';
	import HStack from '$lib/components/StackHorizontal.svelte';
	import type { people, config as cfg, cats } from '$lib/sanity/api';
	import type { LoadInput } from '@sveltejs/kit';

	export const load = async ({ stuff, fetch, page: { params } }: LoadInput) => {
		const res = await fetch(`/api/people`);
		const people = await res.json();
		return { props: { people, config: stuff.config } };
	};
</script>

<script lang="ts">
	export let people: any;
	// export let config: cfg.GetConfigQueryResult;
</script>

<View>
	<VStack>
		<HStack>
			{JSON.stringify(people, null, 2)}
		</HStack>
	</VStack>
</View>
