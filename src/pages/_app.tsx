import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../components/UI/Layout/Layout';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Santiljano Malaj - Mayoral</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
