<script>
	import Header from '../shared/header/header.svelte';
	import '../app.scss';
</script>

<Header />
<main class="header-margin">
	<slot />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.header-margin {
		margin-top: 64px;
	}
</style>
