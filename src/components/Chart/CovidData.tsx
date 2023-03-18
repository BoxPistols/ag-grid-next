import { useMemo, useState, useEffect } from "react"
import { AgGridReact } from "ag-grid-react"
import { localeJa } from "@/assets/locale.ja"

interface CountryData {
  Country: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
}

const CovidData: React.FC = () => {
  const [rowData, setRowData] = useState<CountryData[]>([])
  const [filter, setFilter] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.covid19api.com/summary")
      const data = await response.json()
      setRowData(data.Countries)
    }
    fetchData()
  }, [])

  const numberFilterParams = (type: string) => {
    return {
      filterOptions: [
        "lessThan",
        "greaterThan",
        "equals",
        `${type}OrGreaterThan`,
        `${type}OrLessThan`,
      ],
      suppressAndOrCondition: true,
      // フィルターのプレースホルダーを日本語にする
      placeholder: "値を入力",
      // プルダウンメニューのラベルを日本語にする
      comparatorTexts: {
        lessThan: "未満",
        greaterThan: "より大きい",
        equals: "等しい",
        lessThanOrEqual: "以下",
        greaterThanOrEqual: "以上",
        inRange: "範囲内",
      },
    }
  }

  const columnDefs = [
    { headerName: "国名", field: "Country" },
    {
      headerName: "新規感染者数",
      field: "NewConfirmed",
      filter: "agNumberColumnFilter",
      filterParams: numberFilterParams("lessThanOrEqual"),
      sortable: true,
    },
    {
      headerName: "累計感染者数",
      field: "TotalConfirmed",
      filter: "agNumberColumnFilter",
      filterParams: numberFilterParams("totalConfirmed"),
      sortable: true,
    },
    {
      headerName: "新規死亡者数",
      field: "NewDeaths",
      sortable: true,
    },
    {
      headerName: "累計死亡者数",
      field: "TotalDeaths",
      sortable: true,
    },
    {
      headerName: "新規回復者数",
      field: "NewRecovered",
      sortable: true,
    },
    {
      headerName: "累計回復者数",
      field: "TotalRecovered",
      sortable: true,
    },
  ]

  const defaultColDef = {
    filter: true,
  }

  const localeText = useMemo<{ [key: string]: string }>(() => {
    return localeJa
  }, [])

  return (
    <div className="ag-theme-alpine" style={{ height: "400px", width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={true}
        paginationPageSize={20}
        defaultColDef={defaultColDef}
        localeText={localeText}
      />
    </div>
  )
}

export default CovidData
