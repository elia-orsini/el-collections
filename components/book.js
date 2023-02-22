
export default function Book(props) {
  const options = { month: 'long', day: 'numeric' };
  return (
    <div className="sm:mt-2 mt-2 mx-auto border border-black font-semibold rounded px-2 sm:w-80 w-72 text-left">
      <a href={props.link && `bookNotes/${props.id}`}>{props.title}</a>
      <p className="font-normal tracking-wide text-sm uppercase">{props.author}</p>
      <hr className="border-black my-0" />
      <p className="text-sm font-light">{new Date(props.dateFinished).toLocaleDateString("en-GB", options)}</p>
    </div>
  );
}
