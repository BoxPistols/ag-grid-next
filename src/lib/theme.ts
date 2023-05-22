// theme.ts
import { createTheme } from '@mui/material/styles'
import App from '../../pages/_app'

// ===== BreakPoint =====
// for breakpoint
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
      main: '#1978b0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9289a3',
    },
    success: {
      main: '#2f9927',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    text: {
      primary: 'rgba(20, 30, 10, 0.8)',
      secondary: 'rgba(20, 30, 10, 0.6)',
      disabled: 'rgba(20, 30, 10, 0.4)',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },

    // TODO: Add here
    // primary: {
    //   main: '#2196f3', // Primary main color (e.g., blue)
    //   light: '#6ec6ff', // Primary light color (e.g., light blue)
    //   dark: '#0069c0', // Primary dark color (e.g., dark blue)
    // },
    // secondary: {
    //   main: '#f50057', // Secondary main color (e.g., pink)
    //   light: '#ff4081', // Secondary light color (e.g., light pink)
    //   dark: '#c51162', // Secondary dark color (e.g., dark pink)
    // },
  },

  components: {
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
          // landscape でのみ適用
          // '@media (min-width: 0px) and (orientation: landscape)': {
          '@media (min-width: 0px)': {
            minHeight: 44,
          },
        },
      },
    },
  },
  typography: {
    // すべての Typography コンポーネントで適用されるデフォルトのテキストカラーを設定します。
    allVariants: {
      color: 'rgba(20, 30, 10, 0.8)',
      lineHeight: 1.5,
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "BIZ UDPゴシック", "Noto Sans JP", Helvetica, Arial, sans-serif !important',
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
})

export default theme
