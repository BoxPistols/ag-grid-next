// src/stories/theme/ColorMapping.stories.tsx
import { Meta } from '@storybook/react'
import ColorMapping from './ColorMapping'

const ColorMappingStory: Meta = {
  title: 'Catalog/ColorMapping',
  component: ColorMapping,
}

export default ColorMappingStory

export const Default = () => <ColorMapping />
