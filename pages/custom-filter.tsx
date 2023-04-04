import { useState, useEffect, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { GridApi } from 'ag-grid-community'
import { localeJa } from '@/assets/locale.ja'

import 'ag-grid-enterprise'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

import TextField from '@mui/material/TextField'
import { Autocomplete, Box } from '@mui/material'

interface CountryData {
  Country: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
}

const Filter = (): JSX.Element => {
  const [rowData, setRowData] = useState<CountryData[]>([])
  const [gridApi, setGridApi] = useState<GridApi | null>(null)
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [allCountries, setAllCountries] = useState<string[]>([])

  const [newConfirmedFilter, setNewConfirmedFilter] = useState<{
    min: number | null
  }>({ min: null })

  const localeText = {
    ...localeJa,
  }

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://api.covid19api.com/summary')
      const data = await response.json()
      setRowData(data.Countries)
      setAllCountries(
        data.Countries.map((country: CountryData) => country.Country)
      )
    } catch (error) {
      console.log('get data error... ' + error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const onGridReady = (event: any) => {
    setGridApi(event.api)
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

  useEffect(() => {
    if (gridApi && selectedCountries.length === 0) {
      gridApi.setFilterModel(null)
    }
  }, [gridApi, selectedCountries])

  const handleNewConfirmedFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewConfirmedFilter((prevFilter) => ({
      ...prevFilter,
      [event.target.name]: event.target.value
        ? parseInt(event.target.value)
        : null,
    }))

    if (gridApi) {
      const filterModel = gridApi.getFilterModel()
      filterModel['NewConfirmed'] = {
        filterType: 'number',
        type: 'greaterThanOrEqual',
        filter: newConfirmedFilter.min,
      }
      gridApi.setFilterModel(filterModel)
    }
  }

  useEffect(() => {
    if (gridApi && newConfirmedFilter.min !== null) {
      const filterModel = gridApi.getFilterModel()
      filterModel['NewConfirmed'] = {
        filterType: 'number',
        type: 'greaterThanOrEqual',
        filter: newConfirmedFilter.min,
      }
      gridApi.setFilterModel(filterModel)
    }
  }, [gridApi, newConfirmedFilter])

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
    filter: true,
  }

  return (
    <>
      <Box p={4}>
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
        <Box>
          <TextField
            name="min"
            label="新規感染者数 (最小値)"
            type="number"
            onChange={handleNewConfirmedFilterChange}
            style={{ marginRight: '16px' }}
          />
        </Box>
        <div
          className="ag-theme-alpine"
          style={{ height: '700px', width: '100%', marginTop: '16px' }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
            localeText={localeText}
            sideBar={true}
            enableCharts={true}
            enableRangeSelection={true}
            rowGroupPanelShow={'always'}
          />
        </div>
      </Box>
    </>
  )
}

export default Filter
