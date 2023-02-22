import "tailwindcss/tailwind.css";
import React from "react";
import Link from "next/link";
import Footer from "@components/Footer";

const IndexPage = () => {
  return (
    <>
      <div className="w-full flex mt-4 text-center">
        <img alt="el-logo" className="absolute ml-2 sm:ml-6 w-10 mt-1" src="IMG_3400.JPG" />

        <div className="mx-auto">
          <h1 className="font-semibold text-xl lowercase tracking-wide">el&apos;s collections</h1>
          <h3 className="text-xs uppercase font-light tracking-tighter">collecting cool stuff</h3>
        </div>

        <h3 className="absolute w-full pr-6 mt-2 text-2xs text-right uppercase font-light tracking-tighter hidden sm:block">
          <span className="font-bold">3</span> active collections
        </h3>
      </div>

      <div className="mx-auto my-auto text-center">
        <div>
          <h3 className="font-black text-3xl uppercase tracking-tight hover:underline cursor-pointer">
            <Link href="/films">FILMS</Link>
            <img alt="stars" className="w-7 ml-1 -mt-2 inline" src={`tv.png`} />
          </h3>
          <p className="-mt-2 text-xs">collection of cool indie films</p>
        </div>
        <div>
          <Link href="/cafes">
            <h3 className="font-black text-3xl uppercase mt-10 tracking-tight hover:underline cursor-pointer">
              <Link href="/cafes">CAFES</Link>
              <img alt="stars" className="w-7 ml-0 -mt-1 inline" src={`coffeeCup.png`} />
            </h3>
          </Link>
          <p className="-mt-2 text-xs">collection of cool cafes (in abdn)</p>
        </div>
        <div>
          <Link href="/books">
            <h3 className="font-black text-3xl uppercase mt-10 tracking-tight hover:underline cursor-pointer">
              <Link href="/books">BOOKS</Link>
              <img alt="stars" className="w-7 ml-1 -mt-1 inline" src={`booksIcon.png`} />
            </h3>
          </Link>
          <p className="-mt-2 text-xs">collection of books i&apos;ve read this year</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IndexPage;
