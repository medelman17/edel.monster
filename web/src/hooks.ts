import dotenv from 'dotenv';
dotenv.config();

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }) {
	return resolve(request);
}

/**@type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
	return {};
}
