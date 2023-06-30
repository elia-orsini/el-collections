import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import { Client } from "@notionhq/client";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Cafe from "@components/Cafe";
import Title from "@components/Title";
import RatingsExplanation from "@components/RatingsExplanation";

const IndexPage = ({ abdn, edi }) => {
  const [showEdi, setShowEdi] = useState(true);
  const [toShow, setToShow] = useState(edi);

  useEffect(() => {
    showEdi ? setToShow(edi) : setToShow(abdn);
  }, [showEdi, abdn, edi]);

  return (
    <div className="sm:h-screen min-h-screen font-sans flex-col flex justify-between">
      <Header title="el's Cafes" description="Cafes" />

      <Title
        leftSide={
          <span>
            only <span className="font-bold">{toShow.length}</span> cafes total
          </span>
        }
      />

      <div className="h-full mx-auto flex flex-col justify-start">
        <RatingsExplanation />

        <button
          className="flex mx-auto my-6 bg-black text-sm"
          onClick={() => setShowEdi(!showEdi)}
        >
          <span
            className={`${
              showEdi ? "text-white" : "bg-white"
            } border border-black px-6 py-1`}
          >
            EDI
          </span>
          <span
            className={`${
              !showEdi ? "text-white" : "bg-white"
            } border border-black px-6 py-1`}
          >
            ABDN
          </span>
        </button>

        <div className="p-2 sm:p-4 border border-black bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {toShow.map((obj) => {
            return (
              <Cafe
                key={obj.id}
                title={obj.properties.NAME.title[0].plain_text}
                rating={obj.properties.RATING.number}
                address={obj.properties.ADDRESS.rich_text[0].plain_text}
                link={obj.properties.URL.url}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.SECRET,
  });

  const abdnData = await notion.databases.query({
    database_id: process.env.ABDNCAFES,
  });

  const ediData = await notion.databases.query({
    database_id: process.env.EDICAFES,
  });

  return {
    props: {
      abdn: abdnData.results,
      edi: ediData.results,
    },
    revalidate: 30,
  };
};

export default IndexPage;
