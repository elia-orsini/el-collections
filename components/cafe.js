
export default function Film(props) {
    return (
      <div className="sm:mt-10 mt-0 mx-auto border border-black rounded px-2 sm:w-80 w-80">
        <a href={props.link} target={props.link!='#' ? "_blank" : ""} rel="noreferrer" className="font-black text-2xl uppercase mt-2 tracking-tight">
          {props.title}
        </a>
        <p className="font-extralight tracking-wide text-sm uppercase -mt-2">{props.address}</p>
        <hr className="border-black sm:my-0 my-1" />
        <div className="">
          {props.rating ? (<img alt="stars" className="w-20 -mt-2" src={`${props.rating}stars.png`} />) : null}
        </div>
      </div>
    );
  }
  