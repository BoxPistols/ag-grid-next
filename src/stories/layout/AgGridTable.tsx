// AgGridTable.tsx
import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

type Props = {
  columnDefs: any[]
  rowData: any[]
}

const AgGridTable: React.FC<Props> = ({ columnDefs, rowData }) => {
  return (
    <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  )
}

export default AgGridTable
