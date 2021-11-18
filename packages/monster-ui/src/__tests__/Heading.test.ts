/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';
import SlotTester from '../lib/components/SlotTester.svelte';
import Heading from '../lib/components/Heading.svelte';

test('it should render slotted content', () => {
	const { getByTestId } = render(SlotTester, {
		props: { Component: Heading }
	});
	expect(() => getByTestId('slot')).not.toThrow();
});

test('it should render h1 elements by default', async () => {
	const { component } = render(Heading);

	expect(component.$$.ctx[1]).toEqual('h1');
});

test('it should render h1 elements when requeste', async () => {
	const { component } = render(Heading, { props: { as: 'h1' } });

	expect(component.$$.ctx[1]).toEqual('h1');
});

test('it should render h2 elements when requested', async () => {
	const { component } = render(Heading, { props: { as: 'h2' } });

	expect(component.$$.ctx[1]).toEqual('h2');
});

test('it should render h3 elements when requested', async () => {
	const { component } = render(Heading, { props: { as: 'h3' } });

	expect(component.$$.ctx[1]).toEqual('h3');
});

test('it should render h4 elements when requested', async () => {
	const { component } = render(Heading, { props: { as: 'h4' } });

	expect(component.$$.ctx[1]).toEqual('h4');
});

test('it should render h5 elements when requested', async () => {
	const { component } = render(Heading, { props: { as: 'h5' } });

	expect(component.$$.ctx[1]).toEqual('h5');
});

test('it should render h6 elements when requested', async () => {
	const { component } = render(Heading, { props: { as: 'h6' } });

	expect(component.$$.ctx[1]).toEqual('h6');
});
