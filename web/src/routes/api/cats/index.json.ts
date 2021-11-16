import type { RequestHandler } from '@sveltejs/kit';
import { api } from '$lib/sanity';

export const get: RequestHandler<
	Record<string, unknown>,
	api.cats.ListCategoryQueryInput
> = async ({ params: { offset, limit } }) => {
	try {
		const result = await api.cats.list({ offset, limit });
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
