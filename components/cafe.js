
export default function Cafe(props) {
  return (
    <div className="sm:mt-10 mt-0 mx-auto border border-black rounded px-2 sm:w-80 w-72">
      <a href={props.link} target={props.link != '#' ? "_blank" : ""} rel="noreferrer" className="font-black text-2xl uppercase mt-2 tracking-tight">
        {props.title}
      </a>
      <p className="font-extralight tracking-wide text-sm uppercase -mt-2">{props.address}</p>
      <hr className="border-black my-0" />
      {props.rating ? (<img alt="stars" className="w-20 -mt-2 -mb-2" src={`${props.rating}starsb.png`} />) : <div className="text-white">.</div>}
    </div>
  );
}
