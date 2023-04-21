// src/stories/theme/ResponsiveGrid.tsx
import React from 'react'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const ResponsiveGrid: React.FC = () => {
  const theme = useTheme()
  const breakpoints = theme.breakpoints.values

  return (
    <Grid container spacing={2}>
      {Array.from({ length: 12 }, (_, i) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={i}>
          <Card>
            <CardContent>
              <Typography variant="h6">Card {i + 1}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ResponsiveGrid
