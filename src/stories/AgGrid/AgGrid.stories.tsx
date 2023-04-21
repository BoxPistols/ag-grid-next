import type { Meta, StoryObj } from '@storybook/react'
import { AgBasic } from '../../../src/components/AgGrid/AgBasic'
// FIXME: lang設定
// import CovidData from '../../../src/components/AgGrid/CovidData'
const meta: Meta<typeof AgBasic> = {
  title: 'AgGrid/Stories/AgBasic',
  component: AgBasic,
  // tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof AgBasic>
export default meta

const containerStyle = { width: '100%', height: '600px' }
const gridStyle = { height: '100%', width: '100%' }

export const Default = {
  render: () => {
    return (
      <div style={containerStyle}>
        <div style={gridStyle} className="ag-theme-alpine">
          {/* <CovidData /> */}
          <AgBasic />
        </div>
      </div>
    )
  },
}
