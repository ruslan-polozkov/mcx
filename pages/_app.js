import "../styles/layout.scss"
import Head from 'next/head'
import SmartBanner from 'react-smartbanner';
import Router from "next/router";
import withYM from "next-ym";
import NextNprogress from 'nextjs-progressbar';
import '../styles/smartBanner.css'
const MyApp = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>Dominoes</title>
            <meta name="apple-itunes-app" content="app-id=1492160489" />
            <meta name="google-play-app" content="app-id=loppipoppi.dominoes&hl=en" />
            <meta property="og:image" content="img/phone-domino.png" />
            <link rel="shortcut icon" href="img/logo.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="img/logo.png" />
          </Head>
          <>
            <SmartBanner
              onClose={() => {
                document.querySelector('.header').classList.add("smart-banner-hidden");
                document.querySelector('.wrapper').classList.add("smart-banner-hidden");
              }}
              position={'top'}
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

export default withYM("68957212", Router)(MyApp);