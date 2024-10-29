import type { Meta, StoryObj } from '@storybook/react';
import { ReactLibrary } from './react-library';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ReactLibrary> = {
  component: ReactLibrary,
  title: 'ReactLibrary',
};
export default meta;
type Story = StoryObj<typeof ReactLibrary>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ReactLibrary!/gi)).toBeTruthy();
  },
};
