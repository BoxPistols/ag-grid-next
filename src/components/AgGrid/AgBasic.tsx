import React, { useCallback, useMemo, useRef, useState } from "react"
import { render } from "react-dom"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-enterprise"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import {
  ColDef,
  ColGroupDef,
  GetLocaleTextParams,
  Grid,
  // GridOptions,
  GridReadyEvent,
  ICellRendererComp,
  ICellRendererParams,
  SideBarDef,
  StatusPanelDef,
  // applicationLocaleService,
} from "ag-grid-community"
import { IOlympicData } from "./interfaces"

// import { AG_GRID_LOCALE_EN } from "@/assets/locale.en"
import { localeJa } from "@/assets/locale.ja"
// var GridOptions = {
//   localeText: [{ localeJa }],
// }

export const AgBasic = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), [])
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), [])
  const [rowData, setRowData] = useState<IOlympicData[]>()
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    // this row just shows the row index, doesn't use any data from the row
    {
      headerName: "#",
      // cellRenderer: NodeIdRenderer,
    },
    {
      field: "athlete",
      filterParams: { buttons: ["clear", "reset", "apply"] },
    },
    {
      field: "age",
      filterParams: { buttons: ["apply", "cancel"] },
      enablePivot: true,
    },
    { field: "country", enableRowGroup: true },
    { field: "year", filter: "agNumberColumnFilter" },
    { field: "date" },
    {
      field: "sport",
      filter: "agMultiColumnFilter",
      filterParams: {
        filters: [
          {
            filter: "agTextColumnFilter",
            display: "accordion",
          },
          {
            filter: "agSetColumnFilter",
            display: "accordion",
          },
        ],
      },
    },
    { field: "gold", enableValue: true },
    { field: "silver", enableValue: true },
    { field: "bronze", enableValue: true },
    { field: "total", enableValue: true },
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
        { statusPanel: "agTotalAndFilteredRowCountComponent", align: "left" },
        { statusPanel: "agAggregationComponent" },
      ],
    }
  }, [])

  // const getLocaleText = (params: GetLocaleTextParams) => {
  //   // return [localeJa]
  //   Object.keys(localeJa).forEach(function (key) {
  //     if (key === "thousandSeparator" || key === "decimalSeparator") {
  //       return
  //     }
  //     return localeJa
  //   })
  // }
  const getLocaleText = (params: GetLocaleTextParams) => {
    params: localeJa
  }

  const localeText = useMemo<{
    [key: string]: string
  }>(() => {
    return localeJa
  }, [])

  // const getLocaleText = useCallback((params: GetLocaleTextParams) => {
  //   switch (params.key) {
  //     case "thousandSeparator":
  //       return "."
  //     case "decimalSeparator":
  //       return ","
  //     default:
  //       if (params.defaultValue) {
  //         // the &lrm; marker should not be made uppercase
  //         const val = params.defaultValue.split("&lrm;")
  //         const newVal = "A+" + val[0].toUpperCase()
  //         if (val.length > 1) {
  //           return `${newVal}&lrm;`
  //         }
  //         return newVal
  //       }
  //       return ""
  //   }
  // }, [])

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data: IOlympicData[]) => setRowData(data))
  }, [])

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact<IOlympicData>
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          sideBar={true}
          statusBar={statusBar}
          rowGroupPanelShow={"always"}
          pagination={true}
          paginationPageSize={500}
          enableRangeSelection={true}
          enableCharts={true}
          // getLocaleText={getLocaleText}
          localeText={localeText}
          onGridReady={onGridReady}
          // gridOptions={GridOptions}
        ></AgGridReact>
      </div>
    </div>
  )
}
