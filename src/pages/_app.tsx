import {Layout} from '@/components'
import { AppProps } from 'next/app';

import "../styles/css-reset.css"
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}