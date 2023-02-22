import 'tailwindcss/tailwind.css';
import React from "react";
import Link from "next/link";

const IndexPage = () => {
  return (
    <div className='flex flex-col h-screen text-center'>

      <div className='w-full flex mt-4'>
        <img alt="el-logo" className="absolute ml-2 sm:ml-6 w-10 mt-1" src="IMG_3400.JPG" />

        <div className='mx-auto'>
          <h1 className="font-semibold text-xl lowercase tracking-wide">el&apos;s collections</h1>
          <h3 className="text-xs uppercase font-light tracking-tighter">collecting cool stuff</h3>
        </div>

        <h3 className="absolute w-full pr-6 mt-2 text-2xs text-right uppercase font-light tracking-tighter hidden sm:block">
          <span className="font-bold">3</span> active collections
        </h3>
      </div>

      <div className="mx-auto my-auto">
        <div>
          <h3 className="font-black text-3xl uppercase tracking-tight">
            <Link href="/films">
              <span className="hover:underline cursor-pointer">FILMS</span>
            </Link>
            <img alt="stars" className="w-7 ml-1 -mt-2 inline" src={`tv.png`} />
          </h3>
          <p className="-mt-2 text-xs">collection of cool indie films</p>
        </div>
        <div>
          <Link href="/cafes">
            <h3 className="font-black text-3xl uppercase mt-10 tracking-tight">
              <Link href="/cafes">
                <span className="hover:underline cursor-pointer">CAFES</span>
              </Link>
              <img alt="stars" className="w-7 ml-0 -mt-1 inline" src={`coffeeCup.png`} />
            </h3>
          </Link>
          <p className="-mt-2 text-xs">collection of cool cafes (in abdn)</p>
        </div>
        <div>
          <Link href="/books">
            <h3 className="font-black text-3xl uppercase mt-10 tracking-tight">
              <Link href="/books">
                <span className="hover:underline cursor-pointer">BOOKS</span>
              </Link>
              <img alt="stars" className="w-7 ml-1 -mt-1 inline" src={`booksIcon.png`} />
            </h3>
          </Link>
          <p className="-mt-2 text-xs">collection of books i&apos;ve read this year</p>
        </div>
      </div>

      <div className="w-full text-xs mb-4">
        made by el © 2022<br />
        <span className="text-2xs">contact me if u want a site like this for yourself</span><br />
        <a href="https://elia-orsini.com" rel="noreferrer" target="_blank" className="text-2xs text-blue-600 underline">my real website</a>
      </div>
    </div>
  );
};

export default IndexPage;
