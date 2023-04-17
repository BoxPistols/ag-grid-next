import { useState } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/assets/locale.ja.js'
import { GlobalAppBar } from '@/src/content/GlobalAppBar'
import { Sidebar } from '@/src/content/SideBar'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/src/lib/theme'

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)
  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalAppBar handleDrawerToggle={handleDrawerToggle} />
        <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
