"use client";
import React, { useState } from "react";
import { Client } from "@notionhq/client";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Film from "@components/Film";
import Title from "@components/Title";
import useFilms from "hooks/useFilms";

function checkWatched(item) {
  const itemStatus = item.properties.STATUS.select;
  return itemStatus && itemStatus.name === "WATCHED";
}

const IndexPage = () => {
  const [switchEvents, setSwitch] = useState(false);

  const { films, isLoading } = useFilms();

  const filteredItems = switchEvents ? films.filter(checkWatched) : films;

  return (
    <>
      <Header
        title="el's fav films"
        description="A collection of indie films I watch."
      />

      <Title
        leftSide={
          <span>
            {films.length} films total &nbsp;&nbsp; | &nbsp;&nbsp;{" "}
            {films.filter(checkWatched).length} watched{" "}
          </span>
        }
      />

      <div className="flex-1 mx-auto my-auto">
        <button
          className={`mt-8 block border text-xs py-1 w-72 mx-auto cursor-pointer ${
            switchEvents
              ? "bg-black text-white border-black"
              : "text-black border-black"
          }`}
          onClick={() => setSwitch(!switchEvents)}
        >
          {switchEvents ? <p>show all</p> : <p>show only watched</p>}
        </button>

        {isLoading ? (
          <div className="h-screen flex">
            <p className="m-auto">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 w-max mx-auto md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 my-8">
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
        )}
      </div>

      <Footer />
    </>
  );
};

export default IndexPage;
