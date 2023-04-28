import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { Input, Button, Box } from '@mui/material'

const CsvUploader = () => {
  const [file, setFile] = useState<File | null>(null)
  const [columnDefs, setColumnDefs] = useState<any[]>([])
  const [rowData, setRowData] = useState<any[]>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files
    if (fileList) setFile(fileList[0])
  }

  const handleUpload = async () => {
    if (!file) return

    const reader = new FileReader()
    reader.readAsText(file)

    reader.onload = async () => {
      const csvData = reader.result as string
      const { headers, data } = parseCsvData(csvData)
      setColumnDefs(
        headers.map((header: string) => ({ headerName: header, field: header }))
      )
      setRowData(data)
    }
  }

  const parseCsvData = (csvData: string) => {
    const rows = csvData.split('\n')
    const header = rows.shift()?.split(',') || []
    const data = rows.map((row) => {
      const rowData = row.split(',')
      return header.reduce(
        (acc, key, index) => ({ ...acc, [key]: rowData[index] }),
        {}
      )
    })

    return { headers: header, data }
  }

  // reset
  const handleReset = () => {
    setFile(null)
    setColumnDefs([])
    setRowData([])
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'rows', gap: 3 }}>
        <Input
          type="file"
          inputProps={{ accept: '.csv' }}
          onChange={handleFileChange}
        />
        <Button variant="contained" onClick={handleUpload} disabled={!file}>
          アップロード
        </Button>
        {rowData.length > 0 && (
          <Button onClick={handleReset} color="secondary" variant="outlined">
            リセット
          </Button>
        )}
      </Box>
      <div
        className="ag-theme-alpine"
        style={{ height: '500px', width: '100%' }}
      >
        <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      </div>
    </Box>
  )
}

export default CsvUploader
