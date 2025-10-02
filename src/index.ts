/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		// Retrieve a secret from Cloudflare Secrets Store.
		const slackIncomingWebhookUrl = env.SENTRY_SLACK_INCOMING_WEBHOOK_URL;
		if (slackIncomingWebhookUrl.length === 0) {
			return new Response('Slack incoming webhook URL is not set.', { status: 500 });
		}

		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
