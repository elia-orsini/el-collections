export default function Book(props) {
  const options = { month: "long", day: "numeric" };

  return (
    <a href={props.link ? `book/${props.id}` : "#"}>
      <div
        className={`mx-auto border h-full border-black font-semibold w-72 text-left ${
          props.link ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <div className="hover:bg-gray-100">
          <div className="flex justify-between">
            <p className="lowercase line-clamp-1 px-2 pb-1 h-max sm:h-12">
              {props.title}
            </p>

            {props.link && (
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className="flex py-1 pr-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z" />
                </svg>
              </a>
            )}
          </div>

          <hr className="border-black" />

          <p className="font-normal tracking-wide text-sm uppercase px-2 py-1">
            {props.author}
          </p>

          <hr className="border-black" />

          <div className="flex justify-between">
            <p className="text-sm font-light inline pl-2 py-1">
              {new Date(props.dateFinished).toLocaleDateString(
                "en-GB",
                options
              )}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
