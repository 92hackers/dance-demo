import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>成都舞之乐文化传播有限公司</title>
        <meta name="description" content="成都舞之乐文化传播有限公司" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="http://www.dancedreamtv.com/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
