import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Layout from '../components/common/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
