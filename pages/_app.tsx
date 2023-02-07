/**
 * App entry
 */

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

// Footer && Top Navbar
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Global styles
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>成都舞之乐文化传播有限公司</title>
        <meta name="description" content="成都舞之乐文化传播有限公司" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="http://static.dancedreamtv.com/favicon.ico" />
      </Head>
      <Script>
        { `window.$crisp=[];window.CRISP_WEBSITE_ID="e2552ea3-408b-4de4-91ea-ba24518000a8";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();` }
      </Script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}