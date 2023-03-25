// components
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Muslimify - Web Based Quran</title>
      </Head>
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
