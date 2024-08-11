"use client";

import { IRoaster } from "../../types/Roaster";

const RoastersList: React.FC<{ groupedByContinent: any }> = ({
  groupedByContinent,
}) => {
  return (
    <div className="h-full mx-auto w-max flex flex-col justify-start">
      <div className="p-2">
        {Object.keys(groupedByContinent).map((continent) => {
          return (
            <div className="mb-10" key={`continent_${continent}`}>
              <p className="mt-10 mb-4 text-sm">{continent}</p>
              {groupedByContinent[continent].map((roaster: IRoaster) => {
                return (
                  <div key={`roaster_${roaster.Name}`}>
                    <a href={roaster.Website} target="_blank" rel="noreferrer">
                      <span className="text-xl cursor-pointer capitalize">
                        {roaster.Name}
                      </span>
                    </a>

                    <span className="text-sm mx-1">_</span>

                    <span className="text-sm capitalize">{roaster.City}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoastersList;
