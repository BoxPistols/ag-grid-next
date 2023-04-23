import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from './Table'
import { TableType } from './Table.types'

// define sane defaults that can be spread as a base for every story
const defaultArgs: TableType = {
  isDark: false,
  pagination: true,
  perPage: 15,
  rowData: [],
  columnDefs: [],
  filter: false,
  resizable: false,
  sortable: false,
}

export default {
  title: 'Ag-Grid/Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />
export const Primary = Template.bind({})

Primary.args = {
  ...defaultArgs,
  isDark: false,
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
}

const carPrice = (value: number) => {
  return { color: value > 50000 ? '#FF5733' : '#00E676' }
}

export const CustomCellRender = Template.bind({})
CustomCellRender.args = {
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
}

export const NoData = Template.bind({})
NoData.args = {
  ...defaultArgs,
}

// This function will generate lots of data, so that you can see how the table behaves when populated with many rows
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

export const LotsOfData = Template.bind({})
LotsOfData.args = {
  ...defaultArgs,
  columnDefs: [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'type' },
  ],
  rowData: getData(),
}
