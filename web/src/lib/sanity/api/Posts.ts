import type * as Schema from '$lib/sanity/schema';
import groq from 'groq';
import { getClient } from './Client';

const client = getClient();

const PostFromSlugQuery = groq`*[_type == "article" && slug.current == $slug] {
    _id,
    slug,
    content,
    publishDate,
    title,
    summary,
    _updatedAt,
    "author": authors[]->{...}[0],
    "categories": category[]->
}[0]`;

export type PostQueryResult = Omit<
	Pick<
		Schema.Article,
		'slug' | '_id' | 'content' | 'publishDate' | 'title' | 'summary' | '_updatedAt'
	>,
	'authors' | 'category'
> & {
	author: Schema.Person;
	categories: Schema.Category[];
};

export type PostFromSlugQueryInput = {
	slug: string;
};

export const fromSlug = (input: PostFromSlugQueryInput): Promise<PostQueryResult> => {
	return client.query<PostQueryResult>(PostFromSlugQuery, input);
};

const PostFromIdQuery = groq`*[_type == "article" && _id == $id] {
    _id,
    slug,
    content,
    publishDate,
    title,
    summary,
    _updatedAt,
    "author": authors[]->{...}[0],
    "categories": category[]->
}[0]`;

export type PostFromIdQueryInput = {
	id: string;
};

export const fromId = (input: PostFromIdQueryInput): Promise<PostQueryResult> => {
	return client.query<PostQueryResult>(PostFromIdQuery, input);
};

const ListPostsQuery = groq`{
    "posts": *[_type == 'article']|order(publishDate desc) {
      _createdAt,
      _id,
      _updatedAt,
      slug,
      publishDate,
      summary,
      title,
      "categories": category[]->{
        _id,
        description,
        slug,
        title
      },
      "author": authors[0]->{
        _id,
        firstName,
        lastName,
        slug,
        "name": firstName + " " + lastName
      }
    }[$offset..$limit],
    "total": count(*[_type == 'article'])
    }`;

export type ListPostQueryInput = {
	offset: number;
	limit: number;
};

export type PostsQueryResult = {
	count: number;
	posts: Array<
		Omit<
			Pick<
				Schema.Article,
				'_id' | '_createdAt' | '_updatedAt' | 'summary' | 'slug' | 'publishDate' | 'title'
			>,
			''
		> & {
			[index: string]: any;
		}
	>;
};

export const list = (input: ListPostQueryInput): Promise<PostsQueryResult> => {
	return client.query<PostsQueryResult>(ListPostsQuery, input);
};
