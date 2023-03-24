import type { AppProps } from "next/app"
import "@/styles/globals.css"
import "@/assets/locale.ja.js"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// _app.js
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '../theme';

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;
