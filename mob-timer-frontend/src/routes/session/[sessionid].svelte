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

<div>{sessionId}</div>

<style type="scss">
</style>
