// components/Sidebar.js
import * as React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  Home,
  Settings,
  Info,
  TableChart,
  DataObject,
} from '@mui/icons-material'
import { grey } from '@mui/material/colors'

// 新しい型定義を追加
type SidebarProps = {
  open: boolean
  handleDrawerToggle: () => void
}

const drawerWidth = 250

const DrawerContainer = styled('div')`
  width: ${drawerWidth}px;
  flex-shrink: 0;
`

const DrawerPaper = styled('div')`
  width: ${drawerWidth}px;
`

const MenuButton = styled(IconButton)`
  margin-right: ${({ theme }) => theme.spacing(2)};
`

export const AppBarSideNav = ({ open, handleDrawerToggle }: SidebarProps) => {
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
    <>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        onClose={handleDrawerToggle}
      >
        <DrawerContainer>
          <DrawerPaper>
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  key={index}
                  component="a"
                  href={item.href}
                  sx={{
                    '&:hover': {
                      backgroundColor: grey[300],
                    },
                    '.MuiListItemIcon-root': {
                      minWidth: 'auto',
                      mr: 1,
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ '.MuiTypography-root': { fontSize: 15 } }}
                  />
                </ListItem>
              ))}
            </List>
          </DrawerPaper>
        </DrawerContainer>
      </Drawer>
    </>
  )
}
