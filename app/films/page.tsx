"use client";
import React, { useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Film from "../../components/Film";
import useFilms from "../../hooks/useFilms";
import { IFilm } from "../../types/Film";
import LoadingPage from "../../components/LoadingPage";

const IndexPage = () => {
  const [switchEvents, setSwitch] = useState(false);

  const { films, isLoading } = useFilms();

  if (isLoading) {
    return <LoadingPage />;
  }

  const filteredItems = switchEvents
    ? films.filter((item: IFilm) => item.status === "WATCHED")
    : films;

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
            {films.filter((item: IFilm) => item.status === "WATCHED").length}{" "}
            watched{" "}
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

        <div className="grid grid-cols-1 w-max mx-auto md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 my-8">
          {filteredItems.map((obj: any) => {
            return (
              <Film
                key={obj.id}
                title={obj.name}
                link={obj.url}
                img={obj.img}
                rating={obj.rating}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IndexPage;
