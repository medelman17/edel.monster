import '../static/global.css';
import '../src/app.css';

import results from '../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export const decorators = [withTests({ results })];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			// color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
