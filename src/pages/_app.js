import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

// import base header
import BaseHeader from '@/components/header/BaseHeader';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
  return (
      <>
      <ThemeProvider theme={theme}>
            <BaseHeader />
            <Component {...pageProps} />
      </ThemeProvider>
      </>
  );
}

export default MyApp;
