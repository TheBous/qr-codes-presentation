<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { auth, user } from "$lib/firebase";
	import { isLoading } from "$lib/store/loader";
	import { signInWithEmailAndPassword, signOut } from "firebase/auth";

	let email = "";
	let password = "";

	const signInWithPassword = async () => {
		try {
			isLoading.set(true);
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			goto(`/home${$page.url.search}`);
		} catch (error: any) {
			const errorMessage = error.message;
			alert("🚫");
		} finally {
			isLoading.set(false);
		}
	};

	const signOutSSR = async () => {
		try {
			isLoading.set(true);
			await fetch("/api/signin", { method: "DELETE" });
			await signOut(auth);
		} catch (e) {
		} finally {
			isLoading.set(false);
		}
	};
</script>

<h1 class="text-2xl">Login</h1>
{#if !$user}
	<div class="w-1/3">
		<div class="form-control w-full">
			<label class="label w-full">
				<span class="label-text">Your Email</span>
			</label>
			<label class="input-group w-full">
				<span>Email</span>
				<input
					bind:value={email}
					type="text"
					placeholder="info@site.com"
					class="input input-bordered w-full"
				/>
			</label>
		</div>
		<div class="form-control w-full">
			<label class="label w-full">
				<span class="label-text">Your Password</span>
			</label>
			<label class="input-group w-full">
				<span>Password</span>
				<input
					type="password"
					class="input input-bordered w-full"
					bind:value={password}
				/>
			</label>
		</div>
	</div>
{/if}

{#if $user}
	<h3 class="text-green-500">User logged</h3>
	<button on:click={signOutSSR} class="btn btn-primary">Sign Out</button>
{:else}
	<button on:click={signInWithPassword} class="btn btn-primary mt-5"
		>Login</button
	>
{/if}
