import React, { useState } from "react";
import { Client } from "@notionhq/client";
import Cafe from '../components/cafe'

function checkWatched(item) {
  const itemStatus = item.properties.STATUS.select
  return itemStatus && itemStatus.name === 'WATCHED';
}

const IndexPage = ({ items }) => {
  const [switchEvents, setSwitch] = useState(false)

  // let filteredItems = switchEvents ? items.filter(checkWatched) : items;

  console.log(items)

  return (
        <div>
          <img alt="el-logo" className="absolute ml-2 sm:ml-6 w-10 mt-1" src="IMG_3400.JPG" />
          <h1 className="font-bold text-xl text-center uppercase tracking-wide">el&apos;s films</h1>
          <h3 className="text-xs text-center uppercase font-light tracking-tighter">
            my collection of cool cafes
          </h3>
          <h3 className="text-2xs text-center uppercase font-light tracking-tighter">
            in aberdeen
          </h3>
          <h3 className="absolute w-full pr-6 -mt-10 text-2xs text-right uppercase font-light tracking-tighter hidden sm:block">
            <span className="font-bold">{items.length}</span> cafes total
          </h3>
          



          <div className="mx-auto my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-10 px-2 mb-20">
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
          made by el © 2022<br />
          <span className="text-2xs">contact me if u want a site like this for yourself</span><br />
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