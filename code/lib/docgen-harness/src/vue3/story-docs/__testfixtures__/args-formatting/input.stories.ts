import type { Meta, StoryObj } from '@storybook/vue3';

import ArgsFormatting from './ArgsFormatting.vue';

const meta = {
  component: ArgsFormatting,
  title: 'Forms/args-formatting',
  args: {
    active: true,
  },
} satisfies Meta<typeof ArgsFormatting>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    count: 2,
    disabled: false,
    formatter: (value: number) => `#${value}`,
    label: 'Format me',
    options: {
      density: 'compact',
      flags: ['a', 'b'],
    },
  },
} satisfies Story;
