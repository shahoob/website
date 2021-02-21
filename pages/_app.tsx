import MainLayout from '../layouts/main';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}

export default MyApp;
