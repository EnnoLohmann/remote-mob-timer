<script context="module">
	export async function load({ page, fetch }) {
		console.log(page);
		let sessionId = page.params.sessionid;

		return { props: { sessionId } };
	}
</script>

<script>
	export let sessionId;
</script>

<div class="create-page">
	<div class="create-page__card mt-4">
		<h1 class="create-page__headline p-2">Create new session: {sessionId}</h1>
	</div>
</div>
<div class="create-page__background" />

<style type="scss">
	@import '../../../app.scss';

	.create-page {
		display: flex;
		justify-content: center;
		&__card {
			width: 60%;
			min-height: 800px;
			background-color: #ffffff9f;
			border: 2px solid $highlight-02;
			border-radius: 4px;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		}

		&__headline {
			color: $white;
			background-color: $dark-03;
			font-size: 24px;
			font-weight: 600;
			text-align: center;
		}

		&__background {
			background-color: $highlight-03;
			background-image: radial-gradient(at 89% 0%, #0b5753 0, transparent 56%),
				radial-gradient(at 11% 29%, #0a4744 0, transparent 55%),
				radial-gradient(at 11% 89%, #146965 0, transparent 55%),
				radial-gradient(at 83% 11%, #097973 0, transparent 56%),
				radial-gradient(at 98% 65%, #0a4744 0, transparent 53%),
				radial-gradient(at 65% 28%, #224d4a 0, transparent 60%),
				radial-gradient(at 95% 11%, #074744 0, transparent 48%),
				radial-gradient(at 50% 73%, #045a56 0, transparent 58%);
			height: 200px;
			width: 100%;
			position: fixed;
			top: 0;
			z-index: 1;
			height: 100vh;
			opacity: 0.4;
		}
	}
</style>
