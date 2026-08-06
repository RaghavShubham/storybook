import type { Meta, StoryObj } from '@storybook/vue3';

import DocgenUnavailable from './DocgenUnavailable.vue';

const meta = {
  component: DocgenUnavailable,
  title: 'Forms/docgen-unavailable',
} satisfies Meta<typeof DocgenUnavailable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    label: 'Fallback',
  },
} satisfies Story;
