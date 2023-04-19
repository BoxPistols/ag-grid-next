import React from 'react'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Palette, PaletteColor, CommonColors } from '@mui/material/styles'

const ColorMapping = () => {
  const theme = useTheme()

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

  return (
    <div>
      {colorGroups.map((colorGroup) => (
        <div key={colorGroup}>
          <Typography variant="body1" mt={2}>
            {colorGroup}
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
                      backgroundColor: color,
                      width: '100%',
                      height: '32px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '8px',
                      borderRadius: '6px',
                      boxShadow: '2px 4px 8px #cde',
                    }}
                  >
                    <Typography
                      variant="body2"
                      fontSize={12}
                      style={{
                        color: getContrastTextColor(color),
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
  )
}

export default ColorMapping
