// AdminLayout.tsx
import React from 'react'
import { Box } from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

type AdminLayoutProps = {
  numberOfCards: number
  numberOfColumns: number
}

const AdminLayout = ({ numberOfCards, numberOfColumns }: AdminLayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Content numberOfCards={numberOfCards} columnDefs={[]} rowData={[]} />
      </Box>
    </Box>
  )
}

export default AdminLayout
