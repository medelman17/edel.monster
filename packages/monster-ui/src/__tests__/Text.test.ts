/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import Text from '../lib/components/Text.svelte';

test('should render', () => {
	const results = render(Text);
});
