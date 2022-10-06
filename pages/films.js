import React, { Suspense, useState } from "react";
import { Client } from "@notionhq/client";
import Film from '../components/film'
import Link from "next/link";
import { Helmet } from "react-helmet";

function checkWatched(item) {
  const itemStatus = item.properties.STATUS.select
  return itemStatus && itemStatus.name === 'WATCHED';
}

const IndexPage = ({ items }) => {
  const [switchEvents, setSwitch] = useState(false)

  let filteredItems = switchEvents ? items.filter(checkWatched) : items;

  return (
        <div>
          <Helmet>
            <meta property="og:title" content="A Step-by-Step Guide to Setting Up Selenium-webdriver with Node.js" data-rh="true" />
            <meta property="og:description" content="A dummies guide to getting up and running with selenium-webdriver" data-rh="true" />
            <meta property="og:image" content="https://miro.medium.com/max/812/1*1xhuVp8f2WFUGUByHS8VTg.png" data-rh="true" />
          </Helmet>
          <Link href="/"><img alt="el-logo" className="absolute ml-2 sm:ml-6 w-10 mt-1" src="IMG_3400.JPG" /></Link>
          <h1 className="font-bold text-xl text-center uppercase tracking-wide">el&apos;s films</h1>
          <h3 className="text-xs text-center uppercase font-light tracking-tighter">
            my collection of indie films
          </h3>
          <h3 className="absolute w-full pr-6 -mt-10 text-2xs text-right uppercase font-light tracking-tighter hidden sm:block">
            <span className="font-bold">{items.length}</span> films total &nbsp;&nbsp;|&nbsp;&nbsp;  <span className="font-bold">{items.filter(checkWatched).length}</span> watched
          </h3>
          <h3 className="text-2xs text-center uppercase font-light tracking-tighter sm:hidden">
            <span className="font-bold">{items.length}</span> films total &nbsp;&nbsp;|&nbsp;&nbsp;  <span className="font-bold">{items.filter(checkWatched).length}</span> watched
          </h3>


          <div className="w-full">
            <button
            className={`mt-8 block text-xs py-1 mx-auto px-3 ${!switchEvents ? 'bg-black text-white' : 'text-black border border-black'}`}
            onClick={() => setSwitch(!switchEvents)}>
              {switchEvents ? 'show all' : 'show only watched'}
            </button>
          </div>

          <p className="text-center text-2xs mt-8">click on cover to open trailer</p>


          <div className="mx-auto my-auto mt-8 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-10 px-2 mb-28">
            {filteredItems.map((obj)=> {
              return (
                <Film 
                  key={obj.id}
                  title={obj.properties.Name.title[0].plain_text} 
                  link={obj.properties.URL.url} 
                  img={obj.properties.IMG.url} 
                  status={obj.properties.STATUS.select ? obj.properties.STATUS.select.name : null}
                  rating={obj.properties.RATING.number}
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
    database_id: process.env.ID
  });

  return {
    props: {
      items: data.results
    },
    revalidate: 10,
  };
};

export default IndexPage;
