import type * as Schema from '$lib/sanity/schema';
import groq from 'groq';
import { getClient } from './Client';

const client = getClient();

type IncludedSiteConfigProps = '_id' | 'title' | 'description';
type OmittedSiteConfigProps = 'url' | 'mainNav' | 'frontpage';

export type GetConfigQueryResult = Omit<
	Pick<Schema.SiteConfig, IncludedSiteConfigProps>,
	OmittedSiteConfigProps
> & {
	canonical: string;
	frontpage: {
		_id: Schema.Page['_id'];
		slug: Schema.Page['slug'];
	};
	navigation: {
		_id: Schema.Navigation['_id'];
		itemCount: number;
		items: {
			label: Schema.NavigationItem['text'];
			url: {
				_id: string;
				slug: string;
			};
		}[];
	};
};

const ConfigQuery = groq`*[_type == "siteConfig" && _id == "siteConfig"] {
    _id,
    "canonical": url,
    title,
    description,
    "navigation": mainNav->{
        _id,
        "itemCount": count(items),
        items[] {
            "label": text,
            "url": navigationItemUrl.internalLink->{
                _id,
                "slug": "/" + coalesce(slug.current, "")
            }
        }
    },
    frontpage->{
        _id,
        slug
    },
}[0]`;

export const site = (): Promise<GetConfigQueryResult> => {
	return client.query<GetConfigQueryResult>(ConfigQuery, {});
};
