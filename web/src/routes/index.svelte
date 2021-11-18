<script lang="ts" context="module">
	import { browser, dev } from '$app/env';
	import type * as api from '$lib/sanity/api';
	import type { LoadInput } from '@sveltejs/kit';

	export const hydrate = dev;
	// export const router = browser;
	export const prerender = true;

	export const load = async ({
		stuff,
		fetch,
		page: { params }
	}: LoadInput<
		{ slug: string },
		{ config: api.config.GetConfigQueryResult }
	>) => {
		const res = await fetch(`/api/pages/home.json`);
		const [page] = await res.json();
		const postsResult = await fetch(`/api/posts.json`);
		const postData = await postsResult.json();
		return { props: { page, config: stuff.config, posts: postData.posts } };
	};
</script>

<script lang="ts">
	import VStack from '$lib/components/StackVertical.svelte';
	import HStack from '$lib/components/StackHorizontal.svelte';
	import HeadingOne from '$lib/components/HeadingOne.svelte';
	import HeadingTwo from '$lib/components/HeadingTwo.svelte';
	import HeadingThree from '$lib/components/HeadingThree.svelte';
	import Link from '$lib/components/Link.svelte';
	import Accordian from '$lib/components/Accordion.svelte';
	import Accordion from '$lib/components/Accordion.svelte';

	export let page: api.page.GetPageQueryResult;
	// export let config: api.config.GetConfigQueryResult;
	export let posts: api.posts.PostsQueryResult['posts'];

	// console.log('POSTS: ', posts);
</script>

<svelte:head>
	<title>Michael Edelman | Home</title>
	<meta property="description" content="Website and Blog of Michael Edelman" />
</svelte:head>

<h1 class="visually-hidden">Hi</h1>

<!-- <VStack>
	<Accordion isOpen={false} buttonText="Would you like to see some more text?">
		<div>
			<p>
				Knowledge is power great plan! let me diarize this, and we can
				synchronise ourselves at a later timepoint so shelfware core
				competencies, but a loss a day will keep you focus and timeframe not the
				long pole in my tent. Fire up your browser upsell deliverables let's
				schedule a standup during the sprint to review our kpis or draw a line
				in the sand are there any leftovers in the kitchen? for per my previous
				email.
			</p>
		</div>
	</Accordion>
</VStack> -->

<VStack>
	<HeadingOne>Synergize productive mindfulness.</HeadingOne>
	<p>
		Horsehead offer value prop value-added, nor currying favour product
		management breakout fastworks so synergize productive mindfulness.
		Root-and-branch review 60% to 30% is a lot of persent <Link
			href="https://www.sanity.io/">get all your ducks in a row</Link
		> that's mint, well done, for please advise soonest. We need distributors to
		evangelize the new line to local markets cadence poop.
		<Link href="https://www.sanity.io/">Optimize the fireball</Link>
		customer centric spinning our wheels but marginalised key performance indicators
		nor out of the loop.
	</p>
	<HeadingTwo>Three-martini lunch.</HeadingTwo>
	<p>
		Knowledge is power great plan! let me diarize this, and we can synchronise
		ourselves at a later timepoint so shelfware core competencies, but a loss a
		day will keep you focus and timeframe not the long pole in my tent. Fire up
		your browser upsell deliverables let's schedule a standup during the sprint
		to review our kpis or draw a line in the sand are there any leftovers in the
		kitchen? for per my previous email.
	</p>
	<HeadingTwo
		>Driving the initiative forward can you send me an invite?</HeadingTwo
	>
	<p>
		Collaboration through advanced technlogy timeframe, for we need to leverage
		our synergies, so back of the net i don't want to drain the whole swamp, i
		just want to shoot some alligators player-coach.
	</p>
	<p>
		My capacity is full win-win-win land the plane can we align on lunch orders
		price point high performance keywords it just needs more cowbell. Price
		point drink the Kool-aid, or can we align on lunch orders, so encourage &
		support business growth no need to talk to users, just base it on the space
		calculator for call in the air support. We need a paradigm shift.
	</p>
	<VStack>
		<ul>
			{#each posts as post}
				<li>
					<HStack>
						<HeadingThree
							><Link href="/posts/{post.slug.current}">{post.title}</Link
							></HeadingThree
						>
					</HStack>
				</li>
			{/each}
		</ul>
	</VStack>
</VStack>
