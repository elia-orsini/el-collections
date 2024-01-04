export default function SwitchButton({ setState, state, stateOne, stateTwo }) {
  return (
    <button
      className="flex mx-auto mt-6 bg-black text-sm"
      onClick={() => setState(!state)}
    >
      <span
        className={`${
          state ? "text-white" : "bg-white"
        } border border-black px-6 py-1`}
      >
        {stateOne}
      </span>
      <span
        className={`${
          !state ? "text-white" : "bg-white"
        } border border-black px-6 py-1`}
      >
        {stateTwo}
      </span>
    </button>
  );
}
