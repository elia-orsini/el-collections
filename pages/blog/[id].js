import "tailwindcss/tailwind.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Title from "@components/Title";

const BlogPost = ({ blockMap }) => {
  return (
    <div className="sm:h-screen min-h-screen font-sans flex-col flex justify-between">
      <Header
        title="blog post"
        description="..."
      />

      <Title
        leftSide={
          <span>
            blog post
          </span>
        }
      />

      <div className="my-10 mx-auto w-11/12 sm:w-8/12">
        <NotionRenderer blockMap={blockMap} />
      </div>

      <Footer />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const page = await fetch(
    `https://notion-api.splitbee.io/v1/page/${params.id}`
  ).then((res) => res.json());

  return {
    props: {
      blockMap: page,
    },
    revalidate: 10, // revalidate every 10 seconds
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default BlogPost;
