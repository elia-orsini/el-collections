"use client";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Title from "@components/Title";
import useRoasters from "hooks/useRoasters";

const IndexPage = () => {
  const [continentMap, setContinentMap] = useState({});

  const { roasters } = useRoasters();

  useEffect(() => {
    const sortedRoasters = roasters.sort((a, b) => {
      const nameA = a.properties.City.rich_text[0].text.content.toLowerCase();
      const nameB = b.properties.City.rich_text[0].text.content.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    let continentsGroup = {};

    sortedRoasters.forEach((item) => {
      const continent = item.properties.continent.rich_text[0].plain_text;

      if (!continentsGroup[continent]) {
        continentsGroup[continent] = [];
      }

      continentsGroup[continent].push(item);
    });

    setContinentMap(continentsGroup);
  }, [roasters]);

  return (
    <div className="min-h-screen flex-col flex justify-between">
      <Header
        title="roasters database"
        description="Database of Roasters in the world."
      />

      <div className="w-full">
        <Title leftSide={<span>roasters</span>} />

        <div className="h-full mx-auto w-max flex flex-col justify-start">
          <div className="p-2">
            {Object.keys(continentMap).length ? (
              <>
                {Object.keys(continentMap).map((continent) => {
                  return (
                    <div className="mb-10" key={`continent_${continent}`}>
                      <p className="mt-10 mb-4 text-sm">{continent}</p>
                      {continentMap[continent].map((roaster) => {
                        return (
                          <div
                            key={`roaster_${roaster.properties.Name.title[0].text.content}`}
                          >
                            <a
                              href={roaster.properties.Website.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="text-xl cursor-pointer">
                                {roaster.properties.Name.title[0].text.content}
                              </span>
                            </a>
                            <span className="text-sm mx-1">_</span>
                            <span className="text-sm">
                              {
                                roaster.properties.City.rich_text[0].text
                                  .content
                              }
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </>
            ) : (
              <p className="mt-10">loading...</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
