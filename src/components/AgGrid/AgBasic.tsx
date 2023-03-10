// React
import { useState, useEffect } from "react"
// AgGrid
import "ag-grid-enterprise"
import { AgGridReact } from "ag-grid-react"
import { localeJa } from "@/assets/locale.ja"

export const AgBasic = () => {
  const [rowData, setRowData] = useState([])

  const [columnDefs, setColumnDefs] = useState([
    { field: "make", filter: true, width: 150, rowGroup: true },
    { field: "model", sortable: true, filter: true, width: 150 },
    { field: "price", sortable: true, minWidth: 150 },
  ])

  //  PageNatoin
  const pagination = true
  const paginationPageSize = 10

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.ag-grid.com/example-assets/row-data.json"
      )
      const data = await response.json()
      setRowData(data)
    }
    fetchData()
  }, [])
  /** or
  fetch("https://www.ag-grid.com/example-assets/row-data.json")
    .then((result) => result.json())
    .then((rowData) => setRowData(rowData))
 */

  return (
    <>
      <div style={{ height: 400, width: 600 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          animateRows={true} // 並べ替え時の行入れ替えアニメーション
          rowSelection="multiple" // 行のクリック選択を許可
        />
      </div>
    </>
  )
}
