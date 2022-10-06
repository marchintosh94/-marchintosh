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
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
