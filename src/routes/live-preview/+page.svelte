<script lang="ts">
	import { page } from '$app/stores';
	import ArticleComponent from './Article.svelte';
	import { LivePreview } from '$lib/LivePreview.js';
	import type { Article } from '$lib/LivePreview.js';

	let article: Article;

	const editorOrigin = $page.url.searchParams.get('origin');

	if (!editorOrigin) {
		console.log('LivePreview is DISABLED!');
	} else {
		console.log('LivePreview is ENABLED!');

		const livePreview = new LivePreview({
			origin: editorOrigin
		});

		livePreview.connect((event) => {
			if (event.type === 'wby:onChange') {
				article = event.data;
			}
		});
	}
</script>

{#if article}
	<ArticleComponent {article} />
{/if}
