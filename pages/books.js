import 'tailwindcss/tailwind.css';
import React from "react";
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
  const passedWeeks = Math.floor(passedDays / 7);


  const booksRead = books.length;
  const booksADay = (remainingDays / (60 - booksRead)).toFixed(2)

  console.log(books)

  return (
    <div className='flex flex-col h-screen text-center'>
      <Head>
        <meta property="og:title" content="el's Books" />
        <meta property="og:description" content="Books" />
        <meta property="og:image" content="https://i.pinimg.com/564x/ba/11/15/ba1115ecf4e99097e49c7d55a129a176.jpg" />
      </Head>

      <div className='w-full flex mt-4'>
        <Link href="/">
          <img alt="el-logo" className="absolute ml-2 sm:ml-6 w-10 mt-1 cursor-pointer" src="IMG_3400.JPG" />
        </Link>

        <div className='mx-auto'>
          <h1 className="font-semibold text-xl lowercase tracking-wide">el&apos;s books</h1>
          <h3 className="text-xs uppercase font-light tracking-tighter">books stats to help me</h3>
        </div>
      </div>

      <div className="text-center text-xs mt-4">
        the goal is to read <b>60</b> books this year. <br />
      </div>

      <div className="mx-auto mt-4 sm:w-3/5 lg:w-2/5 text-center grid grid-cols-3">
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
            days passed<br />
            ({passedWeeks} weeks)
          </p>
        </div>
      </div>

      <div className="text-center mx-auto my-auto">
        books read in 2023
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

      <div className="w-full text-xs mb-4">
        made by el © 2022<br />
        <span className="text-2xs">contact me if u want a site like this for yourself</span><br />
        <a href="https://elia-orsini.com" rel="noreferrer" target="_blank" className="text-2xs text-blue-600 underline">my real website</a>
      </div>

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
