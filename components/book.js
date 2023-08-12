export default function Book(props) {
  const options = { month: "long", day: "numeric" };

  return (
    <a href={props.link ? `bookNotes/${props.id}` : "#"}>
      <div
        className={`mt-2 mx-auto border bg-white h-full border-black font-semibold w-72 hover:bg-gray-100 text-left ${
          props.link ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <div className="pb-1">
          <p className="lowercase line-clamp-1 px-2">{props.title}</p>
          <p className="font-normal tracking-wide text-sm uppercase px-2">
            {props.author}
          </p>
        </div>

        <hr className="border-black" />

        <p className="text-sm font-light inline pl-2">
          {new Date(props.dateFinished).toLocaleDateString("en-GB", options)}
        </p>
        {props.link && (
          <img
            alt="stars"
            className="block inline w-10 -mt-2 ml-2 -mb-2"
            src={`notes.png`}
          />
        )}
      </div>
    </a>
  );
}
