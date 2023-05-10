// Header.tsx
import React from 'react'
import { styled } from '@mui/system'
import { AppBar, Toolbar, Typography } from '@mui/material'

const StyledAppBar = styled(AppBar)`
  flex-grow: 1;
`

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static" sx={{ maxHeight: 80 }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Admin Dashboard
        </Typography>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header
