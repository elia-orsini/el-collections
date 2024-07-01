"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ICafe } from "../../types/Cafe";
import Cafe from "../../components/Cafe";
import RatingsExplanation from "../../components/RatingsExplanation";
import Title from "../../components/Title";
import Header from "../../components/Header";
import useRoasters from "../../hooks/useRoasters";
import useCafes from "../../hooks/useCafes";
import SwitchButton from "../../components/common/SwitchButton";
import Footer from "../../components/Footer";

const IndexPage = () => {
  const [city, setCity] = useState("gla");
  const [toShow, setToShow] = useState([]);

  const aberdeen = useCafes("abd");
  const edinburgh = useCafes("edi");
  const glasgow = useCafes("gla");

  const roasters = useRoasters();

  useEffect(() => {
    switch (city) {
      case "gla":
        if (!glasgow.isLoading) {
          setToShow(glasgow.cafes);
        }
        break;
      case "edi":
        if (!edinburgh.isLoading) {
          setToShow(edinburgh.cafes);
        }
        break;
      case "abd":
        if (!aberdeen.isLoading) {
          setToShow(aberdeen.cafes);
        }
        break;
      default:
        break;
    }
  }, [city, glasgow, edinburgh, aberdeen]);

  const isLoading =
    aberdeen.isLoading ||
    edinburgh.isLoading ||
    glasgow.isLoading ||
    roasters.isLoading;

  if (isLoading) {
    return <div>loading...</div>;
  }

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

          <div className="p-2 sm:p-4 border border-black bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-8 mb-8">
            {toShow.map((cafe: ICafe) => {
              return (
                <Cafe
                  key={cafe.id}
                  cafe={cafe}
                  allRoasters={roasters.roasters}
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

export default IndexPage;
