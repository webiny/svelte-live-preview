export interface CmsLivePreviewIncomingEvent {
	type: 'wby:onChange';
	data: Article;
}

export interface OnData {
	(data: CmsLivePreviewIncomingEvent): void;
}

interface LivePreviewConfig {
	origin: string;
}

export class LivePreview {
	private params: LivePreviewConfig;

	constructor(params: LivePreviewConfig) {
		this.params = params;
	}

	connect(onData: OnData) {
		// Listen for window message, and only handle `wby:` messages.
		window.addEventListener('message', (event: MessageEvent<CmsLivePreviewIncomingEvent>) => {
			// We need to filter window messages, because various dev tools are sending messages to the window.
			// We only want to catch the events coming from Webiny.
			if (!event.data.type?.startsWith('wby:')) {
				return;
			}

			// console.log('preview:incomingMessage', event.data);

			onData(event.data);
		});

		// Report to the parent window.
		window.parent.postMessage(
			{
				type: 'wby:onPreviewReady'
			},
			{
				targetOrigin: this.params.origin
			}
		);
	}
}

export interface Article {
	id: string;
	title: string;
	slug: string;
	description: string;
	content: Array<GenericBlock>;
}

export interface GenericBlock {
	__typename: string;
}
