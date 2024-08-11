import React from "react";

import Title from "../../components/Title";
import BooksList from "../../components/books/BooksList";
import { IBook } from "../../types/Book";

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

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="w-full">
        <Title leftSide={<></>} />

        <BooksList books={books} />
      </div>
    </div>
  );
};

export default Books;
