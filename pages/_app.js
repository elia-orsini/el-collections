import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>el&apos;s films</title>
        <meta
          name="Description"
          content="sup i am el"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
