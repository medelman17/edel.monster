import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Article
 *
 *
 */
export interface Article extends SanityDocument {
  _type: "article";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Publication date — `date`
   *
   *
   */
  publishDate?: string;

  /**
   * Categories — `array`
   *
   *
   */
  category?: Array<SanityKeyedReference<Category>>;

  /**
   * Summary — `text`
   *
   *
   */
  summary?: string;

  /**
   * Authors — `array`
   *
   *
   */
  authors?: Array<SanityKeyedReference<Person>>;

  /**
   * Content — `portableText`
   *
   *
   */
  content?: PortableText;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Navigation
 *
 *
 */
export interface Navigation extends SanityDocument {
  _type: "navigation";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Navigation Id — `slug`
   *
   *
   */
  navId?: { _type: "navId"; current: string };

  /**
   * Navigation Items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<NavigationItem>>;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Description — `text`
   *
   * This description populates meta-tags on the webpage
   */
  description?: string;

  /**
   * Open Graph Image — `image`
   *
   * Image for sharing previews on Facebook, Twitter etc.
   */
  openGraphImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Body — `portableText`
   *
   *
   */
  body?: PortableText;
}

/**
 * Person
 *
 *
 */
export interface Person extends SanityDocument {
  _type: "person";

  /**
   * First Name — `string`
   *
   *
   */
  firstName?: string;

  /**
   * Last Name — `string`
   *
   *
   */
  lastName?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `portableText`
   *
   *
   */
  bio?: PortableText;

  /**
   * Author? — `boolean`
   *
   *
   */
  author?: boolean;
}

/**
 * Site Settings
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "siteConfig";

  /**
   * Site title — `string`
   *
   *
   */
  title?: string;

  /**
   * URL — `url`
   *
   * The main site url. Used to create canonical url
   */
  url?: string;

  /**
   * Site Description — `text`
   *
   *
   */
  description?: string;

  /**
   * frontpage — `reference`
   *
   * Choose page to be the frontpage
   */
  frontpage?: SanityReference<Page>;

  /**
   * Main navigation — `reference`
   *
   * Select menu for main navigation
   */
  mainNav?: SanityReference<Navigation>;
}

export type Break = {
  _type: "break";
  /**
   * style — `string`
   *
   *
   */
  style?: "break" | "readMore";
};

export type Faq = {
  _type: "faq";
  /**
   * Question — `string`
   *
   *
   */
  question?: string;

  /**
   * Answer — `text`
   *
   *
   */
  answer?: string;
};

export type Hero = {
  _type: "hero";
  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Tagline — `string`
   *
   *
   */
  tagline?: string;
};

export type Link = {
  _type: "link";
  /**
   * Internal Link — `reference`
   *
   * Select pages for navigation
   */
  internalLink?: SanityReference<Page | Article | Person>;

  /**
   * External URL — `url`
   *
   * Use fully qualified URLS for external link
   */
  externalUrl?: string;
};

export type NavigationItem = {
  _type: "navigationItem";
  /**
   * Navigation Text — `string`
   *
   *
   */
  text?: string;

  /**
   * Navigation Item URL — `link`
   *
   *
   */
  navigationItemUrl?: Link;
};

export type PortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyedReference<Article>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alt text — `string`
       *
       * Alternative text for screen readers.
       */
      alt?: string;
    }>
  | SanityKeyed<Quote>
  | SanityKeyed<Break>
>;

export type Quote = {
  _type: "quote";
  /**
   * Text — `text`
   *
   *
   */
  text?: string;

  /**
   * Author — `string`
   *
   *
   */
  author?: string;

  /**
   * URL — `url`
   *
   * Source on the web
   */
  url?: string;
};

export type Documents =
  | Article
  | Category
  | Navigation
  | Page
  | Person
  | SiteConfig;
