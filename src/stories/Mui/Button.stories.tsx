import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Button } from './Button'

export default { component: Button } as ComponentMeta<typeof Button>

export const Basic: ComponentStoryObj<typeof Button> = {
  args: {
    label: '保存する',
  },
}

export const Error: ComponentStoryObj<typeof Button> = {
  args: {
    label: 'エラー',
    color: 'error',
  },
}
