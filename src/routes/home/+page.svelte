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
	let preTimer = 0;
	let postTimer = -1;
	let startTimer = false;
	let startPostTimer = false;
	let qrsCurrentIndex = 0;
	let images = "";

	onMount(() => {
		if (data.timer) {
			timer = parseInt(data.timer);
			const interval = setInterval(() => {
				if (!startTimer) return;
				timer--;
				if (timer === 0) {
					clearInterval(interval);
					startPostTimer = true;
				}
			}, 1000);
			return () => {
				if (interval) clearInterval(interval);
			};
		} else timer = 0;
	});

	onMount(() => {
		if (data.preTimer) {
			preTimer = parseInt(data.preTimer);
			const interval = setInterval(() => {
				preTimer--;
				if (preTimer === 0) {
					startTimer = true;
					clearInterval(interval);
				}
			}, 1000);
			return () => {
				if (interval) clearInterval(interval);
			};
		} else {
			preTimer = 0;
			startTimer = true;
		}
	});

	onMount(() => {
		if (data.postTimer) postTimer = parseInt(data.postTimer);
	});

	const interval = setInterval(() => {
		if (!startPostTimer) return;
		if (postTimer > -1) {
			if (postTimer === 0) {
				if (data.loop) {
					if (postTimer === 0) {
						if (!!images[qrsCurrentIndex + 1]) qrsCurrentIndex += 1;
						else qrsCurrentIndex = 0;
					}
					postTimer = parseInt(data.postTimer!);
				} else {
					if (!!images[qrsCurrentIndex + 1]) {
						qrsCurrentIndex += 1;
						postTimer = parseInt(data.postTimer!);
					} else clearInterval(interval);
				}
			} else postTimer -= 1;
		}
	}, 1000);

	onMount(() => {
		if (!data.qr) alert("Show a valid qr");
	});

	onMount(() => {
		const { name: _name, qrs } = (allQrs as any)?.[data.qr ?? "default"];
		images = qrs;
		name = _name;
	});

	$: getImage = () => {
		const path = `/src/lib/images/qrs/${images[qrsCurrentIndex]}`;
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
	$: getPreTimer = () => {
		const minutes = Math.floor(timer / 60);
		const seconds = preTimer % 60;
		return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
	};
	$: getPostTimer = () => {
		const minutes = Math.floor(postTimer / 60);
		const seconds = postTimer % 60;
		return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
	};
</script>

<AuthCheck>
	{#if !data.preTimer || preTimer === 0}
		<div class="h-screen w-screen relative">
			<div
				class="h-screen bg-cover bg-no-repeat"
				style="background-image: url({background});"
			/>
			<div
				class="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4 flex flex-col justify-center items-start p-8"
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
					class="absolute left-3/4 h-3/4 font-extralight text-white"
					style="background: #463E3E; bottom: 17%; width: 450px; font-size:12rem; line-height: 1;"
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
							class="absolute left-0 text-5xl text-right font-extralight text-ellipsis w-full"
							style="top: -3.2rem;"
						>
							{#if !!data.timer}
								AIRDROP FAST CLAIM
							{:else}
								AIRDROP CLAIM
							{/if}
						</div>
						{#if !!data.postTimer && timer === 0}
							<div
								class="absolute left-0 text-5xl text-right font-extralight text-ellipsis w-full flex justify-center"
								style="bottom: 0.5rem;"
							>
								{getPostTimer()}
							</div>
						{/if}
					</div>
				</div>
				<div class="w-full text-right text-xl text-white">www.nft-fest.ch</div>
			</div>
		</div>
	{:else}
		<div
			class="min-w-screen min-h-screen bg-gradient-to-t flex justify-center items-center"
		>
			<div class="text-9xl font-black text-white">{getPreTimer()}</div>
		</div>
	{/if}
</AuthCheck>
