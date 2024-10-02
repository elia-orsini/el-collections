"use client";

import { useState } from "react";

import { IFilm } from "../../types/Film";

import Film from "./Film";

const FilmsList: React.FC<{ films: IFilm[] }> = ({ films }) => {
  const [switchEvents, setSwitch] = useState(false);

  const filteredItems = switchEvents
    ? films.filter((item: IFilm) => item.status === "WATCHED")
    : films;

  return (
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
              img={obj.imgMedia ? obj.imgMedia[0].url : obj.img}
              rating={obj.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilmsList;
