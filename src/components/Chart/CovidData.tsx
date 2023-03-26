import { useState, useEffect, useRef, useCallback } from 'react'
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

  // Data
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://api.covid19api.com/summary')
      const data = await response.json()
      setRowData(data.Countries)
      setIsDataLoaded(true)
      setAllCountries(
        data.Countries.map((country: CountryData) => country.Country)
      )
      console.log('get data!!')
    } catch (error) {
      console.log('get data error... ' + error)
    }
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])

  // ----- for MUI filter -----
  const onGridReady = (event: GridReadyEvent) => {
    setGridApi(event.api)
  }
  const applyFilterModel = (values: string[]) => {
    if (gridApi) {
      const filterModel = {
        Country: { filterType: 'set', values: selectedCountries },
      }
      gridApi.setFilterModel(filterModel)
    }
  }
  const onFirstDataRendered = () => applyFilterModel

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
  // 選択解除後、再度全表示
  useEffect(() => {
    if (gridApi && selectedCountries.length === 0) {
      gridApi.setFilterModel(null)
    }
  }, [gridApi, selectedCountries])

  const columnDefs = [
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
