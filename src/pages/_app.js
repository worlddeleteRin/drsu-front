import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'

// import base header
import BaseHeader from '@/components/header/BaseHeader';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import { StyledEngineProvider } from '@mui/material/styles';

import RequestCallModal from '@/components/modals/RequestCallModal';


// react-query devtools
import { ReactQueryDevtools } from 'react-query/devtools';
// react-query
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';


function MyApp({ Component, pageProps }) {
    const queryClient = new QueryClient();
  return (
      <>
      <QueryClientProvider client={queryClient}>
      <RecoilRoot>
          <StyledEngineProvider>
          <ThemeProvider theme={theme}>
                <BaseHeader />
                <Component {...pageProps} />
                <RequestCallModal />
          </ThemeProvider>
          </StyledEngineProvider>
      </RecoilRoot>
          <ReactQueryDevtools />
      </QueryClientProvider>
      </>
  );
}

export default MyApp;
