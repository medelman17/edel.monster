<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').ErrorLoad}*/
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script lang="ts">
	import type { ErrorLoadInput } from '@sveltejs/kit';

	export let status: ErrorLoadInput['status'];
	export let error: ErrorLoadInput['error'];

	const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;

	// your script goes here
</script>

<svelte:head><title>{status}</title></svelte:head>

<div class="container">
	{#if isOnline}
		<h1>Yikes!</h1>
		{#if error.message}
			<p class="error">{status}: {error.message}</p>
		{:else}
			<p class="error">Encountered a {status} error</p>
		{/if}

		{#if import.meta.env.DEV && error.stack}
			<pre>{error.stack}</pre>
		{:else if status >= 500}
			<p>Please try reloading the page</p>
		{/if}
	{:else}
		<h1>It looks like you're offline</h1>
	{/if}
</div>

<style>
	.error {
		color: white;
	}
</style>
