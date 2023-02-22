import { Suspense } from "react";

export default function Film(props) {
  return (
    <div className="sm:mt-0 mt-0 mx-auto">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img width={300} alt={props.link} src={props.img} className="w-88 sm:h-40 mx-auto border border-black z-0 object-contain bg-black" />
      </a>
      <h1 className="font-black text-lg uppercase mt-2 tracking-tight">{props.title}</h1>
      {props.status && (<span className="font-extralight tracking-wide text-lg uppercase">{props.status}</span>)}
      {props.rating ? (<img alt="stars" className="w-20 -mt-1 inline ml-2" src={`${props.rating}starsb.png`} />) : null}
    </div >
  );
}
