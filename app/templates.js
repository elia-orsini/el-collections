"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Template = ({ children }) => {
  useGSAP(() => {
    const banners = gsap.utils.toArray("#blackBanner");

    gsap.fromTo(
      banners,
      {
        yPercent: 0,
        duration: 0,
      },
      {
        yPercent: 200,
        stagger: 0.2,
        duration: 1,
        delay: 0.1,
      }
    );
  }, []);

  return (
    <>
      <div>
        <div
          id="blackBanner"
          className="min-h-screen bg-black z-20 fixed top-0 left-0 w-1/4"
        ></div>
        <div
          id="blackBanner"
          className="min-h-screen bg-black z-20 fixed top-0 left-1/4 w-1/4"
        ></div>
        <div
          id="blackBanner"
          className="min-h-screen bg-black z-20 fixed top-0 left-2/4 w-1/4"
        ></div>
        <div
          id="blackBanner"
          className="min-h-screen bg-black z-20 fixed top-0 left-3/4 w-1/4"
        ></div>
      </div>
      {children}
    </>
  );
};

export default Template;
