import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@/assets/locale.ja.js"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
