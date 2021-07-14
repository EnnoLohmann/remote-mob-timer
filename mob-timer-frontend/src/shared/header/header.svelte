<script>
	import format from 'date-fns/format/index.js';

	let date = format(new Date(), 'HH:mm:ss - dd. MMMM yyyy');
	setInterval(() => {
		date = format(new Date(), 'HH:mm:ss - dd. MMMM yyyy');
	}, 1000);
</script>

<div class="header p-3">
	<p class="header__text header__text--wide">CollabCodes</p>
	<p class="header__text header__text--small">CC</p>
	<p class="header__timer">{date}</p>
</div>

<style lang="scss">
	@import '../../app.scss';
	.header {
		background-color: $dark-02;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 4px solid $highlight-01;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		&__text {
			color: $highlight-01;
			font-size: 24px;
			&--wide {
				display: none;
				@media (min-width: 480px) {
					display: inline;
				}
			}
			&--small {
				display: inline;
				@media (min-width: 480px) {
					display: none;
				}
			}
		}
		&__timer {
			color: $white;
			font-size: 18px;
		}
	}
</style>
