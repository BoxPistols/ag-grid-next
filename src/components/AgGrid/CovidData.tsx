import { useState, useEffect, useRef, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { GridApi } from 'ag-grid-community'
import { GridReadyEvent } from 'ag-grid-community'

import TextField from '@mui/material/TextField'
import { localeJa } from '../../assets/locale.ja'
import { Autocomplete } from '@mui/material'

interface PatientData {
  患者_性別: string
  退院済フラグ: string
  患者_年代: string
  都道府県名: string
  患者_接触歴の有無フラグ: string
  公表_年月日: string
  全国地方公共団体コード: string
  発症_年月日: string
  '﻿No': string
  確定_年月日: string
  患者_職業: string
}

const CovidData = (): JSX.Element => {
  const [rowData, setRowData] = useState<PatientData[]>([])
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  const [gridApi, setGridApi] = useState<GridApi | null>(null)
  const [selectedAges, setSelectedAges] = useState<string[]>([])
  const [allAges, setAllAges] = useState<string[]>([])

  // const gridApiRef = useRef<GridApi | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.data.metro.tokyo.lg.jp/v1/Covid19Patient?limit=1000'
      )
      const data = await response.json()
      setRowData(data[0])
      setIsDataLoaded(true)
      setAllAges(
        Array.from(
          new Set(data[0].map((patient: PatientData) => patient['患者_年代']))
        )
      )
      console.log('get data!!')
    } catch (error) {
      console.log('get data error... ' + error)
    }
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])

  const onGridReady = (event: GridReadyEvent) => {
    setGridApi(event.api)
  }
  const applyFilterModel = (values: string[]) => {
    if (gridApi) {
      const filterModel = {
        患者_年代: { filterType: 'set', values: selectedAges },
      }
      gridApi.setFilterModel(filterModel)
    }
  }
  const onFirstDataRendered = () => applyFilterModel

  const filterByAges = (_: any, selectedAges: string[]) => {
    setSelectedAges(selectedAges)
    if (gridApi) {
      const filterModel = {
        患者_年代: {
          filterType: 'set',
          values: selectedAges,
        },
      }
      gridApi.setFilterModel(filterModel)
    }
  }
  useEffect(() => {
    if (gridApi && selectedAges.length === 0) {
      gridApi.setFilterModel(null)
    }
  }, [gridApi, selectedAges])

  const columnDefs = [
    { headerName: '性別', field: '患者_性別' },
    { headerName: '年代', field: '患者_年代' },
    { headerName: '都道府県名', field: '都道府県名' },
    { headerName: '接触歴', field: '患者_接触歴の有無フラグ' },
    { headerName: '公表日', field: '公表_年月日' },
    { headerName: '発症日', field: '発症_年月日' },
    { headerName: '確定日', field: '確定_年月日' },
    { headerName: '職業', field: '患者_職業' },
  ]

  const defaultColDef = {
    filter: true,
  }

  const localeText = {
    ...localeJa,
  }

  const gridOptions = {
    maxColWidth: 200,
    autoSizePadding: 8,
  }

  return (
    <>
      <Autocomplete
        multiple
        options={allAges}
        onChange={filterByAges}
        renderInput={(params) => (
          <TextField
            {...params}
            label="年代で検索"
            variant="outlined"
            style={{ marginBottom: '16px' }}
          />
        )}
      />
      {isDataLoaded && (
        <div
          className="ag-theme-alpine"
          style={{ height: '600px', width: '100%' }}
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
            onGridReady={onGridReady}
            onFirstDataRendered={onFirstDataRendered}
          />
        </div>
      )}
    </>
  )
}

export default CovidData
