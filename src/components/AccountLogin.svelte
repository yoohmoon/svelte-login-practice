<script>
	import Button from '../shared/Button.svelte';
</script>

<div class="relative">
	<i class="absolute left-2 top-2 fa-solid fa-user" style="color:#2a96fc" />
	<input
		type="text"
		placeholder="Username"
		class="w-full p-1 text-gray-700 bg-white border border-gray-300 rounded-sm pl-7 focus:outline-none font-display"
	/>
</div>
<div class="relative mt-5">
	<i class="absolute left-2 top-2 fa-solid fa-lock" style="color:#2a96fc" />
	<input
		type="password"
		placeholder="Password"
		class="w-full p-1 text-gray-700 bg-white border border-gray-300 rounded-sm pl-7 focus:outline-none font-display"
	/>
	<i class="absolute text-gray-500 translate-y-2 fa-regular fa-eye-slash right-1" />
</div>
<div class="flex items-center justify-between mt-5">
	<div>
		<input type="checkbox" id="remember" />
		<label for="remember" class="cursor-pointer">Remember Me</label>
	</div>
	<div>
		<a href="#" class="text-[#2a96fc]">Forgot Password ?</a>
	</div>
</div>
<div class="mt-5">
	<Button>Login</Button>
</div>
