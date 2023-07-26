import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import { Client } from "@notionhq/client";
import Link from "next/link";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Film from "@components/Film";
import Title from "@components/Title";

function checkWatched(item) {
  const itemStatus = item.properties.STATUS.select;
  return itemStatus && itemStatus.name === "WATCHED";
}

const IndexPage = ({ items }) => {
  const [switchEvents, setSwitch] = useState(false);

  let filteredItems = switchEvents ? items.filter(checkWatched) : items;

  return (
    <>
      <Header title="el's films" description="a review of indie films." />

      <Title
        leftSide={
          <span>
            <span className="font-bold">{items.length}</span> films total
            &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
            <span className="font-bold">
              {items.filter(checkWatched).length}
            </span>{" "}
            watched
          </span>
        }
      />

      <div className="flex-1 mx-auto my-auto">
        <button
          className={`mt-8 block border text-xs py-1 w-72 mx-auto cursor-pointer ${
            switchEvents ? "bg-black text-white border-black" : "text-black border-black"
          }`}
          onClick={() => setSwitch(!switchEvents)}
        >
          {switchEvents ? "show all" : "show only watched"}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 my-8">
          {filteredItems.map((obj) => {
            return (
              <Film
                key={obj.id}
                title={obj.properties.Name.title[0].plain_text}
                link={obj.properties.URL.url}
                img={obj.properties.IMG.url}
                status={
                  obj.properties.STATUS.select
                    ? obj.properties.STATUS.select.name
                    : null
                }
                rating={obj.properties.RATING.number}
              />
            );
          })}
        </div>
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
    database_id: process.env.FILMS,
  });

  return {
    props: {
      items: data.results,
    },
    revalidate: 30,
  };
};

export default IndexPage;
