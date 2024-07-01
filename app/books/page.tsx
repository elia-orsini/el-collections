"use client";

import React, { useEffect, useState } from "react";

import useBooks from "../../hooks/useBooks";
import Header from "../../components/Header";
import Title from "../../components/Title";
import SwitchButton from "../../components/common/SwitchButton";
import Book from "../../components/Book";
import Footer from "../../components/Footer";
import BooksStats from "../../components/books/BooksStats";
import { IBook } from "../../types/Book";
import LoadingPage from "../../components/LoadingPage";

const Books = () => {
  const [thisYear, setThisYear] = useState("2024");
  const [currentYearData, setCurrentYearData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const books2022 = useBooks("2022");
  const books2023 = useBooks("2023");
  const books2024 = useBooks("2024");

  console.log(currentYearData);

  const oneDay = 24 * 60 * 60 * 1000;
  const lastDay = new Date(2025, 0, 1);
  const firstDay = new Date(2024, 0, 1);
  const secondDate = new Date();

  useEffect(() => {
    switch (thisYear) {
      case "2024":
        setCurrentYearData(books2024.cafes);
        setIsLoading(books2024.isLoading);
        break;
      case "2023":
        setCurrentYearData(books2023.cafes);
        setIsLoading(books2023.isLoading);
        break;
      case "2022":
        setCurrentYearData(books2022.cafes);
        setIsLoading(books2022.isLoading);
        break;
      default:
        break;
    }
  }, [thisYear, books2022, books2023, books2024]);

  // @ts-ignore
  const remainingDays = Math.round(Math.abs((lastDay - secondDate) / oneDay));
  // @ts-ignore
  const passedDays = Math.round(Math.abs((firstDay - secondDate) / oneDay));

  const booksToRead = 15;
  const booksRead = currentYearData ? currentYearData.length : 0;
  const booksADay = (remainingDays / (booksToRead - booksRead)).toFixed(2);

  useEffect(() => {
    console.log(booksADay + " days to read a book");
  }, [booksADay]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header
        title="el's books"
        description="List of books i have read in the past years."
      />

      <div className="w-full">
        <Title leftSide={<></>} />

        <div className="h-full flex flex-col justify-start mt-4">
          <BooksStats
            thisYear={thisYear === "2024"}
            booksRead={booksRead}
            booksToRead={booksToRead}
            passedDays={passedDays}
          />

          <div className="flex my-6">
            <SwitchButton
              setState={setThisYear}
              state={thisYear}
              states={["2024", "2023", "2022"]}
            />
          </div>

          <div className="text-center mx-auto my-auto mb-8 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {currentYearData.length &&
              currentYearData.map((book: IBook) => {
                return (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    dateFinished={book.date_read}
                    link={book.link}
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

export default Books;
