import { Suspense } from "react";

export default function Film(props) {
    return (
        <div className="sm:mt-0 mt-0 mx-auto">
          <a href={props.link} target="_blank" rel="noreferrer">
            <img alt={props.link} src={props.img} className="w-88 sm:h-40 mx-auto border border-black z-0"/>
          </a>
          <h1 className="font-black text-lg uppercase mt-2 tracking-tight">{props.title}
          {props.status ? (<span className="font-extralight tracking-wide text-lg uppercase ml-2">{props.status}</span>) : null}
          {props.rating ? (<img alt="stars" className="w-20 ml-0 -mt-3" src={`${props.rating}starsb.png`} />) : null}
          </h1>
        </div>
    );
  }
  