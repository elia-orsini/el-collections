import Layout from "@components/layout";
import localFont from "@next/font/local";

const websiteFont = localFont({ src: "../public/fonts/website-font.ttf" });

function MyApp({ Component, pageProps }) {
  console.log(websiteFont);
  return (
    <Layout>
      <div className={websiteFont.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
