"use client";
import React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";

const IndexPage = () => {
  useGSAP(() => {
    const mainTitles: HTMLDivElement[] = gsap.utils.toArray(".mainTitle");

    mainTitles.forEach((title) => {
      const generateTween = () =>
        gsap.to(title, {
          paused: true,
          y: 5,
          rotation: gsap.utils.random(-5, 5),
          duration: 0.3,
        });

      let tween: gsap.core.Tween;

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
    <div className="h-screen min-h-screen flex-col flex">
      <Header
        title="elia's personal database"
        description="elia's personal database collecting good films, amazing cafes and books I read."
      />

      <Title />

      <div className="mx-auto px-2 w-full sm:w-4/5 md:w-3/5 text-left border-dashed border-b sm:border-r sm:border-l border-black">
        <p className="text-2xl">
          Just a simple website collecting books I read and film I watch and
          coffee I drink.
          <span className="inline ml-2 mb-4 py-0.5 text-sm bg-black text-white w-max px-1">
            WARNING: very opinionated
          </span>
        </p>
      </div>

      <div className="h-full flex">
        <div className="flex flex-col sm:flex-row my-auto mx-auto w-full py-20 sm:w-4/5 md:w-3/5 h-full border-dashed sm:border-r sm:border-l border-black">
          <Link
            href="/films"
            passHref
            className="mainTitle mx-auto my-auto cursor-pointer text-5xl lowercase tracking-tight hover:text-gray-700"
          >
            Films
          </Link>

          <Link
            href="/cafes"
            passHref
            className="mainTitle mx-auto my-auto cursor-pointer text-5xl lowercase tracking-tight hover:text-gray-700"
          >
            Cafes
          </Link>

          <Link
            href="/books"
            passHref
            className="mainTitle mx-auto my-auto cursor-pointer text-5xl lowercase tracking-tight hover:text-gray-700"
          >
            Books
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
