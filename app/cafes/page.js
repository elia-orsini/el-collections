"use client";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Cafe from "@components/Cafe";
import Title from "@components/Title";
import SwitchButton from "@components/common/SwitchButton";
import RatingsExplanation from "@components/RatingsExplanation";
import useCafes from "hooks/useCafes";
import useRoasters from "hooks/useRoasters";

const IndexPage = () => {
  const [city, setCity] = useState("gla");
  const [toShow, setToShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const aberdeen = useCafes("abd");
  const edinburgh = useCafes("edi");
  const glasgow = useCafes("gla");

  const { roasters } = useRoasters();

  useEffect(() => {
    switch (city) {
      case "gla":
        setToShow(glasgow.cafes);
        setIsLoading(glasgow.isLoading);
        break;
      case "edi":
        setToShow(edinburgh.cafes);
        setIsLoading(edinburgh.isLoading);
        break;
      case "abd":
        setToShow(aberdeen.cafes);
        setIsLoading(aberdeen.isLoading);
        break;
      default:
        break;
    }
  }, [city, glasgow, edinburgh, aberdeen]);

  return (
    <div className="min-h-screen flex-col flex justify-between">
      <Header
        title="cafes database"
        description="Database of Cafes in Scotland (Glasgow, Edinburgh and Aberdeen)."
      />

      <div className="w-full">
        <Title leftSide={<span>{toShow.length} cafes total</span>} />

        <div className="h-full mx-auto w-max flex flex-col justify-start">
          <RatingsExplanation />

          <Link href="/roasters" className="mx-auto underline mt-4">
            Coffee Roasters
          </Link>

          <div className="flex my-6">
            <SwitchButton
              setState={setCity}
              state={city}
              states={["gla", "edi", "abd"]}
            />
          </div>

          {isLoading ? (
            <p className="text-center mx-auto">loading...</p>
          ) : (
            <div className="p-2 sm:p-4 border border-black bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-8 mb-8">
              {toShow.map((obj) => {
                return (
                  <Cafe
                    key={obj.id}
                    title={obj.properties.NAME.title[0].plain_text}
                    rating={obj.properties.RATING.number}
                    address={obj.properties.ADDRESS.rich_text[0].plain_text}
                    link={obj.properties.URL.url}
                    roastersIDs={
                      obj.properties.ROASTERS
                        ? obj.properties.ROASTERS.relation
                        : []
                    }
                    allRoasters={roasters}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
