import type { Meta, StoryObj } from '@storybook/react'
import Table from './Table'
import { TableType } from './Table.types'
import { Typography } from '@mui/material'

// define sane defaults that can be spread as a base for every story
const defaultArgs: TableType = {
  pagination: true,
  perPage: 15,
  rowData: [],
  columnDefs: [],
  filter: false,
  resizable: false,
  sortable: false,
}

const meta: Meta<typeof Table> = {
  title: 'Stories/AgGrid/TableTest',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Table>

// Simple
export const SimpleTable = {
  args: {
    ...defaultArgs,
    rowData: [
      { make: 'Toyota', model: 'Celica', price: 35000, type: 'sedan' },
      { make: 'Nissan', model: 'KDH', price: 32000, type: 'van' },
      { make: 'KIA', model: 'Sorento', price: 72000, type: 'jeep' },
    ],
    columnDefs: [
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
      { field: 'type' },
    ],
    sortable: true,
    resizable: true,
    filter: true,
  },
  render: (args: JSX.IntrinsicAttributes & TableType) => (
    <>
      <Typography variant="body1" color="initial">
        データ件数検証
      </Typography>
      <Table {...args} />
    </>
  ),
}

// この関数は大量のデータを生成するため、多くの行が入力されたときにテーブルがどのように動作するかを確認できます
function getData() {
  let data = []
  for (let x = 0; x < 150; x++) {
    data.push({
      make: ['Toyota', 'Nissan', 'Kia'][Math.floor(Math.random() * 3)],
      model: ['Celica', 'KDH', 'Sorento'][Math.floor(Math.random() * 3)],
      price: Math.floor(Math.random() * 100000) + 25000,
      type: ['sedan', 'van', 'jeep'][Math.floor(Math.random() * 3)],
    })
  }
  return data
}

export const AddDatas = {
  args: {
    ...defaultArgs,
    columnDefs: [
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
      { field: 'type' },
    ],
    rowData: getData(),
  },
}

// Custom UI
const carPrice = (value: number) => {
  return { color: value > 50000 ? '#FF5733' : '#00E676' }
}

export const CustomCellRender = {
  args: {
    ...defaultArgs,
    rowData: [
      { make: 'Toyota', model: 'Celica', price: 35000, type: 'sedan' },
      { make: 'Nissan', model: 'KDH', price: 32000, type: 'van' },
      { make: 'KIA', model: 'Sorento', price: 72000, type: 'jeep' },
    ],
    columnDefs: [
      { field: 'make' },
      { field: 'model' },
      {
        field: 'price',
        cellStyle: (params: any) => {
          return carPrice(params.value)
        },
      },
    ],
  },
}

// データ無し
export const NoData = {
  args: {
    ...defaultArgs,
  },
}
