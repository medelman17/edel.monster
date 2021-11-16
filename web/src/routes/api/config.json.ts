import type { RequestHandler } from '@sveltejs/kit';
import { api } from '$lib/sanity';

export const get: RequestHandler<Record<string, unknown>> = async () => {
	try {
		const result = await api.config.site();
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
