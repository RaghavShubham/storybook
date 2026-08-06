import type { Meta, StoryObj } from '@storybook/vue3';

import SlotCard from './SlotCard.vue';

const meta = {
  component: SlotCard,
  title: 'Forms/slots',
} satisfies Meta<typeof SlotCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StringSlots = {
  args: {
    default: 'Body copy',
    header: 'Header copy',
  },
} satisfies Story;
