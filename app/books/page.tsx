import React from "react";

import Title from "../../components/Title";
import BooksList from "../../components/books/BooksList";
import { IBook } from "../../types/Book";
import { Metadata } from "next";

const getBooks = async (): Promise<{
  "2021": IBook[];
  "2022": IBook[];
  "2023": IBook[];
  "2024": IBook[];
}> => {
  const k21 = await fetch(process.env.URL + `/api/books/2021`).then((res) =>
    res.json()
  );
  const k22 = await fetch(process.env.URL + `/api/books/2022`).then((res) =>
    res.json()
  );
  const k23 = await fetch(process.env.URL + `/api/books/2023`).then((res) =>
    res.json()
  );
  const k24 = await fetch(process.env.URL + `/api/books/2024`).then((res) =>
    res.json()
  );

  return { 2021: k21, 2022: k22, 2023: k23, 2024: k24 };
};

const Books = async () => {
  const books = await getBooks();

  const allBooks = [
    ...books["2021"],
    ...books["2022"],
    ...books["2023"],
    ...books["2024"],
  ];

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="w-full">
        <Title leftSide={<>{allBooks.length} books</>} />

        <BooksList books={books} />
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Books",
  description: "Keeping track of the books I read while I save the good bits.",
};

export default Books;
