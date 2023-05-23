import { Box, Toolbar, Typography, IconButton } from '@mui/material'

import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'

import { AppBar } from './AppBarUtil'
import { AppBarSideNav } from './AppBarSideNav'

import theme from '../lib/theme'
import { ReactNode, useState } from 'react'

// Type
type Props = {
  children: ReactNode
}

export const AppBarHeader = ({ children }: Props) => {
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={theme.palette.primary.contrastText}
          >
            AgGrid Next Mui
          </Typography>
        </Toolbar>
      </AppBar>

      <AppBarSideNav open={open} />

      <Box component="main" sx={{ flexGrow: 1, py: 6, px: 4 }}>
        {children}
      </Box>
    </Box>
  )
}
