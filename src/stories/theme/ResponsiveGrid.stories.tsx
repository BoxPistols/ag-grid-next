import { Meta } from '@storybook/react'
import { ResponsiveGrid } from './ResponsiveGrid'
import Typography from '@mui/material/Typography'

const ResponsiveGridStory: Meta = {
  title: 'Catalog/Grid',
  component: ResponsiveGrid,
  tags: ['autodocs'],
  // argTypes: {},
  argTypes: {
    spacing: {
      options: [1, 2, 3, 4, 8, 16, 24, 32],
      control: {
        type: 'select',
      },
      defaultValue: 4,
    },
  },
}

export default ResponsiveGridStory

export const Default = (args: any) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Grid パターン レスポンシブ例
      </Typography>
      <ResponsiveGrid {...args} />
    </>
  )
}
