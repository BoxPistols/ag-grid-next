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
  ShoppingCart,
  ListAlt,
  Settings,
  People,
  Info,
  Mail,
} from '@mui/icons-material'

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

export const Sidebar = ({ open, handleDrawerToggle }: SidebarProps) => {
  const menuItems = [
    { icon: <Home />, text: 'ホーム', href: '/' },
    { icon: <ListAlt />, text: 'Local API', href: '/get-api' },
    { icon: <Settings />, text: '設定', href: '/settings' },
    { icon: <People />, text: 'ユーザー', href: '/users' },
    { icon: <Info />, text: '情報', href: '/info' },
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
                <ListItem key={index} component="a" href={item.href}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </DrawerPaper>
        </DrawerContainer>
      </Drawer>
    </>
  )
}
