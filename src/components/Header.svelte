<script>
	import Logo from '$lib/assets/logo.png';
	let logoSrc =
		'https://uploads-ssl.webflow.com/6017c24454cf53d02e799369/6017c2c720ddaccda2785690_GENUIO_emblem.png';
	let src = 'https://genu.io/_astro/genuio_logo_b.d42d0f6b.svg';
</script>

<header class="container flex flex-col justify-center mx-auto mb-10 text-center w-80">
	<div class="flex justify-center pb-2">
		<img src={logoSrc} alt="logo" class="inline-block mr-3 w-14 h-14" />
		<img {src} alt="logo text" class="" />
	</div>
	<p class="text-sm text-gray-600">Genuine quality of shoes handmade in Italy</p>
</header>
