// src/stories/theme/ResponsiveGrid.stories.tsx
import { Meta } from '@storybook/react'
import ResponsiveGrid from './ResponsiveGrid'

const ResponsiveGridStory: Meta = {
  title: 'Catalog/Grid',
  component: ResponsiveGrid,
  tags: ['autodocs'],
  argTypes: {},
}

export default ResponsiveGridStory

export const Default = () => <ResponsiveGrid />
