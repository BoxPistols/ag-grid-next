import type { Meta, StoryObj } from '@storybook/react'
import DragTable from './DragTable'

const meta: Meta<typeof DragTable> = {
  title: 'Stories/AgGrid/DataImport/DragTable',
  component: DragTable,
  //   tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof DragTable>

export const DataImport: Story = {
  args: {},
}
