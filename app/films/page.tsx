import React from "react";

import Title from "../../components/Title";
import { IFilm } from "../../types/Film";
import FilmsList from "../../components/films/FilmsList";
import { Metadata } from "next";

const getFilms = async () => {
  const data = await fetch(
    `${process.env.CLOUDFLARE_WORKER}/v1/table/${process.env.FILMS}`,
    { next: { revalidate: 30 } }
  ).then((res) => res.json());

  data.reverse();

  return data;
};

const IndexPage = async () => {
  const films = await getFilms();

  return (
    <>
      <Title
        leftSide={
          <span>
            {films.length} films total &nbsp;&nbsp; | &nbsp;&nbsp;{" "}
            {films.filter((item: IFilm) => item.status === "WATCHED").length}{" "}
            watched{" "}
          </span>
        }
      />

      <FilmsList films={films} />
    </>
  );
};

export const metadata: Metadata = {
  title: "Films",
  description: "Collecting my favourite indie films.",
};

export default IndexPage;
