import { AgGridReactProps } from 'ag-grid-react'

export type row = {
  make: string
  model: string
  price: number
  type?: string
}

export interface TableType {
  isDark?: boolean
  pagination?: boolean
  perPage?: number
  rowData?: Array<row>
  columnDefs?: AgGridReactProps['columnDefs']
  filter?: boolean
  sortable?: boolean
  resizable?: boolean
}
