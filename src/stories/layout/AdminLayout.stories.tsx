import AdminLayout from './AdminLayout'
import { Story, Meta } from '@storybook/react'

type AdminLayoutProps = React.ComponentProps<typeof AdminLayout>

export const Template: Story<AdminLayoutProps> = (args) => (
  <AdminLayout {...args} />
)

const defaultArgs = {
  numberOfCards: 6,
  numberOfColumns: 4,
}

Template.args = defaultArgs

Template.parameters = {
  controls: { expanded: true },
}

export default {
  title: 'Admin/AdminLayout',
  component: Template,
  argTypes: {
    numberOfCards: { control: { type: 'range', min: 3, max: 12, step: 1 } },
    numberOfColumns: { control: { type: 'range', min: 1, max: 10, step: 1 } },
  },
} as Meta
