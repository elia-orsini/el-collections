import "tailwindcss/tailwind.css";
import React from "react";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Title from "@components/Title";

const IndexPage = ({ quotes }) => {
  console.log(quotes);
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header
        title="el's books"
        description="books i have read the past year."
      />

      <div className="w-full">
        <Title leftSide={<></>} />

        <div className="h-full flex flex-col justify-start w-4/5 sm:w-3/5 mx-auto">
          <h2 className="mt-10 mb-6 font-bold">quotes from The New Yorker</h2>
          {quotes.map((quote, i) => {
            return (
              <div className="my-4" key={i}>
                <p>{quote.quote}</p>
                <div className="ml-0 sm:ml-10 mt-2 flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-right-short mt-[4px] mr-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                  <a
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                    href={quote.link}
                  >
                    {quote.title}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NEWYORKERQUOTES}`
  ).then((res) => res.json());

  return {
    props: {
      quotes: data,
    },
    revalidate: 30,
  };
};

export default IndexPage;
