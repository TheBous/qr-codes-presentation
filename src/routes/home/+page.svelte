<script lang="ts">
	import { onMount } from "svelte";
	import background from "$lib/images/background.png";
	import title from "$lib/images/title.png";
	import AuthCheck from "$lib/components/AuthCheck.svelte";
	import type { PageData } from "./$types";
	import allQrs from "$lib/qrs/allQrs";

	export let data: PageData;
	let name = "";

	let timer = 0;
	let src = "";
	onMount(() => {
		if (data.timer) {
			timer = parseInt(data.timer);
			const interval = setInterval(() => {
				timer--;
				if (timer === 0) clearInterval(interval);
			}, 1000);
			return () => {
				if (interval) clearInterval(interval);
			};
		} else timer = 0;
	});

	onMount(async () => {
		const path = `$lib/images/qrs/${data.qr}.jpg`;
		src = (await import(path)).default;
	});

	onMount(async () => {
		if (!data.qr) alert("Show a valid qr");
	});

	onMount(async () => {
		const { name: _name } = allQrs?.[data.qr];
		name = _name;
	});

	const getImage = () => {
		const { image } = allQrs?.[data.qr];
		const path = `/src/lib/images/qrs/${image}`;
		const modules = import.meta.glob("$lib/images/qrs/*", { eager: true });
		const file = modules[path] as { default: string };
		return file.default;
	};

	$: getTimer = () => {
		if (data.format === "hour") {
			const minutes = Math.floor(timer / 60);
			const seconds = timer % 60;
			return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
		}
		return timer;
	};
</script>

<AuthCheck>
	<div class="h-screen w-screen relative">
		<div
			class="h-screen bg-cover bg-no-repeat"
			style="background-image: url({background});"
		/>
		<div
			class="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 flex flex-col justify-center items-start p-8"
		>
			<img alt="title" src={title} class="mb-2 w-1/2" />
			<div
				class="w-full h-full relative flex flex-col justify-between items-start p-8"
				style="border: 40px solid rgba(255, 255, 255, 0.2);"
			>
				<div class="w-2/3 font-black text-white text-5xl">
					{name?.toLocaleUpperCase()}
				</div>
				<div class="w-2/3 font-medium text-white text-4xl">
					{#if !!data.timer}
						HURRY UP! SCAN THE QR-CODE AND CLAIM THE PRIZE BEFORE IT EXPIRES!
					{:else}
						HURRY UP! SCAN THE QR-CODE AND CLAIM THE PRIZE!
					{/if}
				</div>
				<div class="w-2/3 text-white text-xl font-medium">
					Lugano, 7-11 september 2023
				</div>
			</div>
			<div
				class="absolute left-3/4 bottom-1/4 h-3/4 w-2/3 2xl:w-1/3 text-9xl font-extralight text-white"
				style="background: #463E3E"
			>
				<div class="relative h-full w-full flex justify-center items-center">
					{#if timer !== 0}
						{#if data.format !== "hour"}
							{timer}
						{:else}
							{getTimer()}
						{/if}
					{/if}
					{#if timer === 0}
						<div class="p-5 w-full h-auto">
							<img src={getImage()} alt="qr-code" class="w-full h-auto" />
						</div>
					{/if}
					<div
						class="absolute left-0 text-5xl text-right w-full font-extralight text-ellipsis"
						style="top: -3.2rem;"
					>
						{#if !!data.timer}
							AIRDROP FAST CLAIM
						{:else}
							AIRDROP CLAIM
						{/if}
					</div>
				</div>
			</div>
			<div class="w-full text-right text-xl text-white">www.nft-fest.ch</div>
		</div>
	</div>
</AuthCheck>
