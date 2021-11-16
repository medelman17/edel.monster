<script lang="ts">
	import type { MarkProps } from '@portabletext/svelte';
	type BreakProps = {};
	export let mark: BreakProps = {};
	export let portableText: MarkProps<BreakProps>;

	$: mark = portableText.mark;
</script>

<br /><slot />
