import { Meta, StoryObj } from '@storybook/react'
import IconList from './IconList'

// const IconListStory: Meta = {
// }

const meta: Meta<typeof IconList> = {
  title: 'Mui/IconList',
  component: IconList,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof IconList>

// export default IconListStory

export const Default = () => <IconList />
