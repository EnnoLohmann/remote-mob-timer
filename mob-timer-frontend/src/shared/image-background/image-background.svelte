<script>
</script>

<div class="image-background" />

<style lang="scss">
	@import '../../app.scss';
	.image-background {
		background-image: url('/images/coding-background.jpg');
		background-size: cover;
		background-position: bottom center;
		height: calc(100vh);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		&:after {
			position: absolute;
			content: '';
			display: block;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;

			background-color: $highlight-03;

			mix-blend-mode: normal;
		}
	}
</style>
