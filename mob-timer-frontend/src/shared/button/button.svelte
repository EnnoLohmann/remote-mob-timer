<script>
	export let href;
</script>

<a {href} class="button"> <slot /> </a>

<style lang="scss">
	@import '../../app.scss';

	.button {
		background-color: $dark-02;
		border-radius: 8px;
		padding: 12px 20px;
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
