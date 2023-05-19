// CardGrid.tsx
import React from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material'

type Props = {
  numberOfCards: number
}

const CardGrid = ({ numberOfCards }: Props) => {
  return (
    <Grid container spacing={2}>
      {[...Array(numberOfCards)].map((_some, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6">Card {index + 1}</Typography>
              <Typography>Some card content</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default CardGrid
