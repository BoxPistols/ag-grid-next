// src/stories/theme/TypographyList.tsx
import React from 'react'
import {
  Palette,
  PaletteColor,
  CommonColors,
  useTheme,
} from '@mui/material/styles'
import { Typography, Box, Grid, Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
const primaryOverride = blueGrey[900]

const sampleText = '日本語ひらがなカタカナ123abcABC@*^¥'

const TypographyList = () => {
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

  // ----- Colors -----
  const colorGroups = Object.keys(theme.palette).filter(
    (key) =>
      typeof theme.palette[key as keyof Palette] === 'object' && key !== 'grey'
  )

  const getContrastTextColor = (color: PaletteColor | string): string => {
    if (typeof color === 'object' && 'main' in color) {
      return theme.palette.getContrastText(color.main)
    } else if (typeof color === 'string') {
      return theme.palette.getContrastText(color)
    } else {
      return theme.palette.text.primary
    }
  }
  // ______

  return (
    <>
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
      {/* Colors */}
      <div>
        {colorGroups.map((colorGroup) => (
          <div key={colorGroup}>
            <Typography variant="body1" mt={2}>
              {colorGroup}
              <Typography variant="caption">
                {colorGroup === 'action' &&
                  '可読性が無いので実カラー当てていません'}
              </Typography>
            </Typography>
            <Grid container spacing={2} gap={1}>
              {Object.keys(
                theme.palette[colorGroup as keyof Palette] as
                  | PaletteColor
                  | CommonColors
              ).map((shade: string) => {
                const color =
                  theme.palette[colorGroup as keyof Palette][
                    shade as keyof (PaletteColor | CommonColors)
                  ]
                return (
                  <Grid item key={shade}>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2px 4px',
                        backgroundColor: getContrastTextColor(color),
                        ...(colorGroup === 'action' && {
                          backgroundColor: 'grey.400',
                          border: `1px solid ${primaryOverride}`,
                        }),
                      }}
                    >
                      <Typography
                        variant="body2"
                        fontSize={14}
                        style={{
                          color: color,
                          ...(colorGroup === 'action' && { color: 'gray.600' }),
                        }}
                      >
                        {shade}: {color}
                      </Typography>
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        ))}
      </div>
      <div>
        <Box my={2} display="flex" gap={2}>
          <Button variant="contained">検証用 contained</Button>
          <Button variant="outlined">検証用 outlined</Button>
          <Button variant="text">検証用 text</Button>
          <Button variant="contained" disabled>
            検証用 disable
          </Button>
        </Box>
      </div>
    </>
  )
}

export default TypographyList
