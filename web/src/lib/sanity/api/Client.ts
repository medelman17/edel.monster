import SanityClient from '../client';

let client: SanityClient;

export function getClient(): SanityClient {
	if (!client) {
		client = new SanityClient({
			projectId: 'j05dduio',
			dataset: 'production',
			apiVersion: '2021-11-16'
		});
	}
	return client;
}
