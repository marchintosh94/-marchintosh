import '../styles/global.css'
import { AppPropsWithLayout } from 'models/types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faNpm, faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faNpm, faGithub, faLinkedin, faTwitter, faInstagram)

const App = ({ Component, pageProps }: AppPropsWithLayout) => {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default App
