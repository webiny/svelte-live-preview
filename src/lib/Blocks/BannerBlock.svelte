<script context="module" lang="ts">
	import type { GenericBlock } from '$lib/LivePreview';

	export interface BannerBlock extends GenericBlock {
		title: string;
		actionUrl: string;
		actionLabel: string;
		image: string;
	}

	export function isBannerBlock(block: GenericBlock): block is BannerBlock {
		return block.__typename === 'Article_Content_Banner';
	}
</script>

<script lang="ts">
	export let block: BannerBlock;
</script>

<section class="bg-purple-50 rounded p-5 my-10">
	<div
		class="gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16"
	>
		<img class="rounded-full w-15 h-auto" src={block.image} alt="dashboard" />
		<div class="mt-4 md:mt-0">
			<h3 class="mb-4 text-3xl tracking-tight font-extrabold text-purple-800 dark:text-white">
				{block.title}
			</h3>
			<a
				href={block.actionUrl}
				class="inline-flex items-center text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
			>
				{block.actionLabel}
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
