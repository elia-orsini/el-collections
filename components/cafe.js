export default function Cafe(props) {
  return (
    <div className={`sm:mt-10 mt-0 mx-auto border border-black rounded px-2 sm:w-80 w-72 ${props.rating === -1 && `bg-black text-white`}`}>
      <a
        href={props.link}
        target={props.link != "#" ? "_blank" : ""}
        rel="noreferrer"
        className={`font-black text-2xl uppercase mt-2 tracking-tight ${props.rating === -1 && `line-through`}`}
      >
        {props.title}
      </a>
      <p className="font-extralight tracking-wide text-sm uppercase -mt-2">{props.address}</p>
      <hr className={`border-black my-0 ${props.rating === -1 && `border-white`}`} />
      <hr className="border-black my-0" />
      {props.rating > 0 && <img alt="stars" className="w-20 -mt-2 -mb-2" src={`${props.rating}starsb.png`} />}
      {props.rating === 0 && <div className="text-white">.</div>}
      {props.rating === -1 && <img alt="stars" className="w-20 -mt-2 -mb-2" src={`skull.png`} />}
    </div>
  );
}
