import { poppins } from './fonts';

import '@/styles/globals.css';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Head from '@/components/Head';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <Head />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
