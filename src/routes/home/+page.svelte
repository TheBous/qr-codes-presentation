<script lang="ts">
	import background from "$lib/images/background.png";
	import title from "$lib/images/title.png";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="h-screen w-screen relative">
	<div
		class="h-screen bg-cover bg-no-repeat"
		style="background-image: url({background});"
	/>
	<div
		class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 flex flex-col justify-center items-start p-8"
		style="width: 50%"
	>
		<img alt="title" src={title} class="mb-2" />
		<div
			class="w-full h-full relative flex flex-col justify-center items-start p-8"
			style="border: 40px solid rgba(255, 255, 255, 0.2);"
		>
			<div class="w-1/3 font-bold text-white">
				HURRY UP! SCAN THE QR-CODE AND CLAIM THE PRIZE BEFORE IT EXPIRES!
			</div>
			<div class="w-1/3 text-white">Lugano, 7-11 september 2023</div>
		</div>
		<div
			class="absolute flex justify-center items-center"
			style="top: -10%; left: 60%; height: 60%; width: 40%; background: #463E3E"
		>
			10
		</div>
	</div>
</div>
