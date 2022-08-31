import React from "react";
import { Client } from "@notionhq/client";
import Film from '../components/film'

const IndexPage = ({ items }) => {

  return (
    <div>
        <h1 className="font-bold text-xl text-center uppercase">el&apos;s films</h1>
        <div className="mx-auto my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-10 px-2">
          {items.map((obj)=> {
            return (
              <Film 
                key={obj.id}
                title={obj.properties.Name.title[0].plain_text} 
                link={obj.properties.URL.url} 
                img={obj.properties.IMG.url} 
              />
            )  
          })}
        </div>
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
    }
  };
};

export default IndexPage;
