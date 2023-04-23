import { Meta, StoryObj } from '@storybook/react'
import IconList from './IconList'

const meta: Meta<typeof IconList> = {
  title: 'Stories/IconList',
  component: IconList,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof IconList>

export const Default = () => <IconList />
