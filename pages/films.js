import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import { Client } from "@notionhq/client";
import Link from "next/link";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Film from "@components/Film";

function checkWatched(item) {
  const itemStatus = item.properties.STATUS.select;
  return itemStatus && itemStatus.name === "WATCHED";
}

const IndexPage = ({ items }) => {
  const [switchEvents, setSwitch] = useState(false);

  let filteredItems = switchEvents ? items.filter(checkWatched) : items;

  return (
    <>
      <Header title="el's Films" description="Films" />

      <div className="w-full flex mt-4">
        <Link href="/">
          <img alt="el-logo" className="absolute ml-2 sm:ml-6 w-10 mt-1 cursor-pointer" src="IMG_3400.JPG" />
        </Link>

        <div className="mx-auto text-center">
          <h1 className="font-semibold text-xl lowercase tracking-wide">el&apos;s films</h1>
          <h3 className="text-xs uppercase font-light tracking-tighter">a list of indie films</h3>
        </div>

        <h3 className="absolute w-full pr-6 mt-2 text-2xs text-right uppercase font-light tracking-tighter hidden sm:block">
          <span className="font-bold">{items.length}</span> films total &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
          <span className="font-bold">{items.filter(checkWatched).length}</span> watched
        </h3>
      </div>

      <div className="w-full">
        <button
          className={`mt-8 block text-xs py-1 mx-auto px-3 ${!switchEvents ? "bg-black text-white" : "text-black border border-black"}`}
          onClick={() => setSwitch(!switchEvents)}
        >
          {switchEvents ? "show all" : "show only watched"}
        </button>
      </div>

      <p className="text-center text-2xs mt-8">click on cover to open trailer</p>

      <div className="mx-auto my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 mb-14">
        {filteredItems.map((obj) => {
          return (
            <Film
              key={obj.id}
              title={obj.properties.Name.title[0].plain_text}
              link={obj.properties.URL.url}
              img={obj.properties.IMG.url}
              status={obj.properties.STATUS.select ? obj.properties.STATUS.select.name : null}
              rating={obj.properties.RATING.number}
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
    database_id: process.env.ID,
  });

  return {
    props: {
      items: data.results,
    },
    revalidate: 10,
  };
};

export default IndexPage;
