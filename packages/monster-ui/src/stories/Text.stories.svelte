<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Text from '../lib/components/Text.svelte';
	import results from '../../.jest-test-results.json';
	import { withTests } from '@storybook/addon-jest';
</script>

<Meta
	title="Text"
	component={Text}
	parameters={{ jest: ['Text.test.ts'] }}
	decorators={[withTests({ results })]}
/>

<Template let:args>
	<Text {...args}>Hello again</Text>
</Template>

<Story name="H1" />
<Story name="H2" />
<Story name="H3" />
