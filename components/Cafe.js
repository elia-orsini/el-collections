import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function getRoasterNameById(id, allRoasters) {
  const page = allRoasters.find((item) => item.id === id);
  if (page) {
    return page.properties.Name.title[0].plain_text;
  }
  return null;
}

export default function Cafe(props) {
  const [toScroll, setToScroll] = useState(false);

  const roasters =
    props.roasters &&
    props.roasters.map((roaster) => {
      return getRoasterNameById(roaster.id, props.allRoasters);
    });

  const first = useRef();

  let translation = 0;
  let animationSpeed = 0.02;

  const gsapAnimation = () => {
    if (translation < -50) {
      translation = 0;
    }
    gsap.set(first.current, { x: `${translation}%` });
    translation -= animationSpeed;
  };

  useGSAP(() => {
    if (toScroll) {
      gsap.ticker.add(gsapAnimation);
    }
  }, [toScroll]);

  useEffect(() => {
    const element = document.getElementById(
      `scrollingContainer-${props.title}`
    );

    if (element.scrollWidth > element.clientWidth) {
      setToScroll(true);
    }
  }, []);

  return (
    <div
      className={`mx-auto border border-black px-2 w-72 ${props.rating === -1 ? `bg-black text-white` : "bg-white"
        }`}
    >
      <p
        className={`font-black text-2xl uppercase tracking-tight ${props.rating === -1 && `line-through`
          }
        `}
      >
        {props.title.length > 17
          ? props.title.slice(0, 17) + ".."
          : props.title}
      </p>

      <p className="font-extralight tracking-wide text-sm uppercase">
        {props.address}
      </p>

      <hr
        className={`my-0 ${props.rating === -1 ? "border-white" : "border-black"
          }`}
      />

      <div className="flex justify-between">
        {props.rating > 0 && (
          <img
            alt="stars"
            className="w-20 -mt-2 -mb-2"
            src={`${props.rating}starsb.png`}
          />
        )}

        {props.rating === 0 && <div className="text-white">.</div>}

        {props.rating === -1 && (
          <img
            alt="stars"
            className="inline w-20 -mt-2 -mb-2"
            src={`skull.png`}
          />
        )}

        {props.link !== "#" && (
          <a
            href={props.link}
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
        className={`my-0 ${props.rating === -1 ? "border-white" : "border-black"
          }`}
      />

      <div
        id={`scrollingContainer-${props.title}`}
        className="flex overflow-hidden w-full select-none"
      >
        <div ref={first} className={`flex py-1 gap-x-1 w-max`}>
          {roasters &&
            roasters.map((roaster, i) => {
              return (
                <p
                  key={`roaster_A_${i}`}
                  className="px-1 bg-black text-white text-xs w-max whitespace-nowrap"
                >
                  {roaster}
                </p>
              );
            })}

          {toScroll &&
            roasters.length > 0 &&
            roasters.map((roaster, i) => {
              return (
                <p
                  key={`roaster_B_${i}`}
                  className="px-1 bg-black text-white text-xs w-max whitespace-nowrap"
                >
                  {roaster}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}
