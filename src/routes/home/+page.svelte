<script lang="ts">
	import background from "$lib/images/background.png";
	import title from "$lib/images/title.png";
	import { onMount } from "svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	let timer = 10;
	onMount(() => {
		const interval = setInterval(() => {
			timer--;
			if (timer === 0) {
				clearInterval(interval);
			}
		}, 1000);
	});

	$: {
		if (timer === 0) timer = 50;
	}
</script>

<div class="h-screen w-screen relative">
	<div
		class="h-screen bg-cover bg-no-repeat"
		style="background-image: url({background});"
	/>
	<div
		class="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 flex flex-col justify-center items-start p-8"
	>
		<img alt="title" src={title} class="mb-2 w-80" />
		<div
			class="w-full h-full relative flex flex-col justify-center items-start p-8"
			style="border: 40px solid rgba(255, 255, 255, 0.2);"
		>
			<div class="w-2/3 font-medium text-white mb-auto text-4xl mt-auto">
				HURRY UP! SCAN THE QR-CODE AND CLAIM THE PRIZE BEFORE IT EXPIRES!
			</div>
			<div class="w-2/3 text-white text-xl font-medium">
				Lugano, 7-11 september 2023
			</div>
		</div>
		<div
			class="absolute flex justify-center items-center left-3/4 bottom-1/4 h-3/4 w-1/3 text-9xl font-extralight text-white"
			style="background: #463E3E"
		>
			{timer}
		</div>
	</div>
</div>
