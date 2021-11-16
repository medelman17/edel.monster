<script lang="ts" context="module">
	import VStack from '$lib/components/StackVertical.svelte';
	import HStack from '$lib/components/StackHorizontal.svelte';
	import HeadingOne from '$lib/components/HeadingOne.svelte';
	import HeadingTwo from '$lib/components/HeadingTwo.svelte';
	import type * as api from '$lib/sanity/api';
	import type { LoadInput } from '@sveltejs/kit';

	export const prerender = true;

	export const load = async ({
		stuff,
		fetch,
		page: { params }
	}: LoadInput<{ slug: string }, { config: api.config.GetConfigQueryResult }>) => {
		const res = await fetch(`/api/pages/home.json`);
		const [page] = await res.json();
		const postsResult = await fetch(`/api/posts.json`);
		const postData = await postsResult.json();
		return { props: { page, config: stuff.config, posts: postData.posts } };
	};
</script>

<script lang="ts">
	import HeadingThree from '$lib/components/HeadingThree.svelte';

	export let page: api.page.GetPageQueryResult;
	// export let config: api.config.GetConfigQueryResult;
	export let posts: api.posts.PostsQueryResult['posts'];

	// console.log('POSTS: ', posts);
</script>

<VStack>
	<HStack>
		<HeadingOne>
			{page.title}
		</HeadingOne>
	</HStack>
	<VStack>
		<HeadingTwo>Recent Posts:</HeadingTwo>
		<ul>
			{#each posts as post}
				<li>
					<HStack>
						<HeadingThree>{post.title}</HeadingThree>
					</HStack>
				</li>
			{/each}
		</ul>
	</VStack>
</VStack>
