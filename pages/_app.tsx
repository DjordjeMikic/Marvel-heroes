import { CssBaseline, ThemeProvider } from '@mui/material';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { theme } from '../theme';
import { store } from '../store/store';
import { Layout } from '../components/Layout/Layout';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Marvel heros</title>
    </Head>
    <CssBaseline />
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </ThemeProvider>
)

export default MyApp
