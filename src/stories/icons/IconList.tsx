// src/stories/icons/IconList.tsx
import React from 'react'
import * as Icons from '@mui/icons-material'
import Grid from '@mui/material/Grid'

const IconList: React.FC = () => {
  const iconList = Object.entries(Icons).map(([iconName, IconComponent]) => (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      key={iconName}
      style={{ textAlign: 'center' }}
    >
      <IconComponent />
      <div style={{ textAlign: 'center', fontSize: 12 }}>{iconName}</div>
    </Grid>
  ))

  return (
    <Grid container spacing={2}>
      {iconList}
    </Grid>
  )
}

export default IconList
