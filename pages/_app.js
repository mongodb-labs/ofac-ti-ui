import Head from 'next/head';

import '../styles/global.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OFAC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
