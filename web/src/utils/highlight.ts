import PrismJS from 'prismjs';

export type SupportedPrismJSLanguage = 'ts';

export function highlight(
	source: string,
	lang: SupportedPrismJSLanguage
): string {
	const highlighted = PrismJS.highlight(source, PrismJS.languages[lang], lang);
	return `<pre class='language-${lang}'><code>${highlighted}</code></pre>'`;
}
