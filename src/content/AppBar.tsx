import * as React from 'react'
import {
  Box,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  //   ListItemButton,
} from '@mui/material'

import {
  // Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import { AppBar, Drawer, DrawerHeader } from './AppBarUtil'
import { Home, TableChart, DataObject } from '@mui/icons-material'
import Link from 'next/link'

import { blueGrey } from '@mui/material/colors'
import { grey } from '@mui/material/colors'

const primaryOverride = blueGrey[900]

// Type
type Props = {
  children: React.ReactNode
}

export const AppBarHeader = ({ children }: Props) => {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const menuItems = [
    { icon: <Home />, text: 'ホーム', href: '/' },
    // TODO: Nest
    {
      icon: <TableChart />,
      text: 'データインポート',
      href: '/table/file-upload',
    },
    {
      icon: <TableChart />,
      text: 'カスタムフィルター',
      href: '/custom-filter',
    },
    {
      icon: <TableChart />,
      text: 'レコードイベント',
      href: '/table/record',
    },
    { icon: <DataObject />, text: 'Next.js Local APIテスト', href: '/get-api' },
    //   { icon: <Settings />, text: '設定' },
    //   { icon: <Info />, text: '情報' },
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: primaryOverride,
          height: 48,
          display: 'flex',
          justifyContent: 'center',
          a: {
            cursor: 'pointer',
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography variant="h4" noWrap component="div" color="white">
            <Link href="/">React Data Grid MUI</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <List sx={{ py: 1, mt: 6 }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              href={item.href}
              sx={{
                minHeight: 32,
                justifyContent: open ? 'initial' : 'center',
                px: 2,

                '&:hover': {
                  backgroundColor: grey[300],
                },
                '.MuiListItemIcon-root': {
                  minWidth: 'auto',
                  mr: 1,
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  display: open ? 'block' : 'none',
                  opacity: open ? 1 : 0,
                  '.MuiTypography-root': {
                    fontSize: 13,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, py: 8, px: 3 }}>
        {children}
      </Box>
    </Box>
  )
}
