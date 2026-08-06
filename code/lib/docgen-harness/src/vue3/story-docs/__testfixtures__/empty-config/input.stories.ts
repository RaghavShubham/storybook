import type { Meta, StoryObj } from '@storybook/vue3';

import EmptyConfig from './EmptyConfig.vue';

const meta = {
  component: EmptyConfig,
  title: 'Forms/empty-config',
  args: {
    label: 'Meta label',
  },
} satisfies Meta<typeof EmptyConfig>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty = {} satisfies Story;
