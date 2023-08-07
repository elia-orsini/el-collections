import "tailwindcss/tailwind.css";
import React from "react";
import { Client } from "@notionhq/client";
import Link from "next/link";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Book from "@components/Book";
import Title from "@components/Title";

const IndexPage = ({ books }) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const lastDay = new Date(2024, 0, 1);
  const firstDay = new Date(2023, 0, 1);
  const secondDate = new Date();

  const remainingDays = Math.round(Math.abs((lastDay - secondDate) / oneDay));
  const passedDays = Math.round(Math.abs((firstDay - secondDate) / oneDay));
  const passedWeeks = Math.floor(passedDays / 7);

  const booksToRead = 30;
  const booksRead = books.length;
  const booksADay = (remainingDays / (booksToRead - booksRead)).toFixed(2);

  return (
    <>
      <Header title="el's books" description="books i have read the past year." />

      <Title leftSide={<></>} />

      <div className="text-center text-xs mt-8 w-72 mx-auto border border-black">
        the goal is to read <b>{booksToRead}</b> books this year. <br />
      </div>

      <div className="mx-auto mt-8 w-72 border border-black divide-x divide-black text-center grid grid-cols-3">
        <div>
          <p className="text-3xl font-black">{booksRead}</p>
          <p className="text-xs -mt-1">books read</p>
        </div>

        <div className="">
          <p className="text-3xl font-black">{booksADay}</p>
          <p className="text-xs -mt-1">days to read a book</p>
        </div>

        <div>
          <p className="text-3xl font-black">{passedDays}</p>
          <p className="text-xs -mt-1">
            days passed
            <br />({passedWeeks} weeks)
          </p>
        </div>
      </div>

      <div className="text-center mx-auto my-auto mt-6 mb-8 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {books.map((book) => {
          return (
            <Book
              key={book.id}
              id={book.id}
              title={book.properties.TITLE.title[0].text.content}
              author={book.properties.AUTHOR.rich_text[0].text.content}
              dateFinished={book.properties.DATE_READ.date.start}
              link={book.properties.LINK.checkbox}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.BOOKS,
  });

  return {
    props: {
      books: data.results,
    },
    revalidate: 30,
  };
};

export default IndexPage;
