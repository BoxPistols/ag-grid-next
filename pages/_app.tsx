import { useState } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/src/assets/locale.ja.js'
// import { GlobalAppBar } from '@/src/content/GlobalAppBar'
import { AppBarHeader } from '@/src/content/AppBar'
// import { Sidebar } from '@/src/content/SideBar'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/src/lib/theme'

// AgGrid
import 'ag-grid-enterprise'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)
  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <GlobalAppBar handleDrawerToggle={handleDrawerToggle} /> */}
        <AppBarHeader>
          {/* <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} /> */}
          <Component {...pageProps} />
        </AppBarHeader>
      </ThemeProvider>
    </>
  )
}
