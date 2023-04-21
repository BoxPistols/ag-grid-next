import { Meta } from '@storybook/react'
import { ResponsiveGrid } from './ResponsiveGrid'
import Typography from '@mui/material/Typography'

const ResponsiveGridStory: Meta = {
  title: 'Catalog/Grid',
  component: ResponsiveGrid,
  argTypes: {
    spacing: {
      options: [1, 2, 3, 4, 8, 16, 24, 32],
      control: { type: 'select' },
      defaultValue: 4,
      table: { category: 'gap' },
    },
    xs: {
      options: [1, 2, 3, 4, 6, 12],
      control: { type: 'select' },
      defaultValue: 12,
      table: { category: 'breakpoint' },
    },
    sm: {
      options: [1, 2, 3, 4, 6, 12],
      control: { type: 'select' },
      defaultValue: 6,
      table: { category: 'breakpoint' },
    },
    md: {
      options: [1, 2, 3, 4, 6, 12],
      control: { type: 'select' },
      defaultValue: 4,
      table: { category: 'breakpoint' },
    },
    lg: {
      options: [1, 2, 3, 4, 6, 12],
      control: { type: 'select' },
      defaultValue: 3,
      table: { category: 'breakpoint' },
    },
    xl: {
      options: [1, 2, 3, 4, 6, 12],
      control: { type: 'select' },
      defaultValue: 2,
      table: { category: 'breakpoint' },
    },
  },
  argTypesOrder: ['spacing', 'xs', 'sm', 'md', 'lg', 'xl'],
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
