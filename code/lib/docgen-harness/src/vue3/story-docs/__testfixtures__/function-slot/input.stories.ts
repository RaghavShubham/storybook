import { h } from 'vue';

import type { Meta, StoryObj } from '@storybook/vue3';

import ChildButton from './ChildButton.vue';
import FunctionSlot from './FunctionSlot.vue';

const meta = {
  component: FunctionSlot,
  title: 'Forms/function-slot',
} satisfies Meta<typeof FunctionSlot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RenderedSlot = {
  args: {
    default: () => h(ChildButton, { label: 'Click me' }),
  },
} satisfies Story;
