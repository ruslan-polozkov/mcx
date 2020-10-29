import "../styles/layout.scss"
import Config from "../helpers/config";
import Head from 'next/head'
import SmartBanner from 'react-smartbanner';
// import SmartBanner from ;
import AppBanner from 'react-smart-app-banner';
import NextNprogress from 'nextjs-progressbar';
// import 'react-smartbanner/dist/main.css';
import '../styles/smartBanner.css'
export default function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <title>Dominoes</title>
            <meta name="apple-itunes-app" content="app-id=1492160489" />
            <meta name="google-play-app" content="app-id=loppipoppi.dominoes&hl=en" />
            <link rel="shortcut icon" href="img/logo.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="img/logo.png" />
          </Head>
          <>
            <SmartBanner
              position={'bottom'}
              title={'DOMINOES'} />
            <NextNprogress
              color="#4aac00"
              startPosition="0.3"
              stopDelayMs="200"
              height="5"
            />
            <Component {...pageProps} />
            </>
        </>
    )
}