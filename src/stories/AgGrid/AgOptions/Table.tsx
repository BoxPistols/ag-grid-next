import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { TableType } from './Table.types'

// import 'ag-grid-community/styles/ag-grid.css'
// import 'ag-grid-community/styles/ag-theme-alpine.css'

// タイプで定義されているPropsに変数を割り当てる
const Table = ({
  pagination = false,
  perPage = 10,
  sortable = false,
  filter = false,
  resizable = false,
  rowData,
  columnDefs,
}: TableType) => {
  // これにより、ページネーションプロパティが変更されるたびに変化する文字列が生成されます
  const key = React.useMemo(() => {
    const prefix = pagination ? 'paginated' : 'not-paginated'
    return `${prefix}:${perPage}`
  }, [pagination, perPage])

  // Propsを使用して、すべての列のデフォルトの列定義が作成されます
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
