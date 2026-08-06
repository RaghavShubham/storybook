import type { Meta, StoryObj } from '@storybook/vue3';

import ModelInput from './ModelInput.vue';

const meta = {
  component: ModelInput,
  title: 'Forms/v-model',
} satisfies Meta<typeof ModelInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Bound = {
  args: {
    checked: true,
    modelValue: 'Typed text',
  },
} satisfies Story;
