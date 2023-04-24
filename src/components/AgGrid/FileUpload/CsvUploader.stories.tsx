import type { Meta, StoryObj } from '@storybook/react'

import CsvUploader from './CsvUploader'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CsvUploader> = {
  title: 'Stories/AgGrid/DataImport/CsvUploader',
  component: CsvUploader,
  //   tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof CsvUploader>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DataImport: Story = {
  args: {},
}
