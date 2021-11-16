import SanityClient from './client';
import * as api from './api';
export { default as groq } from 'groq';

export * from './types';
export * from './schema';

export { SanityClient, api };

export function getClient(): SanityClient {
	return new SanityClient({
		projectId: 'j05dduio',
		dataset: 'production',
		apiVersion: '2021-11-16'
	});
}
