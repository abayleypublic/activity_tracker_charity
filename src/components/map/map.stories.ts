import type { Meta, StoryObj } from '@storybook/react'

import Map from './'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Map',
    component: Map,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Map>

export default meta
type Story = StoryObj<typeof meta>

// export const Primary: Story = {
//     args: {},
// }
