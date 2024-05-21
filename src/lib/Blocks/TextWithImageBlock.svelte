<script context="module" lang="ts">
	import type { GenericBlock } from '$lib/LivePreview';

	export interface TextWithImageBlock extends GenericBlock {
		title: string;
		content: string;
		image: string;
	}

	export const isTextWithImageBlock = (block: GenericBlock): block is TextWithImageBlock => {
		return block.__typename === 'Article_Content_Textwithimageblock';
	};
</script>

<script lang="ts">
	export let block: TextWithImageBlock;
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
			{@html block.content}
		</div>
	</div>
</section>
