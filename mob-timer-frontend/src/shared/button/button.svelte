<script>
	export let text;
	let className;
	export { className as class };
</script>

<button on:click class={`button ${className}`}>
	{text}
</button>

<style lang="scss">
	@import '../../app.scss';

	.button {
		text-align: center;
		background-color: $dark-02;
		border-radius: 8px;
		color: $white;
		font-size: 18px;
		border: 2px solid $highlight-02;
		transition: all 0.4s;
		padding: 12px 20px;

		&:hover {
			border: 2px solid $highlight-01;
			background-color: $dark-03;
		}
	}
</style>
