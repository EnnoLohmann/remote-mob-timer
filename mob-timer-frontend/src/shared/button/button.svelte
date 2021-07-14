<script>
	export let href;
	export let text;
</script>

<div class="button">
	<a {href}>{text}</a>
</div>

<style lang="scss">
	@import '../../app.scss';

	.button {
		padding: 12px 20px;
		min-width: 200px;
		text-align: center;
		background-color: $dark-02;
		border-radius: 8px;
		color: $white;
		font-size: 18px;
		border: 2px solid $highlight-02;
		transition: all 0.4s;

		&:hover {
			border: 2px solid $highlight-01;
			background-color: $dark-03;
		}
	}
</style>
