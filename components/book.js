export default function Book(props) {
  const options = { month: "long", day: "numeric" };
  return (
    <a href={props.link ? `bookNotes/${props.id}` : "#"}>
      <div
        className={`sm:mt-2 mt-2 mx-auto border border-black font-semibold rounded px-2 sm:w-80 w-72 hover:bg-gray-100 text-left ${
          props.link ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <p>{props.title}</p>
        <p className="font-normal tracking-wide text-sm uppercase">{props.author}</p>

        <hr className="border-black my-0" />

        <p className="text-sm font-light inline">{new Date(props.dateFinished).toLocaleDateString("en-GB", options)}</p>
        {props.link && <img alt="stars" className="block inline w-10 -mt-2 ml-2 -mb-2" src={`notes.png`} />}
      </div>
    </a>
  );
}
