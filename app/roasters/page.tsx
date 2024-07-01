"use client";

import React, { useEffect, useState } from "react";
import useRoasters from "../../hooks/useRoasters";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import Header from "../../components/Header";
import { IRoaster } from "../../types/Roaster";
import LoadingPage from "../../components/LoadingPage";

const IndexPage: React.FC = () => {
  const [continentMap, setContinentMap] = useState<{
    [key: string]: IRoaster[];
  }>({});

  const { roasters, isLoading } = useRoasters();

  useEffect(() => {
    if (isLoading) return;

    const sortedRoasters = roasters.sort((a: IRoaster, b: IRoaster) => {
      const nameA = a.City.toLowerCase();
      const nameB = b.City.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    let continentsGroup: { [key: string]: IRoaster[] } = {};

    sortedRoasters.forEach((item: IRoaster) => {
      const continent = item.Continent;

      if (!continentsGroup[continent]) {
        continentsGroup[continent] = [];
      }

      continentsGroup[continent].push(item);
    });

    setContinentMap(continentsGroup);
  }, [roasters, isLoading]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen flex-col flex justify-between">
      <Header
        title="roasters database"
        description="Database of Roasters in the world."
      />

      <div className="w-full">
        <Title leftSide={<span>{roasters.length} roasters</span>} />

        <div className="h-full mx-auto w-max flex flex-col justify-start">
          <div className="p-2">
            {Object.keys(continentMap).length ? (
              <>
                {Object.keys(continentMap).map((continent) => {
                  return (
                    <div className="mb-10" key={`continent_${continent}`}>
                      <p className="mt-10 mb-4 text-sm">{continent}</p>
                      {continentMap[continent].map((roaster: IRoaster) => {
                        return (
                          <div key={`roaster_${roaster.Name}`}>
                            <a
                              href={roaster.Website}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="text-xl cursor-pointer">
                                {roaster.Name}
                              </span>
                            </a>
                            <span className="text-sm mx-1">_</span>
                            <span className="text-sm">{roaster.City}</span>
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
