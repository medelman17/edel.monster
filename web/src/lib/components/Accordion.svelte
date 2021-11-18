<script lang="ts">
	import slide from '$lib/actions/slide';
	export let buttonText = '';
	export let isOpen = false;
</script>

<button on:click={() => (isOpen = !isOpen)}>
	<span class:isOpen>▲</span>
	{buttonText}</button
>
<div
	use:slide={{ isOpen }}
	on:animationend={() => console.log('animation ended')}
	class="content"
>
	<slot />
</div>

<style>
	button {
		display: block;
		border: 0;
		width: 100%;
		text-align: left;
		border: solid 1px #333;
		margin: 0;
	}

	span {
		margin-right: 5px;
		display: inline-block;
		transform: rotate(0.25turn);
		transition: transform o.3s ease;
	}

	.isOpen {
		transform: rotate(0.5turn);
	}

	.content {
		border: solid 1px #333;
		border-top: 0;
	}
</style>
