"use client";
import { useEffect, useState } from "react";

import { IBook } from "../../types/Book";
import Book from "../Book";

import BooksStats from "./BooksStats";
import BooksSwitchButton from "./BooksSwitchButton";
import getDayOfYear from "../../utils/getDayOfYear";

const BooksList: React.FC<{
  books: {
    "2021": IBook[];
    "2022": IBook[];
    "2023": IBook[];
    "2024": IBook[];
    "2025": IBook[];
  };
}> = ({ books }) => {
  const [thisYear, setThisYear] = useState("2025");
  const [currentYearData, setCurrentYearData] = useState<IBook[]>([]);

  currentYearData.length &&
    currentYearData.map((book: IBook) => {
      console.log(
        Math.floor((getDayOfYear(new Date(book.date_read)) / 365) * 500)
      );
    });

  useEffect(() => {
    switch (thisYear) {
      case "2025":
        setCurrentYearData(books["2025"]);
        break;
      case "2024":
        setCurrentYearData(books["2024"]);
        break;
      case "2023":
        setCurrentYearData(books["2023"]);
        break;
      case "2022":
        setCurrentYearData(books["2022"]);
        break;
      case "2021":
        setCurrentYearData(books["2021"]);
        break;
    }
  }, [thisYear, books]);

  return (
    <div className="h-full flex flex-col justify-start mt-4">
      <BooksStats
        thisYear={thisYear === "2025"}
        booksToRead={15}
        currentYearData={currentYearData}
      />

      <div className="mx-auto mt-6">
        <hr className="w-72 mx-auto border-black" />

        <div className="mx-auto w-72 -mt-1">
          {currentYearData.length &&
            currentYearData.map((book: IBook) => {
              return (
                <div
                  key={book.id}
                  style={{
                    marginLeft: `${Math.floor(
                      (getDayOfYear(new Date(book.date_read)) / 365) * 281
                    )}px`,
                  }}
                  className={`absolute bg-black w-2 opacity-40 h-2 rounded-full`}
                />
              );
            })}
        </div>
      </div>

      <div className="flex my-6">
        <BooksSwitchButton
          setState={setThisYear}
          state={thisYear}
          states={["2025", "2024", "2023", "2022", "2021"]}
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
  );
};

export default BooksList;
