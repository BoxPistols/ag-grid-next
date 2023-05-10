// Content.tsx
import React from 'react'
import { styled } from '@mui/system'
import { Container, Typography } from '@mui/material'

const ContentContainer = styled(Container)`
  flex-grow: 1;
  padding: 2rem;
`

const Content: React.FC = () => {
  return (
    <ContentContainer>
      <Typography variant="h4" component="h2" gutterBottom>
        Content Area
      </Typography>
      <Typography>
        This is the main content area where you can display your page content.
      </Typography>
    </ContentContainer>
  )
}

export default Content
