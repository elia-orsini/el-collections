import React from "react";

import Title from "../../components/Title";
import { IRoaster } from "../../types/Roaster";
import RoastersList from "../../components/roasters/RoastersList";
import divideRoastersByContinent from "../utils/divideRoastersByContinent";
import { Metadata } from "next";

const getRoasters = async (): Promise<IRoaster[]> => {
  const roasters = await fetch(process.env.URL + `/api/roasters`).then((res) =>
    res.json()
  );

  return roasters;
};

const IndexPage: React.FC = async () => {
  const roasters = await getRoasters();
  const groupedByContinent = divideRoastersByContinent(roasters);

  return (
    <div className="min-h-screen flex-col flex justify-between">
      <div className="w-full">
        <Title leftSide={<span>{roasters.length} roasters</span>} />

        <RoastersList groupedByContinent={groupedByContinent} />
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Coffee Roasters",
  description: "Collecting specialty coffee roasters in the world.",
};

export default IndexPage;
