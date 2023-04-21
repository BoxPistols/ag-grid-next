import React, { useEffect, useCallback, useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'

import { ColDef, GridReadyEvent, StatusPanelDef } from 'ag-grid-community'
import { IOlympicData } from './interfaces'
// import { localeEn } from '@/src/assets/locale.en'
// import { localeJa } from '@/src/assets/locale.ja'
import { localeJa } from '../../assets/locale.ja'
// Lang Storybook
// TODO: 日本語と英語を切替えられるようにする
// const localeText = { ...localeEn, ...localeJa }
const localeText = { ...localeJa }

export const AgBasic = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), [])
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), [])
  const [rowData, setRowData] = useState<IOlympicData[]>()
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    // {
    //   headerName: "#",
    //   cellRenderer: null,
    // },
    {
      field: 'athlete',
      filterParams: { buttons: ['clear', 'reset', 'apply'] },
    },
    {
      field: 'age',
      filterParams: { buttons: ['apply', 'cancel'] },
      enablePivot: true,
      filter: 'agNumberColumnFilter',
    },
    { field: 'country', enableRowGroup: true },
    { field: 'year', filter: 'agNumberColumnFilter' },
    { field: 'date' },
    {
      field: 'sport',
      filter: 'agMultiColumnFilter',
      filterParams: {
        filters: [
          {
            filter: 'agTextColumnFilter',
            display: 'accordion',
          },
          {
            filter: 'agSetColumnFilter',
            display: 'accordion',
          },
        ],
      },
    },
    { field: 'gold', enableValue: true },
    { field: 'silver', enableValue: true },
    { field: 'bronze', enableValue: true },
    { field: 'total', enableValue: true },
  ])
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    }
  }, [])
  const statusBar = useMemo<{
    statusPanels: StatusPanelDef[]
  }>(() => {
    return {
      statusPanels: [
        { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
        { statusPanel: 'agAggregationComponent' },
      ],
    }
  }, [])

  const onGridReady = useCallback(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data: IOlympicData[]) => setRowData(data))
  }, [])

  return (
    <div style={containerStyle}>
      <div
        className="ag-theme-alpine"
        style={{ height: '600px', width: '100%' }}
      >
        <AgGridReact<IOlympicData>
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          localeText={localeText} // lang
          sideBar={true}
          statusBar={statusBar}
          rowGroupPanelShow={'always'}
          pagination={true}
          paginationPageSize={500}
          enableRangeSelection={true}
          enableCharts={true}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  )
}
