import "tailwindcss/tailwind.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Title from "@components/Title";
import Link from "next/link";

const Coffee = ({ blogPosts }) => {
  console.log(blogPosts);
  return (
    <div className="sm:h-screen min-h-screen font-sans flex-col flex justify-between">
      <Header
        title="coffee"
        description="everything i care to know about coffee."
        img="https://i.pinimg.com/564x/76/70/a4/7670a43c9ee6405dd84f523307201558.jpg"
      />

      <Title
        leftSide={
          <span>
            only <span className="font-bold">{blogPosts.length}</span> blog posts
          </span>
        }
      />

      {blogPosts.map((blogPost) => (
        <Link href={`/blog/${blogPost.id}`} passHref>
          <p className="mx-auto">{blogPost.title}</p>
        </Link>
      ))}

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.BLOG}`
  ).then((res) => res.json());

  return {
    props: {
      blogPosts: data,
    },
    revalidate: 10, // revalidate every 10 seconds
  };
}

export default Coffee;
