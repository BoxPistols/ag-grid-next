import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { TableType } from './Table.types'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

// assign variables for each of the props defined in your types
const Table = ({
  rowData,
  pagination = false,
  perPage = 10,
  columnDefs,
  sortable = false,
  filter = false,
  resizable = false,
}: TableType) => {
  // This will generate a string that changes each time one of the pagination props changes
  const key = React.useMemo(() => {
    const prefix = pagination ? 'paginated' : 'not-paginated'
    return `${prefix}:${perPage}`
  }, [pagination, perPage])

  // This will use some of your props to create a default column definition for all columns
  const defaultColDef = React.useMemo(() => {
    return {
      editable: true,
      sortable: sortable,
      flex: 1,
      minWidth: 100,
      filter: filter,
      resizable: resizable,
    }
  }, [sortable, filter, resizable])

  return (
    <div className={`ag-theme-alpine`} style={{ height: 400, width: 850 }}>
      <AgGridReact
        key={key}
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={pagination}
        paginationPageSize={perPage}
        defaultColDef={defaultColDef}
      />
    </div>
  )
}

export default Table
