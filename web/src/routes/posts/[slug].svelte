<script lang="ts" context="module">
	import View from '$lib/components/View.svelte';
	import VStack from '$lib/components/StackVertical.svelte';
	import HStack from '$lib/components/StackHorizontal.svelte';
	import type { posts, config as cfg } from '$lib/sanity/api';
	import type { LoadInput } from '@sveltejs/kit';

	export const load = async ({ stuff, fetch, page: { params } }: LoadInput) => {
		const res = await fetch(`/api/posts/${params.slug}.json`);
		const post = await res.json();
		return { props: { post, config: stuff.config } };
	};
</script>

<script lang="ts">
	// export let post: posts.PostQueryResult;
	// export let config: cfg.GetConfigQueryResult;
</script>

<View><VStack><HStack>Post</HStack></VStack></View>
