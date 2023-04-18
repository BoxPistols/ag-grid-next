// theme.ts
import { createTheme } from '@mui/material/styles'

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
    fontSize: 16,
    h3: {
      fontWeight: 700,
      fontSize: '2.2rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 400,
    },
  },
})

export default theme
