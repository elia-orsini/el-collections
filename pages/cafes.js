import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import { Client } from "@notionhq/client";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Cafe from "@components/Cafe";
import Title from "@components/Title";
import SwitchButton from "@components/common/SwitchButton";
import RatingsExplanation from "@components/RatingsExplanation";
import FunkyText from "@components/FunkyText";

const IndexPage = ({ gla, abdn, edi, roasters }) => {
  const [city, setCity] = useState("GLA");
  const [toShow, setToShow] = useState(gla);

  console.log(roasters);

  useEffect(() => {
    switch (city) {
      case "GLA":
        setToShow(gla);
        break;
      case "EDI":
        setToShow(edi);
        break;
      case "ABD":
        setToShow(abdn);
        break;
      default:
        break;
    }
  }, [city]);

  return (
    <div className="min-h-screen font-sans flex-col flex justify-between">
      <Header title="el's fav cafes" description="cafes in edinburgh i luv." />

      <div className="w-full">
        <Title
          leftSide={
            <span>
              <span className="font-bold">{toShow.length}</span>{" "}
              <FunkyText text="cafes" /> <FunkyText text="total" />
            </span>
          }
        />

        <div className="h-full mx-auto w-max flex flex-col justify-start">
          <RatingsExplanation />

          <div className="flex my-6">
            <SwitchButton
              setState={setCity}
              state={city}
              states={["GLA", "EDI", "ABD"]}
            />
          </div>

          <div className="p-2 sm:p-4 border border-black bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {toShow.map((obj) => {
              return (
                <Cafe
                  key={obj.id}
                  title={obj.properties.NAME.title[0].plain_text}
                  rating={obj.properties.RATING.number}
                  address={obj.properties.ADDRESS.rich_text[0].plain_text}
                  link={obj.properties.URL.url}
                  roasters={
                    obj.properties.ROASTERS
                      ? obj.properties.ROASTERS.relation
                      : []
                  }
                  allRoasters={roasters}
                />
              );
            })}
          </div>
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

  const glaData = await notion.databases.query({
    database_id: process.env.GLACAFES,
  });

  const roasters = await notion.databases.query({
    database_id: process.env.ROASTERS,
  });

  return {
    props: {
      gla: glaData.results,
      abdn: abdnData.results,
      edi: ediData.results,
      roasters: roasters.results,
    },
    revalidate: 30,
  };
};

export default IndexPage;
