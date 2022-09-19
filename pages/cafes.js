import React, { useState } from "react";
import { Client } from "@notionhq/client";
import Cafe from '../components/cafe'
import Link from "next/link";

const IndexPage = ({ items }) => {
  return (
        <div>
          <Link href="/"><img alt="el-logo" className="absolute ml-2 sm:ml-6 w-10 mt-1" src="IMG_3400.JPG" /></Link>
          <h1 className="font-bold text-xl text-center uppercase tracking-wide">
            el&apos;s cafes 
            <img alt="stars" className="w-6 ml-0 -mt-1 inline" src={`coffeeCup.png`} />
          </h1>
          <h3 className="text-xs text-center uppercase font-light tracking-tighter">
            my collection of cool cafes
          </h3>
          <h3 className="text-2xs text-center uppercase font-light tracking-tighter">
            in aberdeen, scotland
          </h3>
          <h3 className="absolute w-full pr-6 -mt-10 text-2xs text-right uppercase font-light tracking-tighter hidden sm:block">
            only <span className="font-bold">{items.length}</span> cafes total
          </h3>
          <h3 className="text-2xs text-center uppercase font-light tracking-tighter sm:hidden mt-4">
            only <span className="font-bold">{items.length}</span> cafes total
          </h3>

          <div className="mx-auto my-auto mt-8 sm:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-10 px-2 mb-28">
            {items.map((obj)=> {
              return (
                <Cafe 
                  key={obj.id}
                  title={obj.properties.NAME.title[0].plain_text} 
                  rating={obj.properties.RATING.number} 
                  address={obj.properties.ADDRESS.rich_text[0].plain_text} 
                  link={obj.properties.URL.url}  
                />
              )  
            })}
          </div>
          
          <p className="text-center text-xs mb-10">
            <p>made by el © 2022</p>
            <p className="text-2xs -mt-0">contact me if u want a site like this for yourself</p>
            <a href="https://elia-orsini.com" rel="noreferrer" target="_blank" className="text-2xs text-blue-600 underline">my real website</a>
          </p>
    </div>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.SECRET
  });

  const data = await notion.databases.query({
    database_id: process.env.ID2
  });

  return {
    props: {
      items: data.results
    },
    revalidate: 10,
  };
};

export default IndexPage;
