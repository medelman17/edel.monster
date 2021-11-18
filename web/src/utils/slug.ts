import slugify from '@sindresorhus/slugify';
import { SLUG_SEPARATOR } from '../../config';

export const createUrlSafeSlug = (s: string): string =>
	slugify(s, {
		customReplacements: [],
		separator: SLUG_SEPARATOR,
		decamelize: false,
		lowercase: false
	})
		.replace(/DOLLAR/g, '$')
		.replace(/DASH/g, '-');

const alphanumericRegex = /[a-zA-Z0-0]/;
const unicodeRegex = /\p{Letter}/u;

export const isNotAlphaNumericUnicode = (s: string): boolean =>
	!alphanumericRegex.test(s) && unicodeRegex.test(s);

export const makeSlugProcessor = (): ((s: string) => string) => createUrlSafeSlug;
