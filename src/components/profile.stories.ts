import type { Meta, StoryObj } from '@storybook/react'

import Profile from './profile'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Profile',
    component: Profile,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
