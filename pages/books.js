import "tailwindcss/tailwind.css";
import React from "react";
import { Client } from "@notionhq/client";
import Link from "next/link";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Book from "@components/Book";
import Title from "@components/Title";
import FunkyText from "@components/FunkyText";

const IndexPage = ({ books }) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const lastDay = new Date(2024, 0, 1);
  const firstDay = new Date(2023, 0, 1);
  const secondDate = new Date();

  const remainingDays = Math.round(Math.abs((lastDay - secondDate) / oneDay));
  const passedDays = Math.round(Math.abs((firstDay - secondDate) / oneDay));
  const passedWeeks = Math.floor(passedDays / 7);

  const booksToRead = 20;
  const booksRead = books.length;
  const booksADay = (remainingDays / (booksToRead - booksRead)).toFixed(2);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header
        title="el's books"
        description="books i have read the past year."
      />

      <div className="w-full">
        <Title leftSide={<></>} />

        <div className="h-full flex flex-col justify-start">
          <div className="text-center text-xs mt-8 w-72 mx-auto border-dashed border border-black font-mono">
            goal is to read <b>{booksToRead}</b> <FunkyText text="books" /> this
            year. <br />
          </div>

          <div className="mx-auto mt-4 w-72 border border-black divide-x divide-black text-center grid grid-cols-3">
            <div>
              <p className="text-3xl font-black">{booksRead}</p>
              <p className="text-xs -mt-1">
                <FunkyText text="books" /> read this year
              </p>
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

          <div className="text-center mx-auto my-auto mt-10 mb-8 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {books.map((book) => {
              return (
                <Book
                  key={book.id}
                  id={book.id}
                  title={book.TITLE}
                  author={book.AUTHOR}
                  dateFinished={book.DATE_READ}
                  link={book.LINK}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.BOOKS}`
  ).then((res) => res.json());

  return {
    props: {
      books: data,
    },
    revalidate: 30,
  };
};

export default IndexPage;
