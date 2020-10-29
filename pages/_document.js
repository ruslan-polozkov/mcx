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
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
                    <script
                      async
                      src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]"
                    />
                    <script
                      dangerouslySetInnerHTML={{
                        __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '[Tracking ID]');
                      `,
                      }}
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                <script src="/helpers/smart-app-banner.js" />
                </body>
            </Html>
        )
    }
}

export default MyDocument