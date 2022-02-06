import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { AuthProvider } from '../context/auth'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
      <Header />
      <Component {...pageProps} /> 
      </AuthProvider>
    </>
  )
}

export default MyApp
