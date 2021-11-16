<script lang="ts">
	export let maxWidth = '70ch';
	export let minHeight = '100vh';
</script>

<div style="--max-width: {maxWidth}; --min-height: {minHeight};">
	<slot />
</div>

<style lang="postcss">
	div {
		display: flex;
		flex-direction: column;
		margin: auto;
		min-height: var(--min-height);
		max-width: var(--max-width);
	}
</style>
