// src/stories/theme/TypographyList.tsx
import React from 'react'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const sampleText = '日本語ひらがなカタカナ123abcABC@*^¥'

const TypographyList: React.FC = () => {
  const theme = useTheme()
  const typographyVariants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'overline',
    'button',
  ]

  return (
    <div>
      {typographyVariants.map((variant) => (
        <Box key={variant} sx={{ marginBottom: 2 }}>
          <Typography paragraph mb={0} color="secondary">
            {variant}
          </Typography>
          <Typography variant={variant as any}>{sampleText}</Typography>
        </Box>
      ))}
    </div>
  )
}

export default TypographyList
