import { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { GridApi } from 'ag-grid-community'
import { GridReadyEvent } from 'ag-grid-community'

import TextField from '@mui/material/TextField'
import { localeJa } from '@/assets/locale.ja'
import { Autocomplete } from '@mui/material'

interface CountryData {
  Country: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
}

const CovidData = (): JSX.Element => {
  const [rowData, setRowData] = useState<CountryData[]>([])
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  // ----- for MUI filter -----
  const [gridApi, setGridApi] = useState<GridApi | null>(null)
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [allCountries, setAllCountries] = useState<string[]>([])

  const gridApiRef = useRef<GridApi | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.covid19api.com/summary')
        const data = await response.json()
        setRowData(data.Countries)
        setIsDataLoaded(true)
        setAllCountries(
          //複数の国を取得
          data.Countries.map((country: CountryData) => country.Country)
        )
        console.log('get data!!')
      } catch (error) {
        console.log('get data error... ' + error)
      }
    }
    fetchData()
  }, [])

  // ----- for MUI filter -----
  const onGridReady = (event: GridReadyEvent) => {
    setGridApi(event.api)
  }
  const onFirstDataRendered = () => {
    if (gridApi) {
      const filterModel = {
        Country: {
          filterType: 'set',
          values: selectedCountries,
        },
      }
      gridApi.setFilterModel(filterModel)
    }
  }
  const filterByCountries = (_: any, selectedCountries: string[]) => {
    setSelectedCountries(selectedCountries)
    if (gridApi) {
      const filterModel = {
        Country: {
          filterType: 'set',
          values: selectedCountries,
        },
      }
      gridApi.setFilterModel(filterModel)
    }
  }

  const columnDefs = [
    // columnDefs
    { headerName: '国名', field: 'Country' },
    {
      headerName: '新規感染者数',
      field: 'NewConfirmed',
      filter: 'agNumberColumnFilter',
      sortable: true,
      suppressAutoSize: true,
    },
    {
      headerName: '累計感染者数',
      field: 'TotalConfirmed',
      filter: 'agNumberColumnFilter',
      sortable: true,
    },
    {
      headerName: '新規死亡者数',
      field: 'NewDeaths',
      filter: 'agNumberColumnFilter',
      sortable: true,
    },
    {
      headerName: '累計死亡者数',
      field: 'TotalDeaths',
      filter: 'agNumberColumnFilter',
      sortable: true,
    },
    {
      headerName: '新規回復者数',
      field: 'NewRecovered',
      filter: 'agNumberColumnFilter',
      sortable: true,
    },
    {
      headerName: '累計回復者数',
      field: 'TotalRecovered',
      filter: 'agNumberColumnFilter',
      sortable: true,
    },
  ]

  const defaultColDef = {
    // defaultColDef
    filter: true,
  }

  const localeText = {
    // localeText
    ...localeJa,
  }

  const gridOptions = {
    // gridOptions
    maxColWidth: 200, // maxColumnWidth
    autoSizePadding: 8, // autoSizePadding
  }

  return (
    <>
      {/* // ----- for MUI filter ----- */}
      <Autocomplete
        multiple
        options={allCountries}
        onChange={filterByCountries}
        renderInput={(params) => (
          <TextField
            {...params}
            label="国名で検索"
            variant="outlined"
            style={{ marginBottom: '16px' }}
          />
        )}
      />
      {isDataLoaded && (
        <div
          className="ag-theme-alpine"
          style={{ height: '700px', width: '100%' }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            localeText={localeText}
            sideBar={true}
            enableCharts={true}
            enableRangeSelection={true}
            rowGroupPanelShow={'always'}
            gridOptions={gridOptions}
            // filter
            onGridReady={onGridReady}
            onFirstDataRendered={onFirstDataRendered}
          />
        </div>
      )}
    </>
  )
}

export default CovidData

/** Docs
 与えられたコードはTypeScriptで書かれており、React、Ag-Grid、Material UIコンポーネントを利用して、APIからフェッチした国別のCOVID-19データのテーブルを表示しています。このコードでは、「useEffect」フックを使ってデータを取得し、「useState」を使って取得したデータの状態を「rowData」にセットしています。

国名は、Material UIのTextFieldコンポーネントを使用した検索バーでフィルタリングすることができます。

Ag-Grid Reactコンポーネントは、NewConfirmed、TotalConfirmed、NewDeaths、TotalDeaths、NewRecovered、TotalRecoveredといった複数の列を持つテーブルでデータを表示するために使用されています。テーブルのヘッダーや、ソートやフィルタリングのオプションなどの構成は、columnDefsとdefaultColDefプロパティを使用して変更することができます。

コードでは、useStateを使用してデータの状態とisDataLoadedを管理し、useStateを使用してgridApiとcolumnApiの値も設定しています。Ag-GridReactコンポーネントは、クラス名「ag-theme-alpine」を持つdivの中にラップされ、isDataLoadedを使用して条件付きでレンダリングされています。

コードはきれいなコーディングスタイルに従っており、大きなリファクタリングは必要ありません。しかし、const変数内の各プロパティ、例えばcolumnDefsやgridOptionsについては、より読みやすくするために、より説明的なコメントを書くことができるでしょう。
*/
