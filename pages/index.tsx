import { useState, useEffect } from "react"
import { AgGridReact } from "ag-grid-react"
// css
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

const App = () => {
  const [rowData, setRowData] = useState([])

  const [columnDefs, setColumnDefs] = useState([
    { field: "make", filter: true },
    { field: "model", filter: true },
    { field: "price" },
  ])

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
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </>
  )
}

export default App
