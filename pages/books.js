import React, { Suspense, useState } from "react";
import { Client } from "@notionhq/client";
import Book from '../components/book'
import Link from "next/link";
import Head from "next/head";

const IndexPage = ({ books }) => {

  const oneDay = 24 * 60 * 60 * 1000;
  const lastDay = new Date(2024, 0, 1);
  const firstDay = new Date(2023, 0, 1);
  const secondDate = new Date();

  const remainingDays = Math.round(Math.abs((lastDay - secondDate) / oneDay));
  const passedDays = Math.round(Math.abs((firstDay - secondDate) / oneDay));

  // const booksRead = books[0].properties.BOOKS_READ.number;
  const booksRead = books.length;
  const booksADay = (remainingDays / (60 - booksRead)).toFixed(2)

  return (
    <div>
      <Head>
        <meta property="og:title" content="el's Books" />
        <meta property="og:description" content="Books" />
        <meta property="og:image" content="https://i.pinimg.com/564x/ba/11/15/ba1115ecf4e99097e49c7d55a129a176.jpg" />
      </Head>
      <Link href="/"><img alt="el-logo" className="absolute ml-2 sm:ml-6 w-10 mt-1" src="IMG_3400.JPG" /></Link>
      <h1 className="font-bold text-xl text-center uppercase tracking-wide">el&apos;s films</h1>
      <h3 className="text-xs text-center uppercase font-light tracking-tighter">
        books stats to help me
      </h3>
      {/* <h3 className="absolute w-full pr-6 -mt-10 text-2xs text-right uppercase font-light tracking-tighter hidden sm:block">
            <span className="font-bold">{items.length}</span> films total &nbsp;&nbsp;|&nbsp;&nbsp;  <span className="font-bold">{items.filter(checkWatched).length}</span> watched
          </h3>
          <h3 className="text-2xs text-center uppercase font-light tracking-tighter sm:hidden">
            <span className="font-bold">{items.length}</span> films total &nbsp;&nbsp;|&nbsp;&nbsp;  <span className="font-bold">{items.filter(checkWatched).length}</span> watched
          </h3> */}

      <p className="text-center text-2xs mt-8">
        i want to read <b>60</b> books this year. <br />
        to do that i need to read one book every <b>{booksADay}</b> days <br />
        until the end of the year (which is {remainingDays} days away).
      </p>

      <div className="my-auto mt-10">
        <div className="mx-auto my-auto w-full text-center">
          <p className="text-6xl font-black">{booksADay}</p>
          <p className="text-base -mt-3">days to read a book</p>
        </div>

        <div className="mx-auto my-auto sm:w-3/5 lg:w-2/5 text-center pt-10 grid grid-cols-2">
          <div>
            <p className="text-5xl font-black">{booksRead}</p>
            <p className="text-base -mt-3">books read</p>
          </div>
          <div>
            <p className="text-5xl font-black">{passedDays}</p>
            <p className="text-base -mt-3">
              days passed<br />
              ({passedDays / 7} weeks)
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        books read
      </div>
      {books.map((book) => {
        return (
          <Book
            key={book.properties.TITLE.title[0].text.content}
            title={book.properties.TITLE.title[0].text.content}
            author={book.properties.AUTHOR.rich_text[0].text.content}
            dateFinished={book.properties.DATE_READ.date.start}
          />
        );
      })}

      <p className="text-center text-xs mb-10 mt-40">
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
    database_id: process.env.ID3
  });

  return {
    props: {
      books: data.results
    },
    revalidate: 10,
  };
};

export default IndexPage;
