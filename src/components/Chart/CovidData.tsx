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
  gridOptions: number
}

const CovidData: React.FC = () => {
  const [rowData, setRowData] = useState<CountryData[]>([])
  // const [filter, setFilter] = useState<{ [key: string]: string }>({})

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
        // `${type}OrGreaterThan`,
        // `${type}OrLessThan`,
      ],
      suppressAndOrCondition: true,
      // フィルターのプレースホルダーを日本語にする
      placeholder: "値を入力",
      // プルダウンメニューのラベルを日本語にする
      comparatorTexts: {
        lessThan: "!!!未満",
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
      // filterParams: numberFilterParams("lessThanOrEqual"),
      sortable: true,
      suppressAutoSize: true,
    },
    {
      headerName: "累計感染者数",
      field: "TotalConfirmed",
      filter: "agNumberColumnFilter",
      sortable: true,
    },
    {
      headerName: "新規死亡者数",
      filter: "agNumberColumnFilter",
      field: "NewDeaths",
      sortable: true,
    },
    {
      headerName: "累計死亡者数",
      filter: "agNumberColumnFilter",
      field: "TotalDeaths",
      sortable: true,
    },
    {
      headerName: "新規回復者数",
      filter: "agNumberColumnFilter",
      field: "NewRecovered",
      sortable: true,
    },
    {
      headerName: "累計回復者数",
      filter: "agNumberColumnFilter",
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

  // const onGridReady = (params: { api: { sizeColumnsToFit: () => void } }) => {
  //   params.api.sizeColumnsToFit() // 全列の幅を自動調整
  // }

  const gridOptions = {
    maxColWidth: 200, // 最大列幅を 200 に設定
    autoSizePadding: 8, // デフォルトのパディング量を 8 に設定
  }
  return (
    <AgGridReact
      columnDefs={columnDefs}
      rowData={rowData}
      pagination={true}
      paginationPageSize={20}
      defaultColDef={defaultColDef}
      localeText={localeText}
      // add
      sideBar={true}
      rowGroupPanelShow={"always"}
      enableRangeSelection={true}
      enableCharts={true}
      // statusBar={statusBar}
      // onGridReady={onGridReady}
      gridOptions={gridOptions}
    />
  )
}

export default CovidData
