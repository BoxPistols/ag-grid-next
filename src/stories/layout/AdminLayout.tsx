// AdminLayout.tsx
import React from 'react'
import { Box } from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

const AdminLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Content />
      </Box>
    </Box>
  )
}

export default AdminLayout
