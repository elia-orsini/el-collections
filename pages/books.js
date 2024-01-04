import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Book from "@components/Book";
import Title from "@components/Title";
import SwitchButton from "@components/common/SwitchButton";
import BooksStats from "@components/books/BooksStats";

const IndexPage = ({ books2023, books2024 }) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const lastDay = new Date(2025, 0, 1);
  const firstDay = new Date(2024, 0, 1);
  const secondDate = new Date();

  const [thisYear, setThisYear] = useState(true);
  const [currentYearData, setCurrentYearData] = useState([]);

  useEffect(() => {
    if (thisYear) setCurrentYearData(books2024);
    else setCurrentYearData(books2023);
  }, [thisYear]);

  const remainingDays = Math.round(Math.abs((lastDay - secondDate) / oneDay));
  const passedDays = Math.round(Math.abs((firstDay - secondDate) / oneDay));
  const passedWeeks = Math.floor(passedDays / 7);

  const booksToRead = 30;
  const booksRead = currentYearData.length;
  const booksADay = (remainingDays / (booksToRead - booksRead)).toFixed(2);

  useEffect(() => {
    console.log(booksADay + " days to read a book");
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header
        title="el's books"
        description="books i have read the past year."
      />

      <div className="w-full">
        <Title leftSide={<></>} />

        <div className="h-full flex flex-col justify-start mt-4">
          <BooksStats
            thisYear={thisYear}
            booksRead={booksRead}
            booksToRead={booksToRead}
            passedDays={passedDays}
          />

          <SwitchButton
            setState={setThisYear}
            state={thisYear}
            stateOne="2023"
            stateTwo="2024"
          />

          <div className="text-center mx-auto my-auto mt-10 mb-8 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {currentYearData.map((book) => {
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
  const books23 = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.BOOKS2023}`
  ).then((res) => res.json());

  const books24 = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.BOOKS2024}`
  ).then((res) => res.json());

  return {
    props: {
      books2023: books23,
      books2024: books24,
    },
    revalidate: 30,
  };
};

export default IndexPage;
