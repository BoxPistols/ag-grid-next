// AdminLayout.stories.tsx
import React from 'react'
import { Meta, Story } from '@storybook/react'
import AdminLayout from './AdminLayout'

export default {
  title: 'Admin/AdminLayout',
  component: AdminLayout,
} as Meta

const Template: Story = (args) => <AdminLayout {...args} />

export const Default = Template.bind({})
Default.args = {
  header: 'ヘッダー',
  sidebar: 'サイドバー',
  content: 'コンテンツエリア',
}
