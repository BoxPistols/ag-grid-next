import React from 'react'

import { Container, Box, Divider, Typography } from '@mui/material'

import CsvUploader from '@/src/components/AgGrid/FileUpload/CsvUploader'
import DragAndDropUploader from '@/src/components/AgGrid/FileUpload/DragAndDropUploader'
import DragTable from '@/src/components/AgGrid/FileUpload/DragTable'
import ApiTextFieldUpload from '@/src/components/AgGrid/FileUpload/ApiTextFieldUpload'

const FileUpload = () => {
  return (
    <>
      <Container sx={{ maxWidth: '1280px' }}>
        <Box sx={{ mb: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            ファイル選択CSVファイルアップロード
          </Typography>
          <CsvUploader />
        </Box>

        <Divider sx={{ mt: 1 }} />

        <Box sx={{ mb: 4, mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Drag&Dropエリア CSVファイルアップロード
          </Typography>
          <DragAndDropUploader />
        </Box>

        <Divider sx={{ mt: 1 }} />

        <Box sx={{ mb: 4, mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Tableダイレクト Drag&Drop CSVファイルアップロード
          </Typography>
          <DragTable />
        </Box>

        <Divider sx={{ mt: 1 }} />

        <Box sx={{ mb: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Get API to AgGrid
          </Typography>
          <ApiTextFieldUpload />
        </Box>

        <Divider sx={{ mt: 1 }} />
      </Container>
    </>
  )
}

export default FileUpload
