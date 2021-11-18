export async function keyEvent(code: string | number) {
	return function (
		node: HTMLElement,
		callback: (e: KeyboardEvent) => void
	): { destroy: () => void } {
		node.addEventListener('keydown', handleKeydown);

		function handleKeydown(event: KeyboardEvent) {
			if (event.code === code) {
				callback.call(this, event);
			}
		}

		return {
			destroy() {
				node.removeEventListener('keydown', handleKeydown);
			}
		};
	};
}

export const enter = keyEvent(13);
