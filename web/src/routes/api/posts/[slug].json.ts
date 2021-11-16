import type { RequestHandler } from '@sveltejs/kit';
import { api } from '$lib/sanity';

export const get: RequestHandler<
	Record<string, unknown>,
	api.posts.PostFromSlugQueryInput
> = async ({ params: { slug } }) => {
	try {
		const result = await api.posts.fromSlug({ slug });
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
