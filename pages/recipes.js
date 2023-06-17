import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import { Client } from "@notionhq/client";

import Footer from "@components/Footer";
import Header from "@components/Header";

const IndexPage = ({ items }) => {
  console.log(items);

  return (
    <>
      <Header title="el's Films" description="Films" />

      {items.map((item) => {
        <div>
          <h1>{item.properties.TITLE.title[0].plain_text}</h1>
          <p>{item.properties.INGREDIENTS.rich}</p>
        </div>;
      })}

      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.ID4,
  });

  return {
    props: {
      items: data.results,
    },
    revalidate: 10,
  };
};

export default IndexPage;
