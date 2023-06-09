<script>
	export let type = 'primary';
	export let dimension = false;
	export let inverse = false;
	export let width = false;
</script>

<button
	class="{type} border-2 py-1 w-full rounded-sm text-white transition-all duration-200 {width
		? 'w-2-7'
		: ''}"
	class:dimension
	class:inverse
>
	<slot />
</button>

<style>
	.primary {
		border-color: #2a96fc;
		background-color: #2a96fc;
	}

	.primary:hover {
		color: #2a96fc;
		background-color: transparent;
	}

	.dimension {
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
	}

	.primary.inverse {
		color: #2a96fc;
		background-color: #fff;
		border: 2px solid #2a96fc;
	}

	.w-2-7 {
		width: calc(100% * 2 / 7);
	}
</style>
