<script>
	import { goto } from "$app/navigation";
</script>

<div class="flex flex-col justify-center items-center">
	<h1 class="text-green-700 text-lg mb-2">Welcome to QR Codes generator</h1>
	<p class="mb-2">Login to see qr codes generator</p>
	<button on:click={() => goto("/login")} class="btn btn-primary w-1/5"
		>Login Page</button
	>
</div>
