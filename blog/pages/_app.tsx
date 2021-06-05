import 'bootstrap/dist/css/bootstrap.min.css'
import MainLayout from '../layouts/main'

function MyApp({ Component, pageProps }) {
  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}

export default MyApp
