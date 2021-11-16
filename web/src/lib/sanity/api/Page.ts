import type * as Schema from '$lib/sanity/schema';
import groq from 'groq';
import { getClient } from './Client';

const client = getClient();

export type GetPageQueryResult = Omit<
	Pick<Schema.Page, 'body' | 'description' | 'mainImage' | 'openGraphImage' | 'slug' | 'title'>,
	''
>;

export type GetPageQueryInput = {
	slug: string;
};

const PageQuery = groq`*[_type == "page" && slug.current == $slug] {
    _id,
    body,
    description,
    mainImage,
    slug,
    title,
    openGraphImage
}`;

export const fromSlug = (input: GetPageQueryInput): Promise<GetPageQueryResult> => {
	return client.query<GetPageQueryResult, GetPageQueryInput>(PageQuery, input);
};

export type GetPageByIdQueryInput = {
	id: string;
};

const PageByIdQuery = groq``;

export const fromId = (input: GetPageByIdQueryInput): Promise<GetPageQueryResult> => {
	return client.query<GetPageQueryResult, GetPageByIdQueryInput>(PageByIdQuery, input);
};
