import '../styles/globals.css'

// import base header
import BaseHeader from '@/components/header/BaseHeader';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <BaseHeader />
      <Component {...pageProps} />
      </>
  );
}

export default MyApp;
