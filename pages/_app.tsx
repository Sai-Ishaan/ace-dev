import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import WaveCta from 'components/WaveCta';
import { NavItems } from 'types';
import NavigationDrawer from 'components/NavigationDrawer';

const navItems: NavItems = [
  { title: 'Clusters', href: '/clusters' },
  { title: 'Events', href: '/events' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Contact', href: '#footer', outlined: true },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <ColorModeScript />
      <GlobalStyle />
      <Providers>
        <Navbar items={navItems} />
        <Component {...pageProps} />
        <WaveCta />
        <div id="footer">
          <Footer />
        </div>
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  const navItemsWithoutLast = navItems.slice(0, -1);
  return (
    <NavigationDrawer items={navItemsWithoutLast}>{children}</NavigationDrawer>
  );
}


export default MyApp;
