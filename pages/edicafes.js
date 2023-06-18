import "tailwindcss/tailwind.css";
import React from "react";
import { Client } from "@notionhq/client";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Cafe from "@components/Cafe";
import Title from "@components/Title";

const IndexPage = ({ items }) => {
  return (
    <div className="sm:h-screen min-h-screen font-sans flex-col flex justify-between">
      <Header title="el's Cafes" description="Cafes" />

      <Title
        leftSide={
          <span>
            only <span className="font-bold">{items.length}</span> cafes total
          </span>
        }
      />

        <div className="h-full mx-auto flex flex-col justify-start">
          <div className="mx-auto flex w-72 border border-black mt-8">
            <div className="text-left mx-auto text-2xs">
              <span className="block">
                <img
                  alt="stars"
                  className="w-14 mx-auto block inline mr-2"
                  src={`1starsb.png`}
                />{" "}
                = ok
              </span>
              <span className="block -mt-2">
                <img
                  alt="stars"
                  className="w-14 mx-auto block inline mr-2"
                  src={`2starsb.png`}
                />{" "}
                = good
              </span>
              <span className="block -mt-2">
                <img
                  alt="stars"
                  className="w-14 mx-auto block inline mr-2"
                  src={`3starsb.png`}
                />{" "}
                = great
              </span>
              <span className="block -mt-2">
                <img
                  alt="stars"
                  className="w-14 mx-auto block inline mr-2"
                  src={`4starsb.png`}
                />{" "}
                = amazing
              </span>
              <span className="block -mt-2">
                <img
                  alt="stars"
                  className="w-14 mx-auto block inline mr-2"
                  src={`5starsb.png`}
                />{" "}
                = the best
              </span>
            </div>
          </div>

          <div className="mx-auto my-auto mt-8 p-2 sm:p-4 border border-black bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {items.map((obj) => {
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

  const data = await notion.databases.query({
    database_id: process.env.ID5,
  });

  return {
    props: {
      items: data.results,
    },
    revalidate: 30,
  };
};

export default IndexPage;
