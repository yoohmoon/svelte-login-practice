<script>
	import Button from '../shared/Button.svelte';
	import Input from '../shared/Input.svelte';

	let email;
	let password;
</script>

<Input type="email" placeholder="Email" mt="" bind:value={email} />
<Input
	type="password"
	placeholder="Password"
	icon="fa-solid fa-lock"
	mt="5"
	isPassword="true"
	bind:value={password}
/>

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
	<Button>Login</Button>
</div>
