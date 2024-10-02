import React from "react";
import { Metadata, NextPage } from "next";

import CafesList from "../../../components/cafes/CafesList";
import { IRoaster } from "../../../types/Roaster";
import clearInitialState from "../../utils/clearInitialState";

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
  const china = await fetch(process.env.URL + `/api/cafes/china`).then((res) =>
    res.json()
  );

  return {
    aberdeen,
    edinburgh,
    glasgow,
    london,
    china,
  };
};

const getRoasters = async (): Promise<IRoaster[]> => {
  const roasters = await fetch(process.env.URL + `/api/roasters`).then((res) =>
    res.json()
  );

  return roasters;
};

const IndexPage: NextPage<{ params: { slug: string } }> = async ({
  params,
}) => {
  const cafes = await getCafes();
  const roasters = await getRoasters();

  return (
    <div className="min-h-screen flex-col flex justify-between">
      <CafesList
        cafes={cafes}
        roasters={roasters}
        initialState={clearInitialState(params.slug)}
      />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Cafes",
  description: "Seeking the best specialty coffee.",
};

export default IndexPage;
