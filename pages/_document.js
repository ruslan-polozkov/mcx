import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="title" content="Dominoes game" />
                    <meta name="description" content="Dominoes is a popular board game in which players line up a chain of dice that meet in halves with the same number of points." />
                    <meta name="keywords" content="dominoes,game,online,domino,best game" />
                    <meta property="og:image" content="/public/img/phone-domino.png" />
                    <meta name="theme-color" content="#4aac00" />
                    <meta name="apple-itunes-app" content="app-id=1434957889, affiliate-data=myAffiliateData, app-argument=dominoes.com" />
                    <meta name="google-play-app" content="app-id=loppipoppi.dominoes&hl=en" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>


                  <meta name="apple-itunes-app" content="app-id=502838820" />
                    <meta name="google-play-app" content="app-id=ru.hh.android" />
                      <meta name="msApplication-ID" content="microsoft.build.App" />
                        <meta name="msApplication-PackageFamilyName" content="microsoft.build_8wekyb3d8bbwe" />
                            <link rel="apple-touch-icon" href="/public/img/favicon.icon" />
                              <link rel="android-touch-icon" href="/public/img/favicon.icon" />
                                <link rel="windows-touch-icon" href="/public/img/favicon.icon" />
                  <script src="/helpers/smart-app-banner.js"></script>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument