<script context="module" lang="ts">
	import type { GenericBlock } from '$lib/LivePreview';

	export interface ThreeGridBoxBlock extends GenericBlock {
		boxes: Array<{
			title: string;
			description: string;
			icon: string;
		}>;
	}

	export const isThreeGridBoxBlock = (block: GenericBlock): block is ThreeGridBoxBlock => {
		return block.__typename === 'Article_Content_ThreeGridBox';
	};
</script>

<script lang="ts">
	export let block: ThreeGridBoxBlock;
</script>

<section class="bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-300">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
			{#each block.boxes as box}
				<div>
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
					>
						{#if box.icon}<img src={box.icon} alt={box.title} />{/if}
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">
						{box.title}
					</h3>
					<p class="text-gray-500 dark:text-gray-400">
						{box.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
