"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import SwitchButton from "../common/SwitchButton";
import RatingsExplanation from "../RatingsExplanation";
import Title from "../Title";
import { ICafe } from "../../types/Cafe";

import Cafe from "./Cafe";
import { IRoaster } from "../../types/Roaster";

const CafesList: React.FC<{ cafes: any; roasters: IRoaster[] }> = ({
  cafes,
  roasters,
}) => {
  const [city, setCity] = useState("gla");
  const [toShow, setToShow] = useState([]);

  useEffect(() => {
    switch (city) {
      case "gla":
        setToShow(cafes.glasgow);
        break;

      case "edi":
        setToShow(cafes.edinburgh);
        break;

      case "lon":
        setToShow(cafes.london);
        break;

      case "abd":
        setToShow(cafes.aberdeen);
        break;
    }
  }, [city, cafes]);

  return (
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
            states={["gla", "edi", "lon", "abd"]}
          />
        </div>

        <div className="p-2 sm:p-4 border border-black bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-8 mb-8">
          {toShow.map((cafe: ICafe) => {
            return <Cafe key={cafe.id} cafe={cafe} allRoasters={roasters} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CafesList;
