
export default function Book(props) {
  return (
    <div className="sm:mt-10 mt-0 mx-auto border border-black font-semibold rounded px-2 sm:w-80 w-72">
      {props.title}
      <p className="font-normal tracking-wide text-sm uppercase">{props.author}</p>
      <hr className="border-black my-0" />
      <p className="text-sm font-light">{props.dateFinished}</p>
    </div>
  );
}
