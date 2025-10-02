# Sentry Slack webhook proxy

This is a small API—implemented as a Cloudflare Worker—designed to receive HTTP requests from Sentry, translate them into a format compatible with Slack, and send the translated version to the Slack incoming webhook URL.

This was created because, although Sentry _has_ a Slack integration, it requires certain permissions that the creator of this repository did not want to grant it.

## Development

### Quick start

Here's how you can start a local development server:

```shell
npm install
npx wrangler dev
```

> You can press `q` to shut down the local development server.

### Details

We use [Wrangler](https://developers.cloudflare.com/workers/wrangler) to handle deployment to Cloudflare Workers. You can run it via: `$ npx wrangler`.

We stored the Slack incoming webhook URL as a worker-level secret on Cloudflare, by running: `$ npx wrangler secret put SENTRY_SLACK_INCOMING_WEBHOOK_URL` (and entering the URL when prompted)

## Testing

You can run the tests via:

```shell
npm run test
```

We are considering using [Miniflare](https://developers.cloudflare.com/workers/testing/miniflare/) to simulate the Cloudflare Workers environment locally.
