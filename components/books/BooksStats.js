export default function BooksStats({ thisYear, booksRead, booksToRead, passedDays }) {
  return (
    <div className="mx-auto mt-4 w-72 border border-black divide-x divide-black text-center grid grid-cols-3">
      <div>
        <p className="text-3xl font-black">{booksRead}</p>
        <p className="text-xs -mt-1">books read</p>
      </div>

      <div className="">
        <p className="text-3xl font-black">{thisYear ? booksToRead : "-"}</p>
        <p className="text-xs -mt-1">books to read</p>
      </div>

      <div>
        <p className="text-3xl font-black">{thisYear ? passedDays : "-"}</p>
        <p className="text-xs -mt-1">days passed</p>
      </div>
    </div>
  );
}
