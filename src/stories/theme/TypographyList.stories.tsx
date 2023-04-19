// src/stories/theme/TypographyList.stories.tsx
import { Story, Meta } from '@storybook/react'
import TypographyList from './TypographyList'

const TypographyListStory: Meta = {
  title: 'Catalog/TypographyList',
  component: TypographyList,
}

export default TypographyListStory

export const Default: Story = () => <TypographyList />
