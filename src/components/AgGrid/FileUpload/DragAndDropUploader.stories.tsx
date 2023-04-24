import type { Meta, StoryObj } from '@storybook/react'

import DragAndDropUploader from './DragAndDropUploader'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DragAndDropUploader> = {
  title: 'Stories/AgGrid/DataImport/DragAndDropUploader',
  component: DragAndDropUploader,
  //   tags: ['autodocs'],
  tags: [],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof DragAndDropUploader>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DragAndDropUploade: Story = {
  args: {},
}
