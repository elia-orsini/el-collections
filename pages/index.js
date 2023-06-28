import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@components/Footer";
import Title from "@components/Title";

const IndexPage = () => {
  return (
    <div className="h-screen min-h-screen font-sans flex-col flex justify-between">
      <Title />

      <div
        className="h-full"
        style={{
          // backgroundImage: `url(/grid.svg)`,
          // backgroundSize: `5%`,
        }}
      >
        <div className="flex bg-white my-auto mx-4 sm:mx-20 h-full border-r border-l border-black">
          <div className="w-full my-auto text-center flex-1">
            <div className="flex border-black my-10">
              <Link href="/films" passHref>
                <p className="mx-auto my-auto cursor-pointer text-7xl uppercase tracking-tight hover:text-gray-700">
                  FILMS
                </p>
              </Link>
            </div>

            <div className="flex border-black my-10">
              <Link href="/ediCafes" passHref>
                <p className="mx-auto my-auto cursor-pointer text-7xl uppercase tracking-tight hover:text-gray-700">
                  CAFES
                </p>
              </Link>
            </div>

            <div className="flex border-black my-10">
              <Link href="/books" passHref>
                <p className="mx-auto my-auto cursor-pointer text-7xl uppercase tracking-tight hover:text-gray-700">
                  BOOKS
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
