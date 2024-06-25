import Header from "@components/Header";
import Footer from "@components/Footer";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Title from "@components/Title";

const BlogPost = ({ blockMap, blogPostInfo }) => {
  return (
    <div className="min-h-screen flex-col flex">
      <Header
        title={blogPostInfo.title}
        description="..."
        img={blogPostInfo.bgImage[0].url}
      />

      <Title leftSide={<span>{blogPostInfo.title}</span>} />

      <div className="h-full my-10 mx-auto w-11/12 sm:w-8/12 justify-star blur blur-lg">
        <div
          style={{
            backgroundImage: `url(${blogPostInfo.bgImage[0].url})`,
            fontFamily: "handwriting",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
          }}
          className="flex mb-10"
        >
          <h1 className="mx-auto my-auto text-white text-6xl text-center leading-3">
            {blogPostInfo.title}
            {blogPostInfo.inProgress && (
              <p className="text-4xl text-red-700">not available yet</p>
            )}
          </h1>
        </div>

        <div
          style={{ filter: blogPostInfo.inProgress ? "blur(10px)" : "none" }}
        >
          <NotionRenderer blockMap={blockMap} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const page = await fetch(
    `https://notion-api.splitbee.io/v1/page/${params.id}`
  ).then((res) => res.json());

  const data = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.BLOG}`
  ).then((res) => res.json());

  const blogPost = data.find((post) => post.id === params.id);

  return {
    props: {
      blockMap: page,
      blogPostInfo: blogPost,
    },
    revalidate: 10, // revalidate every 10 seconds
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default BlogPost;
