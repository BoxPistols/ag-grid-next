import { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'

interface PatientData {
  患者_性別: string
  退院済フラグ: string
  患者_年代: string
  都道府県名: string
  患者_接触歴の有無フラグ: string
  公表_年月日: string
  全国地方公共団体コード: string
  発症_年月日: string
  確定_年月日: string
  患者_職業: string
}

const CovidDataBasic: React.FC = () => {
  const [rowData, setRowData] = useState<PatientData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.data.metro.tokyo.lg.jp/v1/Covid19Patient'
      )
      const data = await response.json()
      setRowData(data[0])
    }
    fetchData()
  }, [])

  const columnDefs = [
    { headerName: '性別', field: '患者_性別' },
    { headerName: '年代', field: '患者_年代' },
    { headerName: '都道府県名', field: '都道府県名' },
    { headerName: '接触歴の有無', field: '患者_接触歴の有無フラグ' },
    { headerName: '公表日', field: '公表_年月日' },
    { headerName: '発症日', field: '発症_年月日' },
    { headerName: '確定日', field: '確定_年月日' },
    { headerName: '職業', field: '患者_職業' },
  ]

  return (
    <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={true}
        paginationPageSize={20}
      />
    </div>
  )
}

export default CovidDataBasic
