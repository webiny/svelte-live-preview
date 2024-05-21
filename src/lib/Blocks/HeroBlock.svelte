<script context="module" lang="ts">
	import type { GenericBlock } from '$lib/LivePreview';

	export interface HeroBlock extends GenericBlock {
		title: string;
		subtitle: string;
		description: string;
		image: string;
		callToActionButtonLabel: string;
		callToActionButtonUrl: string;
	}

	export function isHeroBlock(block: GenericBlock): block is HeroBlock {
		return block.__typename === 'Article_Content_Hero';
	}
</script>

<script lang="ts">
	export let block: HeroBlock;
</script>

<section class="bg-white dark:bg-gray-900">
	<div
		class="gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16"
	>
		{#if block.image}
			<img
				class="w-full shadow-xl h-auto max-w-full rounded-lg"
				src={block.image}
				alt="dashboard"
			/>
		{/if}
		<div class="mt-4 md:mt-0">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				{block.title}
			</h2>
			<p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
				{block.description}
			</p>
			<a
				href={block.callToActionButtonUrl}
				class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
			>
				{block.callToActionButtonLabel}
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path>
				</svg>
			</a>
		</div>
	</div>
</section>
