import sanity from '@sanity/client';
import type { SanityClient as SC } from '@sanity/client';
// import getImageUrlBuilder from '@sanity/image-url';
import type { ISanityBuilder, QueryBuilder } from './query';
import type { ClientConfig } from './types';

class SanityClient {
	static self: SanityClient;
	private readonly sanity: SC;
	private readonly cache: Map<string, any> = new Map();
	// readonly imageBuilder: ReturnType<typeof getImageUrlBuilder>;

	constructor(protected readonly props: ClientConfig) {
		if (!SanityClient.self) {
			this.sanity = sanity({ useCdn: true, apiVersion: '2021-11-16', ...this.props });
			// this.imageBuilder = getImageUrlBuilder({
			// 	projectId: this.props.projectId,
			// 	dataset: this.props.dataset
			// });
			SanityClient.self = this;
		}
		return SanityClient.self;
	}

	async execute<Result, Params extends any = unknown, Op extends ISanityBuilder = QueryBuilder>(
		operation: Op,
		params: Params
	): Promise<Result> {
		return this.sanity.fetch(operation.build(), params);
	}

	async query<QueryResult extends any = unknown, Params extends any = unknown>(
		query: string,
		params: Params
	): Promise<QueryResult> {
		return this.sanity.fetch(query, params);
	}

	async doc<D extends any = unknown>(id: string, invalidateCache = false): Promise<D> {
		if (!this.cache.has(id) || invalidateCache) {
			console.log(`[CACHE]: Miss/Invalidation on Doc ${id}`);
			try {
				console.log(`[CACHE]: Refresh for Doc ${id}`);
				const doc = await this.sanity.getDocument<D>(id);
				console.log(`[CACHE]: Update for Doc ${id}`);
				this.cache.set(id, doc);
			} catch (err) {
				console.log(err);
			}
		} else {
			console.log(`[CACHE]: Hit on Doc ${id}`);
		}
		return this.cache.get(id);
	}
}

export default SanityClient;
