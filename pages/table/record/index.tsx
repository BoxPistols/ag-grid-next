import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'
import {
  // Tooltip,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  CircularProgress,
  Container,
} from '@mui/material'
// import 'ag-grid-community/styles/ag-grid.css'
// import 'ag-grid-community/styles/ag-theme-alpine.css'

import CellWithTooltip from './CellWithTooltip'

const PickUpRecortdTable = () => {
  // グリッドAPIへの参照
  const gridRef = useRef<AgGridReact>(null)
  // 表示する行データ
  const [rowData, setRowData] = useState<any[]>([])
  // 選択された行データ
  const [selectedRows, setSelectedRows] = useState<any[]>([])

  // Dialog
  const [open, setOpen] = useState<boolean>(false)

  // カラムの共通プロパティを設定するオブジェクト
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  )

  // データの読み込み処理
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((result) => result.json())
      .then((rowData) => {
        setRowData(
          rowData.map((row: any, index: number) => ({ id: index, ...row }))
        )
      })
  }, [])

  // 選択された行が変更されたときの処理
  const onSelectionChanged = useCallback(() => {
    const selectedNodes = gridRef.current?.api.getSelectedNodes()
    const selectedData = selectedNodes?.map((node: any) => node.data)
    // selectedDataがundefinedでないことを確認してから、setSelectedRowsに渡す
    if (selectedData) {
      setSelectedRows(selectedData)
    } else {
      setSelectedRows([])
    }
  }, [])

  // 全選択の解除
  const handleButtonClicked = useCallback((_e: any) => {
    gridRef.current?.api.deselectAll()
  }, [])

  // Tip
  const [columnDefs] = useState([
    {
      headerName: '',
      field: 'checkbox',
      width: 50,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    { field: 'id', cellRendererFramework: CellWithTooltip },
    { field: 'make', filter: true, cellRendererFramework: CellWithTooltip },
    { field: 'model', filter: true, cellRendererFramework: CellWithTooltip },
    { field: 'price', cellRendererFramework: CellWithTooltip },
  ])

  return (
    <div>
      <Container sx={{ maxWidth: '1280px' }}>
        <Box sx={{ mb: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            レコード抽出イベント / Tooltip
          </Typography>
        </Box>

        {/* 上部エリア */}
        <Box display="flex" gap={2} alignItems="center" mb={1}>
          {/* Open Dialog */}
          <Box sx={{ minHeight: 4 }}>
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              size="small"
            >
              選択したレコードの
              <br />
              詳細を見る
            </Button>
          </Box>
          {/* 選択された行を表示するカード */}
          <Box display="flex" flexWrap="wrap" gap={1}>
            <Card sx={{ minWidth: 275, maxWidth: '100%' }}>
              <CardContent>
                {selectedRows.map((row, index) => (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    key={index}
                  >
                    ID: {row.id}, Make: {row.make}, Model: {row.model}, Price:{' '}
                    {row.price}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Box>
          {/* 選択解除ボタン */}
          <Box sx={{ minHeight: 4 }}>
            <Button
              variant="outlined"
              sx={{ mt: 1 }}
              onClick={handleButtonClicked}
            >
              Clear Select
            </Button>
          </Box>

          {/* Dialog */}
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth="xl"
            // sx={{ minWidth: '70vw' }}
          >
            <DialogTitle>Details</DialogTitle>
            <DialogContent
              sx={{
                background: 'rgb(254, 254, 254, 0.8)!important',
              }}
            >
              {selectedRows.map((row, index) => (
                <Box key={index}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    m={3}
                    gap={3}
                  >
                    <Box display="flex" flexDirection="column" gap={3}>
                      <Box>
                        <Typography variant="body1" color="text.secondary">
                          ID: {row.id}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h6" color="text.secondary">
                          Make: {row.make}
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex">
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        m={3}
                      >
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                          m={3}
                        >
                          <Box>
                            <CircularProgress
                              variant="determinate"
                              value={66}
                              // sx={{ minWidth: 60, mb: 4 }}
                            />
                          </Box>
                          <Box>
                            <Typography variant="h5" color="text.secondary">
                              Model: {row.model}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                          m={3}
                        >
                          <Box>
                            <CircularProgress
                              variant="determinate"
                              value={90}
                              // sx={{ minWidth: 60, mb: 4 }}
                            />
                          </Box>
                          <Box>
                            <Typography variant="h5" color="text.secondary">
                              Price: {row.price}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </DialogActions>
          </Dialog>
        </Box>

        {/* Ag-Gridテーブル */}
        <div
          className="ag-theme-alpine"
          style={{ width: '100vw', maxWidth: 840, height: 500 }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            animateRows={true}
            rowSelection="multiple"
            onSelectionChanged={onSelectionChanged}
          />
        </div>
      </Container>
    </div>
  )
}

export default PickUpRecortdTable
