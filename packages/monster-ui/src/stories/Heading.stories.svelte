<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Heading from '../lib/components/Heading.svelte';
</script>

<Meta title="Heading" component={Heading} parameters={{ jest: ['Heading.test.ts'] }} />

<Template let:args>
	<Heading {...args}>Can you make the font a bit bigger and change it to times new roman?</Heading>
	<p>
		Jazz it up a little bit make the picture of the cupcake look delicious make the purple more
		well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby
		blue because the purple alone looks too fancy okay can you put a cute quote on the right side of
		the site? oh no it looks messed up! i think we need to start from scratch.
	</p>
</Template>

<Story name="H1" args={{ as: 'h1' }} />

<Story name="H2" args={{ as: 'h2' }} />

<Story name="H3" args={{ as: 'h3' }} />

<Story name="H4" args={{ as: 'h4' }} />

<Story name="H5" args={{ as: 'h5' }} />

<Story name="H6" args={{ as: 'h6' }} />
