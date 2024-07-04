const Book: React.FC<{
  id: string;
  link: string;
  title: string;
  author: string;
  dateFinished: string;
}> = ({ id, link, title, author, dateFinished }) => {
  return (
    <a href={link ? `books/${id}` : "#"}>
      <div
        className={`mx-auto border h-full border-black font-semibold w-72 text-left ${
          link ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <div className="hover:bg-gray-100">
          <div className="flex justify-between">
            <p className="lowercase line-clamp-1 px-2 pb-1 h-max sm:h-12">
              {title}
            </p>

            {link && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="mt-1 mr-1 cursor-pointer"
              >
                <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z" />
              </svg>
            )}
          </div>

          <hr className="border-black" />

          <p className="font-normal tracking-wide text-sm uppercase px-2 py-1">
            {author}
          </p>

          <hr className="border-black" />

          <div className="flex justify-between">
            <p className="text-sm font-light inline pl-2 py-1">
              {dateFinished
                ? new Date(dateFinished).toLocaleDateString("en-GB", {
                    month: "long",
                    day: "numeric",
                  })
                : "reading"}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Book;
