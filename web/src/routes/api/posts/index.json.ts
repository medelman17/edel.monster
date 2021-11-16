import type { RequestHandler } from '@sveltejs/kit';
import { api } from '$lib/sanity';

export const get: RequestHandler<Record<string, unknown>, api.posts.ListPostQueryInput> = async (
	res
) => {
	// console.log('RES: ', res);
	try {
		const result = await api.posts.list({ offset: 0, limit: 10 });
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
