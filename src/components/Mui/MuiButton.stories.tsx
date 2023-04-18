import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './MuiButton'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Mui/MuiButton',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Default',
  },
}

export const Small: Story = {
  args: {
    variant: 'contained',
    size: 'small',
    label: 'Button',
  },
}

export const Medium: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    variant: 'contained',
    size: 'large',
    label: 'Button',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button',
  },
}

export const Contained: Story = {
  args: {
    variant: 'contained',
    label: 'Button',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Button',
  },
}

export const Error: Story = {
  args: {
    label: 'Button',
    color: 'error',
    variant: 'contained',
  },
}

// custom with sx @info: https://mui.com/system/getting-started/the-sx-prop/
export const Custom: Story = {
  args: {
    label: 'Button',
    variant: 'outlined',
    sx: {
      minWidth: 240,
      maxWidth: 480,
      color: 'dimgray',
      background: 'white',
      borderColor: 'dimgray',
      borderRadius: '3em',
      '&:hover': {
        borderColor: 'darkgray',
        background: 'lightgray',
      },
    },
  },
}
