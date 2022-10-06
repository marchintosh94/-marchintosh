import '../styles/global.css'
import { AppPropsWithLayout } from 'models/types'
import Head from 'next/head'
import metaSocialImg from '../assets/meta/marcobaratto.png'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  const metaDesc = 'Marco baratto portfolio website where you can find all my projects, experiences and discover curious things about me.'
  return getLayout(
    <>
      <Head>
        <title>Marco Baratto</title>
        <meta charSet="utf-8"></meta>
        <meta name="description" content={metaDesc}/>
        <meta name="robots" content="noindex,nofollow"/>

        <meta property="og:title" content="Marco Baratto" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.marcobaratto.dev/" />
        <meta property="og:image" content={metaSocialImg.src} />
        <meta name="twitter:card" content="summary_large_image"/>
        
        <meta property="og:description" content={metaDesc} />
        <meta property="og:site_name" content="Marco Baratto"></meta>
        <meta name="twitter:image:alt" content="marco baratto"></meta>
        
        <meta name="twitter:site" content="@marchintosh94"></meta>
        <link rel="apple-touch-icon-precomposed" sizes="57x57"    href="/favicon/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114"  href="/favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72"    href="/favicon/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144"  href="/favicon/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60"    href="/favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120"  href="/favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76"    href="/favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152"  href="/favicon/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="/favicon/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon/favicon-128.png" sizes="128x128" />
        <meta name="application-name" content="Marco Baratto"/>
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/favicon/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/favicon/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/favicon/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/favicon/mstile-310x310.png" />

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
