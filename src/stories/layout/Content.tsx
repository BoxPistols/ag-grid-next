// Content.tsx
import React from 'react'
import { styled } from '@mui/system'
import { Container, Typography, Box } from '@mui/material'
import CardGrid from './CardGrid'
import AgGridTable from './AgGridTable'

type Props = {
  numberOfCards: number
  columnDefs: any[]
  rowData: any[]
}

const ContentContainer = styled(Container)`
  flex-grow: 1;
  padding: 2rem;
`

const Content: React.FC<Props> = ({ numberOfCards, columnDefs, rowData }) => {
  return (
    <ContentContainer>
      <Typography variant="h4" component="h2" gutterBottom>
        Content Area
      </Typography>
      <Box mb={4}>
        <CardGrid numberOfCards={numberOfCards} />
      </Box>
      <AgGridTable columnDefs={columnDefs} rowData={rowData} />
    </ContentContainer>
  )
}

export default Content
