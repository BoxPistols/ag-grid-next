import { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { localeJa } from '@/assets/locale.ja'

// type FilterOption =
//   | 'lessThan'
//   | 'greaterThan'
//   | 'equals'
//   | 'lessThanOrEqual'
//   | 'greaterThanOrEqual'
//   | 'inRange'

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
  const [rowData, setRowData] = useState<CountryData[]>([]) // データ
  const [isDataLoaded, setIsDataLoaded] = useState(false) // データが取得されているかどうか

  useEffect(() => {
    const fetchData = async () => {
      // データを取得
      try {
        const response = await fetch('https://api.covid19api.com/summary') // apiのURLを指定
        const data = await response.json() // JSON responseをJSONに変換
        setRowData(data.Countries) // データをセット
        setIsDataLoaded(true) // データが取得されているかどうか
        console.log('get data!!')
      } catch (error) {
        // errorが発生した場合
        console.log('get data error...  ' + error)
      }
    }
    fetchData() // データを取得
  }, []) // データを取得した際に実行

  // const numberFilterParams = (type: FilterOption) => { // agNumberColumnFilterのパラメータ
  //   return {
  //     filterOptions: [type],
  //     suppressAndOrCondition: true,
  //     placeholder: '値を入力',
  //     comparatorTexts: {
  //       lessThan: '!!!未満',
  //       greaterThan: 'より大きい',
  //       equals: '等しい',
  //       lessThanOrEqual: '以下',
  //       greaterThanOrEqual: '以上',
  //       inRange: '範囲内',
  //     },
  //   }
  // }

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
      {isDataLoaded && ( // if data is loaded
        <div
          className="ag-theme-alpine"
          style={{ height: '700px', width: '100%' }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            localeText={localeText}
            // add
            sideBar={true}
            enableCharts={true}
            enableRangeSelection={true}
            rowGroupPanelShow={'always'}
            gridOptions={gridOptions}
          />
        </div>
      )}
    </>
  )
}

export default CovidData
