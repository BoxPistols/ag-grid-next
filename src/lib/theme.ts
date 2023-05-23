import { createTheme } from '@mui/material/styles'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display1: true
    display2: true
  }
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 1280,
    xl: 1536,
    xxl: 1920,
  },
}

// ===== Typography =====
const baseFontSize = 16

const fontWeight = {
  normal: 400,
  medium: 500,
  bold: 700,
}
const lineHeight = {
  small: 1.5,
  medium: 1.75,
  large: 2.0,
}

const theme = createTheme({
  // ===== BreakPoint =====
  // default: lg
  breakpoints: {
    values: {
      xs: breakpoints.values.xs,
      sm: breakpoints.values.sm,
      md: breakpoints.values.md,
      lg: breakpoints.values.lg,
      xl: breakpoints.values.xl,
    },
  },

  palette: {
    primary: {
      main: '#4488aa',
    },
    text: {
      primary: '#234',
    },
  },

  // Typography
  typography: {
    // すべての Typography コンポーネントで適用されるデフォルトのテキストカラーを設定します。
    allVariants: {
      color: 'rgba(20, 30, 10, 0.8)',
      lineHeight: 1.5,
      fontFamily:
        ' "Futura", "Helvetica Neue", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "BIZ UDPゴシック", "Noto Sans JP", Helvetica, Arial, sans-serif !important',
      textTransform: 'inherit',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'antialiased',
    },
    fontSize: baseFontSize,
    h1: {
      fontWeight: fontWeight.bold,
      fontSize: baseFontSize * 2,
      lineHeight: 1.35,
    },
    h2: {
      fontWeight: fontWeight.bold,
      fontSize: baseFontSize * 1.75,
      lineHeight: 1.35,
    },
    h3: {
      fontWeight: fontWeight.bold,
      fontSize: baseFontSize * 1.5,
      lineHeight: 1.35,
    },
    h4: {
      fontWeight: fontWeight.bold,
      fontSize: baseFontSize * 1.25,
      lineHeight: 1.35,
    },
    h5: {
      fontWeight: fontWeight.bold,
      fontSize: baseFontSize * 1.1,
      lineHeight: 1.35,
    },
    h6: {
      fontWeight: fontWeight.bold,
      fontSize: baseFontSize * 1,
      lineHeight: 1.35,
    },
    subtitle1: {
      lineHeight: 1.4,
      fontSize: baseFontSize * 0.85,
    },
    subtitle2: {
      lineHeight: 1.4,
      fontSize: baseFontSize * 0.75,
    },
    caption: {
      lineHeight: 1.4,
      fontSize: baseFontSize * 0.85,
    },
    overline: {
      lineHeight: 1.4,
      fontSize: baseFontSize * 0.75,
    },
    button: {
      fontWeight: 400,
    },
  },
  // Component
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'display1' },
          style: {
            display: 'block',
            fontSize: '2.4rem',
            fontWeight: 700,
            lineHeight: 1.5,
            color: 'tomato',
          },
        },
        {
          props: { variant: 'display2' },
          style: {
            fontSize: '2.2rem',
            fontWeight: 700,
            color: 'tomato',
            lineHeight: 1.5,
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 44,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 44,
          '@media(min-width:0px)': {
            minHeight: 44,
          },
        },
      },
    },
  },
})

export default theme
