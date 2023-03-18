import { useMemo, useState, useEffect } from "react"
import { AgGridReact } from "ag-grid-react"
// import "ag-grid-community/dist/styles/ag-grid.css"
// import "ag-grid-community/dist/styles/ag-theme-alpine.css"

interface CountryData {
  Country: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
}

import { localeJa } from "@/assets/locale.ja"

const CovidData: React.FC = () => {
  const [rowData, setRowData] = useState<CountryData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.covid19api.com/summary")
      const data = await response.json()
      setRowData(data.Countries)
    }
    fetchData()
  }, [])

  const columnDefs = [
    { headerName: "Country", field: "Country" },
    { headerName: "New Confirmed", field: "NewConfirmed" },
    { headerName: "Total Confirmed", field: "TotalConfirmed" },
    { headerName: "New Deaths", field: "NewDeaths" },
    { headerName: "Total Deaths", field: "TotalDeaths" },
    { headerName: "New Recovered", field: "NewRecovered" },
    { headerName: "Total Recovered", field: "TotalRecovered" },
  ]

    const localeText = useMemo<{
      [key: string]: string
    }>(() => {
      return localeJa
    }, [])

  return (
    <div className="ag-theme-alpine" style={{ height: "400px", width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={true}
        paginationPageSize={20}
        localeText={localeText}
      />
    </div>
  )
}

export default CovidData
