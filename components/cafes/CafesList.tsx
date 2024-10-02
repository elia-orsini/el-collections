"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import SwitchButton from "../common/SwitchButton";
import Title from "../Title";
import { ICafe } from "../../types/Cafe";

import Cafe from "./Cafe";
import { IRoaster } from "../../types/Roaster";
import clearInitialState from "../../app/utils/clearInitialState";

const CafesList: React.FC<{
  cafes: any;
  roasters: IRoaster[];
  initialState?: string;
}> = ({ cafes, roasters, initialState }) => {
  const [city, setCity] = useState(
    clearInitialState(initialState || "glasgow")
  );
  const [toShow, setToShow] = useState([]);

  useEffect(() => {
    switch (city) {
      case "glasgow":
        setToShow(cafes.glasgow);
        break;

      case "edinburgh":
        setToShow(cafes.edinburgh);
        break;

      case "london":
        setToShow(cafes.london);
        break;

      case "aberdeen":
        setToShow(cafes.aberdeen);
        break;

      case "china":
        setToShow(cafes.china);
        break;
    }
  }, [city, cafes]);

  const allCafes = [
    ...cafes.glasgow,
    ...cafes.edinburgh,
    ...cafes.london,
    ...cafes.aberdeen,
  ];

  return (
    <div className="w-full">
      <Title leftSide={<span>{allCafes.length} cafes total</span>} />

      <div className="h-full mx-auto w-max flex flex-col justify-start">
        <div className="my-6">
          <SwitchButton
            setState={setCity}
            state={city}
            states={["glasgow", "edinburgh", "london", "aberdeen", "china"]}
          />
        </div>

        <Link href="/roasters" className="mx-auto underline mb-6">
          All Coffee Roasters
        </Link>

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
