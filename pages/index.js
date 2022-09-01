import React from "react";
import { Client } from "@notionhq/client";
import Film from '../components/film'

const IndexPage = ({ items }) => {
  console.log(items)

  return (
        <div>
          <img className="absolute ml-2 sm:ml-6 w-10 mt-1" src="IMG_3400.JPG" />
          <h1 className="font-bold text-xl text-center uppercase tracking-wide">el&apos;s films</h1>
          <h3 className="text-xs text-center uppercase font-light tracking-tighter">
            a list of films i want to watch
          </h3>
          <div className="mx-auto my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-10 px-2 mb-20">
            {items.map((obj)=> {
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
        <p className="text-center text-xs mb-10"> made by el © 2022</p>
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
