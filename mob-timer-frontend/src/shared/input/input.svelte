<script>
	export let label = 'Label';
	export let inputText = '';
	let focus = false;
</script>

<div class="input px-2 pt-3 pb-1">
	<p class:input__label--focus={focus} class="input__label">{label}</p>
	<input
		bind:value={inputText}
		on:focus={() => (focus = true)}
		on:blur={() => (focus = false)}
		class="input__field"
	/>
</div>

<style lang="scss">
	@import '../../app.scss';
	.input {
		position: relative;
		background-color: $white;
		border: 2px solid $highlight-02;
		&__field {
			outline: none;
		}

		&__label {
			position: absolute;
			font-size: 18px;
			top: 8px;
			left: 6px;
			transition: all 0.4s;
			pointer-events: none;
		}

		&__label--focus {
			font-size: 12px;
			top: 0px;
		}
	}
</style>
