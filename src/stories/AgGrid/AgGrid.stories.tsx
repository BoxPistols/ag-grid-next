import type { Meta, StoryObj } from '@storybook/react'
// FIXME: lang設定
import { AgBasic } from '../../../src/components/AgGrid/AgBasic'
import CovidData from '../../../src/components/AgGrid/CovidData'
import Typography from '@mui/material/Typography'
const meta: Meta<typeof AgBasic> = {
  title: 'Stories/AgGrid/AsyncAPI',
  component: AgBasic,
  // tags: ['autodocs'],
  tags: [],
  argTypes: {},
}

type Story = StoryObj<typeof AgBasic>
export default meta

const containerStyle = { width: '100%', height: '600px' }
const gridStyle = { height: '100%', width: '100%' }

export const Default = {
  render: () => {
    return (
      <div>
        <div
          style={{ ...gridStyle, padding: '0px 24px' }}
          className="ag-theme-alpine"
        >
          <Typography variant="h2" color="initial" mt={4} gutterBottom>
            AgGrid Table (covid19api)
          </Typography>
          <CovidData />
        </div>
        <div
          style={{ ...gridStyle, padding: '0px 24px' }}
          className="ag-theme-alpine"
        >
          <Typography variant="h2" color="initial" mt={4} gutterBottom>
            AgGrid Table (olympic-winners)
          </Typography>
          <AgBasic />
        </div>
      </div>
    )
  },
}
