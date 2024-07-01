import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// @ts-ignore
import { useGSAP } from "@gsap/react";
import { ICafe } from "../types/Cafe";

const RoastersScroller: React.FC<{ roasters: string[]; cafe: ICafe }> = ({
  roasters,
  cafe,
}) => {
  const [toScroll, setToScroll] = useState(false);

  const first = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let translation = 0;
    const animationSpeed = 0.025;

    const gsapAnimation = () => {
      if (translation < -50) {
        translation = 0;
      }
      gsap.set(first.current, { x: `${translation}%` });
      translation -= animationSpeed;
    };

    if (toScroll && first.current) {
      gsap.ticker.add(gsapAnimation);
    }
  }, [toScroll]);

  useEffect(() => {
    const element = document.getElementById(`scrollingContainer-${cafe.id}`);

    const innerElement = document.getElementById(
      `roastersInnerContainer-${cafe.id}`
    );

    if (
      element &&
      innerElement &&
      innerElement.scrollWidth > element.clientWidth
    ) {
      setToScroll(true);
    }
  }, [roasters, cafe]);

  return (
    <div
      id={`scrollingContainer-${cafe.id}`}
      className="flex overflow-hidden w-full select-none"
    >
      <div
        ref={first}
        id={`roastersInnerContainer-${cafe.id}`}
        className="flex py-1 gap-x-1 w-max"
      >
        {roasters &&
          roasters.map((roaster: string) => {
            return (
              <p
                key={`roaster_A_${roaster}`}
                className="px-1 bg-black text-white text-xs w-max whitespace-nowrap"
              >
                {roaster}
              </p>
            );
          })}

        {toScroll &&
          roasters.length > 0 &&
          roasters.map((roaster: string) => {
            return (
              <p
                key={`roaster_B_${roaster}`}
                className="px-1 bg-black text-white text-xs w-max whitespace-nowrap"
              >
                {roaster}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default RoastersScroller;
