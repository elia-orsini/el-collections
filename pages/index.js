import React, { useState } from "react";
import { Client } from "@notionhq/client";

const IndexPage = () => {

  return (
        <div>
          <img alt="el-logo" className="absolute ml-2 sm:ml-6 w-10 mt-1" src="IMG_3400.JPG" />
          <h1 className="font-semibold text-xl text-center lowercase tracking-wide">el&apos;s collections</h1>
          <h3 className="text-xs text-center uppercase font-light tracking-tighter">
            why not
          </h3>

          <h3 className="absolute w-full pr-6 -mt-10 text-2xs text-right uppercase font-light tracking-tighter hidden sm:block">
            <span className="font-bold">2</span> active collections
          </h3>

          <ul className="mx-auto text-center my-auto mt-40">
            <li>
              <a href="/films">
                <h3 className="font-black text-3xl uppercase mt-10 tracking-tight hover:underline">
                  FILMS
                  <img alt="stars" className="w-7 ml-1 -mt-2 inline" src={`tv.png`} />
                </h3>
                <p className="-mt-2 text-xs">collection of cool indie films</p>
              </a>
            </li>
            <li>
              <a href="/cafes">
                <h3 className="font-black text-3xl uppercase mt-10 tracking-tight hover:underline">
                  CAFES
                  <img alt="stars" className="w-7 ml-0 -mt-1 inline" src={`coffeeCup.png`} />
                </h3>
                <p className="-mt-2 text-xs">collection of cool cafes (in abdn)</p>
              </a>
            </li>
            <li>
                <p className="mt-10 text-2xs">...</p>
            </li>
          </ul>
          
          
        <p className="absolute w-full bottom-10 text-center text-xs">
          made by el © 2022<br />
          <span className="text-2xs">contact me if u want a site like this for yourself</span><br />
          <a href="https://elia-orsini.com" rel="noreferrer" target="_blank" className="text-2xs text-blue-600 underline">my real website</a>
        </p>
    </div>
  );
};

export default IndexPage;
