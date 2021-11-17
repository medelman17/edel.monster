import type * as Schema from '$lib/sanity/schema';
import groq from 'groq';
import { getClient } from './Client';

const client = getClient();

const PersonFromSlugQuery = groq`*[_type == "person" && slug.current == $slug] {
    ...
}[0]`;

export type PersonFromSlugQueryInput = {
	slug: string;
};

export const fromSlug = (input: PersonFromSlugQueryInput): Promise<any> => {
	return client.query<any>(PersonFromSlugQuery, input);
};

const ListPeopleQuery = groq`{
    "people": *[_type == "person"] {...}[$offset..$limit],
    "total": count(*[_type == "person"])
}`;

export type ListPeopleQueryInput = {
	offset: number;
	limit: number;
};

export const list = (input: ListPeopleQueryInput): Promise<any> => {
	return client.query<any>(ListPeopleQuery, input);
};
