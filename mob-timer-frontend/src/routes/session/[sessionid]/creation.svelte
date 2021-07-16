<script context="module">
	export async function load({ page, fetch }) {
		let sessionId = page.params.sessionid;

		return { props: { sessionId } };
	}
</script>

<script>
	import Input from '../../../shared/input/input.svelte';
	import Button from '../../../shared/button/button.svelte';
	import Fa from 'svelte-fa';
	import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

	export let sessionId;

	let mobberNames = [];
	let currentName = '';
	let roundLength = '15';
	let breakLength = '15';
	let breakRoundCount = '4';

	const addMobber = () => {
		mobberNames = [...mobberNames, currentName];
		currentName = '';
	};

	const removeMobber = (mobberName) => {
		mobberNames = mobberNames.filter((name) => name != mobberName);
	};

	const onKeyPress = (e) => {
		if (e.charCode === 13) addMobber();
	};

	const createSession = (e) => {
		console.log('Create Session');
	};
</script>

<div class="create-page">
	<div class="create-page__card mt-4">
		<h1 class="create-page__headline p-2">Create new session: {sessionId}</h1>
		<div class="create-page__body p-4 ">
			<div class="flex flex-row">
				<Input
					on:keypress={onKeyPress}
					bind:inputText={currentName}
					class="mr-4 flex-1"
					label="Mobbername"
				/>
				<Button on:click={addMobber} text="Add" />
			</div>
			<h2 class="mt-2 text-xl font-semibold">Mobbers:</h2>
			{#each mobberNames as mobberName}
				<div
					on:click={() => removeMobber(mobberName)}
					class="create-page__mobber inline-block px-2 py-1 m-2"
				>
					{mobberName}
					<Fa class="inline ml-2" icon={faTimesCircle} />
				</div>
			{:else}
				<p>No mobbers were added!</p>
			{/each}

			<h2 class="my-2 text-xl font-semibold">Configuration:</h2>
			<div class="flex flex-row flex-wrap">
				<div class="min-width flex flex-col flex-1 p-3">
					<h2 class="text-xl">Rounds</h2>
					<Input class="mt-2" bind:inputText={roundLength} label="Roundlength in min" />
				</div>
				<div class=" min-width flex flex-col flex-1  p-3">
					<h2 class="text-xl">Breaks</h2>
					<Input class="mt-2" bind:inputText={breakLength} label="Breaklength in min" />
					<Input class="mt-2" bind:inputText={breakRoundCount} label="Break every x rounds" />
				</div>
			</div>
			<div class="flex flex-row flex-wrap">
				<div class="min-width flex flex-col flex-1 p-3">Initial driver: {mobberNames[0] ?? ''}</div>
				<div class="min-width flex flex-col flex-1 p-3">
					Initial Navigator: {mobberNames[1] ?? ''}
				</div>
			</div>
			<div class="flex justify-center mt-4">
				<Button on:click={createSession} text="Create session" />
			</div>
		</div>
	</div>
</div>
<div class="create-page__background" />

<style type="scss">
	@import '../../../app.scss';
	.min-width {
		min-width: 150px;
	}
	.create-page {
		display: flex;
		justify-content: center;
		&__card {
			max-width: 800px;
			width: 60%;
			background-color: #ffffff9f;
			border: 2px solid $highlight-02;
			border-radius: 4px;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

			@media (max-width: 768px) {
				width: 80%;
			}

			@media (max-width: 520px) {
				width: 100%;
			}
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

		&__mobber {
			background-color: $dark-02;
			color: $white;
		}
	}
</style>
