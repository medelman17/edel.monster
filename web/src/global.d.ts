/// <reference types="@sveltejs/kit" />
type EventList = import('./types/events').Events;
declare namespace svelte.JSX {
	type EventHandler<E = Event, T = HTMLElement> = (
		event: E & { target: EventTarget & T }
	) => any;

	type CustomEventHandler<T, D = any> = EventHandler<CustomEvent<D>, T>;
	type HTMLAttrs<T> = {
		[key in keyof EventList as `on${key}`]?: CustomEventHandler<
			T,
			EventList[key]
		>;
	};
	interface HTMLAttributes<T> extends HTMLAttrs<T> {}
}
