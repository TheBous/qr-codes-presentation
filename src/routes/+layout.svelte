<script lang="ts">
	import { isLoading } from "$lib/store/loader";
	import "../app.css";
</script>

<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />

{#if !$isLoading}
	<div class="min-h-screen flex flex-col">
		<slot />
	</div>
{/if}
{#if $isLoading}
	<div class="min-w-screen min-h-screen bg-gradient-to-t">
		<span
			class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loading loading-infinity loading-lg"
		/>
	</div>
{/if}

<style global>
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto:wght@400;500;700;900&display=swap");

	body {
		font-family: "Roboto", sans-serif;
	}
</style>
