import { ICafe } from "../../types/Cafe";
import { IRoaster } from "../../types/Roaster";
import getRoasterNameById from "../../utils/getRoasterNameByID";

import RoastersScroller from "../RoastersScroller";

const Cafe: React.FC<{
  cafe: ICafe;
  allRoasters: IRoaster[];
}> = ({ cafe, allRoasters }) => {
  const roastersNames: string[] =
    cafe.roasters &&
    cafe.roasters.map((roaster) => {
      return getRoasterNameById(roaster, allRoasters);
    });

  return (
    <div
      className={`mx-auto border border-black px-2 w-72 ${
        cafe.rating === -1 ? `bg-black text-white` : "bg-white"
      }`}
    >
      <p
        className={`font-black text-2xl uppercase tracking-tight ${
          cafe.rating === -1 && `line-through`
        }
        `}
      >
        {cafe.name.length > 18 ? cafe.name.slice(0, 18) + ".." : cafe.name}
      </p>

      <p className="font-extralight tracking-wide text-sm uppercase">
        {cafe.address}
      </p>

      <hr
        className={`my-0 ${
          cafe.rating === -1 ? "border-white" : "border-black"
        }`}
      />

      <div className="flex justify-between">
        {cafe.rating > 0 && (
          <img
            alt="stars"
            className="w-20 -mt-2 -mb-2"
            src={`/${cafe.rating}starsb.png`}
          />
        )}

        {cafe.rating === 0 && <div className="text-white">.</div>}

        {cafe.rating === -1 && (
          <img
            alt="stars"
            className="inline w-20 -mt-2 -mb-2"
            src={`skull.png`}
          />
        )}

        {cafe.url !== "#" && (
          <a
            href={cafe.url}
            target="_blank"
            rel="noreferrer"
            className="flex py-auto items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z" />
            </svg>
          </a>
        )}
      </div>

      <hr
        className={`my-0 ${
          cafe.rating === -1 ? "border-white" : "border-black"
        }`}
      />

      <RoastersScroller roasters={roastersNames} cafe={cafe} />
    </div>
  );
};

export default Cafe;
