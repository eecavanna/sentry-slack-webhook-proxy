# Sentry Slack webhook proxy

This is a small API—implemented as a Cloudflare Worker—designed to receive HTTP requests from Sentry, translate them into a format compatible with Slack, and send the translated version to the Slack incoming webhook URL.

This was created because, although Sentry _has_ a Slack integration, it requires certain permissions that the creator of this repository did not want to grant it.

## Development

### Quick start

```shell
npm install
```

We use [Wrangler](https://developers.cloudflare.com/workers/wrangler) to handle deployment to Cloudflare Workers. You can run it via: `$ npx wrangler`.

## Testing

You can run the tests via:

```shell
npm run test
```

We are considering using [Miniflare](https://developers.cloudflare.com/workers/testing/miniflare/) to simulate the Cloudflare Workers environment locally.
