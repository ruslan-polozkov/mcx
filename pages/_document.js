import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        console.log(initialProps)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="title" content="Dominoes game" />
                    <meta name="description" content="Dominoes game" />
                    <meta name="keywords" content="dominoes,game,online,domino,best game" />
                    <meta name="apple-itunes-app" content='app-id=1434957889, affiliate-data=myAffiliateData, app-argument=dominoes.com'/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
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