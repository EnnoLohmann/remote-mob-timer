<script>
	import ImageBackground from './../shared/image-background/image-background.svelte';
	import LinkButton from './../shared/linkbutton/linkbutton.svelte';
	import Input from './../shared/input/input.svelte';

	let inputText = '';

	const makeid = (length) => {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};
</script>

<ImageBackground />
<div class="information flex content-center items-center flex-col">
	<h1 class="information__headline mt-20 text-center">
		Want to keep on track with your mob session?
	</h1>
	<div class="information__content">
		<h2 class="information__subheadline  mt-10">Create a new session for your team!</h2>
		<LinkButton
			class="mt-4"
			href={`/session/${makeid(10) || 'default'}/creation`}
			text="Start new Session"
		/>
		<h2 class="information__subheadline mt-10">Join an existing session!</h2>
		<Input class="mt-4" bind:inputText label="Session ID" />
		<LinkButton class="mt-4" href={`/session/${inputText || 'default'}`} text="Join Session" />
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

		&__content {
			width: 80%;
			max-width: 400px;
			display: flex;
			flex-direction: column;
		}
	}
</style>
