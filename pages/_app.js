import "../styles/layout.scss"
import Config from "../helpers/config";
import Head from 'next/head'
// import SmartBanner from ;
import AppBanner from 'react-smart-app-banner';
import NextNprogress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <title>Dominoes</title>
          </Head>
          <>
            {/*<SmartBanner />*/}
            <AppBanner
              appInfo={Config}
              position="top"
              onClose={() => {
                console.log('onClose called');
              }}
              hidden={false}
              style={{
                zIndex: 9999,
              }}
            />
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