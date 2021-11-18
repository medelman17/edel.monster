<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Heading from '../lib/components/Heading.svelte';
</script>

<Meta title="Heading" component={Heading} parameters={{ jest: ['Heading.test.ts'] }} />

<Template let:args>
	<Heading {...args}>This is a heading</Heading>
</Template>

<Story name="H1" args={{ as: 'h1' }} />

<Story name="H2" args={{ as: 'h2' }} />

<Story name="H3" args={{ as: 'h3' }} />

<Story name="H4" args={{ as: 'h4' }} />

<Story name="H5" args={{ as: 'h5' }} />

<Story name="H6" args={{ as: 'h6' }} />
