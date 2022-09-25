import '../styles/global.css'
import { AppPropsWithLayout } from 'models/types'
import { library} from '@fortawesome/fontawesome-svg-core'
import { 
  faArrowRight
} from '@fortawesome/pro-light-svg-icons'
import Head from 'next/head'

library.add(
  faArrowRight, 
)

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
        <title>Marco Baratto</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
