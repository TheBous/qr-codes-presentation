<script lang="ts">
	import "../app.css";
</script>

<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />

<div class="min-h-screen flex flex-col">
	<slot />
</div>

<style global>
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto:wght@400;500;700;900&display=swap");

	body {
		font-family: "Roboto", sans-serif;
	}
</style>
