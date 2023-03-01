import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

const index = () => {
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]

  const columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }]

  return (
    <>
      {
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      }
    </>
  )
}

export default index
