import "tailwindcss/tailwind.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Title from "@components/Title";

const Coffee = ({ blockMap }) => {
  return (
    <div className="sm:h-screen min-h-screen font-sans flex-col flex justify-between">
      <Header title="coffee" description="everything i care to know about coffee." img="https://i.pinimg.com/564x/76/70/a4/7670a43c9ee6405dd84f523307201558.jpg" />

      <Title leftSide={
          <span>
            only <span className="font-bold">01</span> blog post
          </span>
        }/>

      <div className="my-10 mx-auto w-11/12 sm:w-8/12">
        <NotionRenderer blockMap={blockMap} />
      </div>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/page/${process.env.COFFEE}`
  ).then((res) => res.json());


  return {
    props: {
      blockMap: data,
    },
    revalidate: 10, // revalidate every 10 seconds
  };
}

export default Coffee;
