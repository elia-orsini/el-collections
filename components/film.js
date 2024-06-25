import Link from "next/link";

export default function Film(props) {
  return (
    <div className="flex flex-col w-max mx-auto border border-black bg-white">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img
          width={300}
          alt={props.link}
          src={props.img}
          className="w-72 sm:h-40 mx-auto border border-black z-0 object-contain bg-black cursor-pointer"
        />
      </a>

      <h1 className="font-black text-center text-lg uppercase mt-2 tracking-tight">
        {props.title}
      </h1>

      {props.rating ? (
        <img
          alt="stars"
          className="mx-auto w-20 -mt-1"
          src={`${props.rating}starsb.png`}
        />
      ) : (
        <div className="h-7"></div>
      )}
    </div>
  );
}
