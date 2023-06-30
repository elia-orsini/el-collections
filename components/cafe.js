export default function Cafe(props) {
  return (
    <div
      className={`mx-auto border border-black px-2 w-72 ${
        props.rating === -1 ? `bg-black text-white` : "bg-white"
      }`}
    >
      <a
        href={props.link}
        target={props.link != "#" ? "_blank" : ""}
        rel="noreferrer"
        className={`font-black text-2xl uppercase tracking-tight ${
          props.rating === -1 && `line-through`
        }
        `}
      >
        {props.title.length > 17
          ? props.title.slice(0, 17) + ".."
          : props.title}
      </a>

      <p className="font-extralight tracking-wide text-sm uppercase">
        {props.address}
      </p>

      <hr
        className={`my-0 ${
          props.rating === -1 ? "border-white" : "border-black"
        }`}
      />

      {props.rating > 0 && (
        <img
          alt="stars"
          className="w-20 -mt-2 -mb-2"
          src={`${props.rating}starsb.png`}
        />
      )}

      {props.rating === 0 && <div className="text-white">.</div>}

      {props.rating === -1 && (
        <img alt="stars" className="w-20 -mt-2 -mb-2" src={`skull.png`} />
      )}
    </div>
  );
}
