/* jshint esversion: 9 */

const { withInfo } = require('@storybook/addon-info');
import results from '../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
// import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

import '../static/global.css';
import '../src/app.css';

export const decorators = [withTests({ results }), withInfo];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
