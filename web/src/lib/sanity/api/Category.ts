import type * as Schema from '$lib/sanity/schema';
import groq from 'groq';
import { getClient } from './Client';

const client = getClient();

const CategoryFromSlugQuery = groq`*[_type == "category" && slug.current == $slug] {
    ...
}[0]`;

export type CategoryFromSlugQueryInput = {
	slug: string;
};

export const fromSlug = (input: CategoryFromSlugQueryInput): Promise<any> => {
	return client.query<any>(CategoryFromSlugQuery, input);
};

const ListCategoryQuery = groq`{
    "categories": *[_type == "category"] {...}[$offset..$limit],
    "total": count(*[_type == "category"])
}`;

export type ListCategoryQueryInput = {
	offset: number;
	limit: number;
};

export const list = (input: ListCategoryQueryInput): Promise<any> => {
	return client.query<any>(ListCategoryQuery, input);
};
