<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps;
	$: block = portableText.block;
	$: style = block.style;
</script>

<span><slot /></span>

<style>
	span {
		margin: auto;
		text-align: center;
	}
</style>
