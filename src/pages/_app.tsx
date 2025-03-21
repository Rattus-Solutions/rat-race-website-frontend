import '../../styles/globals.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <main>
      <Component {...pageProps} />
    </main>
  </>
);

export default MyApp;
