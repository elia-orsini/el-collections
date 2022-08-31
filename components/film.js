
export default function Film(props) {
    return (
      <div className="mt-10 mx-auto">
        <a href={props.link} target="_blank" rel="noreferrer">
            <img src={props.img} className="w-88 border border-black"/>
        </a>
        <h1 className="font-black text-lg uppercase mt-2">{props.title}</h1>
      </div>
    );
  }
  