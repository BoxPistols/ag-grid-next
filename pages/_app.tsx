import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import "@/assets/locale.ja.js"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
