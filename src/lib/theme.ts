// theme.ts
import { createTheme } from '@mui/material/styles'

const baseFontSize = 16

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#1978b0',
    },
    secondary: {
      main: '#9289a3',
    },
    success: {
      main: '#2f9927',
    },
  },
  typography: {
    fontFamily: ' "Helvatica", "Arial", sans-serif ',
    // すべての Typography コンポーネントで適用されるデフォルトのテキストカラーを設定します。
    allVariants: {
      color: 'rgba(0, 0, 0, 0.85)', // 任意のカラー値を指定します。
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'antialiased',
    },
    fontSize: baseFontSize,
    h1: {
      fontWeight: 700,
      fontSize: baseFontSize * 2,
    },
    h2: {
      fontWeight: 700,
      fontSize: baseFontSize * 1.75,
    },
    h3: {
      fontWeight: 700,
      fontSize: baseFontSize * 1.5,
    },
    h4: {
      fontWeight: 700,
      fontSize: baseFontSize * 1.25,
    },
    h5: {
      fontWeight: 500,
      fontSize: baseFontSize * 1.1,
    },
    h6: {
      fontWeight: 500,
      fontSize: baseFontSize * 1,
    },
    button: {
      fontWeight: 400,
    },
  },
})

export default theme
