import { Grid, Card, CardContent, Typography } from '@mui/material'

interface ResponsiveGridProps {
  spacing: number
}

type Props = ResponsiveGridProps

export const ResponsiveGrid = ({ spacing }: Props) => {
  return (
    <Grid container spacing={spacing}>
      {Array.from({ length: 12 }, (_, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={i}>
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
