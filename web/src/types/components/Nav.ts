import type { page } from '$app/stores';
export type NavSegment = 'blog' | 'about' | 'cats' | 'contact' | 'root';

export interface NavProps {
	segment: NavSegment;
	page: typeof page;
	logo?: string;
}
