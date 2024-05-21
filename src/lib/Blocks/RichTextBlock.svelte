<script context="module" lang="ts">
	import type { GenericBlock } from '$lib/LivePreview';

	export interface RichTextBlock extends GenericBlock {
		content: string;
	}

	export const isRichTextBlock = (block: GenericBlock): block is RichTextBlock => {
		return block.__typename === 'Article_Content_Richtextfield';
	};
</script>

<script lang="ts">
	export let block: RichTextBlock;
</script>

{@html block.content}
