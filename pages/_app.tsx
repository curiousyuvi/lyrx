import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (<><Header/> <Component {...pageProps} /><Footer/></>)
}

export default MyApp
