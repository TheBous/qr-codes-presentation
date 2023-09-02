<script lang="ts">
	import { user } from "$lib/firebase";
</script>

{#if $user}
	<slot />
{:else}
	<p class="text-error my-10">You must be logged in to view this page</p>
	<a class="btn btn-primary w-full" href="/login">Login Page</a>
{/if}
