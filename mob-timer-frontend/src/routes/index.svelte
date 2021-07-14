<script>
	import ImageBackground from './../shared/image-background/image-background.svelte';
	import Button from './../shared/button/button.svelte';
	import Input from './../shared/input/input.svelte';

	let inputText = '';
</script>

<ImageBackground />
<div class="information flex content-center items-center flex-col">
	<h1 class="information__headline mt-20">Want to keep on track with your mob session?</h1>
	<h2 class="information__subheadline  mt-10">Create a new session for your team!</h2>
	<div class="mt-4">
		<Button href={`/session/${inputText}`} text="Start new Session" />
	</div>
	<h2 class="information__subheadline mt-10">Join an existing session!</h2>
	<div class="mt-4">
		<Input bind:inputText label="Session-id" />
	</div>
	<div class="mt-4">
		<Button href={`/session/${inputText}`} text="Join Session" />
	</div>
</div>

<style type="scss">
	@import '../app.scss';

	.information {
		position: relative;

		&__headline {
			font-size: 32px;
			color: $white;
		}

		&__subheadline {
			font-size: 24px;
			color: $white;
		}
	}
</style>
