<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let items;
	export let activeItem;
</script>

<div class="mb-4 tabs">
	<ul class="flex justify-center p-0">
		{#each items as item}
			<li
				class="mx-5 text-base text-gray-700 cursor-pointer"
				on:click={() => dispatch('tabChange', item)}
			>
				<div class:active={item === activeItem}>{item}</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.active {
		color: #2a96fc;
		border-bottom: 2px solid #2a96fc;
		padding-bottom: 8px;
	}
</style>
