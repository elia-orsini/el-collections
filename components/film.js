
export default function Film(props) {
    return (
      <div className="sm:mt-10 mt-0 mx-auto">
        <a href={props.link} target="_blank" rel="noreferrer">
            <img alt={props.link} src={props.img} className="w-88 border border-black z-0"/>
        </a>
        <h1 className="font-black text-lg uppercase mt-2 tracking-tight">{props.title}
        {props.status ? (<span className="font-extralight tracking-wide text-lg uppercase ml-1">{props.status}</span>) : null}
        {props.rating ? (<img alt="stars" className="w-20 ml-0 -mt-3" src={`${props.rating}stars.png`} />) : null}
        </h1>
      </div>
    );
  }
  