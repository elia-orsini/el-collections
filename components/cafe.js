
export default function Film(props) {
    return (
      <div className="mt-10 mx-auto border border-black rounded px-2 sm:w-80 w-60">
        <a href={props.link} target={props.link!='#' ? "_blank" : ""} rel="noreferrer" className="font-black text-2xl uppercase mt-2 tracking-tight">
          {props.title}
        </a>
        <p className="font-extralight tracking-wide text-sm uppercase -mt-2">{props.address}</p>
        <hr className="border-black"/>
        <div className="">
          <img alt="stars" className="w-20 -mt-2" src={`${props.rating}stars.png`} />
        </div>
      </div>
    );
  }
  