import "tailwindcss/tailwind.css";
import React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Footer from "@components/Footer";
import Title from "@components/Title";
import Header from "@components/Header";

const IndexPage = () => {
  useGSAP(() => {
    const mainTitles = gsap.utils.toArray(".mainTitle");

    mainTitles.forEach((title) => {
      const generateTween = () =>
        gsap.to(title, {
          paused: true,
          y: 5,
          rotation: gsap.utils.random(-5, 5),
          duration: 0.3,
        });

      let tween;

      title.addEventListener("mouseenter", () => {
        tween = generateTween();
        tween.play();
      });
      title.addEventListener("mouseleave", () => tween.reverse());

      return () => {
        title.removeEventListener("mouseenter", () => tween.play());
        title.removeEventListener("mouseleave", () => tween.reverse());
      };
    });
  }, []);

  return (
    <div className="h-screen min-h-screen flex-col flex justify-between">
      <Header
        title="elia's personal database"
        description="elia's personal database collecting good films, amazing cafes and books I read."
      />

      <Title />

      <div className="mx-auto p-2 text-xl w-full sm:w-4/5 md:w-3/5 text-left border-dashed border-b border-r border-l border-black ">
        <p>
          Just a simple website collecting books I read and film I watch and
          coffee I drink.
        </p>
        <span className="text-xs bg-black text-white w-max px-1">
          WARNING: very opinionated
        </span>
      </div>

      <div style={{ fontFamily: "Lyyra" }} className="h-full flex">
        <div className="flex flex-col sm:flex-row my-auto mx-auto w-full sm:w-4/5 md:w-3/5 h-full border-dashed border-r border-l border-black">
          <Link href="/films" passHref>
            <p className="mainTitle mx-auto my-auto cursor-pointer text-5xl lowercase tracking-tight hover:text-gray-700">
              Films
            </p>
          </Link>

          <Link href="/cafes" passHref>
            <p className="mainTitle mx-auto my-auto cursor-pointer text-5xl lowercase tracking-tight hover:text-gray-700">
              Cafes
            </p>
          </Link>

          <Link href="/books" passHref>
            <p className="mainTitle mx-auto my-auto cursor-pointer text-5xl lowercase tracking-tight hover:text-gray-700">
              Books
            </p>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
