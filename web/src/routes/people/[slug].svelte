<script lang="ts" context="module">
	// import HeadingOne from '$lib/components/HeadingOne.svelte'
	// import type { people, config as cfg } from '$lib/sanity/api';
	import type { LoadInput } from '@sveltejs/kit';

	export const hydrate = false;
	export const prerender = true;

	export const load = async ({ stuff, fetch, page: { params } }: LoadInput) => {
		const res = await fetch(`/api/people/${params.slug}.json`);
		const person = await res.json();
		return { props: { person, config: stuff.config } };
	};
</script>

<script lang="ts">
	import View from '$lib/components/View.svelte';
	import VStack from '$lib/components/StackVertical.svelte';
	import HStack from '$lib/components/StackHorizontal.svelte';
	export let person: any;
	// export let config: cfg.GetConfigQueryResult;
</script>

<View>
	<VStack>
		<HStack>
			<h1>Person</h1>
			<pre>{JSON.stringify(person, null, 2)}</pre>
		</HStack>
	</VStack>
</View>
