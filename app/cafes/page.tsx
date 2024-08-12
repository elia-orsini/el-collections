import React from "react";

import CafesList from "../../components/cafes/CafesList";
import { IRoaster } from "../../types/Roaster";
import { Metadata } from "next";

const getCafes = async () => {
  const aberdeen = await fetch(process.env.URL + `/api/cafes/abd`).then((res) =>
    res.json()
  );
  const edinburgh = await fetch(process.env.URL + `/api/cafes/edi`).then(
    (res) => res.json()
  );
  const glasgow = await fetch(process.env.URL + `/api/cafes/gla`).then((res) =>
    res.json()
  );
  const london = await fetch(process.env.URL + `/api/cafes/lon`).then((res) =>
    res.json()
  );

  return {
    aberdeen,
    edinburgh,
    glasgow,
    london,
  };
};

const getRoasters = async (): Promise<IRoaster[]> => {
  const roasters = await fetch(process.env.URL + `/api/roasters`).then((res) =>
    res.json()
  );

  return roasters;
};

const IndexPage = async () => {
  const cafes = await getCafes();
  const roasters = await getRoasters();

  return (
    <div className="min-h-screen flex-col flex justify-between">
      <CafesList cafes={cafes} roasters={roasters} />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Cafes",
  description: "Seeking the best specialty coffee in Scotland and England.",
};

export default IndexPage;
