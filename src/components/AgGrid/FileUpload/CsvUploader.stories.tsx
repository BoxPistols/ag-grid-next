import type { Meta, StoryObj } from '@storybook/react'

import CsvUploader from './CsvUploader'

const meta: Meta<typeof CsvUploader> = {
  title: 'Stories/AgGrid/DataImport/CsvUploader',
  component: CsvUploader,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <>
        <h2>ファイル選択CSVファイルアップロード</h2>
        <Story />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof CsvUploader>

export const DataImport: Story = {
  args: {},
}
