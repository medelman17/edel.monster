import type { RequestHandler } from '@sveltejs/kit';
import { api } from '$lib/sanity';

import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

Sentry.init({
	dsn: 'https://d4e4a673a04a4e14bf9c45ec604899a6@o315883.ingest.sentry.io/6067375',
	tracesSampleRate: 1.0,
	integrations: [new Sentry.Integrations.Http({ tracing: true })]
});

export const get: RequestHandler<
	Record<string, unknown>,
	api.cats.ListCategoryQueryInput
> = async ({ params: { offset, limit } }) => {
	try {
		const result = await api.cats.list({ offset: 0, limit: 10 });
		return {
			status: 200,
			body: result
		};
	} catch (err) {
		return {
			status: 500,
			body: err
		};
	}
};
