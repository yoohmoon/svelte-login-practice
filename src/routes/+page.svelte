<script>
	import Header from '../components/Header.svelte';
	import Tabs from '../shared/Tabs.svelte';
	import AccountLogin from '../components/AccountLogin.svelte';
	import PhoneLogin from '../components/PhoneLogin.svelte';

	// tabs
	let items = ['Account Login', 'Phone Login'];
	let activeItem = 'Account Login';
	const tabChange = (e) => {
		activeItem = e.detail; //e.detail === item
	};
</script>

<main>
	<Header />
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === 'Account Login'}
		<AccountLogin />
	{:else if activeItem === 'Phone Login'}
		<PhoneLogin />
	{/if}
</main>
