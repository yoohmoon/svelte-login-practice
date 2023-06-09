<script>
	import Button from '../shared/Button.svelte';
	import Input from '../shared/Input.svelte';

	let phoneNumber;
</script>

<Input placeholder="Phone Number" mt="" icon="fa-solid fa-mobile-screen" bind:value={phoneNumber} />

<div class="flex justify-between items-center mt-5 gap-2">
	<Input
		placeholder="Verification Code"
		mt=""
		width="true"
		icon="fa-solid fa-envelope"
		bind:value={phoneNumber}
	/>
	<Button inverse={true} width="true">Get Code</Button>
</div>

<div class="flex items-center justify-between mt-5">
	<div>
		<input
			type="checkbox"
			id="remember"
			class="focus:ring-custom-blue focus:outline-none focus:ring-transparent"
		/>
		<label for="remember" class="cursor-pointer select-none">Remember Me</label>
	</div>
	<div>
		<a href="#" class="text-[#2a96fc]">Forgot Password ?</a>
	</div>
</div>

<div class="mt-5">
	<Button type="primary" dimension="true" inverse={true}>Login</Button>
</div>
