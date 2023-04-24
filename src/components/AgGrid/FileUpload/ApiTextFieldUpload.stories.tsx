import type { Meta, StoryObj } from '@storybook/react'

import ApiTextFieldUpload from './ApiTextFieldUpload'

const meta: Meta<typeof ApiTextFieldUpload> = {
  title: 'Stories/AgGrid/DataImport/ApiTextFieldUpload',
  component: ApiTextFieldUpload,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ApiTextFieldUpload>

export const DataImport: Story = {
  args: {},
}
