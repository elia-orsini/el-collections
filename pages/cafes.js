import "tailwindcss/tailwind.css";
import React from "react";
import { Client } from "@notionhq/client";
import Link from "next/link";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Cafe from "@components/Cafe";

const IndexPage = ({ items }) => {
  return (
    <>
      <Header title="el's Cafes" description="Cafes" />

      <div className="w-full flex mt-4">
        <Link href="/">
          <img alt="el-logo" className="absolute ml-2 sm:ml-6 w-10 mt-1 cursor-pointer" src="IMG_3400.JPG" />
        </Link>

        <div className="mx-auto text-center">
          <h1 className="font-semibold text-xl lowercase tracking-wide">el&apos;s cafes</h1>
          <h3 className="text-xs uppercase font-light tracking-tighter">my collection of cool cafes</h3>
          <h3 className="text-2xs text-center uppercase font-light tracking-tighter">in aberdeen, scotland</h3>
        </div>

        <h3 className="absolute w-full pr-6 mt-2 text-2xs text-right uppercase font-light tracking-tighter hidden sm:block">
          only <span className="font-bold">{items.length}</span> cafes total
        </h3>
      </div>

      <div className="text-left w-max mx-auto text-2xs mt-8">
        <span className="block -mt-2">
          <img alt="stars" className="w-14 mx-auto block inline mr-2" src={`1starsb.png`} /> = ok
        </span>
        <span className="block -mt-2">
          <img alt="stars" className="w-14 mx-auto block inline mr-2" src={`2starsb.png`} /> = good
        </span>
        <span className="block -mt-2">
          <img alt="stars" className="w-14 mx-auto block inline mr-2" src={`3starsb.png`} /> = great
        </span>
        <span className="block -mt-2">
          <img alt="stars" className="w-14 mx-auto block inline mr-2" src={`4starsb.png`} /> = amazing
        </span>
        <span className="block -mt-2">
          <img alt="stars" className="w-14 mx-auto block inline mr-2" src={`5starsb.png`} /> = the best
        </span>
      </div>

      <div className="mx-auto my-auto mt-8 sm:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-10 px-2 mb-28">
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

      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.ID2,
  });

  return {
    props: {
      items: data.results,
    },
    revalidate: 10,
  };
};

export default IndexPage;
