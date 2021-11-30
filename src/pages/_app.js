import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

// import base header
import BaseHeader from '@/components/header/BaseHeader';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import { StyledEngineProvider } from '@mui/material/styles';


function MyApp({ Component, pageProps }) {
  return (
      <>
      <RecoilRoot>
          <StyledEngineProvider>
          <ThemeProvider theme={theme}>
                <BaseHeader />
                <Component {...pageProps} />
          </ThemeProvider>
          </StyledEngineProvider>
      </RecoilRoot>
      </>
  );
}

export default MyApp;
