import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import Header from "../../../components/Header";
import Title from "../../../components/Title";
import Footer from "../../../components/Footer";
import { NextPage } from "next";

async function getData(slug: string) {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/page/${slug}`
  ).then((res) => res.json());

  return { bookContent: data };
}

const Page: NextPage<{ params: any }> = async ({ params }) => {
  const { bookContent } = await getData(params.slug);

  return (
    <div className="min-h-screen flex-col flex">
      <Header title="blog post" description="..." />

      <Title leftSide={<span>title</span>} />

      <div className="h-full my-10 mx-auto w-11/12 sm:w-8/12 justify-star">
        <div>
          <NotionRenderer blockMap={bookContent} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
