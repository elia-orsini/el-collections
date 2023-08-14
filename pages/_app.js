import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>el&apos;s collections</title>
        <meta
          name="Description"
          content="elia's collections"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="/fonts/style.css" rel="stylesheet"/>
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
