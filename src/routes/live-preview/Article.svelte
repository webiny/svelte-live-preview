<script lang="ts">
	import type { Article } from '$lib/LivePreview';
	import BannerBlock, { isBannerBlock } from '$lib/Blocks/BannerBlock.svelte';
	import HeroBlock, { isHeroBlock } from '$lib/Blocks/HeroBlock.svelte';
	import TextWithImageBlock, { isTextWithImageBlock } from '$lib/Blocks/TextWithImageBlock.svelte';
	import RichTextBlock, { isRichTextBlock } from '$lib/Blocks/RichTextBlock.svelte';
	import ThreeGridBoxBlock, { isThreeGridBoxBlock } from '$lib/Blocks/ThreeGridBoxBlock.svelte';

	export let article: Article;
</script>

<article>
	<h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
		<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
			{article.title}
		</span>
	</h1>
	<p class="text-lg font-normal text-gray-500 lg:text-xl mb-4">
		{article.description}
	</p>
	{#each article.content ?? [] as block}
		{#if isBannerBlock(block)}
			<BannerBlock {block} />
		{:else if isHeroBlock(block)}
			<HeroBlock {block} />
		{:else if isTextWithImageBlock(block)}
			<TextWithImageBlock {block} />
		{:else if isRichTextBlock(block)}
			<RichTextBlock {block} />
		{:else if isThreeGridBoxBlock(block)}
			<ThreeGridBoxBlock {block} />
		{/if}
	{/each}
</article>
