export interface SlideInitProps {
	readonly isOpen?: boolean;
	readonly duration?: number;
}

export function slide(
	node: HTMLElement,
	{ isOpen, duration = 500 }: SlideInitProps = { isOpen: false, duration: 500 }
): { destroy?: () => void; update?: () => void } {
	const initialHeight = node.offsetHeight;
	node.style.height = isOpen ? 'auto' : '0';
	node.style.overflow = 'hidden';

	const animation = node.animate(
		[{ height: 0 }, { height: `${initialHeight}px` }],
		{
			duration,
			fill: 'both',
			direction: isOpen ? 'reverse' : 'normal'
		}
	);
	animation.pause();

	animation.onfinish = ({ currentTime }) => {
		if (!currentTime) {
			animation.reverse();
			animation.pause();
		}

		node.dispatchEvent(new CustomEvent('animationend'));
	};

	return {
		update: () => {
			animation.currentTime ? animation.reverse() : animation.play();
		}
	};
}

export default slide;
