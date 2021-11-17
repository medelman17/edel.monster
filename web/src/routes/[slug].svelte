<script lang="ts" context="module">
	import type { page, config } from '$lib/sanity/api';
	import type { LoadInput } from '@sveltejs/kit';

	export const hydrate = false;
	export const prerender = true;

	export const load = async ({
		stuff,
		fetch,
		page: { params }
	}: LoadInput<{ slug: string }, { config: config.GetConfigQueryResult }>) => {
		const res = await fetch(`/api/pages/${params.slug}.json`);
		const [page] = await res.json();
		return { props: { page, config: stuff.config } };
	};
</script>

<script lang="ts">
	import VStack from '$lib/components/StackVertical.svelte';
	import HStack from '$lib/components/StackHorizontal.svelte';
	import HeadingOne from '$lib/components/HeadingOne.svelte';
	export let page: page.GetPageQueryResult;
	// export let config: config.GetConfigQueryResult;
</script>

<VStack>
	<HStack>
		<HeadingOne>
			{page.title}
		</HeadingOne>
	</HStack>
</VStack>
