import "../styles/layout.scss"
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <title>Dominoes</title>
          </Head>
            <Component {...pageProps} />
        </>
    )
}