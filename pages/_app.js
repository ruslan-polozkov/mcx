import "../styles/layout.scss"
import Config from "../helpers/config";
import Head from 'next/head'
import SmartBanner from 'react-smartbanner';
// import SmartBanner from ;
import AppBanner from 'react-smart-app-banner';
import NextNprogress from 'nextjs-progressbar';
import 'react-smartbanner/dist/main.css';
export default function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <title>Dominoes</title>
            <meta name="apple-itunes-app" content="app-id=1434957889, app-argument=dominoes.com" />
            <meta name="google-play-app" content="app-id=loppipoppi.dominoes&hl=en" />
            <link rel="apple-touch-icon" href="/public/img/logo.png" />
            <link rel="android-touch-icon" href="/public/img/logo.png" />
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