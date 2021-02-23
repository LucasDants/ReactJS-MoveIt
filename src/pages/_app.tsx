//algo que não muda durante toda a aplicação e que vai repetir em todas as paginas, mas é recalculado
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
