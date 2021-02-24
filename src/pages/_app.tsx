//algo que não muda durante toda a aplicação e que vai repetir em todas as paginas, mas é recalculado
import '../styles/global.css'
import { ChallengesProvider } from '../contexts/ChallengesContexts'

function MyApp({ Component, pageProps }) {
  return (
  <ChallengesProvider>
    <Component {...pageProps} />
  </ChallengesProvider>
  )
}

export default MyApp
