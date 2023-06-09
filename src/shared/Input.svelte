<script>
	export let type = 'text';
	export let placeholder = '';
	export let value = '';
	export let icon = 'fa-solid fa-user';
	export let mt = '5';
	export let isPassword = false;
	export let width = false;
</script>

<div class="relative mt-{mt} w-{width} {width ? 'w-5-7' : ''} ">
	<i class="absolute left-2 top-2 {icon}" style="color:#2a96fc" />
	<input
		{type}
		{value}
		{placeholder}
		class="w-full p-1 text-gray-700 bg-white border border-gray-300 rounded-sm pl-7 focus:outline-none font-display focus:ring-custom-blue"
	/>
	{#if isPassword}
		<i class="absolute text-gray-500 translate-y-2 fa-regular fa-eye-slash right-1" />
	{/if}
	<slot />
</div>

<style>
	.w-5-7 {
		width: calc(100% * 5 / 7);
	}
</style>
