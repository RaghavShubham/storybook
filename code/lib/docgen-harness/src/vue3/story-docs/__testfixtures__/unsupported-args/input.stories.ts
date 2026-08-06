import type { Meta, StoryObj } from '@storybook/vue3';

import UnsupportedArgs from './UnsupportedArgs.vue';

const sharedArgs = { count: 1 };
const sharedLabel = 'Shared';

const meta = {
  component: UnsupportedArgs,
  title: 'Forms/unsupported-args',
} satisfies Meta<typeof UnsupportedArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IdentifierArg = {
  args: {
    label: sharedLabel,
  },
} satisfies Story;

export const SpreadArg = {
  args: {
    ...sharedArgs,
    label: 'Spread',
  },
} satisfies Story;
