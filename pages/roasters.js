import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import { Client } from "@notionhq/client";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Title from "@components/Title";

const IndexPage = ({ roasters }) => {
  const [continentMap, setContinentMap] = useState({});

  useEffect(() => {
    let continentsGroup = {};

    roasters.forEach((item) => {
      const continent = item.properties.continent.rich_text[0].plain_text;

      if (!continentsGroup[continent]) {
        continentsGroup[continent] = [];
      }

      continentsGroup[continent].push(item);
    });

    setContinentMap(continentsGroup);
  }, []);

  return (
    <div className="min-h-screen flex-col flex justify-between">
      <Header
        title="cafes database"
        description="Database of Cafes in Scotland (Glasgow, Edinburgh and Aberdeen)."
      />

      <div className="w-full">
        <Title leftSide={<span>roasters</span>} />

        <div className="h-full mx-auto w-max flex flex-col justify-start">
          <div className="p-2">
            {Object.keys(continentMap).map((continent) => {
              return (
                <>
                  <p className="mt-20 mb-4 text-sm">{continent}</p>
                  {continentMap[continent].map((roaster) => {
                    return (
                      <div
                        key={`roaster_${roaster.properties.Name.title[0].text.content}`}
                      >
                        <span className="text-xl">
                          {roaster.properties.Name.title[0].text.content}
                        </span>
                        <span className="text-sm mx-2 ">-</span>
                        <span className="text-sm">
                          {roaster.properties.City.rich_text[0].text.content}
                        </span>
                      </div>
                    );
                  })}
                </>
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

  const roasters = await notion.databases.query({
    database_id: process.env.ROASTERS,
  });

  return {
    props: {
      roasters: roasters.results,
    },
    revalidate: 30,
  };
};

export default IndexPage;
